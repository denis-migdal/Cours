
## Supports

- CM: 1h suffisant ?
-> backtic ` => noms colonnes
           ' => str
	   " => can be both à éviter.

- CM : séparer support en 1 support/CM.
- CM : améliorer les exemples.
- CM : certaines parties (details) non-rédigée.
- CM : refaire sql-interactive + animations + initial scrollTo.
- CM4 Slides : refaire animations
- CM4 Slides : ss-rqt corrélée : mieux expliquer la différence avec une animation.

### Autres

=> chimiste.sqlite : mélanger les lignes !!!
=> -- commentaires en sql (TP4 ?)

-> mieux expliquer agrégats
-> fonction d'agrégat ou d'agrégation ?
-> HAVING lignes pas entrées.

### TP1


- reformuler TP BDR : a si non null sinon b.
- qqs tests de coalesce ?
- + de questions pour ceux qui finissent en avance ?
- rappel : relire questions (pas de cols en trop), relire reps, copier/coller pour éviter coquilles.
- " vs '
- casse
- espaces
- ne pas renommer les fichiers !!!

### TP3

- Create table + test contraintes + import/export (TP5 ?)

### TP5

- test postgres GUI (plateforme UCA BDD)

## Idées TD

### TD1 lire doc SQLite

### TD3

Comment bien choisir les clef primaires/étrangères
Comment bien découper en tables (conception), dépendance fonctionnelle (?).

### TP5

- interfaces pgAdmin / python bindings (injections) ?


- PRAGMA optimize;  / OPTIMIZE => avant chaque fermeture de la database. (?)

## Export/import

Fréquent CSV (e.g. tableur)

import/export/save table (schema/data)
  -> as SQL
  -> as CSV
  ?
+ .mode (exports) / .dump  // .import

=> mesure perfs db in memory.

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
