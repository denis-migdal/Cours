<!DOCTYPE html>
<html>
    <head>
        <title>TP2 (Tableur)</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <header></header>
        <main>

# TP2 : Mise en forme

*💡 Ce TP est inspiré de sources en partie inconnues.*

## Consignes

<tp-consignes></tp-consignes>

### Consignes tableur

Vous créerez un nouveau fichier tableur possédant une unique feuille nommée `Facture`.

À la fin du TP vous importerez le fichier dans le sujet de TP.

## Exercices

### Exercice 1

Modifiez la feuille de calcul afin d'obtenir le tableau suivant :

<center>
    <img src="../../../../assets/tableur/img/TP2-1.jpg"/>
</center>

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
    <tp-sheet sheet="Facture"></tp-sheet>
</div>

## Rendu

<tp-file_input default="../../../../assets/tableur/sujets/TP2.ods"></tp-file_input>

</main>
    </body>
</html>