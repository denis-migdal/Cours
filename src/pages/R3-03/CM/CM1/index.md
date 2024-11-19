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

### Pourquoi apprendre le Web ?

Le Web est de nos jours omniprésent, que ce soit via des :
- **sites Web** servant d'outils de communication (e.g. portefolio, vitrine, documentation en ligne, etc.) ;
- **applications Web** fournissant des services à des utilisateurs sans requérir d'installation, et sans se soucier de la plateforme utilisée.

En Sciences des Données, vous utilisez déjà (ou utiliserez) du Web pour des :
- formulaires en lignes (e.g. via Google form) ;
- exports Web de tableaux de bords ;
- productions de graphiques interactifs via Plotly, RShiny, etc.

Il existe une pléthore d'outils pour le Web. En tout premier lieu, il convient donc de choisir les bons outils pour les bons besoins, en fonction des contraintes du projet. Ces outils étant si nombreux, et en constante évolution, qu'il n'est pas possible de tous les étudier dans le cadre de cette formation.

Il est ainsi nécessaire d'apprendre les bases du Web afin que vous puissiez plus aisément vous adapter à de nouveaux outils, et les adapter à vos besoins et contraintes spécifiques (configurations, plugins, etc).

La formation ayant une coloration Cybersécurité, nous verrons aussi quelques notions de sécurité Web, vous permettant d'avoir un recul critique sur le Web.

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

Il ne reste alors plus qu'à définir un type de document SGML qui pourra contenir des liens hypertextes URL, et qui s'affichera dans le navigateur. Pour cela Tim Berners-Lee créée `HTML` (HyperText Markup Langage), une application de SGML.

<!--
https://en.wikipedia.org/wiki/File_Transfer_Protocol#Differences_from_HTTP
https://en.wikipedia.org/wiki/World_Wide_Web#History
https://en.wikipedia.org/wiki/WorldWideWeb#History
-->

## HTML

### Les balises HTML

HTML est un langage permettant de décrire une **structure** via des **balises**, e.g. :
- <html-code>\<br/\></html-code> correspond à un retour à la ligne (*<u>br</u>eak line*).
- <html-code>\<p\>texte\</p\></html-code> correspond à un paragraphe (*<u>p</u>aragraph*).

Les éléments qui ne peuvent avoir de contenu s'écrivent avec une balise **auto-fermante** (*self-closing tag*) qui se présente sous la forme suivante : <html-code class="d4rk">\<<var>$NAME</var>/\></html-code>.<br/>
<html-code class="d4rk"><var>$NAME</var></html-code> est le **nom de la balise** (*tag name*), il indique le type de l'élément HTML.

Les éléments qui peuvent avoir du contenu, e.g. un paragraphe peut contenir du texte, s'écrivent sous la forme suivante : <html-code class="d4rk">\<<var>$NAME</var>\><var>$CONTENT</var>\</<var>$NAME</var>\></html-code>
- <html-code class="d4rk">\<<var>$NAME</var>\></html-code> est la **balise ouvrante** (*opening tag*).
- <html-code class="d4rk">\</<var>$NAME</var>\></html-code> est la **balise fermante** (*closing tag*).
- <html-code class="d4rk"><var>$CONTENT</var></html-code> est le contenu de la balise.

Vous remarquerez que HTML utilise <html-code>\<</html-code> et <html-code>\></html-code> pour marquer le début et la fin d'une balise. Ainsi, <html-code>soit y[x et y]0</html-code> est interprété par HTML comme étant une balise.

Pour éviter cela, on va échapper les caractères utilisés par HTML via des entités HTML (*HTML entities*) :
- <html-code>\<</html-code> devient <html-code>\&lt;</html-code> (*<u>l</u>esser <u>t</u>han*) ;
- <html-code>\></html-code> devient <html-code>\&gt;</html-code> (*<u>g</u>reater <u>t</u>han*) ;
- <html-code>"</html-code> devient <html-code>\&quot;</html-code> (*<u>quot</u>e*) ;
- <html-code>\&</html-code> devient <html-code>\&amp;</html-code> (*<u>amp</u>ersand*).

💡 En HTML, les **commentaires** s'écrivent ainsi : <html-code class="d4rk">\<!-- <var>$COMMENT</var> --\></html-code>

### Les attributs HTML

Les **attributs HTML** (*HTML attribute*) permettent de configurer les éléments HTML :
- <html-code class="d4rk">\<img src="<var>$URL</var>"/\></html-code> affiche l'<u>im</u>a<u>g</u>e présente à l'URL indiquée par l'attribut <html-code>src</html-code>.
- <html-code class="d4rk">\<a href="<var>$URL</var>"\>lien\</a\></html-code> est un lien hypertexte pointant sur l'URL indiqué par l'attribut <html-code>href</html-code>.

Les attributs HTML sont indiqués dans la balise ouvrante (ou auto-fermante) de l'élément HTML. Le nom de l'attribut est précédé d'un <html-code>=</html-code> suivi de sa valeur entre guillemets.

💡 Une même balise HTML peut contenir plusieurs attributs, séparés par un espace :
- <html-code>\<a href="..." target="_blank"\>lien\</a\></html-code> : ouvrir dans un nouvel onglet.
- <html-code>\<a href="..." type="text/csv" download="data.csv"\>lien\</a\></html-code>
  - <html-code>type</html-code> est le **type MIME** du fichier.
  - <html-code>download</html-code> au clic, télécharge la ressource.
  - <html-code class="d4rk">download="<var>FILENAME</var>"</html-code> indique le nom par défaut du fichier téléchargé.

💡 Certains attributs n'ont pas besoin de valeur et configurent l'élément par leur seule présence. Ce sont les **attributs booléens** (*boolean attributes*), e.g. :
- <html-code>\<a href="..." type="text/csv" download\>lien\</a\></html-code>


Chaque type d'élément HTML a sa propre liste d'attributs qui permettent de le configurer. Il existe cependant des attributs appelés **attributs universels** (*global attributes*) communs à tous les éléments HTML, e.g. :
- <html-code>title</html-code> permet d'afficher une bulle d'information (*tooltip*) au survol de l'élément.

## Données structurées

### Listes

Une liste est un élément HTML qui contient plusieurs sous éléments (*<u>l</u>ist <u>i</u>tem*). Les listes peuvent être ordonnées (*<u>o</u>rdered <u>l</u>ist*) ou non (*<u>u</u>nordered <u>l</u>ist*).

<div class="flex-2">
    <div>
<html-code class="block">
&lt;ul>
    &lt;li>Item A&lt;/li>
    &lt;li>Item B&lt;/li>
&lt;/ul>
</html-code>
    </div>
    <div>
<ul>
    <li>Item A</li>
    <li>Item B</li>
</ul>
    </div>
</div>

<div class="flex-2">
    <div>
<html-code class="block"><!--
<ol>
    <li>Item A</li>
    <li>Item B</li>
</ol>
--></html-code>
    </div>
    <div>
<ol>
    <li>Item A</li>
    <li>Item B</li>
</ol>
    </div>
</div>

### Tableaux

Les tableaux (*table*) sont composés d'un (ou plusieurs) corps (*<u>t</u>able <u>b</u>ody*) contenant des lignes (*<u>t</u>able <u>r</u>ow*), elles-même composée de cellules (*<u>t</u>able <u>d</u>ata*) :

<div class="flex-2">
    <div>
<html-code class="block"><!--
<table>
    <tbody>
        <tr><td>A</td><td>B</td></tr>
        <tr><td>C</td><td>C</td></tr>
    </tbody>
</table>
--></html-code>
    </div>
    <div>
<table>
    <tbody>
        <tr><td>A</td><td>B</td></tr>
        <tr><td>C</td><td>C</td></tr>
    </tbody>
</table>
    </div>
</div>

💡 Il est possible d'ajouter les cellules d'en-têtes (<u>t</u>able <u>h</u>eader), dans le corps de la table, mais aussi dans une en-tête (<u>t</u>able <u>head</u>er) ou un pied (<u>t</u>able <u>foot</u>er) :

<div class="flex-2">
    <div>
<html-code class="block"><!--
<table>
    <thead>
        <tr><th>ID</th><th>Nom</th></tr>
    </thead>
    <tbody>
        <tr><th>1</th><td>Pierre</td></tr>
        <tr><th>2</th><td>Paul</td></tr>
    </tbody>
</table>
--></html-code>
    </div>
    <div>
<table>
    <thead>
        <tr><th>ID</th><th>Nom</th></tr>
    </thead>
    <tbody>
        <tr><td>1</td><td>Pierre</td></tr>
        <tr><td>2</td><td>Paul</td></tr>
    </tbody>
</table>
    </div>
</div>

### Structure et sémantique

Par défaut, certains éléments HTML modifient l'affichage du texte :

<table>
    <thead>
        <tr><td>HTML</td><td>Affichage</td><td>Sens</td></tr>
    </thead>
    <tbody>
        <tr><td><html-code><!--<strong>A</strong>--></html-code></td><td><strong>A</strong></td><td>important (<i><u>strong</u> importance</i>)</td></tr>
        <tr><td><html-code><!--<em>A</em>--></html-code></td><td><em>A</em></td><td>mis en valeur (<i><u>em</u>phasis</i>)</td></tr>
        <tr><td><html-code><!--<mark>A</mark>--></html-code></td><td><mark>A</mark></td><td>marqué</td></tr>
        <tr><td><html-code><!--<ins>A</ins>--></html-code></td><td><ins>A</ins></td><td>inséré (<i><u>ins</u>erted</i>)</td></tr>
        <tr><td><html-code><!--<del>A</del>--></html-code></td><td><del>A</del></td><td>supprimé  (<i><u>del</u>eted</i>)</td></tr>
    </tbody>
</table>

De la même manière, les balises <html-code>\<h1\>A\</h1\></html-code> à <html-code>\<h6\>A\</h6\></html-code> permettent d'indiquez différents niveaux de titres.

<table>
    <thead>
        <tr><td>HTML</td><td>Affichage</td><td>Sens</td></tr>
    </thead>
    <tbody>
        <tr><td><html-code><!--<h1>A</h1>--></html-code></td><td><h1>A</h1></td><td>titre de niveau 1</td></tr>
        <tr><td><html-code><!--<h2>A</h2>--></html-code></td><td><h2>A</h2></td><td>titre de niveau 2</td></tr>
        <tr><td><html-code><!--<h3>A</h3>--></html-code></td><td><h3>A</h3></td><td>titre de niveau 3</td></tr>
        <tr><td><html-code><!--<h4>A</h4>--></html-code></td><td><h4>A</h4></td><td>titre de niveau 4</td></tr>
        <tr><td><html-code><!--<h5>A</h5>--></html-code></td><td><h5>A</h5></td><td>titre de niveau 5</td></tr>
        <tr><td><html-code><!--<h6>A</h6>--></html-code></td><td><h6>A</h6></td><td>titre de niveau 6</td></tr>
    </tbody>
</table>

⚠ Ils ne doivent pas être utilisés pour leur affichage par défaut, qui peut être modifié, mais pour leur **sémantique**, i.e. le *sens* qu'ils donnent. 

⚠ Il ne doit y avoir qu'un seul <html-code>\<h1\>A\</h1\></html-code> par page.

### Sémantique vs affichage

Pour rappel, HTML décrit la **structure** d'une page Web, mais pas la manière dont les éléments doivent être affichés dans la page Web.

Il est notamment possible d'intégrer e.g. des données sous la forme de listes ou de tableaux. Cependant, les listes et les tableaux ne doivent être utilisés que pour décrire la structure des données. Ils ne doivent pas être utilisés pour positionner des éléments sur une page Web.

Par exemple, pour afficher une liste d'utilisateurs avec différentes propriétés (e.g. ID, nom, prénom, mails) on utilisera un tableau. En revanche, on évitera de l'utiliser pour un ensemble d'images s'affichant sous la forme d'une grille.

Un tableau a un nombre de colonnes et de lignes fixe. Une grille quant à elle peut avoir un nombre de colonnes et de lignes variables afin d'adapter l'affichage à l'espace disponible, e.g. lié à la largeur de l'écran.

## Structure d'une page Web

### L'arbre DOM

Comme nous l'avons vu, un élément HTML peut contenir du texte ou d'autres éléments HTML. Il est d'ailleurs très fréquent d'utiliser les **conteneurs génériques** :
- <html-code>\<div\>...\</div\></html-code> pour grouper un contenu dans un "bloc".
- <html-code>\<span\>...\</span\></html-code> se comporte comme du texte inséré à la ligne courante.

<div class="flex-2">
<html-code class="block"><!--
<div>
    A
    <div>B</div>
    C
</div>
<div>
    D
    <span>E</span>
    F
</div>
--></html-code>
    <div>
        <div>
            A
            <div>B</div>
            C
        </div>
        <div>
            D
            <span>E</span>
            F
        </div>
    </div>
</div>

On peut représenter cette hiérarchie sous la forme d'un arbre, appelé **arbre DOM** où chaque élément HTML est associé à un noeud (*node*), et a pour fils son contenu :

<div class="flex-2">
<html-code class="block"><!--
<div>
    A
    <div>B</div>
    C
</div>
<div>
    D
    <span>E</span>
    F
</div>
--></html-code>
    <div>
<pre><code>Document
├── div
│   ├── A
│   ├── div
│   │   └── B
│   └── C
└── div
    ├── D
    ├── span
    │   └── E
    └── F
</code></pre>
    </div>
</div>

On utilise alors la terminologie suivante :


<div>
    <div><b>Racine</b> (<i>root</i>) : le tout premier noeud de l’arbre.</div>
    <div><pre>Racine
├── ...
...
</pre>
    </div>
    <div><b>Père/Fils</b> (<i>parent/child</i>) : noeud (père) contenant d'autres noeuds (fils).</div>
    <div><pre>Parent
├── Enfant
...
</pre>
    </div>
    <div><b>Ancêtre/descendant</b> (<i>ancestor/descendant</i>) : père, ou père d'un ancêtre, (ancêtre) d'un autre noeud (descendant).</div>
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

### Inspecter une page Web

- inspecteur / sélecteurs

Afficher/inspecter l'arbre DOM de la page

- attributs globaux class/id
- sélecteurs (#, .)

Attributes
        => id et #id (unique)
        => class : pas besoin unique, séparés par un espace.
    => selecteurs + outils ? (inspecteur : all vs clic element - TP?)
        => + tagname + #id + .class (+ de choses + tard)
        => + attr [attr] / [attr=""] + plein d'autres, pas la peine de retenir par coeur.
        => sémantique (e.g. <article>)

### Le format d'une page Web

Jusqu'à présent, nous avons vu des éléments HTML permettant de définir le **corps** (contenu) d'une page Web. Cependant une page Web est composée de :
- une **en-tête** (*head*) définissant les *méta-données* de la page Web.
- un **corps** (*body*) définissant le *contenu* de la page Web.

Les pages Web suivent ainsi la structure suivante :

<html-code class="block"><!--
<!DOCTYPE html>
\<html>
    <head>
        <meta charset="utf-8">
        <title>Page title</title>
    </head>
    \<body>
        <\!-- CONTENT --\>
    \</body\>
\</html>
--></html-code>

💡 <html-code>\<!DOCTYPE html\></html-code> indique le type du fichier (<u>doc</u>ument <u>type</u>).

💡 <html-code>\<html\>\</html\></html-code> est le noeud racine, aussi appelé la **racine** (*root*).

## Encore plus de balises et attributs...

### La documentation

Le langage HTML contient une pléthore de balises (>135) et d'attributs (>131) différents. Cependant, toutes les balises et tous les attributs ne sont pas à utiliser, certains sont :
- **obsolètes** ;
- pas **standards** ;
- **expérimentaux** (changements futurs possibles) ;
- pas supportés par tous les navigateurs.

💡 La [documentation MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) est très utile pour vérifier les attributs que prend un élément HTML donné.

💡 Le site [caniuse](https://caniuse.com/?search=portal) permet de rechercher si un élément ou un attribut est supporté par les navigateurs, et à partir de quelle version.

### Balises sémantiques et SEO

Beaucoup d'éléments HTML sont en réalité "identiques" et se distinguent que par leur **sémantique**, e.g. :
- <html-code>\<thead\>\</thead\></html-code> : en-tête de tableau.
- <html-code>\<tbody\>\</tbody\></html-code> : corps de tableau.
- <html-code>\<tfoot\>\</tfoot\></html-code> : pied de tableau.

Ces deux éléments sont en réalité identiques dans leur affichage et comportement, leur seule différence est dans le nom de la balise.

De la même manière, les éléments <html-code>\<strong\>A\</strong\></html-code>, <html-code>\<em\>A\</em\></html-code>, etc. ont juste un affichage par défaut différent. Affichage qui peut être aisément modifié et interverti.

💡 L'avantage d'avoir des noms différents est de rendre le code HTML plus explicite, facilitant sa lecture par les machines et les humains. Cependant, à votre niveau, il n'est pas utile de trop en accorder d'importance.

💡 La facilitation de la compréhension de la structure de votre page Web par des machines (e.g. quel est le titre de la page, quels sont les mots clefs importants, etc), impact notamment le SEO (<u>S</u>earch <u>E</u>ngine <u>O</u>ptimization).

### Accessibilité

HTML offre aussi de nombreux attributs afin de faciliter l'accessibilité de vos pages Web, notamment aux personnes souffrant d'handicaps visuels ou moteur.

L'accessibilité est un métier à part entière, il n'est donc pas attendu de vous que vous produisiez des pages Web accessibles.

### Les composants Web

Comme si cela ne suffisait pas, vous pouvez aussi créer vos propres éléments HTML personnalisés (*custom elements*).

Imaginez par exemple une page Web affichant une liste de produits. Chaque produit est structuré et affiché de la même manière avec une image, un nom, et un prix :
<html-code class="block">
\<div class="produit"\>
    \<strong class="nom">Pizza\</strong\>
    \<img src="/assets/pizza.jpg"/\>
    \<div class="prix"\>16€\</div\>
\</div\>
</html-code>

Vous pourriez copier-coller la même structure pour chaque produit, mais cela comporte de nombreux défauts :
- pour en changer la structure, il faudra tous les modifier (avec risques d'oublie).
- le code HTML devient très lourd et verbeux.

Pour éviter cela, vous pouvez définir votre propre élément personnalisé :
<html-code class="block">
\<prod-card nom="Pizza" prix="16"\>\</prod-card\>
</html-code>

Ces éléments personnalisés (*custom elements*) sont créés en associant un nom de balise (doit contenir un <html-code>-</html-code>) à un composants Web (*Web Components*) dont vous définirez le contenu en HTML :
<html-code class="block">
\<div class="produit"\>
    \<strong class="nom"\>${name}\</strong\>
    \<img src="/assets/${name}.jpg"/\>
    \<div class="prix"\>${price}€\</div\>
\</div\>
</html-code>

Le navigateur remplira alors automatiquement chacun de vos éléments personnalisés par le contenu que vous aurez spécifié. Cela présente de nombreux avantages :
- rend le code plus lisible et explicite.
- permet d'organiser son code en différents modules/fichiers.
- permet une arborescence de projet plus explicite.
- évite les problèmes liés à la duplication de code.
- performances améliorées (temps de téléchargement et vitesse d'exécution).

💡 Il existe de très nombreuses bibliothèques/framework Web permettant de définir des composants Web. Dans le cadre de ce module, on utilisera LISS à des fins pédagogique pour simplifier la création de vos propres composants Web.

⚠ Les balises auto-fermantes ne sont pas supportées par les composants Web.


# X

## CM1

- https://developer.mozilla.org/docs/Web/HTML
- https://www.w3schools.com/html/
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

- inspecteur HTML (h4ck cf US)
▶ Inspecteur : DOM (FF: ctrl + + I / Chr: ctrl + + C ).

-> en-tête (méta-donnée) 
    -> base (sous-sites) + URI abs/relatif + #?
💡 Le lien peut être **absolu** (commençant par `/`) ou **relatif** (commençant par `./`).<br/>
💡 Pour les **liens externes**, l'URL doit être précisée, e.g. `"https://foo.fr/faa"`.
    -> meta charset (autres méta-données)
    [onglet] :
    -> title
    -> link favicon
    + juste évoquer + preview (discord/fb/google) -> pas normalisé
        - "og:" (Discord) [title/desc/image/type/url]
        - "twitter:"
        - "description" : google

</main>
    </body>
</html>