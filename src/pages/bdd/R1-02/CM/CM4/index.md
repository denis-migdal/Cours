<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>BDR1 (CM4)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/index.css"  rel="stylesheet">
        <script  src="/skeleton/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# Fusions et jointures

## Opérations d'ensembles

Il est possible d'opérer des opérations sur deux ensembles d'entrées, à conditions qu'elles aient le même nombre de colonnes (et idéalement la même structure) :

- <script type="c-sql">UNION <h>[ALL]</h></script>: concaténer les lignes [avec les doublons].
- <script type="c-sql">INTERSECT</script>  : les lignes communes aux deux requêtes.
- <script type="c-sql">EXCEPT</script>     : les lignes de la première requête absentes de la seconde.


Les opérations d'ensembles sont en pratique relativement rares. Elles peuvent toutefois être pertinentes quand une table a été divisée en plusieurs tables pour des raisons de performances. Par exemple, une table <script type="c-sql">Vente</script> contenant de très nombreuses entrées, et dont la manipulation se fait quasi-exclusivement en précisant une année de vente, pourrait être découpée en vue d'obtenir une table par année.

Ces opérations s'utilisent sous la forme suivante :

<script type="c-sql">
SELECT <h>$QUERY_1</h>
<h>UNION [ALL]|INTERSECT|EXCEPT</h>
SELECT <h>$QUERY_2</h>
</script>

<sql-interactive>
  <span slot="options" data-op='UNION'></span>
  <span slot="options" data-op='UNION ALL'></span>
  <span slot="options" data-op='INTERSECT'></span>
  <span slot="options" data-op='EXCEPT'></span>

<script type="c-sql">
SELECT * FROM Produits
<h>$OP</h>
SELECT Nom, Prenom, Age FROM Users;
</script>

</sql-interactive>

## Sous requêtes

Vous pouvez utiliser le résultat d'une requête <script type="c-sql">SELECT</script> (alors appelée "sous-requête") dans une autre requête. En effet, un ensemble d'entrées placées entre parenthèses peuvent remplacer :
- une **table** dans une clause <script type="c-sql">FROM</script> ;
- une **liste** (si une seule colonne) ;
- un **scalaire** (si une seule ligne et colonne).

Par exemple, pour utiliser une sous-requête dans une condition <script type="c-sql">WHERE</script> :

<sql-interactive>
  <span slot="options" data-cond='>' data-subquery='SELECT AVG(ID) FROM T2'>Sous-requête (op. de comparaison sur une valeur)</span>
  <span slot="options" data-cond='>' data-subquery='SELECT ID FROM T2'>Sous-requête (op. de comparaison sur une liste)</span>
  <span slot="options" data-cond='IN' data-subquery='SELECT ID FROM T2'>Sous-requête (IN)</span>

<script type="c-sql">
SELECT * FROM T1 WHERE ID <h>$COND</h> ( <h>$SUBQUERY</h> );
</script>

</sql-interactive>

💡 Les opérateurs de comparaisons utilisés sur une liste retourneront vrai si la condition est vraie pour au moins un élément de la liste.

⚠ Certains SGBD requièrent d'ajouter <script type="c-sql">ANY</script> entre l'opérateur de comparaison et la liste.

### Sous-requête corrélée

Lorsque la sous-requête dépend d'une colonne de la requête principale, elle est dite "corrélée", et sera réexécutée à chaque ligne de la requête principale. Dès lors, pour des raisons de performances on utilisera les opérateurs :

- <script type="c-sql">EXISTS</script> à la place de <script type="c-sql">IN</script>.
- <script type="c-sql">ANY</script>/<script type="c-sql">SOME</script> ou <script type="c-sql">ALL</script> au lieu d'utiliser certaines fonctions d'agrégations.

<sql-interactive>
  <span slot="options" data-cond='EXISTS'>Sous-requête corrélée</span>

<script type="c-sql">
SELECT * FROM T1 WHERE <h>$COND</h> (
  SELECT ID FROM T2 WHERE T2.ID = T1.ID
);
</script>

</sql-interactive>

En effet, une sous-requête non-corrélée n'étant exécutée qu'une seule fois, il est intéressant de l'évaluer entièrement en amont (i.e. récupérer toutes les lignes), pour ensuite utiliser son résultat, à chaque entrée de la requête principale, lors de l'évaluation la clause <script type="c-sql">WHERE</script>, sans avoir à le recalculer à chaque fois.

En revanche, quand une sous-requête est corrélée, il faudra nécessairement évaluer la sous-requête à chaque entrée de la requête principale. Cependant il n'est alors pas utile de calculer l'ensemble des lignes de la sous-requête, car on peut s'arrêter à :

- la première ligne existante pour <script type="c-sql">EXISTS</script>.
- la première ligne satisfaisant la condition pour <script type="c-sql">ANY</script>.
- la première ligne ne satisfaisant pas la condition pour <script type="c-sql">ALL</script>.

⚠ Il va de soit qu'il faut éviter les sous-requêtes corrélées autant que possible...

⚠ SQLite ne supporte que <script type="c-sql">IN</script>, il ne supporte ni <script type="c-sql">ANY</script>, ni <script type="c-sql">ALL</script>.

## Jointures

Pour rappel, une table (e.g. <script type="c-sql">Vente</script>) peut en référencer une autre (e.g. <script type="c-sql">Vendeur</script>). Il est alors possible d'obtenir e.g. :
- la liste des vendeurs ayant au moins 10 ventes ?
- la liste des ventes des vendeurs embauchés il y a moins de 5 ans.

Pour cela il est possible d'utiliser des requêtes corrélées, mais la syntaxe serait lourde et la requête peu performante. Dans ce cas de figure on utilise ce qu'on appelle des **jointures**, qui permettent de fusionner des entrées de tables différentes au sein d'une même ligne.

### Le produit cartésien

Une méthode naïve (**et à ne jamais utiliser**) d'effectuer une jointure est d'utiliser un produit cartésien :

<script type="c-sql">
SELECT * FROM <h>$T1</h>, <h>$T2</h> WHERE <h>$T1</h>.<h>$KEY</h> == <h>$T2</h>.<h>$KEY</h>;
</script>

Pour exécuter cette requête, le SGDB va construire une table intermédiaire constituée de toutes les combinaisons de lignes possibles entre <script type="c-sql"><h>$T1</h></script> et <script type="c-sql"><h>$T2</h></script>, qu'elle va ensuite parcourir pour filtrer les lignes via la clause <script type="c-sql">WHERE</script>.

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

Ainsi, le produit cartésien de deux tables de 3 entrées produira une table intermédiaire de 9 lignes, dont la majorité des lignes seront ensuite rejetées par la clause <script type="c-sql">WHERE</script>. Même sur de petites tables, la construction de la table intermédiaire explose très vite les capacités du SGDB :

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

La bonne manière de procéder est d'utiliser la clause <script type="c-sql">JOIN</script> qui s'utilise usuellement de la sorte :

<script type="c-sql">
SELECT * FROM <h>$T1</h> NATURAL INNER JOIN <h>$T2</h>;
</script>

Pour chaque entrée de <script type="c-sql"><h>$T1</h></script>, le SGBD va rechercher les entrées de <script type="c-sql"><h>$T2</h></script> dont les valeurs des colonnes communes sont identiques à celles de l'entrée de <script type="c-sql"><h>$T1</h></script>. Ainsi, contrairement au produit cartésien, le SGBD n'a pas besoin de construire une table intermédiaire colossale, réduisant très fortement la consommation de mémoire vive.


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

💡 Si les colonnes en communs constituent un index (<script type="c-sql">UNIQUE</script> ou clef primaire), la recherche des entrées de <script type="c-sql"><h>$T2</h></script> est quasi instantanée.

⚠ Il est ainsi **plus que fortement recommandé** d'effectuer des jointures sur des clés primaires.

💡 Vous pouvez ajouter une clause <script type="c-sql">WHERE</script> à vôtre requête SQL. En théorie la clause <script type="c-sql">WHERE</script> est appliquée aux entrées **après** jointures. Cependant, les SGBD sont capables d'optimiser la requête en préfiltrant, lorsque possible, les tables **avant** jointures.

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

- <script type="c-sql">INNER</script> : par défaut.
- <script type="c-sql">LEFT</script>  : comme <script type="c-sql">INNER</script>, mais ajoute au résultat les entrées de <script type="c-sql"><h>$T1</h></script> dont aucune entrée de <script type="c-sql"><h>$T2</h></script> ne correspond.
- <script type="c-sql">FULL</script> (plus rare) : comme <script type="c-sql">LEFT</script>, mais ajoute au résultat les entrées de <script type="c-sql"><h>$T2</h></script> dont aucune entrée de <script type="c-sql"><h>$T1</h></script> ne correspond.<br/>
  💡 Il est équivalant à l'union de <script type="c-sql"><h>$T1</h> LEFT JOIN <h>$T2</h></script> et <script type="c-sql"><h>$T2</h> LEFT JOIN <h>$T1</h></script>.

<sql-interactive id="join2_sql">
  <span slot="options" data-jointype='INNER'></span>
  <span slot="options" data-jointype='LEFT' ></span>
  <span slot="options" data-jointype='RIGHT'></span>
  <span slot="options" data-jointype='FULL' ></span>
  <sql-dymtable slot="post" id="join2_T1_T2W" cols="T1.ID as 'T1.ID', T1.T1 as 'T1.T1', T2.ID as 'T2.ID', T2.T2 as 'T2.T2'" table="T1 FULL JOIN T2 USING(ID)" header="T1 JOIN T2"></sql-dymtable>

<script type="c-sql">
SELECT * FROM T1 NATURAL <h>$JOINTYPE</h> JOIN T2;
</script>

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

- <script type="c-sql">RIGHT</script> : <script type="c-sql"><h>$T1</h> RIGHT JOIN <h>$T2</h></script> est équivalant à <script type="c-sql"><h>$T2</h> LEFT JOIN <h>$T1</h></script><br/>
  ⚠  Pour des raisons de lisibilité, autant que possible, utilisez <script type="c-sql">LEFT</script> à la place.
- <script type="c-sql">CROSS</script> : produit cartésien (**à éviter**).

💡 Vous pourrez aussi trouver <script type="c-sql">LEFT/RIGHT/FULL OUTER JOIN</script> dans certaines requêtes SQL. Ils sont en réalité équivalents à <script type="c-sql">LEFT/RIGHT/FULL JOIN</script>.

### Préciser la condition de jointure

Il se peut que vous souhaitiez expliciter les colonnes sur lesquelles effectuer la jointure pour :

- exclure une colonne de la jointure, avec :<br/>
  <script type="c-sql">USING(<h>$COLS[,...]</h>)</script> indiquant les colonnes à utiliser.
- utiliser des colonnes de noms différents, avec :<br/>
  <script type="c-sql">ON T1.<h>$COL1</h> == T2.<h>$COL2</h></script> indiquant la condition de jointure. 

⚠ Dans les deux cas, il vous faudra retirer le mot clef <script type="c-sql">NATURAL</script>.

💡 Il est recommandé d'utiliser <script type="c-sql">USING</script> au lieu de jointures naturelles (i.e. avec <script type="c-sql">NATURAL</script>) afin d'éviter des jointures accidentelles.

<sql-interactive>
  <span slot="options" data-jointype='NATURAL'>Jointure naturelle (à éviter)</span>
  <span slot="options" data-joincond='USING(ID)'>Jointure explicite (noms de colonnes identiques)</span>
  <span slot="options" data-joincond='ON T1.T1 == T2.T2'>Jointure explicite (noms de colonnes différentes)</span>

<script type="c-sql">
SELECT * FROM T1 <h>$JOINTYPE</h> INNER JOIN T2 <h>$JOINCOND</h>;
</script>

</sql-interactive>

⚠ Si deux colonnes ont le même nom, seule la première sera affichée. Si vous souhaitez afficher la seconde, il est alors nécessaire de la renommer :

<sql-interactive>
  <span slot="options" data-cols='*'>Sans renommer les colonnes de même noms</span>
  <span slot="options" data-cols='*, T2.ID as ID2'>En renommant les colonnes de même noms</span>

<script type="c-sql">
SELECT <h>$COLS</h> FROM T1 INNER JOIN T2 USING(ID);
</script>

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