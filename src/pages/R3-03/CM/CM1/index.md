<!DOCTYPE html>
<html>
    <head>
        <title>CM1 (Web1)</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <style>
        </style>
        <header></header>
        <main>


# CM1 : HTML5

## Introduction

### Pourquoi apprendre le Web ?

Le Web est de nos jours omniprésent, que ce soit via des :
- **sites Web** servant d'outils de communication (e.g. portefolio, vitrine, documentation en ligne, etc.) ;
- **applications Web** fournissant des services à des utilisateurs sans requérir d'installation, et sans se soucier de la plateforme utilisée.

En Sciences des Données, vous utilisez déjà (ou utiliserez) du Web pour des :
- formulaires en lignes (e.g. via Google form) ;
- exports Web de tableaux de bords ;
- productions de graphiques interactifs via Plotly, RShiny, etc.

Il existe une pléthore d'outils pour le Web. En tout premier lieu, il convient donc de choisir les bons outils pour les bons besoins, en fonction des contraintes du projet. Ces outils étant si nombreux, et en constante évolution, qu'il n'est pas possible de les étudier dans le cadre de cette formation.

Il est ainsi nécessaire d'apprendre les bases du Web afin que vous puissiez plus aisément vous adapter à de nouveaux outils, et les adapter (configurations, plugins, etc) à vos besoins et contraintes spécifiques.

La formation ayant une coloration Cybersécurité, nous verrons aussi quelques notions de sécurité Web, vous permettant d'avoir un recul critique.

### D'où vient le Web ?

#### La problématique

Nous sommes en 1990, Tim Berners-Lee travaille au CERN. À l'époque, la documentation technique du CERN était rédigée via SGML, un méta-langage. SGML découpe les documents en 3 parties :
- le **DTD** (Document Type Definition) : la structure/le format du document.
- le **contenu** : les informations contenues dans le document.
- les **feuilles de styles** : comment afficher les informations.

Le DTD permet l'uniformisation des documents, permettant alors d'aisément traiter des lots de documents, notamment pour des opérations d'indexations, et de recherche.

Les feuilles de styles, quant à elles permettent de séparer le contenu de la présentation. Les ingénieurs peuvent ainsi écrire plus efficacement le contenu technique sans se soucier de la mise en forme. On ajoute ensuite une feuille de style permettant un affichage uniformisé des informations, mais différencié en fonction du support (écran, feuille A4, livre, etc).

À l'époque, les chercheurs au CERN travaillaient sur plusieurs lieux géographiques différents. Il était alors nécessaire de partager de la documentation, à distance. Pour cela ils utilisaient un protocole d'échange de fichiers à distance appelé **FTP** (File Transfert Protocol).

Le problème est que certains documents faisaient référence à d'autres. Pour cela les liens hypertextes sont très pratiques : dans le document, il suffit de cliquer sur le lien pour ouvrir le document référencé.

Sauf que... les liens hypertextes ne marchent que pour des documents locaux, comment ouvrir des documents à distance ?

Tim Berners-Lee va alors créer tout un ensemble d'outils et de concepts afin de résoudre ce problème.

#### Le début du Web

En tout premier lieu, il faut pouvoir indiquer la ressource distante référencée, donc avoir un moyen de l'identifier. Pour cela Tim Berners-Lee va créer le concept d'**URL** (Unique Resource Locator), une chaîne de caractère référençant une ressource distante et structurée de la sorte :
`$PROTO://$SERVER/$FILEPATH`. 

Il faut ensuite pouvoir récupérer cette ressource. Le problème est que FTP a été conçu pour télécharger/uploader des fichiers par lots. Il n'est alors pas très adapté à des téléchargements ponctuels et temporaires de fichiers uniques. Tim Berners-Lee va alors créer **HTTP** (HyperText Transfert Protocol) qui permet d'obtenir très simplement une ressource à partir de son URL.

Tim Berners-Lee créée aussi le tout premier navigateur Web (`WorldWideWeb`) capable d'accéder à des ressources distantes à partir de son URL. Il supporte alors les protocoles suivants :
- `http`
- `ftp`
- `file` : pour lire des ressources locales.
- `news` : un ancêtre des forums en ligne.

Il ne reste alors plus qu'à définir un type de document SGML qui pourra contenir des liens hypertextes URL, et qui s'affichera dans le navigateur. Pour cela Tim Berners-Lee créée le langage `HTML` (HyperText Markup Langage), une application de SGML.

<!--
https://en.wikipedia.org/wiki/File_Transfer_Protocol#Differences_from_HTTP
https://en.wikipedia.org/wiki/World_Wide_Web#History
https://en.wikipedia.org/wiki/WorldWideWeb#History
-->

## HTML



# X


Échange données XML/JSON/text/binaire/etc.
CMS + Brython + Flask + etc.

## Les pages Web

### Les pages Web

💡 Dans un premier temps, nous pourrons assimiler les page Web à un document Word.

Lorsque vous rédigez un document word, usuellement, votre document contient des chapitres, qui eux-même contiennent des sections, qui peuvent contenir des paragraphes, des images, etc.

<div class="flex">
    <div>
        <b><i>Chapitre 1</b></i><br/>
        <i>Section 1.1</i><br/>
        Un peu de texte...<br/>
        <i>Section 1.2</i><br/>
        Une petite image...<br/>
    </div>
    <div>
<pre><code>Document
└── Chapitre 1
    ├── Section 1.1
    │   └── Un peu de texte...
    └── Section 1.2
        └── Une petite image...
</code></pre>
    </div>
</div>

Cela constitue une **hiérarchie** qui peut être représentée sous la forme d'un arbre :
- le **noeud racine** est le document.
- le document contient 1 chapitre.
- le chapitre contient 2 sections.
- etc.

Une page Web... c'est la même chose.


### L'arbre DOM

Dans le cadre d'une page Web, cet arbre est appelé **arbre DOM**, il est assimilable à un arbre généalogique :

<div class="flex-2">
    <div><b>Racine</b> (root) : le tout premier noeud de l’arbre.</div>
    <div><pre>Racine
├── ...
...
</pre>
    </div>
    <div><b>Parent/Fils</b> (parent/child) : noeud (père/parent) contenant d'autres noeuds (enfant/fils).</div>
    <div><pre>Parent
├── Enfant
...
</pre>
    </div>
    <div><b>Ancêtre/descendant</b> (ancestor/descendant) : père, ou père d'un ancêtre, (ancêtre) d'un autre noeud (descendant).</div>
    <div><pre>Ancêtre
├── Descendant
... ├── Descendant
   ...
</pre>
    </div>
    <div><b>Frères</b> (siblings) : noeuds de même père.</div>
    <div><pre>...
├── Frère
└── Frère
</pre>
    </div>
</div>

### L'inspecteur et le langage HTML

Lorsqu'on souhaite éditer un document Word, on ne modifie pas directement le fichier .odt/.docx. Pour cela, on utilise un logiciel de traitement de texte qui fournit une interface graphique permettant d'aisément manipuler de tels fichiers.

Pour une page Web, bien que de tels outils existent, e.g. les **systèmes de gestions de contenus** (CMS), il est fréquent, au contraire, d'aller directement modifier les fichiers Web, ou d'en générer dynamiquement le contenu.

Il est ainsi nécessaire de pouvoir représenter l'arbre DOM dans un format aisément lisible et modifiable par un humain. Pour ce faire on utilise le langage **HTML** dont la structure est très simple.

[+inspecteur]

Chaque élément de la page Web est représentée sous la forme d'une **balise HTML** (html tag) : <html-code><<var>$tagname</var>/></html-code>. Le nom de la balise (tagname) représente le type de l'élément, par exemple :
- <html-code>&lt;input/&gt;</html-code> est un élément de saisie.
- <html-code>&lt;img/&gt;</html-code> est une image.

# OLD

-> on peut le voir avec l'inspecteur -> c'est du HTML (h4ck cf US)
    -> body vs head (méta-donnée vs contenu)
    -> c'est des tags
        -> <!-- ... --> : commentaire.
        -> body/p : fils.
        -> br/ auto-fermant
        -> entités : < > : confondre avec un tag ?
    -> en-tête (méta-donnée) 
            -> meta charset (autres méta-données)
            [onglet] :
            -> title
            -> link favicon
            + juste évoquer + preview (discord/fb/google) -> pas normalisé
                - "og:" (Discord) [title/desc/image/type/url]
                - "twitter:"
                - "description" : google
        -> attrs.
        -> global attr
            -> title/lang (required for HTML)
            -> id vs class (+ sélecteur)
            -> inspecter élément + tagname ?

    -> plusieurs pages Web
        -> URL/URI + base (sous-sites)
        -> robots.txt + meta robots
    -> pas possible de tout savoir doc + s'inspirer sans copier.
    -> sémantique
    -> autres composants : svg/math/object
    -> ses propres composants
        -> pas des milliers de lignes
        -> répétitions
        -> LISS
    -> network : lazy-load / multi-src. (pas inclus dans page HTML)
        -> pre-load ( <link rel="preload"> )
            https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload
    -> pas beau, mis en page ? -> avant tables, et plein de trucs moches, maintenant CSS \o/

TW HTML
-------

- URL : nom de domaine : à quel serveur s'adresser + URI : quelle page demander, le serveur donne la page qui s'affiche dans le navigateur. URI ~= chemin => absolu/relatif/../etc.
- sélecteur + CSS : voir + tôt ?
	-> inspecteur.

Opti : HTTP2/HTTP3 + lazy load, etc.
	-> network throttling
	-> performances
	-> lighthouse
	-> etc.

TW CSS
------

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
============

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

[CM3 ?]

# CM1 : HTML5

[Motivation? : Pourquoi apprendre à faire des pages Web = utile]

## Les pages Web

### URL et URI


=> lien URL, comment ça fonctionne ???
-> TODO: CM4 ? lien : nom de domaine, fichier...
    => structure serveur, distribue des fichiers (simple) [dans l'intro]

+ "#" `#` permet de scroller jusqu'à l'élément indiqué.
+ "?"


#### Les fils

La forme : <html-code>&lt;tagname/&gt;</html-code> est appelée **balise auto-fermante** (self-closing). Elle est utilisée pour les éléments ne contenant pas de fils.

Si l'élément contient des fils, les fils sont alors inclus entre : 
- une **balise ouvrante** (opening tag) <html-code>&lt;tagname&gt;</html-code>
- une **balise fermante** (closing tag) <html-code>&lt;/tagname&gt;</html-code>

<html-code>
&lt;tagname&gt;
    &lt;img/&gt;
    &lt;div&gt;
        &lt;img/&gt;
    &lt;/div&gt;
&lt;/tagname&gt;
</html-code>

Les fils peuvent être :
- d'autres éléments ;
- du texte ;
- des commentaires <html-code>&lt;!-- un commentaire --&gt;</html-code>.

⚠ Certains caractères sont réservés car utilisés par le langage HTML. Dans les textes, il convient alors de les remplacer par une **entité HTML** :
- `<` devient <html-code>&amp;lt;</html-code>
- `>` devient <html-code>&amp;gt;</html-code>
- `"` devient <html-code>&amp;quot;</html-code>
- `&` devient <html-code>&amp;amp;</html-code>

#### Les attributs HTML


Les **attributs HTML** permettent de "configurer" un élément : <html-code>&lt;tagname <var>$attr_name</var>="<var>$attr_value</var>"/&gt;</html-code>

Par exemple :
- <html-code>&lt;input type="password"&gt;</html-code> est un élément de saisie de mot de passe.
- <html-code>&lt;input type="date"&gt;</html-code> est un élément de saisie de date.
- <html-code>&lt;input type="color"&gt;</html-code> est un élément de saisie de couleur.

💡 Il existe une multitude de balises, d'attributs, et de valeurs possibles pour ces attributs. Il est évident qu'il ne faut pas les apprendre par coeur, mais surtout de retenir la structure du langage HTML, d'avoir une idée de ce qui est possible, et d'être capable de retrouver l'information utile dans la documentation :
- https://developer.mozilla.org/docs/Web/HTML
- https://www.w3schools.com/html/

Il existe cependant quelques attributs HTML un peu spéciaux appelés **attributs universels** (global attributes), utilisables sur toutes balises :
- <html-code>id="ident"</html-code> : identifiant (sélecteur <css-code>#ident</css-code>) ;
- <html-code>class="c1[...]"</html-code> : identifiant (sélecteur <css-code>.c1</css-code>) ;
- <html-code>name="nom"</html-code> : pour les formulaire.
- <html-code>title="..."</html-code> : texte affiché au survol de l'élément.
- <html-code>data-<var>$name</var>="..."</html-code> : données

<todo>En introduire plus tard ? les sélecteurs.</todo>

- hidden (si jamais montré, si présentation : display none)

- draggable
- inert
- popover

- enterkeyhint/inputmode (mobile)

https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes

## Les différents types de balises

### Texte

<ul>
    <li> Un paragraphe (<u>p</u>aragraph) avec un retour à la ligne (<u>br</u>eak line) :
<web-system>
    <script type="html">
        <p>Texte avec un <br/>
        retour à la ligne.</p>
    </script>
    <div class="flex-2">
        <html-output></html-output>
        <web-output></web-output>
    </div>
</web-system></li>
</ul>


### Liens hypertextes

Une grande force du Web est de pouvoir naviguer d'une page Web à une autre via des **liens hypertextes**. Pour cela on utilise la balise `a` (<u>a</u>nchor) dont le fils est le texte à afficher, et l'attribut <html-code>href</html-code> (<u>h</u>ypertext <u>ref</u>erence) l'adresse de la page Web sur laquelle se rendre lorsque le lien est cliqué.

<web-system>
    <script type="html">
        Cliquez <a href="./index.html">ici</a>.
    </script>
    <div class="flex-2">
        <html-output></html-output>
        <web-output></web-output>
    </div>
</web-system>

💡 Le lien peut être **absolu** (commençant par `/`) ou **relatif** (commençant par `./`).<br/>
💡 Pour les **liens externes**, l'URL doit être précisée, e.g. `"https://foo.fr/faa"`.<br/>
💡 L'attribut <html-code>target</html-code> permet d'indiquer si la page web doit être ouverte dans l'onglet courant, dans un nouvel onglet, dans une nouvelle fenêtre, etc.

#### Télécharger des fichiers

Au lieu d'afficher le contenu dans le navigateur, il est aussi possible de forcer son téléchargement grâce à l'attribut <html-code>download</html-code> :

<web-system>
    <script type="html">
        Cliquez <a href="./index.html" download>ici</a>
        pour télécharger.
    </script>
    <div class="flex-2">
        <html-output></html-output>
        <web-output></web-output>
    </div>
</web-system>

💡 Les attributs <html-code>filename</html-code> et <html-code>type</html-code> permettent d'indiquer, respectivement, le nom sous lequel enregistrer le fichier, ainsi que son type.



### Listes

<ul>
<li>Liste non-ordonnée (<u>u</u>nordered <u>l</u>ist):
<web-system>
    <script type="html">
        <ul>
            <li>Item</li>
            <li>Item</li>
        </ul>
    </script>
    <div class="flex-2">
        <html-output></html-output>
        <web-output></web-output>
    </div>
</web-system></li>
<li>Liste ordonnée (<u>o</u>rdered <u>l</u>ist) :
    <ul>
        <li>Attributs: <html-code>type<html-code>, <html-code>start<html-code>, <html-code>reversed<html-code></li>
    </ul>
<web-system>
    <web-option for="type"></web-option>
    <web-option for="type">type="a"</web-option>
    <web-option for="type">type="A"</web-option>
    <web-option for="type">type="i"</web-option>
    <web-option for="type">type="I"</web-option>
    <web-option for="start"></web-option>
    <web-option for="start">start="2"</web-option>
    <web-option for="start">start="3"</web-option>
    <web-option for="order"></web-option>
    <web-option for="order">reversed</web-option>
    <script type="html">
        <ol $type $start $order>
            <li>Item</li>
            <li>Item</li>
        </ol>
    </script>
    <div class="flex-2">
        <html-output></html-output>
        <web-output></web-output>
    </div>
</web-system>
</li></ul>

### Tables

Il est aussi possible d'inclure une table en HTML avec les balises :
- <html-code>tbody</html-code> (<u>t</u>able <u>body</u>) : le corps de la table.
- <html-code>tr</html-code> (<u>t</u>able <u>r</u>)ow : une ligne de la table.
- <html-code>td</html-code> (<u>t</u>able <u>d</u>ata) : une cellule de données de la table.
- <html-code>th</html-code> (<u>t</u>able <u>h</u>eader) : une cellule d'en-tête.

<web-system>
    <script type="html">
        <table>
            <tbody>
                <tr><th>+</th><th>1</th><th>2</th></tr>
                <tr><th>1</th><td>2</td><td>3</td></tr>
                <tr><th>2</th><td>3</td><td>4</td></tr>
            </tbody>
        </table>
    </script>
    <div class="flex-2">
        <html-output></html-output>
        <web-output></web-output>
    </div>
</web-system>

💡 Les attributs <html-code>colspan</html-code> et <html-code>rowspan</html-code> permettent d'étendre une cellule sur plusieurs colonnes et/ou lignes.


### Conteneurs

- div
- span

-> parler sémantiques...
Il existe plus de 135 balises différentes.

- sémantique : on ne les verra pas
- effets seuls : à éviter -> CSS.
- obsolète
- et des trucs plus rares / applications spécifiques.

- moins de la moitié réellement utile.

-> définir ses propres balises

- p
- h1 à h6

=> can be forgotten
- pre / em / strong / del / ins

- header/footer/main/nav/aside.

-> et énormément d'autres
    -> ça peut être bien de les lire une fois pour voir ce qui est possible.

- theader//tfoot
- tr/th/td

### Inclure des ressources

Les pages Web peuvent aussi inclure des ressources multimédia (images, vidéos, son) ainsi que d'autre nature (formules de maths, page Web, PDF, etc).

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

## Format d'une page Web (13)

- html
- head (link/base/meta/style/title)
- body

- window -> document -> html ->


### Sémantique

- caption
- portail
- map/area
- figure/figcaption
- hgroup

- menu

- address
- article

- aside
- footer
- header
- main
- nav
- section
- search

- abbr
- cite
- code

- data
- dfn

- kdb
- mark
- q
- rp/rt
- ruby
- s
- samp

- small

- sub/sup
- time
- var

- blockquote/cite
- dd/dt/dl

- hr
- label

### Obsoletes (car à l'époque pas CSS et stylesheet dégueux)

- embed
- b / i / u
- button
- fieldset / legend

## Composants Web

-> composant Web + LISS
-> template + slot


## Les outils


Les outils
Les outils
La documentation
▶ La documentation :
▶ https://developer.mozilla.org/docs/Web/HTML
▶ https://www.w3schools.com/html/
▶ Les cours :
▶ https://developer.mozilla.org/docs/Learn/HTML/
Introduction_to_HTML/Getting_started
▶ Les exemples :
▶ https://www.w3schools.com/html/html_examples.asp
▶ Les r ´ef ´erences :
▶ https://developer.mozilla.org/docs/Web/HTML/Element
▶ https://www.w3schools.com/tags/ref_byfunc.asp
26/34
Les outils
La documentation
▶ V ´erifier la compatibilit ´e des navigateurs : https://caniuse.com/
27/34
Les outils
La documentation
▶ Attentions aux ´el ´ements d ´epr ´eci ´es !
28/34
Les outils
Pour ´ecrire de l’HTML
▶ HTML : fichier texte d’extension .html ;
▶ On utilisera Visual Studio Code (supporte aussi R/Python) :
▶ Coloration et auto-compl ´etion ;
▶ Documentation au survol ;
▶ Extension HTML Hint : v ´erification de la syntaxe HTML ;
▶ Extension Live Server : mise `a jour temps r ´eel ;
▶ ChatGPT INTERDIT !
29/34
Les outils
Navigateur
▶ Source : fichier HTML (FF/Chr: ctrl + U ).
▶ Inspecteur : DOM (FF: ctrl + + I / Chr: ctrl + + C ).
30/34
R ´esultat
R ´esultat
Il manque quelque chose...
<body>
<header>
<img src='...'/>
<img src='...'/>
<button>Assistance</button>
<button></button>
</header>
<div>
<span>Messagerie</span>
<button></button>
<div>
<img src='...'/>
<span>87 mail(s)</span>
</div>
</div>
</body>
32/34
R ´esultat
Il manque quelque chose...
▶ HTML : structure de la page Web :
▶ Quels sont les ´el ´ements de la page ?
▶ Quelle est la hi ´erarchie des ´el ´ements ?
▶ Mise en forme de la page ?
▶ Quelles sont les positions, marges, et tailles des ´el ´ements ?
▶ Quelles sont les couleurs, polices, d ´ecorations des ´el ´ements ?
▶ Quels sont les filtres, transformations, transitions, et animations 

# TODO

CM2:
- col/colgroup : css
- span
- wbr : responsive. + page break etc.
- table vs grid : DO NOT USE TABLE FOR POSITIONNING !

### Intéractions : facilite au lieu comportement JS (3)

- dialog
- details
- summary

=> CM2
- noscript
- script

link css -> blocking="render" 

-> color-scheme (css) (<meta>)

-> meta viewport : responsive : mobile
    -> mais + de personnalisation.
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Without a viewport meta tag, mobile devices render pages at typical desktop screen widths and then scale the pages down, making them difficult to read.
(idiot)

</main>
    </body>
</html>