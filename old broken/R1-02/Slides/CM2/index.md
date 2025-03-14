<!DOCTYPE html>
<html>
<head>
    <title>BDR CM2</title>
    <link rel="stylesheet" href="./index.css">
    <script src="./index.js" type="module" defer></script>
</head>
<body>
<header></header>
<main>
<frame-uca-title
    caption   = "R1-02 Bases de Données Relationnelles"
    subcaption= "CM2 : Manipuler des entrées"
    author    = "Denis MIGDAL"
    mail      = "denis.migdal@uca.fr">
</frame-uca-title>

<frame-section>
  Manipuler des entrées
</frame-section>

<frame-subsection>
  Modifier le contenu d'une table
</frame-subsection>

<frame-uca>

<div>

Rappel : plusieurs types de **commandes SQL** pour différent types d'actions :

- <sql-code>SELECT</sql-code> : **lire des** données ;
- <sql-code>UPDATE</sql-code> : **modifier** des entrées ;
- <sql-code>INSERT</sql-code> : **insérer** des entrées ;
- <sql-code>DELETE</sql-code> : **supprimer** des entrées.

</div>

Nous allons désormais nous intéresser aux 3 dernières.

</frame-uca>
<frame-subsection>Créer des entrées</frame-subsection>
<frame-subsection>VALUES</frame-subsection>
<frame-uca>

<div>
  <sql-code>VALUES <var>($VALS[,...])<span onslide="1-">[,...]</span></var>;</sql-code>
  <ul>
    <li onslide="0-"><sql-code><var>($VALS[,...])</var></sql-code> : une entrée (valeurs séparées par une virgule).</li>
    <li><span onslide="1">💡 pour représenter plusieurs entrées, les séparer par une virgule.</span></li>
    </li>
  </ul>
</div>

<sql-system>
  <sql-queries>
VALUES $VALUES;
  </sql-queries>
  <sql-option onslide="0">
  {
    "VALUES": "(NULL, 'Doe',    'Jon', 32)"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "VALUES": "(NULL, 'Doe',    'Jon', 32),\n       (NULL, 'Sawyer', 'Tom', 15)"
  }
  </sql-option>
  <sql-output>
    <div class="flex">
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
    </div>
  </sql-output>
</sql-system>

</frame-uca>
<frame-subsection>Insérer des entrées</frame-subsection>
<frame-uca>

<div>
  <sql-code>INSERT INTO <var>$TABLE</var> <var onslide="2">($COLS[,...])</var> <var>$VALUES_OR_SELECT</var>;</sql-code>
  <ul>
    <li onslide="2-"><sql-code><var>($COLS[,...])</var></sql-code> : les colonnes à remplir (les autres vaudront <code>NULL</code>).</li>
  </ul>
  </ul>
</div>

<sql-system>
  <sql-queries>
SELECT * FROM Users;
INSERT INTO Users $COLS VALUES
$VALUES;
SELECT * FROM Users;
  </sql-queries>
  <sql-option onslide="0">
  {
    "VALUES": "(NULL, 'Doe',    'Jon', 32)"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "VALUES": "(NULL, 'Doe',    'Jon', 32),\n(NULL, 'Sawyer', 'Tom', 15)"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "COLS"  : "\n(Prenom, Nom)\n",
    "VALUES": "('Doe', 'Jon')"
  }
  </sql-option>
  <sql-output>
    <div class="flex">
      <div>
        <div class="sql_query"  q="2"></div>
        <div class="sql_result" q="2"></div>
      </div>
    </div>
    <div class="flex">
      <div>
        <center><strong>Avant :</strong></center>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
      <div>
        <center><strong>Après :</strong></center>
        <div class="sql_query"  q="3"></div>
        <div class="sql_result" q="3"></div>
      </div>
    </div>
  </sql-output>
</sql-system>
</frame-uca>
<frame-subsection>Modifier des entrées</frame-subsection>
<frame-uca>

<div>
  <sql-code>UPDATE <var>$TABLE</var> SET <var>$COL=$VAL<span onslide="2-">[,...]</span></var> WHERE <var>$COND</var>;</sql-code>
  <ul>
    <li><sql-code><var>$COND</var></sql-code> : les entrées à modifier.</li>
    <li><sql-code><var>$COL=$VAL</var></sql-code> : la colonne <sql-code><var>$COL</var></sql-code> prend la valeur <sql-code><var>$VAL</var></sql-code>.<br/>
    <span onslide="2-">💡 pour modifier plusieurs colonnes, les séparer par une virgule.</span>
    </li>
  </ul>
</div>

<sql-system>
  <sql-queries>
SELECT * FROM Users;
UPDATE Users
   SET $VALS
 WHERE $COND;
SELECT * FROM Users;
  </sql-queries>
  <sql-option onslide="0">
  {
    "VALS": "Nom = 'Durand'",
    "COND": "Nom == 'Durant'"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "VALS": "Age = 23",
    "COND": "Age == 43"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "VALS": "Nom = 'Durand', Prenom='Théo'",
    "COND": "Nom == 'Durant'"
  }
  </sql-option>
  <sql-option onslide="3">
  {
    "VALS": "Age = Age + 10",
    "COND": "Nom LIKE 'D%'"
  }
  </sql-option>
  <sql-output>
    <div class="flex">
      <div>
        <div class="sql_query"  q="2"></div>
        <div class="sql_result" q="2"></div>
      </div>
    </div>
    <div class="flex">
      <div>
        <center><strong>Avant :</strong></center>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
      <div>
        <center><strong>Après :</strong></center>
        <div class="sql_query"  q="3"></div>
        <div class="sql_result" q="3"></div>
      </div>
    </div>
  </sql-output>
</sql-system>

<div class="overlay">
  <div onslide="3">💡 Vous pouvez calculer les nouvelles valeurs à partir des valeurs initiales de l'entrée.</div>
  <div onslide="0">⚠ La table peut contenir des homonymes. Utiliser les identifiants pour <sql-code><var>$COND</var></sql-code>.</div>
</div>

</frame-uca>
<frame-subsection>Supprimer des entrées</frame-subsection>
<frame-uca>

<div>
  <sql-code>DELETE FROM <var>$TABLE</var> WHERE <var>$COND</var>;</sql-code>
  <ul>
    <li><sql-code><var>$COND</var></sql-code> : les entrées à supprimer.</li>
  </ul>
</div>

<sql-system>
  <sql-queries>
SELECT * FROM Users;
DELETE FROM Users
 WHERE $COND;
SELECT * FROM Users;
  </sql-queries>
  <sql-option onslide="0">
  {
    "COND": "Nom == 'Durant'"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "COND": "ID == 2"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "COND": "Age > 18"
  }
  </sql-option>
  <sql-output>
    <div class="flex">
      <div>
        <div class="sql_query"  q="2"></div>
        <div class="sql_result" q="2"></div>
      </div>
    </div>
    <div class="flex">
      <div>
        <center><strong>Avant :</strong></center>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
      <div>
        <center><strong>Après :</strong></center>
        <div class="sql_query"  q="3"></div>
        <div class="sql_result" q="3"></div>
      </div>
    </div>
  </sql-output>
</sql-system>

<div class="overlay">
  <div onslide="0-1">⚠ La table peut contenir des homonymes. Utiliser les identifiants pour <sql-code><var>$COND</var></sql-code>.</div>
</div>
</frame-uca>
<frame-section>Prétraitements</frame-section>
<frame-uca>

<div>
  <b>Problème :</b>
  <ul>
    <li>Plusieurs manières de réprésenter une même information :
      <ul class="flex">
        <li><code>'Nom'</code>, <code>'NOM'</code>, <code>'nom'</code></li>
        <li><code>1</code>, <code>'1'</code>, <code>'un'</code>.</li>
      </ul>
    </li>
    <li>Mais... valeurs non égales (e.g. pour comparaisons).</li>
  </ul>
</div>

<div>
  <b>Solution :</b>
  <ul>
    <li>Pré-traiter les données pour garantir :</li>
    <ul>
      <li>l'<b>uniformité des données</b> manipulées <i>(e.g. dans conditions)</i>.</li>
      <li>la <b>cohérence et consistance</b> de la base <i>(e.g. lors ajouts/modifications)</i>.</li>
    </ul>
  </ul>
</div>

</frame-uca>
<frame-uca>

<div>
💡 Pour tester les pré-traitements :
<ul>
  <li><sql-code>SELECT</sql-code> sans <sql-code>FROM</sql-code> (ou <sql-code>FROM DUAL</sql-code> pour certains SGBD).</li>
  <li><sql-code>SELECT</sql-code> avec <sql-code>FROM (VALUES <var>$LINES</var>)</sql-code>.</li>
</ul>
</div>

<div class="flex">
  <sql-system>
    <sql-queries>
SELECT $COL1,
       $COL2
       $FROM;
    </sql-queries>
    <sql-option onslide="0">
    {
      "COL1": "'nom'",
      "COL2": "UPPER('nom')"
    }
    </sql-option>
    <sql-option onslide="1">
    {
      "COL1": "'nom'        as BEFORE",
      "COL2": "UPPER('nom') as AFTER"
    }
    </sql-option>
    <sql-option onslide="2-">
    {
      "COL1": "column1        as BEFORE",
      "COL2": "UPPER(column1) as AFTER",
      "FROM": "FROM (VALUES ('toto'), ('titi'))"
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


<div onslide="2">
  ⚠ Ne pas abuser des pré-traitements SQL sur les valeurs retournées par <sql-code>SELECT</sql-code>.<br/>
  &nbsp;&nbsp;&nbsp; Si possible, <b>mise en forme en dehors de la requête SQL</b>.
  <ul>
    <li>Données structurées plus faciles à manipuler <i>(e.g. <sql-code>'Prenom'</sql-code>, <sql-code>'NOM'</sql-code>)</i> :
      <ul class="flex">
        <li><sql-code>'Prenom NOM'</sql-code>/<sql-code>'NOM, Prenom'</sql-code>/<sql-code>'NOM Prenom'</sql-code></li>
        <li><sql-code>'Prenom Nom Nom'</sql-code>/<sql-code>'Prenom Prenom Nom'</sql-code></li>
      </ul>
    </li>
    <li>Évite de ré-écrire plusieurs fois la "même" requête.</li>
    <li>SGBD ont un <b>système de cache</b> pour les requêtes fréquemment exécutées.</li>
  </ul>
</div>

</frame-uca>
<frame-subsection>Sur les nombres</frame-subsection>
<frame-uca>

<div>
  <ul>
    <li><b><i>
      <span class="overlay">
        <span onslide="0">Opérations mathématiques :</span>
        <span onslide="1">Arrondis :</span>
        <span onslide="2-">Valeur absolue :</span>
        <!-- <span onslide="3">Entier aléatoire :</span>
        <span onslide="4-">Entier aléatoire (dans [[0;10[[) :</span>-->
      </span>
    </i></b></li>
  </ul>
  <br/>
  <div class="flex">
    <sql-system>
      <sql-queries>
  SELECT $COLS;
      </sql-queries>
      <sql-option onslide="0">
      {
        "COLS": "1+1, 4%3, 4/3, 4/3.0"
      }
      </sql-option>
      <sql-option onslide="1">
      {
        "COLS": "FLOOR(1.2), ROUND(1.2), CEIL(1.2)"
      }
      </sql-option>
      <sql-option onslide="2-">
      {
        "COLS": "ABS(1), ABS(-1)"
      }
      </sql-option>
      <!--<sql-option onslide="3">
      {
        "COLS": "RANDOM()"
      }
      </sql-option>
      <sql-option onslide="4-">
      {
        "COLS": "ABS(RANDOM()) % 10"
      }
      </sql-option>-->
      <sql-output>
        <div>
          <div class="sql_query"  q="1"></div>
          <div class="sql_result" q="1"></div>
        </div>
      </sql-output>
    </sql-system>
  </div>
</div>

<ul class="overlay">
  <li onslide="0">⚠ <sql-code>/</sql-code> sur entiers = division entière.</li>
  <li onslide="1"><sql-code>FLOOR</sql-code>/<sql-code>ROUND</sql-code>/<sql-code>CEIL</sql-code><sql-code>(<var>$N[, $D]</var>)</sql-code>: arrondir <sql-code><var>$N</var></sql-code> à <sql-code><var>$D</var></sql-code> décimales.</li>
  <li onslide="3">💡 Beaucoup d'autres fonctions existent, e.g. trigonométrie, logs, etc.</li>
  <!--<li onslide="4-">💡 <sql-code>RAND()</sql-code> pour générer un réel dans <sql-code>[0,1[</sql-code> <i>(pas dans SQLite)</i>.</li>-->
</ul>

</frame-uca>
<frame-subsection>Sur les dates</frame-subsection>
<frame-uca>

<div>
  Les manipulations de dates complexes sont à effectuer :
  <ul class="flex-2">
    <li>durée des mois variable ;</li>
    <li>années bissextiles ;</li>
    <li>fuseaux horaires ;</li>
    <li>heures d'été et d'hiver.</li>
  </ul>
  💡 Pour cela, les SGBD fournissent des fonctions ⚠ pas normalisées (dépend du SGBD).
</div>

<div>
  <ul>
    <li><b><i>
      <span class="overlay">
        <span onslide="0">Date et/ou heure actuelle :</span>
        <span onslide="1">Formatter une date :</span>
        <span onslide="2">Calculer la durée entre deux dates :</span>
        <span onslide="3">Timestamp actuel :</span>
        <span onslide="4">Convertir un timestamp en date :</span>
      </span>
    </i></b></li>
  </ul>
  <br/>
  <div class="flex">
    <sql-system>
      <sql-queries>
  SELECT $COLS;
      </sql-queries>
      <sql-option onslide="0">
      {
        "COLS": "DATE(), TIME(), DATETIME()"
      }
      </sql-option>
      <sql-option onslide="1">
      {
        "COLS": "DATE(), STRFTIME('%d/%m/%Y', DATE())"
      }
      </sql-option>
      <sql-option onslide="2">
      {
        "COLS": "TIMEDIFF('now', '2001-01-01')"
      }
      </sql-option>
      <sql-option onslide="3">
      {
        "COLS": "UNIXEPOCH('now')"
      }
      </sql-option>
      <sql-option onslide="4">
      {
        "COLS": "DATETIME(1726408442, 'unixepoch')"
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
</div>

<ul class="overlay">
  <li onslide="1">💡 <sql-code>FORMAT_DATE(<var>$F</var>, <var>$D</var>)</sql-code> dans certains SGBD.</li>
  <li onslide="3">Le <b>timestamp unix</b> représente une date par le nombre de secondes écoulées depuis le 1er janvier 1970. Il permet de faciliter les opérations sur les dates.</li>
  <li onslide="4">💡 Beaucoup d'autres fonctions de manipulations de dates existent.</li>
</ul>

</frame-uca>
<frame-subsection>Sur les chaînes de caractères</frame-subsection>
<frame-uca>

<div>
  <ul>
    <li><b><i>
      <span class="overlay">
        <span onslide="0">Transformer la casse :</span>
        <span onslide="1">Taille :</span>
        <span onslide="2">Formatter des données :</span>
        <span onslide="3">Remplissage (ajouter des espaces en début/fin) :</span>
        <span onslide="4">Retirer les espaces en début/fin :</span>
      </span>
    </i></b></li>
  </ul>
  <br/>
  <div class="flex">
    <sql-system>
      <sql-queries>
  SELECT $COLS;
      </sql-queries>
      <sql-option onslide="0">
      {
        "COLS": "LOWER('Hello'),\n       UPPER('Hello')"
      }
      </sql-option>
      <sql-option onslide="1">
      {
        "COLS": "LENGTH('23'),\n       LENGTH(32)"
      }
      </sql-option>
      <sql-option onslide="2">
      {
        "COLS": "FORMAT('x=%.2f', 1.2),\n       FORMAT('y=%.2f', 1.)"
      }
      </sql-option>
      <sql-option onslide="3">
      {
        "COLS": "FORMAT('%05s' , 'Hi') as 'LPAD(''Hi'', 5)',\n       FORMAT('%-05s', 'Hi') as 'RPAD(''Hi'', 5)'"
      }
      </sql-option>
      <sql-option onslide="4">
      {
        "COLS": "TRIM(' w '),\n       LTRIM(' w '),\n       RTRIM(' w ')"
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
</div>

<ul class="overlay">
  <li onslide="0">À utiliser quand l'information stockée est <b>indépendante de la casse</b> (e.g. e-mail, nom, etc.) pour garantir l'uniformité des données manipulées.</li>
  <li onslide="2"><sql-code>FORMAT(<var>$F</var>, <var>$T[,...]</var>)</sql-code> : formate des données <sql-code><var>$T</var></sql-code> au format <sql-code><var>$F</var></sql-code> (cf TP2).<br/>
  ⚠ Pour SQLite < 3.38, cette fonction s'appelle <sql-code>PRINTF()</sql-code>.</li>
  <li onslide="3">Les chaînes de caractères sont usuellement de tailles variables.<br/>
  Pour des raisons de performances, on peut les stocker avec une taille fixe :<br/>
  <sql-code>[L/R]PAD(<var>$W</var>, <var>$N</var>, <var>$C</var>)</sql-code> : ajoute <sql-code><var>$C</var></sql-code> en début/fin de <sql-code><var>$W</var></sql-code> jusqu'à obtenir une longueur <sql-code><var>$N</var></sql-code>.<br/>
  ⚠ Cette fonction n'est pas disponible sur SQLite.</li>
</ul>

</frame-uca>
<frame-section>Agrégation</frame-section>
<frame-uca>

<sql-code>GROUP BY <var>$COLS[,...]</var></sql-code> : agrège en une même **ligne**, les **entrées** de <sql-code><var>$COLS[,...]</var></sql-code> identiques.

<ul>
  <li><b><i>
    <span class="overlay">
      <span onslide="0">Agrégation sur les dates :</span>
      <span onslide="1">Agrégation sur les références :</span>
    </span>
  </i></b></li>
</ul>

<div class="flex">
  <sql-system>
    <sql-queries>
SELECT $GRP, GROUP_CONCAT(Q)
  FROM Produits
  GROUP BY $GRP;
    </sql-queries>
    <sql-option onslide="0">
    {
      "GRP": "Date"
    }
    </sql-option>
    <sql-option onslide="1">
    {
      "GRP": "Ref"
    }
    </sql-option>
    <sql-output>
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
    </sql-output>
  </sql-system>

  <!-- <sql-dymtable table="Produits"></sql-dymtable> -->
  <div class="overlay">
    <sql-dymtable onslide="0" id="group-date" table="Produits" header=""></sql-dymtable>
    <sql-dymtable onslide="1" id="group-ref"  table="Produits" header=""></sql-dymtable>
  </div>
</div>

<script>

  async function fct (parent) {
    const gdate_table = await LISS.qs("#group-date", parent);
    const  gref_table = await LISS.qs("#group-ref" , parent);

    gdate_table.groupBy("Date");
    gref_table.groupBy("Ref");
  }

  {
    const parent = document.currentScript.closest("frame-uca");
    (parent.scripts ??= []).push( fct );
  }

</script>

</frame-uca>
<frame-uca>

<ul>
  <li>Les lignes contiennent plusieurs entrées, i.e. plusieurs valeurs par colonne.</li>
  <ul>
    <li>Par défaut, SQL retourne la première valeur.</li>
    <li><b>fonction d'agrégation</b> : prend la liste des valeurs et retourne une valeur.</li>
  </ul>
</ul>

<div class="flex">
  <sql-system>
    <sql-queries>
SELECT Ref, COUNT(Q), GROUP_CONCAT(Q), MIN(Q), MAX(Q), SUM(Q), AVG(Q)
  FROM Produits $GRP;
    </sql-queries>
    <sql-option onslide="0">
    {
      "GRP": "GROUP BY Ref"
    }
    </sql-option>
    <sql-option onslide="1">
    {}
    </sql-option>
    <sql-output>
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
    </sql-output>
  </sql-system>
</div>

<ul>
  <li onslide="1">💡 Une fonction d'agrégation sans <sql-code>GROUP BY</sql-code> retourne une seule ligne.</li>
</ul>

</frame-uca>
<frame-subsection>Compter les entrées/valeurs</frame-subsection>
<frame-uca>

<div>
  <ul>
    <li><b><i>
      <span class="overlay">
        <span onslide="2">Compter les entrées :</span>
        <span onslide="0">Compter les valeurs non-nulles :</span>
        <span onslide="1">Compter les valeurs non-nulles distinctes :</span>
      </span>
    </i></b></li>
  </ul>
  <br/>
  <div class="flex">
    <sql-system>
      <sql-queries>
SELECT COUNT($DISTINCT $COL), GROUP_CONCAT($DISTINCT Date)
FROM Produits;
      </sql-queries>
      <sql-option onslide="2">
      {
        "COL": "*"
      }
      </sql-option>
      <sql-option onslide="0">
      {
        "COL": "Date"
      }
      </sql-option>
      <sql-option onslide="1">
      {
        "COL": "Date",
        "DISTINCT": "DISTINCT"
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
</div>

</frame-uca>
<frame-subsection>Conditions sur les agrégations</frame-subsection>
<frame-uca>

<div>
  <ul>
    <li><sql-code>WHERE</sql-code> filtre les entrées <b>avant</b> agrégation.</li>
  </ul>
  <br/>
  <div class="flex">
    <sql-system>
      <sql-queries>
SELECT Date, group_concat(Q) FROM Produits
  WHERE $COND
  GROUP BY Date;
      </sql-queries>
      <sql-option onslide="0">
      {
        "COND": "Q >=10"
      }
      </sql-option>
      <sql-option onslide="1">
      {
        "COND": "Q >=20"
      }
      </sql-option>
      <sql-option onslide="2">
      {
        "COND": "SUM(Q) >=20"
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
  <ul>
    <li onslide="2">⚠ On ne peut utiliser de fonction d'agrégation dans la condition de <sql-code>WHERE</sql-code>.</li>
  </ul>
</div>

</frame-uca>
<frame-uca>


<div>
  <ul>
    <li><sql-code>HAVING</sql-code> filtre les lignes <b>après</b> agrégation.</li>
  </ul>
  <br/>
  <div class="flex">
    <sql-system>
      <sql-queries>
SELECT Date, $COL FROM Produits
  GROUP BY Date
  HAVING $COND;
      </sql-queries>
      <sql-option onslide="0">
      {
        "COL" : "SUM(Q)",
        "COND": "SUM(Q) >= 10"
      }
      </sql-option>
      <sql-option onslide="1">
      {
        "COL" : "SUM(Q) as Total",
        "COND": "Total >= 10"
      }
      </sql-option>
      <sql-option onslide="2">
      {
        "COL" : "SUM(Q) as Total",
        "COND": "Total >= 30"
      }
      </sql-option>
      <sql-option onslide="3">
      {
        "COL" : "SUM(Q) as Total",
        "COND": "Total >= 50"
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
</div>

</frame-uca>

</html>