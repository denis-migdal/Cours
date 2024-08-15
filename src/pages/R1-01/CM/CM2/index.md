<!DOCTYPE html>
<html>
    <head>
        <title>CM (BDR1)</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <style>
        </style>
        <header></header>
        <main>

# CM2 : Mise en forme

## Barre d'outils

La **barre d'outils** intègre de nombreux raccourcis permettant d'éditer la feuille de calcul sans passer par les menus :

<center>
    <img src="../../../../assets/tableur/img/barre-outils.png"/>
</center>

💡 Survoler une icône de la barre d'outil affiche une courte description, ainsi qu'éventuellement un raccourcit clavier. Retenir les raccourcit claviers de fonctionnalités fréquemment utilisés permet à terme d'augmenter sa productivité.

💡 La barre d'outils est personnalisable via le menu "Affichage => Barre d'outils".

### Mise en forme du contenu

Comme dans les logiciels de traitement de texte, il est possible de mettre en forme le contenu d'une cellule, i.e. de modifier sa police d'écriture, la taille de la police, mettre en gras, en italique, souligner, changer la couleur du texte, changer la couleur du fond :

<div style="display: flex; align-items: top; gap:5px">
    <calc-sheet id="sheet_format_content" cols=6 rows=2></calc-sheet>
    <calc-toolbar id='sheet_toolbar_format_content'></calc-toolbar>
</div>


### Alignement du contenu

Il est aussi possible d'aligner le contenu d'une cellule horizontalement et verticalement :

<center>
    <img src="./img/barre-outils-alignement.png"/>
</center>

+ Ajuster quand ça dépasse (non implémenté ici)

### Format du contenu

Il est aussi possible de modifier le format des nombres affichés en les affichant comme une monnaie, un pourcentage, une date, en ajoutant ou retirant des décimales :

<center>
    <img src="./img/barre-outils-nombres.png"/>
</center>
<center>
    <img src="./img/format-nombres.png"/>
</center>

💡 De nombreux autres formats sont disponibles dans le menu "Format => Cellules... => Nombres" :

<center>
    <img src="../../../../assets/tableur/img/format-nombres-menu.png"/>
</center>

### Bordures

Il est aussi possible de fixer les bordures des cellules, leur style, ainsi que leur couleur :

<center>
    <img src="./img/barre-outils-bordures.png"/>
</center>

💡 Vous pouvez définir l'épaisseur de la bordure dans le menu "Format => Cellules... => Bordures" :

<center>
    <img src="./img/menu-bordures.png"/>
</center>

### Retraits

Les retraits permettent de décaler le contenu des cellules :

<center>
    <img src="./img/barre-outils-retraits.png"/>
</center>
<center>
    <img src="./img/retraits.png"/>
</center>


## Plages

-> [motivation] sélection plage (ctrl+super+ligne/col)
    => e.g. pour formatter plusieurs cellules en même temps.

### Fusionner et scinder des cellules

Il est aussi possible de fusionner des cellules pour n'en faire qu'une. Les cellules fusionnées peuvent être scindées.

<center>
    <img src="./img/barre-outils-fusion.png"/>
</center>
<center>
    <img src="./img/fusion.png"/>
</center>

## Format

-> copier/supprimer le format // collage spécial (sans format)
-> définir un format
        -> format définis / styles ?

## Insertions

Il est aussi possible d'insérer des images, des diagrammes (cf suite cours), des tables dynamiques (cf suites cours), des caractères spéciaux, des liens hypertextes ainsi que des commentaires :

<center>
    <img src="./img/barre-outils-insertions.png"/>
</center>

### Commentaires

Un commentaire apparaît comme un carré rouge en haut à droite d'une cellule. Au survol de la cellule, le commentaire apparaît :

<center>
    <img src="./img/commantaire-1.png"/>
    <img src="./img/commantaire-2.png"/>
</center>


<center>
    <video loop autoplay>
        <source src="./videos/commentaire.webm" type="video/webm">
    </video>
</center>
<!-- 1361x200 -->

## Lignes et colonnes

### Redimensionner les lignes et colonnes

Il est possible de redimensionner une ligne (ou colonne) en plaçant le curseur entre deux lignes (ou colonnes). Double-cliquer redimensionnera la ligne (ou colonne) de manière optimale quand clicker et déplacer vous permet de choisir la dimension désirée :

<center>
    <img src="./img/redimensionner.png" />
    <img src="./img/redimensionner-2.png" />
</center>
<!-- 320x200 -->

<center>
 <video loop autoplay>
  <source src="./videos/redimensionner-opti.webm" type="video/webm">
</video>
 <video loop autoplay>
  <source src="./videos/redimensionner.webm" type="video/webm">
</video>
</center>

### Cacher les lignes/colonnes

Certaines lignes (ou colonnes) peuvent être moins importantes que d'autres, e.g. :
- détails
- calculs intermédiaires
- données initiales

Pour garder la feuille de calcul lisible, on peut masquer les lignes (ou colonnes) sélectionnées grâce à F12 (Ctrl+F12 pour dégrouper) :

<center>
    <img src="./img/grouper.png" />
    <img src="./img/grouper-2.png" />
</center>

<center>
    <video loop autoplay>
        <source src="./videos/grouper.webm" type="video/webm">
    </video>
</center>

### Ajouter/Supprimer

déplacer sélections vs ajouter/supprimer

# TP

 [cf TP6+2+1] Plages
# NEXT

-> opérateurs de plage lors des plages

# CM1:

<img src="img/barre-outils-edition.png"/>


x
- maj+ctrl+maj+V (CM2) + ctrl+M copier formattage
+ astuce ctrl+X
- commentaires + liens (cf links)

</main>
    </body>
</html>