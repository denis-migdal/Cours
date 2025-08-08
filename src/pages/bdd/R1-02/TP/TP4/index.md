<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>TP4 (BDR)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/tp/index.css"  rel="stylesheet">
        <script  src="/skeleton/tp/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# TP4 : Fusions et jointures

## Consignes

<tp-consignes></tp-consignes>

Dans le cadre de ce TP, vous utiliserez la base "chimie" disponible via [ce lien](/assets/sql/chimie.sqlite).

## Sous-requêtes

1. <q-file type=".png,.svg">Déterminez la structure de la base de donnée et de ses tables.</q-file>
1. Écrivez les requêtes SQL permettant d'obtenir les chimistes ayant au moins un résultat d'expérience.<br/>
   a. <q-text code-lang="sql">En utilisant une sous-requête non-corrélée.</q-text>
   b. <q-text code-lang="sql">En utilisant une sous-requête corrélée.</q-text>

## JOIN

1. <q-text code-lang="sql">Pour chaque résultats, affichez le numéro d'expérience et le nom, prénom du chimiste l'ayant réalisé.</q-text>
1. <q-text code-lang="sql">Sans modifier la jointure, adaptez la requête précédente afin d'afficher le nom, prénom des chimistes suivis des numéro, concaténés, des expériences qu'ils ont réalisés (colonne <script type="c-text">exps</script>).</q-text>
1. <q-text code-lang="sql">Modifiez la requête précédente afin d'afficher le nom, prénom des chimistes suivis du nombre d'expériences *différentes* qu'ils ont réalisés.  (colonne <script type="c-text">nb_exps</script>)</q-text>
1. <q-text code-lang="sql">Sans modifier la jointure, adaptez la requête précédente afin de n'afficher que ceux qui n'ont pas effectué d'expérience.</q-text>
1. <q-text>Vous remarquerez que la requête ne retourne aucun résultats, pourquoi ?</q-text>
1. <q-text code-lang="sql">Modifiez la requête précédente pour afficher *tous* les chimistes avec leur nombre d'expériences distinctes.</q-text>
1. <q-text code-lang="sql">Modifiez la requête précédente pour afficher les chimistes avec leur moyenne des températures des expériences qu'ils ont réalisés (colonne <script type="c-text">avg_temp</script>).</q-text>
1. <q-text>Pourquoi utiliser <script type="c-text">LEFT JOIN</script> pour la seconde jointure ?</q-text>
1. <q-text code-lang="sql">En repartant de la requête 6, et en utilisant la structure ci-dessous, affichez le nom, prénom des chimistes suivis de leur taux de réussite :
   <script type="c-sql">AVG( CASE WHEN <h>$COND</h> THEN 1 ELSE 0 END ) as taux</script></q-text>

## Mesurer la performance des sous-requêtes et jointures

⚠ Pour des raisons de performances, vous devrez utiliser une base de données "in memory". Pour cela, lancez une nouvelle instance de SQLite sans préciser ni ouvrir de fichiers.

1. Activez <script type="c-text">.timer on</script> et <script type="c-text">.eqp on</script>.
1. Re-créez les tables <script type="c-text">U_NC</script>, <script type="c-text">U_PK</script>, et <script type="c-text">D</script> du TP3, mais cette fois avec <script type="c-sql"><h>$NB</h></script> = <script type="c-text">1000000</script>, et sans manuellement créer d'index.

### Sous-requêtes

1. Exécutez la requête suivante (sous-requête avec clef primaire) :
   <script type="c-sql">
   SELECT SUM(ID) FROM U_PK WHERE ID IN (SELECT ID FROM D);
   </script>
1. Exécutez la requête suivante (sous-requête corrélée avec <script type="c-text">IN</script>) :
   <script type="c-sql">
SELECT ID FROM U_PK
 WHERE ID IN ( SELECT ID FROM D WHERE ID == U_PK.ID )
 LIMIT 100;
   </script>
1. <q-text>La requête précédente limite le résultat aux 100 premières entrées, calculez le temps qu'il faudrait sans cette limite.</q-text>
1. <q-text code-lang="sql">Transformez cette requête pour utiliser <script type="c-sql">EXISTS</script>.</q-text>
1. <q-text>Calculez son temps d'exécution sans limite, expliquer l'avantage de <script type="c-sql">EXISTS</script>.</q-text>

### JOIN

1. Exécutez, une à une, les requêtes suivantes (JOIN avec clef primaire) :
   <script type="c-sql">
   SELECT SUM(U_PK.ID) FROM U_PK INNER JOIN D    USING(ID);
   SELECT SUM(U_PK.ID) FROM D    INNER JOIN U_PK USING(ID);
   </script>
1. <q-text>D'après l'explication de la requête, l'ordre des tables dans une jointure <script type="c-sql">INNER</script> a-t-il un impact sur l'exécution ?</q-text>
1. <q-text code-lang="sql">Testez la même jointure avec <script type="c-text">NATURAL</script>, puis avec <script type="c-text">ON</script>.</q-text>
1. <q-text>Cela impacte-t-il l'exécution ?</q-text>
1. Exécutez unes à unes les requêtes suivantes :
   <script type="c-sql">
   SELECT SUM(U_NC.ID) FROM U_NC INNER JOIN D    USING(ID);
   SELECT SUM(U_NC.ID) FROM D    INNER JOIN U_NC USING(ID);
   </script>
1. <q-text>Comment expliquer le <script type="c-sql">USING AUTOMATIC COVERING INDEX</script> dans l'explication de la requête, bien qu'aucune de ces 2 tables n'ont d'index ?</q-text>

### Produit cartésien

1. Exécutez la requête suivante (produit cartésien avec clef primaire) :
   <script type="c-sql">
   SELECT SUM(U_PK.ID) FROM U_PK, D WHERE U_PK.ID == D.ID;
   </script>
1. <q-text>Comment expliquer qu'une telle requête soit aussi rapide ?</q-text>
1. Exécutez la requête ci-dessous, puis calculez son temps d'exécution sans limites.
   <script type="c-sql">
      SELECT U_PK.ID FROM U_PK, D
                    WHERE U_PK.ID - D.ID == 0 LIMIT 100;
   </script>

### Sous-requêtes vs jointures

<script type="c-sql">
SELECT <h>$FCT</h>(ID)      FROM U_PK WHERE ID IN (SELECT ID FROM D);
SELECT <h>$FCT</h>(U_PK.ID) FROM U_PK INNER JOIN D USING(ID);
</script>

1. Exécutez une à une les requêtes ci-dessus avec :
   - <script type="c-sql">SUM()</script>
   - <script type="c-sql">MAX()</script>
   - <script type="c-sql">COUNT(DISTINCT )</script>
1. <q-text>Pourquoi <script type="c-text">DISTINCT</script> n'est pas nécessaire pour la requête avec sous-requête ?</q-text>
1. <q-text>Pourquoi des différence dans les explications de requêtes des jointures ?</q-text>
1. <q-text>Vaut-il mieux utiliser des sous-requêtes ou des jointures ? Argumentez.</q-text>

</main>
    </body>
</html>