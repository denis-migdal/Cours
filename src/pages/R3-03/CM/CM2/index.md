<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM2 (TW)</title>
		<meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" blocking="render"></script>
    </head>
    <body class="hide_h1">
        <header></header>
        <main>


# CSS3

Au cours précédent, nous définissions la *structure* des pages Web grâce à HTML.
Il nous faut désormais définir l'*affichage* de notre page Web.

Pour cela, nous utiliserons des fichier CSS (*Cascading Style Sheets*), des *feuilles de styles* à appliquer à notre page Web, qui permettent de définir :
- le *style d'un texte* (police, graisse, style, couleurs, casse, etc.) ;
- le *positionnement* des différents éléments (marges intérieurs/extérieurs, bordures, position, etc.).
- des *animations*.

## Les règles CSS

### Inclure des règles CSS à une page Web

L'ajout d'une feuille de style CSS à la page web se fait via un élément HTML <script type="c-html">link</script> :

<script type="c-html">
    <!DOCTYPE html>
    <html>
      <head>
        <!-- ... -->
        <link rel='stylesheet' href='<h>$CSS_FILE</h>' blocking="render"/>
      </head>
      <body>
        <!-- ... -->
      <xbody>
    </html>
</script>

💡 L'attribut <script type="c-html">blocking="render"</script> permet de bloquer l'affichage de la page tant que la feuille de style n'a pas été chargée. Cela évite un effet de scintillement au chargement de la page.

⚠ S'il est techniquement possible d'ajouter des règles CSS via un élément HTML <script type="c-html"><style></script> ou un attribut HTML <script type="c-html">style</script>, il convient d'éviter cela autant que possible.

### Déclarer une règle CSS

Un fichier CSS est composé de *règles CSS*, elles-même composée :
- d'un *sélecteur* (indique les éléments sur lesquels appliquer la règle CSS) ;
- d'une ou plusieurs *déclarations*, attribuant une *valeur* à une *propriété CSS*.

<script type="c-css">
<h>$SELECTOR</h> {
    <h>$PROPRIETY</h>: <h>$VALUE</h>;
}
</script>

Par exemple, pour aligner le texte des paragraphes à droite :
<script type="c-css">
p {
    text-align: right;
}
</script>

### Les sélecteurs CSS (déplacer CM1)

[TODO: rappel des selecteurs du CM précédent ?]
[+~* :root] + pseudo-élément/classes
[& nested rules]
[slot/hosts]
+ principe des slots + example LISS...

### Valeur par défaut et héritage

Chaque propriété CSS a une valeur par défaut. Lorsque cette dernière est <script type="c-css">inherit</script>, par défaut, sa valeur sera celle de l'élément parent. On dit alors que la propriété CSS est *héritée* :
<script type="c-html">
    <div>Mon texte: <span>Hello</span></div>
</script>
<script type="c-css">
div {
    font-weight: bold;
}
</script>

<script type="c-html"><span></script> ne définissant pas de valeurs pour <script type="c-css">font-weight</script>, il héritera de son père, i.e. sera affiché en gras.

CSS défini d'autres valeurs spéciales :
- <script type="c-css">initial</script> : revient à la valeur par défaut.
- <script type="c-css">unset</script> : revient à la valeur héritée, sinon à celle par défaut.
- <script type="c-css">revert</script> : revient à la valeur par défaut définie par le navigateur.
- <script type="c-css">revert-layer</script> : revient à la valeur définie à la couche précédente (cf suite).

💡 Il est possible de changer toutes les propriétés CSS en une seule déclaration :
<script type="c-css">
\* {
    all: unset;
}
</script>

## Propriétés CSS personnalisées

### Motivation : la gestion des couleurs

En CSS, il est possible de définir les couleurs d'un élément pour :
- <script type="c-css">color</script> : le texte ;
- <script type="c-css">background-color</script> : l'arrière-plan ;
- <script type="c-css">accent-color</script> : les éléments d'interface utilisateur ;
- <script type="c-css">caret-color</script> : le curseur (*caret*).
- la bordure (cf plus tard) ;
- etc.

Pour des raisons de lisibilité, il est recommandé de limiter le nombre de couleurs différentes utilisées sur une même page Web (généralement 3 maximum). Il convient donc de définir un *jeu de couleurs* (*color scheme*) qui sera utilisé dans la page web, généralement composée de :
- une couleur principale ;
- une couleur secondaire ;
- une couleur tertiaire.

💡 Il y a toute une théorie sur la manière de bien choisir les couleurs (règle des 60-30-10, roue de couleurs, contrastes, complémentarité, nuances, etc), mais ce n'est pas l'objet ici.

On souhaiterait alors définir ces couleurs à un seul endroit, et ainsi éviter d'avoir à les copier-coller de partout, ce qui complexifierait toutes modifications futures (i.e. avec le risque d'en oublier un).

D'autant plus que les couleurs ne sont pas toujours simples à définir :
- <script type="c-css">red</script> : par le nom de couleur, mais peu de possibilités ;
- <script type="c-css">rgb(<h>$red</h>, <h>$green</h>, <h>$blue</h>)</script><br/>
  En notation hexadécimal : <script type="c-css">#FF00FF</script> (2 caractères par couleurs) ;
- <script type="c-css">rgba(<h>$red</h>, <h>$green</h>, <h>$blue</h>, <h>$alpha</h>)</script> : avec transparence<br/>
  En notation hexadécimal : <script type="c-css">#FF00FFFF</script> (2 caractères par couleurs) ;

💡 Les designers utilisent de nombreuses autres manières de définir les couleurs : <script type="c-css">hsl</script>, <script type="c-css">hwb</script>, <script type="c-css">\[ok\](lab|lch)</script>, <script type="c-css">color</script>, <script type="c-css">color-mix</script>, <script type="c-css">device-cmyk</script>, etc.

Si cela ne suffisait pas, il faut généralement définir plusieurs jeux de couleurs, e.g. :
- pour un mode sombre/clair ;
- pour l'impression ;
- pour les personnes atteintes de dyschromatopsie ;
- etc.

💡 Pour indiquer les modes de couleurs supportés (l'ordre indique la préférence) :
<script type="c-html">
    <meta name="color-scheme" content="dark light" />
</script>

💡 Pour indiquer les couleurs de thème (modifie la couleur de la fenêtre) :
<script type="c-html">
    <meta name="theme-color" media="(prefers-color-scheme: light)"
       content="blue"/>
    <meta name="theme-color" media="(prefers-color-scheme: dark)"
       content="red" />
</script>

💡 Pour définir une couleur en fonction du mode :
<script type="c-css">color: light-dark(<h>light_color</h>, <h>dark_color</h>);</script>

💡 Pour définir le mode de couleur à utiliser :
<script type="c-css">color-scheme: (dark|light);</script>

💡 Pour définir des règles CSS spécifiques à un mode de couleur :
<script type="c-css">@media (prefers-color-scheme: dark){/* ... \*/}</script> 


Si <script type="c-css">currentcolor</script> permet de réutiliser la couleur définie par <script type="c-css">color</script> pour les autres propriétés CSS, cela n'est pas suffisant. Il nous faut ainsi un moyen de créer une variable contenant la couleur  que nous pourrons ensuite utiliser dans les règles CSS.

### Définir une propriété personnalisée

Pour cela on défini des *propriétés CSS personnalisées* (aussi appelées *variables CSS*) :
<script type="c-css">
@property --<h>$PROPNAME</h> {
    syntax       : "<h>$VALUE_TYPE</h>";
    initial-value: <h>$DEFAULT_VALUE</h>;
    inherit      : true;
}
</script>

Il sera ensuite possible d'utiliser sa valeur grâce à <script type="c-css">var(--<h>$PROPNAME</h>)</script>, e.g. :
<script type="c-css">
@property --primary_color {
    syntax       : "<color>";
    initial-value: light-dark(red, blue);
    inherit      : true;
}

@property --secondary_color {
    syntax       : "<color>";
    initial-value: light-dark(yellow, green);
    inherit      : true;
}

h1 {
    background-color: var(--secondary_color); 
    color           : var(--primary_color);
    border-color    : currentcolor;
}
</script>


#### Définition et héritage

Une fois la propriété déclarée, nous pouvons aussi la (re)définir sur un élément :
<script type="c-css">
:root {
    --primary-color: black;
}
</script>

💡 Si la propriété est définie avec <script type="c-css">inherit: true</script>, elle est alors héritable.

💡 Si aucune valeur n'est définie, alors la valeur de <script type="c-css">initial-value</script> est utilisée.

💡 Il est d'usage de définir les valeurs globale sur <script type="c-css">:root</script>.

💡 Les propriétés personnalisées traversent les shadow root (cf plus tard).

#### Indiquer le type de la valeur

<script type="c-css">syntax</script> décrit le type de valeurs acceptées par la propriété CSS personnalisée, e.g. :
- <script type="c-css">"\*"</script>, <script type="c-css">"\<string\>"</script> ;
- <script type="c-css">"\<number\>"</script>, <script type="c-css">"\<integer\>"</script>, <script type="c-css">"\<percentage\>"</script> ;
- <script type="c-css">"\<length\>"</script>, <script type="c-css">"\<color\>"</script>, <script type="c-css">"\<url\>"</script> ;
- etc.

## Positionnement et dimensionnement des éléments

L'une des fonctions premières de CSS est de positionner et de dimensionner les éléments sur la page Web.

Cependant, il convient de garder à l'esprit que la fenêtre dans laquelle s'affiche la page web est de taille variable. Notamment du fait e.g. de la taille variable de l'écran, ou du redimensionnement de la fenêtre (e.g. en demi-écran).

### Le flux

Par défaut, les éléments sont affichés les uns à la suite des autres :
- <script type="c-html"><div></script> : affiché en bloc, prend toute la ligne.
- <script type="c-html"><span></script> : affiché comme un texte, sur la ligne courante.

Ils correspondent en réalité aux propriétés CSS suivantes :
- <script type="c-css">display: block;</script>
- <script type="c-css">display: inline;</script>

⚠ Un bloc ne peut être contenu dans un élément <script type="c-css">inline</script>.<br/>
⚠ Par défaut, les composants Web sont <script type="c-css">inline</script>.<br/>
⚠ Certaines propriétés CSS sont ignorés sur les éléments <script type="c-css">inline</script>.

Il existe cependant d'autres modes d'affichages :
- <script type="c-css">display: none;</script> : n'affiche pas l'élément.
- <script type="c-css">display: inline-block;</script> : affiche en bloc, sur la ligne courante.
- <script type="c-css">display: [inline-]flex;</script> : positionne les enfants en liste.
- <script type="c-css">display: [inline-]grid;</script> : positionne les enfants en grille.

💡 Il existe d'autres modes d'affichages liées aux tables et aux listes.<br/>
💡 <script type="c-css">visibility: hidden</script> permet d'afficher l'élément mais de manière invisible.

#### Propriétés CSS de flex

<script type="c-css">flex-flow</script> configure la liste :
<script type="c-css">
.flex {
    display  : flex;
    flex-flow: <h>(row|column)</h> <h>[no]wrap</h>;
}
</script>

<script type="c-css">flex-flow</script> configure la manière dont la taille d'un élément de la liste est calculée :
<script type="c-css">
.flex > .item {
    flex: <h>grow</h> <h>shrink</h> <h>basis</h>;
}
</script>

Par défaut, l'élément a la taille indiquée par <script type="c-css">basis</script>. L'espace restant est redistribué à l'ensemble des éléments de manière pondérée par <script type="c-css">grow</script>. S'il au contraire il manque de l'espace, les éléments sont réduits de manière pondérée par <script type="c-css">shrink</script>. Cela dans les limites indiquées par <script type="c-css">(min|max)-(width|height)</script> (cf suite).

💡 En pratique :
- <script type="c-css">0</script> sur <script type="c-css">grow</script>/<script type="c-css">shrink</script> **interdit** l’agrandissement/rétrécissement.
- <script type="c-css">1</script> sur <script type="c-css">grow</script>/<script type="c-css">shrink</script> **autorise** l’agrandissement/rétrécissement.
- <script type="c-css">0</script> sur <script type="c-css">basis</script> permet d'obtenir des éléments de **même taille**.

💡 On utilise ainsi généralement :
- <script type="c-css">flex: 1 1 0;</script> : pour des éléments de même taille.
- <script type="c-css">flex: none;</script> : pour des éléments qui ne se redimensionnent pas.

💡 CSS permet de fixer ces différentes propriétés de manière indépendante avec :
- <script type="c-css">flex-direction</script>
- <script type="c-css">flex-wrap</script>
- <script type="c-css">flex-grow</script>
- <script type="c-css">flex-shrink</script>
- <script type="c-css">flex-basis</script>

Vous pourrez trouver plus de détails sur flex sur la documentation MDN, ainsi que sur le lien suivant : https://css-tricks.com/snippets/css/a-guide-to-flexbox/

#### Propriétés CSS de grid

<script type="c-css">grid</script> configure la grille :
<script type="c-css">
.grid {
    display  : grid;
    grid: <h>rows</h>/<h>cols</h>;
}
</script>

<script type="c-css">rows</script> et <script type="c-css">cols</script> définissent respectivement les dimensions des lignes et des colonnes. Il peuvent être définis soit par :
- une liste de dimensions, e.g. <script type="c-css">1fr 2fr</script> pour 2 lignes (ou colonnes).
- <script type="c-css">auto-flow [dense] <h>size</h></script> pour un nombre de lignes (ou colonnes) indéterminé.

💡 <script type="c-css">1fr</script> correspond à une <u>fr</u>action de la dimension.
Par exemple <script type="c-css">2fr 1fr</script> découpe la dimension en 3, la première ligne (ou colonne) est 2x plus grande que la suivante.<br/>
💡 <script type="c-css">repeat(5, 1fr)</script> est une manière plus concise d'écrire <script type="c-css">1fr 1fr 1fr 1fr 1fr</script>.

<script type="c-css">grid-area</script> permet d'indiquer la position et dimension d'un élément de la grille :
<script type="c-css">
.grid > .item {
    /* position \*/
    grid-area: <h>row</h> / <h>col</h>;
    /* dimension \*/
    grid-area: span <h>height</h> / span <h>width</h>;
    /* position + dimension \*/
    grid-area: <h>row</h> / <h>col</h> / span <h>height</h> / span <h>width</h>;
}
</script>

- <script type="c-css"><h>row</h></script>/<script type="c-css"><h>col</h></script> est le numéro de ligne/colonne de l'élément (commence à 1).<br/>
  💡 <script type="c-css">auto</script> permet de laisser la ligne/colonne par défaut.
- <script type="c-css">span <h>height</h></script>/<script type="c-css">span <h>width</h></script> est la taille de l'élément en nombre de cellules.

💡 Il est possible de définir un élément comme étant une sous-grille (réutilise les lignes et/ou les colonnes de la grille principale) :

<script type="c-css">
.grid > .item {
    grid-area: span 3 / span 3;
    display: grid;
    grid   : subgrid / subgrid;
}
</script>

💡 Il est possible de nommer des lignes, colonnes, ou région pour placer les éléments de la grille plus explicitement, cependant, nous n'étudierons pas cela ici.

💡 CSS permet de fixer ces différentes propriétés de manière indépendante avec :
- <script type="c-css">grid-template-(rows|columns)</script>
- <script type="c-css">grid-auto-(rows|columns)</script>
- <script type="c-css">grid-auto-flow</script>
- <script type="c-css">grid-(row|column)-(start|end)</script>
- <script type="c-css">grid-(row|column)</script>

Vous pourrez trouver plus de détails sur grid sur la documentation MDN, ainsi que sur le lien suivant : https://css-tricks.com/snippets/css/complete-guide-grid/

#### Propriétés CSS de flex et grid

CSS offre deux moyens de définir l'alignement d'un élément :
- <script type="c-css">place-item</script> : au niveau de la liste ;
- <script type="c-css">place-self</script> : au niveau de l'élément.

<script type="c-css">
.flex_or_grid {
    place-item: <h>align_row</h> <h>align_col</h>;
    & > .item {
        place-self: <h>align_row</h> <h>align_col</h>;
    }
}
</script>

Elles acceptent généralement comme valeur :
- <script type="c-css">scretch</script>
- <script type="c-css">(flex-)start</script>
- <script type="c-css">center</script>
- <script type="c-css">(flex-)end</script>

💡 De manière analogue <script type="c-css">place-content</script> permet d'aligner le contenu de la liste/grille si cette dernière ne la remplit pas.

💡 Flex supporte aussi <script type="c-css">space-(between|around|evenly)</script>.

💡 <script type="c-css">gap</script> permet de définir un espace minimal entre les différentes lignes/colonnes :
<script type="c-css">
.flex_or_grid {
    gap: 10px;
    gap: <h>row-gap</h> <h>column-gap</h>;
}
</script>

💡 Il est possible de définir l'ordre des éléments de la liste/grille grâce à <script type="c-css">order</script>.

💡 CSS permet de fixer ces différentes propriétés de manière indépendante avec :
- <script type="c-css">(justify|align)-(content|item|self)</script>
- <script type="c-css">(row|column)-gap</script>

### Dimensionnement d'un élément

#### Unités

CSS fourni de multiples unités pour indiquer une taille :
- <script type="c-css">1em</script>: hauteur *actuelle* de la police de caractère *(pour la taille de la police)*.<br/>
  💡 <script type="c-css">1rem</script>: hauteur *initiale* (à la racine) de la police de caractère.
- <script type="c-css">1px</script> : <u>p</u>i<u>x</u>els, *(pour les traits, bordures, et marges)*.
- <script type="c-css">1%</script> : relatif à la taille du contenant *(pour les tailles)*.
- <script type="c-css">1dvw</script> : 1/100e de la largeur de la fenêtre (*<u>d</u>ynamic <u>v</u>iewport <u>w</u>idth*).
- <script type="c-css">1dvh</script> : 1/100e de la hauteur de la fenêtre (*<u>d</u>ynamic <u>v</u>iewport <u>h</u>eight*).

⚠ Vous pourrez trouver d'autres unités pour le viewport, cependant, <script type="c-css">dvw</script> et <script type="c-css">dvh</script> permettent de mieux gérer les téléphones portables.

💡 Pour une impression, il est possible d'indiquer des tailles en <script type="c-css">mm</script>, <script type="c-css">cm</script>, <script type="c-css">in</script>, <script type="c-css">pt</script>.

⚠ Pour effectuer des calculs, vous devez utiliser <script type="c-css">calc()</script> :
<script type="c-css">
width: calc( 100% - 2 * 3em );
</script>

💡 CSS fourni d'autres fonctions pour vous aider :
- <script type="c-css">min(10px, 10%)</script>
- <script type="c-css">max(10px, 10%)</script>
- <script type="c-css">minmax(<h>min</h>, <h>max</h>)</script> : une valeur entre min et max (pour les grilles).
- <script type="c-css">clamp(<h>min</h>, <h>preferred</h>, <h>max</h>)</script> : une valeur entre min et max (pour les grilles).
- etc.

#### Le cadre d'un élément

Un élément est composé :
- d'un contenu (*content*) ;
- d'une marge intérieur (*padding*) ;
- d'une bordure (*border* et/ou *outline*) ;
- d'une marge extérieure (*margin*).

<script type="c-css">margin</script> et <script type="c-css">padding</script> s'utilisent de la même manière :
- <script type="c-css">margin: <h>X</h>;</script> : défini l'ensemble des marges ;
- <script type="c-css">margin: <h>top</h> <h>right</h> <h>bottom</h> <h>left</h>;</script>
- <script type="c-css">margin: <h>top_and_bottom</h> <h>right_and_left</h>;</script>
- <script type="c-css">margin: <h>top</h> <h>right_and_left</h> <h>bottom</h>;</script>

💡 Les marges d'éléments adjacents peuvent être fusionnée. On peut voir les marges comme la distance minimale entre la bordure de l'élément et la bordure de tout autre élément.

<script type="c-css">border</script> et <script type="c-css">outline</script> s'utilisent de la même manière :
- <script type="c-css">border: <h>width</h> <h>style</h> <h>color</h>;</script> ;
- <script type="c-css">border: none;</script>
 
Contrairement à <script type="c-css">border</script>, <script type="c-css">outline</script> peut se dessiner par dessus des éléments existants.
Il est ainsi très utile pour dessiner des bordure sur des contenu <script type="c-css">inline</script> sans modifier la hauteur de la ligne.

Les styles de lignes sont généralement :
- <script type="c-css">solid</script> ;
- <script type="c-css">double</script> ;
- <script type="c-css">dotted</script> ;
- <script type="c-css">dashed</script> ;
- <script type="c-css">dashed</script> ;
- <script type="c-css">wavy</script> (not supported).

💡 <script type="c-css">border-radius</script> permet de d'arrondir les angles de la bordure (border/outline).

💡 CSS permet de fixer ces différentes propriétés de manière indépendante avec :
- <script type="c-css">(padding|margin)-(top|bottom|left|right)</script>
- <script type="c-css">(border|outline)-(width|style|color)</script>
- <script type="c-css">(border|outline)-(top|bottom|left|right)-(width|style|color)</script>
- <script type="c-css">border-radius-(top|bottom|left|right)</script>

#### La taille d'un élément

La taille d'un élément est calculée à partir :
- d'une taille préférée : <script type="c-css">width</script>/<script type="c-css">height</script> ;
- d'une taille minimale et maximale : <script type="c-css">(min|max)-(width|height)</script>.

💡 Il est possible d'utiliser <script type="c-css">aspect-ratio</script> pour que la hauteur (ou largeur) s'adapter à sa largeur (ou hauteur).

💡 Les valeurs <script type="c-css">(min|max|fit)-content</script> adaptent les tailles à celles de son contenu.

⚠ Par défaut la taille de l'élément n'inclue pas la bordure et marge intérieur.<br/>
Pour les inclure, il convient d'utiliser <script type="c-css">box-sizing: border-box</script>.

#### Dépassements

Lorsque le contenu est plus grand que le contenant, il y a *dépassement* (*overflow*).

Il est alors nécessaire d'indiquer le comportement à adopter via :
- <script type="c-css">overflow: <h>overflow-x</h> <h>overflow-x</h> </script>

Les options possibles sont les suivantes :
- <script type="c-css">visible</script> : affiche le contenu qui dépasse ;
- <script type="c-css">hidden</script> : cache le contenu qui dépasse ;
- <script type="c-css">auto</script> : ajoute une barre de défilement si dépassement ;
- <script type="c-css">scroll</script> : ajoute une barre de défilement.

### Responsive

Comme nous l'avons indiqué en début de section, les pages Web s'affichent dans des fenêtres de tailles différentes.

Il est alors important de concevoir nos pages Web de sorte à ce qu'elle s'affiche du mieux possible sur des écrans de tailles différentes.

Lorsque la page Web s'adapte à la taille de la fenêtre, on dit alors qu'elle est *responsive*.

[todo: outil]

#### Par défaut

Les pages Web s'adaptent déjà à la taille de la fenêtre si vous utilisez :
- des conteneurs <script type="c-css">flex</script>/<script type="c-css">grid</script> ;
- des unités <script type="c-css">%</script>/<script type="c-css">dvw</script>/<script type="c-css">dvw</script> ;
- des tailles minimales et maximales <script type="c-css">(min|max)-(width|height)</script>.

💡 Bien évidemment, <script type="c-css">(min|max|fit)-content</script>, <script type="c-css">calc()</script>, <script type="c-css">min()</script>, <script type="c-css">max()</script>, <script type="c-css">minmax()</script>, <script type="c-css">clamp()</script> peuvent aussi vous aider.

⚠ Pour des raisons historiques, les navigateurs sur mobile dézooment automatiquement les pages Web afin de s'adapter à la largeur de l'écran.

Pour éviter ceci, devez alors inclure la balise suivante dans l'en-tête de la page web :

<script type="c-html">
<meta name="viewport"
   content="width=device-width, initial-scale=1.0"/>
</script>


#### Des règles CSS différentes

Malheureusement, le comportement par défaut n'est pas toujours suffisant pour gérer toutes les dimensions de fenêtres.

Il est alors nécessaire de réorganiser les éléments en fonction de l'espace disponible, et donc d'utiliser des règles CSS différentes.

Pour cela il y a deux moyens de procéder :
- <script type="c-css">@media</script> : (*media queries*) s'adapte en fonction de la taille de la fenêtre.
- <script type="c-css">@container</script> : (*container queries*)  s'adapte en fonction de la taille du conteneur.

💡 Il est bien souvent préférable de privilégier <script type="c-css">@container</script> à <script type="c-css">@media</script>.

<script type="c-css">@container</script> s'utilise ainsi :
1. Définir un conteneur parmis les ancêtres de l'élément avec :
   - <script type="c-css">container: <h>name</h> size</script> ;
   - <script type="c-css">container: <h>name</h> inline-size</script> : ne servira que pour la largeur ;
2. Définir un *container query* pour l'élément ciblé, e.g. :<br/>
   <script type="c-css">@container [<h>name</h>] (min-width: 100px) and (max-width: 100px)</script>

<script type="c-css">
div {
    container: card size;

    & > .item {
        @container (max-width: 100px) {
            /* rules */
        }
        @container (min-width: 100px and max-width: 1000px) {
            /* rules */
        }
        @container (min-width: 1000px) {
            /* rules */
        }
    }
}
</script>

💡 Les conteneurs permettent aussi d'utiliser les unités suivantes :
- <script type="c-css">cqw</script> : 1/100e de la largeur du conteneur *(<u>c</u>ontainer <u>q</u>uery <u>w</u>idth)*
- <script type="c-css">cqh</script> : 1/100e de la hauteur du conteneur *(<u>c</u>ontainer <u>q</u>uery <u>h</u>eight)*

💡 Il existe d'autres conditions que <script type="c-css">(min|max)-(width|height)</script>, e.g. <script type="c-css">(min|max)-(aspect-ratio|resolution)</script>, <script type="c-css">orientation</script>, etc.

#### Impression (bonus)

⚠ la fonction première d'une page Web est d'être affichée sur écran, il est ainsi inutile de se prendre la tête dessus.

Les pages peuvent aussi être imprimée, pour cela on peut définir des règles CSS spécifique via les media queries :
<script type="c-css">
/* règles spécifique à l'affichage sur écran \*/
@media screen {
}
/* règles spécifique à l'impression sur écran \*/
@media print {
    @page {
        size: A4;
    }
    body {
        width: 21cm;
        /* ne pas changer les couleurs \*/
        print-color-adjust: exact;
    }
}
</script>

⚠ Pour une impression, pensez à potentiellement masquer les en-têtes/pieds de pages, surtout s'ils sont fixed.

⚠ L'impression ne défilera la barre de défilement que si elle est sur l'élément racine.

⚠ Lors de l'impression, il est généralement préférable de cocher l'option "ajuster à la largeur de la page".

⚠ Pour une impression PDF, il est préférable d'utiliser Chromium pour un PDF de taille raisonnable.

💡 Vous pouvez indiquez où effectuer les coupures de pages avec <script type="c-css">break-*</script>, avoir des options en fonction de si la page est pair ou impair, etc<br/>

💡 <script type="c-html"><wbr/></script> permet d'insérer un retour à la ligne facultatif.

### Sortir des éléments du flux

CSS permet de sortir des éléments du flux, i.e. de les afficher à une position différente de celle à laquelle ils devraient normalement être.

Par défauts, les éléments sont <script type="c-css">position: static</script>, i.e. dans le flux.<br/>
Les éléments qui ont une valeur différente de <script type="c-css">position</script> sont dits *positionnés*.<br/>
Les éléments positionnés acceptent les propriétés CSS <script type="c-css">top</script>, <script type="c-css">right</script>, <script type="c-css">bottom</script>, <script type="c-css">left</script>.

⚠ Il convient d'éviter autant que possible les éléments positionnés, et d'utiliser à la place, lorsque possible, des flex, grid, margin, etc.

⚠ Les éléments positionnés, bien que sortis du flot, sont assujettis à <script type="c-css">overflow</script>.<br/>

<script type="c-css">position: relative</script> déplace un élément relativement à sa position initiale.<br/>
Lorsque possible, il est préférable d'utiliser des marges à la place.<br/>
💡 En pratique il est surtout utilisé pour rendre un élément positionné.

<script type="c-css">position: absolute</script> positionne un élément de manière absolue, par rapport au premier ancêtre positionné.<br/>
⚠ Les éléments absolus ne sont pas considérés dans le calcul de la taille de leur père.<br/>
⚠ Les éléments absolus peuvent en chevaucher (*overlap*) d'autres :
- si cela n'est pas voulu, privilégier flex/grid, ou <script type="c-css">float: (left|right)</script>.
- si cela est voulu, <script type="c-css">z-index: 1</script> permet d'indiquer l'ordre d'affichage des éléments. Plus le <script type="c-css">z-index</script> est grand, plus il sera affiché au-dessus.<br/>

<script type="c-css">position: fixed</script> positionne l'élément par rapport à la fenêtre.<br/>
⚠ Il est préférable de privilégier flex/grid, ou <script type="c-css">position: sticky</script>

<script type="c-css">position: sticky</script> s'affiche normalement, mais reste aux frontière de son père lorsque l'élément est défilé.<br/>
⚠ Il faut définir au moins l'une des propriétés <script type="c-css">top</script>, <script type="c-css">right</script>, <script type="c-css">bottom</script>, <script type="c-css">left</script>.<br/>
⚠ Utiliser <script type="c-css">scroll-padding</script> lorsque l'élément sticky prend toute la largeur/hauteur.<br/>
💡 Il est notamment très utile pour :
- les colonnes ou lignes d'en-tête d'une table défilable.
- les menu flottants.
- les barres de navigations au-dessous d'une bannière.

## Transformations, animations et interactions (PW ou PWV ou CM5 ?)

=> filter / opacity (e.g. on hover)
=> filter + rotation (dark mode)

=> pointer-events / user-select

=> transform-box.

=> animation & interactions
	=> JS / worklet+paint() => CSS + rapide JS.
	=> interactions : cursor + events.
		=> HTML inert
	=> :hover -> e.g. menu / scale on hover / opacity on hover / hidden.
		=> spoiler
	=> multi-page or use CSS (+ JS).
	=> animation
		=> carroussel
	=> visibility hidden

=> worklet


=> resize/contenteditable

Limite de HTML/CSS:
=> interactions (que faire ?)

=> mise à l'échelle... vs zoom...

## Quelle règle CSS est appliquée ?

### Spécificité

Il arrive que des règles CSS soient contradictoires. Dans l'exemple suivant, le texte doit-il s'afficher en gris ou en noir ? 

<script type="c-html">
    <span class='username'>Paul</span>
</script>
<script type="c-css">
.username {
    color: gray;
}
span {
    color: black;
}
</script>

Par défaut, CSS applique la règle la plus *spécifique*.
Pour rester simple, CSS compte le nombre d'identifiant, de classe, de nom de balise, et des autres éléments dans un tableau :

<table>
    <thead>
        <tr><th>Règle</th><th>ID</th><th>Classes</th><th>Balise</th><th>Autres</th></tr>
    </thead>
    <tbody>
        <tr><td><script type="c-css">.username</script></td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
        <tr><td><script type="c-css">span</script></td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
    </tbody>
</table>

CSS compare alors la spécificité colonne par colonne, de gauche à droite, en s'arrêtant à la première colonne différente. En cas de spécificité identique, elle appliquera la dernière règle déclarée.

### Importance et couches

Il est possible de rendre une déclaration CSS prioritaire via <script type="c-css">!important</script> :

<script type="c-css">
span {
    color: black !important;
}
</script>

Néanmoins, cela pose très vite problème lorsqu'on souhaite ajouter une autre règle CSS encore plus prioritaire. Si son usage peut se justifier dans certains contextes particuliers, il convient cependant de les éviter autant que possible.

Une alternative est d'utiliser les *couches CSS* (*CSS layers*). Le principe est très simple : on regroupe des règles CSS ensembles dans une "couche", et on établi l'ordre de priorité de ces différentes couches entre elles.

Cela est notamment très utile lorsqu'on souhaite utiliser des bibliothèques CSS :

<script type="c-css">
/* déclare les couches de la moins prioritaire
à la plus prioritaire \*/
@layer libA libB myrules;

@import ./libA.css layer(libA);
@import ./libB.css layer(libB);

@layer myrules {
    span {
        color: black;
    }
}
</script>

### L'avantage des composants Web

Les composants Web permettent de regrouper, dans un ensemble cohérent, les fichiers définissant le composant (HTML, CSS, JS/Brython, etc), améliorant ainsi la lisibilité du code.

Cependant, une règle CSS s'applique à tous les éléments correspondant à son sélecteur. Ainsi, sur de larges projets, il est très aisé d'écrire une règle CSS pour un élément donné qui, involontairement, s'appliquera à d'autres éléments. Ce genre d'effets de bord peut très vite devenir infernal à gérer.

Heureusement, les composants Web ont généralement une *racine cachée* (*shadow root*) qui isole les éléments qu'il contient, les rendant alors indépendant du reste du document et des autres composants Web.

Ainsi, les règles CSS du composant Web ne s'appliquent qu'à ses propres éléments,et ses éléments ne sont impactés que par ses propres règles CSS. Il est alors possible de réutiliser un composant Web dans différentes pages Web, sans qu'une règle CSS déclarée globalement (ou dans un autre composant) ne vienne l'impacter.

## CSS ou HTML ?

Certains éléments HTML peuvent se substituer à des règles CSS, e.g. :

<table>
    <thead>
        <tr><th>HTML</th><th>CSS</th><th></th></tr>
    </thead>
    <tbody>
        <tr><td><script type="c-html"><b>A</b></script></td><td><script type="c-html">font-weight: bold;</script></td><td><b>A</b></td></tr>
        <tr><td><script type="c-html"><i>A</i></script></td><td><script type="c-html">font-style: italic;</script></td><td><i>A</i></td></tr>
        <tr><td><script type="c-html"><u>A</u></script></td><td><script type="c-html">text-decoration: underline;</script></td><td><u>A</u></td></tr>
        <tr><td><script type="c-html"><mark>A</mark></script></td><td><script type="c-html">background-color: yellow;</script></td><td><mark>A</mark></td></tr>
        <tr><td><script type="c-html"><s>A</s></script></td><td></td><td><s>A</s></td></tr>
    </tbody>
</table>

[TODO: cheat sheet text-*]

Cependant, la séparation entre structure et affichage fait qu'il est souvent préférable d'utiliser des règles CSS, plutôt que des éléments HTML :
- pour plus d'options (e.g. couleur du surlignage, style du soulignage, etc) ;
- pour faciliter les modifications futures de l'affichage ;
- l'affichage de ces éléments peut être modifié, générant des inconsistances.

### Sémantique et affichage.

Il arrive cependant qu'on souhaite afficher de manière différente deux éléments HTML. Dès lors, il est nécessaire d'avoir un moyen de les distinguer afin de leur appliquer des règles CSS différentes :
- par leurs ancêtres ;
- par leur nom de balise (d'où l'utilité des balises sémantiques) ;
- par leur classe.
- etc.

Cependant, la classe est un attribut HTML, il doivent donc autant que possible décrire la *sémantique* (le sens) de l'élément HTML, plus que la manière de l'afficher.

💡 Pour distinguer les colonnes d'une table, on utilise les balises <script type="c-html">colgroup</script> et <script type="c-html">col</script> :

<script type="c-html">
    <table>
        <colgroup>
            <col class="col_username"></col>
            <col class="col_user_age"></col>
        </colgroup>
        <tbody>
            <tr><td>Paul</td><td>34</td></tr>
            <tr><td>Jean</td><td>72</td></tr>
        </tbody>
    </table>
</script>

<script type="c-css">
col.col_username {
    font-weight: bold;
}
col.col_user_age {
    font-style: italic;
}
</script>

### Les préprocesseurs CSS

Cependant, cette séparation entre structure (HTML) et affichage (CSS) n'est pas toujours entièrement respectée. Par facilité, il est en effet courant d'utiliser des classes, non pas pour ajouter une sémantique ou désigner un type d'élément, mais pour appliquer des règles CSS sur un ensemble d'éléments HTML, e.g. :

<script type="c-html">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
</script>

Sur de gros projets, cela permet d'éviter la duplication de règles CSS, ainsi que de les normaliser. C'est par exemple ce que proposent plusieurs bibliothèques CSS comme *Tailwind* ou *Bootstrap*.

En réalité, cela est surtout une solution de contournement aux limites de CSS, qui ne permet pas de réutiliser des règles existantes dans une nouvelle règle, e.g. :

<script type="c-css">
h1 {
    text-decoration: blue underline;
}
h2 {
    /* Je veux pareil que h1... \*/
}
</script>

Pour combler les limites de CSS, des *pré-processeurs CSS* (e.g. LESS, SASS) permettent d'ajouter plus de fonctionnalités à CSS :
<script type="c-css">
@mixin title {
    text-decoration: blue underline;
}

h1 {
    @include title;
}
h2 {
    @include title;
}
</script>

# X

=> outil (inspecteur)

=> astuces
    https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-elements (comme un élément)
    https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes (comme une classe)
	+ évoquer pseudo-classes/pseudo-éléments.

    => ::before/::after + other pseudo-element/class
        => attr()

=> :scope (CM3?)

=> limitation
    => code avec pre ou white-space + font-family (monospace) + coloration syntaxique (limitation).

=> contain : pour opti (CM5 ?)

</main>
    </body>
</html>