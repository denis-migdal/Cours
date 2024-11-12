<!DOCTYPE html>
<html>
    <head>
        <title>CM2 (Web1)</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <style>
        </style>
        <header></header>
        <main>


# CM2 : CSS3

Au cours précédent, nous définissions la *structure* des pages Web grâce à HTML.
Il nous faut désormais définir l'*affichage* de notre page Web.

Pour cela, nous utiliserons des fichier CSS (*Cascading Style Sheets*), des *feuilles de styles* à appliquer à notre page Web, qui permettent de définir :
- le *style d'un texte* (police, graisse, style, couleurs, casse, etc.) ;
- le *positionnement* des différents éléments (marges intérieurs/extérieurs, bordures, position, etc.).
- des *animations*.

## Les règles CSS

### Inclure des règles CSS à une page Web

L'ajout d'une feuille de style CSS à la page web se fait via un élément HTML <html-code>link</html-code> :

<html-code class="block d4rk">
[!DOCTYPE html]
[html]
  [head]
    [!-- ... --]
    [link rel='stylesheet' href='<var>$CSS_FILE</var>' blocking="render"/]
  [/head]
  [body]
    [!-- ... --]
  [/body]
[/html]
</html-code>

💡 L'attribut <html-code>blocking="render"</html-code> permet de bloquer l'affichage de la page tant que la feuille de style n'a pas été chargée. Cela évite un effet de scintillement au chargement de la page.

⚠ S'il est techniquement possible d'ajouter des règles CSS via un élément HTML <html-code>[style]</html-code> ou un attribut HTML <html-code>style</html-code>, il convient d'éviter cela autant que possible.

### Déclarer une règle CSS

Un fichier CSS est composé de *règles CSS*, elles-même composée :
- d'un *sélecteur* (indique les éléments sur lesquels appliquer la règle CSS) ;
- d'une ou plusieurs *déclarations*, attribuant une *valeur* à une *propriété CSS*.

<css-code class="block d4rk">
<var>$SELECTOR</var> {
    <var>$PROPRIETY</var>: <var>VALUE</var>;
}
</css-code>

Par exemple, pour aligner le texte des paragraphes à droite :
<css-code class="block d4rk">
p {
    text-align: right;
}
</css-code>

### Les sélecteurs CSS (déplacer CM1)

[TODO: rappel des selecteurs du CM précédent ?]
[+~* :root] + pseudo-élément/classes
[& nested rules]
[slot/hosts]
+ principe des slots + example LISS...

### Valeur par défaut et héritage

Chaque propriété CSS a une valeur par défaut. Lorsque cette dernière est <css-code>inherit</css-code>, par défaut, sa valeur sera celle de l'élément parent. On dit alors que la propriété CSS est *héritée* :
<html-code class="block d4rk">
[div]Mon texte: [span]Hello[/span][/div]
</html-code>
<css-code class="block d4rk">
div {
    font-weight: bold;
}
</css-code>

<html-code>[span]</html-code> ne définissant pas de valeurs pour <css-code>font-weight</css-code>, il héritera de son père, i.e. sera affiché en gras.

CSS défini d'autres valeurs spéciales :
- <css-code>initial</css-code> : revient à la valeur par défaut.
- <css-code>unset</css-code> : revient à la valeur héritée, sinon à celle par défaut.
- <css-code>revert</css-code> : revient à la valeur par défaut définie par le navigateur.
- <css-code>revert-layer</css-code> : revient à la valeur définie à la couche précédente (cf suite).

💡 Il est possible de changer toutes les propriétés CSS en une seule déclaration :
<css-code class="block d4rk">
\* {
    all: unset;
}
</css-code>

## Propriétés CSS personnalisées

### Motivation : la gestion des couleurs

En CSS, il est possible de définir les couleurs d'un élément pour :
- <css-code>color</css-code> : le texte ;
- <css-code>background-color</css-code> : l'arrière-plan () ;
- <css-code>accent-color</css-code> : les éléments d'interface utilisateur ;
- <css-code>caret-color</css-code> : le curseur (*caret*).
- la bordure (cf plus tard) ;
- etc.

Pour des raisons de lisibilité, il est recommandé de limiter le nombre de couleurs différentes utilisées sur une même page Web (généralement 3 maximum). Il convient donc de définir un *jeu de couleurs* (*color scheme*) qui sera utilisé dans la page web, généralement composée de :
- une couleur principale ;
- une couleur secondaire ;
- une couleur tertiaire.

💡 Il y a toute une théorie sur la manière de bien choisir les couleurs (règle des 60-30-10, roue de couleurs, contrastes, complémentarité, nuances, etc), mais ce n'est pas l'objet ici.

On souhaiterait alors définir ces couleurs à un seul endroit, et ainsi éviter d'avoir à les copier-coller de partout, ce qui complexifierait toutes modifications futures (i.e. avec le risque d'en oublier un).

D'autant plus que les couleurs ne sont pas toujours simples à définir :
- <css-code>red</css-code> : par le nom de couleur, mais peu de possibilités ;
- <css-code class='d4rk'>rgb(<var>red</var>, <var>green</var>, <var>blue</var>)</css-code><br/>
  En notation hexadécimal : <css-code>#FF00FF</css-code> (2 caractères par couleurs) ;
- <css-code class='d4rk'>rgba(<var>red</var>, <var>green</var>, <var>blue</var>, <var>alpha</var>)</css-code> : avec transparence<br/>
  En notation hexadécimal : <css-code>#FF00FFFF</css-code> (2 caractères par couleurs) ;

💡 Les designers utilisent de nombreuses autres manières de définir les couleurs : <css-code>hsl</css-code>, <css-code>hwb</css-code>, <css-code>\[ok\](lab|lch)</css-code>, <css-code>color</css-code>, <css-code>color-mix</css-code>, <css-code>device-cmyk</css-code>, etc.

Si cela ne suffisait pas, il faut généralement définir plusieurs jeux de couleurs, e.g. :
- pour un mode sombre/clair ;
- pour l'impression ;
- pour les personnes atteintes de dyschromatopsie ;
- etc.

💡 Pour indiquer les modes de couleurs supportés (l'ordre indique la préférence) :
<html-code class='block'>[meta name="color-scheme" content="dark light" /]</html-code>

💡 Pour indiquer les couleurs de thème (modifie la couleur de la fenêtre) :
<html-code class='block'>
[meta name="theme-color" media="(prefers-color-scheme: light)"
   content="blue" /]
[meta name="theme-color" media="(prefers-color-scheme: dark)"
   content="red" /]
</html-code>

💡 Pour définir une couleur en fonction du mode :
<css-code class='block d4rk'>color: light-dark(<var>light_color</var>, <var>dark_color</var>);</css-code>

💡 Pour définir le mode de couleur à utiliser :
<css-code class='block'>color-scheme: (dark|light);</css-code>

💡 Pour définir des règles CSS spéficiques à un mode de couleur :
<css-code class='block'>@media (prefers-color-scheme: dark){/* ... \}</css-code> 


Si <css-code>currentcolor</css-code> permet de réutiliser la couleur définie par <css-code>color</css-code> pour les autres priopriétés CSS, cela n'est pas suffisant. Il nous faut ainsi un moyen de créer une variable contenant la couleur  que nous pourrons ensuite utiliser dans les règles CSS.

### Définir une propriété personnalisée

Pour cela on défini des *propriétés CSS personnalisées* (aussi appelées *variables CSS*) :
<css-code class="block d4rk">
@property --<var>PROPNAME</var> {
    syntax       : "<var>VALUE_TYPE</var>";
    initial-value: <var>DEFAULT_VALUE</var>;
    inherit      : true;
}
</css-code>

Il sera ensuite possible d'utiliser sa valeur grâce à <css-code class='d4rk'>var(<var>PROPNAME</var>)</css-code>, e.g. :
<css-code class="block d4rk">
@property --primary_color {
    syntax       : "\<color\>";
    initial-value: light-dark(red, blue);
    inherit      : true;
}
@property --secondary_color {
    syntax       : "\<color\>";
    initial-value: light-dark(yellow, green);
    inherit      : true;
}
h1 {
    background-color: var(--secondary_color); 
    color           : var(--primary_color);
    border-color    : currentcolor;
}
</css-code>


#### Définition et héritage

Une fois la propriété déclarée, nous pouvons aussi la (re)définir sur un élément :
<css-code class="block">
:root {
    --primary-color: black;
}
</css-code>

💡 Si la propriété est définie avec <css-code>inherit: true</css-code>, elle est alors héritable.

💡 Si aucune valeur n'est définie, alors la valeur de <css-code>initial-value</css-code> est utilisée.

💡 Il est d'usage de définir les valeurs globale sur <css-code>:root</css-code>.

💡 Les propriétés personnalisées traversent les shadow root (cf plus tard).

#### Indiquer le type de la valeur

<css-code>syntax</css-code> décrit le type de valeurs acceptées par la propriété CSS personnalisée, e.g. :
- <css-code>"\*"</css-code>, <css-code>"\<string\>"</css-code> ;
- <css-code>"\<number\>"</css-code>, <css-code>"\<integer\>"</css-code>, <css-code>"\<percentage\>"</css-code> ;
- <css-code>"\<length\>"</css-code>, <css-code>"\<color\>"</css-code>, <css-code>"\<url\>"</css-code> ;
- etc.

## Positionnement et dimensionnement des éléments

L'une des fonctions premières de CSS est de positionner et de dimensionner les éléments sur la page Web.

Cependant, il convient de garder à l'esprit que la fenêtre dans laquelle s'affiche la page web est de taille variable. Notamment du fait e.g. de la taille variable de l'écran, ou du redimensionnement de la fenêtre (e.g. en demi-écran).

### Le flux

Par défaut, les éléments sont affichés les uns à la suite des autres :
- <html-code>[div]</html-code> : affiché en bloc, prend toute la ligne.
- <html-code>[span]</html-code> : affiché comme un texte, sur la ligne courante.

Ils correspondent en réalité aux propriétés CSS suivantes :
- <css-code>display: block;</css-code>
- <css-code>display: inline;</css-code>

⚠ Un bloc ne peut être contenu dans un élément <css-code>inline</css-code>.<br/>
⚠ Par défaut, les composants Web sont <css-code>inline</css-code>.<br/>
⚠ Certaines propriétés CSS sont ignorés sur les éléments <css-code>inline</css-code>.

Il existe cependant d'autres modes d'affichages :
- <css-code>display: none;</css-code> : n'affiche pas l'élément.
- <css-code>display: inline-block;</css-code> : affiche en bloc, sur la ligne courante.
- <css-code>display: [inline-]flex;</css-code> : positionne les enfants en liste.
- <css-code>display: [inline-]grid;</css-code> : positionne les enfants en grille.

💡 Il existe d'autres modes d'affichages liées aux tables et aux listes.<br/>
💡 <css-code>visibility: hidden</css-code> permet d'afficher l'élément mais de manière invisible.

#### Propriétés CSS de flex

<css-code>flex-flow</css-code> configure la liste :
<css-code class="block d4rk">
.flex {
    display  : flex;
    flex-flow: <var>(row|column)</var> <var>[no]wrap</var>;
}
</css-code>

<css-code>flex-flow</css-code> configure la manière dont la taille d'un élément de la liste est calculée :
<css-code class="block d4rk">
.flex > .item {
    flex: <var>grow</var> <var>shrink</var> <var>basis</var>;
}
</css-code>

Par défaut, l'élément a la taille indiquée par <css-code>basis</css-code>. L'espace restant est redistribué à l'ensemble des éléments de manière pondérée par <css-code>grow</css-code>. S'il au contraire il manque de l'espace, les éléments sont réduits de manière pondérée par <css-code>shrink</css-code>. Cela dans les limites indiquées par <css-code>(min|max)-(width|height)</css-code> (cf suite).

💡 En pratique :
- <css-code>0</css-code> sur <css-code>grow</css-code>/<css-code>shrink</css-code> **interdit** l’agrandissement/rétrécissement.
- <css-code>1</css-code> sur <css-code>grow</css-code>/<css-code>shrink</css-code> **autorise** l’agrandissement/rétrécissement.
- <css-code>0</css-code> sur <css-code>basis</css-code> permet d'obtenir des éléments de **même taille**.

💡 On utilise ainsi généralement :
- <css-code>flex: 1 1 0;</css-code> : pour des éléments de même taille.
- <css-code>flex: none;</css-code> : pour des éléments qui ne se redimensionnent pas.

💡 CSS permet de fixer ces différentes propriétés de manière indépendante avec :
- <css-code>flex-direction</css-code>
- <css-code>flex-wrap</css-code>
- <css-code>flex-grow</css-code>
- <css-code>flex-shrink</css-code>
- <css-code>flex-basis</css-code>

Vous pourrez trouver plus de détails sur flex sur la documentation MDN, ainsi que sur le lien suivant : https://css-tricks.com/snippets/css/a-guide-to-flexbox/

#### Propriétés CSS de grid

<css-code>grid</css-code> configure la grille :
<css-code class="block d4rk">
.grid {
    display  : grid;
    grid: <var>rows</var>/<var>cols</var>;
}
</css-code>

<css-code>rows</css-code> et <css-code>cols</css-code> définissent respectivement les dimensions des lignes et des colonnes. Il peuvent être définis soit par :
- une liste de dimensions, e.g. <css-code>1fr 2fr</css-code> pour 2 lignes (ou colonnes).
- <css-code class="d4rk">auto-flow [dense] <var>size</var></css-code> pour un nombre de lignes (ou colonnes) indéterminé.

💡 <css-code>1fr</css-code> correspond à une <u>fr</u>action de la dimension.
Par exemple <css-code>2fr 1fr</css-code> découpe la dimension en 3, la première ligne (ou colonne) est 2x plus grande que la suivante.<br/>
💡 <css-code>repeat(5, 1fr)</css-code> est une manière plus concise d'écrire <css-code>1fr 1fr 1fr 1fr 1fr</css-code>.

<css-code>grid-area</css-code> permet d'indiquer la position et dimension d'un élément de la grille :
<css-code class="block d4rk">
.grid > .item {
    /* position \*/
    grid-area: <var>row</var> / <var>col</var>;
    /* dimension \*/
    grid-area: span <var>height</var> / span <var>width</var>;
    /* position + dimension \*/
    grid-area: <var>row</var> / <var>col</var> / span <var>height</var> / span <var>width</var>;
}
</css-code>

- <css-code class="d4rk"><var>row</var></css-code>/<css-code class="d4rk"><var>col</var></css-code> est le numéro de ligne/colonne de l'élément (commence à 1).<br/>
  💡 <css-code>auto</css-code> permet de laisser la ligne/colonne par défaut.
- <css-code class="d4rk">span <var>height</var></css-code>/<css-code class="d4rk">span <var>width</var></css-code> est la taille de l'élément en nombre de cellules.

💡 Il est possible de définir un élément comme étant une sous-grille (réutilise les lignes et/ou les colonnes de la grille principale) :

<css-code class="block d4rk">
.grid > .item {
    grid-area: span 3 / span 3;
    display: grid;
    grid   : subgrid / subgrid;
}
</css-code>

💡 Il est possible de nommer des lignes, colonnes, ou région pour placer les éléments de la grille plus explicitement, cependant, nous n'étudierons pas cela ici.

💡 CSS permet de fixer ces différentes propriétés de manière indépendante avec :
- <css-code>grid-template-(rows|columns)</css-code>
- <css-code>grid-auto-(rows|columns)</css-code>
- <css-code>grid-auto-flow</css-code>
- <css-code>grid-(row|column)-(start|end)</css-code>
- <css-code>grid-(row|column)</css-code>

Vous pourrez trouver plus de détails sur grid sur la documentation MDN, ainsi que sur le lien suivant : https://css-tricks.com/snippets/css/complete-guide-grid/

#### Propriétés CSS de flex et grid

CSS offre deux moyens de définir l'alignement d'un élément :
- <css-code>place-item</css-code> : au niveau de la liste ;
- <css-code>place-self</css-code> : au niveau de l'élément.

<css-code class='block d4rk'>
.flex_or_grid {
    place-item: <var>align_row</var> <var>align_col</var>;
    & > .item {
        place-self: <var>align_row</var> <var>align_col</var>;
    }
}
</css-code>

Elles acceptent généralement comme valeur :
- <css-code>scretch</css-code>
- <css-code>(flex-)start</css-code>
- <css-code>center</css-code>
- <css-code>(flex-)end</css-code>

💡 De manière analogue <css-code>place-content</css-code> permet d'aligner le contenu de la liste/grille si cette dernière ne la remplit pas.

💡 Flex supporte aussi <css-code>space-(between|around|evenly)</css-code>.

💡 <css-code>gap</css-code> permet de définir un espace minimal entre les différentes lignes/colonnes :
<css-code class='block d4rk'>
.flex_or_grid {
    gap: 10px;
    gap: <var>row-gap</var> <var>column-gap</var>;
}
</css-code>

💡 Il est possible de définir l'ordre des éléments de la liste/grille grâce à <css-code>order</css-code>.

💡 CSS permet de fixer ces différentes propriétés de manière indépendante avec :
- <css-code>(justify|align)-(content|item|self)</css-code>
- <css-code>(row|column)-gap</css-code>

### Dimensionnement d'un élément

#### Unités

CSS fourni de multiples unités pour indiquer une taille :
- <css-code>1em</css-code>: hauteur *actuelle* de la police de caractère *(pour la taille de la police)*.<br/>
  💡 <css-code>1rem</css-code>: hauteur *initiale* (à la racine) de la police de caractère.
- <css-code>1px</css-code> : <u>p</u>i<u>x</u>els, *(pour les traits, bordures, et marges)*.
- <css-code>1%</css-code> : relatif à la taille du contenant *(pour les tailles)*.
- <css-code>1dvw</css-code> : 1/100e de la largeur de la fenêtre (*<u>d</u>ynamic <u>v</u>iewport <u>w</u>idth*).
- <css-code>1dvh</css-code> : 1/100e de la hauteur de la fenêtre (*<u>d</u>ynamic <u>v</u>iewport <u>h</u>eight*).

⚠ Vous pourrez trouver d'autres unités pour le viewport, cependant, <css-code>dvw</css-code> et <css-code>dvh</css-code> permettent de mieux gérer les téléphones portables.

💡 Pour une impression, il est possible d'indiquer des tailles en <css-code>mm</css-code>, <css-code>cm</css-code>, <css-code>in</css-code>, <css-code>pt</css-code>.

⚠ Pour effectuer des calculs, vous devez utiliser <css-code>calc()</css-code> :
<css-code class="block d4rk">
width: calc( 100% - 2 * 3em );
</css-code>

💡 CSS fourni d'autres fonctions pour vous aider :
- <css-code>min(10px, 10%)</css-code>
- <css-code>max(10px, 10%)</css-code>
- <css-code class='d4rk'>minmax(<var>min</var>, <var>max</var>)</css-code> : une valeur entre min et max (pour les grilles).
- <css-code class='d4rk'>clamp(<var>min</var>, <var>preferred</var>, <var>max</var>)</css-code> : une valeur entre min et max (pour les grilles).
- etc.

#### Le cadre d'un élément

Un élément est composé :
- d'un contenu (*content*) ;
- d'une marge intérieur (*padding*) ;
- d'une bordure (*border* et/ou *outline*) ;
- d'une marge extérieure (*margin*).

<css-code>margin</css-code> et <css-code>padding</css-code> s'utilisent de la même manière :
- <css-code class="d4rk">margin: <var>X</var>;</css-code> : défini l'ensemble des marges ;
- <css-code class="d4rk">margin: <var>top</var> <var>right</var> <var>bottom</var> <var>left</var>;</css-code>
- <css-code class="d4rk">margin: <var>top_and_bottom</var> <var>right_and_left</var>;</css-code>
- <css-code class="d4rk">margin: <var>top</var> <var>right_and_left</var> <var>bottom</var>;</css-code>

💡 Les marges d'éléments adjacents peuvent être fusionnée. On peut voir les marges comme la distance minimale entre la bordure de l'élément et la bordure de tout autre élément.

<css-code>border</css-code> et <css-code>outline</css-code> s'utilisent de la même manière :
- <css-code class="d4rk">border: <var>width</var> <var>style</var> <var>color</var>;</css-code> ;
- <css-code class="d4rk">border: none;</css-code>
 
Contrairement à <css-code>border</css-code>, <css-code>outline</css-code> peut se dessiner par dessus des éléments existants.
Il est ainsi très utile pour dessiner des bordure sur des contenu <css-code>inline</css-code> sans modifier la hauteur de la ligne.

Les styles de lignes sont généralement :
- <css-code>solid</css-code> ;
- <css-code>double</css-code> ;
- <css-code>dotted</css-code> ;
- <css-code>dashed</css-code> ;
- <css-code>dashed</css-code> ;
- <css-code>wavy</css-code> (not supported).

💡 <css-code>border-radius</css-code> permet de d'arrondir les angles de la bordure (border/outline).

💡 CSS permet de fixer ces différentes propriétés de manière indépendante avec :
- <css-code>(padding|margin)-(top|bottom|left|right)</css-code>
- <css-code>(border|outline)-(width|style|color)</css-code>
- <css-code>(border|outline)-(top|bottom|left|right)-(width|style|color)</css-code>
- <css-code>border-radius-(top|bottom|left|right)</css-code>

#### La taille d'un élément

La taille d'un élément est calculée à partir :
- d'une taille préférée : <css-code>width</css-code>/<css-code>height</css-code> ;
- d'une taille minimale et maximale : <css-code>(min|max)-(width|height)</css-code>.

💡 Il est possible d'utiliser <css-code>aspect-ratio</css-code> pour que la hauteur (ou largeur) s'adapter à sa largeur (ou hauteur).

💡 Les valeurs <css-code>(min|max|fit)-content</css-code> adaptent les tailles à celles de son contenu.

⚠ Par défaut la taille de l'élément n'inclue pas la bordure et marge intérieur.<br/>
Pour les inclure, il convient d'utiliser <css-code>box-sizing: border-box</css-code>.

#### Dépassements

Lorsque le contenu est plus grand que le contenant, il y a *dépassement* (*overflow*).

Il est alors nécessaire d'indiquer le comportement à adopter via :
- <css-code class="d4rk">overflow: <var>overflow-x</var> <var>overflow-x</var> </css-code>

Les options possibles sont les suivantes :
- <css-code>visible</css-code> : affiche le contenu qui dépasse ;
- <css-code>hidden</css-code> : cache le contenu qui dépasse ;
- <css-code>auto</css-code> : ajoute une barre de défilement si dépassement ;
- <css-code>scroll</css-code> : ajoute une barre de défilement.

### Responsive

Comme nous l'avons indiqué en début de section, les pages Web s'affichent dans des fenêtres de tailles différentes.

Il est alors important de concevoir nos pages Web de sorte à ce qu'elle s'affiche du mieux possible sur des écrans de tailles différentes.

Lorsque la page Web s'adapte à la taille de la fenêtre, on dit alors qu'elle est *responsive*.

[todo: outil]

#### Par défaut

Les pages Web s'adaptent déjà à la taille de la fenêtre si vous utilisez :
- des conteneurs <css-code>flex</css-code>/<css-code>grid</css-code> ;
- des unités <css-code>%</css-code>/<css-code>dvw</css-code>/<css-code>dvw</css-code> ;
- des tailles minimales et maximales <css-code>(min|max)-(width|height)</css-code>.

💡 Bien évidemment, <css-code>(min|max|fit)-content</css-code>, <css-code>calc()</css-code>, <css-code>min()</css-code>, <css-code>max()</css-code>, <css-code>minmax()</css-code>, <css-code>clamp()</css-code> peuvent aussi vous aider.

⚠ Pour des raisons historiques, les navigateurs sur mobile dézooment automatiquement les pages Web afin de s'adapter à la largeur de l'écran.

Pour éviter ceci, devez alors inclure la balise suivante dans l'en-tête de la page web :

<html-code class='block'>
[meta name="viewport"
   content="width=device-width, initial-scale=1.0"]
</html-code>


#### Des règles CSS différentes

Malheureusement, le comportement par défaut n'est pas toujours suffisant pour gérer toutes les dimensions de fenêtres.

Il est alors nécessaire de réorganiser les éléments en fonction de l'espace disponible, et donc d'utiliser des règles CSS différentes.

Pour cela il y a deux moyens de procéder :
- <css-code>@media</css-code> : (*media queries*) s'adapte en fonction de la taille de la fenêtre.
- <css-code>@container</css-code> : (*container queries*)  s'adapte en fonction de la taille du conteneur.

💡 Il est bien souvent préférable de privilégier <css-code>@container</css-code> à <css-code>@media</css-code>.

<css-code>@container</css-code> s'utilise ainsi :
1. Définir un conteneur parmis les ancêtres de l'élément avec :
   - <css-code class='d4rk'>container: <var>name</var> size</css-code> ;
   - <css-code class='d4rk'>container: <var>name</var> inline-size</css-code> : ne servira que pour la largeur ;
2. Définir un *container query* pour l'élément ciblé, e.g. :<br/>
   <css-code class='d4rk'>@container [<var>name</var>] (min-width: 100px) and (max-width: 100px)</css-code>

<css-code class='block'>
div {
    container: card size;
    div > .item {
        @container (max-width: 100px) {
            /* rules \*/
        }
        @container (min-width: 100px and max-width: 1000px) {
            /* rules \*/
        }
        @container (min-width: 1000px) {
            /* rules \*/
        }
    }
}
</css-code>

💡 Les conteneurs permettent aussi d'utiliser les unités suivantes :
- <css-code>cqw</css-code> : 1/100e de la largeur du conteneur *(<u>c</u>ontainer <u>q</u>uery <u>w</u>idth)*
- <css-code>cqh</css-code> : 1/100e de la hauteur du conteneur *(<u>c</u>ontainer <u>q</u>uery <u>h</u>eight)*

💡 Il existe d'autres conditions que <css-code>(min|max)-(width|height)</css-code>, e.g. <css-code>(min|max)-(aspect-ratio|resolution)</css-code>, <css-code>orientation</css-code>, etc.

#### Impression (bonus)

⚠ la fonction première d'une page Web est d'être affichée sur écran, il est ainsi inutile de se prendre la tête dessus.

Les pages peuvent aussi être imprimée, pour cela on peut définir des règles CSS spécifique via les media queries :
<css-code class='block'>
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
</css-code>

⚠ Pour une impression, pensez à potentiellement masquer les en-têtes/pieds de pages, surtout s'ils sont fixed.

⚠ L'impression ne défilera la barre de défilement que si elle est sur l'élément racine.

⚠ Lors de l'impression, il est généralement préférable de cocher l'option "ajuster à la largeur de la page".

⚠ Pour une impression PDF, il est préférable d'utiliser Chromium pour un PDF de taille raisonnable.

💡 Vous pouvez indiquez où effectuer les coupures de pages avec <css-code>break-*</css-code>, avoir des options en fonction de si la page est pair ou impair, etc<br/>

💡 <html-code>[wbr]</html-code> permet d'insérer un retour à la ligne facultatif.

### Sortir des éléments du flux

CSS permet de sortir des éléments du flux, i.e. de les afficher à une position différente de celle à laquelle ils devraient normalement être.

Par défauts, les éléments sont <css-code>position: static</css-code>, i.e. dans le flux.<br/>
Les éléments qui ont une valeur différente de <css-code>position</css-code> sont dits *positionnés*.<br/>
Les éléments positionnés acceptent les propriétés CSS <css-code>top</css-code>, <css-code>right</css-code>, <css-code>bottom</css-code>, <css-code>left</css-code>.

⚠ Il convient d'éviter autant que possible les éléments positionnés, et d'utiliser à la place, lorsque possible, des flex, grid, margin, etc.

⚠ Les éléments positionnés, bien que sortis du flot, sont assujettis à <css-code>overflow</css-code>.<br/>

<css-code>position: relative</css-code> déplace un élément relativement à sa position initiale.<br/>
Lorsque possible, il est préférable d'utiliser des marges à la place.<br/>
💡 En pratique il est surtout utilisé pour rendre un élément positionné.

<css-code>position: absolute</css-code> positionne un élément de manière absolue, par rapport au premier ancêtre positionné.<br/>
⚠ Les éléments absolus ne sont pas considérés dans le calcul de la taille de leur père.<br/>
⚠ Les éléments absolus peuvent en chevaucher (*overlap*) d'autres :
- si cela n'est pas voulu, privilégier flex/grid, ou <css-code>float: (left|right)</css-code>.
- si cela est voulu, <css-code>z-index: 1</css-code> permet d'indiquer l'ordre d'affichage des éléments. Plus le <css-code>z-index</css-code> est grand, plus il sera affiché au-dessus.<br/>

<css-code>position: fixed</css-code> positionne l'élément par rapport à la fenêtre.<br/>
⚠ Il est préférable de privilégier flex/grid, ou <css-code>position: sticky</css-code>

<css-code>position: sticky</css-code> s'affiche normalement, mais reste aux frontière de son père lorsque l'élément est défilé.<br/>
⚠ Il faut définir au moins l'une des propriétés <css-code>top</css-code>, <css-code>right</css-code>, <css-code>bottom</css-code>, <css-code>left</css-code>.<br/>
⚠ Utiliser <css-code>scroll-padding</css-code> lorsque l'élément sticky prend toute la largeur/hauteur.<br/>
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

<html-code class='block d4rk'>
[span class='username']Paul[/span]
</html-code>
<css-code class='block d4rk'>
.username {
    color: gray;
}
span {
    color: black;
}
</css-code>

Par défaut, CSS applique la règle la plus *spécifique*.
Pour rester simple, CSS compte le nombre d'identifiant, de classe, de nom de balise, et des autres éléments dans un tableau :

<table>
    <thead>
        <tr><th>Règle</th><th>ID</th><th>Classes</th><th>Balise</th><th>Autres</th></tr>
    </thead>
    <tbody>
        <tr><td><css-code>.username</css-code></td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
        <tr><td><css-code>span</css-code></td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
    </tbody>
</table>

CSS compare alors la spécificité colonne par colonne, de gauche à droite, en s'arrêtant à la première colonne différente. En cas de spécificité identique, elle appliquera la dernière règle déclarée.

### Importance et couches

Il est possible de rendre une déclaration CSS prioritaire via <css-code>!important</css-code> :

<css-code class='block d4rk'>
span {
    color: black !important;
}
</css-code>

Néanmoins, cela pose très vite problème lorsqu'on souhaite ajouter une autre règle CSS encore plus prioritaire. Si son usage peut se justifier dans certains contextes particuliers, il convient cependant de les éviter autant que possible.

Une alternative est d'utiliser les *couches CSS* (*CSS layers*). Le principe est très simple : on regroupe des règles CSS ensembles dans une "couche", et on établi l'ordre de priorité de ces différentes couches entre elles.

Cela est notamment très utile lorsqu'on souhaite utiliser des bibliothèques CSS :

<css-code class="block d4rk">
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
</css-code>

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
        <tr><td><html-code>[b]A[/b]</html-code></td><td><css-code>font-weight: bold;</css-code></td><td><b>A</b></td></tr>
        <tr><td><html-code>[i]A[/i]</html-code></td><td><css-code>font-style: italic;</css-code></td><td><i>A</i></td></tr>
        <tr><td><html-code>[u]A[/u]</html-code></td><td><css-code>text-decoration: underline;</css-code></td><td><u>A</u></td></tr>
        <tr><td><html-code>[mark]A[/mark]</html-code></td><td><css-code>background-color: yellow;</css-code></td><td><mark>A</mark></td></tr>
        <tr><td><html-code>[s]A[/s]</html-code></td><td></td><td><s>A</s></td></tr>
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

💡 Pour distinguer les colonnes d'une table, on utilise les balises <html-code>colgroup</html-code> et <html-code>col</html-col> :

<html-code class="block d4rk">
[table]
    [colgroup]
        [col class="col_username"][/col]
        [col class="col_user_age"][/col]
    [/colgroup]
    [tbody]
        [tr][td]Paul[/td][td]34[/td][/tr]
        [tr][td]Jean[/td][td]72[/td][/tr]
    [/tbody]
[/table]
</html-code>

<css-code class='block d4rk'>
col.col_username {
    font-weight: bold;
}
col.col_user_age {
    font-style: italic;
}
</css-code>

### Les préprocesseurs CSS

Cependant, cette séparation entre structure (HTML) et affichage (CSS) n'est pas toujours entièrement respectée. Par facilité, il est en effet courant d'utiliser des classes, non pas pour ajouter une sémantique ou désigner un type d'élément, mais pour appliquer des règles CSS sur un ensemble d'éléments HTML, e.g. :

<html-code class="block d4rk">
[h1 class="text-3xl font-bold underline"]Hello world![/h1]
</html-code>

Sur de gros projets, cela permet d'éviter la duplication de règles CSS, ainsi que de les normaliser. C'est par exemple ce que proposent plusieurs bibliothèques CSS comme *Tailwind* ou *Bootstrap*.

En réalité, cela est surtout une solution de contournement aux limites de CSS, qui ne permet pas de réutiliser des règles existantes dans une nouvelle règle, e.g. :

<css-code class="block d4rk">
h1 {
    text-decoration: blue underline;
}
h2 {
    /* Je veux pareil que h1... \*/
}
</css-code>

Pour combler les limites de CSS, des *pré-processeurs CSS* (e.g. LESS, SASS) permettent d'ajouter plus de fonctionnalités à CSS :
<css-code class="block d4rk">
@mixin title {
    text-decoration: blue underline;
}
h1 {
    @include title;
}
h2 {
    @include title;
}
</css-code>

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