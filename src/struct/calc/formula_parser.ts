import { CalcSheet, ValueType } from "./sheet";

export class Formula {

    #str: string;
    #exec: (sheet: CalcSheet) => ValueType;
    #ranges: Token[];

    constructor(str: string, exec: (sheet: CalcSheet) => ValueType, ranges_token: Token[] = []) {

        this.#str = str;
        this.#exec = exec;
        this.#ranges = ranges_token;
    }

    get rangesToken() {
        return this.#ranges;
    }

    exec(sheet: CalcSheet) {
        return this.#exec(sheet);
    }

    toString() {
        return this.#str;
    }
}

type Token = {
    beg: number,
    end: number,
    value: string,
    type: "string"|"number"|"call"|"range"|"op"
}


function extractToken(str: string, offset: number) {

    while( [' ', '\n', '\t'].includes(str[offset]) ) // ignore whitespaces
        ++offset;

    let token: Partial<Token> = {
        beg: offset
    };

    if(str[offset] === '"') {
        token.type = "string";
        while( str[++offset] !== '"' && str[offset-1] !== '\\') {
            if(offset+1 >= str.length )
                throw new Error('Formula parsing error');
        }
        ++offset;
    } else if( str[offset] === ',' || (str[offset] >= '0' && str[offset] <= '9') ) {
        token.type = "number";
        let hasComma = false;
        while( str[offset] === ',' || str[offset] >= '0' && str[offset] <= '9' ) {

            if( str[offset] === ',' ) {
                if(hasComma === false)
                    throw new Error('Formula parsing error');
                hasComma = true;
            }

            ++offset;
        }

    } else if( str[offset] === '$' || str[offset] >= 'A' && str[offset] <= 'Z') { //+$
        
        while( offset < str.length
                && (str[offset] === '$' || str[offset] >= 'A' && str[offset] <= 'Z'
                                        || str[offset] >= '0' && str[offset] <= '9'
                    ) )
            ++offset;

        token.type = str[offset] === '(' ? 'call' : 'range';

        if( str[offset] === '(' )
            throw new Error('not implemented')
    } else {
        token.type = "op"; // only on char ???
        ++offset;
    }

    token.end = offset;
    token.value = str.slice(token.beg, token.end);

    return token as Required<Token>;
}

class Node {

    children: Node[];
    #fct: (sheet: CalcSheet, ...args:(ValueType)[]) => ValueType;

    constructor(fct: (sheet: CalcSheet, ...args:(ValueType)[]) => ValueType, ...children: Node[]) {
        this.children = children;
        if(children === undefined)
            throw new Error("WTF");
        this.#fct = fct;
    }

    eval(sheet: CalcSheet): ValueType {
        const args = this.children.map( c => c.eval(sheet) );
        return this.#fct(sheet, ...args );
    }
    
}

const op_impl = {
    '*': (_: CalcSheet, a: number, b: number) => a*b,
    '/': (_: CalcSheet, a: number, b: number) => a/b,
    '+': (_: CalcSheet, a: number, b: number) => a+b,
    '-': (_: CalcSheet, a: number, b: number) => a-b,
} as Record<string, (_: CalcSheet, ...args:ValueType[]) => ValueType>;

// https://help.libreoffice.org/latest/en-US/text/scalc/01/04060199.html
const op_prio = [
    [':'], // range
    ['!'], // range intersection
    ['~'], // range union
    ['u.+', 'u.-'], // unary - from right to left...
    ['p.%'], // postfix, /100
    ['^'], // power
    ['*', '/'],
    ['+', '-'],
    ['&'], // string concat
    ['=', '<>', '<', '<=', '>', '>='] // compare
];

let ops: Record<string, number> = {};
for(let i = 0; i < op_prio.length; ++i)
    for(let op of op_prio[i] )
        ops[op] = i;

function tokenlist2Tree(tokens: Token[]): Node {

    if( tokens.length === 1) {

        if( tokens[0].type === "number") {
            const nb = +tokens[0].value.replace(',', '.');
            return new Node( () => nb);
        }
        if( tokens[0].type === "string") {
            const str = tokens[0].value.slice(1,-1);
            return new Node( () => str);
        }
        if( tokens[0].type === "range") { //TODO offset...
            return new Node( (sheet: CalcSheet) => {
                //TODO: if formula too...
                return sheet.getCells(tokens[0].value).cells[0].rawContent as ValueType;
            });
        }
        throw new Error("???");
    }

    if(tokens[0].value === '(' && tokens[tokens.length-1].value === ')')
        return tokenlist2Tree(tokens.slice(1,-1) );

    let cur = {
        priority: op_prio.length,
        idx     : -1
    };

    for(let i = tokens.length - 1; i >= 0; --i) {
        if( tokens[i].type !== "op" ) // call not handled yet...
            continue;

        if( tokens[i].value === ')' ) { // go to first '('
            i = tokens.findIndex( t => t.type === 'op' && t.value === '(');

            if( i === 0)
                break;
            --i;
        }
        //TODO: unary +/-

        const priority = ops[tokens[i].value];

        // priority is reversed.
        if( priority < cur.priority) {
            cur.priority = priority;
            cur.idx      = i;
        }
    }

    console.log(tokens);

    if( cur.idx === -1)
        throw new Error('???');

    // TODO: handle unary op...

    const left  = tokens.slice(0, cur.idx);
    const right = tokens.slice(cur.idx+1);

    const op = op_impl[tokens[cur.idx].value as keyof typeof op_impl];

    return new Node(
        op,
        tokenlist2Tree(left),
        tokenlist2Tree(right)
    );
}

export function parse_formula(str:string) {

    let offset = 1;
    let tokens = new Array<Token>();

    while( offset < str.length) {
        let curToken = extractToken(str, offset);
        tokens.push( curToken );
        offset = curToken.end;
    }

    const node = tokenlist2Tree(tokens)!;

    const ranges = tokens.filter(t => t.type === "range" );

    return new Formula(str, (sheet: CalcSheet) => node.eval(sheet), ranges );
}

const fake_sheet = null as unknown as CalcSheet;

console.warn('="22"'   , parse_formula('="22"').exec(fake_sheet) );
console.warn('=22'     , parse_formula('=22').exec(fake_sheet) );
console.warn('=22*2'   , parse_formula('=22*2').exec(fake_sheet) );
console.warn('=2+(2*2)', parse_formula('=2+(2*2)').exec(fake_sheet) );
console.warn('=2+2*2'  , parse_formula('=2+(2*2)').exec(fake_sheet) );
console.warn('=2*2+2'  , parse_formula('=2+(2*2)').exec(fake_sheet) );

//extractToken("=2*2", 1);