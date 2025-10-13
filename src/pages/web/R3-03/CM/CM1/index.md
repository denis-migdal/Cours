<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM1 (TW)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/index.css"  rel="stylesheet">
        <script  src="/skeleton/index.js"  type="module"     blocking="render"></script>
    </head>
    <body>
        <main>

# HTML5

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

En tout premier lieu, il faut pouvoir indiquer la ressource distante référencée, donc avoir un moyen de l'identifier. Pour cela Tim Berners-Lee va créer le concept d'**URL** (Unique Resource Locator), une chaîne de caractère référençant une ressource distante et structurée de la sorte : <script type="c-text"><h>$PROTO</h>://<h>$SERVER</h>/<h>$FILEPATH</h></script>. 

Il faut ensuite pouvoir récupérer cette ressource. Le problème est que FTP a été conçu pour télécharger/uploader des fichiers par lots. Il n'est alors pas très adapté à des téléchargements ponctuels et temporaires de fichiers uniques. Tim Berners-Lee va alors créer **HTTP** (HyperText Transfert Protocol) qui permet d'obtenir très simplement une ressource à partir de son URL.

Tim Berners-Lee créée aussi le tout premier navigateur Web (`WorldWideWeb`) capable d'accéder à des ressources distantes à partir de son URL. Il supporte alors les protocoles suivants :
- <script type="c-text">http</script>
- <script type="c-text">ftp</script>
- <script type="c-text">file</script> : pour lire des ressources locales.
- <script type="c-text">news</script> : un ancêtre des forums en ligne.

Il ne reste alors plus qu'à définir un type de document SGML qui pourra contenir des liens hypertextes URL, et qui s'affichera dans le navigateur. Pour cela Tim Berners-Lee créée `HTML` (HyperText Markup Langage), une application de SGML.

<!--
https://en.wikipedia.org/wiki/File_Transfer_Protocol#Differences_from_HTTP
https://en.wikipedia.org/wiki/World_Wide_Web#History
https://en.wikipedia.org/wiki/WorldWideWeb#History
-->

## HTML

### Les balises HTML

HTML est un langage permettant de décrire une **structure** via des **balises**, e.g. :
- <script type="c-html"><br/></script> correspond à un retour à la ligne (*<u>br</u>eak line*).
- <script type="c-html"><p>texte</p></script> correspond à un paragraphe (*<u>p</u>aragraph*).

Les éléments qui ne peuvent avoir de contenu s'écrivent avec une balise **auto-fermante** (*self-closing tag*) qui se présente sous la forme suivante : <script type="c-html"><<h>$NAME</h>/></script>.<br/>
<script type="c-html"><h>$NAME</h></script> est le <b>nom de la balise</b> (<i>tag name</i>), il indique le type de l'élément HTML.

Les éléments qui peuvent avoir du contenu, e.g. un paragraphe peut contenir du texte, s'écrivent sous la forme suivante : <script type="c-html"><<h>$NAME</h>><h>$CONTENT</h></<h>$NAME</h>></script>
- <script type="c-html"><<h>$NAME</h>></script> est la <b>balise ouvrante</b> (<i>opening tag</i>).
- <script type="c-html"></<h>$NAME</h>></script> est la <b>balise fermante</b> (<i>closing tag</i>).
- <script type="c-html"><h>$CONTENT</h></script> est le contenu de la balise.

Vous remarquerez que HTML utilise <script type="c-html"><</script> et <script type="c-html">></script> pour marquer le début et la fin d'une balise. Ainsi, <script type="c-html">soit y<x et y>0</script> est interprété par HTML comme étant une balise.

Pour éviter cela, on va échapper les caractères utilisés par HTML via des entités HTML (*HTML entities*) :
- <script type="c-html"><</script> devient <script type="c-html">&lt;</script> (<i><u>l</u>esser <u>t</u>han</i>) ;
- <script type="c-html">></script> devient <script type="c-html">&gt;</script> (<i><u>g</u>reater <u>t</u>han</i>) ;
- <script type="c-html">"</script> devient <script type="c-html">&quot;</script> (<i><u>quot</u>e</i>) ;
- <script type="c-html">&</script> devient <script type="c-html">&amp;</script> (<i><u>amp</u>ersand</i>).

💡 En HTML, les **commentaires** s'écrivent ainsi : <script type="c-html"><!-- <h>$COMMENT</h> --></script>

### Les attributs HTML

Les **attributs HTML** (*HTML attribute*) permettent de configurer les éléments HTML :
- <script type="c-html"><img src="<h>$URL</h>"/></script> affiche l'<u>im</u>a<u>g</u>e présente à l'URL indiquée par l'attribut <script type="c-html">src</script>.
- <script type="c-html"><a href="<h>$URL</h>">lien</a></script> est un lien hypertexte pointant sur l'URL indiqué par l'attribut <script type="c-html">href</script>.

Les attributs HTML sont indiqués dans la balise ouvrante (ou auto-fermante) de l'élément HTML. Le nom de l'attribut est précédé d'un <script type="c-html">=</script> suivi de sa valeur entre guillemets.

💡 Une même balise HTML peut contenir plusieurs attributs, séparés par un espace :
- <script type="c-html"><a href="..." target="_blank">lien</a></script> : ouvrir dans un nouvel onglet.
- <script type="c-html"><a href="..." type="text/csv" download="data.csv">lien</a></script>
  - <script type="c-html">type</script> est le **type MIME** du fichier.
  - <script type="c-html">download</script> au clic, télécharge la ressource.
  - <script type="c-html">download="<h>$FILENAME</h>"</script> indique le nom par défaut du fichier téléchargé.

💡 Certains attributs n'ont pas besoin de valeur et configurent l'élément par leur seule présence. Ce sont les **attributs booléens** (*boolean attributes*), e.g. :
- <script type="c-html"><a href="..." type="text/csv" download>lien</a></script>


Chaque type d'élément HTML a sa propre liste d'attributs qui permettent de le configurer. Il existe cependant des attributs appelés **attributs universels** (*global attributes*) communs à tous les éléments HTML, e.g. :
- <script type="c-html">title</script> permet d'afficher une bulle d'information (<i>tooltip</i>) au survol de l'élément.

## Données structurées

### Listes

Une liste est un élément HTML qui contient plusieurs sous éléments (*<u>l</u>ist <u>i</u>tem*). Les listes peuvent être ordonnées (*<u>o</u>rdered <u>l</u>ist*) ou non (*<u>u</u>nordered <u>l</u>ist*).

<div class="flex-2">
    <div>
    <script type="c-html">
        <ul>
            <li>Item A</li>
            <li>Item B</li>
        </ul>
    </script>
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
        <script type="c-html">
            <ol>
                <li>Item A</li>
                <li>Item B</li>
            </ol>
        </script>
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
    <script type="c-html">
        <table>
            <tbody>
                <tr><td>A</td><td>B</td></tr>
                <tr><td>C</td><td>C</td></tr>
            </tbody>
        </table>
    </script>
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
        <script type="c-html">
            <table>
                <thead>
                    <tr><th>ID</th><th>Nom</th></tr>
                </thead>
                <tbody>
                    <tr><th>1</th><td>Pierre</td></tr>
                    <tr><th>2</th><td>Paul</td></tr>
                </tbody>
            </table>
        </script>
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
        <tr><td><script type="c-html"><strong>A</strong></script></td><td><strong>A</strong></td><td>important (<i><u>strong</u> importance</i>)</td></tr>
        <tr><td><script type="c-html"><em>A</em></script></td><td><em>A</em></td><td>mis en valeur (<i><u>em</u>phasis</i>)</td></tr>
        <tr><td><script type="c-html"><mark>A</mark></script></td><td><mark>A</mark></td><td>marqué</td></tr>
        <tr><td><script type="c-html"><ins>A</ins></script></td><td><ins>A</ins></td><td>inséré (<i><u>ins</u>erted</i>)</td></tr>
        <tr><td><script type="c-html"><del>A</del></script></td><td><del>A</del></td><td>supprimé  (<i><u>del</u>eted</i>)</td></tr>
    </tbody>
</table>

De la même manière, les balises <script type="c-html"><h1>A</h1></script> à <script type="c-html"><h6>A</h6></script> permettent d'indiquer différents niveaux de titres.

<table>
    <thead>
        <tr><td>HTML</td><td>Affichage</td><td>Sens</td></tr>
    </thead>
    <tbody>
        <tr><td><script type="c-html"><h1>A</h1></script></td><td><script type="html-output"><h1>A</h1></script></td><td>titre de niveau 1</td></tr>
        <tr><td><script type="c-html"><h2>A</h2></script></td><td><script type="html-output"><h2>A</h2></script></td><td>titre de niveau 2</td></tr>
        <tr><td><script type="c-html"><h3>A</h3></script></td><td><script type="html-output"><h3>A</h3></script></td><td>titre de niveau 3</td></tr>
        <tr><td><script type="c-html"><h4>A</h4></script></td><td><script type="html-output"><h4>A</h4></script></td><td>titre de niveau 4</td></tr>
        <tr><td><script type="c-html"><h5>A</h5></script></td><td><script type="html-output"><h5>A</h5></script></td><td>titre de niveau 5</td></tr>
        <tr><td><script type="c-html"><h6>A</h6></script></td><td><script type="html-output"><h6>A</h6></script></td><td>titre de niveau 6</td></tr>
    </tbody>
</table>

⚠ Ils ne doivent pas être utilisés pour leur affichage par défaut, qui peut être modifié, mais pour leur **sémantique**, i.e. le *sens* qu'ils donnent. 

⚠ Il ne doit y avoir qu'un seul <script type="c-html"><h1>A</h1></script> par page.

### Sémantique vs affichage

Pour rappel, HTML décrit la **structure** d'une page Web, mais pas la manière dont les éléments doivent être affichés dans la page Web.

Il est notamment possible d'intégrer e.g. des données sous la forme de listes ou de tableaux. Cependant, les listes et les tableaux ne doivent être utilisés que pour décrire la structure des données. Ils ne doivent pas être utilisés pour positionner des éléments sur une page Web.

Par exemple, pour afficher une liste d'utilisateurs avec différentes propriétés (e.g. ID, nom, prénom, mails) on utilisera un tableau. En revanche, on évitera de l'utiliser pour un ensemble d'images s'affichant sous la forme d'une grille.

Un tableau a un nombre de colonnes et de lignes fixe. Une grille quant à elle peut avoir un nombre de colonnes et de lignes variables afin d'adapter l'affichage à l'espace disponible, e.g. lié à la largeur de l'écran.

## Structure d'une page Web

### L'arbre DOM

Comme nous l'avons vu, un élément HTML peut contenir du texte ou d'autres éléments HTML. Il est d'ailleurs très fréquent d'utiliser les **conteneurs génériques** :
- <script type="c-html"><div>...</div></script> pour grouper un contenu dans un "bloc".
- <script type="c-html"><span>...</span></script> se comporte comme du texte inséré à la ligne courante.

<div class="flex-2">
    <script type="c-html">
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
    </script>
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
    <script type="c-html">
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
    </script>
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

<script type="c-html">
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Page title</title>
        </head>
        <body>
            <!-- CONTENT -->
        </body\>
    </html>
</script>

💡 <script type="c-html"><!DOCTYPE html></script> indique le type du fichier (<u>doc</u>ument <u>type</u>).

💡 <script type="c-html"><html></html></script> est le noeud racine, aussi appelé la **racine** (*root*).

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
- <script type="c-html"><thead></thead></script> : en-tête de tableau.
- <script type="c-html"><tbody></tbody></script> : corps de tableau.
- <script type="c-html"><tfoot></tfoot></script> : pied de tableau.

Ces deux éléments sont en réalité identiques dans leur affichage et comportement, leur seule différence est dans le nom de la balise.

De la même manière, les éléments <script type="c-html"><strong>A</strong></script>, <script type="c-html"><em>A</em></script>, etc. ont juste un affichage par défaut différent. Affichage qui peut être aisément modifié et interverti.

💡 L'avantage d'avoir des noms différents est de rendre le code HTML plus explicite, facilitant sa lecture par les machines et les humains. Cependant, à votre niveau, il n'est pas utile de trop en accorder d'importance.

💡 La facilitation de la compréhension de la structure de votre page Web par des machines (e.g. quel est le titre de la page, quels sont les mots clefs importants, etc), impact notamment le SEO (<u>S</u>earch <u>E</u>ngine <u>O</u>ptimization).

### Accessibilité

HTML offre aussi de nombreux attributs afin de faciliter l'accessibilité de vos pages Web, notamment aux personnes souffrant d'handicaps visuels ou moteur.

L'accessibilité est un métier à part entière, il n'est donc pas attendu de vous que vous produisiez des pages Web accessibles.

### Les composants Web

Comme si cela ne suffisait pas, vous pouvez aussi créer vos propres éléments HTML personnalisés (*custom elements*).

Imaginez par exemple une page Web affichant une liste de produits. Chaque produit est structuré et affiché de la même manière avec une image, un nom, et un prix :
<script type="c-html">
    <div class="produit">
        <strong class="nom">Pizza</strong>
        <img src="/assets/pizza.jpg"/>
        <div class="prix">16€</div>
    </div>
</script>

Vous pourriez copier-coller la même structure pour chaque produit, mais cela comporte de nombreux défauts :
- pour en changer la structure, il faudra tous les modifier (avec risques d'oublie).
- le code HTML devient très lourd et verbeux.

Pour éviter cela, vous pouvez définir votre propre élément personnalisé :
<script type="c-html">
    <prod-card nom="Pizza" prix="16"></prod-card>
</script>

Ces éléments personnalisés (*custom elements*) sont créés en associant un nom de balise (doit contenir un <script type="c-html">-</script>) à un composants Web (*Web Components*) dont vous définirez le contenu en HTML :
<script type="c-html">
    <div class="produit">
        <strong class="nom">${name}</strong>
        <img src="/assets/${name}.jpg"/>
        <div class="prix">${price}€</div>
    </div>
</script>

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