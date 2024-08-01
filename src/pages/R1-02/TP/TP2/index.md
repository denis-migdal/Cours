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

## Consignes

<tp-consignes></tp-consignes>

💡 Dans ce TP, vous reprendrez la base `chimiste.sqlite` utilisée au TP précédent.

⚠ Vous activerez l'option `.changes on` afin d'afficher le nombre de lignes modifiées lors des insertions/modifications/suppressions.


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

Comme vu dans le CM, il est possible de pré-traiter les données avant de les manipuler ou de les afficher. Pour rappel, lorsqu'une interface de programmation est utilisée, il est souvent préférable de faire les prétraitements côté langage de programmation que côté SQL.

### Concaténations

1. Affichez le nom (en majuscules) et prénom des chercheurs.
   <pre lang="sql" contenteditable></pre>

Il est possible de concaténer des valeurs en utilisant l'opérateur de concaténation `||`. Par exemple `a || b` retournera `ab`.

2. Affichez le nom (en majuscules) et le prénom, séparés par un espace, dans une même colonne nommée "nom complet".
   <pre lang="sql" contenteditable></pre>

### Assigner des valeurs à une catégorie (conditions)

Un premier pré-traitement possible est d'assigner à un ensemble de valeur, une catégorie. Par exemple, associer à chaque chercheur une "époque", en :
- ajoutant 25 à son année de naissance ;
- effectuant la division entière du résultat par 100 ;
- re-multipliant le résultat par 100.

1. Affichez le nom, prénom, et époque, des chercheurs.
   <pre lang="sql" contenteditable></pre>

Lorsque la catégorie ne peut être calculée numériquement, il convient alors d'utiliser des **conditions**. Ces dernières s'écrivent sous la forme suivante :

```sql
CASE
    WHEN $COND THEN $VAL_SI_COND_VRAI
               ELSE $VAL_SI_COND_FAUX
END
```

2. Affichez le nom, prénom, et status (vivant ou mort), des chercheurs.
   <pre lang="sql" contenteditable></pre>

### Formatter des dates

<todo>Add CM</todo>

Il est fréquent qu'on souhaite extraire des informations d'une date, ou l'afficher différemment. Pour cela, on utilise la fonction `DATE_FORMAT($FORMAT, $DATE)` (`STRFTIME` pour SQLite). Comme en Python, le format est une chaîne de caractère qui défini les éléments à afficher :
- `%F` : la date, équivalant à `%Y-%m-%d`.
    - `%Y` : l'année
    - `%m` : le mois
    - `%d` : le jour
- `%T` : l'heure, équivalent à `%H:%M:%S`.
    - `%H` : l'heure
    - `%M` : les minutes
    - `%S` : les secondes

1. Exécutez la requête ci-dessous, qu'obtenez-vous ?
   <div contenteditable></div>

   ```sql
   SELECT STRFTIME('%d/%m', DATE());
   ```

Au TP précédent, pour calculer l'âge des chimistes encore vivant, nous avions noté l'année courante en dur. L'âge retourné ne sera ainsi plus correct l'année prochaine.

2. Utilisez `STRFTIME` pour obtenir l'année actuelle.
   <pre lang="sql" contenteditable></pre>
2. Affichez le nom, prénom, et âge des chimistes, cette fois en utilisant `STRFTIME` pour obtenir l'année actuelle.
   <pre lang="sql" contenteditable></pre>

💡 Vous constaterez que l'expression permettant de calculer correctement l'âge des chimistes est complexe. Vous verrez plus tard des manières permettant d'améliorer la lisibilité de telles requêtes, et d'éviter la recopie cette expression d'une requête à une autre :
- via des colonnes générées (Cf CM3).
- via des vues (cf BDR2).
- via des fonctions (cf BDR2?).

### Formatter des nombres

Comme vous le remarquez, toutes les colonnes sont alignées à gauche, ce qui rend les nombres peu lisibles. Pour corriger cela, on peut formater les nombres via la fonction `FORMAT($FORMAT, $NB)` (`PRINTF` pour SQLite < 3.38), qui s'utilise de manière analogue à `DATE_FORMAT()`.

1. Exécutez les exemples suivants :
   ```sql
    SELECT PRINTF('(%d)'    , 2.3)  as nb;
    SELECT PRINTF('(%4d)'   , 2.3)  as nb;
    SELECT PRINTF('(%4.2f)' , 2.3)  as nb;
    SELECT PRINTF( '%4.2f'  , 2.3)  as nb;
   ```

Le format suit la structure suivante : `%[$len][.$prec]$T`
- `$T` est le format d'affichage :
  - `d` : entier.
  - `x` : entier en hexadécimal.
  - `f` : réel.
  - `e` : réel en notation exponentielle.
  - `s` : chaîne de caractères.
- `$len` est la longueur minimale (facultatif). Ajoute des espaces en début de chaîne si trop petit.
- `.$prec` est le nombre de chiffres après la virgule à afficher (facultatif).

2. Affichez l'âge des chimistes avec une précision de deux chiffres après la virgule, et une longueur minimale telle que les âges soient correctement alignés.
   <pre lang="sql" contenteditable></pre>

## Agrégat sur une colonne

<todo>Add CM</todo>

Pour rappel, il est possible d'agréger plusieurs entrées au sein d'une même ligne grâce à la clause `GROUP BY $COL[,...]`. Si une fonction d'agrégat est utilisée sans clause `GROUP BY`, toutes les entrées seront regroupées au sein d'une même ligne.

1. Exécutez la requête suivante :
   ```sql
   SELECT MIN(annee_naissance) as min,
          MAX(annee_naissance) as max
        FROM chimiste;
   ```
1. Affichez le nombre de chimistes dans la table (i.e. compter le nombre d'entrées).
   <pre lang="sql" contenteditable></pre>
1. Groupez les entrées par pays afin d'afficher le pays et son nombre de chimistes (colonne "nb").
   <pre lang="sql" contenteditable></pre>
1. Ordonnez le résultat par nombre de chimistes décroissant.
   <pre lang="sql" contenteditable></pre>
1. Pourquoi ajouter la clause `WHERE nb >= 5` produira une erreur ?
   <div contenteditable></div>
1. Ajoutez la clause permettant de n'afficher que les lignes correspondant aux pays avec au moins 5 chimistes.
   <pre lang="sql" contenteditable></pre>

## Fonction d'agrégat sur une expression

Les fonctions d'agrégats peuvent prendre en paramètre une colonne, mais aussi des expressions. Dans ce cas, il évaluera l'expression pour chaque lignes, avant d'exécuter la fonction d'agrégation.

1. En repartant de la requête effectuée dans la section "Formatter des nombres", calculez l'âge moyen des chimistes dans la base dans une colonne "m(age)".
   <pre lang="sql" contenteditable></pre>
2. En ajoutant les clauses une à une, modifiez cette requête pour afficher le pays et l'âge moyen des ses chimistes, classés par ordre croissant d'âge moyen.
   <pre lang="sql" contenteditable></pre>
3. Reprenez la requête précédente, mais n'affichez que les lignes correspondant aux pays ayant un âge moyen supérieur à 65 ans.
   <pre lang="sql" contenteditable></pre>

</main>
    </body>
</html>