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

# CM1 : Prise en main

Un tableur est un logiciel permettant :
- d'organiser des données sous forme de grilles ;
- d'effectuer des calculs sur des séries de données ;
- puis de tracer des graphiques à partir de ces données.

<center>
    <img src="../../../../assets/tableur/img/intro.png"/>
</center>

## Feuille de calcul

Une **feuille de calcul** est une grille composée de **lignes** et de **colonnes** :
- les **lignes** sont horizontales et identifiées par un nombre.
- les **colonnes** sont verticales et identifiées par une lettre.

L'intersection d'une ligne et d'une colonne est appelée **cellule**. Elle est identifiée par sa lettre de colonne, suivie de son numéro de ligne. Les identifiants des lignes et des colonnes sont indiqués par les **en-têtes** gris. 

### Sélectionner une cellule

Cliquez sur une cellule ci-dessous pour la sélectionner. Vous remarquerez alors que ses coordonnées sont mises en surbrillances, et que son identifiant s'affiche en haut à gauche.

<center>
    <calc-sheet cols=3 rows=4></calc-sheet>
</center>

💡 Vous pouvez aussi sélectionner une cellule en indiquant son identifiant en haut à gauche, puis en appuyant sur la touche `⏎` (entrée).

### Remplacer et éditer le contenu d'une cellule

Une cellule peut contenir des valeur de type :
- **texte** : par défaut aligné à gauche ;
- **nombre** : par défaut aligné à droite ;
- **date** : par défaut aligné à droite ;
- **formule** : calcul la valeur de la cellule à partir d'autres cellules (cf suite).

<todo>et dans l'autre sens...</todo>

Les cellules sont initialement vides. Pour **remplacer** le contenu d'une cellule, sélectionnez-là, puis tapez sa valeur au clavier, avant de valider en appuyant sur la touche `⏎` (entrée). Vous remarquerez que sa valeur s'affiche dans la barre de formule, en haut à droite.

<center>
    <calc-sheet id="sheet_types" cols=4 rows=4></calc-sheet>
</center>

💡 Vous pouvez aussi **éditer** la valeur d'une cellule en double-cliquant dessus, (ou en cliquant sur la barre des formules), puis en appuyant sur la touche `⏎` (entrée).

## Formules

Un intérêt majeur des tableurs et des feuilles de calculs sont les **formules** permettant d'automatiquement calculer la valeur d'une cellule à partir d'autres cellules :

<center>
    <calc-sheet id="sheet_formula" cols=3 rows=4></calc-sheet>
</center>

Dans l'exemple précédent, la modification des colonnes "Produits unitaire" et "Nombre" entraînera la modification de la colonne "Total".

Cliquer sur une cellule montre son contenu dans la **barre de formule** (encadrée en rouge) :

<center>
    <img src="./img/barre-calcul-1.png"/>
    <img src="./img/barre-calcul-2.png"/>
</center>
<todo>exemple interactif ?</todo>

Dans l'exemple ci-dessus, la cellule D2 a pour valeur une formule qui calcule le produit entre la cellule B2 et la cellule C2. Cliquer sur la barre de formule permet de mettre en valeur les cellules utilisées dans le calcul.

Une formule commence toujours par le signe "=" et est suivie d'une **expression**. Comme pour une formule mathématique, vous pouvez utiliser plusieurs **opérateurs** :
- *sur les nombres :* l'addition (+), la soustraction/négation (-), la multiplication (*), la division (/), la puissance (^), et le pourcentage (%).
- *sur les textes :* la concaténation (&).

Les opérandes peuvent être un nombre, un texte, une date, ou une **référence** à une autre cellule. Dans une formule, une référence à une cellule (i.e. son identifiant) est remplacée par sa valeur. Par exemple, la formule "=B2*2" indique que la valeur de la cellule actuelle est calculée comme la valeur de la cellule B2 multipliée par 2.

Bien évidemment, comme en mathématiques vous pouvez utiliser des parenthèses afin de déterminer l'ordre des opérations.

## Poignée de recopie

Vous vous doutez bien que si, dans l'exemple précédent, on avait des centaines de lignes, on préférerait éviter d'avoir à recopier la formule des centaines de fois.

Vous remarquerez que lorsque vous sélectionnez une cellule, un petit carré bleu en bas à droite apparaît. Il s'agit de la **poignée de recopie**. En cliquant dessus puis en déplaçant le curseur tout en maintenant le click, vous pourrez **étendre** son contenu.

Si le contenu est un chiffre, une lettre, ou une date, le tableur essayera de déterminer la valeur suivante :

<center>
    <img src="./img/étendre-1.png"/>
    <img src="./img/étendre-2.png"/>
</center>

Dans le cas d'une formule, la formule est recopiée, mais les références des cellules modifiées. Si vous étendez :
- sur la ligne : les lignes des références sont modifiées.
- sur la colonne : les colonnes des références sont modifiées.

<center>
    <img src="./img/étendre-form-1.png"/>
    <img src="./img/étendre-form-2.png"/>
    <img src="./img/étendre-form-3.png"/>
</center>

## Références relatives et absolues

L'exemple précédent est un tableau d'addition, cependant lorsqu'on étend la formule, toutes les références sont modifiées.
Par exemple, la cellule D2 contient "=D1+C2" quand on souhaiterait qu'elle contienne "=D1+A2", i.e. sans modifier la colonne de la seconde référence.

Quand la ligne (ou la colonne) change lorsqu'on étend la formule, on dit qu'elle est **relative**. Pour empêcher sa modification, il faut que la ligne (ou la colonne) soit absolue. Pour cela on préfixe l'identifiant de la ligne (ou de la colonne) par "$". Lorsque la ligne et la colonne d'une référence sont absolues, la référence est aussi dite absolue :

<center>
    <img src="./img/étendre-abs-form-1.png"/>
    <img src="./img/étendre-abs-form-2.png"/>
    <img src="./img/étendre-abs-form-3.png"/>
    <img src="./img/étendre-abs-form-4.png"/>
</center>

## L'interface

<todo></todo>
[Interface ?]
- sélection / curseur.
- différentes feuilles.
+ navigation

+ Ctrl+S / +Ctrl+Z/U

## Documentation

La documentation de Libre Office Calc est disponible sur [libreoffice.org](https://help.libreoffice.org/latest/fr/text/swriter/main0000.html).

</main>
    </body>
</html>