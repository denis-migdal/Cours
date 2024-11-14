## TPs
    -> besoin d'un starting project !
    -> besoin sujet dirigé + installation VCS.

## TP2

=> demander installation des ext VSC par défaut.
=> vsc n'utilise pas le proxy quand lancé via desktop (marche quand cli)

=> il faut VRAIMENT un step by step (+ qui ne nécessite pas trop de css -tout est inline au début-) => br ou div ?
=> project skeleton
=> utilisation vsc guider
=> premiers pas.

## CM1

notion de shorthand properties (800 props, mais shorthands donc moins à réellement retenir)

- HTML : normalisé W3C (HTML5)

## CM2

font short hand property !!!

all

background-color -> background

https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
	-> not specified : initial
	-> can't even specify inherit...
	-> can't use var() on normal prop.

-> peut parfois être intelligent	

scroll margin vs scroll padding

-> columns pour du texte...

transform/transition/animation -> offset ?

text-*
(dont text-emphasis)

- CSS : normalisé W3C (CSS3)
- 800 keywords mais shorthand properties => utiliser ceux-ci (et ça en fait alors bien moins) - ~16 variants. (expliquer le principe des shorthand properties)

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

-> Plein de langages
    -> JS (ECMA) 95", dernière version esX
        -> fait en 10j plein de problèmes
    -> WebASM (récent) mais pas accès DOM.
    -> langage -> JS (e.g. TS)
    -> Appel Java : problème de sécurité : code arbitraire, mais utilise VM normale avec restrictions ad hoc -> autorisation (e.g. accès fichier) -> mais autorise => utilisateur donne vulnérabilité.


+Events / boucle d'évent (avec promesses) + yield
+ signaux/effect/computed signal.
+ ?

-> Framework
    -> triche : réécrit, donc peux détecter signaux.
    -> VDOM + efficaces (op sur DOM très coûteux)

CSS form
    -> default
    -> ro/rw

=> computedStyleMap() / style / prop.
=> CSS.registerProperty()
=> set prop ?

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
    <style scoped>
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