<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>TP1 (BDR)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/tp/index.css"  rel="stylesheet">
        <script  src="/skeleton/tp/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# TP1 : Requêter une base de données

*💡 Ce TP est inspiré de sources en partie inconnues.*

## Consignes

<tp-consignes></tp-consignes>

## SQLite

SQLite est un SGBD très léger dont chaque base de données est stockée sous la forme d'un fichier <script type="c-text">.sqlite</script>. Comme de nombreux SGDB, il permet de manipuler une base de données via plusieurs types d'interfaces :
- interface en lignes de commandes.
- interface graphique.
- interface de programmation *(e.g. pour manipuler une base à partir de Python)*.

💡 Dans le cadre de ce TP, nous utiliserons SQLite via son interface CLI.

### Usage de SQLite

SQLite se lance dans le terminal via la commande suivante :

<script type="c-bash">
sqlite3 <h>$FILE</h> <h>[$OPTS]</h>
</script>

Une fois lancé, vous pourrez ensuite écrire vos requêtes SQL après l'invite (<script type="c-text">sqlite></script>), appuyer sur entrée pour les exécuter, puis visualiser les résultats.

💡 Vous pouvez aussi entrer des commandes préfixées par un <script type="c-text">.</script> :
- <script type="c-text">.quit</script> : quitter SQLite.
- <script type="c-text">.help <h>[$CMD]</h></script> : afficher l'aide de SQLite.

### Explorer la base de données

1. Téléchargez la base de données "chimiste" via <a href="/assets/sql/chimiste.sqlite">ce lien</a>.
1. Dans un terminal, exécutez <script type="c-bash">sqlite3 <h>$FILE</h></script> afin d'ouvrir le fichier téléchargé.
1. Exécutez la commande <script type="c-text">.tables</script> pour afficher la liste des tables de la base.
1. Affichez le contenu de la table <script type="c-text">chimiste</script> grâce à la requête SQL suivante :<br/>
   <script type="c-sql">SELECT * FROM chimiste;</script>

### Formatter le résultat

Comme vous pouvez le constater, l'affichage des résultats est, par défaut, un peu austère. Plusieurs commandes SQLite (ou arguments de la commande <script type="c-bash">sqlite3</script>) permettent d'améliorer l'affichage :
- <script type="c-text">.headers ON</script> (ou <script type="c-text">--header</script>) : dans les résultats, affiche les noms des colonnes.
- <script type="c-text">.mode <h>$MODE</h></script> (ou <script type="c-text">--<h>$MODE</h></script>) : change le format d'affichage des résultats :
  - pour des humains : <script type="c-text">box</script>, <script type="c-text">table</script>, <script type="c-text">column</script>.
  - pour un ordinateur : <script type="c-text">csv</script>, <script type="c-text">json</script>, <script type="c-text">tabs</script>, <script type="c-text">list</script>.
  - pour les pages Web : <script type="c-text">html</script>, <script type="c-text">markdown</script>.

1. Activez l'affichage des noms des colonnes, puis re-exécutez la requête SQL.
1. Testez les formats <script type="c-text">box</script>, <script type="c-text">table</script>, et <script type="c-text">column</script> sur la requête SQL précédente.

## Sélection des colonnes

Les tables SQL peuvent contenir de nombreuses colonnes. Afin de conserver des résultats succins et lisibles, il convient de n'afficher que celles qui nous intéressent.

1. <q-text code-lang="sql">Affichez uniquement les pays de naissance.</q-text>
1. <q-text code-lang="sql">Affichez les pays de naissance, cette fois en supprimant les doublons.</q-text>
1. <q-text code-lang="sql">Affichez le nom et le prénom de chaque chimistes.</q-text>
1. <q-text code-lang="sql">À cette requête, ajoutez les années de naissance que vous nommerez "naissance".</q-text>

## Sélectionner des lignes

De la même manière que les tables SQL peuvent contenir de très nombreuses colonnes, elle peuvent aussi contenir de très nombreuses lignes. Ainsi, comme pour les colonnes, il convient de sélectionner les lignes qui nous intéressent.

1. <q-text code-lang="sql">Affichez le nom, prénom, et pays de naissance des chimistes nés en France.</q-text>
1. <q-text code-lang="sql">Affichez le nom, prénom des chimistes dont le nom commence par "A".</q-text>
1. <q-text code-lang="sql">Affichez le nom, prénom des chimistes encore vivant (i.e. sans année de mort).</q-text>
1. <q-text code-lang="sql">Affichez le nom, prénom des chimistes morts (i.e. ayant une année de mort), avec leur date de mort.</q-text>

## Opérations mathématiques sur les colonnes.

Il est fréquent que certaines informations soient calculées à partir d'une ou plusieurs colonnes. Par exemple, l'âge est calculée comme la différence entre l'année de mort et l'année de naissance :

<script type="c-sql">
SELECT annee_naissance, annee_mort, annee_mort - annee_naissance FROM chimiste;
</script>

1. <q-text code-lang="sql">Exécutez la requête ci-dessus en nommant la 3ème colonne "age".</q-text>
1. <q-text>Pourquoi, dans la requête précédente, certains chimistes n'ont pas d'âge ?</q-text>
1. <q-text code-lang="sql">Affichez le nom, prenom, année de naissance, et âge des chimistes encore vivants.</q-text>
1. <q-text code-lang="sql">En vous aidant de <script type="c-text">COALESCE(a,b)</script>, qui retourne <script type="c-text">b</script> si <script type="c-text">a</script> est nul, sinon <script type="c-text">a</script>, affichez le nom, prenom, et âge de tous les chimistes.</q-text>
1. <q-text code-lang="sql">Affichez le nom, prenom, et âge des chimistes dont l'âge est supérieur à 100 ans.</q-text>


## Trier et limiter les entrées

Parfois, les entrées qui nous intéressent sont les e.g. 5 produits les plus chers/moins chers. Pour cela on va d'abord trier les lignes sur leur prix, puis limiter le nombre de lignes retournées.

1. <q-text code-lang="sql">Ordonnez le nom, prénom, et âge des chimistes par leur âge croissant.</q-text>
1. <q-text code-lang="sql">Ordonnez le nom, prénom, et âge des chimistes par leur âge décroissant.</q-text>
1. <q-text code-lang="sql">Affichez le nom, prénom, et âge des 5 chimistes les plus vieux.</q-text>
1. <q-text code-lang="sql">Affichez le nom, prénom, et âge des 5 chimistes les plus jeunes.</q-text>


</main>
    </body>
</html>