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

## Création d'une table et contraintes de colonnes

1. Créez une table `T_PK` ayant pour colonnes :
   - `ID` : une clef primaire auto-increment.
   - `A`  : un texte dont la valeur par défaut sera `N/A`.
   - `B`  : un entier qui ne peut être `NULL`.
   - `C`  : un entier impair (utilisez `CHECK`).
   <pre lang="sql" contenteditable></pre>
1. Via une requête SQL affichez le schéma de la table `T_PK`
   <pre lang="sql" contenteditable></pre>
1. Via une requête SQL affichez la requête SQL de création de la table `T_PK`
   <pre lang="sql" contenteditable></pre>
1. Insérez 3 entrées dans la table `T_PK` en ne renseignant que les colonnes `B` et `C`.
   <pre lang="sql" contenteditable></pre>
1. Affichez les entrées de la table `T_PK`.

## Contraintes de tables

1. Créez une table `T_TCSTR` ayant pour colonnes :
   - `A`  : un entier qui ne peut être `NULL`.
   - `B`  : un entier qui doit être supérieur à `A`
   <pre lang="sql" contenteditable></pre>

## Clefs étrangères

1. Créez une table `T_FK` ayant pour colonnes :
   - `A`  : une clef étrangère non-nulle vers la table `T_PK`.
   <pre lang="sql" contenteditable></pre>
2. Insérez une entrée dans `T_FK` référençant la première entrée de `T_PK`.
   <pre lang="sql" contenteditable></pre>
3. Incrémentez la colonne `ID` de l'entrée référencée. Que se passe-t-il ? Pourquoi ?
   <pre contenteditable></pre>
3. Supprimez l'entrée référencée. Que se passe-t-il ? Pourquoi ?
   <pre contenteditable></pre>
4. Supprimez la table `T_FK`.
   <pre lang="sql" contenteditable></pre>
5. Recommencez les opérations précédentes, cette fois de sorte à ce que la clef étrangères soit supprimée/modifiée lors de la suppression/modification de la clef primaire.<br/>
   a. Création de `T_FK`
   <pre lang="sql" contenteditable></pre>
   b. Que se passe-t-il lors de la modification ? Pourquoi ?
   <pre contenteditable></pre>
   a. Que se passe-t-il lors de la suppression ? Pourquoi ?
   <pre contenteditable></pre>
5. Recommencez les opérations précédentes, cette fois de sorte à ce que la clef étrangères soit mise à `NULL` lors de la suppression de la clef primaire, et modifiée lors de la modification de la clef primaire.<br/>
   a. Création de `T_FK`
   <pre lang="sql" contenteditable></pre>
   b. Que se passe-t-il lors de la suppression ? Pourquoi ?
   <pre contenteditable></pre>

## Mesurer la performance des index

Nous allons désormais voir à quel point les index sont vitaux lors de requêtes SQL sur de très larges tables. Pour cela nous suivrons le protocole suivant :
- créer 3 tables (<sql-code>ID INTEGER NOT NULL, Data TEXT</sql-code>) :
  - table `U_NC` : <sql-code>ID</sql-code> sans contraintes supplémentaires.
  - table `U_PK` : <sql-code>ID</sql-code> <sql-code>PRIMARY KEY</sql-code>.
  - table `U_UN` : <sql-code>ID</sql-code> <sql-code>UNIQUE</sql-code>.
- remplir ces tables de manière identique, avec <sql-code class="d4rk"><var>$NB</var></sql-code> = `10000000` entrées unique.
- pour chaque, mesurer la durée de recherche de l'entrée où <sql-code class="d4rk">ID == 42</sql-code>.

### Création et remplissage des tables

Dans un premier temps, nous créons une table contenant nos `10 000 000` entrées :

<sql-code class='block d4rk'>
CREATE TABLE U_NC (ID INTEGER NOT NULL, Data TEXT);
WITH gen(rowid) AS (
  VALUES (0)
  UNION ALL
    SELECT rowid+1 FROM gen
  LIMIT <var>$NB</var>)
INSERT INTO U_NC SELECT rowid, '('||rowid||')' FROM gen ORDER BY RANDOM();</sql-code>

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
1. Exécutez <sql-code class="d4rk">SELECT * FROM <var>$T</var> LIMIT 20;</sql-code> sur `U_PK` et `U_UN`, qu'observez-vous ?
   <pre contenteditable></pre>
1. Exécutez la requête suivante sur `U_PK` et `U_UN` :<br/><sql-code class="d4rk">SELECT COUNT(Data) FROM <var>$T</var> WHERE ID BETWEEN 200000 AND 400000;</sql-code>
1. Comment pourriez-vous expliquer la différence sur les temps d'exécution ?<br/>
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
   <sql-code class="block d4rk">INSERT INTO D SELECT ABS(RANDOM())%<var>$NB</var> FROM U_NC;</sql-code>
1. Mesurez la vitesse d'execution de la requête <sql-code>SELECT</sql-code> sur cette table :
   <pre contenteditable></pre>
2. Créez un index sur cette table.
   <pre lang="sql" contenteditable></pre>
3. Mesurez à nouveau la vitesse d'execution, qu'observez-vous ?
   <pre contenteditable></pre>

⚠ Les index ont un coût lors des <sql-code>INSERT</sql-code>/<sql-code>UPDATE</sql-code>/<sql-code>DELETE</sql-code>, il ne faut pas en abuser.

💡 En réalité, il est rare de devoir créer des index manuellement.

</main>
    </body>
</html>