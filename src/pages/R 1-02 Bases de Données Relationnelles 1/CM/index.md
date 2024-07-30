<!DOCTYPE html>
<html>
    <head>
        <title>CM</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <style>
            body {
                display:flex;
                flex-direction: column;
                height: 100vh;
                margin: 0;
                padding: 0;
            }
            main {
                padding: 0 12px;
                position: relative;
                overflow-y: auto;
            }
            header {
                z-index: 1;
                margin-left: 50px;
                font-weight: bold;
                & > span {
                    position: relative;
                }
                & > span:not(:hover) > .menu {
                    display: none;
                }
                & > span > .menu {
                    position: absolute;
                    bottom: 0;
                    transform: translate(0, 100%);
                    left: 0;
                    background-color: black;
                    border: 1px solid gray;
                    border-top: none;
                    & > a {
                        display: block;
                        white-space: nowrap;
                        padding: 5px 10px;
                        &:hover {
                            background-color: #222;
                        }
                    }
                }
                & > span::before {
                    content: " > "
                }
                & > span:hover::before {
                    content: " v "
                }
            }
        </style>
        <header></header>
        <main>
<div id='menu' style="display:none"></div>

<todo> 

Contenu:
  - subqueries animations...
    - T1 table
    - subquery (updated if correlated)
    - subquery table
    -> exec op for cmp
    - result table.

Détails:
  - split CM into different files.
  - espace moodle (avec navigation)
  - slides PDF LaTeX.
  - cheat-sheet...

<!--

CM4

- exemples dynamiques/animés (jointures/cartésien).

- ss-rq visu (?)
  - normale : calculée une seule fois.

  - animation : < [P/=] >
    - X in (....)
    - 4 in (....) - 1) curseur sur liste 2) when found, next value and add line.

    - X in (QUERY)
    - 4 in [...] <- (QUERY [replace values ?])
      - 1) liste construite avec le curseur
      - 2) when found, next value.

  - normale
    - X in (liste/value) => once (....). 
      -> build result table below, one line by one.
  - corrélée, recalculée à chaque fois.
    - X in | (value change (car calculé))
      -> build result table below, one line by one.
-->
</todo>

# Requêter une base de données

## Introduction à SQL

### Les SGBD

Il est fréquent de devoir traiter de larges quantités de données :

- pour une entreprise : des listes de clients, de commandes, de produits, etc.
- pour une administration : des listes d'administrés, de transactions, etc.
- pour un site Web : des logs de consultation de ses différentes pages, etc.
- ...

Ces données peuvent représenter des milliers, des millions (voire bien plus), d'éléments. Il est évident qu'on ne peut pas les manipuler "à la main". Par exemple, si on souhaite compter le nombre de ventes d'une entreprise à la main, c'est :

- **chronophage** :<br/>
  *35 jours pour un million de ventes à raison de 1 vente/seconde et 8h/jours.*
- **source d'erreurs** :<br/>
  *Ventes comptées en double, sautées, etc.*
- **incomplet** :<br/>
  *Les ventes peuvent être stockées à plusieurs endroits différents, certaines perdues.*

Il est alors nécessaire d'utiliser un logiciel permettant d'efficacement :

- **stocker et organiser les données**.
- **manipuler les données** : ajouter/modifier/supprimer des données.
- **requêter les données** : e.g. compter le nombre de ventes.

Pour répondre à ces besoins, on utilise un **Système de Gestion de Bases de Données** (SGBD). Un SGBD est un logiciel permettant de créer, stocker, manipuler et requêter des bases de données. Un SGBD répond aussi à d'autres besoins comme :

- **la cohérence des données :** garantie l'absence de données invalides.<br/>
  *e.g. avoir un âge négatif.*
- **la robustesse :** résister aux pannes.<br/>
  *e.g. l'ordinateur plante alors qu'on est en train de modifier une donnée.*
- **le contrôle d'accès :** qui peut faire quoi sur quelles données ?.<br/>
  *e.g. l'administrateur peut modifier et les utilisateurs lire les données.*
- **les logs :** que s'est-il passé ? qui a fait quoi et quand ?<br/>
  *e.g. après une panne, qu'était-il en train de faire ?*<br/>
  *e.g. le stagiaire a fait une fausse manipulation, qu'a-t-il réellement fait ?*
- **accès concurrent :** modifications simultanées de données.

💡 Dans le cadre de ce module, on se concentrera sur **SQL** (*Structured Query Language*), un langage permettant, entres autres, de structurer et de manipuler des bases de données.

### Les SGBD SQL

Le langage SQL est normalisé par la norme ISO/CEI 9075. Cependant certaines fonctionnalités diffèrent selon le SGBD utilisé.

Parmi eux, **SQLite** est un SGBD léger où chaque base est stockée sous la forme d'un fichier. Il est très utilisé pour stocker et gérer des données locales ayant peu d'accès concurrents.

Pour des usages plus intensifs, **PostgreSQL**, **MySQL**, et **MariaDB** sont des SGBD open sources plus complets, sous la forme de **serveurs SQL**. On interagit alors avec le SGBD via un **client** qui se charge de :

- se connecter au serveur ;
- d'envoyer la requête SQL ;
- et de réceptionner la réponse.

Les clients peuvent prendre plusieurs formes :

- une interface graphique de requêtage (*e.g.  ???*).
- une interface graphique de gestion de bases de données (*e.g. pgAdmin*).
- une application en ligne de commandes (*e.g. psgl, mysql*).
- une API utilisée dans le langage de programmation de votre choix.

### Les tables SQL

Comme dans un tableur, les données sont représentées sous forme de **tables** :

- les lignes correspondent à des **entrées** ;
- les colonnes correspondent aux différentes propriétés de ces entrées.

Par exemple, la table suivante contient 2 entrées ayant les propriétés `ID`, `Nom`, `Prenom`, `Age` :

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Nom</th>
      <th>Prenom</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Doe</td>
      <td>John</td>
      <td>32</td>
    </tr><tr>
      <td>2</td>
      <td>Durand</td>
      <td>John</td>
      <td>64</td>
    </tr>
  </tbody>
</table>

#### Vocabulaire

- Une **base de donnée** est composée de plusieurs tables.
- Un **schéma** de table décrit les colonnes de la table (cf CM3).
- Les lignes d'une table sont appelées **entrées** ou **enregistrements**.

💡 Vous pouvez voir la base de données comme un fichier tableur, et les tables comme les feuilles de calculs contenues dans ce fichier.

💡 Les tables sont aussi parfois appelées **relations**, d'où le terme *base de données relationnelle*.

### Les types SQL

En SQL chaque colonne a un type, i.e. le type des données qu'on peut y insérer. SQL supporte en général 4 familles de types :

- `TEXT` : une chaîne de caractère.
- `BLOB` : des données binaires. 
- `INT`/`INTEGER` : un nombre entier.
- `REAL` : un nombre décimal.
- `ANY`  : accepte n'importe quelle valeur.

💡 Par défaut, chaque type accepte la valeur `NULL`, qui indique une absence de données.

En général, les SGBD (sauf SQLite) offrent une variété de sous-types permettant d'optimiser leur stockage. Une table (non-exhaustive) des sous-types les plus communs vous est proposée ci-dessous à titre informatif :

<details>
  <summary><em><strong>Montrer la table des sous-types</strong></em></summary>

  <table>
    <thead>
      <tr>
        <th>Famille</th>
        <th>Type</th>
        <th>Octets</th>
        <th>Description<th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan='9'>TEXT</td>
        <td>CHAR</td>
        <td>1 à 3</td>
        <td>Caractère UTF8</td>
      </tr><tr>
        <td>CHAR(N)</td>
        <td>N*1 à N*3</td>
        <td>Taille fixe</td>
      </tr><tr>
        <td>VARCHAR(N)</td>
        <td>0 à N*3</td>
        <td>Taille variable</td>
      </tr>
      <tr><td></td><td></td><td></td></tr>
      <tr>
        <td>NCHAR</td>
        <td>2</td>
        <td>Caractère UTF16</td>
      </tr><tr>
        <td>NCHAR(N)</td>
        <td>N*2</td>
        <td>Taille fixe</td>
      </tr><tr>
        <td>NVARCHAR(N)</td>
        <td>0 à N*2</td>
        <td>Taille variable</td>
      </tr>
      <tr><td></td><td></td><td></td></tr>
      <tr>
        <td>TEXT(N)</td>
        <td>N</td>
        <td>Pour de gros textes.</td>
      </tr>
      <tr><td></td><td></td><td></td><td></td></tr>
      <tr>
        <td rowspan='2'>BLOB</td>
        <td>BIT(N)</td>
        <td>N/8</td>
        <td>Champ de bits</td>
      </tr><tr>
        <td>BLOB(N)</td>
        <td>N</td>
        <td></td>
      </tr>
      <tr><td></td><td></td><td></td><td></td></tr>
      <tr></tr>
        <td rowspan='6'>INT</td>
        <td>BOOLEAN</td>
        <td>1</td>
        <td></td>
      </tr>
        <td>SMALLINT</td>
        <td>2</td>
        <td></td>
      </tr><tr>
        <td>INTEGER</td>
        <td>4</td>
        <td></td>
      </tr><tr>
        <td>BIGINT</td>
        <td>8</td>
        <td></td>
      </tr><tr>
        <td>NUMERIC(N)</td>
        <td>N</td>
        <td></td>
      </tr><tr>
        <td>ENUM(val[,...])</td>
        <td>2</td>
        <td>Peut aussi être TEXT</td>
      </tr>
      <tr><td></td><td></td><td></td><td></td></tr>
      <tr>
        <td rowspan='4'>REAL</td>
        <td>FLOAT</td>
        <td>4</td>
        <td></td>
      </tr>
      <tr>
        <td>DOUBLE</td>
        <td>8</td>
        <td></td>
      </tr>
      <tr>
        <td>FLOAT(N)</td>
        <td>N</td>
        <td>Virgule flottante</td>
      </tr>
      <tr>
        <td>DECIMAL(N,S)</td>
        <td>N</td>
        <td>Précision fixe</td>
      </tr><tr><td></td><td></td><td></td><td></td></tr>
      <tr>
        <td rowspan='4'>DATE</td>
        <td>DATE</td>
        <td>4</td>
        <td>10 en SQLite (TEXT)</td>
      </tr>
      <tr>
        <td>TIME</td>
        <td>8 à 12</td>
        <td></td>
      </tr>
      <tr>
        <td>DATETIME</td>
        <td>12 à 16?</td>
        <td>19 en SQLite (TEXT)</td>
      </tr>
      <tr>
        <td>TIMESTAMP</td>
        <td>8</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  💡 En fonction du SGBD utilisé, il existe une pléthore d'autres types plus ou moins complexes.

</details>

### Documentation

💡 Vous trouver plus amples documentation via les liens suivants :

- SQL :
  - https://www.w3schools.com/sql/
  - https://sql.sh
- SGBD :
  - SQLite : https://www.sqlite.org
  - PostgreSQL : https://www.postgresql.org/docs/
  - MySQL : https://dev.mysql.com/doc/

## Requêtes de bases

### Les types de requêtes

Il existe plusieurs types de commandes SQL permettant d'effectuer différent types actions :

- `SELECT` : lire des données ;
- `UPDATE` : modifier des entrées ;
- `INSERT` : insérer des entrées ;
- `DELETE` : supprimer des entrées.

Nous allons dans un premier temps nous concentrer sur le premier, et verrons les 3 autres par la suite.

## La requête SELECT

La requête SQL `SELECT` permet de récupérer des données présentes dans une base de donnée, et se présente usuellement sous la forme suivante :

```sql
SELECT $COLS[,...] FROM $TABLE; 
```

- `$TABLE` est le nom de la table SQL à requêter.

- `$COLS[,...]` est la liste des colonnes à récupérer séparées par ",".
  
  💡 `*` correspond à l'ensemble des colonnes.

⚠ Il est d'usage de ne récupérer que les colonnes dont on a réellement besoin. En effet, sur de grandes tables et de grosses requêtes, réduire le nombre de colonnes récupérées permet de réduire le volume des données transférées. 

### Exemples

<sql-interactive id="col-sql">
  <sql-dymtable slot="post" id="col-table" table="Users"></sql-dymtable>
  <span slot="options" data-cols="*">Retourner toutes les colonnes</span>
  <span slot="options" data-cols="Nom">Retourner une seule colonne</span>
  <span slot="options" data-cols="ID, Prenom">Retourner plusieurs colonnes</span>

```sql
SELECT $COLS FROM Users;
```

</sql-interactive>

<script type="module">
  import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

  const coltable = await LISS.qs("#col-table");
  const colsql   = await LISS.qs("#col-sql");

  colsql.host.addEventListener("change", (ev) => {
    update(ev.detail.datas);
  });
  update( colsql.lastDatas );

  function update(datas) {

    const cols = Object.keys(datas[0][0]);

    coltable.highlightCol( (colname) => cols.includes(colname) ); //TODO...
  }

</script>

### Alias de colonnes

💡 Dans le cadre d'une requête SQL, vous pouvez temporairement associer un alias à une colonne grâce au mot clé `as` :

<sql-interactive>
  <span slot="options" data-col_as="">Requête normale</span>
  <span slot="options" data-col_as="as User">Renommer une colonne</span>

```sql
SELECT Nom $COL_AS, Age FROM Users;
```

</sql-interactive>

### Trier par ordre croissant/décroissant les lignes

La clause `ORDER BY $COL [DESC|ASC][,...]` permet de trier les lignes retournées par ordre croissant (`ASC`) ou décroissant (`DESC`).

<sql-interactive>
  <span slot="options" data-row_sort="Age ASC">Trier par Age croissant</span>
  <span slot="options" data-row_sort="Age DESC">Trier par Age décroissant</span>
  <span slot="options" data-row_sort="Age DESC, Nom ASC">Trier par Age décroissant, puis par Nom croissant</span>

```sql
SELECT * FROM Users ORDER BY $ROW_SORT;
```

</sql-interactive>

## Selection des lignes

`SELECT` retourne l'intégralité des entrées de la table, ce qui peut représenter des milliers de lignes. Or, bien souvent, seules quelques entrées nous intéressent.

Il est ainsi important de sélectionner uniquement les lignes qui nous intéressent afin de réduire le volume des données transférées, ainsi que de réduire la consommation de ressources serveurs (processeur, RAM, disque).

Il est ainsi possible de sélectionner des lignes de différentes manières :

- via un filtre via la clause `WHERE $COND` :<br/>
  *e.g. les entrées correspondant aux utilisateurs mineurs.*
- en supprimant les doublons via la clause `DISTINCT` :<br/>
  *e.g. les âges sans doublons.*
- en limitant le nombre de lignes retournées via les clauses `LIMIT $N OFFSET $O` :<br/>
  *e.g. les 10 plus jeunes utilisateurs.*

### Clause WHERE

La manière générique de filter les lignes à retourner est d'ajouter une clause `WHERE $COND` à la requête. Seules les lignes pour lesquelles `$COND` est vraie seront retournées.

<sql-interactive id="row-sql">
  <sql-dymtable slot="post" id="row-table" table="Users"></sql-dymtable>
  <span slot="options" data-cond="Age > 18">Retourner les entrées où Age > 18</span>
  <span slot="options" data-cond="Nom == 'Doe'">Retourner les entrées où Nom est "Doe"</span>

```sql
SELECT * FROM Users WHERE $COND;
```

</sql-interactive>


<script type="module">
  import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

  const rowtable = await LISS.qs("#row-table");
  const rowsql   = await LISS.qs("#row-sql");

  rowsql.host.addEventListener("change", (ev) => {
    update(ev.detail.datas);
  });
  update( rowsql.lastDatas );

  function update(datas) {

    const ids = datas[0].map(r => r.ID);

    rowtable.highlightRow( ({ID}) => ids.includes(+ID) );
  }

</script>

#### Opérateurs de comparaisons

💡 La structure d'une condition est très simple, utilisant les opérateurs de comparaison que vous connaissez déjà : `>`, `<`, `>=`, `<=`, `!=`.

<sql-interactive>
  <span slot="options" data-cond="ID > 1">Comparaison simple</span>
  <span slot="options" data-cond="Prenom == Nom">Comparaison entre 2 colonnes</span>
  <span slot="options" data-cond="0 < Age < 18">Chaîner les opérateurs produit un résultat étrange</span>

```sql
SELECT Age, Nom, Prenom FROM Users WHERE $COND;
```

</sql-interactive>

💡 Vous pouvez utiliser les noms de colonnes comme opérandes, même si elles n'apparaissent pas dans les colonnes à retourner.

⚠ Comme vous le constatez dans l'exemple ci-dessus, bien que cela soit syntaxiquement valide, <strong>chaîner les opérateurs de comparaisons ne produira pas le résultat attendu</strong>.<br/>
Vous ne devez ainsi pas écrire, e.g. `0 < Age < 18`, mais (cf suite du cours) :
<ul>
  <li>soit <code>0 < Age AND Age < 18</code> ;</li>
  <li>soit <code>Age BETWEEN 0 AND 18</code> .</li>
</ul>

#### Opérateurs logiques

Vous pouvez composer des conditions à l'aide d'opérateurs logiques que vous connaissez déjà : `AND`, `OR`, `NOT`.

<sql-interactive>
  <span slot="options" data-cond="Age > 18 AND Age < 45">Intersection (et)</span>
  <span slot="options" data-cond="Age > 18 OR Age < 45">Union (ou)</span>
  <span slot="options" data-cond="NOT ( Age > 18 )">Négation (non)</span>

```sql
SELECT Age, Nom, Prenom FROM Users WHERE $COND;
```

</sql-interactive>

💡 Vous pouvez aussi utiliser des parenthèses.

#### Autres opérateurs

<sql-interactive>
  <span slot="options" data-cond="Age IS NULL">Entrées où Age vaut null</span>
  <span slot="options" data-cond="Nom IN ('Doe', 'Nescio')">Entrées où Nom est dans la liste</span>
  <span slot="options" data-cond="Age BETWEEN 0 AND 18">Entrées où Age est compris entre 0 et 18</span>
  <span slot="options" data-cond="Nom LIKE 'D%'">Entrées où Nom commence par "D"</span>

```sql
SELECT Age, Nom, Prenom FROM Users WHERE $COND;
```

</sql-interactive>

- `[NOT] IS NULL` : si la valeur est nulle/n'est pas nulle.<br/>
  ⚠ En SQL `NULL == NULL` est généralement évalué à `False`.

- `[NOT] IN ($VALS[,...])` : si la valeur est/n'est pas dans une liste donnée.

- `[NOT] BETWEEN $MIN AND $MAX` : si la valeur est/n'est pas entre `$MIN` et `$MAX`.<br/>
  💡 C'est l'équivalant de `$VAL >= $MIN AND $VAL <= $MAX`<br/>
  ⚠ Le comportement de l'opérateur `BETWEEN` peut changer en fonction du système, et peut alors être équivalent à `$VAL > $MIN AND $VAL < $MAX`.

- `[NOT] LIKE $PATTERN` : si la valeur correspond/ne correspond pas à `$PATTERN`.<br/>
  `_` correspond à n'importe quel caractère.<br/>
  `%` correspond à un nombre indéterminé de n'importe quel caractère.<br/>
  e.g. `LIKE 'D%'`: une valeur commençant par "D".

### Supprimer les doublons

La clause `DISTINCT` permet de supprimer les doublons dans les lignes retournées :

<sql-interactive>
  <span slot="options" data-row_distinct="">Requête normale</span>
  <span slot="options" data-row_distinct="DISTINCT">Ne pas retourner les doublons</span>

```sql
SELECT $ROW_DISTINCT Age FROM Users;
```

</sql-interactive>

### Tops et pagination

#### Tops

La clause `LIMIT $N` permet de ne récupérer que les `$N` premières entrées retournées. Souvent utilisée avec la clause `ORDER BY`, elle permet notamment de générer des tops, e.g. les X utilisateurs les plus jeunes.


<sql-interactive>
  <span slot="options" data-pagination="1">Ne récupérer que la première entrée</span>
  <span slot="options" data-pagination="2">Ne récupérer que les deux premières entrées</span>
  <span slot="options" data-orderby="ORDER BY Age" data-pagination="1">Ne récupérer que l'utilisateur le plus jeune</span>

```sql
SELECT * FROM Users $ORDERBY LIMIT $PAGINATION;
```

</sql-interactive>

#### Pagination

Lorsqu'une requête retourne des milliers de lignes, il peut être coûteux de toutes les récupérer et les afficher en même temps. On peut alors découper la liste en plusieurs pages, en affichant que e.g. 50 lignes par pages. Ainsi la première page récupère et affiche les 50 premières lignes, la seconde les 50 suivantes, et ainsi de suite.

Pour cela, on utilisera la clause `LIMIT 50` afin de ne récupérer que 50 entrées par requêtes. En conjonction, on utilisera la clause `OFFSET $P*50` qui permet de ne pas récupérer les `$P*50` premières entrées retournées. `$P+1` étant alors le numéro de la page actuelle.

<sql-interactive id="pagination-sql">
  <sql-dymtable slot="post" id="pagination-table" table="Users"></sql-dymtable>
  <span slot="options" data-pagination="1" data-p="0">Page 1 (1 entrée par page)</span>
  <span slot="options" data-pagination="1" data-p="1">Page 2 (1 entrée par page)</span>
  <span slot="options" data-pagination="1" data-p="2">Page 3 (1 entrée par page)</span>
  <span slot="options" data-pagination="2" data-p="0*2">Page 1 (2 entrée par page)</span>
  <span slot="options" data-pagination="2" data-p="1*2">Page 2 (2 entrée par page)</span>

```sql
SELECT * FROM Users LIMIT $PAGINATION OFFSET $P ;
```

</sql-interactive>

<script type="module">
  import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

  const table = await LISS.qs("#pagination-table");
  const sql   = await LISS.qs("#pagination-sql");

  sql.host.addEventListener("change", (ev) => {
    update(ev.detail.datas);
  });
  update( sql.lastDatas );

  function update(datas) {

    const ids = datas[0].map(r => r.ID);
    table.highlightRow( ({ID}) => ids.includes(+ID) );
  }

</script>


## Ordre d'exécution et d'écriture

Le différentes **clauses** des requêtes SQL sont généralement écrites dans leur ordre d'exécution, et exécutées dans leur ordre d'écriture, i.e. de gauche à droite.

<style>
  .later {
    color: gray;
    font-style: italic;
    opacity: 0.5;
  }
  .warning {
    color: red;
  }

</style>

Par exemple lors d'une requête `SELECT`:

<div style="display:flex">
  <ol id="order-list">
    <li step="1">On récupère la table (clause <code>FROM</code>).</li>
    <li step="2" class="warning"><em>Alias de colonnes définies ici.</em></li>
    <li step="3">On filtre les entrées (clause <code>WHERE</code>).</li>
    <li class="later">On groupe les entrées en lignes (clause <code>GROUP BY</code>).</li>
    <li class="later warning"><em>Alias de colonnes d'agrégats définies ici.</em></li>
    <li class="later">On filtre les lignes agrégées (clause <code>HAVING</code>).</li>
    <li class="warning" step="4">On supprime les doublons (clause <code>SELECT DISTINCT</code>).</li>
    <li step="5">On trie les lignes (clause <code>ORDER BY</code>).</li>
    <li step="6">On limite le nombre de lignes retournées (clauses <code>LIMIT</code>/<code>OFFSET</code>).</li>
  </ol>
  <div>
    <div style="text-align: center">
      <anim-player speed="1500" id="order-player"></anim-player>
    </div>
    <div style="display:flex;height: fit-content;">
      <style>
        .notyet {
          color: gray;
        }
        .cur {
          color: yellow;
        }
        .warning.cur {
          color: orange;
        }
      </style>
      <pre style="margin:0"><code id="order_sql">SELECT <span class="notyet">DISTINCT</span> Date, Ref, Q as Nb
    FROM Produits
    WHERE Ref = "Gomme"
    ORDER BY Q
    LIMIT 2;</code></pre>
      <sql-dymtable header="" table="Produits" id="order-table"><sql-dym-table>>
    </div>
  </div>
</div>

<script type="module">


  import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

  const player = await LISS.qs("#order-player");
  const table  = await LISS.qs("#order-table");
  const order_sql = document.querySelector("#order_sql");

  const list = document.querySelectorAll("#order-list > li");

  const query = [
`SELECT `, [4, `DISTINCT `], `Date, Ref, Q `, [2, "as Nb"],
    [ 1, `\n    FROM Produits`],
    [ 3, `\n    WHERE Ref = 'Gomme'`],
    [ 5, `\n    ORDER BY Q`],
    [ 6, `\n    LIMIT 2`], ';' ];

  function buildQuery(step) {
    let output = "";
    for(let elem of query) {
      if( Array.isArray(elem) ) {
        if( elem[0] > step && step !== 0 )
          continue;
        elem = elem[1];
      }
      output += elem;
    }

    return output;
  }
  function buildOutput(step) {
    let output = [];
    for(let elem of query) {
      if( Array.isArray(elem) ) {
        const html = document.createElement('span');
        html.textContent = elem[1];
        html.classList.toggle("cur", elem[0] === step);
        
        if( elem[0] > step && step !== 0 )
          html.classList.add("notyet");
        elem = html;
      }
      output.push(elem);
    }

    return output;
  }

  function doStep(i) {

    if( i > 6)
      return player.reset();

    order_sql.replaceChildren( ...buildOutput(i) ); //TODO highlight
    for(let li of list)
      li.classList.toggle("cur", li.getAttribute("step") === `${i}`);

    table.exec( buildQuery(i) );
  }

  player.host.addEventListener("reset", ()   => { doStep(0)          });
  player.host.addEventListener("step" , (ev) => { doStep( ev.detail) });

  doStep(0);
</script>

💡 Les étapes en gris seront étudiées au CM suivant.

⚠ En rouge sont indiqués des cas d'exceptions dont l'ordre d'écriture ne correspond pas à leur ordre d'exécution. Une autre exception existe dans les requêtes `UPDATE` où la clause `SET` s'écrit **avant** la clause `WHERE`.


# Manipuler des entrées

## Modifier le contenu d'une table

Pour rappel, il existe plusieurs types de commandes SQL permettant d'effectuer différent types actions :

- `SELECT` : lire des données ;
- `UPDATE` : modifier des entrées ;
- `INSERT` : insérer des entrées ;
- `DELETE` : supprimer des entrées.

Nous allons désormais nous intéresser aux 3 dernières.

### Insérer des lignes

La requête SQL `INSERT` permet d'insérer des entrées dans une table, et se présente usuellement sous la forme suivante :

```sql
INSERT INTO $TABLENAME VALUES ($VALS[,...])[,...];
```

- `($VALS[,...])` représente une entrée à insérer. Les différentes valeurs de l'entrée sont séparées par une virgule.<br/>
  💡 Vous pouvez insérer plusieurs entrées à la fois en les séparant par une virgule.

<sql-interactive>
  <span slot='select'>SELECT * FROM Users;</span>
  <span slot="options" data-m_vals="(NULL, 'Doe', 'Jon', 32)">Insérer une entrée</span>
  <span slot="options" data-m_vals="      (NULL, 'Doe',    'Jon', 32),
       (NULL, 'Sawyer', 'Tom', 15)">Insérer plusieurs entrées</span>
  <span slot="options" data-cols="(Prenom, Nom)" data-m_vals="('Jon', 'Doe')">Insérer une entrée sans renseigner Age</span>

```sql
INSERT INTO Users $COLS VALUES
$M_VALS;
```

</sql-interactive>

💡 Vous pouvez aussi ne renseigner les valeurs que pour certaines colonnes dont vous indiquez les noms avant `VALUES`. Dans ce cas, les colonnes non renseignées vaudront `NULL`.

### Modifier des lignes

La requête SQL `UPDATE` de modifier des entrées dans une table, et se présente usuellement sous la forme suivante :

```sql
UPDATE $TABLENAME SET $COL = $VAL[,...] WHERE $COND;
```

- `$COL` est le nom de la colonne à modifier.
- `$VAL` est la nouvelle valeur de cette colonne.
- `$COND` indique quelles entrées doivent être modifiées.

💡 Vous pouvez modifier plusieurs colonnes à la fois en séparant les `$COL = $VAL` par une virgule.

<sql-interactive>
  <span slot='select'>SELECT * FROM Users;</span>
  <span slot="options" data-vals="Nom = 'Durand'" data-cond="Nom == 'Durant'">Modifier une colonne</span>
  <span slot="options" data-vals="Nom = 'Durand', Prenom='Théo'" data-cond="ID == 2">Modifier plusieurs colonnes</span>
  <span slot="options" data-vals="Age = 23" data-cond="Age == 43">Plusieurs lignes modifiées</span>
  <span slot="options" data-vals="Age = Age + 10" data-cond="Nom LIKE 'D%'">Valeur calculée à partir de l'entrée</span>

```sql
UPDATE Users
  SET $VALS
  WHERE $COND;
```

</sql-interactive>

💡 Vous pouvez calculer les nouvelles valeurs à partir des valeurs initiales de l'entrée.

⚠ Il est possible d'avoir des utilisateurs avec le même nom et/ou prénoms. Il est ainsi préférable, autant que possible, d'effectuer la condition `$COND` les ID pour s'assurer de modifier les bonnes entrées, et non celles d'homonymes.

### Supprimer des lignes

La requête SQL `DELETE` de supprimer des entrées dans une table, et se présente usuellement sous la forme suivante :

```sql
DELETE FROM $TABLENAME WHERE $COND;
```

- `$COND` indique quelles entrées doivent être supprimées.

<sql-interactive>
  <span slot='select'>SELECT * FROM Users;</span>
  <span slot="options" data-cond="Age < 18">Supprimer les entrées où Age > 18</span>
  <span slot="options" data-cond="Age > 18">Supprimer les entrées où Age > 18</span>
  <span slot="options" data-cond="ID == 2">Supprimer un utilisateur donné</span>

```sql
DELETE FROM Users WHERE $COND;
```

</sql-interactive>

⚠ Il est possible d'avoir des utilisateurs avec le même nom et/ou prénoms. Il est ainsi préférable, autant que possible, d'effectuer la condition `$COND` les ID pour s'assurer de supprimer les bonnes entrées, et non celles d'homonymes.

## Prétraitements

Il est bien souvent important de pré-traiter les données avant de les utiliser (e.g. comparaisons, insertions), ce afin de s'assurer que les informations soient bien représentées de la même manière. Par exemple, un nom de famille peut s'écrire de plusieurs manières : `"Nom"`, "`NOM`", ou "`nom`". Si ces trois chaînes de caractères représentent bien la même information, elles ne sont pas égales pour autant. Ainsi, aucune entrée ne sera retournée si on recherche `"Nom"` dans la base de données, alors qu'il est stocké en majuscules (i.e. `"NOM"`).

Pré-traiter les données permet alors de s'assurer de l'uniformité des données, i.e. que les données manipulées suivent le même format, facilitant e.g. leur comparaisons. Pré-traiter les données avant insertions permet aussi de s'assurer de la cohérence et consistance de la base de données.

💡 Il est possible de **tester** les différentes fonctions de prétraitements en effectuant une requête `SELECT` sans la clause `FROM` (ou avec `FROM DUAL` pour certains SGBD) :

<sql-interactive>
  <span slot="options" data-col1="'nom'" data-col2="UPPER('nom')">Mettre en majuscules</span>
  <span slot="options" data-col1="1.2" data-col2="ROUND(1.2)">Arrondir</span>

```sql
SELECT $COL1 as BEFORE, $COL2 as AFTER;
```

</sql-interactive>

⚠ Dans les requêtes `SELECT`, il ne faut pas trop abuser de ces pré-traitements pour les valeurs retournées. Il est souvent préférable de gérer des données structurées en SQL, et de gérer leur pré-traitement via le langage utilisé par votre application (e.g. Python, R, JavaScript, etc). Cela permet notamment de pouvoir réutiliser une même requête pour différents usages.

💡 Certains SGBD ont aussi des systèmes de cache, permettant de recalculer plus rapidement le résultat d'une requête exécutée fréquemment.

### Sur les nombres

Avec SQL, vous pouvez utiliser les opérateurs et fonctions arithmétiques classiques :

<sql-interactive>
  <span slot="options" data-cols="1+1, 4%3, 4/3, 4/3.0">Opérations mathématiques</span>
  <span slot="options" data-cols="FLOOR(1.2), ROUND(1.2), CEIL(1.2)">Arrondis</span>
  <span slot="options" data-cols="ABS(1), ABS(-1)">Valeur absolue</span>
  <span slot="options" data-cols="RANDOM()">Entier aléatoire</span>
  <span slot="options" data-cols="ABS(RANDOM()) % 10">Entier aléatoire (dans [[0;10[[)</span>

```sql
SELECT $COLS;
```

</sql-interactive>

⚠ `/` utilisé avec des nombres entiers effectuera la division entière. Si vous souhaitez faire la division décimale, vous devez avoir au moins une opérande décimale.

- `FLOOR/ROUND/CEIL($N[, $D])` : arrondir `$N` à `$D` décimales.
- `ABS($N)` : la valeur absolue du nombre `$N`.
- `RANDOM()` : génère un entier aléatoire.<br/>
  💡 Utilisez `ABS(RANDOM()) % $N` pour générer un entier dans `[[0;$N[[`.<br/>
  💡 Certains SGBD proposent une fonction `RAND()` permettant de générer un réel dans `[0,1[`.<br/>

💡 Vous avez aussi beaucoup d'autres fonctions trigonométriques, de logs, etc.


### Sur les dates

Les opérations sur les dates sont complexes à effectuer à la main. En effet, il faut alors gérer :
- les mois avec des nombres de jours différents ;
- les années bissextiles ;
- les fuseaux horaires ;
- les heures d'été et d'hiver.

Les SGBD fournissent donc des fonctions permettant de manipuler les dates qui s'occupent de prendre tout cela en compte. Par exemple `TIMEDIFF()` permet de calculer la durée entre deux dates.

Il est aussi fréquent d'utiliser des **timestamps**, e.g. l'unix timestamp, qui représente une date par le nombre de secondes écoulées depuis le 1er janvier 1970. Il permet notamment d'aisément comparer et stocker des dates.

<sql-interactive>
  <span slot="options" data-cols="DATE(), TIME(), DATETIME()">Date et/ou heure actuelle</span>
  <span slot="options" data-cols="UNIXEPOCH('now')">Timestamp actuel</span>
  <span slot="options" data-cols="DATETIME(10, 'unixepoch')">Convertir un timestamp (10) en date</span>
  <span slot="options" data-cols="TIMEDIFF('now', '2001-01-01')">Calculer la durée entre deux dates</span>

```sql
SELECT $COLS;
```

</sql-interactive>

- `DATE()`/`TIME()`/`DATETIME()` : retourne la date et/ou l'heure actuelle.
- `TIMEDIFF($a, $b)` : donne la durée entre deux dates.
- `UNIXEPOCH($d)` : donne le nombre de secondes écoulées entre le 1er janvier 1970 et la date `$d`.

💡 Idem, il existe de nombreuses autres opérations et formatage sur les dates que nous ne verrons pas dans le cadre de ce cours.

⚠ Les fonctions de dates ne sont pas normalisées et dépendent donc du SGBD utilisé.

### Sur les chaînes de caractères

D'un utilisateur à un autre, la casse des lettres dans les chaines de caractères est souvent inconsistante. Lorsque la casse importe peu quant à l'information stockée, il est alors fréquent de mettre la chaîne de caractère en minuscule (ou en majuscule) afin de pouvoir ensuite plus facilement les manipuler/comparer en s'assurant de la consistance des données (e.g. e-mail, nom, etc.).

Les chaînes de caractères sont généralement stockées sur des colonnes à taille variables. Mais il arrive que pour des raisons d'optimisations, elles soient stockées sur des colonnes à tailles fixes. Dès lors, pour stocker une chaîne de caractère d'une taille moindre, on lui ajoutera généralement des espaces en début ou fin de chaîne (*pad*). L'opération inverse consiste à retirer les espaces en début ou fin de chaîne (*trim*).

<sql-interactive>
  <span slot="options" data-cols="LOWER('Hello'), UPPER('Hello')">Transformer la casse</span>
  <span slot="options" data-cols="LENGTH('23'), LENGTH(32)">Taille</span>
  <span slot="options" data-cols="TRIM(' w '), LTRIM(' w '), RTRIM(' w ')">Retirer les espaces en début/fin</span>

```sql
SELECT $COLS;
```

</sql-interactive>

- `LOWER($W)`/`UPPER($W)` : transforme tous les caractères en minuscules/majuscules.
- `LENGTH($N)` : la taille de `$N`.
- `[L/R]TRIM($W)` : enlève les espaces en début et/ou fin de chaîne.
- `[L/R]PAD($W, $N, $C)` : l'inverse de `[L/R]TRIM()`, ajoute des caractères `$C` en début/fin de `$W`, de sorte à avoir une chaîne de caractère de taille `$N`.<br/>
  ⚠ Cette fonction n'est pas disponible sur SQLite.

Il existe bien d'autres fonctions que nous ne verrons pas dans le cadre de ce cours :

<details>
  <summary>
    <strong><em>Afficher les autres pré-traitements</em></strong>
  </summary>

- `FORMAT()` : formate une chaîne de caractère comme `printf()` en C/Python (pas standardisé).<br>
  Cf [documentation SQLite](https://www.sqlite.org/printf.html).<br/>
  Cf [documentation PostgreSQL](https://www.postgresql.org/docs/current/functions-string.html#FUNCTIONS-STRING-FORMAT).
- `REVERSE($W)` : inverse l'ordre des caractères.
- `REPLACE($W, $S, $R)` : dans `$W`, remplace `$S` par `$R`.
- `SUBSTR($W, $B[, $L])` : retourne la sous-chaîne de `$W` commençant à l'index `$B` et de taille `$L`.
- `LOCATE($W, $S)` : retourne l'index à laquelle se trouve `$S` dans `$W`.

</details>


<details>
  <summary>

## Autres prétraitements (en TP)

  </summary>

### Sur les valeurs nulles

<sql-interactive>
  <span slot="options" data-cols="NULL"></span>
  <span slot="options" data-cols="COALESCE(NULL, 4)"></span>
  <span slot="options" data-cols="COALESCE(NULL, NULL)"></span>

```sql
SELECT $COLS;
```

</sql-interactive>

- `COALESCE($args[,...])` : renvoie la première valeur non nulle (ou null si toutes nulles).

### Conversions

<sql-interactive>
  <span slot="options" data-col_cast="'1.2' AS REAL">Convertir en réel</span>
  <span slot="options" data-col_cast="'1.2' AS INT">Convertir en entier</span>
  <span slot="options" data-col_cast="1.2 AS TEXT">Convertir en texte</span>

```sql
SELECT CAST( $COL_CAST );
```

</sql-interactive>

- `CAST($V AS $T)` : converti la valeur `$V` dans le type `$T`.<br/>
  💡 `$T` sera ainsi généralement : `REAL`, `INT`/`INTEGER`, ou `TEXT`.

💡 Il existe bien d'autres fonctions de conversions plus ou moins spécifiques aux SGBD.

### Concaténer des colonnes

💡 Vous pouvez aussi concaténer des colonnes en utilisant l'opérateur `||` :

<sql-interactive>
  <span slot="options" data-col_concat="Nom">Nom</span>
  <span slot="options" data-col_concat="Nom || ' ' || Prenom">Nom Prenom</span>
  <span slot="options" data-col_concat="Nom || ' (' || Age || ')'">Nom (Age)</span>

```sql
SELECT $COL_CONCAT as User FROM Users;
```

</sql-interactive>

⚠ Attention à ne pas abuser des concaténations. Il est bien souvent préférable de récupérer des données structurées, puis de gérer leurs formatages et affichages via le langage utilisé par votre application (e.g. Python, R, JavaScript, etc). Cela permet notamment de pouvoir réutiliser une même requête pour différents usages.

💡 Certains SGBD ont aussi des systèmes de cache, permettant de recalculer plus rapidement le résultat d'une requête exécutée fréquemment.

### Conditions

De manière **rare**, il est possible qu'on souhaite effectuer des conditions.

<sql-interactive>
  <span slot="options" data-age='2'>Utilisateur mineur</span>
  <span slot="options" data-age='20'>Utilisateur majeur</span>

```sql
SELECT (CASE
  WHEN Age < 0  THEN '???'
  WHEN Age < 18 THEN 'mineur'
                ELSE 'majeur'
END) as Status FROM (SELECT $Age as Age);
```

</sql-interactive>

Le format est relativement simple :

- il commence par `(CASE` et fini par `END)`.
- `WHEN $COND THEN $VAL` retourne la valeur `$VAL` si `$COND` est évalué à vrai.
- `ELSE $VAL` est la valeur par défaut si aucune condition n'est vraie.

⚠ Le `(SELECT $Age as Age)` n'est là qu'à des fins de démonstrations, afin de vous permettre de modifier la valeur de l'âge. Pour le moment ignorez-le.

⚠ Si vous utilisez fréquemment la clause `CASE` dans les `INSERT`/`UPDATE`/`DELETE` pour :

- calculer la valeur d'une colonne dépendant d'autres colonnes : est-il vraiment nécessaire de la stocker ?
- transformer la valeur d'une colonne : serait-il intéressant de plutôt stocker la valeur transformée ?

<details>
  <summary>
  
### Considérations de sécurité
  
  </summary>


Il est possible de hasher certaines données avant de les insérer dans la base de données. Cela peut par exemple être utilisé afin de rapidement comparer deux fichiers, ou de contrôler l'intégrité d'un fichier.

```sql
INSERT INTO Files VALUES ($FILENAME, LENGTH($FILECONTENT), SHA256($FILECONTENT) );
SELECT Filename, Filesize FROM Files WHERE Filehash == SHA256($FILECONTENT);
```

⚠ La fonction `SHA256($D)` permet de hasher les données `$D` passées en paramètre. Elle n'est cependant pas disponible dans tous les SGBD. Sur SQLite, elle requière d'installer une extension.

⚠ Il faut impérativement hasher ou chiffrer les données sensibles **AVANT** de les transmettre à la requête SQL. En effet, si vous hashez/chiffrez des données sensibles à l'intérieur même d'une requête SQL, il y a de fortes chances qu'elles soient ensuite stockées en clair dans les logs du SGBD...

💡 Vous approfondirez les questions de chiffrement et de hashage dans d'autres modules.

</details>

</details>

## Agrégation

Une agrégation permet de regrouper, au sein d'une même ligne, plusieurs entrées, e.g. pour obtenir la liste des nombres de produits vendus, par dates ou par produits : 

<sql-interactive>
  <span slot="options" data-grp='Ref'>Agrégé par références</span>
  <span slot="options" data-grp='Date'>Agrégé par dates</span>

```sql
SELECT $GRP, GROUP_CONCAT(Q)
  FROM Produits GROUP BY $GRP;
```

</sql-interactive>

Pour cela, on utilise la clause `GROUP BY $COLS[,...]` qui permet de fusionner, au sein d'une même ligne, les entrées dont les valeurs de `$COLS[,...]` sont égales. Vous trouverez ci-dessous une représentation visuelle d'une agrégation :

<div style="display:flex;justify-content: space-around;width:100%">
  <sql-dymtable table="Produits"></sql-dymtable>
  <sql-dymtable id="group-date" table="Produits" header="Group by Date"></sql-dymtable>
  <sql-dymtable id="group-ref"  table="Produits" header="Group by Ref"></sql-dymtable>
</div>

<script type="module">

  import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

  const gdate_table = await LISS.qs("#group-date");
  const  gref_table = await LISS.qs("#group-ref");

  gdate_table.groupBy("Date");
   gref_table.groupBy("Ref");


/*  const rowsql   = await LISS.qs("#row-sql");

  rowsql.host.addEventListener("change", (ev) => {
    update(ev.detail.datas);
  });
  update( rowsql.lastDatas );

  function update(datas) {

    const ids = datas[0].map(r => r.ID);

    rowtable.highlightRow( (ID) => ids.includes(+ID) );
  }*/
</script>

Vous remarquerez alors que les lignes contiennent plusieurs valeurs pour une même colonne. Il convient alors d'utiliser une **fonction d'agrégation** qui prendra la liste des valeurs et retournera une valeur unique. Par exemple, `GROUP_CONCAT(Q)` concatène, pour chaque ligne, la colonne `Q` de ses entrées :


<sql-interactive>
  <span slot="options" data-op='GROUP_CONCAT(Q)' data-grp="Ref">Concaténation</span>
  <span slot="options" data-op='SUM(Q)' data-grp="Date">Somme</span>
  <span slot="options" data-op='AVG(Q)' data-grp="Ref">Moyenne</span>
  <span slot="options" data-op='MIN(Q)' data-grp="Date">Minimum</span>
  <span slot="options" data-op='MAX(Q)' data-grp="Date">Maximum</span>

```sql
SELECT $GRP, $OP
  FROM Produits GROUP BY $GRP;
```

</sql-interactive>

- `GROUP_CONCAT($COL)` : concatène les valeurs.
- `SUM($COL)`/`TOTAL($COL)` : fait la somme des valeurs.
- `AVG($COL)` : fait la moyenne des valeurs.
- `MIN($COL)` : retourne la valeur minimale.
- `MAX($COL)` : retourne la valeur maximale.

💡 Par défaut, en l'absence d'une fonction d'agrégation, SQL retourne la première valeur.

<todo>Improve example</todo>

💡 Il est aussi possible de compter les entrées/valeurs de chaque lignes :

<sql-interactive>
  <span slot="options" data-op='COUNT(*)' data-grp="Date">Compte le nombre d'entrées</span>
  <span slot="options" data-op='COUNT(Q)' data-grp="Date">Compte les valeurs non-nulles</span>
  <span slot="options" data-op='COUNT(DISTINCT Q)' data-grp="Date">Compte les valeurs distinctes</span>

```sql
SELECT $GRP, $OP
  FROM Produits GROUP BY $GRP;
```

</sql-interactive>

- `COUNT(*)` : compte le nombre d'entrées.
- `COUNT($COL)` : compte le nombre de valeurs non-nulles.
- `COUNT(DISTINCT $COL)` : permet de ne pas compter les doublons.

### Conditions sur les agrégations

Jusqu'à présent, nous utilisions la clause `WHERE` pour sélectionner les entrées à récupérer. Cependant, la clause `WHERE` filtre les entrées **avant** leur agrégation au sein d'une même ligne. Ainsi, l'usage d'une fonction d'agrégation dans sa condition générera un message d'erreur :

<sql-interactive>
  <span slot="options" data-aggr=""    data-cond=">=10" data-cols="Q">Retirer des entrées avant agrégation</span>
  <span slot="options" data-aggr=""    data-cond=">=20" data-cols="Q">Retirer des entrées avant agrégation</span>
  <span slot="options" data-aggr="SUM" data-cond=">=20" data-cols="Q">Fonction d'agrégation génère erreur</span>

```sql
SELECT Date, group_concat($COLS) FROM Produits
  WHERE $AGGR($COLS) $COND
  GROUP BY Date;
```

</sql-interactive>

Pour filtrer les lignes **après** l'agrégation, il convient alors d'utiliser la clause `HAVING $COND` :

<sql-interactive>
  <span slot="options" data-grp='Date' data-lcondp="" data-lcond="SUM(Q)" data-rcond =">= 0">Sans alias d'agrégat</span>
  <span slot="options" data-grp='Date' data-lcondp="SUM(Q) as" data-lcond="Total" data-rcond =">= 30">Lignes dont la somme est >= 30</span>
  <span slot="options" data-grp='Date' data-lcondp="SUM(Q) as" data-lcond="Total" data-rcond =">= 50">Lignes dont la somme est >= 50</span>

```sql
SELECT $GRP, $LCONDP $LCOND FROM Produits
  GROUP BY $GRP HAVING $LCOND $RCOND;
```

</sql-interactive>


# Tables et contraintes

## Schémas de tables

La structure d'une table, appelée **schémas**, est constituée du nom et du type de chaque colonne :

<sql-interactive>
  <span slot="options" data-tablename="'Users'">Schéma de la table Users</span>
  <span slot="options" data-tablename="'Produits'">Schéma de la table Produits</span>

```sql
SELECT * FROM
pragma_table_xinfo($TABLENAME);
```

</sql-interactive>

- `cid` est l'identifiant de la colonne.
- `name` est le nom de la colonne.
- `type` est le type de données stockées dans la colonne.
- `notnull` indique si la colonne peut contenir des valeurs `NULL`.
- `dflt_value` est la valeur par défaut de la colonne (i.e. valeur insérée si non spécifiée lors de l'insertion).
- `pk` indique si la colonne fait partie d'une clé primaire (cf suite du cours).
- `hidden` indique si la colonne est générée (cf suite du cours)

⚠ La manière d'afficher le schéma d'une table diffère d'un SGBD à l'autre :

<table>
  <thead>
    <tr>
      <th>SGBD</th>
      <th>Commande</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SQLite</td>
      <td>

```sql
SELECT * FROM pragma_table_xinfo($TABLENAME);
```

</td>
    </tr><tr>
      <td>PostgreSQL</td>
      <td>

```sql
SELECT * FROM information_schema.columns 
WHERE table_name == $TABLENAME;
```

</td>
    </tr><tr>
      <td>MySQL</td>
      <td>

```sql
DESCRIBE $TABLENAME;  
```

</td>
    </tr>
  </tbody>
</table>

## Opérations sur les tables

Jusqu'à présent, nous avons écrit des requêtes SQL pour récupérer, insérer, modifier, et supprimer des entrées d'une table. De manière analogue est aussi possible de créer, modifier, et supprimer des tables via des commandes SQL :

- `CREATE TABLE` : créer une table ;
- `ALTER TABLE` : modifier une table ;
- `TRUNCATE TABLE` : supprimer toutes les entrées d'une table ;
- `DELETE TABLE` : supprimer une table.

### Création d'une table

La requête SQL `CREATE TABLE` permet de créer une nouvelle table, et se présente usuellement sous la forme suivante :

```sql
CREATE TABLE [IF NOT EXISTS] $TABLENAME ($COLNAME $COLTYPE[,...]);
```

- `$COLNAME` est le nom de la colonne ;
- `$COLTYPE` est le type des données stockées dans la colonne.

⚠ Si vous utilisez SQLite, il faut ajouter `STRICT` à la fin de la requête SQL afin de le forcer à vérifier les types des colonnes lors des opérations sur la table.

<sql-interactive>
  <span slot='select'>SELECT * FROM T;</span>
  <span slot="options" data-m_cols="(Ref TEXT, Q INT)" data-m_vals="('Crayon', 4)">Création d'une table</span>
  <span slot="options" data-m_cols="(Ref TEXT, Q INT)" data-m_vals="(4, 'Crayon')">Violation contrainte de type</span>

```sql
CREATE TABLE T
      $M_COLS STRICT;
INSERT INTO T VALUES
      $M_VALS;
```

</sql-interactive>

#### IF NOT EXISTS

Si la table existe déjà, une erreur sera lancée. Pour éviter cela, vous pouvez ajouter la clause `IF NOT EXISTS` qui créera la table seulement si elle n'existe pas.

⚠ Après un `IF NOT EXISTS`, la table ne sera pas nécessairement vide. Si vous avez besoin que la table soit vide, utilisez une requête `TRUNCATE TABLE` (cf suite du cours).

⚠ Si le schéma de table du `IF NOT EXISTS` est différent de la table existante, aucune erreur ne sera lancée.

<sql-interactive>
  <span slot="options" data-ifexists="">Re-création d'une table</span>
  <span slot="options" data-ifexists="IF NOT EXISTS">Avec IF NOT EXISTS</span>

```sql
CREATE TABLE T
      (Date TEXT) STRICT;
CREATE TABLE $IFEXISTS T
      (Date INT) STRICT;
```

</sql-interactive>

#### CREATE TABLE AS

💡 Vous pouvez aussi créer et remplir une nouvelle table à partir du résultat d'une requête `SELECT`.

<sql-interactive>
  <span slot="select">SELECT * FROM T;</span>
  <span slot="options" data-cols="*" data-tablename="Produits" data-cond="1==1"></span>
  <span slot="options" data-cols="Date, Q" data-tablename="Produits" data-cond="Ref == 'Gomme'"></span>

```sql
CREATE TABLE T AS
    SELECT $COLS
    FROM $TABLENAME
    WHERE $COND;
SELECT * FROM T;
```

</sql-interactive>

⚠ Sur SQLite, les tables créées de cette manière ne sont pas `STRICT`.

#### Exemples

💡 Pour références, les requêtes SQL utilisées pour créer les tables des exemples peuvent être visualisées ci-dessous :

<sql-interactive>
  <span slot="options" data-tablename="'Produits'">CREATE TABLE pour Produits</span>
  <span slot="options" data-tablename="'Users'">CREATE TABLE pour Users</span>

```sql
SELECT sql FROM sqlite_schema
WHERE name == $TABLENAME;
```

</sql-interactive>

### Suppression d'une table

Les requêtes SQL `DROP TABLE` et `TRUNCATE TABLE` permettent, respectivement, de supprimer et de vider une table existantes, et se présentent usuellement sous la forme suivante :

```sql
DROP TABLE [IF EXISTS] $TABLENAME;
TRUNCATE TABLE $TABLENAME;
```

<sql-interactive>
  <span slot="select">SELECT name, type, "notnull", dflt_value, pk, hidden
        FROM pragma_table_xinfo('Produits');
SELECT COUNT(*) as "NB ENTRIES" FROM Produits;</span>
  <span slot="options" data-command="DROP TABLE">Suppression de la table</span>
  <span slot="options" data-command="DELETE FROM">Suppression des entrées</span>

```sql
$COMMAND Produits;
```

</sql-interactive>

💡 Dans certains SGBD, `DROP TABLE` supporte une clause `IF EXISTS`. Ainsi, si vous souhaitez créer une table vide, vous pouvez la `DROP TABLE IF EXISTS` avant sa création pour vous assurer de la construire correctement.

⚠ `TRUNCATE TABLE` n'existe pas sur SQLite. Il vous faut alors utiliser `DELETE FROM $TABLENAME;` à la place.

### Modification d'une table

La requête SQL `ALTER TABLE` permet de modifier une table, et se présente usuellement sous la forme suivante :

```sql
ALTER TABLE $TABLENAME (RENAME|ADD|DROP) COLUMN $OPT;
```

- `RENAME` renomme une colonne (`$OPT` = `$OLD_COLNAME TO $NEW_COLNAME`).
- `ADD` ajoute une colonne (`$OPT` = `$COLNAME $COLTYPE`).
- `DROP` supprime une colonne (`$OPT` = `$COLNAME`).

<sql-interactive>
  <span slot="select">SELECT name, type, "notnull", dflt_value, pk, hidden
        FROM pragma_table_xinfo('Produits');</span>
  <span slot="options" data-command="RENAME" data-opts="Ref TO Prod">Renommer une colonne</span>
  <span slot="options" data-command="ADD" data-opts="Sum INT">Ajouter une colonne</span>
  <span slot="options" data-command="DROP" data-opts="Date">Supprimer une colonne</span>

```sql
ALTER TABLE Produits
  $COMMAND COLUMN $OPTS;
SELECT * FROM Produits;
```

</sql-interactive>

⚠ Renommer ou supprimer la colonne d'une table n'est pas anodin. En effet, si ces colonnes sont utilisées ailleurs, e.g. dans des requêtes SQL, ces dernières ne fonctionneront plus correctement.

💡 Certains SGBD supportent des clauses `IF EXISTS` et `IF NOT EXISTS` sur les colonnes.

💡 Vous pouvez aussi renommer une table avec la commande SQL suivante :

```sql
ALTER TABLE $OLD_TABLENAME RENAME TO $NEW_TABLENAME;
```

## Les contraintes

Afin de garantir la cohérence et consistence des tables, il est possible de définir des contraintes sur les colonnes, ainsi que sur les tables. Par exemple, il est possible de définir des contraintes sur des colonnes "numéro de téléphone", "adresse e-mail", etc. pour s'assurer que les données stockées suivent bien le format d'un numéro de téléphone ou d'une adresse mail. 

💡 L'assurance de la structure des données stockées et manipulées constitue un des avantages majeurs des bases de données SQL.

### Contraintes sur les colonnes

Lors de la création de la table, il est possible de spécifier des contraintes sur des colonnes. Pour ce faire, on ajoute le(s) contrainte(s) après le type de la colonne :

<sql-interactive>
  <span slot="select">SELECT * FROM T;</span>
  <span slot="options" data-cstrnt="DEFAULT 'D'" data-vals="(1)" data-cols='(A)' >Valeur par défaut</span>
  <span slot="options" data-cstrnt="NOT NULL" data-vals="(1, NULL)">Valeur non-nulle</span>
  <span slot="options" data-cstrnt="UNIQUE" data-vals="(1, 2), (1, 2)">Valeur unique</span>
  <span slot="options" data-cstrnt="CHECK(B == UPPER(B) )" data-vals="(1, 'Nom')" >Condition sur la valeur</span>

```sql
CREATE TABLE T ( A TEXT,
    B TEXT $CSTRNT
  ) STRICT;
INSERT INTO  T $COLS VALUES
    $VALS;
```

</sql-interactive>

- `DEFAULT $VAL` : valeur par défaut si non renseignée lors d'un `INSERT`.
- `NOT NULL` : la valeur ne peut pas être `NULL`.
- `UNIQUE` : il ne peut pas y avoir deux valeurs identiques dans la colonne.<br/>
  ⚠ La colonne peut contenir plusieurs valeurs `NULL`.
- `CHECK($COND)` : la valeur de la colonne doit respecter la condition `$COND`.

### Contraintes sur la table

Les contraintes `UNIQUE` et `CHECK` peuvent dépendre de plusieurs colonnes. Dans ce cas, la contrainte est ajoutée après la liste des colonnes :

<sql-interactive>
  <span slot="options" data-cstrnt="UNIQUE(A,B)" data-vals="(1, 2), (1, 2)">Colonnes uniques</span>
  <span slot="options" data-cstrnt="CHECK(B != A)" data-vals="(1, 1)" >Condition</span>

```sql
CREATE TABLE T (
    A TEXT, B TEXT,
    $CSTRNT
  ) STRICT;
INSERT INTO  T VALUES
    $VALS;
```

</sql-interactive>

### Colonnes générées

Il est possible de générer la valeur d'une colonne à partir des valeurs d'autres colonnes grâce à la contrainte `AS` :

<sql-interactive>
  <span slot='select'>SELECT * FROM T;</span>
  <span slot="options" data-cstrnt="(PU*Q )" data-vals="(1,2), (3,4)">Colonne générée virtuelle</span>
  <span slot="options" data-cstrnt="(PU*Q) STORED" data-vals="(1,2), (3,4)">Colonne générée stockée</span>

```sql
CREATE TABLE T (
    PU INT, Q INTEGER,
    T INT AS $CSTRNT
  ) STRICT;
INSERT INTO  T VALUES
    $VALS;
```

</sql-interactive>

💡 `STORED` signifie que la valeur sera calculée lors des insertions/modifications puis stockées. Si absent, la valeur sera recalculée à chaque accès.

## Les index

Il est fréquent de vouloir récupérer une entrée à partir d'un identifiant donné. Cependant, s'il faut à chaque fois parcourir toutes les entrées de la table unes à unes, cela peut s'avérer relativement lent sur de grandes tables.

Un **index** est une structure permettant de trouver très rapidement la/les entrée(s) associée(s) à un tel identifiant.

💡 Lorsqu'une colonne a la contrainte `UNIQUE`, il est fréquent que le SGBD créé automatiquement un index.

### Les clefs primaires (PK)

Une clef primaire est un index un peu spécial accélérant encore plus les recherches d'entrées à partir d'un identifiant. Il est un champ (ou un ensemble de champs) identifiant de manière unique une entrée.

Elle est créée via une contrainte `PRIMARY KEY` et implique les contraintes `UNIQUE NOT NULL`. Il ne peut y avoir qu'une clef primaire par table.

<sql-interactive>
  <span slot='select'>SELECT * FROM T;</span>
  <span slot="options" data-pk="TEXT PRIMARY KEY" data-vals="('1'), ('2')">Clé primaire (texte)</span>
  <span slot="options" data-pk="TEXT PRIMARY KEY" data-vals="('1'), ('1')">Clé primaire (dupliquée)</span>
  <span slot="options" data-pk="INTEGER
      PRIMARY KEY AUTOINCREMENT" data-vals="(NULL), (NULL)">Clé primaire (auto-incrément)</span>

```sql
CREATE TABLE T (
    K $PK
  ) STRICT;
INSERT INTO  T VALUES
    $VALS;
```

</sql-interactive>

💡 La contrainte `AUTOINCREMENT` permet d'automatiquement incrémenter la clef primaire des entrées insérées. Elle ne peut être utilisée que sur une colonne `INTEGER PRIMARY KEY`.

💡 Comme avec la contrainte `UNIQUE`, il est aussi possible de créer une clef primaire sur plusieurs colonnes via contrainte de table :

<sql-interactive>
  <span slot='select'>SELECT * FROM T;</span>
  <span slot="options" data-pk="PRIMARY KEY(ID, CODE)" data-vals="(1, 'E')">Clé primaire (multi-cols)</span>

```sql
CREATE TABLE T (
    ID INT, CODE TEXT,
    $PK
  ) STRICT;
INSERT INTO  T VALUES
    $VALS;
```

</sql-interactive>

💡 Certains SGBD crééent automatiquement, pour chaque table, une clef primaire cachée nommée `ROWID`.

### Les clefs étrangères (FK)

Il est fréquent, dans une base de données, que des entrées fassent référence à des entrées d'une autre table. Par exemple, une table `Vente` pourra mettre en relation une table `Vendeur` et une table `Client`.

💡 Le terme de "base de données relationnelles" vient en partie de là : on établie des relations entre différentes entrées/données. Ceci constitue une des fonctionnalités majeurs des bases de données SQL.

Pour cela, on utilise une clef étrangère (FK) qui est un moyen léger en mémoire (et en performances) de référencer les données d'une table référencée. Elle est composée d'une ou plusieurs colonnes référençant une ou plusieurs colonnes de contraine `UNIQUE` ou `PRIMARY KEY`. On l'indique via une contrainte de table sous la forme suivante :

```sql
FOREIGN KEY($COLS_FK[,...]) REFERENCES $T
FOREIGN KEY($COLS_FK[,...]) REFERENCES $T($COLS_PK[,...])
```

- `$T` est la table référencée.
- `$COL_FK` sont les colonnes constituant la clé étrangère.
- `$COL_PK` sont les colonnes référencées.

💡 Si la/les colonne(s) de la table référencée ne sont pas spécifiées, la/les colonne(s) de la clef primaire sont utilisée(s).

<sql-interactive>
  <span slot='select'>SELECT * FROM T;
SELECT * FROM Users;</span>
  <span slot="options" data-fk="FOREIGN KEY(ID)
    REFERENCES Users" data-vals="(1, 'E')">Clef étrangère existante</span>
  <span slot="options" data-fk="FOREIGN KEY(ID)
    REFERENCES Users" data-vals="(4, 'E')">Clef étrangère non-existante</span>
  <span slot="options" data-fk="FOREIGN KEY(ID)
    REFERENCES Users" data-vals="(NULL, 'E')">Clef étrangère nulle</span>

```sql
CREATE TABLE T (ID INT, C TEXT,
    $FK
  ) STRICT;
INSERT INTO  T VALUES
    $VALS;
```

</sql-interactive>

💡 La clé étrangère peut être nulle (sauf si contrainte `NOT NULL`).

💡 On préfère souvent nommer la/les colonne(s) de la clef étrangères avec les noms de la/les colonne(s) référencée(s).

⚠ La vérification des clefs étrangères n'est pas activé par défaut sur SQLite. La commande `PRAGMA foreign_keys = ON` permet de l'activer.

### UML

Les bases de données ont généralement de très nombreuses tables. Il est alors difficile de se faire une idée de sa structure, du schéma des tables et de leurs relations, sans une représentation appropriée. Pour cela on utilise soit un diagramme UML, soit un diagramme Merise. Le dernier étant très franco-français, nous nous concentrerons sur le premier.

Dans un diagramme UML, chaque table est représentée par un rectangle découpé en 3 cadres contenant :
- le nom de la table ;
- les colonnes de la table ;
- les contraintes de la table.

Par convention, les noms de colonnes sont formattés comme suit :
- en gras pour les clefs primaires ;
- en italique pour les clefs étrangères ;
- soulignés pour les colonnes uniques.

Une flèche est aussi tirée des clefs étrangères jusqu'aux clefs primaires qu'elles référencent.

💡 En fonction des besoins, il est possible d'ajouter plus ou moins de détails, comme e.g. les types et contraintes de colonnes.

<sql-interactive id="uml-sql">
  <span slot="options" data-pk="ID" data-fk="ID" data-cols_a="ID INT, CODE TEXT" data-cols_b="ID INT, CODE TEXT">Clef primaire (uni-col)</span>
  <span slot="options" data-pk="ID, CODE" data-fk="ID, CODE" data-cols_a="CODE TEXT, X INT, ID INT" data-cols_b="ID INT, CODE TEXT">Clef primaire (multi-cols)</span>
  <!-- TODO: LISS -->
  <pre id="uml" slot="post" class="hljs">
    <code>
      <div class="output"></div>
    </code>
  </pre>

```sql
CREATE TABLE A (
    $COLS_A,
    PRIMARY KEY($PK)
  ) STRICT;
CREATE TABLE B (
    $COLS_B,
    FOREIGN KEY($FK)
    REFERENCES B
  ) STRICT;
```

</sql-interactive>

<!-- test -->

<script type="module">
  import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

  const uml_output = document.querySelector("#uml .output");
  //await LISS.qs("#col-table");
  const umlsql   = await LISS.qs("#uml-sql");

  umlsql.host.addEventListener("change", (ev) => {
    console.warn( umlsql.lastVars );
    update( umlsql.lastVars );
  });
  update( umlsql.lastVars );

  function update({cols_a, cols_b, fk, pk}) {

    fk = fk.split(',').map( k => k.trim() );
    pk = pk.split(',').map( k => k.trim() );

    function buildTable(cols, hcols, isPK) {
      let content = [];

      const hmethod = isPK ? "strong" : "em";

      let max_w  = 0;
      let max_nw = 0;
      let max_cw = 0;

      const cnstr = `${isPK ? "PK" : "FK"}(${(isPK ? pk : fk).join(', ')})`;
      max_w = cnstr.length;

      cols = cols.split(',').map( l => {
          l = l.trim();
          const pos = l.indexOf(' ');
          const colname = l.slice(0, pos);
          const constrainst = l.slice(pos+1);

          const nw = colname.length;
          const cw = constrainst.length;
          if( nw > max_nw)
            max_nw = nw;
          if( cw > max_cw)
            max_cw = cw;

          return [colname, constrainst];
      });

      if( max_w > max_nw + max_cw)
        max_cw = max_w - max_nw;
      if( max_w < max_nw + max_cw )
        max_w = max_nw + max_cw;


      let prefix = "";
      let suffix = "";

      if( isPK )
        suffix = "   ";
      else
        prefix = "   ";


      content.push(`${prefix}+-${"".padEnd(max_w+2, "-")}-+${suffix}`);
      const lpad_len = Math.floor( (max_w+2-1)/2);
      let lpad = "".padEnd(lpad_len);
      let rpad = "".padEnd(max_w+2-1 - lpad_len);
      content.push(`${prefix}| ${lpad}<strong>${(isPK ? "A" : "B")}</strong>${rpad} |${suffix}`);
      content.push(`${prefix}+-${"".padEnd(max_w+2, "-")}-+${suffix}`);

      for(let col of cols) {

        let w = max_w;

        let lsuffix = suffix;
        let lprefix = prefix

        let colname = col[0].padEnd(max_nw);

        if( hcols.includes(col[0]) ) {
          colname = `<${hmethod}>${colname}</${hmethod}>`;

          if( isPK )
            lsuffix = "<--";
          else
            lprefix = "---";
        }
        
        const line = `${colname}: ${col[1].padEnd(max_cw)}`;
        content.push(`${lprefix}| ${line} |${lsuffix}`);
      }

      content.push(`${prefix}+-${"".padEnd(max_w+2, "-")}-+${suffix}`);
      content.push(`${prefix}| ${cnstr.padEnd(max_w+2)} |${suffix}`);
      content.push(`${prefix}+-${"".padEnd(max_w+2, "-")}-+${suffix}`);

      return content;
    }

    let tA = buildTable(cols_a, pk, true);
    let tB = buildTable(cols_b, fk, false);

    if( tB.length > tA.length) {
      tA.push(... new Array(tB.length - tA.length).fill("".padEnd(tA[0].length)) );
    }
    if( tA.length > tB.length) { // just to simplify code.
      tB.push(... new Array(tA.length - tB.length).fill("".padEnd(tB[0].length)) );
    }

    let start_idx, end_idx;
    for(let i = 0; i < tA.length; ++i) {
      const idx = tA[i].length-1;
      if(tA[i][idx] === "-" || tB[i][0] === "-") {
        start_idx = i;
        break;
      }
    }
    for(let i = tA.length - 1; i >= 0 ; --i) {
      const idx = tA[i].length-1;
      if(tA[i][idx] === "-" || tB[i][0] === "-") {
        end_idx = i;
        break;
      }
    }

    let content = "";
    for(let i = 0; i < tA.length; ++i) {

      let sep = "   ";

      if( pk.length === 1 && fk.length === 1) { // unique.
        if(start_idx === end_idx) {
          if(i === start_idx)
            sep = "---";
        } else {
          if(i === start_idx || i === end_idx) {
            if(tA[i][ tA[i].length - 1 ] !== " ")
              sep = "-+ ";
            else
              sep = " +-";
          }
          if( i > start_idx && i < end_idx)
            sep = " | ";
        }
      }

      if( pk.length > 1 || fk.length > 1) { // 1 vs N and N vs 1 shouldn't occur ?
        if( i >= start_idx && i <= end_idx) {

          sep = [" ", "|", " "];

          if(tA[i][ tA[i].length - 1 ] !== " ") {
            sep[0] = "-";
            sep[1] = "+";
          }
          if(tB[i][0] !== " ") {
            sep[1] = "+";
            sep[2] = "-";
          }

          sep = sep.join("");
        }
      } 

      content += `${tA[i]}${sep}${i < tB.length ? tB[i] : ""}\n`;
    }

    uml_output.innerHTML = content;
  }

</script>

## Opérations sur table avec contraintes

### Modification/Suppression sur des colonnes référencées

Comme nous l'avons vu à la section précédente, une clef étrangère référence des colonnes d'une autre table. Mais que se passe-t-il lorsqu'on modifie ou supprime des entrées dans les colonnes référencées ?

C'est à vous de le définir via les clauses `ON DELETE $POLICY` et `ON UPDATE $POLICY` sur la clef étrangère :

<sql-interactive full-reset="true">
  <span slot='select'>SELECT * FROM T3;</span>
  <span slot="options" data-pol="RESTRICT">Empêcher la suppression</span>
  <span slot="options" data-pol="CASCADE">Supprimer l'entrée</span>
  <span slot="options" data-pol="SET NULL">Mettre la colonne à NULL</span>


```sql
CREATE TABLE T3 (
    ID INT, A TEXT,
    FOREIGN KEY(ID) REFERENCES T1
    ON DELETE $POL
  ) STRICT;
INSERT INTO T3 VALUES (2, 'A');
DELETE FROM T1 WHERE ID = 2;
```

</sql-interactive>

- `RESTRICT`: empêche la modification/suppression si les valeurs sont référencées par une clef étrangère.
- `CASCADE` : modifie/supprime la clef étrangère lorsque des valeurs des colonnes référencées sont modifiées.
- `SET NULL|DEFAULT` : modifie la clef étrangère lorsque des valeurs des colonnes référencées sont modifiées.

<details>
  <summary>

### Merge : mettre à jour si existe, sinon insérer (en TD ?).
 
</summary>

<todo>Rédiger</todo>

En gros la problématique est d'ajouter si inexistant, et de modifier si existant.
 
On peut faire un select, puis refaire une requête pour update ou insert, mais c'est pas pratique de faire plusieurs requêtes.
 
On a des choses comme REPLACE (MySQL) supprime l'entrée si elle existe, puis ajoute la nouvelle. Sauf que s'il y a des clefs primaires référencées par des clefs étrangères ça casse tout.
 
Il faut ainsi faire cela en une seule opération.
Pour cela on a UPSERT et INSERT ON DUPLICATE KEYS UPDATE (dépend du SGBD) qui s'utilise comme INSERT et qui sont plutôt simples (vérifient si la clef primaire existe).
 
Et pour d'autres, MERGE (SQL2003), qui est plus puissant (on peut personnaliser la condition), et l'utiliser pour d'autres usages (on peut aussi supprimer).</todo>

+ évoquer https://sql.sh/cours/merge (à la fin d'un TP ?)

=> ajouter (ou modifier si existe) => besoin notion de clef primaire.

+ UPSERT.

+ ajouter ou modifier si existe (seulement mysql)
https://dev.mysql.com/doc/refman/8.4/en/insert-on-duplicate.html
https://dev.mysql.com/doc/refman/9.0/en/replace.html

Replace à éviter ( https://stackoverflow.com/questions/9168928/what-are-practical-differences-between-replace-and-insert-on-duplicate-key ).

</details>

### Modifier les contraintes

Pour information, certains SGBD (pas sur SQLite) permettent de modifier les contraintes de colonnes et de tables :

```sql
ALTER TABLE $T ALTER|MODIFY COLUMN $NAME $DESC;
ALTER TABLE $T ADD|DROP CHECK $DESC;
ALTER TABLE $T ADD|DROP PRIMARY KEY ($COL);
ALTER TABLE $T ADD|DROP CONSTRAINST PK_$T PRIMARY KEY ($COL[,...]);
```

⚠ Modifier le schéma et les contraintes d'une table existante/non-vide n'est pas anodin.

# Fusions et jointures

## Opérations d'ensembles

Il est possible d'opérer des opérations d'ensembles sur les **lignes** retournées par deux requête `SELECT`, à conditions qu'elles aient le même nombre de colonnes (et idéalement la même structure) :

- `UNION`     : concaténer les lignes.
- `INTERSECT` : les lignes communes aux deux requêtes.
- `EXCEPT`    : les lignes de la première requête absentes de la seconde.


Les opérations d'ensembles sont en pratique relativement rares. Elles peuvent toutefois être pertinentes quand une table a été divisée en plusieurs tables pour des raisons de performances. Par exemple, une table `Vente` contenant de très nombreuses entrées, et dont la manipulation se fait quasi-exclusivement en précisant une année de vente, pourrait être découpée en vue d'obtenir une table par année.

Ces opérations s'utilisent sous la forme suivante :

```sql
SELECT $QUERY_1
UNION|INTERSECT|EXCEPT [ALL]
SELECT $QUERY_2
```

<sql-interactive>
  <span slot="options" data-op='UNION'></span>
  <span slot="options" data-op='UNION ALL'></span>
  <span slot="options" data-op='INTERSECT'></span>
  <span slot="options" data-op='EXCEPT'></span>

```sql
SELECT * FROM Produits
$OP
SELECT Nom, Prenom, Age FROM Users;
```

</sql-interactive>

💡 Par défaut, les lignes en doublons sont supprimées. L'option `ALL` permet de conserver l'ensemble des lignes.

## Sous requêtes

Vous pouvez utiliser le résultat d'une requête `SELECT` (alors appelée "sous-requête") comme valeur dans une autre requête. Par exemple, pour utiliser une sous-requête dans une condition `WHERE`, il suffit de l'ajouter entre parenthèses :

<sql-interactive>
  <span slot="options" data-cond='>' data-subquery='SELECT AVG(ID) FROM T2'>Sous-requête (op. de comparaison sur une valeur)</span>
  <span slot="options" data-cond='>' data-subquery='SELECT ID FROM T2'>Sous-requête (op. de comparaison sur une liste)</span>
  <span slot="options" data-cond='IN' data-subquery='SELECT ID FROM T2'>Sous-requête (IN)</span>

```sql
SELECT * FROM T1 WHERE ID $COND ( $SUBQUERY );
```

</sql-interactive>

⚠ La sous-requête doit retourner une liste (i.e. une seule colonne).

💡 Les opérateurs de comparaisons utilisés sur une liste retourneront vrai si la condition est vraie pour au moins un élément de la liste.

⚠ Certains SGBD requièrent d'ajouter `ANY` entre l'opérateur de comparaison et la liste.

### Sous-requête corrélée

Lorsque la sous-requête dépend d'une colonne de la requête principale, elle est dite "corrélée", et sera réexécutée à chaque ligne de la requête principale. Dès lors, pour des raisons de performances on utilisera les opérateurs :

- `EXISTS` à la place de `IN`.
- `ANY`/`SOME` ou `ALL` au lieu d'utiliser certaines fonctions d'agrégations.

<sql-interactive>
  <span slot="options" data-cond='EXISTS'>Sous-requête corrélée</span>

```sql
SELECT * FROM T1 WHERE $COND (
  SELECT ID FROM T2 WHERE T2.ID = T1.ID
);
```

</sql-interactive>

En effet, une sous-requête non-corrélée n'étant exécutée qu'une seule fois, il est intéressant de l'évaluer entièrement en amont (i.e. récupérer toutes les lignes), pour ensuite utiliser son résultat, à chaque entrée de la requête principale, lors de l'évaluation la clause `WHERE`, sans avoir à le recalculer à chaque fois.

En revanche, quand une sous-requête est corrélée, il faudra nécessairement évaluer la sous-requête à chaque entrée de la requête principale. Cependant il n'est alors pas utile de calculer l'ensemble des lignes de la sous-requête, car on peut s'arrêter à :

- la première ligne existante pour `EXISTS`.
- la première ligne satisfaisant la condition pour `ALL`.
- la première ligne ne satisfaisant pas la condition pour `ALL`.

⚠ Il va de soit qu'il faut éviter les sous-requêtes corrélées autant que possible...

⚠ SQLite ne supporte que `IN`, il ne supporte ni `ANY`, ni `ALL`.

## Jointures

Pour rappel, une table (e.g. `Vente`) peut en référencer une autre (e.g. `Vendeur`). Il est alors possible d'obtenir e.g. :
- la liste des vendeurs ayant au moins 10 ventes ?
- la liste des ventes des vendeurs embauchés il y a moins de 5 ans.

Pour cela il est possible d'utiliser des requêtes corrélées, mais la syntaxe serait lourde et la requête peu performante. Dans ce cas de figure on utilise ce qu'on appelle des **jointures**, qui permettent de fusionner des entrées de tables différentes au sein d'une même ligne.

### Le produit cartésien

Une méthode naïve (**et à ne jamais utiliser**) d'effectuer une jointure est d'utiliser un produit cartésien :

```sql
SELECT * FROM $T1, $T2 WHERE $T1.$KEY == $T2.$KEY;
```

Pour exécuter cette requête, le SGDB va construire une table intermédiaire constituée de toutes les combinaisons de lignes possibles entre `$T1` et `$T2`, qu'elle va ensuite parcourir pour filtrer les lignes via la clause `WHERE`.

<style>
  .color1 {
    background-color: red;
  }
  .color2 {
    background-color: blue;
  }
  .color3 {
    background-color: green;
  }
  .color4 {
    background-color: orange;
  }

  .table_flex {
    display: flex;
    align-items: top;
    gap: 10px;
  }
</style>

<div style="text-align: center">
  <anim-player id="cart_anim"></anim-player>
</div>
<div class='table_flex'>
  <sql-dymtable id="cart_T1" table="T1" header="T1"></sql-dymtable>
    <span><strong>x</strong></span>
  <sql-dymtable id="cart_T2" table="T2" header="T2"></sql-dymtable>
    <span><strong>=</strong></span>
  <sql-dymtable id="cart_T1_T2" cols="T1.ID as 'T1.ID', T1.T1 as 'T1.T1', T2.ID as 'T2.ID', T2.T2 as 'T2.T2'" table="T1, T2" header="T1xT2"></sql-dymtable>
    <span><strong>-- WHERE T1.ID == T2.ID --></strong></span>
  <sql-dymtable id="cart_T1_T2W" cols="T1.ID as 'T1.ID', T1.T1 as 'T1.T1', T2.ID as 'T2.ID', T2.T2 as 'T2.T2'" table="T1, T2" header="T1xT2 WHERE T1.ID == T2.ID"></sql-dymtable>
</div>


<script type="module">
  import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

  const T1 = await LISS.qs("#cart_T1");
  const T2 = await LISS.qs("#cart_T2");

  const T1_T2  = await LISS.qs("#cart_T1_T2");
  const T1_T2W = await LISS.qs("#cart_T1_T2W");

  const anim   = await LISS.qs("#cart_anim");

  T1.highlightRow( ({ID}) => `high_${ID}` );
  T2.highlightRow( ({ID}) => `high_${ID}` );

  T1_T2.highlightCells( (row, colname) => {
    const id = row[ colname.split('.')[0] + ".ID"];
    return `high_${id}`;
  });
  T1_T2W.highlightCells( (row, colname) => {
    const id = row[ colname.split('.')[0] + ".ID"];
    return `high_${id}`;
  });
  
  function doStep(step) {

    let genT1_T2_max_step = T1.nbRows * (T2.nbRows + 2) + 2;

    if( step - genT1_T2_max_step > T1_T2.nbRows )
      return anim.reset();

    let T1_rownum;
    let T2_rownum;
    let T1_T2_rownum;
    let T1_T2_generated = step === 0 ? undefined : -1;

    if( step > 1 && step < genT1_T2_max_step ) { // build T1xT2
      T1_rownum = Math.trunc( (step - 2) / (T2.nbRows + 2) );
      T2_rownum =             (step - 2) % (T2.nbRows + 2) - 1;

      T1_T2_generated = T1_rownum * T2.nbRows + T2_rownum;

      if( T2_rownum === -1 )
        T2_rownum = undefined;
      if( T2_rownum === T2.nbRows ) {
        T2_rownum = undefined;
        --T1_T2_generated;
      }

      T1_T2_rownum = T1_rownum * T2.nbRows + T2_rownum;
    }

    let T1_T2W_rownum = step === 0 ? T1_T2.nbRows : -1;

    if( step >= genT1_T2_max_step ) { // filter T1xT2
      T1_T2_generated = T1_T2.nbRows;
      T1_T2W_rownum = T1_T2_rownum = step - genT1_T2_max_step;
    }


    T1.highlightRow( (_, row_num) => {
      return {cur: row_num === T1_rownum}
    });
    T2.highlightRow( (_, row_num) => {
      return {cur: row_num === T2_rownum}
    });

    T1_T2.highlightRow( (_, row_num) => {
      return {
        cur : row_num === T1_T2_rownum,
        hide: row_num >   T1_T2_generated
      }
    });
    T1_T2W.highlightRow( (row, row_num) => {
      return {
        cur : row_num === T1_T2W_rownum,
        hide: row_num >   T1_T2W_rownum || row["T1.ID"] !== row["T2.ID"]
      }
    });
  }

  anim.host.addEventListener("step", (ev) => doStep(ev.detail) );
  doStep(0);
</script>

Ainsi, le produit cartésien de deux tables de 3 entrées produira une table intermédiaire de 9 lignes, dont la majorité des lignes seront ensuite rejettées par la clause `WHERE`. Même sur de petites tables, la construction de la table intermédiaire explose très vite les capacités du SGDB :

<style>
  .danger {
    background-color: red;
  }
</style>

<table>
  <thead>
    <tr>
      <th># Entrées</th>
      <th># Tables</th>
      <th># Table intermédiaire</th>
      <th># Résultats</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>E</td>
      <td>T</td>
      <td>E^T</td>
      <td>E</td>
    </tr>
    <tr>
    <tr>
      <td>1 000</td>
      <td>2</td>
      <td>1 000 000</td>
      <td>1 000</td>
    </tr>
    <tr>
      <td>1 000</td>
      <td>3</td>
      <td class='danger'>1 000 000 000</td>
      <td>1 000</td>
    </tr>
    <tr>
      <td>32 000</td>
      <td>2</td>
      <td class='danger'>1 024 000 000</td>
      <td>32 000</td>
    </tr>
    <tr>
      <td>1 000</td>
      <td>6</td>
      <td class='danger'>10^18</td>
      <td>1 000</td>
    </tr>
    <tr>
      <td>1 000 000</td>
      <td>3</td>
      <td class='danger'>10^18</td>
      <td>1 000 000</td>
    </tr>
    <tr>
      <td><input class='join_nbEntries' 
      value='2'
      type=number></input></td>
      <td><input class='join_nbTables' value='2' type=number min='2'></input></td>
      <td class='join_cartesien'></td>
      <td class='join_best'></td>
    </tr>
  </tbody>
</table>

<script>
  const nb_tables_input = document.querySelector('.join_nbTables');
  const nb_entries_input = document.querySelector('.join_nbEntries');

  const result_cartesien = document.querySelector('.join_cartesien');
  const result_mieux = document.querySelector('.join_best');

  function update() {
    const nb_table   = +nb_tables_input.value;
    const nb_entries = +nb_entries_input.value;

    result_cartesien.textContent = Math.pow(nb_entries, nb_table).toLocaleString();

    result_mieux.textContent = nb_entries.toLocaleString();
  }

  nb_tables_input.addEventListener('input', update);
  nb_entries_input.addEventListener('input', update);

  update();
</script>

Pour rappel, 1 milliard de lignes correspondent à plusieurs Go en mémoire, et 10^18 à plusieurs Po !!!

⚠ Pour cette raison, on n'utilise **JAMAIS** les produits cartésien en SQL ! **JA-MAIS !**

### Le principe des jointures

La bonne manière de procéder est d'utiliser la clause `JOIN` qui s'utilise usuellement de la sorte :

```sql
SELECT * FROM $T1 NATURAL INNER JOIN $T2;
```

Pour chaque entrée de `$T1`, le SGBD va rechercher les entrées de `$T2` dont les valeurs des colonnes communes sont identiques à celles de l'entrée de `$T1`. Ainsi, contrairement au produit cartésien, le SGBD n'a pas besoin de construire une table intermédiaire colossale, réduisant très fortement la consommation de mémoire vive.


<div style="text-align: center">
  <anim-player id="join_anim"></anim-player>
</div>

<div class='table_flex'>
  <sql-dymtable id="join_T1" table="T1" header="T1"></sql-dymtable>
    <span><strong>JOIN</strong></span>
  <sql-dymtable id="join_T2" table="T2" header="T2"></sql-dymtable>
    <span><strong>=</strong></span>
  <sql-dymtable id="join_T1_T2W" cols="T1.ID as 'T1.ID', T1.T1 as 'T1.T1', T2.ID as 'T2.ID', T2.T2 as 'T2.T2'" table="T1 RIGHT JOIN T2 USING(ID)" header="T1 JOIN T2"></sql-dymtable>
</div>


<script type="module">
  import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

  const T1 = await LISS.qs("#join_T1");
  const T2 = await LISS.qs("#join_T2");

  const T1_T2W = await LISS.qs("#join_T1_T2W");

  const anim   = await LISS.qs("#join_anim");

  T1.highlightRow( ({ID}) => `high_${ID}` );
  T2.highlightRow( ({ID}) => `high_${ID}` );

  T1_T2W.highlightCells( (row, colname) => {
    const id = row[ colname.split('.')[0] + ".ID"];
    return `high_${id}`;
  });
  
  function doStep(step) {

    let T2_rownum;
    let substep;

    if( step > 1 ) { // build T1 JOIN T2
      T2_rownum = Math.trunc( (step - 2) / 3);
      substep = (step - 2) % 3;
    }

    if( T2_rownum !== undefined && T2_rownum >= T2.nbRows){
      anim.reset();
      return 
    }

    T1.highlightRow( ({ID}) => {

      return {cur: T2_rownum !== undefined && ID === T2.getRow(T2_rownum)[0].ID && substep > 0 }
    });
    T2.highlightRow( (_, row_num) => {
      return {cur: row_num === T2_rownum}
    });

    T1_T2W.highlightRow( (row, row_num) => {
      return {
        cur : step !== 0 && row_num === T2_rownum && substep === 2,
        hide: step !== 0 && (step === 1 || row_num > T2_rownum || row_num === T2_rownum && substep !== 2)
      }
    });
  }

  anim.host.addEventListener("reset", (ev) => doStep(0) );
  anim.host.addEventListener("step", (ev) => doStep(ev.detail) );
  doStep(0);
</script>

💡 Si les colonnes en communs constituent un index, la recherche des entrées de `$T2` s'en retrouve grandement accelérée. Si elles constituent une clé primaire/étrangère, la recherche devient quasi instantanée.

⚠ Il est ainsi **plus que fortement recommandé** d'effectuer des jointures sur des clés primaires/étrangères.

💡 Vous pouvez ajouter une clause `WHERE` à vôtre requête SQL. En théorie la clause `WHERE` est appliquée aux entrées **après** jointures. Cependant, les SGBD sont capables d'optimiser la requête en préfiltrant, lorsque possible, les tables **avant** jointures.

### Les types de jointures

En réalité, il existe 3 types de jointures fréquemment utilisées :
<style>
.join_table :is(td,th):last-child {
  border :none;
  font-style:italic;
}
.join_table :is(td,th):first-child {
  border :none;
  text-align: right;
}
</style>
<table class="join_table">
  <thead>
    <tr>
      <th></th>
      <th colspan="3" style="text-align:center">Entries</th>
      <th style="text-align:center">WHERE</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr><td>INNER :</td><td>T1</td><td>x</td><td>T2</td><td>T1.ID == T2.ID</td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>LEFT :</td><td>T1</td><td>x</td><td>NULL</td><td>T1.ID <strong>NOT IN</strong> T2.ID</td><td>(+ entrées INNER)</td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td>FULL :</td><td>NULL</td><td>x</td><td>T2</td><td>T2.ID <strong>NOT IN</strong> T1.ID</td><td>(+ entrées LEFT)</td></tr>
  </tbody>
</table>

- `INNER` : par défaut.
- `LEFT`  : comme `INNER`, mais ajoute au résultat les entrées de `$T1` dont aucune entrée de `$T2` ne correspond.
- `FULL` (plus rare) : comme `LEFT`, mais ajoute au résultat les entrées de `$T2` dont aucune entrée de `$T1` ne correspond.<br/>
  💡 Il est équivalant à l'union de `$T1 LEFT JOIN $T2` et `$T2 LEFT JOIN $T1`.

<sql-interactive id="join2_sql">
  <span slot="options" data-jointype='INNER'></span>
  <span slot="options" data-jointype='LEFT' ></span>
  <span slot="options" data-jointype='RIGHT'></span>
  <span slot="options" data-jointype='FULL' ></span>
  <sql-dymtable slot="post" id="join2_T1_T2W" cols="T1.ID as 'T1.ID', T1.T1 as 'T1.T1', T2.ID as 'T2.ID', T2.T2 as 'T2.T2'" table="T1 FULL JOIN T2 USING(ID)" header="T1 JOIN T2"></sql-dymtable>

```sql
SELECT * FROM T1 NATURAL $JOINTYPE JOIN T2;
```

</sql-interactive>

<script type="module">
  import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

  const T1_T2W = await LISS.qs("#join2_T1_T2W");
  const sql    = await LISS.qs("#join2_sql");

  function update(datas) {

    const t2 = datas[0].map( e => e.T2);

    T1_T2W.highlightRow( (row) => {
      return { lowlight: ! t2.includes(row["T2.T2"]) }
    });
  }

  sql.host.addEventListener("change", (ev) => {
    update(ev.detail.datas);
  });
  update(sql.lastDatas);

  T1_T2W.highlightCells( (row, colname) => {
    const id = row[ colname.split('.')[0] + ".ID"];
    return `high_${id}`;
  });
</script>

⚠ Il existe 2 autres types de jointures, à éviter :

- `RIGHT` : `$T1 RIGHT JOIN $T2` est équivalant à `$T2 LEFT JOIN $T1`<br/>
  ⚠  Pour des raisons de lisibilité, autant que possible, utilisez `LEFT` à la place.
- `CROSS` : produit cartésien (**à éviter**).

💡 Vous pourrez aussi trouver `LEFT/RIGHT/FULL OUTER JOIN` dans certaines requêtes SQL. Ils sont en réalité équivalents à `LEFT/RIGHT/FULL JOIN`.

### Préciser la condition de jointure

Il se peut que vous souhaitiez expliciter les colonnes sur lesquelles effectuer la jointure pour :

- exclure une colonne de la jointure, avec :<br/>
  `USING($COLS[,...])` indiquant les colonnes à utiliser.
- utiliser des colonnes de noms différents, avec :<br/>
  `ON T1.$COL1 == T2.$COL2` indiquant la condition de jointure. 

⚠ Dans les deux cas, il vous faudra retirer le mot clef `NATURAL`.

💡 Il est recommandé d'utiliser `USING` au lieu de jointures naturelles (i.e. avec `NATURAL`) afin d'éviter des jointures accidentelles.

<sql-interactive>
  <span slot="options" data-jointype='NATURAL'>Jointure naturelle (à éviter)</span>
  <span slot="options" data-joincond='USING(ID)'>Jointure explicite (noms de colonnes identiques)</span>
  <span slot="options" data-joincond='ON T1.T1 == T2.T2'>Jointure explicite (noms de colonnes différentes)</span>

```sql
SELECT * FROM T1 $JOINTYPE INNER JOIN T2 $JOINCOND;
```

</sql-interactive>

⚠ Si deux colonnes ont le même nom, seule la première sera affichée. Si vous souhaitez afficher la seconde, il est alors nécessaire de la renommer :

<sql-interactive>
  <span slot="options" data-cols='*'>Sans renommer les colonnes de même noms</span>
  <span slot="options" data-cols='*, T2.ID as ID2'>En renommant les colonnes de même noms</span>

```sql
SELECT $COLS FROM T1 INNER JOIN T2 USING(ID);
```

</sql-interactive>

<!--
  Non-correlated:
    - initialState : X in (....) // compute the list/value...
      + [ ] in (...)
    - step (new value)
      - 4 in (....)
    - step (check) => until end or found.
      - 4 in ([.]...)
    - if found : add line.

  - correlated:
    - initialState : X in (QUERY)
      + [ ] in () <- (QUERY [ ] )
    - step (new value)
      - 4 in () <- (QUERY [4])
    - step (check) => until end or found.
      - 4 in ([.]...) <- query [4]
    - if found : add line.
-->

</main>
    </body>
</html>