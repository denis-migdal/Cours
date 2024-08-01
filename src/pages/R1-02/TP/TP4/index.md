<!DOCTYPE html>
<html>
    <head>
        <title>TP2 (BDR1)</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <header></header>
        <main>

# TP4 : ???

## Consignes

<tp-consignes></tp-consignes>

+ .timer on (?)
  https://manpages.ubuntu.com/manpages/bionic/en/man1/sqlite3.1.html

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