<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>TP3 (BDR)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/tp/index.css"  rel="stylesheet">
        <script  src="/skeleton/tp/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# TP3 : Tables et contraintes

## Consignes

<tp-consignes></tp-consignes>

## Création d'une table et contraintes de colonnes

1. <q-text code-lang="sql">Créez une table <script type="c-text">T_PK</script> ayant pour colonnes :
   - <script type="c-text">ID</script> : une clef primaire auto-increment.
   - <script type="c-text">A</script>  : un texte dont la valeur par défaut sera <script type="c-text">N/A</script>.
   - <script type="c-text">B</script>  : un entier qui ne peut être <script type="c-text">NULL</script>.
   - <script type="c-text">C</script>  : un entier impair (utilisez <script type="c-text">CHECK</script>).</q-text>
1. <q-text code-lang="sql">Via une requête SQL affichez le schéma de la table <script type="c-text">T_PK</script></q-text>
1. <q-text code-lang="sql">Via une requête SQL affichez la requête SQL de création de la table <script type="c-text">T_PK</script></q-text>
1. <q-text code-lang="sql">Insérez 3 entrées dans la table <script type="c-text">T_PK</script> en ne renseignant que les colonnes <script type="c-text">B</script> et <script type="c-text">C</script>.</q-text>
1. Affichez les entrées de la table <script type="c-text">T_PK</script>.

## Contraintes de tables

1. <q-text code-lang="sql">Créez une table <script type="c-text">T_TCSTR</script> ayant pour colonnes :
   - <script type="c-text">A</script>  : un entier qui ne peut être <script type="c-text">NULL</script>.
   - <script type="c-text">B</script>  : un entier qui doit être supérieur à <script type="c-text">A</script></q-text>

## Clefs étrangères

⚠ Vous devrez activer les clefs étrangères via la commande <script type="c-sql">PRAGMA foreign_keys = ON;</script>

1. <q-text code-lang="sql">Créez une table <script type="c-text">T_FK</script> ayant pour colonnes :
   - <script type="c-text">A</script>  : une clef étrangère non-nulle vers la table <script type="c-text">T_PK</script>.</q-text>
1. <q-text code-lang="sql">Insérez une entrée dans <script type="c-text">T_FK</script> référençant la dernière entrée de <script type="c-text">T_PK</script>.</q-text>
1. <q-text>Incrémentez la colonne <script type="c-text">ID</script> de l'entrée référencée. Que se passe-t-il ? Pourquoi ?</q-text>
1. <q-text>Supprimez l'entrée référencée. Que se passe-t-il ? Pourquoi ?</q-text>
1. <q-text code-lang="sql">Supprimez la table <script type="c-text">T_FK</script>.</q-text>
1. Recommencez les opérations précédentes, cette fois de sorte à ce que la clef étrangères soit supprimée/modifiée lors de la suppression/modification de la clef primaire.
   1. <q-text code-lang="sql">Création de <script type="c-text">T_FK</script></q-text>
   1. <q-text>Que se passe-t-il lors de la modification ? Pourquoi ?</q-text>
   1. <q-text>Que se passe-t-il lors de la suppression ? Pourquoi ?</q-text>
5. Recommencez les opérations précédentes, cette fois de sorte à ce que la clef étrangères soit mise à <script type="c-text">NULL</script> lors de la suppression de la clef primaire, et modifiée lors de la modification de la clef primaire.
   1. <q-text code-lang="sql">Création de <script type="c-text">T_FK</script></q-text>
   1. <q-text>Que se passe-t-il lors de la suppression ? Pourquoi ?</q-text>

## Mesurer la performance des index

⚠ Pour des raisons de performances, vous devrez utiliser une base de données "in memory". Pour cela, lancez une nouvelle instance de SQLite sans préciser ni ouvrir de fichiers.

Nous allons désormais voir à quel point les index sont vitaux lors de requêtes SQL sur de très larges tables. Pour cela nous suivrons le protocole suivant :
- créer 3 tables (<script type="c-sql">ID INTEGER NOT NULL, Data TEXT</script>) :
  - table <script type="c-text">U_NC</script> : <script type="c-sql">ID</script> sans contraintes supplémentaires.
  - table <script type="c-text">U_PK</script> : <script type="c-sql">ID</script> <script type="c-text">PRIMARY KEY</script>.
  - table <script type="c-text">U_UN</script> : <script type="c-sql">ID</script> <script type="c-text">UNIQUE</script>.
- remplir ces tables de manière identique, avec <script type="c-sql"><h>$NB</h></script> = <script type="c-text">10000000</script> entrées unique.
- pour chaque, mesurer la durée de recherche de l'entrée où <script type="c-sql">ID == 42</script>.

### Création et remplissage des tables

Dans un premier temps, nous créons une table contenant nos <script type="c-text">10 000 000</script> entrées : <script type="c-text">
CREATE TABLE U_NC (ID INTEGER NOT NULL, Data TEXT);
WITH gen(rowid) AS (
  VALUES (0)
  UNION ALL
    SELECT rowid+1 FROM gen
  LIMIT <h>$NB</h>)
INSERT INTO U_NC SELECT rowid, '('||rowid||')' FROM gen ORDER BY RANDOM();
</script>

💡 On ne vous demandera pas de comprendre le fonctionnement de <script type="c-sql">gen</script>.

1. <q-text code-lang="sql">Créez les tables <script type="c-text">U_PK</script> et <script type="c-text">U_UN</script> que vous remplirez ensuite à partir de <script type="c-text">U_NC</script>.</q-text>

### Mesurer la durée d'exécution d'une requête

1. Activez la mesure de la durée d'exécution des requêtes via <script type="c-text">.timer on</script>.
1. Activez l'explication des requêtes via <script type="c-text">.eqp on</script>.
   - <script type="c-sql">SCAN <h>$T</h></script> : lis les lignes de la table <script type="c-text"><h>$T</h></script> unes à unes ;
   - <script type="c-sql">SEARCH <h>$T</h> USING</script> : recherche des entrées dans la table <script type="c-sql"><h>$T</h></script> via un index,
1. <q-text>Sur <script type="c-text">U_NC</script>, <script type="c-text">U_PK</script>, et <script type="c-text">U_UN</script>, mesurez la durée d'exécution de la requête suivante : <script type="c-sql">SELECT * FROM <j>$T</h> WHERE ID == 42;</script></q-text>
1. <q-text>Comment expliquez-vous la différence de résultats entre <script type="c-text">U_NC</script>, et <script type="c-text">U_PK</script>/<script type="c-text">U_UN</script> ?</q-text>
1. <q-text>Exécutez <script type="c-sql">SELECT * FROM <h>$T</h> LIMIT 20;</script> sur <script type="c-text">U_PK</script> et <script type="c-text">U_UN</script>, qu'observez-vous ?</q-text>
1. Exécutez la requête suivante sur <script type="c-text">U_PK</script> et <script type="c-text">U_UN</script> :
   <script type="c-sql">
   SELECT COUNT(Data) FROM <h>$T</h> WHERE ID BETWEEN 200000 AND 400000;
   </script>
1. <q-text>Comment pourriez-vous expliquer la différence sur les temps d'exécution ?</q-text>

💡 Préfixer une requête SQL par <script type="c-sql">EXPLAIN QUERY PLAN </script> permet de l'expliquer sans l'exécuter.

### Créer un INDEX

Comme nous l'avons vu en CM, les SGBD ajoutent un index sur les contraintes <script type="c-sql">UNIQUE</script>. Cela s'explique par le fait qu'à chaque insertions, le SGBD doit vérifier la contrainte, et donc rechercher si la valeur existe déjà dans la(les) colonne(s).

💡 La commande <script type="c-text">.indexes <h>$T</h></script> permet d'afficher la liste des index de la table <script type="c-text"><h>$T</h></script>.

1. Vérifiez que <script type="c-text">U_UN</script> possède bien un index, et que <script type="c-text">U_NC</script> n'en possède pas.
2. <q-text code-lang="sql">Créez un index sur <script type="c-text">U_NC</script> via <script type="c-sql">CREATE INDEX _<h>$T</h>_<h>$COL</h> ON <h>$T</h>(<h>$COL</h>);</script>.</q-text>
3. Listez les index de <script type="c-text">U_NC</script>, puis exécutez la requête <script type="c-sql">SELECT</script> précédente.
4. <q-text>Qu'observez-vous quant à la vitesse d'exécution ?</q-text>
5. <q-text code-lang="sql">Créez une table <script type="c-sql">D(ID INTEGER NOT NULL)</script>.</q-text>
6. Remplissez cette table via la requête SQL suivante (insère duplicats) :
   <script type="c-sql">INSERT INTO D SELECT ABS(RANDOM())%<h>$NB</h> FROM U_NC;</script>
1. <q-text>Mesurez la vitesse d'execution de la requête <script type="c-sql">SELECT</script> sur cette table :</q-text>
2. <q-text code-lang="sql">Créez un index sur cette table.</q-text>
3. <q-text>Mesurez à nouveau la vitesse d'execution, qu'observez-vous ?</q-text>

⚠ Les index ont un coût lors des <script type="c-sql">INSERT</script>/<script type="c-sql">UPDATE</script>/<script type="c-sql">DELETE</script>, il ne faut pas en abuser.

💡 En réalité, il est rare de devoir créer des index manuellement.

</main>
    </body>
</html>