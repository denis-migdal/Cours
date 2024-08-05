<div align="center">
  <h1>[PROJECT TITLE]</h1>

  <p>[Project description</p>
</div>

## Build

- `npm run build`
- `npm run watch`

## Contenu

- Tableur : 2x10h TP.
- Prise en main des outils.

- dev log.
- BDR (8j) : 4x2h CM + 4x2h TD + 6x2h TP

- Intro cyber : fin de semestre
- TW/IDN/PWV  : fin de semestre

## TODO

Motivation/Problematic first.

### Structure

- Warnings plus visuels
- $XXX fix in inline (?) code.
- scroll too early https://github.com/vercel/next.js/issues/3303

### Tableur

- 10xTP
- Slides + cheat sheet + TP + CM...

#### WebCalc

- repo

- doc API...

- simple
	- edit formula : click = add ref.
	- edit formula : move ref when moving it.
	- `#VALEUR !`.
	- value % => show as percent
	- Move selection (keep formula + modify other formulas)
	- extends (repeat or formula or +1 of nbr or +1d for dates)

- selection
	- click hold (select range...)
	- super
	- ctrl+click (composition of selections?)
	- extend value

- Refactors/Bugs
	- getRect/setRect : use bottom instead of top ? update when dim changes/resize ?
	- selection : not class but thing over with opacity...
	- rawValue (after formula eval - cache...) vs rawContent (can be Formula)
	- 100% => 100.00%
	- Range <= (RangeCell/Range_:/Range union/Range intersect) => toCellList (with offset ? or Offset Range to produce new one ?)
	- Ctrl+C : put data in pastebin ???

- poignée de recopie : supprimer quand dst dans sélection.
- formula range token
	- show when clicking formula bar
	- extend range of reference + ?
- resize/merge cols/lines
- ctrl+Z...
- graphs (outside).
- copy area : animate dashed border.

#### Webodf

Test also : https://docs.sheetjs.com/docs/demos/math/summary
  https://docs.sheetjs.com/docs/ => style dans version payante...

https://github.com/webodf/WebODF?tab=readme-ov-file

- https://github.com/webodf/WebODF/issues/954
- https://github.com/webodf/WebODF/issues/291 (runtime.js)


#### Prise en main

	Prise en main, références, et mise en forme
	1. [cf TP1] Interface + Références + Formules simples (op. maths simples)
		+ cours BDR comparaison avec tableur.
		- Où trouver la documentation (aide+site web+Forum libreOffice?)

#### Mise en forme

	2. [cf TP6+2] Plages, mise en forme	
		- Commentaires
		- Hyperlien
		- On peut insérer plein d'autres trucs dont images.

#### Fonctions et graphiques (1/2)

-> vous comprendrez que les diagrammes pas trop possibles actuellement...
	-> ou ChartHtml link ?

- Statistiques et diagrammes (2 séances)
	statistiques (MIN/MOY/etc), début diagramme, autres fonctions stats plus avancées (freq, compter etc)
	3. Graphiques simples (TP6+2?)

#### Fonctions et graphiques (2/2)

	4. [cf TP1+7+6?] Fonctions + NB.SI pour graphiques + complexes.

#### Tableaux (1/2)

- idem : trop avancé pour démo.
- Tableaux (2 séances) - p-e un peu de réorganisation à faire...
	sous-totaux, filtrer, trier, recherche valeur
	5. [cf TP2+3] Trier + Formattage conditionnels + validité données / valeurs acceptés ?
		- scinder/fixer lignes/colonnes.
  
#### Tableaux (2/2)

	6. [cf TP2]   filtres, sous-totaux, recherche valeurs, validité données
		- liens avec SQL ?

#### Tableaux dynamiques (1/2)

- Contenu/Tableaux dynamiques (2 séances)
	(tableaux croisés dynamiques (son TP8) solveur (son TP4)
	7. [cf TP4] Scénario et solveurs ? [<= retirer ou juste introduire ???] // Remplacer par données liées ou un truc du genre ? (Accross sheet + docs) + Import/Export ?
		- Données/Statistiques
  
-Data
	- valeurs liées
	- importation/exportation de données

#### Tableaux dynamiques (2/2)

	8. [cf TP8] Tableaux croisés dynamique (j'ai noté liens avec SQL ?)


#### Scripts et stats avancées ?
- Scripts (2 séances)
	9.  Scripts python & JS. [install package for that...]

https://tech.kibatic.com/divers/macro-python-pour-libreoffice/
https://wiki.documentfoundation.org/Documentation/DevGuide/Text_Documents (ctrl+F calc)
https://excel-pratique.com/fr/vba/premiere_macro

Range() = X; / .Value
[il existe + de trucs de selection]

.Font.prop (quelques unes)

=> qqs events
	https://excel-pratique.com/fr/vba/evenements_classeur

=> créer une fonction calc.

https://www.youtube.com/watch?v=d5Mga1TibJc&t=797s
https://www.youtube.com/watch?v=k2e2ADQBOiU

	- obtain doc.
		- GetValue / SetValue
		- Offset()
		- Range() ?
		- Clear()
		- Last/First
		- https://python-ooo-dev-tools.readthedocs.io/en/latest/help/calc/format/direct/cell/font_effects.html
https://help.libreoffice.org/latest/lo/text/sbasic/shared/03/sf_calc.html

- Stats
	- Données/Statistiques

#### Fonctionnalités de sécurité

	10. Scripts python (ou plutôt Fonctionnalités de sécurité ?)

- Sécu
	- protections de cellules
		- outils/Protéger la feuille
	- suivi des modifications
	- signature
	- caviardage

### BDR1 (8j)

+ (2j) Slides
+ (2j) Cheat sheet
+ (4j) Compléter exo TP3-4 avec notions vu en CM + TP5

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
