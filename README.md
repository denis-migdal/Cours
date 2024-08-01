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
+ Compléter exo TP avec notions vu en CM.

#### Cheat sheet

- SELECT/others + clauses
- constraints/table.
- Sqlite commands
- formats + pre-proc functions.

#### TD3

Comment bien choisir les clef primaires/étrangères
Comment bien découper en tables (conception), dépendance fonctionnelle (?).

#### TP1

- indenter sa ligne : aligner les clauses, plus lisible (et joli).

- Astuce : pas tout écrire en un coup mais par étape :
  - SELECT cols FROM x; -> add clauses one by one.
  - idem calculs.
  -> si erreur il y a permet de voir où.

- tab autocompletion + double tab (possibilités) => pas hésiter à en abuser
  - keywords, col names

- ouvrir parenthèse/etc. fermer aussi tôt puis revenir en arrière avec les flèches afin d'éditer le contenu.

- éviter de réécrire
  - ne pas hésiter à faire des copier/coller (rappeler)
  - history (fleches), si modifier requête prec.


#### TP2

Voir les autres pré-traitements

#### TP3

import/export/save table (schema/data)
  -> as SQL
  -> as CSV
  ?
+ .mode (exports) / .dump  // .import
+ .fullschema/.schema

Bonnes pratiques :

- PRAGMA optimize;  / OPTIMIZE => avant chaque fermeture de la database.

- FK : on delete/on update/cascade.

##### TP4

+ .timer on (?)
  https://manpages.ubuntu.com/manpages/bionic/en/man1/sqlite3.1.html

- IN vs JOIN
  -> join qui retourne plusieurs résultats identique, puis un autre join (=> grosse table avec duplicats).
  -> vs in (subquery).
  ==> compter nombre de lignes.
  ==> comparer vitesse exec sur tables grosses.

#### TP5

- interfaces pgAdmin / python bindings (injections) ?

### BDR2

- prog interfaces + binds + SQL injections.
- fonctions

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
