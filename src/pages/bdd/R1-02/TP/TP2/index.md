<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>TP2 (BDR)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/tp/index.css"  rel="stylesheet">
        <script  src="/skeleton/tp/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# TP2 : Manipuler des entrées

*💡 Ce TP est inspiré de sources en partie inconnues.*

## Consignes

<tp-consignes></tp-consignes>

💡 Dans ce TP, vous reprendrez la base <script type="c-text">chimiste.sqlite</script> utilisée au TP précédent.

⚠ Vous activerez l'option <script type="c-text">.changes on</script> afin d'afficher le nombre de lignes modifiées lors des insertions/modifications/suppressions.


## Modification des entrées de la table

1. <q-text code-lang="sql">En une seule requête SQL, insérez les chimistes suivant dans table <script type="c-text">chimiste</script> :</q-text>
   <script type="c-text">
   ┌────┬─────────────┬─────────┬─────────────────┬────────────┬────────────────┐
   │ id │     nom     │ prenom  │ annee_naissance │ annee_mort │ pays_naissance │
   ├────┼─────────────┼─────────┼─────────────────┼────────────┼────────────────┤
   │ 35 │ Markov      │ Andrei  │ 1856            │ 1922       │ Russie         │
   │ 34 │ van 't Hoff │ Jacobus │ 1852            │ 1911       │ Pays-Bas       │
   │ 33 │ Kekule      │ August  │ 1896            │ 1829       │ Allemagne      │
   └────┴─────────────┴─────────┴─────────────────┴────────────┴────────────────┘
   </script>
2. <q-text code-lang="sql">Affichez les chimistes que vous venez d'insérer (leurs <script type="c-text">id</script> sont les plus grands).</q-text>
3. <q-text code-lang="sql">Vous remarquerez que August Kekule (<script type="c-text">id=33</script>) est mort avant d'être né...<br/>
   En une seule requête, échangez ses années de naissance et de mort.</q-text>
1. <q-text>Pourquoi, dans les requêtes <script type="c-text">UPDATE</script>/<script type="c-text">DELETE</script>, utiliser <script type="c-text">id</script> au lieu de nom/prénom ?</q-text>
1. <q-text code-lang="sql">Andrei Markov est un mathématicien, pas un chimiste, supprimez-le (de la table).</q-text>

## Quelques prétraitements

Comme vu dans le CM, il est possible de pré-traiter les données avant de les afficher ou de les manipuler. Pour rappel, lorsqu'une API est utilisée, il est souvent préférable de faire les prétraitements côté langage de programmation que côté SQL.

### Concaténations

1. <q-text code-lang="sql">Affichez les nom (en majuscules) et prénom des chercheurs.</script>

 🕮 L'opérateur de concaténation <script type="c-sql">||</script> permet de concaténer des valeurs.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Par exemple <script type="c-sql">'a'||'b'</script> retournera <script type="c-sql">'ab'</script>.

2. <q-text code-lang="sql">Affichez, dans une colonne "nom complet", le nom (en majuscules) et le prénom, séparés par un espace.</q-text>

### Assigner des valeurs à une catégorie (conditions)

Un pré-traitement possible est d'assigner une catégorie à un ensemble de valeurs.<br/>Par exemple, associer à chaque chercheur une "époque", en :
- ajoutant 25 à son année de naissance ;
- effectuant la division entière du résultat par 100 ;
- re-multipliant le résultat par 100.

1. <q-text code-lang="sql">Affichez le nom, prénom, et époque, des chercheurs.</q-text>

Lorsque la catégorie ne peut être calculée numériquement, il convient alors d'utiliser des **conditions**. Ces dernières s'écrivent sous la forme suivante : <script type="c-sql">
CASE
   WHEN <h>$COND</h> THEN <h>$VAL_SI_COND_VRAI</h>
              ELSE <h>$VAL_SI_COND_FAUX</h>
END
</script>

2. <q-text code-lang="sql">Affichez le nom, prénom, et status (vivant ou mort), des chercheurs.</q-text>

### Formatter des dates

Il est fréquent qu'on souhaite extraire des informations d'une date, ou l'afficher différemment. Pour cela, on utilise la fonction <script type="c-sql">DATE_FORMAT(<h>$FORMAT</h>, <h>$DATE</h>)</script> (<script type="c-sql">STRFTIME</script> pour SQLite). Comme en Python, le format est une chaîne de caractère qui défini les éléments à afficher :
- <script type="c-text">%F</script> : la date, équivalant à <script type="c-text">%Y-%m-%d</script>.
    - <script type="c-text">%Y</script> : l'année
    - <script type="c-text">%m</script> : le mois
    - <script type="c-text">%d</script> : le jour
- <script type="c-text">%T</script> : l'heure, équivalent à <script type="c-text">%H:%M:%S</script>.
    - <script type="c-text">%H</script> : l'heure
    - <script type="c-text">%M</script> : les minutes
    - <script type="c-text">%S</script> : les secondes

1. <q-text pts="1">Exécutez la requête ci-dessous, puis décrivez le résultat.
   <script type="c-sql">
      SELECT STRFTIME('%d/%m', DATE());
   </script>
</q-text>

Au TP précédent, pour calculer l'âge des chimistes encore vivant, nous avions noté l'année courante en dur. L'âge retourné ne sera ainsi plus correct l'année prochaine.

2. <q-text code-lang="sql">Utilisez <script type="c-sql">STRFTIME</script> pour obtenir l'année actuelle.</q-text>
2. <q-text code-lang="sql">Affichez le nom, prénom, et âge des chimistes, calculé avec l'année actuelle.</q-text>

💡 Vous constatez que l'expression permettant d'obtenir l'âge des chimistes est complexe. Vous verrez plus tard des manières permettant d'améliorer la lisibilité de telles requêtes, et d'éviter la recopie cette expression d'une requête à une autre :
- via des colonnes générées (Cf CM3).
- via des vues (cf BDR2).
- via des fonctions (cf BDR2?).

### Formatter des nombres

Comme vous le remarquez, toutes les colonnes sont alignées à gauche, ce qui rend les nombres peu lisibles. Pour corriger cela, on peut formater les nombres via la fonction <script type="c-sql">FORMAT(<h>$FORMAT</h>, <h>$VAL</h>)</script> (<script type="c-sql">PRINTF</script> pour SQLite < 3.38), qui s'utilise de manière analogue à <script type="c-sql">DATE_FORMAT()</script>.

1. Exécutez les exemples suivants :
   <script type="c-sql">
    SELECT PRINTF('(%d)'    , 2.3)  as nb;
    SELECT PRINTF('(%4d)'   , 2.3)  as nb;
    SELECT PRINTF('(%4.2f)' , 2.3)  as nb;
    SELECT PRINTF( '%4.2f'  , 2.3)  as nb;
   </script>

Le format suit la structure suivante : <script type="c-text">%<h>[$len]</h><h>[.$prec]</h><h>$T</h></script>
- <script type="c-text"><h>$T</h></script> est le format d'affichage :
  - <script type="c-text">d</script> : entier.
  - <script type="c-text">x</script> : entier en hexadécimal.
  - <script type="c-text">f</script> : réel.
  - <script type="c-text">e</script> : réel en notation exponentielle.
  - <script type="c-text">s</script> : chaîne de caractères.
- <script type="c-text"><h>$len</h></script> est la longueur minimale (facultatif). Ajoute des espaces en début de chaîne.
- <script type="c-text"><h>.$prec</h></script> est le nombre de chiffres après la virgule à afficher (facultatif).

2. <q-text code-lang="sql">Affichez l'âge des chimistes avec une précision de deux chiffres après la virgule, et une longueur minimale telle que les âges soient correctement alignés.</q-text>

## Agrégat sur une colonne

Pour rappel, il est possible d'agréger plusieurs entrées au sein d'une même ligne grâce à la clause <script type="c-sql">GROUP BY <h>$COL[,...]</h></script>. Si une fonction d'agrégat est utilisée sans clause <script type="c-sql">GROUP BY</script>, toutes les entrées seront regroupées au sein d'une même ligne.

1. Exécutez la requête suivante :
   <script type="c-sql">
   SELECT MIN(annee_naissance) as min,
          MAX(annee_naissance) as max
        FROM chimiste;
   </script>
1. <q-text code-lang="sql">Affichez le nombre de chimistes dans la table (i.e. compter le nombre d'entrées).</q-text>
1. <q-text code-lang="sql">Affichez chaque pays avec son nombre de chimistes (colonne "nb").</q-text>
1. <q-text code-lang="sql">Ordonnez le résultat par nombre de chimistes décroissant.</q-text>
1. <q-text>Pourquoi ajouter la clause <script type="c-sql">WHERE nb >= 5</script> produira une erreur ?</q-text>
1. <q-text code-lang="sql">Ajoutez une clause pour n'afficher que les pays ayant au moins 5 chimistes.</q-text>

## Fonction d'agrégat sur une expression

Les fonctions d'agrégats peuvent prendre en paramètre une colonne, mais aussi des expressions. Dans ce cas, il évaluera l'expression pour chaque lignes, avant d'exécuter la fonction d'agrégation.

1. <q-text code-lang="sql">En repartant de la requête effectuée dans la section "Formatter des nombres", calculez l'âge moyen des chimistes dans la base dans une colonne "m(age)".</q-text>
2. <q-text code-lang="sql">En ajoutant les clauses une à une, modifiez cette requête pour afficher le pays et l'âge moyen des ses chimistes, classés par ordre croissant d'âge moyen.</q-text>
3. <q-text code-lang="sql">Reprenez la requête précédente, mais n'affichez que les lignes correspondant aux pays ayant un âge moyen supérieur à 65 ans.</q-text>

</main>
    </body>
</html>