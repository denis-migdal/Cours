
## Supports

- CM : séparer support en 1 support/CM.
- CM : améliorer les exemples.
- CM : certaines parties (details) non-rédigée.
- CM : refaire sql-interactive + animations + initial scrollTo.
- CM4 Slides : refaire animations
- CM4 Slides : ss-rqt corrélée : mieux expliquer la différence avec une animation.

## Idées TD

### TD3

Comment bien choisir les clef primaires/étrangères
Comment bien découper en tables (conception), dépendance fonctionnelle (?).

### TP5

- interfaces pgAdmin / python bindings (injections) ?

## Idée animation sous-requête

Contenu:
  - subqueries animations...
    - T1 table
    - subquery (updated if correlated)
    - subquery table
    -> exec op for cmp
    - result table.

- ss-rq visu (?)
  - normale : calculée une seule fois.

  - animation : < [P/=] >
    - X in (....)
    - 4 in (....) - 1) curseur sur liste 2) when found, next value and add line.

    - X in (QUERY)
    - 4 in [...] <- (QUERY [replace values ?])
      - 1) liste construite avec le curseur
      - 2) when found, next value.

  - normale
    - X in (liste/value) => once (....). 
      -> build result table below, one line by one.
  - corrélée, recalculée à chaque fois.
    - X in | (value change (car calculé))
      -> build result table below, one line by one.
