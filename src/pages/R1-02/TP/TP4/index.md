<!DOCTYPE html>
<html>
    <head>
        <title>TP4 (BDR1)</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <header></header>
        <main>

# TP4 : Fusions et jointures

## Consignes

<tp-consignes></tp-consignes>

Dans le cadre de ce TP, vous utiliserez la base "chimie" disponible via [ce lien](../../../../assets/sql/chimiste.sqlite).

## Sous-requêtes

[TODO: resultats.resultat => CHECK IN()].

1. Déterminez la structure de la base de donnée et de ses tables.<br/>
   [TODO: champ pour déposer image du schéma.]
1. Écrivez les requêtes SQL permettant d'obtenir les chimistes ayant au moins un résultat d'expérience.<br/>
   a. En utilisant une sous-requête non-corrélée.
   <pre lang=sql contenteditable></pre>
   b. En utilisant une sous-requête corrélée.
   <pre lang=sql contenteditable></pre>

## JOIN

1. Pour chaque résultats, affichez le numéro d'expérience et le nom, prénom du chimiste l'ayant réalisé.
   <pre lang=sql contenteditable></pre>
1. Modifiez la requête précédente afin d'afficher le nom, prénom des chimistes suivis des numéro, concaténés, des expériences qu'ils ont réalisés (colonne `exps`).
   <pre lang=sql contenteditable></pre>
1. Modifiez la requête précédente afin d'afficher le nom, prénom des chimistes suivis du nombre d'expériences *différentes* qu'ils ont réalisés.  (colonne `nb_exps`)
   <pre lang=sql contenteditable></pre>
1. Modifiez la requête précédente afin de n'afficher que ceux qui n'ont pas effectué d'expérience.
   <pre lang=sql contenteditable></pre>
1. Vous remarquerez que la requête ne retourne aucun résultats, pourquoi ?
   <pre contenteditable></pre>
1. Modifiez la requête précédente pour afficher *tous* les chimistes avec leur nombre d'expériences distinctes.
   <pre contenteditable lang="sql"></pre>
1. Modifiez la requête précédente pour afficher les chimistes avec leur moyenne des températures des expériences qu'ils ont réalisés (colonne `avg_temp`).
   <pre contenteditable lang="sql"></pre>
1. Pourquoi utiliser `LEFT JOIN` pour la seconde jointure ?
   <pre contenteditable></pre>
1. En repartant de la requête 6, et en utilisant la structure ci-dessous, affichez le nom, prénom des chimistes suivis de leur taux de réussite :
   <sql-code class="d4rk block">AVG( CASE WHEN $COND THEN 1 ELSE 0 END ) as taux</sql-code>
   <pre contenteditable lang="sql"></pre>

## Mesurer la performance des sous-requêtes et jointures

1. Activez `.timer on` et `.eqp on`.
1. Re-créez les tables `U_NC`, `U_PK`, et `D` du TP3, mais cette fois avec <sql-code class='d4rk'><var>$NB</var></sql-code> = `1000000`, et sans manuellement créer d'index.

### Sous-requêtes

1. Exécutez la requête suivante (sous-requête avec clef primaire) :
   <sql-code>SELECT SUM(ID) FROM U_PK WHERE ID IN (SELECT ID FROM D);</sql-code>
1. Exécutez la requête suivante (sous-requête corrélée avec <sql-code>IN</sql-code>) :
   <sql-code class="block">SELECT ID FROM U_PK
 WHERE ID IN ( SELECT ID FROM D WHERE ID == U_PK.ID )
 LIMIT 100;</sql-code>
1. La requête précédente limite le résultat aux 100 premières entrées, calculez le temps qu'il faudrait sans cette limite.
   <pre contenteditable></pre>
1. Transformez cette requête pour utiliser <sql-code>EXISTS</sql-code>.
   <pre lang="sql" contenteditable></pre>
1.  Calculez son temps d'exécution sans limite, expliquer l'avantage de <sql-code>EXISTS</sql-code>.
    <pre contenteditable></pre>

### JOIN

1. Exécutez, une à une, les requêtes suivantes (JOIN avec clef primaire) :
   <sql-code class="block">SELECT SUM(U_PK.ID) FROM U_PK INNER JOIN D    USING(ID);
   SELECT SUM(U_PK.ID) FROM D    INNER JOIN U_PK USING(ID);</sql-code>
1. D'après l'explication de la requête, l'ordre des tables dans une jointure <sql-code>INNER</sql-code> a-t-il un impact sur l'exécution ?
   <pre contenteditable></pre>
1. Testez la même jointure avec <sql-code>NATURAL</sql-code>, puis avec <sql-code>ON</sql-code>.
   <pre lang="sql" contenteditable></pre>
1. Cela impacte-t-il l'exécution ?
   <pre contenteditable></pre>
1. Exécutez unes à unes les requêtes suivantes :
   <sql-code>SELECT SUM(U_NC.ID) FROM U_NC INNER JOIN D    USING(ID);
SELECT SUM(U_NC.ID) FROM D    INNER JOIN U_NC USING(ID);</sql-code>
1. Comment expliquer le `USING AUTOMATIC COVERING INDEX` dans l'explication de la requête, bien qu'aucune de ces 2 tables n'ont d'index ?
   <pre contenteditable></pre>

### Produit cartésien

1. Exécutez la requête suivante (produit cartésien avec clef primaire) :
   <sql-code>SELECT SUM(U_PK.ID) FROM U_PK, D WHERE U_PK.ID == D.ID;</sql-code>
1. Comment expliquer qu'une telle requête soit aussi rapide ?
   <pre contenteditable></pre>
1. Exécutez la requête ci-dessous, puis calculez son temps d'exécution sans limites.
   <sql-code>SELECT U_PK.ID FROM U_PK, D
                     WHERE U_PK.ID - D.ID == 0 LIMIT 100;
</sql-code>


### Sous-requêtes vs jointures

<sql-code class="block d4rk">
SELECT <var>$FCT</var>(ID) FROM U_PK WHERE ID IN (SELECT ID FROM D);
SELECT <var>$FCT</var>(U_PK.ID) FROM U_PK INNER JOIN D USING(ID);
</sql-code>

1. Exécutez une à une les requêtes ci-dessus avec :
   - <sql-code>SUM()</sql-code>
   - <sql-code>MAX()</sql-code>
   - <sql-code>COUNT(DISTINCT )</sql-code>
1. Pourquoi <sql-code>DISTINCT</sql-code> n'est pas nécessaire pour la requête avec sous-requête ?
   <pre contenteditable></pre>
1. Pourquoi des différence dans les explications de requêtes des jointures ?
   <pre contenteditable></pre>
1. Vaut-il mieux utiliser des sous-requêtes ou des jointures ? Argumentez.
   <pre contenteditable></pre>

</main>
    </body>
</html>