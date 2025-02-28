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

# TP2 : Manipuler des entrées

*💡 Ce TP est inspiré de sources en partie inconnues.*

## Consignes

<tp-consignes></tp-consignes>

💡 Dans ce TP, vous reprendrez la base `chimiste.sqlite` utilisée au TP précédent.

⚠ Vous activerez l'option `.changes on` afin d'afficher le nombre de lignes modifiées lors des insertions/modifications/suppressions.


## Modification des entrées de la table

1. En une seule requête SQL, insérez les chimistes suivant dans table `chimiste` :
   <pre lang="sql" contenteditable></pre>
<pre>┌────┬─────────────┬─────────┬─────────────────┬────────────┬────────────────┐
│ id │     nom     │ prenom  │ annee_naissance │ annee_mort │ pays_naissance │
├────┼─────────────┼─────────┼─────────────────┼────────────┼────────────────┤
│ 35 │ Markov      │ Andrei  │ 1856            │ 1922       │ Russie         │
│ 34 │ van 't Hoff │ Jacobus │ 1852            │ 1911       │ Pays-Bas       │
│ 33 │ Kekule      │ August  │ 1896            │ 1829       │ Allemagne      │
└────┴─────────────┴─────────┴─────────────────┴────────────┴────────────────┘</pre>
2. Affichez les chimistes que vous venez d'insérer (leurs `id` sont les plus grands).
   <pre lang="sql" contenteditable></pre>
3. Vous remarquerez que August Kekule (`id=33`) est mort avant d'être né...<br/>
   En une seule requête, échangez ses années de naissance et de mort.
   <pre lang="sql" contenteditable></pre>
1. Pourquoi, dans les requêtes `UPDATE`/`DELETE`, utiliser `id` au lieu de nom/prénom ?
   <div contenteditable></div>
1. Andrei Markov est un mathématicien, pas un chimiste, supprimez-le (de la table).
   <pre lang="sql" contenteditable></pre>

## Quelques prétraitements

Comme vu dans le CM, il est possible de pré-traiter les données avant de les afficher ou de les manipuler. Pour rappel, lorsqu'une API est utilisée, il est souvent préférable de faire les prétraitements côté langage de programmation que côté SQL.

### Concaténations

1. Affichez les nom (en majuscules) et prénom des chercheurs.
   <pre lang="sql" contenteditable></pre>

 🕮 L'opérateur de concaténation <sql-code>||</sql-code> permet de concaténer des valeurs.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Par exemple <sql-code>'a'||'b'</sql-code> retournera <sql-code>'ab'</sql-code>.

2. Affichez, dans une colonne "nom complet", le nom (en majuscules) et le prénom, séparés par un espace.
   <pre lang="sql" contenteditable></pre>

### Assigner des valeurs à une catégorie (conditions)

Un pré-traitement possible est d'assigner une catégorie à un ensemble de valeurs.<br/>Par exemple, associer à chaque chercheur une "époque", en :
- ajoutant 25 à son année de naissance ;
- effectuant la division entière du résultat par 100 ;
- re-multipliant le résultat par 100.

1. Affichez le nom, prénom, et époque, des chercheurs.
   <pre lang="sql" contenteditable></pre>

Lorsque la catégorie ne peut être calculée numériquement, il convient alors d'utiliser des **conditions**. Ces dernières s'écrivent sous la forme suivante :<br/>
<sql-code class="d4rk block">CASE
    WHEN <var>$COND</var> THEN <var>$VAL_SI_COND_VRAI</var>
               ELSE <var>$VAL_SI_COND_FAUX</var>
END</sql-code>

2. Affichez le nom, prénom, et status (vivant ou mort), des chercheurs.
   <pre lang="sql" contenteditable></pre>

### Formatter des dates

Il est fréquent qu'on souhaite extraire des informations d'une date, ou l'afficher différemment. Pour cela, on utilise la fonction <sql-code class="d4rk">DATE_FORMAT(<var>$FORMAT</var>, <var>$DATE</var>)</sql-code> (<sql-code class="d4rk">STRFTIME</sql-code> pour SQLite). Comme en Python, le format est une chaîne de caractère qui défini les éléments à afficher :
- `%F` : la date, équivalant à `%Y-%m-%d`.
    - `%Y` : l'année
    - `%m` : le mois
    - `%d` : le jour
- `%T` : l'heure, équivalent à `%H:%M:%S`.
    - `%H` : l'heure
    - `%M` : les minutes
    - `%S` : les secondes

1. Exécutez la requête ci-dessous, décrivez le résultat.
   <div contenteditable></div>

   ```sql
   SELECT STRFTIME('%d/%m', DATE());
   ```

Au TP précédent, pour calculer l'âge des chimistes encore vivant, nous avions noté l'année courante en dur. L'âge retourné ne sera ainsi plus correct l'année prochaine.

2. Utilisez <sql-code>STRFTIME</sql-code> pour obtenir l'année actuelle.
   <pre lang="sql" contenteditable></pre>
2. Affichez le nom, prénom, et âge des chimistes, calculé avec l'année actuelle.
   <pre lang="sql" contenteditable></pre>

💡 Vous constatez que l'expression permettant d'obtenir l'âge des chimistes est complexe. Vous verrez plus tard des manières permettant d'améliorer la lisibilité de telles requêtes, et d'éviter la recopie cette expression d'une requête à une autre :
- via des colonnes générées (Cf CM3).
- via des vues (cf BDR2).
- via des fonctions (cf BDR2?).

### Formatter des nombres

Comme vous le remarquez, toutes les colonnes sont alignées à gauche, ce qui rend les nombres peu lisibles. Pour corriger cela, on peut formater les nombres via la fonction <sql-code class="d4rk">FORMAT(<var>$FORMAT</var>, <var>$VAL</var>)</sql-code> (<sql-code>PRINTF</sql-code> pour SQLite < 3.38), qui s'utilise de manière analogue à <sql-code>DATE_FORMAT()</sql-code>.

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
- `$len` est la longueur minimale (facultatif). Ajoute des espaces en début de chaîne.
- `.$prec` est le nombre de chiffres après la virgule à afficher (facultatif).

2. Affichez l'âge des chimistes avec une précision de deux chiffres après la virgule, et une longueur minimale telle que les âges soient correctement alignés.
   <pre lang="sql" contenteditable></pre>

## Agrégat sur une colonne

Pour rappel, il est possible d'agréger plusieurs entrées au sein d'une même ligne grâce à la clause <sql-code class="d4rk">GROUP BY <var>$COL[,...]</var></sql-code>. Si une fonction d'agrégat est utilisée sans clause <sql-code>GROUP BY</sql-code>, toutes les entrées seront regroupées au sein d'une même ligne.

1. Exécutez la requête suivante :
   ```sql
   SELECT MIN(annee_naissance) as min,
          MAX(annee_naissance) as max
        FROM chimiste;
   ```
1. Affichez le nombre de chimistes dans la table (i.e. compter le nombre d'entrées).
   <pre lang="sql" contenteditable></pre>
1. Affichez chaque pays avec son nombre de chimistes (colonne "nb").
   <pre lang="sql" contenteditable></pre>
1. Ordonnez le résultat par nombre de chimistes décroissant.
   <pre lang="sql" contenteditable></pre>
1. Pourquoi ajouter la clause `WHERE nb >= 5` produira une erreur ?
   <div contenteditable></div>
1. Ajoutez une clause pour n'afficher que les pays ayant au moins 5 chimistes.
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