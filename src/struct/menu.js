// OBSOLETE, use skeleton menu

const menu = document.querySelector('#menu');

const isMultiCM = document.querySelectorAll('h1').length > 1;
const titles_selector = isMultiCM ? 'h1,h2,h3' : 'h2,h3';
const H_offset = isMultiCM ? 1 : 0;

const titres = document.querySelectorAll(titles_selector);

const lists = [document.createElement('ol')];

if( isMultiCM )
    lists[0].setAttribute('type', 'I'); 

for(let titre of titres) {

    const item = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = titre.textContent;
    link.setAttribute('href', `#${titre.id}`);
    
    item.append(link);


    let list = null;
    switch(titre.tagName) {
        case 'H1':
            list = lists[0];
            lists[1] = document.createElement('ol');
            lists[1].setAttribute('type', '1'); // ?
            item.append(lists[1]);
        break;
        case 'H2':
            list = lists[H_offset];
            lists[H_offset+1] = document.createElement('ol');
            lists[H_offset+1].setAttribute('type', 'a');
            item.append(lists[H_offset+1]);
        break;
        case 'H3':
            list = lists[H_offset+1];
        break;
    }

    list.append(item);
}


menu.append(lists[0]);