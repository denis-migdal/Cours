https://web.dev/baseline
https://web.dev/baseline/2024
https://web.dev/series/baseline-newly-available
https://web.dev/articles/origin-private-file-system?hl=en
https://danburzo.ro/line-height-lh/

https://developer.mozilla.org/en-US/docs/Web/API/FileSystem

https://github.com/tc39/proposals (évolution JS)
https://github.com/tc39/agendas/blob/main/2024/07.md

Deno
https://github.com/denoland/deno/releases/tag/v2.0.3


How to identify dynamic scripts :
https://stackoverflow.com/questions/78758974/stacktraces-how-to-identify-the-script-when-using-dynamic-scripts

JS WTF
https://javascriptwtf.com/

Build MDN (DS)
https://github.com/mdn/content

## TP2

=> demander installation des ext VSC par défaut.
=> vsc n'utilise pas le proxy quand lancé via desktop (marche quand cli)

## CM1

- HTML : normalisé W3C (HTML5)

## CM2

font short hand property !!!

all (-> inherit erreur + autres valeurs pas claires)

background-color -> background

notion de shorthand properties (800 props, mais shorthands donc moins à réellement retenir)
https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
	-> not specified : initial
	-> can't even specify inherit...
	-> can't use var() on normal prop.
    -> peut parfois être intelligent
- 800 keywords mais shorthand properties => utiliser ceux-ci (et ça en fait alors bien moins) - ~16 variants. (expliquer le principe des shorthand properties)

scroll margin vs scroll padding

-> columns pour du texte...

transform/transition/animation -> offset ?

- CSS : normalisé W3C (CSS3)

- besoin slides visuels.

=> table empty-cells + table layout.

=> manque passage rédigés

1h07 (-~5min pour démarrer ?)
	=> j'ai speedé
	=> découper en 2 ???
    => pas le temps de voir des astuces CSS.
	=> pas eu le temps de voir les animations/transitions.
	=> ne pas trop se concenter sur les valeurs différentes de propriétés, montrer plus

=> des fiches bonus à lire chez soit ?
    => color schemes : mode jour/nuit
    => impression de pages
    => animations/transitions ?

## CM3 : Client

-> JS (ECMA) 95", dernière version esX

+Events / boucle d'évent (avec promesses) + yield
+ signaux/effect/computed signal.
+ ?

-> Framework
    -> triche : réécrit, donc peux détecter signaux.
    -> VDOM + efficaces (op sur DOM très coûteux)

=> CSS.registerProperty()
=> Webcomponent : associate JS/CSS/HTML (independant)


CSS form
    -> default
    -> ro/rw

+ history
+ form + name="..."
+ location (?) / URLSearchParams
- hidden (si jamais montré, si présentation : display none)
- draggable
- inert
- popover
- enterkeyhint/inputmode (mobile)

+ flux / reflow / redraw / paint / etc.
+ CSS + opti + CSS perso (the name ?)

+ innerText : seulement texte visible.

+ template + slot ?
Shadow
- exportparts/part
- is
- slot

Templates  
 => FAST
 => insérer des éléments sans passer par un CustomElement.
 => géré par le customElement actuel => evite de longs create...

- popover

mobile
- inputmode
- enterkeyhint

JS
- draggable

### Formulaires (10)

- form
- select
    - option
    - optgroup

- textarea
    - content-editable/spellcheck/writting suggestions <- HTMLContent

- input
    - datalist (obsolète -> JS ?)

- output
- meter/progress


Form:
- autocorrect
- spellcheck
- writtingsuggestions
- accesskey
- autofocus
- contenteditable
- hidden vs display:none
- inert


- dialog
- details
- summary

=> CM2
- noscript
- script

## CM4 : Server

+ notes

+ fetch/compression

Échange données XML/JSON/text/binaire/etc.
.htacess : ctrl d'accès simplifié.
    -> auth: attention : utiliser existing SSO (better)


Les pages Web peuvent aussi inclure des ressources multimédia (images, vidéos, son) ainsi que d'autre nature (formules de maths, page Web, PDF, etc).

[ou opti ?]
- img
    - src
    - loading eager/lazy

- picture/video/audio
    - source
    - track (vidéo/audio)

- svg
- math
- canvas

- iframe (HTML)
    - allow/sandbox
    - src

- object : autre (e.g. PDF)
    - type
    - data (= src) [<= null]

## CM5 opti (?)


-> img decoding attr (lazy load) / fetchpriority / loading
-> network : lazy-load / multi-src. (pas inclus dans page HTML)
    -> pre-load ( <link rel="preload"> )
        https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload

=> hoist/l'autre truc.
=> principe des signaux

-> HTTP2/HTTP3 -> vidéo
-> network throttling
-> performances
-> lighthouse

+ traduction (i18n)

-> robots.txt + meta robot + ref. son site ?

## ?

=> cf vidéos + notes

## ?

-> svg/math/object
-> unit tests/web test + ZOD

# CM1
L’intérêt des composants Web est multiple,
principalement lié à la factorisation qu’ils permettent :
— Éviter de copier/coller de gros blocs HTML lorsqu’une même structure se répète.
— Séparer de manière cohérente les différents éléments du site Web afin d’améliorer la lisibilité du code.
— Lorsque la structure d’un composant Web doit être modifiée, la modification est restreinte à un seul fichier.

# OLD

## CM2 : CSS

CSS : ~800 keywords...
JS : https://developer.mozilla.org/en-US/docs/Web/JavaScript

-> meta
-> fix length & scale : e.g. for print A4/A5/etc.
	/!\ ZOOM vs scale...

-> optimisations : inert+other stuff : draw/reflow [FUCK]

-> fixed vs sticky (! height bug) vs absolute vs float vs grid vs flexbox.

-> color-scheme (css) (<meta>)

-> meta viewport : responsive : mobile
    -> mais + de personnalisation.
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Without a viewport meta tag, mobile devices render pages at typical desktop screen widths and then scale the pages down, making them difficult to read.
(idiot)

-> @property
-> vidéo word wrap

-> bootstrap
-> tailwind

## TP

▶ Extension HTML Hint : v ´erification de la syntaxe HTML ;
▶ Extension Live Server : mise `a jour temps r ´eel ;
▶ ChatGPT INTERDIT !


# Envoyer une requête HTTP

```javascript
// [JS] Javascript
async query() {
    const anwser = await fetch($URL);
    // ou
    const answer = await fetch($URL, {method: "POST", body: $PARAMS);

    if( ! answer.ok )
        throw new Error(`${answer.status}: ${answer.statusText}`);

    const json = await answer.json(); // récupérer du JSON
    const text = await answer.text(); // récupérer du texte
    // autres formats possibles dans la doc.
}

query();
```

```python
# [🐍] Python
async query():
    answer = fetch($URL)
    # ou
    answer = fetch($URL, {"method": "POST", "body": $PARAMS)

    if not answer.ok:
        raise Error(f"{answer.status}: {answer.statusText}");

    json = await answer.json() # récupérer du JSON
    text = await answer.text() # récupérer du texte
    # autres formats possibles dans la doc.


aio.run( query() )
```

📖 Les requêtes de type "GET" (type par défaut) ont leurs paramètres dans l'URL (cf ci-dessous).

📖 Les requêtes de type "POST" ont leurs paramètres dans le corps de la requête (body), i.e. sont chiffrées en HTTPS. Elles peuvent être écrites sous n'importe quelle format : une chaîne de paramètre (comme GET), du JSON, du texte, etc.

📖 [Plus d'informations dans la documentation.](https://developer.mozilla.org/en-US/docs/Web/API/Response)

Pour construire la chaîne de paramètre :

```javascript
// [JS] Javascript

// client
const params = new URLSearchParams();
params.set($NAME, $VALUE)
fetch( `${URL}?${params.toString()}` );

// serveur
const params = new URLSearchParams($STR);
for(let key in params.keys() )
    params.get(key); // retourne undefined si pas trouvé.

params.has($NAME); // retourne un booléen
params.get($NAME) ?? $DEFAULT_VALUE; // avec une valeur par défaut
```

```python
# [🐍] Python

# client
params = URLSearchParams.new()
params.set($NAME, $VALUE)
fetch( f"{URL}?{params.toString()}" )

# serveur
params = URLSearchParams.new($STR);
for key in params.keys():
    params.get(key) # retourne undefined si pas trouvé.

params.has($NAME) # retourne un booléen
```

📖 [Plus d'informations dans la documentation.](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

💡 `location` contient les informations relatives à l'URL de la page actuelle. Vous pouvez ainsi récupérer la chaîne de paramètres via `location.search`, et l'exploiter en la donnant au constructeur de `URLSearchParams`.

# Stocker des données côté client

Précedemment, les données enregistrées côté client étaient stockées sous la forme de cookies, inclues dans l'en-tête de chaque requêtes HTTP envoyées au serveur. Cette technologie est désormais obsolète au profit de `localStorage`, `sessionStorage`, et `IndexDB`. Contrairement aux cookies, les données enregistrées par un site Web (identifié par son nom de domaine) ne peuvent pas être accedées via d'autres noms de domaines.

## LocalStorage/SessionStorage

```javascript
localStorage.setItem($NAME, JSON.stringify( $VALUE ) );
JSON.parse( localStorage.getItem($NAME) ); // returne null si inexistant
localStorage.removeItem($NAME);
```

La différence entre `localStorage` et `sessionStorage` est que le dernier est unique à chaque onglet du navigateur et sera supprimé lorsque l'onglet sera fermé. Les données stockées par un site Web ne peuvent généralement pas dépasser 10Mo.

📖 [Plus d'informations dans la documentation.](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

## IndexDB

L'usage d'indexDB est bien plus complexe que localStorage ou sessionStorage, mais permet de stocker des données plus volumineuses. Vous pouvez le voir comme une base de données stockée côté client.

Son usage étant complexe et peu fréquent, nous ne l'étudierons pas en cours.

📖 [Plus d'informations dans la documentation.](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)

