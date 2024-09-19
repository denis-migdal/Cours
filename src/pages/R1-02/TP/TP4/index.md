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

<todo>SQL speed (.timer on) : requires big databases...<br/>
https://manpages.ubuntu.com/manpages/bionic/en/man1/sqlite3.1.html
.stats on (+ de détails et conso mémoire : osef)

.progress 1 --reset => avec EXPLAIN (mais compliqué).

- cartesian doesn't work ? : SQLite opti...
- SELECT * FROM A, B WHERE A.INT+1 == B.INT+1 (disable opti)


- CREATE TABLE T2 ( ID INTEGER PRIMARY KEY AUTOINCREMENT, V TEXT);
- INSERT INTO TABLE (V) VALUES ('A'); // repeat many...
- INSERT INTO T0 SELECT * FROM T2 ORDER BY RANDOM();
  -> ADD slides CM1 + CM2...

SELECT STATUS risposta, DATETIME('now') data_ins 
FROM   sourceTable

- USING + rapide ON
- cartesian pas possible de tester tel quel -> SGBD optimise !!!
  - mais bonne pratique de ne pas l'utiliser quand même...

EXPLAIN QUERY (plus de détail et moins compréhensible)
EXPLAIN QUERY PLAN (.eqp on)
  -> explique la requête
  -> aucune idée de ce que ça fait, mais on note que c'est identique... SGBD fait opti....

.eqp on ?
  -> execution plan

- PK vs no PK in JOIN/WHERE : ok.
- PK on PK vs PK on FK vs FK on PK
  -> PK/FK / FK/PK : SGBD réorganise.

  -> cartesian : scan et scan : produit cartésien
  -> WHERE ID == ID : scan et search : SGBD optimise, transforme en jointure

- SELECT COUNT(*) FROM T3 WHERE ID IN ( SELECT ID FROM T4 );
- SELECT COUNT(*) FROM T3 WHERE ID IN ( SELECT ID FROM T4 WHERE T3.ID == T4.ID );
( 100,000 entries... ) [too much].
- vs SELECT COUNT(*) FROM T3 WHERE EXISTS ( SELECT ID FROM T4 WHERE T3.ID == T4.ID ); ?

-> [CORRELATED] / Scalar/list

-> ORDER BY RANDOM()

</todo>

## Subqueries (correlated vs non correlated)

1. Chimiste qui ont fait au moins une expérience (in ID list distinct)
1. Chimiste qui ont fait au moins une expérience (correlated, a une entrée - existe)

=> compare perfs.

## JOIN

- IN vs JOIN
  -> join qui retourne plusieurs résultats identique, puis un autre join (=> grosse table avec duplicats).
  -> vs in (subquery).

  ==> compter nombre de lignes.
  ==> comparer vitesse exec sur tables grosses.

    => + avec/sans FK/PK ?

- attention complexité exo, d'abord 1 seul jointure
- donner UML...

1. Info chimiste ajouté aux lignes de résultats
1. group by : concat n° exp.
1. somme des masses utilisées par chimistes.
1. chimiste nombre d'exp : trier
1. compter seulement nombre d'oublis : trier
1. group by country : le plus d'xp réussies.

1. Tx de réussite => count + case...

</main>
    </body>
</html>