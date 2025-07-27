<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>BDR1 (CM4)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/slides/index.css"  rel="stylesheet">
        <script  src="/skeleton/slides/index.js"  type="module"     blocking="render" async></script>
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
  <li>Opérations d'ensembles sur ensemble d'entrées (idéalement même colonnes) :
    <ul>
      <li><sql-code>UNION <var onslide="1-">[ALL]</var></sql-code> : <b>concaténer</b> les lignes <span onslide="1-">[avec doublons]</span>.</li>
      <li onslide="2-"><sql-code>INTERSECT</sql-code> : les lignes <b>communes</b> aux deux requêtes.</li>
      <li onslide="3-"><sql-code>EXCEPT</sql-code>    : les lignes de la première requête <b>absentes</b> de la seconde.</li>
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
  <li><b>sous requête :</b> utiliser une requête <sql-code>SELECT</sql-code> dans une autre requête.
  <li>💡 Un ensemble d'entrées (placées entre parenthèses) peuvent remplacer :
  <ul>
    <li>une <b>table</b> dans une clause <sql-code>FROM</sql-code> ;</li>
    <li>une <b>liste</b> (si une seule colonne) ;</li>
    <li>un <b>scalaire</b> (si une seule ligne et colonne).</li>
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

<div>

***Problème :*** Table <sql-code>Vente</sql-code> référence table <sql-code>Vendeur</sql-code>.

- comment obtenir :
  - la liste des vendeurs ayant au moins 10 ventes.
  - la liste des ventes des vendeurs embauchés il y a moins de 5 ans.
- requêtes corrélées :
  - syntaxe lourde ;
  - peu performant.
</div>


***Solution :*** les **jointures** ≈ fusionne des entrées de différentes tables.

</frame-uca>
<frame-subsection>Produit cartésien</frame-subsection>
<frame-uca>

<ul>
  <li><b>Produit cartésien :</b> table intermédiaire, combine toutes les entrées de <sql-code><var>$T1</var></sql-code> et <sql-code><var>$T2</var></sql-code>.
    <ul>
      <li><sql-code>SELECT * FROM <var>$T1</var>, <var>$T2</var> WHERE <var>$COND</var>;</sql-code> <i>(e.g. <sql-code>WHERE <var>$T1.ID == $T2.ID</var></sql-code>)</i></li>
      <li><sql-code>WHERE</sql-code> sur table intermédiaire ⇒ majorité des entrées intermédiaires <b>inutiles</b> !</li>
    </ul>
  </li>
</ul>

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

  .scale {
    overflow: hidden;
    flex-grow: 1;

    & .table_flex {
      transform-origin: top left;
      scale: calc( 2/3 );
    }
  }

  .table_flex {
    display: flex;
    align-items: top;
    gap: 10px;
  }
</style>


<div class="scale">
<div class='table_flex'>
  <span onslide="31"></span><!-- h4ck -->
  <sql-dymtable id="cart_T1" table="T1" header="T1"></sql-dymtable>
    <span><strong>x</strong></span>
  <sql-dymtable id="cart_T2" table="T2" header="T2"></sql-dymtable>
    <span><strong>=</strong></span>
  <sql-dymtable id="cart_T1_T2" cols="T1.ID as 'T1.ID', T1.T1 as 'T1.T1', T2.ID as 'T2.ID', T2.T2 as 'T2.T2'" table="T1, T2" header="T1xT2"></sql-dymtable>
    <span><strong>-- WHERE T1.ID == T2.ID --></strong></span>
  <sql-dymtable id="cart_T1_T2W" cols="T1.ID as 'T1.ID', T1.T1 as 'T1.T1', T2.ID as 'T2.ID', T2.T2 as 'T2.T2'" table="T1, T2" header="T1xT2 WHERE T1.ID == T2.ID"></sql-dymtable>
</div>
</div>

<script>
    async function fct(parent) {

        const T1 = await LISS.qs("#cart_T1", parent);
        const T2 = await LISS.qs("#cart_T2", parent);

        const T1_T2  = await LISS.qs("#cart_T1_T2", parent);
        const T1_T2W = await LISS.qs("#cart_T1_T2W", parent);

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
            return;

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

        //doStep(0);
        doStep(+parent.getAttribute("slide") + 1 );
    }

    {
        const parent = document.currentScript.closest("frame-uca");
        (parent.scripts ??= []).push( fct );
    }
</script>

</frame-uca>
<frame-uca>

<ul>
  <li>⚠ Même sur de petites tables, la table intermédiaire explose très vite :</li>
</ul>

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

<ul>
  <li>⚠ 1 milliard de lignes ≈ plusieurs Go, et 10^18 ≈ plusieurs Po !!!</li>
  <li>⚠ On n'utilise <b>JAMAIS</b> les produits cartésien en SQL ! <b>JA-MAIS !</b></li>
</ul>

</frame-uca>
<frame-subsection>Le principe des jointures</frame-subsection>
<frame-uca>

<ul>
  <li><b>Jointure :</b> construit la table intermédiaire plus intelligemment :
    <ul>
      <li><sql-code>SELECT * FROM <var>$T1</var> NATURAL JOIN <var>$T2</var>;</sql-code></li>
      <li>Pour chaque entrée de <sql-code><var>$T2</var></sql-code> (FK), recherche l'entrée de <sql-code><var>$T1</var></sql-code> (PK) correspondant.
      <ul>
      <li>bien plus rapide et moins coûteux en mémoire.</li>
      <li>⚠ basé sur les colonnes de noms identiques entre <sql-code><var>$T1</var></sql-code> et <sql-code><var>$T2</var></sql-code></li>
      </ul></li>
    </ul>
  </li>
</ul>

<div class="scale">
<div class='table_flex'>
  <span onslide="13"></span><!-- h4ck -->
  <sql-dymtable id="join_T1" table="T1" header="T1"></sql-dymtable>
    <span><strong>JOIN</strong></span>
  <sql-dymtable id="join_T2" table="T2" header="T2"></sql-dymtable>
    <span><strong>=</strong></span>
  <sql-dymtable id="join_T1_T2W" cols="T1.ID as 'T1.ID', T1.T1 as 'T1.T1', T2.ID as 'T2.ID', T2.T2 as 'T2.T2'" table="T1 NATURAL JOIN T2" header="T1 NATURAL JOIN T2"></sql-dymtable>
</div>
</div>


<script>

  async function fct(parent) {

  const T1 = await LISS.qs("#join_T1", parent);
  const T2 = await LISS.qs("#join_T2", parent);

  const T1_T2W = await LISS.qs("#join_T1_T2W", parent);

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

    if( T2_rownum !== undefined && T2_rownum >= T2.nbRows)
      return;

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

        //doStep(0);
        doStep(+parent.getAttribute("slide") + 1 );
    }

    {
        const parent = document.currentScript.closest("frame-uca");
        (parent.scripts ??= []).push( fct );
    }
</script>

<ul>
<li>
💡 Recherche des entrées de <sql-code><var>$T1</var></sql-code> : si index (<sql-code>UNIQUE</sql-code> ou PK) ⇒ <b>quasi instantané</b>.
<ul><li>
⚠ <b>Fortement recommandé</b> d'effectuer des jointures sur des index.
</li></ul>
</li>
<li>⚠ <sql-code>WHERE</sql-code> exécuté <b>après</b> jointure.<ul><li>
💡  SGBD peuvent optimiser en préfiltrant, lorsque possible, <b>avant</b> jointures.
</li></ul></li>
</ul>

</frame-uca>
<frame-subsection>Les types de jointures</frame-subsection>
<frame-uca>

<div>
Il existe 3 types de jointures fréquemment utilisées :

<ul>
  <li><sql-code>INNER</sql-code> : <sql-code><var>$T1</var>.ID == <var>$T2</var>.ID</sql-code>, par défaut.</li>
  <li onslide="1-"><sql-code>LEFT </sql-code>  : <sql-code>INNER</sql-code> + entrées de <sql-code><var>$T1</var></sql-code> dont aucune entrée de <sql-code><var>$T2</var></sql-code> ne correspond.</li>
  <li onslide="2-"><sql-code>FULL </sql-code> : <sql-code>LEFT </sql-code> + entrées de <sql-code><var>$T2</var></sql-code> dont aucune entrée de <sql-code><var>$T1</var></sql-code> ne correspond.</li>
</ul>

</div>


<sql-system>
  <sql-queries>
SELECT * FROM T1 NATURAL FULL JOIN T2;
SELECT * FROM T1 NATURAL $JOIN JOIN T2;
  </sql-queries>
  <sql-option onslide="0">
  {
    "JOIN": "INNER"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "JOIN": "LEFT"
  }
  </sql-option>
  <sql-option onslide="2-">
  {
    "JOIN": "FULL"
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

<div onslide="3">

⚠ Il existe 2 autres types de jointures, **à éviter** :

- <sql-code>RIGHT</sql-code> : <sql-code><var>$T1</var> RIGHT JOIN <var>$T2</var></sql-code> ⇔ <sql-code><var>$T2</var> LEFT JOIN <var>$T1</var></sql-code> (pour raison de ***lisibilité***, préférer <sql-code>LEFT</sql-code>)
- <sql-code>CROSS</sql-code> : produit cartésien (**à éviter**).

</div>

</frame-uca>
<frame-subsection>Préciser la condition de jointure</frame-subsection>
<frame-uca>

**Problème :** <sql-code><var>$T1</var></sql-code> et <sql-code><var>$T2</var></sql-code> ont des colonnes identiques, autres que celles de jointures.

<div>

**Solution :**
<ul>
  <li>Éviter les jointures <sql-code>NATURAL</sql-code>, et expliciter les colonnes de jointure :
  <ul>
  <li><sql-code><var>$T1</var> JOIN <var>$T2</var> USING(<var>$COLS[,...]</var>)</sql-code> ;</li></ul></li>
  <li>Renommer les colonnes homonymes :
  <ul><li><sql-code>SELECT <var>$T2.$COL as $NAME</var></sql-code> ;</li></ul></li>
</ul>

</div>

<sql-system>
  <sql-queries>
SELECT T1.ID as 'T1.ID', T2.ID as 'T2.ID', *
  FROM T1 FULL JOIN T2 USING($COLS);
  </sql-queries>
  <sql-option onslide="0">
  {
    "COLS": "ID"
  }
  </sql-option>
  <sql-output class="flex">
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" q="1"></div>
    </div>
  </sql-output>
</sql-system>

</frame-uca>
<frame-uca>

<div>

**Problème :** les colonnes de jointure ont des noms différents dans <sql-code><var>$T1</var></sql-code> et <sql-code><var>$T2</var></sql-code>.

<br/>

**Solution :** Préciser la condition de jointure :
<ul>
  <li><sql-code><var>$T1</var> JOIN <var>$T2</var> ON <var>$COND</var></sql-code> ;</li>
</ul>

</div>

<sql-system>
  <sql-queries>
SELECT * FROM T1 INNER JOIN T2 ON $COND;
  </sql-queries>
  <sql-option onslide="0">
  {
    "COND": "T1.T1 == T2.T2"
  }
  </sql-option>
  <sql-output class="flex">
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" q="1"></div>
    </div>
  </sql-output>
</sql-system>

</frame-uca>

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

</html>