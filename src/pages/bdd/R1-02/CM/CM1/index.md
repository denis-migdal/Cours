<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>BDR1 (CM1)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/index.css"  rel="stylesheet">
        <script  src="/skeleton/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

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

Par exemple, la table suivante contient 2 entrées ayant les propriétés <script type="c-text">ID</script>, <script type="c-text">Nom</script>, <script type="c-text">Prenom</script>, <script type="c-text">Age</script> :

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

- <script type="c-text">TEXT</script> : une chaîne de caractère.
- <script type="c-text">BLOB</script> : des données binaires. 
- <script type="c-text">INT</script>/<script type="c-text">INTEGER</script> : un nombre entier.
- <script type="c-text">REAL</script> : un nombre décimal.
- <script type="c-text">ANY</script>  : accepte n'importe quelle valeur.

💡 Par défaut, chaque type accepte la valeur <script type="c-text">NULL</script>, qui indique une absence de données.

💡 En SQL les chaînes de caractères s'écrivent entre guillemets simples (<script type="c-text">'</script>). Pour échapper un guillemet simple dans la chaîne de caractères, il suffit de l'écrire en double, e.g. <script type="c-sql">'J''ai échappé.'</script>. 

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

- <script type="c-sql">SELECT</script> : lire des données ;
- <script type="c-sql">UPDATE</script> : modifier des entrées ;
- <script type="c-sql">INSERT</script> : insérer des entrées ;
- <script type="c-sql">DELETE</script> : supprimer des entrées.

Nous allons dans un premier temps nous concentrer sur le premier, et verrons les 3 autres par la suite.

## La requête SELECT

La requête SQL <script type="c-sql">SELECT</script> permet de récupérer des données présentes dans une base de donnée, et se présente usuellement sous la forme suivante : <script type="c-sql">
SELECT <h>$COLS[,...]</h> FROM <h>$TABLE</h>; 
</script>

- <script type="c-sql"><h>$TABLE</h></script> est le nom de la table SQL à requêter.

- <script type="c-sql"><h>$COLS[,...]</h></script> est la liste des colonnes à récupérer séparées par ",".
  
  💡 <script type="c-sql">*</script> correspond à l'ensemble des colonnes.

⚠ Il est d'usage de ne récupérer que les colonnes dont on a réellement besoin. En effet, sur de grandes tables et de grosses requêtes, réduire le nombre de colonnes récupérées permet de réduire le volume des données transférées. 

⚠ Le nom de la colonne devra être écrite entre guillemets s'il contient des caractères non-alphanumériques.

### Sélection des colonnes

<sql-interactive id="col-sql">
  <sql-dymtable slot="post" id="col-table" table="Users"></sql-dymtable>
  <span slot="options" data-cols="*">Retourner toutes les colonnes</span>
  <span slot="options" data-cols="Nom">Retourner une seule colonne</span>
  <span slot="options" data-cols="ID, Prenom">Retourner plusieurs colonnes</span>

<script type="c-sql">
SELECT <h>$COLS</h> FROM Users;
</script>

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

💡 Dans le cadre d'une requête SQL, vous pouvez temporairement associer un alias à une colonne grâce au mot clé <script type="c-sql">as</script> :

<sql-interactive>
  <span slot="options" data-col_as="">Requête normale</span>
  <span slot="options" data-col_as="as User">Renommer une colonne</span>

<script type="c-sql">
SELECT Nom <h>$COL_AS</h>, Age FROM Users;
</script>

</sql-interactive>

### Trier par ordre croissant/décroissant les lignes

La clause <script type="c-sql">ORDER BY <h>$COL [DESC|ASC][,...]</h></script> permet de trier les lignes retournées par ordre croissant (<script type="c-sql">ASC</script>) ou décroissant (<script type="c-sql">DESC</script>).

<sql-interactive>
  <span slot="options" data-row_sort="Age ASC">Trier par Age croissant</span>
  <span slot="options" data-row_sort="Age DESC">Trier par Age décroissant</span>
  <span slot="options" data-row_sort="Age DESC, Nom ASC">Trier par Age décroissant, puis par Nom croissant</span>

<script type="c-sql">
SELECT * FROM Users ORDER BY <h>$ROW_SORT</h>;
</script>

</sql-interactive>

## Selection des lignes

<script type="c-sql">SELECT</script> retourne l'intégralité des entrées de la table, ce qui peut représenter des milliers de lignes. Or, bien souvent, seules quelques entrées nous intéressent.

Il est ainsi important de sélectionner uniquement les lignes qui nous intéressent afin de réduire le volume des données transférées, ainsi que de réduire la consommation de ressources serveurs (processeur, RAM, disque).

Il est ainsi possible de sélectionner des lignes de différentes manières :

- via un filtre via la clause <script type="c-sql">WHERE <h>$COND</h></script> :<br/>
  *e.g. les entrées correspondant aux utilisateurs mineurs.*
- en supprimant les doublons via la clause <script type="c-sql">DISTINCT</script> :<br/>
  *e.g. les âges sans doublons.*
- en limitant le nombre de lignes retournées via les clauses <script type="c-sql">LIMIT <h>$N</h> OFFSET <h>$O</h></script> :<br/>
  *e.g. les 10 plus jeunes utilisateurs.*

### Clause WHERE

La manière générique de filter les lignes à retourner est d'ajouter une clause <script type="c-sql">WHERE <h>$COND</h></script> à la requête. Seules les lignes pour lesquelles <script type="c-sql"><h>$COND</h></script> est vraie seront retournées.

<sql-interactive id="row-sql">
  <sql-dymtable slot="post" id="row-table" table="Users"></sql-dymtable>
  <span slot="options" data-cond="Age > 18">Retourner les entrées où Age > 18</span>
  <span slot="options" data-cond="Nom == 'Doe'">Retourner les entrées où Nom est "Doe"</span>

<script type="c-sql">
SELECT * FROM Users WHERE <h>$COND</h>;
</script>

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

💡 La structure d'une condition est très simple, utilisant les opérateurs de comparaison que vous connaissez déjà : <script type="c-sql">></script>, <script type="c-sql"><</script>, <script type="c-sql">>=</script>, <script type="c-sql"><=</script>, <script type="c-sql">!=</script>.

<sql-interactive>
  <span slot="options" data-cond="ID > 1">Comparaison simple</span>
  <span slot="options" data-cond="Prenom == Nom">Comparaison entre 2 colonnes</span>
  <span slot="options" data-cond="0 < Age < 18">Chaîner les opérateurs produit un résultat étrange</span>

<script type="c-sql">
SELECT Age, Nom, Prenom FROM Users WHERE <h>$COND</h>;
</script>

</sql-interactive>

💡 Vous pouvez utiliser les noms de colonnes comme opérandes, même si elles n'apparaissent pas dans les colonnes à retourner.

⚠ Comme vous le constatez dans l'exemple ci-dessus, bien que cela soit syntaxiquement valide, <strong>chaîner les opérateurs de comparaisons ne produira pas le résultat attendu</strong>.<br/>
Vous ne devez ainsi pas écrire, e.g. <script type="c-sql">0 < Age < 18</script>, mais (cf suite du cours) :
<ul>
  <li>soit <code>0 < Age AND Age < 18</code> ;</li>
  <li>soit <code>Age BETWEEN 0 AND 18</code> .</li>
</ul>

#### Opérateurs logiques

Vous pouvez composer des conditions à l'aide d'opérateurs logiques que vous connaissez déjà : <script type="c-sql">AND</script>, <script type="c-sql">OR</script>, <script type="c-sql">NOT</script>.

<sql-interactive>
  <span slot="options" data-cond="Age > 18 AND Age < 45">Intersection (et)</span>
  <span slot="options" data-cond="Age > 18 OR Age < 45">Union (ou)</span>
  <span slot="options" data-cond="NOT ( Age > 18 )">Négation (non)</span>

<script type="c-sql">
SELECT Age, Nom, Prenom FROM Users WHERE <h>$COND</h>;
</script>

</sql-interactive>

💡 Vous pouvez aussi utiliser des parenthèses.

#### Autres opérateurs

<sql-interactive>
  <span slot="options" data-cond="Age IS NULL">Entrées où Age vaut null</span>
  <span slot="options" data-cond="Nom IN ('Doe', 'Nescio')">Entrées où Nom est dans la liste</span>
  <span slot="options" data-cond="Age BETWEEN 0 AND 18">Entrées où Age est compris entre 0 et 18</span>
  <span slot="options" data-cond="Nom LIKE 'D%'">Entrées où Nom commence par "D"</span>

<script type="c-sql">
SELECT Age, Nom, Prenom FROM Users WHERE <h>$COND</h>;
</script>

</sql-interactive>

- <script type="c-sql">IS <h>[NOT]</h> NULL</script> : si la valeur est nulle/n'est pas nulle.<br/>
  ⚠ En SQL <script type="c-sql">NULL == NULL</script> est généralement évalué à <script type="c-sql">False</script>.

- <script type="c-sql"><h>[NOT]</h> IN (<h>$VALS[,...]</h>)</script> : si la valeur est/n'est pas dans une liste donnée.

- <script type="c-sql"><h>[NOT]</h> BETWEEN <h>$MIN</h> AND <h>$MAX</h></script> : si la valeur est/n'est pas entre <script type="c-sql"><h>$MIN</h></script> et <script type="c-sql"><h>$MAX</h></script>.<br/>
  💡 C'est l'équivalant de <script type="c-sql"><h>$VAL</h> >= <h>$MIN</h> AND <h>$VAL</h> <= <h>$MAX</h></script><br/>
  ⚠ Le comportement de l'opérateur <script type="c-sql">BETWEEN</script> peut changer en fonction du système, et peut alors être équivalent à <script type="c-sql"><h>$VAL</h> > <h>$MIN</h> AND <h>$VAL</h> < <h>$MAX</h></script>.

- <script type="c-sql"><h>[NOT]</h> LIKE <h>$PATTERN</h></script> : si la valeur correspond/ne correspond pas à <script type="c-sql"><h>$PATTERN</h></script>.<br/>
  <script type="c-sql">_</script> correspond à n'importe quel caractère.<br/>
  <script type="c-sql">%</script> correspond à un nombre indéterminé de n'importe quel caractère.<br/>
  e.g. <script type="c-sql">LIKE 'D%'</script>: une valeur commençant par "D".

### Supprimer les doublons

La clause <script type="c-sql">DISTINCT</script> permet de supprimer les doublons dans les lignes retournées :

<sql-interactive>
  <span slot="options" data-row_distinct="">Requête normale</span>
  <span slot="options" data-row_distinct="DISTINCT">Ne pas retourner les doublons</span>

<script type="c-sql">
SELECT <h>$ROW_DISTINCT</h> Age FROM Users;
</script>

</sql-interactive>

### Tops et pagination

#### Tops

La clause <script type="c-sql">LIMIT <h>$N</h></script> permet de ne récupérer que les <script type="c-sql"><h>$N</h></script> premières entrées retournées. Souvent utilisée avec la clause <script type="c-sql">ORDER BY</script>, elle permet notamment de générer des tops, e.g. les X utilisateurs les plus jeunes.


<sql-interactive>
  <span slot="options" data-pagination="1">Ne récupérer que la première entrée</span>
  <span slot="options" data-pagination="2">Ne récupérer que les deux premières entrées</span>
  <span slot="options" data-orderby="ORDER BY Age" data-pagination="1">Ne récupérer que l'utilisateur le plus jeune</span>

<script type="c-sql">
SELECT * FROM Users <h>$ORDERBY</h> LIMIT <h>$PAGINATION</h>;
</script>

</sql-interactive>

#### Pagination

Lorsqu'une requête retourne des milliers de lignes, il peut être coûteux de toutes les récupérer et les afficher en même temps. On peut alors découper la liste en plusieurs pages, en affichant que e.g. 50 lignes par pages. Ainsi la première page récupère et affiche les 50 premières lignes, la seconde les 50 suivantes, et ainsi de suite.

Pour cela, on utilisera la clause <script type="c-sql">LIMIT 50</script> afin de ne récupérer que 50 entrées par requêtes. En conjonction, on utilisera la clause <script type="c-sql">OFFSET <h>$P</h>*50</script> qui permet de ne pas récupérer les <script type="c-sql"><h>$P</h>*50</script> premières entrées retournées. <script type="c-sql"><h>$P</h>+1</script> étant alors le numéro de la page actuelle.

<sql-interactive id="pagination-sql">
  <sql-dymtable slot="post" id="pagination-table" table="Users"></sql-dymtable>
  <span slot="options" data-pagination="1" data-p="0">Page 1 (1 entrée par page)</span>
  <span slot="options" data-pagination="1" data-p="1">Page 2 (1 entrée par page)</span>
  <span slot="options" data-pagination="1" data-p="2">Page 3 (1 entrée par page)</span>
  <span slot="options" data-pagination="2" data-p="0*2">Page 1 (2 entrée par page)</span>
  <span slot="options" data-pagination="2" data-p="1*2">Page 2 (2 entrée par page)</span>

<script type="c-sql">
SELECT * FROM Users LIMIT <h>$PAGINATION</h> OFFSET <h>$P</h> ;
</script>

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

## Astuces pour rédiger efficacement les requêtes SQL

1. Indentez vos requêtes (e.g. en alignant les clauses), elle en devient bien plus lisible (et facile à modifier).
1. Lorsque vous ouvrez une parenthèse/guillemet/etc. fermez-la immédiatement, puis remplissez son contenu.
1. Évitez autant que possible d'écrire à la main :
   1. Utilisez l'auto-complétion pour les mots clefs et noms de colonnes (touche de tabulation <script type="c-text">⭾</script>).
   1. Utilisez les flèches (<script type="c-text">↑</script>/<script type="c-text">↓</script>) pour remonter l'historique et (<script type="c-text">←</script>/<script type="c-text">→</script>) pour modifier une requête.
   1. Utilisez les copier/coller (<script type="c-text">^+⇧+C</script>/<script type="c-text">^+⇧+V</script>).
1. Comme en programmation, ne **jamais** tout écrire d'un coup, mais procédez par étapes :
   1. commencez par un <script type="c-sql">SELECT * FROM <h>$T</h>;</script> basique.
   1. affichez les colonnes que vous utiliserez.
   1. ajoutez les nouvelles clauses une par une, en testant à chaque fois.
   1. idem pour les expressions, commencez simple, puis ajoutez les opérations au fur et à mesure.

💡 Cela vous aidera à écrire plus simplement des requêtes SQL avec méthode, en transformant un problème complexe, en plusieurs petits problèmes simples. De surcroît, en cas d'erreur, vous saurez immédiatement son origine, et sera alors bien plus facile à déboguer et corriger.

### Ordre d'exécution et d'écriture

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

Par exemple lors d'une requête <script type="c-sql">SELECT</script>:

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

⚠ En rouge sont indiqués des cas d'exceptions dont l'ordre d'écriture ne correspond pas à leur ordre d'exécution. Une autre exception existe dans les requêtes <script type="c-sql">UPDATE</script> où la clause <script type="c-sql">SET</script> s'écrit **avant** la clause <script type="c-sql">WHERE</script>.

</main>
    </body>
</html>