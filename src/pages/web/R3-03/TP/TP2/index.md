<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>TP2 (TW)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/index.css"  rel="stylesheet">
        <script  src="/skeleton/index.js"  type="module"     blocking="render"></script>
    </head>
    <body>
        <main>

# TP2 : CSS

En vous servant du cours, de la cheat sheet CSS, et de la documentation, MDN, effectuez les opérations suivantes.

## Le cadre

1. Créez un nouveau composant Web `user-card` contenant le nom, prénom et rôle d'un utilisateur.
2. Dans ce composant Web ajoutez un fichier `index.css` :
<css-code class="block">
:host {
    display   : block;
    max-width : 200px;
    background: lightblue;
}
</css-code>
3. Ajoutez-lui une bordure (*border*) de `4px`, avec le style `solid` et de couleur `grey`.
4. Ajoutez lui des coins arrondis avec `border-radius: 5px`.
5. Ajoutez `overflow: hidden` pour cacher les éléments qui dépassent.
5. Forcez un affichage en 4/3 avec `aspect-ratio`.
6. Donnez lui une marge interne (*padding*) de `1em`.

## Événements utilisateurs

1. Lorsque le curseur (*cursor*) passe dessus, il doit indiquer que l'élément est clickable (*pointer*) ;
2. Empêchez la sélection des textes avec `user-select: none`.


Vous indiquerez les règles suivantes via des *règles imbriquées* (*nested rules*), i.e. dans :
<css-code class="block">
:host(:hover) {
    /* ... */
}
</css-code>

💡 `:hover` est une pseudo-classe (*pseudo-class*) servant à indiquer des règles CSS à appliquer lorsque l'élément est survolé par la souris.

3. Au survol, l'élément doit devenir opaque (*opacity*) à `50%`.
4. Utilisez `transition: 2s opacity, 1s outline-size` pour animer cette transition, testez.
5. Au survol, ajoutez un contour (*outline*) de `4px solid` jaune. 
6. Créez l'animation `focusin` avec `@keyframes` qui commence à `0%` avec `transform: scale(1);` et se termine à `100%` avec `transform: scale(1.2);`
7. Au survol, ajoutez une animation bidirectionelle infinie via `animation: 2s focusin infinity alternate`.

Nous allons afficher un petit tooltip personnalisé au survol de l'élément en ajoutant des règles CSS au pseudo-élément (*pseudo-element*) `&:hover ::after` :
8. le contenu sera `content: "Cliquez pour visualiser l'utilisateur"`.
9. donnez lui un fond noir et une couleur blanche, ainsi qu'une border d'un pixel blanc.

## Style du texte

💡 `&` est équivalente au sélecteur parent, i.e. `&:hover` est équivalent à `:host:hover`.<br/>

1. Via CSS, mettez le nom en majuscule (*uppercase*) et le prénom capitalisé (*capitalize*).
2. Mettez le nom en gras (*bold*), et le prénom en italique (*italic*).
3. Le nom et le prénom auront une taille de police (*font size*) de `1.2em`.
4. Le nom et prénom seront sur la même ligne sans retour à la ligne (`white-space: nowrap`).
5. Si le nom/prénom dépasse de la ligne (`text overflow`), on utilisera une éllipse (`ellipsis`).

## Positionnement

1. Ajoutez un composant Web `user-list` contenant une dizaine de `user-card`.
2. `user-list` sera affichée (*display*) en mode `flex`.
3. `user-list` affiche les éléments en colonnes (*column*) et autorise les retours à la ligne (*wrap*).
4. Les éléments seront séparés par un écart (*gap*) de `10px`.
5. `user-card` sera positionné en mode `relatif`.
6. le rôle sera positionné de manière absolue (*absolute*) à `0px` du haut (*top*) et de la droite (*right*).

Bonus: afficher en mode grille au lieu de flex et/ou jouer avec les `place-`.

## Responsive

Redimensionnez la fenêtre du navigateur pour voir comment le site se comporte (+ outils navigateurs).

1. Créez un nouveau conteneur (*container*) nommé `parent` de type `size` dans `user-card`.
2. Si le conteneur a une largeur inférieure à `100px` (i.e. `@container ( width < 100px )`), ne pas afficher le prénom (`display:none`).
                
## Bonus : color scheme

</main>
    </body>
</html>