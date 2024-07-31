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

<todo>Add TP system support [import/export]</todo>

*💡 Ce TP est inspiré de sources en parties inconnues.*

## Consignes

- export/rendus.
- en vous aidant des supports CM et de la cheat sheet, répondez aux questions suivantes
- ne pas vous aider de ressources Web, doc fourni suffisant pour rep exo. => lire doc fournie aussi compétence + demander prof.

## SQLite

<todo>commandes</todo>

- Charger BDD chimiste (lien).

- Quelques rq pour explorer la base de donnée (cf README).
    => + lire help...

Formatter le résultat.
    - .headers ON
    - --header --column
    -> .mode [several...]

    - box/table/column <= human read
    - csv/json/tabs/list (computer read/exports)
    - html/markdown (site web)

- `SELECT * FROM chimiste;`

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