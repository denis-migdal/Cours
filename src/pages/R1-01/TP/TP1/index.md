<!DOCTYPE html>
<html>
    <head>
        <title>TP1 (Tableur)</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <header></header>
        <main>

# TP1 : ?

*💡 Ce TP est inspiré de sources en partie inconnues.*

## Consignes

<tp-consignes></tp-consignes>

## ?

<todo>Basic/Excel HL ?</todo>

Sur Moodle, vous trouverez le fichier "TP1.ods". Téléchargez-le, puis ouvrez-le dans Libre Office Calc.

À chaque feuille correspond un exercice. Vous devrez :
- écrire des formules dans les cellules jaunes, que vous renseignerez aussi sur ce sujet.
- compléter les cellules oranges via la poignée de recopie.

À la fin du TP, vous exporterez vos réponses et les déposerez sur Moodle avec votre fichier de tableur.

## Exercice 1

Modifiez la feuille de calcul afin d'obtenir le tableau suivant :

<center>
    <img src="./img/TP1.png"/>
</center>

<strong><em>Réponse :</em></strong>

<style>
    .sheet_answer {
        display:flex;

        & > ul {
            flex: 1 1 0;
            margin: 0;
        }
    }
</style>

<div class="sheet_answer">
    <tp-sheet sheet="Exo 1"></tp-sheet>

- <tp-cell_from_sheet sheet="Exo 1" cell="B3"></tp-cell_from_sheet>
- <tp-cell_from_sheet sheet="Exo 1" cell="E3"></tp-cell_from_sheet>

</div>

## Exercice 2

Vous noterez que la différence entre deux dates est classiquement exprimée en jours.

Formules :
- D4 : <input/>
- D9 : <input/>

## Exercice 3

Le prix TTC (toutes taxes comprises) est calculé à partir du prix HT (hors taxes) auquel on ajoute le montant de la TVA (un certain pourcentage du prix HT).

Formules :
- D5 : <input/>
- E5 : <input/>

## Exercice 4

Dans cet exercice, vous devez produite une table de multiplication.

Formules :
- C3 : <input/>

## Rendu

<tp-file_input default="../../../../assets/tableur/sujets/TP1.ods"></tp-file_input>

</main>
    </body>
</html>