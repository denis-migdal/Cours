<div align="center">
  <h1>[PROJECT TITLE]</h1>

  <p>[Project description</p>
</div>

## Build

- `npm run build`
- `npm run watch`

## Contenu

- BDR : 4x2h CM + 4x2h TD + 6x2h TP

## TODO

Motivation/Problematic first.

### Structure

- Warnings plus visuels
- $XXX fix in inline (?) code.
- scroll too early https://github.com/vercel/next.js/issues/3303

### BDR1

+ Slides
+ Cheat sheet

#### TD3

Comment bien choisir les clef primaires/étrangères
Comment bien découper en tables (conception), dépendance fonctionnelle (?).

#### TP1

- tester WHERE et autres avec SELECT avant de tenter un UPDATE/DELETE.

#### TP5

- interfaces pgAdmin / python bindings (injections) ?

##### Interface pgAdmin ?

##### Quelques commandes SQLite ? (prise en main)

Quelques unes en TP2/3/4 en fonction des besoins ?

Config show headers : https://stackoverflow.com/questions/5924149/how-to-configure-sqlite-to-display-headers-by-default

.databases / .fullschema/.schema / .tables

+ .mode (exports) / .dump  // .import

+ .read / + .shell / .save

+ .timer on (?)
  https://manpages.ubuntu.com/manpages/bionic/en/man1/sqlite3.1.html

.help

#### TP2

Voir les autres pré-traitements

#### TP3

import/export/save table (schema/data)
  -> as SQL
  -> as CSV
  ?

Bonnes pratiques :

- PRAGMA optimize;  / OPTIMIZE => avant chaque fermeture de la database.

- FK : on delete/on update/cascade.

##### TP4

- IN vs JOIN
  -> join qui retourne plusieurs résultats identique, puis un autre join (=> grosse table avec duplicats).
  -> vs in (subquery).
  ==> compter nombre de lignes.
  ==> comparer vitesse exec sur tables grosses.

### BDR2

Teasing BDR2 ?

- TP ou BDR2 : https://sql.sh/fonctions/soundex
  - soundex ? (détecter fautes de frappes ?) / levenstein ?
- BDR2 : vues, droits d'accès, pl/sql/procédures ? / transactions / prepare / injections et protection ? / chiffrer BDD entière / hooks
  algèbre relationnelle [TD ou BR2] ?

avec transactions : gestion des erreurs
    ON CONFLICT 
      => que faire si erreur.
        => ROLLBACK (default ?)
        => ABORT : n'annule pas prev query de la transaction
        => FAIL : echec seulement sur la ligne concernée (autres lignes modifiée requête pas annulée)
        => IGNORE
        => REPLACE : idx/unique thing.

=> Vues (+ INSERT/DELETE/UPDATE on views ???)

=> Triggers (reject some SQL queries ???)
