<!DOCTYPE html>
<html>
<head>
    <title>BDR CM1</title>
    <link rel="stylesheet" href="./index.css">
    <script src="./index.js" type="module" defer></script>
</head>
<body>
<main>
<frame-uca-title
    caption   = "R1-02 Bases de Données Relationnelles"
    subcaption= "CM1 : Requêter une base de données"
    author    = "Denis MIGDAL"
    mail      = "denis.migdal@uca.fr">
</frame-uca-title>

<frame-section>
    Introduction à SQL
</frame-section>
<frame-subsection>
    Les SGBD
</frame-subsection>

<frame-uca>

***Contexte :*** des milliers/millions de données à manipuler, e.g.

<!--
- *pour une entreprise* : des listes de clients, de commandes, de produits, etc.
- *pour une administration* : des listes d'administrés, de transactions, etc.
- *pour un site Web* : des logs de consultation de ses différentes pages, etc. -->

<div>

***Problème :*** les manipuler "à la main" est...

- **chronophage** : *35 jours pour un million de données (1 donnée/s et 8h/j).*
- **source d'erreurs** : *données comptées en double, sautées, etc.*
- **incomplet** : *données stockées à plusieurs endroits différents, certaines perdues.*

</div>

<div>

***Besoins :*** un logiciel permettant d'efficacement...

- **stocker et organiser les données**.
- **manipuler les données** : ajouter/modifier/supprimer des données.
- **requêter les données** : e.g. compter le nombre de ventes.

</div>

</frame-uca>
<frame-uca>

<div>

***Solution :*** les **Systèmes de Gestion de Bases de Données** (SGBD) :

- **créer, stocker, manipuler et requêter des bases de données.**
- **la cohérence des données :** garantie l'absence de données invalides.<br/>
  <!-- *e.g. avoir un âge négatif.* -->
- **la robustesse :** résister aux pannes.<br/>
  <!-- *e.g. l'ordinateur plante alors qu'on est en train de modifier une donnée.* -->
- **le contrôle d'accès :** qui peut faire quoi sur quelles données ?.<br/>
  <!-- *e.g. l'administrateur peut modifier et les utilisateurs lire les données.* -->
- **les logs :** que s'est-il passé ? qui a fait quoi et quand ?<br/>
  <!-- *e.g. après une panne, qu'était-il en train de faire ?*<br/> -->
  <!-- *e.g. le stagiaire a fait une fausse manipulation, qu'a-t-il réellement fait ?* -->
- **accès concurrent :** modifications simultanées de données.

</div>

</frame-uca>

<frame-subsection>
    Les SGBD SQL
</frame-subsection>

<frame-uca>

**SQL** (*Structured Query Language*) : langage pour manipuler des SGBD.

<div>

Exemples de SGBD SQL :

- **SQLite** : léger (utilisé en TP)
  - 1 base de donnée = 1 fichier.
  - utilisation locale.
  - pas d'accès concurrents.
- **PostgreSQL**, **MySQL**, et **MariaDB** : plus complets.

</div>

⚠ SQL est *normalisé* (ISO/CEI 9075) mais quelques différences entre SGBD.


</frame-uca>


<frame-uca>

<div>

Les SGBD (sauf SQLite) suivent une **architecture client-serveur** :
- **serveur** : stocke les données et exécute les requêtes.
- **client** : envoie les requêtes et réceptionne les résultats.

</div>
<div>

Plusieurs types de clients :

- **API** utilisée dans le langage de programmation de votre choix.
- **application en ligne de commandes** (*e.g. psgl, mysql*).
- **interface graphique de gestion de bases de données** (*e.g. pgAdmin*).
- **interface graphique de requêtage** (*e.g.  ???*).

</div>

</frame-uca>

<frame-subsection>
    Les tables SQL
</frame-subsection>

<frame-uca>

Une **base de donnée** est composée de **tables SQL** (tableau contenant les données) :

<center>
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
</center>

- lignes : les **entrées** (ou **enregistrements**);
- colonnes : les **propriétés** des entrées.


<div>

💡 base de données ≈ fichier tableur ; tables ≈ feuilles de calculs.

💡 Les tables sont aussi appelées **relations**, d'où les *base de données relationnelle*.

</div>

</frame-uca>

<frame-subsection>
    Les types SQL
</frame-subsection>

<frame-uca>

<div>

**Schéma** de table : décrit la **structure** de la table, e.g. le type des colonnes :

- `TEXT` : une chaîne de caractère (e.g. `'Hello'` / `'J''ai mangé'`).
- `INT`/`INTEGER` : un nombre entier.
- `REAL` : un nombre décimal.
- `BLOB` : des données binaires.
- `ANY`  : accepte n'importe quelle valeur.

</div>
<div>

💡 Par défaut, chaque type accepte la valeur `NULL` (= absence de données).

💡 D'autres types disponibles en fonction du SGBD utilisé.

</div>

</frame-uca>

<frame-subsection>
    Documentation
</frame-subsection>

<frame-uca>

<div>

💡 Vous trouver plus amples documentation via les liens suivants :

- SQL :
  - https://www.w3schools.com/sql/
  - https://sql.sh
- SGBD :
  - SQLite : https://www.sqlite.org
  - PostgreSQL : https://www.postgresql.org/docs/
  - MySQL : https://dev.mysql.com/doc/

</div>

</frame-uca>

<frame-section>
    Requêtes de bases
</frame-section>
<frame-subsection>
    Les types de requêtes
</frame-subsection>

<frame-uca>

<div>

Plusieurs types de **commandes SQL** pour différent types d'actions :

- `SELECT` : **lire** des données ;
- `UPDATE` : **modifier** des entrées ;
- `INSERT` : **insérer** des entrées ;
- `DELETE` : **supprimer** des entrées.

</div>

💡 Nous allons nous concentrer sur `SELECT` et verrons les autres par la suite.

</frame-uca>

<frame-section>
    Requêtes SELECT
</frame-section>
<frame-subsection>
    Sélection de colonnes
</frame-subsection>

<frame-uca>

<div>
  <div class="overlay">
    <sql-code onslide="0">SELECT * FROM <var>$TABLE</var>;</sql-code>
    <sql-code onslide="1-">SELECT <var>$COLS[,...]</var> FROM <var>$TABLE</var>;</sql-code>
  </div>
  <ul>
    <li><sql-code><var>$TABLE</var></sql-code> : nom de la table SQL à requêter.</li>
    <li onslide="1-"><sql-code><var>$COLS[,...]</var></sql-code> : liste des colonnes à récupérer (séparées par ",").<br/>
  💡 <sql-code>*</sql-code> correspond à l'ensemble des colonnes.</li>
  </ul>
</div>

<sql-system>
  <sql-queries>
SELECT * FROM $TABLE;
SELECT $COLS FROM $TABLE;
  </sql-queries>
  <sql-option onslide="0">
  {
    "COLS" : "*",
    "TABLE": "Users"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "COLS" : "Nom",
    "TABLE": "Users"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "COLS" : "ID, Prenom",
    "TABLE": "Users"
  }
  </sql-option>
  <sql-output class="flex">
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" similar_to="2" q="1"></div>
    </div>
    <div onslide="1-">
      <div class="sql_query"  q="2"></div>
      <div class="sql_result" q="2"></div>
    </div>
  </sql-output>
</sql-system>

<div>
  <div onslide="1-">⚠ Le nom de la colonne entre guillemets si caractères non-alphanumériques.</div>
  <div onslide="2-">⚠ Ne récupérer que les colonnes nécessaires (réduire les données transférées).</div>
</div>

</frame-uca>

<frame-subsection>
    Alias de colonnes
</frame-subsection>

<frame-uca>

<div>
  <div>💡 Donner (temporairement) un alias à une colonne (<sql-code>as</sql-code>) :</div>
  <br/>
<sql-system>
  <sql-queries>
SELECT Nom $COL_AS1, Age FROM Users;
SELECT Nom $COL_AS2, Age FROM Users;
  </sql-queries>
  <sql-option onslide="0">
  {
    "COL_AS2": "as User"
  }
  </sql-option>
  <sql-output class="flex">
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" q="1"></div>
    </div>
    <div onslide="1-">
      <div class="sql_query"  q="2"></div>
      <div class="sql_result" q="2"></div>
    </div>
  </sql-output>
</sql-system>
</div>

</frame-uca>

<frame-subsection>
    Trier par ordre croissant/décroissant les lignes
</frame-subsection>

<frame-uca>

<div>
<ul>
  <li><sql-code>ORDER BY <var>$COL <span onslide="1-">[DESC|ASC]</span><span onslide="2-">[,...]</span></var></sql-code> trier les lignes.
    <ul>
      <li onslide="1-">Par ordre croissant (<sql-code>ASC</sql-code>) ou décroissant (<sql-code>DESC</sql-code>) ;</li>
      <li onslide="2">Pour trier sur plusieurs colonnes, les séparer par une virgule.</li>
    </ul>
  </li>
</ul>
<br/>
<div class="flex">
<sql-system>
  <sql-queries>
SELECT * FROM Users ORDER BY $ORDER_BY;
  </sql-queries>
  <sql-option onslide="0">
  {
    "ORDER_BY": "Age"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "ORDER_BY": "Age DESC"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "ORDER_BY": "Age DESC, Nom ASC"
  }
  </sql-option>
  <sql-output class="flex">
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" q="1"></div>
    </div>
  </sql-output>
</sql-system>
</div>
</div>

</frame-uca>

<frame-section>
    Selection des lignes
</frame-section>

<frame-uca>

<div>
  <b><i>Problème :</b></i> retourne <i>toutes</i> les entrées.
  <ul>
    <li>des milliers/millions d'entrées (pas forcément toutes pertinentes).</li>
    <li>consommation excessive de ressources Internet, processeur, RAM, disque, etc.</li>
  </ul>
</div>

<div>

***Solution :*** réduire la quantité d'entrées retournées.
- **Filtrer** ;
- **Supprimer les doublons** ;
- **Limiter le nombre de lignes**.

</div>

</frame-uca>

<frame-subsection>
    Clause WHERE
</frame-subsection>

<frame-uca>

<div>
  <sql-code>WHERE <var>$COND</var></sql-code> : les entrées où <sql-code><var>$COND</var></sql-code> vraie sont retournées.
  <ul>
    <li>Opérateurs de comparaison : <sql-code>></sql-code>, <sql-code><</sql-code>, <sql-code>>=</sql-code>, <sql-code><=</sql-code>, <sql-code>==</sql-code>, <sql-code>!=</sql-code> ;</li>
    <li onslide="2-">Opérateurs logiques : <sql-code>NOT</sql-code>, <sql-code>OR</sql-code>, <sql-code>AND</sql-code> ;</li>
  </ul>
</div>

<sql-system>
  <sql-queries>
SELECT * FROM Users;
SELECT * FROM Users
        WHERE $COND;
  </sql-queries>
  <sql-option onslide="0">
  {
    "COND": "Age > 18"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "COND": "0 <= Age <= 18"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "COND": "0 <= Age AND Age <= 18"
  }
  </sql-option>
  <sql-option onslide="3">
  {
    "COND": "(0 <= Age) AND (Age <= 18)"
  }
  </sql-option>
  <sql-output class="flex">
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" similar_to="2" q="1"></div>
    </div>
    <div>
      <div class="sql_query"  q="2"></div>
      <div class="sql_result" q="2"></div>
    </div>
  </sql-output>
</sql-system>

<ul class="overlay">
  <li onslide="1-2">⚠ <strong>Ne JAMAIS chaîner les opérateurs de comparaisons</strong>.
  <ul onslide="2">
    <li>soit <sql-code>0 <= Age AND Age <= 18</sql-code> ;</li>
    <li>soit <sql-code>Age BETWEEN 0 AND 18</sql-code> .</li>
  </ul></li>
  <li onslide="3">💡 Vous pouvez aussi utiliser des parenthèses.</li>
</ul>

</frame-uca>
<frame-subsubsection>Autres opérateurs</frame-subsubsection>

<frame-uca>

<div>
<ul class="overlay">
    <li onslide="0"><sql-code>[NOT] IN <var>($VALS[,...])</var></sql-code> : la valeur est [n'est pas] dans la liste <sql-code><var>($VALS[,...])</var></sql-code>.</li>
    <li onslide="1"><sql-code>[NOT] BETWEEN <var>$MIN</var> AND <var>$MAX</var></sql-code> : la valeur [n'est pas] est pas entre <sql-code><var>$MIN</var></sql-code> et <sql-code><var>$MAX</var></sql-code> (inclus).<br/>
  💡 Équivalant à <sql-code><var>$VAL</var> >= <var>$MIN</var> AND <var>$VAL</var> <= <var>$MAX</var></sql-code>.<br/>
  ⚠ Comportement peut varier selon SGBD, e.g. <sql-code><var>$MIN</var></sql-code> et <sql-code><var>$MAX</var></sql-code> non-inclus.</li>
    <li onslide="2"><sql-code>[NOT] LIKE <var>$PATTERN</var></sql-code> : la valeur [ne] correspond [pas] à <sql-code><var>$PATTERN</var></sql-code>.
    <ul class="flex-2">
        <li><sql-code>_</sql-code> n'importe quel caractère.</li>
        <li><sql-code>%</sql-code> nombre indéterminé de <sql-code>_</sql-code>.</li>
    </ul></li>
    <li onslide="3"><sql-code>IS [NOT] NULL</sql-code> : la valeur [n'est pas] est nulle nulle.<br/>
  ⚠ En SQL <sql-code>NULL == NULL</sql-code> est généralement évalué à <sql-code>False</sql-code>.</li>
</ul>
<br/>
<sql-system>
  <sql-queries>
SELECT * FROM Users
        WHERE $LCOND $RCOND;
SELECT * FROM Users
        WHERE $LCOND $NOT_RCOND;
  </sql-queries>
  <sql-option onslide="0">
  {
    "LCOND": "Nom",
    "RCOND": "IN ('Doe', 'Nescio')",
    "NOT_RCOND": "NOT IN ('Doe', 'Nescio')"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "LCOND": "Age",
    "RCOND": "BETWEEN 0 AND 18",
    "NOT_RCOND": "NOT BETWEEN 0 AND 18"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "LCOND": "Nom",
    "RCOND": "LIKE 'D%'",
    "NOT_RCOND": "NOT LIKE 'D%'"
  }
  </sql-option>
  <sql-option onslide="3">
  {
    "LCOND": "Age",
    "RCOND": "IS NULL",
    "NOT_RCOND": "IS NOT NULL"
  }
  </sql-option>
  <sql-output class="flex">
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" q="1"></div>
    </div>
    <div>
      <div class="sql_query"  q="2"></div>
      <div class="sql_result" q="2"></div>
    </div>
  </sql-output>
</sql-system>
</div>

</frame-uca>

<frame-subsection>
    Supprimer les doublons
</frame-subsection>

<frame-uca>

<div>
  <ul>
    <li><sql-code>DISTINCT</sql-code> : supprime les doublons.</li>
  </ul>
  <br/>
<sql-system>
  <sql-queries>
SELECT $DISTINCT_1 Age FROM Users;
SELECT $DISTINCT_2 Age FROM Users;
  </sql-queries>
  <sql-option onslide="0">
  {
    "DISTINCT_2": "DISTINCT"
  }
  </sql-option>
  <sql-output class="flex">
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" q="1"></div>
    </div>
    <div>
      <div class="sql_query"  q="2"></div>
      <div class="sql_result" q="2"></div>
    </div>
  </sql-output>
</sql-system>
</div>

</frame-uca>

<frame-subsection>
    Tops et pagination
</frame-subsection>
<frame-subsubsection>
    Tops
</frame-subsubsection>

<frame-uca>

<div>

<ul>
  <li><sql-code>LIMIT <var>$N</var></sql-code> : récupère les <sql-code><var>$N</var></sql-code> premières entrées.
  <ul><li onslide="2">💡 Avec la clause <sql-code>ORDER BY</sql-code> génère des tops.</li></ul></li>
</ul>
<br/>
<sql-system>
  <sql-queries>
SELECT * FROM Users $ORDER_BY;
SELECT * FROM Users $ORDER_BY LIMIT $N;
  </sql-queries>
  <sql-option onslide="0">
  {
    "N" : "1"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "N" : "2"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "N" : "2",
    "ORDER_BY": "ORDER BY Age"
  }
  </sql-option>
  <sql-output class="flex">
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" similar_to="2" q="1"></div>
    </div>
    <div>
      <div class="sql_query"  q="2"></div>
      <div class="sql_result" q="2"></div>
    </div>
  </sql-output>
</sql-system>
</div>

</frame-uca>
<frame-subsubsection>
    Pagination
</frame-subsubsection>
<frame-uca>
<div>

***Problème*** :

- Récupérer et afficher milliers de lignes => coûteux.

</div>
<div>

***Solution*** :

<ul>
  <li>Découper la liste en plusieurs pages (e.g. <sql-code><var>$N</var></sql-code> lignes/page).
  <ul>
    <li><sql-code>LIMIT <var>$N</var></sql-code> : <sql-code><var>$N</var></sql-code> entrées par requêtes.</li>
    <li><sql-code>OFFSET <var>$P</var>*<var>$N</var></sql-code> : récupérer à partir de la <sql-code><var>$P</var>*<var>$N</var></sql-code>-ième entrée (avec <sql-code><var>$P</var>+1</sql-code>, la page).</li>
  </ul>
  </li>
</div>

<sql-system>
  <sql-queries>
SELECT * FROM Users;
SELECT * FROM Users LIMIT $N OFFSET $O;
  </sql-queries>
  <sql-option onslide="0">
  {
    "N" : "1",
    "O" : "0"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "N" : "1",
    "O" : "1"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "N" : "1",
    "O" : "2"
  }
  </sql-option>
  <sql-option onslide="3">
  {
    "N" : "2",
    "O" : "0*2"
  }
  </sql-option>
  <sql-option onslide="4">
  {
    "N" : "2",
    "O" : "1*2"
  }
  </sql-option>
  <sql-output class="flex">
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" similar_to="2" q="1"></div>
    </div>
    <div>
      <div class="sql_query"  q="2"></div>
      <div class="sql_result" q="2"></div>
    </div>
  </sql-output>
</sql-system>
</frame-uca>

<frame-section>
    Astuces pour rédiger efficacement les requêtes SQL
</frame-section>

<frame-uca>

1. Indentez vos requêtes (e.g. aligner les clauses), + lisible + facile à modifier.
1. Fermez immédiatement parenthèse/guillemet/etc. avant de la remplir.
1. Évitez autant que possible d'écrire à la main :
   1. Utilisez l'auto-complétion (touche de tabulation `⭾`).
   1. Utilisez (`↑`/`↓`) pour remonter l'historique et (`←`/`→`) pour modifier une requête.
   1. Utilisez les copier/coller (`^+⇧+C`/`^+⇧+V`).
1. Ne **jamais** tout écrire d'un coup, mais procédez par étapes :
   1. `SELECT * FROM $T;` basique.
   1. afficher les colonnes pertinentes.
   1. ajoutez et testez les clauses une par une.
   1. idem pour les expressions, ajoutez les opérations au fur et à mesure.

Avantages :
- écriture + simple, rigoureux et méthodique.
- 1 problème complexe => petits problèmes simples.
- debug + simple : origine problème tout de suite connu.

</frame-uca>

<frame-subsection>
    Ordre d'exécution et d'écriture (de gauche à droite)
</frame-subsection>
<frame-uca>

<style>
  .later {
    color: gray;
    font-style: italic;
    opacity: 0.5;
  }
  .warning {
    color: red;
  }

  #order-list {
    margin: 0;
  }

</style>

<div style="display:flex">
  <ol id="order-list">
    <li step="1">Récupère table (<code>FROM</code>).</li>
    <li step="2" class="warning"><em>Alias de colonnes.</em></li>
    <li step="3">Filtre entrées (<code>WHERE</code>).</li>
    <li class="later">Groupe entrées (<code>GROUP BY</code>).</li>
    <li class="later warning"><em>Alias de colonnes d'agrégats.</em></li>
    <li class="later">Filtre lignes agrégées (<code>HAVING</code>).</li>
    <li class="warning" step="4">Supprime doublons (<code>SELECT DISTINCT</code>).</li>
    <li step="5">Trie les lignes (<code>ORDER BY</code>).</li>
    <li step="6">Limite lignes (<code>LIMIT</code>/<code>OFFSET</code>).</li>
  </ol>
  <div>
    <span onslide="7"></span><!-- h4ck -->
    <!--<div style="text-align: center">
      <anim-player speed="1500" id="order-player"></anim-player>
    </div>-->
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
      <pre style="margin:0"><code id="order_sql">SELECT <span class="notyet">DISTINCT</span> Date, Ref, Q as N
    FROM Produits
    WHERE Ref = "Gomme"
    ORDER BY Q
    LIMIT 2;</code></pre>
      <sql-dymtable header="" table="Produits" id="order-table"><sql-dym-table>>
    </div>
  </div>
</div>

<script>
    async function fct(parent) {

        //const player = await LISS.qs("#order-player", parent);
        const table  = await LISS.qs("#order-table", parent);
        const order_sql = parent.querySelector("#order_sql");

        const list = parent.querySelectorAll("#order-list > li");

        const query = [
        `SELECT `, [4, `DISTINCT `], `Date, Ref, Q `, [2, "as N"],
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
                return; //return player.reset();

            order_sql.replaceChildren( ...buildOutput(i) ); //TODO highlight
            for(let li of list)
                li.classList.toggle("cur", li.getAttribute("step") === `${i}`);

            table.exec( buildQuery(i) );
        }

        //player.host.addEventListener("reset", ()   => { doStep(0)          });
        //player.host.addEventListener("step" , (ev) => { console.warn(ev.detail); doStep( ev.detail) });

        //doStep(0);
        doStep(+parent.getAttribute("slide") );
    }

    {
        const parent = document.currentScript.closest("frame-uca");
        (parent.scripts ??= []).push( fct );
    }
</script>
<!-- ⚠ En rouge, les cas d'exceptions (+ dans `UPDATE`, `SET` écrit **avant** `WHERE`). -->

</frame-uca>

</html>