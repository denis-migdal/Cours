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

# TP2 : ???

*💡 Ce TP est inspiré de sources en partie inconnues.*

## Consignes (bis repetitae)

## Modification des entrées de la table

<todo>Echaper un guillement dans CM ? (type string)</todo>

1. En une seule requête SQL, insérez les chimistes suivant dans table `chimiste` :
   <pre lang="sql" contenteditable></pre>
<pre style="margin-left: -3em; padding: 0; padding-left: 8px; font-size: 0.85rem; line-height: calc( 1.2 * 0.85rem)">┌────┬─────────────┬─────────┬─────────────────┬────────────┬────────────────┐
│ id │     nom     │ prenom  │ annee_naissance │ annee_mort │ pays_naissance │
├────┼─────────────┼─────────┼─────────────────┼────────────┼────────────────┤
│ 35 │ Markov      │ Andrei  │ 1856            │ 1922       │ Russie         │
│ 34 │ van 't Hoff │ Jacobus │ 1852            │ 1911       │ Pays-Bas       │
│ 33 │ Kekule      │ August  │ 1896            │ 1829       │ Allemagne      │
└────┴─────────────┴─────────┴─────────────────┴────────────┴────────────────┘</pre>
2. Sachant que 33, 34, et 35 sont les identifiants les plus élevés, affichez les 2 chimistes que vous venez d'insérer.
   <pre lang="sql" contenteditable></pre>
3. Vous remarquerez que August Kekule est mort avant d'être né... En une seule requête, invertissez les années de naissance et de mort de l'entrée d'identifiant `33`.
   <pre lang="sql" contenteditable></pre>
1. Pourquoi utiliser le nom/prénom en place de l'identifiant est dangereux lors de requêtes `UPDATE` et `DELETE` ?
   <div contenteditable></div>
1. Il semblerait que Andrei Markov soit un mathématicien, et non un chimiste, supprimez-le (de la table).
   <pre lang="sql" contenteditable></pre>

## Quelques prétraitements

Qqs prétraitements avant d'afficher...

Pour rappel, utilisé après vaut mieux faire certains trucs dans le langage de prog.

### Assigner un label (conditions)

=> le premier catégories numériques calculée, mais autres ? e.g. textuelles ?
- epoque (cf TP3/8).

desc.

- vivant mort : status (rappel) [cf ci-dessous]

### Concaténations

- Prenom | Nom (maj)

descr.

- Concat : nom_complet

### Format numbers

- (?) `ROUND($N, 2)`.

desc.

- round pas beau, printf/format* (like print in python), "%6.2f" (cf ci-dessous)

* print dans SQLite <3.38.
[L] : %f [type] => on peut préciser [len] [.pad] / %e (exp) / %g (mix %f et %e)  // pour info: (%x %o : octal et hexa) // %s un texte, on peut aussi utiliser op. de concat.

### Format date

<todo>Add CM</todo>

- instead of 2024 en dur, extraire année actuelle. (obtenir année seule, puis on peut ajouter/soustraire dessus - pas besoin de conversion).

DATE_FORMAT / STRFTIME (python/sqlite)

%F 		ISO 8601 date: YYYY-MM-DD
    %Y 		year: 0000-9999
    %m 		month: 01-12
    %d 		day of month: 01-31

%T 		ISO 8601 time: HH:MM:SS
    %H 		hour: 00-24
    %M 		minute: 00-59
    %S 		seconds: 00-59

## Agrégat sur une colonne

=> fct agrégat dans les cols => regroupe toutes les entrées au sein d'une même ligne.

- affichez le nombre de chimistes dans la table (i.e. compter le nombre d'entrées) [give].
- prev. rq + groupez les chimistes par pays (add pays)
- order by + rename
- give where : marche pas explain
- au moins 5

## Agrégat sur une expression

Fct agrégat, pas seulement colonne mais expression autorisé, e.g. agrégat sur formule de calcul d'age du TP précédent.

- age moyen des chimistes dans la base.
- + arrondir la colonne âge moyen à 2 décimales après la virgule
- Idem (même steps), âge moyen des chimistes par pays, classé par ordre croissant, pays > 65 ans.

</main>
    </body>
</html>