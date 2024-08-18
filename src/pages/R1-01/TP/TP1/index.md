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

# TP1 : Prise en main

*💡 Ce TP est inspiré de sources en partie inconnues.*

## Consignes

<tp-consignes></tp-consignes>

### Consignes tableur

Vous travaillerez sur un fichier de tableur que vous téléchargerez en cliquant <a href="../../../../assets/tableur/sujets/TP1.ods" target="_blank">ici</a>.

Chaque feuille correspond à un exercice. Vous devrez alors :
- écrire des formules dans les cellules jaunes.
- compléter les cellules oranges via la poignée de recopie.

À la fin du TP vous importerez le fichier dans le sujet de TP.

## Exercices

### Exercice 1

Modifiez la feuille de calcul afin d'obtenir le tableau suivant :

<center>
    <img src="../../../../assets/tableur/img/TP1-1.png"/>
</center>

💡 Vous penserez à utiliser la **poignée de recopie**.

<strong><em>Votre réponse :</em></strong>

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

### Exercice 2

Complétez la feuille de calcul de sorte à calculer le nombre total de jours de vacances universitaires.

💡 Vous noterez que la différence entre deux dates est classiquement exprimée en jours.

<strong><em>Votre réponse :</em></strong>

<div class="sheet_answer">
    <tp-sheet sheet="Exo 2"></tp-sheet>

- <tp-cell_from_sheet sheet="Exo 2" cell="D4"></tp-cell_from_sheet>
- <tp-cell_from_sheet sheet="Exo 2" cell="D9"></tp-cell_from_sheet>

</div>

### Exercice 3

Complétez la feuille de calcul de sorte à calculer les prix TTC. 

💡 Le prix TTC (toutes taxes comprises) est calculé à partir du prix HT (hors taxes) auquel on ajoute le montant de la TVA (un certain pourcentage du prix HT).

<strong><em>Votre réponse :</em></strong>

<div class="sheet_answer">
    <tp-sheet sheet="Exo 3"></tp-sheet>

- <tp-cell_from_sheet sheet="Exo 3" cell="D5"></tp-cell_from_sheet>
- <tp-cell_from_sheet sheet="Exo 3" cell="E5"></tp-cell_from_sheet>

</div>

### Exercice 4

Complétez la feuille de calcul de sorte à produire une table de multiplication.

<strong><em>Votre réponse :</em></strong>

<div class="sheet_answer">
    <tp-sheet sheet="Exo 4"></tp-sheet>

- <tp-cell_from_sheet sheet="Exo 4" cell="C3"></tp-cell_from_sheet>

</div>

## Rendu

<tp-file_input default="../../../../assets/tableur/sujets/TP1.ods"></tp-file_input>

</main>
    </body>
</html>