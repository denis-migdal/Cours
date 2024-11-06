## CM2 

=> en réalité, classes + <b> peuvent être utilisés par facilité.
Y'a pas de police.

=> Webcomponent & CSS.

## CM3 : Client

=> Webcomponent : associate JS/CSS/HTML (independant)

+ notes

global context
- window -> document -> html ->

+ history
+ form + name="..."
+ location (?) / URLSearchParams
- hidden (si jamais montré, si présentation : display none)
- draggable
- inert
- popover
- enterkeyhint/inputmode (mobile)

+ data-
+ DOM manipulation

+ flux / reflow / redraw / paint / etc.
+ CSS + opti + CSS perso (the name ?)
+ advanced selector (TextNode)

+ template + slot ?
Shadow
- exportparts/part
- is
- slot

Is it usefull ?
  <template shadowrootmode="open">
    <style>
      p {
        padding: 8px;
        background-color: plum;
      }
    </style>
    <p>I'm in the shadow DOM.</p>
  </template>
  
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

-> robots.txt + meta robot + ref. son site ?

## ?

=> cf vidéos + notes

## ?

-> svg/math/object
-> unit tests/web test + ZOD

# OLD

## CM2 : CSS


CM2:
- col/colgroup : css
- span
- wbr : responsive. + page break etc.
- table vs grid : DO NOT USE TABLE FOR POSITIONNING !

▶ HTML : structure de la page Web :
▶ Quels sont les ´el ´ements de la page ?
▶ Quelle est la hi ´erarchie des ´el ´ements ?
▶ Mise en forme de la page ?
▶ Quelles sont les positions, marges, et tailles des ´el ´ements ?
▶ Quelles sont les couleurs, polices, d ´ecorations des ´el ´ements ?
▶ Quels sont les filtres, transformations, transitions, et animations 

CSS : style -> do not use

Cours, pas résumé => cheat sheet mais étu doivent aussi faire efforts de synthèse.

CSS : ~800 keywords...
JS : https://developer.mozilla.org/en-US/docs/Web/JavaScript

-> meta
-> fix length & scale : e.g. for print A4/A5/etc.
	/!\ ZOOM vs scale...
-> grid
-> flex-box
-> media queries : redimentionner, etc.

-> optimisations : inert+other stuff : draw/reflow [FUCK]

-> fixed vs sticky (! height bug) vs absolute vs float vs grid vs flexbox.

link css -> blocking="render" 

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