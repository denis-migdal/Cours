<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM3 (TW)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/index.css"  rel="stylesheet">
        <script  src="/skeleton/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# CM3: Exécuter du code dans une page Web (côté client)

## Du code sur le navigateur ?

HTML permet de définir la structure de la page Web, et CSS son affichage.

Cependant, pour générer du contenu dynamique et gérer les interactions avec l'utilisateur, il est nécessaire de pouvoir exécuter du code arbitraire sur le navigateur.

Pour cela, le navigateur est capable d'interpréter nativement deux langages :
- le *JavaScript* ;
- le *WebAssembly* (une sorte d'assembleur pour navigateur).

Pour utiliser d'autres langages, il faut alors les convertir soit en JavaScript, soit en WebAssembly (e.g. avec emscriptem).

⚠ Contrairement à JavaScript, le WebAssembly n'a pas un accès direct au DOM.

Afin de vous éviter d'avoir à apprendre un nouveau langage, nous utiliserons *Brython* qui permet d'exécuter du code Python sur le navigateur. L'un des avantages de Brython est qu'il permet d'utiliser les API natives du navigateur.

Pour les VCOD, nous verrons par la suite TypeScript en *Programmation Web* (S4) et *Programmation Web pour la Visualisation* (S5). Vous apprendrez donc un nouveau langage, mais serez déjà familiarisés avec les API utilisées.

### Exécuter du code dans la page Web

Dans l'en-tête de la page Web, <script type="c-html"><script></script> permet d'exécuter du code sur la page :
<script type="c-html">
<script src="<h>$JS_FILE</h>" type="module" <h>[defer|async]</h>><xscript>
</script>

💡 <script type="c-html">type="module"</script> indique le type du script (ici un module JavaScript).

💡 <script type="c-html"><h>[defer|async]</h></script> permet d'indiquer quand exécuter le code inclus :
- par défaut : exécuter le script avant d'interpréter le reste de la page (à éviter).
- <script type="c-html">async</script> : continuer à interpréter la page Web pendant que le script se télécharge.
- <script type="c-html">defer</script> : commencer à télécharger le script, mais attendre que la page ai finie de se charger avant de l'exécuter.

⚠ Il recommandé d'attendre que la page ai finie de se charger avant de la manipuler. En effet, si le code HTML n'a pas fini d'être interprété lors de l'exécution du script, certains éléments ne seront pas encore chargés dans le DOM.

### La console de la page Web

Les erreurs survenant durant l'exécution du code sont affichées dans la *console* de la page Web. [TODO: ouvrir la console de la page Web]

La console gère plusieurs niveau d'affichages dont vous pouvez filtrer l'affichage :
- <script type="c-js">console.debug("...")</script>
- <script type="c-js">console.info("...")</script>
- <script type="c-js">console.log("...")</script> : par défaut.
- <script type="c-js">console.warn("...")</script>
- <script type="c-js">console.error("...")</script> : affiche aussi la pile d'appel.

💡 Vous pouvez formatter l'affichage dans la console en préfixant le texte par `%c`, e.g.
<js-code class="block">console.log("%cOK", "color: red")</script> 

💡 Vous pouvez manipuler la console via :
- <script type="c-js">.clear()</script> : effacer la console.
- <script type="c-js">.group[Collapsed](<h>$NAME</h>)</script>/<script type="c-js">.groupEnd()</script> : ouvre/ferme un groupe indenté qui peut être replié (*collapsed*) ou déplié.

💡 `console` offre d'autres fonctions d'affichages :
- <script type="c-js">.assert(<h>$COND</h>, "...")</script> : affiche une erreur si <script type="c-js">$COND</script> est faux.
- <script type="c-js">.dir()/.dirxml()</script> : afficher les propriétés d'un objet.
- <script type="c-js">.table(...)</script> : afficher le(s) object(s) sous la forme d'un tableau.
- <script type="c-js">.trace()</script> : afficher la pile d'appel.

💡 Cette console permet aussi d'entrer du code JavaScript à exécuter grâce à une interface *REPL* (*Read–eval–print loop*).

### Spécificités de Brython

L'API du navigateur est accessible à partir du module <py-code>browser.window</py-code> :
<py-code>from browser import window</py-code>

En JavaScript, <script type="c-js">window</script> représente la "fenêtre" de la page Web actuelle. Il contient l'ensemble des variables/classes/fonctions globales de la page Web. En particulier, <script type="c-js">window.document</script> représente l'arbre DOM de la page Web.

💡 En JavaScript, <script type="c-js">window</script> est implicite, i.e. on peut écrire <script type="c-js">document</script> au lieu de <script type="c-js">window.document</script>. En Brython, il faudra obligatoirement expliciter <script type="c-js">window</script>.

⚠ Afin que les objets Python s'affichent correctement, il est important d'utiliser la version Brython de <script type="c-js">console</script> en l'important via :
<py-code class="block">from browser import console</py-code>

⚠ Brython a aussi du mal à distinguer les classes des fonctions JavaScripts. Pour instancier une nouvelle classe il faudra ainsi écrire <py-code>window.URL.new()</py-code> au lieu de <py-code>URL()</py-code>. [TODO: corrigé par SBrython]

## Manipulation du DOM

### Sélecteurs

Pour interagir avec le DOM, il convient de sélectionner les éléments HTML sur lesquels on souhaite interagir.

Pour cela on utilise <script type="c-html">.querySelector[All]\()</script> qui retourne le (ou les) **descendants** de <script type="c-html"><h>$ELEM</h></script> correspondant au sélecteur <script type="c-html"><h>$SELECTOR</h></script> :
<script type="c-html">
    <h>$ELEM</h>.querySelector[All](<h>$SELECTOR</h>)
</script>

💡 <script type="c-html">.closest(<h>$S</h>)</script> retourne le premier **ancêtre** correspondant au sélecteur <script type="c-html"><h>$S</h></script>.

💡 <script type="c-html">.matches(<h>$SELECTOR</h>)</script> retourne un booléen indiquant si l'élément correspond au sélecteur <script type="c-html"><h>$S</h></script>.

💡 Dans un sélecteur, <script type="c-css">:scope</script> permet de désigner l'élément à partir du lequel on appelle ces fonctions.

💡 Vous pouvez utiliser ces fonctions sur <script type="c-html">document</script>, mais aussi sur :
- <script type="c-html">document.documentElement</script> : la racine (<script type="c-html"><html></script>).
- <script type="c-html">document.head</script>
- <script type="c-html">document.body</script>

💡 Il existe aussi les sélecteurs [XPath](https://developer.mozilla.org/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript), plus puissants, mais plus complexes.

### Créer un élément HTML

Vous pouvez aussi créer un élément HTML via :
- <script type="c-js"><h>$E</h>.clone(true)</script> : duplique l'élément <script type="c-js"><h>$E</h></script>.
- <script type="c-js">document.createElement(<h>$N</h><h>[, {is: $IS}]</h>)</script> : créé un élément de nom <script type="c-js"><h>$N</h></script>.

### Manipuler les attributs et classes

En premier lieu il est possible de modifier les attributs et les classes d'un élément.

<table>
    <thead>
        <tr>
            <th>
                Opération
            </th>
            <th>
                Classes
            </th>
            <th>
                Attributs
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>Lister</i></td>
            <td><script type="c-js"></script></td>
            <td><script type="c-js">.getAttributeNames()</script></td>
        </tr>
        <tr>
            <td><i>Obtenir</i></td>
            <td><script type="c-js"></script></td>
            <td><script type="c-js">.getAttribute(<h>$N</h>)</script></td>
        </tr>
        <tr>
            <td><i>Ajouter</i></td>
            <td><script type="c-js">.classList.add(<h>$C[,...]</h>)</script></td>
            <td><script type="c-js">.setAttribute(<h>$N</h>, <h>$V</h>)</script></td>
        </tr>
        <tr>
            <td><i>Supprimer</i></td>
            <td><script type="c-js">.classList.remove(<h>$C[,...]</h>)</script></td>
            <td><script type="c-js">.removeAttribute(<h>$N</h>)</script></td>
        </tr>
        <tr>
            <td><i>Basculer</i></td>
            <td><script type="c-js">.classList.toggle(<h>$C</h><h>[, $F]</h>)</script></td>
            <td><script type="c-js">.toggleAttribute(<h>$N</h><h>[, $F]</h>)</script></td>
        </tr>
        <tr>
            <td><i>Contient ?</i></td>
            <td><script type="c-js">.classList.has(<h>$C</h>)</script></td>
            <td><script type="c-js">.hasAttribute(<h>$N</h>)</script></td>
        </tr>
    </tbody>
</table>

💡 <script type="c-js">.tagName</script> permet d'obtenir le nom de la balise HTML.

### Manipuler les attributs data-*

Les attributs <script type="c-html">data-*</script> sont un peu particuliers. En effet, ils peuvent être manipulés via <script type="c-js">.(get|set|remove|toggle|has)Attribute()</script>, mais aussi via <script type="c-js">.dataset</script> qui se manipule comme un dictionnaire associatif. Chaque clé <script type="c-js"><h>$KEY</h></script> de <script type="c-js">.dataset</script> correspondant à un attribut <script type="c-html">data-<h>$KEY</h></script> de l'élément HTML.

Ils sont utilisés afin que les développeurs puissent définir des attributs personnalisés, sans entrer en conflit avec les attributs définis par HTML, e.g. <script type="c-html">data-title</script>.

### Manipuler le style 

La modification de l'affichage d'un élément se fait usuellement via la modification de ses classes. Il est cependant tout à fait possible de manipuler directement ses propriétés CSS. Dans ce cas de figure, on préfère généralement se limiter à la manipulation des propriétés personnalisées.

Les styles peuvent être accédés de deux manières distinctes :
- <script type="c-js"><h>$E</h>.style</script> : les styles **déclarés** sur <script type="c-js"><h>$E</h></script> ;
- <script type="c-js">getComputedStyle(<h>$E</h>)</script> : les styles **calculés** appliqués sur <script type="c-js"><h>$E</h></script> (en lecture seule).

Il est alors possible d'accéder ou de modifier les propriétés CSS via :
<table>
    <thead>
        <tr>
            <th>
                Opération
            </th>
            <th>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>Obtenir</i></td>
            <td><script type="c-js">.getPropertyValue(<h>$N</h>)</script></td>
        </tr>
        <tr>
            <td><i>Définir</i></td>
            <td><script type="c-js">.setProperty(<h>$N</h>, <h>$V</h>)</script></td>
        </tr>
        <tr>
            <td><i>Supprimer</i></td>
            <td><script type="c-js">.removeProperty(<h>$N</h>)</script></td>
        </tr>
    </tbody>
</table>

⚠ Pour obtenir des positions d'éléments aisément comparables, utilisez <script type="c-js">.getBoundingClientRect()</script> qui retourne la position relativement à la zone d'affichage (i.e. la fenêtre).

### Manipuler le contenu

Il existe beaucoup de manière d'obtenir un (ou des) élément(s) à partir d'un autre. Nous verrons les plus génériques :
- <script type="c-js">.parentElement</script> : le père d'un élément.
- <script type="c-js">.children</script> : la liste des éléments fils de l'élément.
- <script type="c-js">.childNodes</script> : idem, mais inclus aussi les contenus autres, e.g. textes.

Il existe beaucoup de manière de modifier le contenu d'un élément. Nous verrons les plus génériques :
- <script type="c-js">.textContent</script> permet d'accéder et de définir le contenu **textuel** d'un élément.
- <script type="c-js">.append(<h>$N[,...]</h>)</script> : ajouter les noeud <script type="c-js"><h>$N</h></script> (éléments ou textes).
- <script type="c-js">.remove()</script> : retirer l'élément de son père.
- <script type="c-js">.replaceWith(<h>$N</h>)</script> : remplace l'élément par <script type="c-js"><h>$N</h></script> dans son père.
- <script type="c-js">.replaceContent(<h>$N[,...]</h>)</script> : remplace le contenu de l'élément par <script type="c-js"><h>$N</h></script>.

⚠ Un élément ne peut être qu'à un seul endroit à la fois. L'insérer dans un élément le retirera donc de son précédent père.


## Événements

->  [zone d'affichage, comparer des positions sinon infernal]
-> .scroll()

### Principe

-> boucle d'events & promesses async (différent en Python) (corrigé avec SBrython)

-> trigger

### Types d'évents

TODO...

### Delegated events

### Debounce/Throttle/setAnimationFrameRequest/hoist.

+ remove from DOM ?

### Signaux


## Formulaires et manipulation d'URL

- validation (cf CM? avec regex & zod)
- History/location.

## Autres éléments d'intéractions

-> attrs
-> dialog/popover/details-summary
-> CSS aussi... / caroussel / etc.

## Autres choses possibles

- manipuler le shadowRoot (cf PW?)
- calculs webworker/serviceworker/worklet cf PWV
- stocker côté client (...) cf PWV
- dessiner canvas et animations (...) cf ?
- iframe cf CM4?
- fetch/download CM4?
- générateur cf PWV (infini ou très gros)
- components real API (cf PW)

-> profile/profileEnd() => profiler (perfs) -> CM5 ?

⚠ Pour des raisons de sécurité, ce code arbitraire n'a pas accès aux ressources locales (i.e. sur votre poste de travail), ou aux autres page Web. Imaginez en effet qu'à la simple visite d'une page Web, votre navigateur se mette à exécuter un code supprimant tous vos fichiers !



# old 

+ cf README.md

-> order of deps => dev log.


@starting-style for animations

:(user-)valid
:(user-)invalid
:has()


document.
body/head.
rootElement.

activeElement (qui a le focus).
documentElement


# Événements

## Bubble vs Capture

 Dans les navigateurs, les interactions sont gérées via des événements, qui se composent de 2 phases :

- capture

- bubble

**Capture :** La phase de capture est descendante, elle part du noeud racine et descend vers le noeud cible (target) final. Par exemple, lorsque vous cliquez sur un élément, l'événement de clic va d'abord partir du document, puis par le body. Le navigateur va propager l'événement en se demandant quel fils de l'élément courant est la cible de l'événement, afin de lui transmettre l'événement, puis recommence de manière récursive, l'élément fils cible devenant l'élément courant.

**Bubble :** La phase de buble est montante, elle part du noeud cible (target) final et remonte vers le noeud racine. Si l'événement se propage dans le DOM (`bubble: true`), le navigateur va transmettre l'événement à l'élément père de l'élément courant, puis recommence de manière récursive, l'élément père devant l'élément courant.

## Écouter un événement

```javascript
// [JS] Javascript

function handler(ev) {
    // ev.currentTarget : $ELEM
    // ev.target : source of the event.
    // ev.type   : $EVENT_TYPE
    // ev.detail : $EVENT_DATA (si CustomEvent, cf plus bas)
    // ev.preventDefault() : annuler l'action par défaut du navigateur
    // e.g. lorsqu'on clique sur un lien, empêcher d'aller vers la page.
    // ev.stopImmediatePropagation() : ne pas appeler les autres
    // handleurs pour cet événement.
}

$ELEM.addEventListener($EVENT_TYPE, handler);
// ou
$ELEM.addEventListener($EVENT_TYPE, ev => ... );
```

```python
# [🐍] Python

def handler(ev):
    # ev.currentTarget : $ELEM
    # ev.target : source of the event.
    # ev.type   : $EVENT_TYPE
    # ev.detail : $EVENT_DATA (si CustomEvent, cf plus bas)
    # ev.preventDefault() : annuler l'action par défaut du navigateur
    # e.g. lorsqu'on clique sur un lien, empêcher d'aller vers la page.
    # ev.stopImmediatePropagation() : ne pas appeler les autres
    # handleurs pour cet événement.

$ELEM.addEventListener($EVENT_TYPE, handler)
```

📖 [Plus d'informations dans la documentation.](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## Écouteur délégué

Il arrive qu'on souhaite écouter des événements sur les descendants d'un élément, qui peuvent être ajoutés, déplacés, supprimés, etc. Le problème est que cela nécessiterait de créer un écouteur pour chaque éléments et de les supprimer/ajouter à chaque modifications du DOM.

Heureusement, il est possible d'utiliser un écouteur délégué, i.e. d'écouter l'événement sur le descendant (nécessite que l'événement soit `bubble`, i.e. se propage dans le DOM).

```javascript
// [JS] Javascript

function handler(ev) {
    if( ev.target.matches($CSS_SELECTOR) ) {
        // ...
    }
    // or
    let target;
    if( target = ev.target.closest($CSS_SELECTOR) ) {
        // ...
    }
}

$ELEM.addEventListener($EVENT_TYPE, handler);
```

```python
# [🐍] Python

def handler(ev):
    if ev.target.matches($CSS_SELECTOR):
        # ...
    # or
    if target := ev.target.closest($CSS_SELECTOR):
        # ...

$ELEM.addEventListener($EVENT_TYPE, handler)
```

## Créer un événement

```javascript
// [JS] Javascript

$ELEM.dispatchEvent( new Event($EVENT_TYPE) );
// ou
$ELEM.dispatchEvent( new CustomEvent($EVENT_TYPE, {detail: $EVENT_DATA}) );
```

```python
# [🐍] Python

$ELEM.dispatchEvent( Event.new($EVENT_TYPE) )
# ou
$ELEM.dispatchEvent( CustomEvent.new($EVENT_TYPE, {"detail": $EVENT_DATA}) )
```

💡 Vous pouvez aussi ajouter, au 2ème argument, l'option `bubble: true` pour faire en sorte que l'événement soit bubble, i.e. se propage dans le DOM (par default `bubble: false`).

</main>
    </body>
</html>