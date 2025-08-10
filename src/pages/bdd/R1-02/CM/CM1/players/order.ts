import { PlayerToolbar } from "@Cours/components/PlayerToolbar";
import { SQLDymTable } from "@Cours/components/SQL/SQLDymTable";
import { getOutput } from "@LISS/src";

import "@Cours/components/SQL/SQLDymTable"; // ensure init.

const player    = document.querySelector<PlayerToolbar>("#order-player")!;
const table     = document.querySelector<SQLDymTable>("#order-table")!;
const order_sql = document.querySelector("#order_sql")!;
const list      = document.querySelectorAll("#order-list > li");

const query = [ `SELECT `,
                [4, `DISTINCT `],
                `Date, Ref, Q `,
                [2, "as Nb"],
                [ 1, `\n    FROM Produits`],
                [ 3, `\n    WHERE Ref = 'Gomme'`],
                [ 5, `\n    ORDER BY Q`],
                [ 6, `\n    LIMIT 2`],
                ';'
            ] as (string|[number, string])[];

function buildQuery(step: number) {
    let output = "";
    for(let elem of query) {
      if( Array.isArray(elem) ) {
        if( elem[0] > step && step !== 0 )
          continue;
        elem = elem[1];
      }
      output += elem;
    }

    return output;
}

function buildOutput(step: number) {
    let output: (string|HTMLElement)[] = [];
    for(let elem of query) {
        let output_elem: string|HTMLElement;
        if( ! Array.isArray(elem) )
            output_elem = elem;
        else {
            const html = document.createElement('span');
            html.textContent = elem[1];
            html.classList.toggle("cur", elem[0] === step);
            
            if( elem[0] > step && step !== 0 )
            html.classList.add("notyet");
            output_elem = html;
        }
        output.push(output_elem);
    }

    return output;
}

function doStep(i: number) {

    if( i > 6)
      return player.stop();

    order_sql.replaceChildren( ...buildOutput(i) ); //TODO highlight
    for(let li of list)
      li.classList.toggle("cur", li.getAttribute("step") === `${i}`);

    table.exec( buildQuery(i) );
}

const signal = getOutput<number>(player);

signal.listen( () => doStep(signal.value!) );
doStep(0);