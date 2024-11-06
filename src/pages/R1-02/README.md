## Supports

-> regénérer les supports (attention aux marges pour versions impr.)

- CM
  -> 1h/séance suffisant.
  -> séparer le support en 4.
  -> améliorer les exemples, rédiger les détails non-rédigés.
  -> améliorer/ajouter les exemples interactifs/animations
    -> CM2
      -> mieux expliquer les agrégations ?
    -> CM3
      -> exemple de pourquoi index + rapide.
    -> CM4
      -> ss-rqt corrélée : une animation pour montrer la différence.
      -> join : exemples + explicites (e.g. produit/vente/etc)
      -> exemple de JOIN chaîné
      -> inverser l'ordre des tables de l'exemple (#57) et montrer LEFT JOIN.
  -> rajouter certains conseils de TD en CM.
    -> CM1
      -> attention uniquement cols demandées, respecter la casse, indenter la rq.
    -> CM4
      -> comment bien faire un join ?
        -> suivre les flèches
        -> commencer par les plus petites tables/résultats.

- TP
  -> TP1
    -> ajouter des questions pour COALESCE pour mieux comprendre
    -> c/c pour éviter erreur recopie quand met la réponse sur le sujet.
  -> TP2
    -> on peut utiliser ORDER BY & LIMIT pour DELETE.

## Organisation DS

- imprimer le cheat sheet (attention aux marges).
- mettre en place un serveur web en mode DS (pour le sujet).

### Notes (MISC)

-> backtic ` => noms colonnes
           ' => str
	   " => can be both à éviter.

TP1
  - reformuler TP BDR : a si non null sinon b.

=> TP4 préciser inner join.
=> TP3/4 => IN MEMORY !!!

=> TP3
  - T_PK : première entrée => dernière entrée.
  - /!\
  - PRAGMA foreign_keys = ON;

=> les commentaires en SQL ? (--)

=> chimiste.sqlite
  -> mélanger les lignes !!!
  -> refaire les tables et contraintes

### TP5

- test postgres GUI (plateforme UCA BDD)

## Idées TD

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
