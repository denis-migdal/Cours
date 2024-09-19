<!DOCTYPE html>
<html>
    <head>
        <title>TP3 (BDR1)</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <header></header>
        <main>

# TP3 : Tables et contraintes

## Consignes

<tp-consignes></tp-consignes>

## Création d'une table

+ create table
+ .fullschema/.schema/sql CM

## Contraintes

+ (dont clefs primaires)
- PRAGMA optimize;  / OPTIMIZE => avant chaque fermeture de la database.

- FK + on delete/on update/cascade.

## Export/import

Fréquent CSV (e.g. tableur)

import/export/save table (schema/data)
  -> as SQL
  -> as CSV
  ?
+ .mode (exports) / .dump  // .import

## Mesurer la performance des index

Nous allons désormais voir à quel point les index sont vitaux lors de requêtes SQL sur de très larges tables. Pour cela nous suivrons le protocole suivant :
- créer 3 tables avec une colonne <sql-code>ID INTEGER NOT NULL</sql-code> avec :
  - `U_NC` : table sans contrainte.
  - `U_PK` : table avec <sql-code>PRIMARY KEY</sql-code>.
  - `U_UN` : table avec <sql-code>UNIQUE</sql-code>.
- remplir ces tables de manière identique, avec `10 000 000` entrées unique.
- pour chaque, mesurer la durée de recherche de l'entrée où <sql-code class="d4rk">ID == 42</sql-code>.

### Création et remplissage des tables

Dans un premier temps, nous créons une table contenant nos `10 000 000` entrées :

<sql-code class='block d4rk'>
CREATE TABLE U_NC (ID INTEGER NOT NULL);
WITH gen(rowid) AS (
  VALUES (0)
  UNION ALL
    SELECT rowid+1 FROM gen
  LIMIT <var>$NB</var>)
INSERT INTO U_NC SELECT rowid FROM gen ORDER BY RANDOM();</sql-code>

💡 On ne vous demandera pas de comprendre le fonctionnement de <sql-code>gen</sql-code>.

1. Créez les tables `U_PK` et `U_UN` que vous remplirez ensuite à partir de `U_NC`.
   <pre lang="sql" contenteditable></pre>

### Mesurer la durée d'exécution d'une requête

1. Activez la mesure de la durée d'exécution des requêtes via `.timer on`.
1. Activez l'explication des requêtes via `.eqp on`.
   - `SCAN $T` : lis les lignes de la table `$T` unes à unes ;
   - `SEARCH $T USING` : recherche des entrées dans la table `$T` via un index,
1. Sur `U_NC`, `U_PK`, et `U_UN`, mesurez la durée d'exécution de la requête suivante : <sql-code class="d4rk">SELECT * FROM <var>$T</var> WHERE ID == 42;</sql-code><br/>
   <pre contenteditable></pre>
1. Comment expliquez-vous la différence de résultats entre `U_NC`, et `U_PK`/`U_UN` ?<br/>
   <pre contenteditable></pre>

💡 Préfixer une requête SQL par <sql-code>EXPLAIN QUERY PLAN </sql-code> permet de l'expliquer sans l'exécuter.

### Créer un INDEX

Comme nous l'avons vu en CM, les SGBD ajoutent un index sur les contraintes <sql-code>UNIQUE</sql-code>. Cela s'explique par le fait qu'à chaque insertions, le SGBD doit vérifier la contrainte, et donc rechercher si la valeur existe déjà dans la(les) colonne(s).

💡 La commande `.indexes $T` permet d'afficher la liste des index de la table `$T`.

1. Vérifiez que `U_UN` possède bien un index, et que `U_NC` n'en possède pas.
2. Créez un index sur `U_NC` via <sql-code class="d4rk">CREATE INDEX \_<var>$T</var>\_<var>$COL</var> ON <var>$T</var>(<var>$COL</var>);</sql-code>.
   <pre lang="sql" contenteditable></pre>
3. Listez les index de `U_NC`, puis exécutez la requête <sql-code>SELECT</sql-code> précédente.
4. Qu'observez-vous quant à la vitesse d'exécution ?
   <pre contenteditable></pre>
5. Créez une table `D(ID INTEGER NOT NULL)`.
   <pre lang="sql" contenteditable></pre>
6. Remplissez cette table via la requête SQL suivante (insère duplicats) :
   <sql-code class="block">INSERT INTO D SELECT RANDOM()%10000000 FROM U_NC;</sql-code>
1. Mesurez la vitesse d'execution de la requête <sql-code>SELECT</sql-code> sur cette table :
   <pre contenteditable></pre>
2. Créez un index sur cette table.
   <pre lang="sql" contenteditable></pre>
3. Mesurez à nouveau la vitesse d'execution, qu'observez-vous ?
   <pre contenteditable></pre>

⚠ Les index ont un coût sur les insertions/modifications. Il ne faut ainsi pas en abuser.

💡 En réalité, il est rare de devoir créer des index manuellement.

</main>
    </body>
</html>