<div align="center">
  <h1>TPEngine</h1>

  <p>[Project description</p>
</div>

## Build

- `npm run build`
- `npm run watch`

## Procédure

1. Dans un dossier mettre
  1. les rendus
  2. sujet.url
  3. corrige.answers (export du corrigé)
2. Compresser et importer.

## TODO

- export to moodle
  - Name -> Moodle ID conversion...
- export to Odin
  - Name -> Odin ID conversion...
  - Compute final grade.

- detect cheat
  - merge & sort
  - verif identical zip.
  - if answer is equal to corrige : set grade 1 / if empty set grade 0...
  - similarity metric ?
  - suspicious set flag

- docs (?)
- use :not(:defined) { visibility: hidden } to hide non upgraded elements.