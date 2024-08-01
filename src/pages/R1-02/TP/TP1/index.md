<!DOCTYPE html>
<html>
    <head>
        <title>TP1 (BDR1)</title>
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

## SQLite

SQLite est un SGBD très léger dont chaque base de données est stockée sous la forme d'un fichier `.sqlite`. Comme de nombreux SGDB, il permet de manipuler une base de données via plusieurs types d'interfaces :
- interface en lignes de commandes.
- interface graphique.
- interface de programmation *(e.g. pour manipuler une base à partir d'un script Python)*.

💡 Dans le cadre de ce TP, nous utiliserons SQLite via son interface CLI.

### Usage de SQLite

SQLite se lance dans le terminal via la commande suivante :

```bash
sqlite3 $FILE [$OPTS]
```

Une fois lancé, vous pourrez ensuite écrire vos requêtes SQL après l'invite (`sqlite>`), appuyer sur entrée pour les exécuter, puis visualiser les résultats.

💡 Vous pouvez aussi entrer des commandes préfixées par un `.` :
- `.quit` : quitter SQLite.
- `.help [$CMD]` : afficher l'aide de SQLite.

### Explorer la base de données

1. Téléchargez la base de données "chimiste" via <a href="../../../../assets/sql/chimiste.sqlite">ce lien</a>.
1. Dans un terminal, exécutez la commande `sqlite3 $FILE` afin d'ouvrir le fichier ainsi téléchargé.
1. Exécutez la commande `.tables` pour afficher le(s) nom(s) de(s) table(s) de la base de données.
1. Affichez le contenu de la table `chimiste` grâce à la commande SQL suivante :<br/>
   `SELECT * FROM chimiste;`

### Formatter le résultat

Comme vous pouvez le constater, l'affichage des résultats est, par défaut, un peu austère. Plusieurs commandes SQLite (ou arguments de la commande `sqlite3`) permettent d'améliorer l'affichage :
- `.headers ON` (ou `--header`) : dans les résultats, affiche les noms des colonnes.
- `.mode $MODE` (ou `--$MODE`) : change le format d'affichage des résultats :
  - pour des humains : `box`, `table`, `column`.
  - pour un ordinateur : `csv`, `json`, `tabs`, `list`.
  - pour les pages Web : `html`, `markdown`.

1. Activez l'affichage des noms des colonnes, puis re-exécutez la requête SQL précédente.
1. Testez les affichages `.mode box`, `.mode table`, et `.mode column`, sur la requête SQL précédente.

## Sélection des colonnes

Les tables SQL peuvent contenir de très nombreuses colonnes. Afin de conserver des résultats succins et lisibles, il convient ainsi de ne récupérer que les colonnes qui nous intéressent.

1. Affichez uniquement les pays de naissance.
   <pre lang="sql" contenteditable="true"></pre>
1. Affichez les pays de naissance, cette fois en supprimant les doublons.
   <pre lang="sql" contenteditable="true"></pre>
1. Affichez le nom et le prénom de chaque chimistes.
   <pre lang="sql" contenteditable="true"></pre>
1. À la requête précédente, ajoutez les années de naissance que vous renommerez "naissance".
   <pre lang="sql" contenteditable="true"></pre>

## Sélectionner des lignes

De la même manière que les tables SQL peuvent contenir de très nombreuses colonnes, elle peuvent aussi contenir de très nombreuses lignes. Ainsi, comme pour les colonnes, il convient de sélectionner les lignes qui nous intéressent.

1. Affichez le nom, prénom, et pays de naissance des chimistes nés en France.
   <pre lang="sql" contenteditable="true"></pre>
1. Affichez le nom, prénom des chimistes dont le nom commence par "A".
   <pre lang="sql" contenteditable="true"></pre>
1. Affichez le nom, prénom des chimistes encore vivant (i.e. dont l'année de mort est nulle).
   <pre lang="sql" contenteditable="true"></pre>
1. Affichez le nom, prénom des chimistes morts (i.e. dont l'année de mort n'est pas nulle), ainsi que leur date de mort.
   <pre lang="sql" contenteditable="true"></pre>

## Opérations mathématiques sur les colonnes.

Il est fréquent que certaines informations soient calculées à partir d'une ou plusieurs colonnes. Par exemple, l'âge est calculée comme la différence entre l'année de mort et l'année de naissance :

```sql
SELECT annee_naissance, annee_mort, annee_mort - annee_naissance FROM chimiste;
```

1. Exécutez la requête ci-dessus en nommant la 3ème colonne "age".
   <pre lang="sql" contenteditable="true"></pre>
1. Pourquoi, actuellement, certains chimistes n'ont pas d'âge ?
   <div contenteditable></div>
1. Affichez le nom, prenom, année de naissance, et âge des chimistes encore vivants.
   <pre lang="sql" contenteditable="true"></pre>
1. En vous aidant de `COALESCE(a,b)` qui retourne `b` si `a` est nul, sinon `a`, affichez le nom, prenom, et âge de tous les chimistes.
   <pre lang="sql" contenteditable="true"></pre>
1. Affichez le nom, prenom, et âge des chimistes dont l'âge est supérieur à 100 ans.
   <pre lang="sql" contenteditable="true"></pre>


## Trier et limiter les entrées

Parfois, les entrées qui nous intéressent sont les e.g. 5 produits les plus chers/moins chers. Pour cela on va d'abord trier les lignes sur leur prix, puis limiter le nombre de lignes retournées.

1. Ordonnez le nom, prénom, et âge des chimistes par leur âge croissant.
   <pre lang="sql" contenteditable="true"></pre>
1. Ordonnez le nom, prénom, et âge des chimistes par leur âge décroissant.
   <pre lang="sql" contenteditable="true"></pre>
1. Affichez le nom, prénom, et âge des 5 chimistes les plus vieux.
   <pre lang="sql" contenteditable="true"></pre>
1. Affichez le nom, prénom, et âge des 5 chimistes les plus jeunes.
   <pre lang="sql" contenteditable="true"></pre>


</main>
    </body>
</html>