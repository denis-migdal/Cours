<!DOCTYPE html>
<html>
<head>
    <title>BDR CM4</title>
    <link rel="stylesheet" href="./index.css">
    <script src="./index.js" type="module" defer></script>
</head>
<body>
<main>
<frame-uca-title
    caption   = "R1-02 Bases de Données Relationnelles"
    subcaption= "CM4 : Fusions et jointures"
    author    = "Denis MIGDAL"
    mail      = "denis.migdal@uca.fr">
</frame-uca-title>

<frame-section>
  Opérations d'ensembles
</frame-section>

<frame-uca>

<div>
<b><i>Problème :</i></b> manipulations quasi-exclusives sur une année donnée => tables <sql-code>Ventes_<var>$YEAR</var></sql-code>.
<ul>
  <li>Comment requêter plusieurs années en même temps ?</li>
</ul>
</div>

<ul>
  <li>Opérations d'ensembles sur 2 requêtes <sql-code>SELECT</sql-code> (idéalement même colonnes) :
    <ul>
      <li><sql-code>UNION</sql-code>     : <b>concaténer</b> les lignes.</li>
      <li onslide="2-"><sql-code>INTERSECT</sql-code> : les lignes <b>communes</b> aux deux requêtes.</li>
      <li onslide="3-"><sql-code>EXCEPT</sql-code>    : les lignes de la première requête <b>absentes</b> de la seconde.</li>
      <li onslide="1-">💡 Par défaut, sans <sql-code>ALL</sql-code> n'inclue pas les lignes en doublons.</li>
    </ul>
  </li>
</ul>

<div class="flex">
  <sql-system>
    <sql-queries>
SELECT * FROM Produits WHERE Ref == 'Gomme'
$OP
SELECT NULL, Nom, Age FROM Users;
    </sql-queries>
    <sql-option onslide="0">
    {
      "OP": "UNION"
    }
    </sql-option>
    <sql-option onslide="1">
    {
      "OP": "UNION ALL"
    }
    </sql-option>
    <sql-option onslide="2">
    {
      "OP": "INTERSECT"
    }
    </sql-option>
    <sql-option onslide="3">
    {
      "OP": "EXCEPT"
    }
    </sql-option>
    <sql-output>
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
    </sql-output>
  </sql-system>
</div>

</frame-uca>
<frame-section>Sous requêtes</frame-section>
<frame-uca>

<ul>
  <li><b>Sous requête :</b> utiliser une requête <sql-code>SELECT</sql-code> comme valeur dans une autre requête.
    <ul>
      <li>⚠ La sous-requête doit retourner une liste (i.e. une seule colonne).</li>
    </ul>
  </li>
</ul>

<div class="flex">
  <sql-system>
    <sql-queries>
SELECT * FROM T1 WHERE ID $OP ( $SUBQUERY );
    </sql-queries>
    <sql-option onslide="0">
    {
      "OP": "IN",
      "SUBQUERY": "SELECT ID FROM T2"
    }
    </sql-option>
    <sql-option onslide="1">
    {
      "OP": ">",
      "SUBQUERY": "SELECT ID FROM T2"
    }
    </sql-option>
    <sql-option onslide="2">
    {
      "OP": ">=",
      "SUBQUERY": "SELECT MAX(ID) FROM T2"
    }
    </sql-option>
    <sql-output>
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
    </sql-output>
  </sql-system>
</div>

<div onslide="1-">

💡 Retourne vrai si comparaison vraie pour **au moins un** élément de la liste.

⚠ Certains SGBD requièrent d'ajouter <sql-code>ANY</sql-code> entre l'opérateur de comparaison et la liste.

</div>

</frame-uca>
<frame-subsection>Sous-requête corrélée</frame-subsection>
<frame-uca>

<ul>
  <li><b>Sous requête corrélée :</b> la sous-requête dépend de la requête principale.
    <ul>
      <li>💡 requête non-corrélée : sous-requête exécutée <b>une unique fois</b>.</li>
      <li>⚠ requête correlée : réexécutée <b>à chaque ligne</b> de la requête principale.</li>
      <ul>
        <li>⚠ Il faut les éviter autant que possible...</li>
        <li>⚠ Ne pas calculer toutes les lignes, s'arrêter le plus tôt possible.
          <ul>
            <li><sql-code>EXISTS</sql-code> à la place de <sql-code>IN</sql-code>.</li>
            <li><sql-code>ANY</sql-code>/<sql-code>SOME</sql-code> ou <sql-code>ALL</sql-code> à la place de certaines fonctions d'agrégations.</li>
          </ul>
        </li>
      </ul>
    </ul>
  </li>
</ul>

<div class="flex">
  <sql-system>
    <sql-queries>
SELECT * FROM T1 WHERE $COND (
  SELECT ID FROM T2 WHERE T2.ID = T1.ID
);
    </sql-queries>
    <sql-option onslide="0">
    {
      "COND": "EXISTS"
    }
    </sql-option>
    <sql-output>
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
    </sql-output>
  </sql-system>
</div>

</frame-uca>
<frame-section>Jointures</frame-section>
<frame-uca>

Pour rappel, une table (e.g. `Vente`) peut en référencer une autre (e.g. `Vendeur`). Il est alors possible d'obtenir e.g. :
- la liste des vendeurs ayant au moins 10 ventes ?
- la liste des ventes des vendeurs embauchés il y a moins de 5 ans.

Pour cela il est possible d'utiliser des requêtes corrélées, mais la syntaxe serait lourde et la requête peu performante. Dans ce cas de figure on utilise ce qu'on appelle des **jointures**, qui permettent de fusionner des entrées de tables différentes au sein d'une même ligne.

</frame-uca>
<frame-subsection>Produit cartésien</frame-subsection>
<frame-uca>

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


</frame-uca>
<frame-subsection>Le principe des jointures</frame-subsection>
<frame-uca>

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

</frame-uca>
<frame-subsection>Les types de jointures</frame-subsection>
<frame-uca>

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

</frame-uca>
<frame-subsection>Préciser la condition de jointure</frame-subsection>
<frame-uca>

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

</frame-uca>

</html>