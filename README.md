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
- scroll too early https://github.com/vercel/next.js/issues/3303

### Tableur

- 10xTP
- Slides + cheat sheet + TP + CM...

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

### BDR2 ?

=> decl fonctions ?

=> CREATE INDEX (+ PARTIAL INDEX)

=> use API / prepare / binds / injections
	=> VIRTUAL TABLE

=> transactions : gestion des erreurs
    ON CONFLICT 
      => que faire si erreur.
        => ROLLBACK (default ?)
        => ABORT : n'annule pas prev query de la transaction
        => FAIL : echec seulement sur la ligne concernée (autres lignes modifiée requête pas annulée)
        => IGNORE
        => REPLACE : idx/unique thing.
	+ INSERT/UPDATE OR
	=> temp table
=> procédure / pl/sql ?

=> Vues (+ INSERT/DELETE/UPDATE on views ???)
=> WITH (=> créé une table temporaire, un peu comme view)

=> Triggers (reject some SQL queries ???) / hooks

=> OVER / PARTITION / WINDOW / FILTER ?

=> droits d'accès
	=> chiffrer db / table / col ?

=> Mics
	- soundex ? (détecter fautes de frappes ?) / levenstein ? https://sql.sh/fonctions/soundex
	- algèbre relationnelle [TD ou BR2] ?