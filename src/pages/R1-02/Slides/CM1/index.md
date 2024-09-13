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

***Problème :*** les manipuler "à la main" est...

- **chronophage** : *35 jours pour un million de données (1 donnée/s et 8h/j).*
- **source d'erreurs** : *données comptées en double, sautées, etc.*
- **incomplet** : *données stockées à plusieurs endroits différents, certaines perdues.*

***Besoins :*** un logiciel permettant d'efficacement...

- **stocker et organiser les données**.
- **manipuler les données** : ajouter/modifier/supprimer des données.
- **requêter les données** : e.g. compter le nombre de ventes.

</frame-uca>
<frame-uca>

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



</frame-uca>

<frame-subsection>
    Les SGBD SQL
</frame-subsection>

<frame-uca>

**SQL** (*Structured Query Language*) : langage pour manipuler des SGBD.

Exemples de SGBD SQL :

- **SQLite** : léger (utilisé en TP)
  - 1 base de donnée = 1 fichier.
  - utilisation locale.
  - pas d'accès concurrents.
- **PostgreSQL**, **MySQL**, et **MariaDB** : plus complets.

⚠ SQL est *normalisé* (ISO/CEI 9075) mais quelques différences entre SGBD.


</frame-uca>


<frame-uca>

Les SGBD (sauf SQLite) suivent une **architecture client-serveur** :
- **serveur** : stocke les données et exécute les requêtes.
- **client** : envoie les requêtes et réceptionne les résultats.

Plusieurs types de clients :

- **API** utilisée dans le langage de programmation de votre choix.
- **application en ligne de commandes** (*e.g. psgl, mysql*).
- **interface graphique de gestion de bases de données** (*e.g. pgAdmin*).
- **interface graphique de requêtage** (*e.g.  ???*).

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

💡 base de données ≈ fichier tableur ; tables ≈ feuilles de calculs.

💡 Les tables sont aussi appelées **relations**, d'où les *base de données relationnelle*.

</frame-uca>

<frame-subsection>
    Les types SQL
</frame-subsection>

<frame-uca>

**Schéma** de table : décrit la **structure** de la table, e.g. le type des colonnes :

- `TEXT` : une chaîne de caractère (e.g. `'Hello'` / `'J''ai mangé'`).
- `INT`/`INTEGER` : un nombre entier.
- `REAL` : un nombre décimal.
- `BLOB` : des données binaires.
- `ANY`  : accepte n'importe quelle valeur.

💡 Par défaut, chaque type accepte la valeur `NULL` (= absence de données).

💡 D'autres types disponibles en fonction du SGBD utilisé.

</frame-uca>

<frame-subsection>
    Documentation
</frame-subsection>

<frame-uca>

💡 Vous trouver plus amples documentation via les liens suivants :

- SQL :
  - https://www.w3schools.com/sql/
  - https://sql.sh
- SGBD :
  - SQLite : https://www.sqlite.org
  - PostgreSQL : https://www.postgresql.org/docs/
  - MySQL : https://dev.mysql.com/doc/

</frame-uca>

<frame-section>
    Requêtes de bases
</frame-section>
<frame-subsection>
    Les types de requêtes
</frame-subsection>

<frame-uca>

Plusieurs types de **commandes SQL** pour différent types d'actions :

- `SELECT` : **lire** des données ;
- `UPDATE` : **modifier** des entrées ;
- `INSERT` : **insérer** des entrées ;
- `DELETE` : **supprimer** des entrées.

💡 Nous allons nous concentrer sur `SELECT` et verrons les autres par la suite.

</frame-uca>

<frame-section>
    Requêtes SELECT
</frame-section>

<frame-uca>

`SELECT` **récupère** des données d'une table :

```sql
SELECT $COLS[,...] FROM $TABLE; 
```

- `$TABLE` : nom de la table SQL à requêter.
- `$COLS[,...]` : liste des colonnes à récupérer (séparées par ",").<br/>
  💡 `*` correspond à l'ensemble des colonnes.

⚠ Ne récupérer que les colonnes nécessaires (réduire les données transférées). 

⚠ Le nom de la colonne entre guillemets si caractères non-alphanumériques.

</frame-uca>

<frame-subsection>
    Sélection de colonnes
</frame-subsection>

<frame-uca>

<center>
    <sql-dymtable id="col-table" table="Users"></sql-dymtable>
</center>

<sql-interactive id="col-sql">
  <span onslide="0" slot="options" data-cols="*">Retourner toutes les colonnes</span>
  <span onslide="1" slot="options" data-cols="Nom">Retourner une seule colonne</span>
  <span onslide="2" slot="options" data-cols="ID, Prenom">Retourner plusieurs colonnes</span>

```sql
SELECT $COLS FROM Users;
```

</sql-interactive>

<script>
</script>

<script>
    async function fct(parent) {

        const coltable = await LISS.qs("#col-table", parent);
        const colsql   = await LISS.qs("#col-sql"  , parent);

        colsql.host.addEventListener("change", (ev) => {
            update(ev.detail.datas);
        });
        update( colsql.lastDatas );

        function update(datas) {

            const cols = Object.keys(datas[0][0]);

            coltable.highlightCol( (colname) => cols.includes(colname) );
        }
    }

    {
        const parent = document.currentScript.closest("frame-uca");
        (parent.scripts ??= []).push( fct );
    }
    //fct(parent);
</script>

</frame-uca>

<frame-subsection>
    Alias de colonnes
</frame-subsection>

<frame-uca>

💡 Associer (temporairement) un alias à une colonne (`as`) :

<sql-interactive>
  <span onslide="0" slot="options" data-col_as="">Requête normale</span>
  <span onslide="1" slot="options" data-col_as="as User">Renommer une colonne</span>

```sql
SELECT Nom $COL_AS, Age FROM Users;
```

</sql-interactive>

</frame-uca>

<frame-subsection>
    Trier par ordre croissant/décroissant les lignes
</frame-subsection>

<frame-uca>

`ORDER BY $COL [DESC|ASC][,...]` trier les lignes par ordre croissant (`ASC`) ou décroissant (`DESC`).

<sql-interactive>
  <span onslide="0" slot="options" data-row_sort="Age ASC">Trier par Age croissant</span>
  <span onslide="1" slot="options" data-row_sort="Age DESC">Trier par Age décroissant</span>
  <span onslide="2" slot="options" data-row_sort="Age DESC, Nom ASC">Trier par Age décroissant, puis par Nom croissant</span>

```sql
SELECT * FROM Users ORDER BY $ROW_SORT;
```

</sql-interactive>

</frame-uca>

<frame-section>
    Selection des lignes
</frame-section>

<frame-uca>

`SELECT` retourne *toutes* les entrées => consommation internet, processeur, RAM, disque.

Sélectionner lignes pertinentes => - de ressources :

- **filtrer** : `WHERE $COND`.
- **supprimer doublons** : `DISTINCT`.
- **limiter nombre de lignes** : `LIMIT $N OFFSET $O`.

</frame-uca>

<frame-subsection>
    Clause WHERE
</frame-subsection>

<frame-uca>

<center>
    <sql-dymtable id="row-table" table="Users"></sql-dymtable>
</center>

<sql-interactive id="row-sql">
  <span onslide="0" slot="options" data-cond="Age > 18">Entrées où Age > 18</span>
  <span onslide="1" slot="options" data-cond="Nom == 'Doe'">Entrées où Nom est "Doe"</span>

```sql
SELECT * FROM Users
         WHERE $COND;
```

</sql-interactive>

`WHERE $COND` : les lignes où `$COND` vraie sont retournées.

<script>

    async function fct(parent) {

        const rowtable = await LISS.qs("#row-table", parent);
        const rowsql   = await LISS.qs("#row-sql"  , parent);

        rowsql.host.addEventListener("change", (ev) => {
            update(ev.detail.datas);
        });
        update( rowsql.lastDatas );

        function update(datas) {

            const ids = datas[0].map(r => r.ID);

            rowtable.highlightRow( ({ID}) => ids.includes(+ID) );
        }

    }

    {
        const parent = document.currentScript.closest("frame-uca");
        (parent.scripts ??= []).push( fct );
    }

    //fct(parent);
</script>

</frame-uca>
<frame-subsubsection>Opérateurs de comparaisons</frame-subsubsection>
<frame-uca>

<sql-interactive>
  <span onslide="0" slot="options" data-cond="ID > 1">Comparaison simple</span>
  <span onslide="1" slot="options" data-cond="Prenom == Nom">Comparaison entre 2 colonnes</span>
  <span onslide="2" slot="options" data-cond="0 < Age < 18">Chaîner les opérateurs produit un résultat étrange</span>

```sql
SELECT Age, Nom, Prenom FROM Users WHERE $COND;
```

</sql-interactive>

<p onslide="0">💡 Opérateurs de comparaison : `>`, `<`, `>=`, `<=`, `!=`.</p>

<p onslide="1">💡 Opérandes peuvent être noms de colonnes, même si non retournée.</p>

<p onslide="2">⚠ <strong>Ne JAMAIS chaîner les opérateurs de comparaisons</strong>.</p>
<ul onslide="2">
  <li>soit <code>0 < Age AND Age < 18</code> ;</li>
  <li>soit <code>Age BETWEEN 0 AND 18</code> .</li>
</ul>

</frame-uca>
<frame-subsubsection>Opérateurs logiques</frame-subsubsection>
<frame-uca>

Opérateurs logiques : `AND`, `OR`, `NOT`.

<sql-interactive>
  <span onslide="0" slot="options" data-cond="Age > 18 AND Age < 45">Intersection (et)</span>
  <span onslide="1" slot="options" data-cond="Age > 18 OR Age < 45">Union (ou)</span>
  <span onslide="2" slot="options" data-cond="NOT ( Age > 18 )">Négation (non)</span>

```sql
SELECT Age, Nom, Prenom FROM Users WHERE $COND;
```

</sql-interactive>

💡 Vous pouvez aussi utiliser des parenthèses.

</frame-uca>
<frame-subsubsection>Autres opérateurs</frame-subsubsection>
<frame-uca>

<ul>
    <li onslide="0"><code>[NOT] IS NULL</code> : la valeur est nulle/n'est pas nulle.<br/>
  ⚠ En SQL <code>NULL == NULL</code> est généralement évalué à <code>False</code>.</li>
    <li onslide="1"><code>[NOT] IN ($VALS[,...])</code> : la valeur est/n'est pas dans une liste donnée.</li>
    <li onslide="2"><code>[NOT] BETWEEN $MIN AND $MAX</code> : la valeur est/n'est pas entre <code>$MIN</code> et <code>$MAX</code>.<br/>
  💡 Équivalant à <code>$VAL >= $MIN AND $VAL <= $MAX</code><br/>
  ⚠ Comportement de <code>BETWEEN</code> peut varier, e.g. <code>$VAL > $MIN AND $VAL < $MAX</code>.</li>
    <li onslide="3"><code>[NOT] LIKE $PATTERN</code> : la valeur correspond/ne correspond pas à <code>$PATTERN</code>.
    <ul>
        <li><code>_</code> n'importe quel caractère.</li>
        <li><code>%</code> nombre indéterminé de `_`.</li>
    </ul>
    e.g. <code>LIKE 'D%'</code>: commence par "D".</li>
</ul>

<sql-interactive>
  <span onslide="0" slot="options" data-cond="Age IS NULL">Entrées où Age vaut null</span>
  <span onslide="1" slot="options" data-cond="Nom IN ('Doe', 'Nescio')">Entrées où Nom est dans la liste</span>
  <span onslide="2" slot="options" data-cond="Age BETWEEN 0 AND 18">Entrées où Age est compris entre 0 et 18</span>
  <span onslide="3" slot="options" data-cond="Nom LIKE 'D%'">Entrées où Nom commence par "D"</span>

```sql
SELECT Age, Nom, Prenom FROM Users WHERE $COND;
```

</sql-interactive>

</frame-uca>
<frame-uca>

<frame-section>
    Supprimer les doublons
</frame-section>

`DISTINCT` : supprime les doublons :

<sql-interactive>
  <span onslide="0" slot="options" data-row_distinct="">Requête normale</span>
  <span onslide="1" slot="options" data-row_distinct="DISTINCT">Ne pas retourner les doublons</span>

```sql
SELECT $ROW_DISTINCT Age FROM Users;
```

</sql-interactive>

</frame-uca>

<frame-subsection>
    Tops et pagination
</frame-subsection>
<frame-subsubsection>
    Tops
</frame-subsubsection>

<frame-uca>

`LIMIT $N` : récupère les `$N` premières entrées.

<sql-interactive>
  <span onslide="0" slot="options" data-pagination="1">Ne récupérer que la première entrée</span>
  <span onslide="1" slot="options" data-pagination="2">Ne récupérer que les deux premières entrées</span>
  <span onslide="2" slot="options" data-orderby="ORDER BY Age" data-pagination="1">Ne récupérer que l'utilisateur le plus jeune</span>

```sql
SELECT * FROM Users $ORDERBY LIMIT $PAGINATION;
```

</sql-interactive>

<p onslide="2">

💡 Avec la clause `ORDER BY`, génère des tops, e.g. les X utilisateurs les plus jeunes.

</p>


</frame-uca>
<frame-subsubsection>
    Pagination
</frame-subsubsection>
<frame-uca>

***Problème*** :

- Récupérer et afficher milliers de lignes => coûteux.

***Solution*** :

- Découper la liste en plusieurs pages (e.g. 50 lignes/page).

***En SQL*** :

- `LIMIT 50` : 50 entrées par requêtes.
- `OFFSET $P*50` (`$P+1` = la page) récupérer à partir de la `$P*50`-ième entrée.

</frame-uca>
<frame-uca>

<center>
    <sql-dymtable id="pagination-table" table="Users"></sql-dymtable>
</center>

<sql-interactive id="pagination-sql">
  <span onslide="0" slot="options" data-pagination="1" data-p="0">Page 1 (1 entrée par page)</span>
  <span onslide="1" slot="options" data-pagination="1" data-p="1">Page 2 (1 entrée par page)</span>
  <span onslide="2" slot="options" data-pagination="1" data-p="2">Page 3 (1 entrée par page)</span>
  <span onslide="3" slot="options" data-pagination="2" data-p="0*2">Page 1 (2 entrée par page)</span>
  <span onslide="4" slot="options" data-pagination="2" data-p="1*2">Page 2 (2 entrée par page)</span>

```sql
SELECT * FROM Users LIMIT  $PAGINATION
                    OFFSET $P ;
```

</sql-interactive>

<script>
    async function fct(parent) {

        const table = await LISS.qs("#pagination-table", parent);
        const sql   = await LISS.qs("#pagination-sql"  , parent);

        sql.host.addEventListener("change", (ev) => {
            update(ev.detail.datas);
        });
        update( sql.lastDatas );

        function update(datas) {

            const ids = datas[0].map(r => r.ID);
            table.highlightRow( ({ID}) => ids.includes(+ID) );
  }
    }

    {
        const parent = document.currentScript.closest("frame-uca");
        (parent.scripts ??= []).push( fct );
    }
</script>
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

<span onslide="7"></span><!-- h4ck -->

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
      <pre style="margin:0"><code id="order_sql">SELECT <span class="notyet">DISTINCT</span> Date, Ref, Q as Nb
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

<frame-uca>

<div class="overlay">
  <div onslide="0" class="child1">
  1
  </div>
  <div onslide="1" class="child2">
  2<br/>3
  </div>
</div>

</frame-uca>

</html>