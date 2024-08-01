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
+ Compléter exo TP3-4 avec notions vu en CM.

#### Cheat sheet

- SELECT/others + clauses
- constraints/table.
- Sqlite commands
- formats + pre-proc functions.

#### TD3

Comment bien choisir les clef primaires/étrangères
Comment bien découper en tables (conception), dépendance fonctionnelle (?).

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
