<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>BDR1 (CM3)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/slides/bdr/index.css"  rel="stylesheet">
        <script  src="/skeleton/slides/bdr/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>
<frame-uca-title
    caption   = "R1-02 Bases de Données Relationnelles"
    subcaption= "CM3 : Tables et contraintes"
    author    = "Denis MIGDAL"
    mail      = "denis.migdal@uca.fr">
</frame-uca-title>

<frame-section>
  Schémas de tables
</frame-section>
<frame-uca>

<div>
  <b>Schémas de table :</b> entre autres, nom et type de chaque colonne.
  <br/><br/>
  <sql-system>
    <sql-queries>
SELECT * FROM pragma_table_xinfo('$TABLE1');
    </sql-queries>
    <sql-option onslide="0">
    {
      "TABLE1": "Users",
      "TABLE2": "Produits"
    }
    </sql-option>
    <sql-output class="flex">
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div><!--
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div> -->
    </sql-output>
  </sql-system>
  <ul class="flex-2">
    <li><sql-code>cid</sql-code> : identifiant.</li>
    <li><sql-code>name</sql-code> : nom.</li>
    <li><sql-code>type</sql-code> : type des données stockées.</li>
    <li><sql-code>notnull</sql-code> : si peut contenir <sql-code>NULL</sql-code>.</li>
    <li><sql-code>dflt_value</sql-code> : valeur par défaut (si vide).</li>
    <li><sql-code>pk</sql-code> : partie de la clé primaire (cf suite).</li>
    <li><sql-code>hidden</sql-code> : si générée (cf suite).</li>
  </ul>
</div>

<div>
  <ul>
    <li><b>PostgreSQL :</b> <sql-code>SELECT * FROM information_schema.columns 
WHERE table_name == <var>$TABLE</var>;</sql-code></li>
    <li><b>MySQL :</b> <sql-code>DESCRIBE <var>$TABLE</var>;</sql-code></li>
  </ul>
</div>

</frame-uca>
<frame-section>Opérations sur les tables</frame-section>
<frame-uca>

<div>

***Opérations sur les tables :***
- <sql-code>CREATE   TABLE</sql-code> : **créer** une table ;
- <sql-code>ALTER    TABLE</sql-code> : **modifier** une table ;
- <sql-code>TRUNCATE TABLE</sql-code> : **supprimer les entrées** d'une table ;
- <sql-code>DELETE   TABLE</sql-code> : **supprimer** une table.

</div>
</frame-uca>
<frame-subsection>Création d'une table</frame-subsection>
<frame-uca>

<div>
  <sql-code>CREATE TABLE <var onslide="2">[IF NOT EXISTS]</var> <var>$TABLE</var> (<var>$COLNAME $COLTYPE[,...]</var>);</sql-code>
  <ul class="flex-2">
    <li><sql-code><var>$COLNAME</var></sql-code> : nom de la colonne ;</li>
    <li><sql-code><var>$COLTYPE</var></sql-code> : type des données stockées.</li>
  </ul>
  <ul>
    <li onslide="2"><sql-code>IF NOT EXISTS</sql-code> : ne pas recréer la table si existe déjà.
    <ul>
      <li>⚠ table pas nécessairement vide !</li>
      <li>⚠ les schémas peuvent être différents !</li>
    </ul>
    </li>
  </ul>
  <br/>
<div class="flex">
  <sql-system>
    <sql-queries>
CREATE TABLE $IFEXISTS1 T ($COLS);
CREATE TABLE $IFEXISTS2 T ($COLS);
INSERT INTO T VALUES ('Crayon', 4);
SELECT * FROM T;
CREATE TABLE T ($COLS);
    </sql-queries>
    <sql-option onslide="0">
    {
      "COLS": "Ref TEXT, Q INT",
      "IFEXISTS2": "IF NOT EXISTS"
    }
    </sql-option>
    <sql-option onslide="1">
    {
      "COLS": "Ref TEXT, Q INT"
    }
    </sql-option>
    <sql-option onslide="2">
    {
      "COLS": "Ref TEXT, Q INT",
      "IFEXISTS1": "IF NOT EXISTS",
      "IFEXISTS2": "IF NOT EXISTS"
    }
    </sql-option>
    <sql-output>
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
        <div class="overlay">
        <div onslide="0,2">
          <div>
            <div class="sql_query"  q="3"></div>
            <div class="sql_result" q="3"></div>
          </div>
          <div>
            <div class="sql_query"  q="4"></div>
            <div class="sql_result" q="4"></div>
          </div>
        </div>
        <div onslide="1">
            <div class="sql_query"  q="2"></div>
            <div class="sql_result" q="2"></div>
        </div>
      </div>
    </sql-output>
  </sql-system>
</div>
</div>
</frame-uca>
<frame-subsubsection>CREATE TABLE AS</frame-subsubsection>
<frame-uca>

<ul>
  <li>💡 <sql-code>AS <var>$VALUES_OR_SELECT</var></sql-code> : créer et remplir une table à partir d'entrées :
  <ul>
    <li>⚠ Préférez <sql-code>CREATE TABLE</sql-code> + <sql-code>INSERT INTO</sql-code> (permet d'indiquer les contraintes).</li>
    </ul>
  </li>
</ul>

  <sql-system class="flex">
    <sql-queries>
CREATE TABLE T AS
$VALUES_OR_SELECT;
SELECT * FROM T;
SELECT * FROM pragma_table_xinfo('T');
    </sql-queries>
    <sql-option onslide="0">
    {
      "VALUES_OR_SELECT": "VALUES (1, 'A'), (2, 'B')"
    }
    </sql-option>
    <sql-option onslide="1">
    {
      "VALUES_OR_SELECT": "SELECT * FROM Produits WHERE Ref == 'Gomme'"
    }
    </sql-option>
    <sql-output>
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
      <div>
        <div class="sql_query"  q="2"></div>
        <div class="sql_result" q="2"></div>
      </div>
      <div>
        <div class="sql_query"  q="3"></div>
        <div class="sql_result" q="3"></div>
      </div>
    </sql-output>
  </sql-system>
</frame-uca>
<frame-subsubsection>exemples</frame-subsubsection>
<frame-uca>

<div>
<ul>
  <li>💡 Obtenir le code SQL de création de tables existantes (SQLite) :</li>
</ul>
<br>
<sql-system>
  <sql-queries>
SELECT sql FROM sqlite_schema WHERE name IN ($TABLES);
  </sql-queries>
  <sql-option onslide="0">
  {
    "TABLES": "'Users', 'Produits'"
  }
  </sql-option>
  <sql-output class="flex">
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" q="1"></div>
    </div><!--
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" q="1"></div>
    </div> -->
  </sql-output>
</sql-system>
</div>

</frame-uca>
<frame-subsection>Suppression d'une table</frame-subsection>
<frame-uca>

<div class="flex-2">
  <div>
    <ul><li><b>Supprimer une table :</b></li></ul>
    <sql-system>
      <sql-queries>
DROP TABLE $IFEXISTS $TABLE;
SELECT COUNT(*) FROM $TABLE;
      </sql-queries>
      <sql-option onslide="0">
      {
        "TABLE": "Produits"
      }
      </sql-option>
      <sql-option onslide="1">
      {
        "IFEXISTS": "IF EXISTS",
        "TABLE": "Produits"
      }
      </sql-option>
      <sql-output>
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
  <div>
    <ul><li><b>Supprimer les entrées :</b></li></ul>
    <sql-system>
      <sql-queries>
DELETE FROM $TABLE;
SELECT COUNT(*) FROM $TABLE;
      </sql-queries>
      <sql-option onslide="0">
      {
        "TABLE": "Produits"
      }
      </sql-option>
      <sql-output>
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

  <div> </div>
  <div>
    ⚠ <sql-code>TRUNCATE TABLE</sql-code> n'existe pas sur SQLite.</div>
</div>

<ul onslide="1">
  <li><sql-code>CREATE TABLE IF EXISTS</sql-code> pose problème si schémas différents.</li>
  <li><sql-code>DROP TABLE IF EXISTS</sql-code> puis <sql-code>CREATE TABLE</sql-code> pour s'assurer du schémas.
</ul>

</frame-uca>
<frame-subsection>Modification d'une table</frame-subsection>
<frame-uca>

<div>
  <sql-code>ALTER TABLE <var>$TABLE</var> <var>(RENAME|ADD|DROP)</var> COLUMN <var>$OPT</var>;</sql-code>
  <ul class="overlay">
    <li onslide="0"><sql-code>RENAME COLUMN <var>COLNAME</var> TO <var>$NEW_NAME</var></sql-code> : <b>renomme</b> une colonne.</li>
    <li onslide="1"><sql-code>ADD COLUMN <var>$COLNAME</var> <var>$COLTYPE</var></sql-code> : <b>ajoute</b> une colonne.</li>
    <li onslide="2-3"><sql-code>DROP COLUMN <var>$COLNAME</var></sql-code> : <b>supprime</b> une colonne.</li>
    <li onslide="4"><sql-code>RENAME TO <var>$NEW_NAME</var></sql-code> : <b>renommer</b> une table.</li>
  </ul>
</div>

<sql-system onslide="0-3">
  <sql-queries>
SELECT * FROM pragma_table_xinfo('Produits');
ALTER TABLE Produits $COMMAND COLUMN $OPTS;
SELECT * FROM pragma_table_xinfo('Produits');
SELECT * FROM Produits;
  </sql-queries>
  <sql-option onslide="0">
  {
    "COMMAND": "RENAME",
    "OPTS": "Ref TO Prod"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "COMMAND": "ADD",
    "OPTS": "Sum INT"
  }
  </sql-option>
  <sql-option onslide="2-3">
  {
    "COMMAND": "DROP",
    "OPTS": "Q"
  }
  </sql-option>
  <sql-output class="flex-2">
    <div>
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
      <div>
        <div class="sql_query"  q="2"></div>
        <div class="sql_result" q="2"></div>
      </div>
      <div>
        <div class="sql_query"  q="3"></div>
        <div class="sql_result" q="3"></div>
      </div>
    </div>
    <div>
      <div>
        <div class="sql_query"  q="4"></div>
        <div class="sql_result" q="4"></div>
      </div>
    </div>
  </sql-output>
</sql-system>

<div class="overlay">
  <div onslide="0-2,4-">⚠ Modifier le schéma d'une table existante est dangereux si requêtes SQL déjà écrites.</div>
  <div onslide="3">💡 Certains SGBD supportent des clauses <sql-code>IF [NOT] EXISTS</sql-code>.</div>
</div>

</frame-uca>
<frame-section>Les contraintes</frame-section>
<frame-subsection>Motivation</frame-subsection>
<frame-uca>

<div>

***Problème :*** On veut garantir la validité des données stockées dans les tables :
<ul class="flex">
  <li>Numéro de téléphone</li>
  <li>Adresses e-mail</li>
  <li>...</li>
</ul>

</div>

💡 L'assurance de la structure des données est un des avantages majeurs de SQL.

<div>
⚠ Sur SQLite, afin d'activer les contraintes, les <sql-code>CREATE TABLE</sql-code> doivent se terminer par <sql-code>STRICT;</sql-code><br/>
<ul>
  <li>⚠ Ne marche pas avec les <sql-code>CREATE TABLE <var>$T</var> AS</sql-code>.</li>
</ul>
</div>

<sql-system>
  <sql-queries>
CREATE TABLE T (Prod TEXT, Q INT) STRICT;
INSERT INTO T VALUES (4, 'Crayon');
  </sql-queries>
  <sql-option onslide="0">
  {
    "COMMAND": "RENAME",
    "OPTS": "Ref TO Prod"
  }
  </sql-option>
  <sql-output>
    <div>
      <div>
        <div class="sql_query"  q="1"></div>
        <div class="sql_result" q="1"></div>
      </div>
      <div>
        <div class="sql_query"  q="2"></div>
        <div class="sql_result" q="2"></div>
      </div>
    </div>
  </sql-output>
</sql-system>

</frame-uca>
<frame-subsection>Contraintes sur les colonnes</frame-subsection>
<frame-uca>

<div>
<sql-code>CREATE TABLE T (A TEXT <var>$CONTRAINTE</var>) STRICT;</sql-code>
<ul>
  <li><sql-code>DEFAULT <var>$VAL</var></sql-code> : valeur par défaut si non renseignée lors d'un <sql-code>INSERT</sql-code>.</li>
  <li onslide="1-"><sql-code>NOT NULL</sql-code></li>
  <li onslide="2-"><sql-code>UNIQUE</sql-code> <i>⚠ La colonne peut contenir plusieurs valeurs <sql-code>NULL</sql-code>.</i></li>
  <li onslide="3-"><sql-code>CHECK(<var>$COND</var>)</sql-code> : <sql-code><var>$COND</var></sql-code> doit être vraie.</li>
  <li onslide="5-"><sql-code>AS (<var>$VAL</var>) <var onslide="6">[STORED]</var></sql-code> : valeur (re-)calculée à partir des autres colonnes.
    <ul><li onslide="6"><sql-code>STORED</sql-code> : valeur stockée et non-recalculée sur demande.</li></ul>
  </li>
</ul>
</div>

<sql-system class="flex">
  <sql-queries>
CREATE TABLE T (ID INT $CSTRNT1, A TEXT $CSTRNT2) STRICT;
SELECT * FROM pragma_table_xinfo('T');
INSERT INTO  T $COLS VALUES $VAL;
SELECT * FROM T;
  </sql-queries>
  <sql-option onslide="0">
  {
    "CSTRNT1": "DEFAULT 0",
    "COLS": "(A)",
    "VAL": "('A')"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "CSTRNT1": "NOT NULL",
    "COLS": "(ID)",
    "VAL": "(NULL)"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "CSTRNT1": "UNIQUE",
    "COLS": "(ID)",
    "VAL": "(0), (0)"
  }
  </sql-option>
  <sql-option onslide="3">
  {
    "CSTRNT1": "CHECK(ID>0)",
    "COLS": "(ID)",
    "VAL": "(-1)"
  }
  </sql-option>
  <sql-option onslide="4">
  {
    "CSTRNT2": "CHECK(A == UPPER(A))",
    "COLS": "(A)",
    "VAL": "('a')"
  }
  </sql-option>
  <sql-option onslide="5">
  {
    "CSTRNT2": "AS ('ID:'||ID)",
    "COLS": "(ID)",
    "VAL": "(0)"
  }
  </sql-option>
  <sql-option onslide="6">
  {
    "CSTRNT2": "AS ('ID:'||ID) STORED",
    "COLS": "(ID)",
    "VAL": "(0)"
  }
  </sql-option>
  <sql-output>
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" q="1"></div>
    </div>
    <div>
      <div class="sql_query"  q="2"></div>
      <div class="sql_result" q="2"></div>
    </div>
    <div class="sql_query"  q="3"></div>
    <div class="overlay">
      <div class="sql_result" q="3" onslide="1-4"></div>
      <div onslide="0,5-">
        <div class="sql_query"  q="4"></div>
        <div class="sql_result" q="4"></div>
      </div>
    </div>
  </sql-output>
</sql-system>

</frame-uca>
<frame-subsection>Contraintes sur la table</frame-subsection>
<frame-uca>

<div>

💡 Les **contraintes de tables** sont des contraintes sur plusieurs colonnes :

<br/>
<div class="flex">
  <div>
<sql-system>
  <sql-queries>
CREATE TABLE T (A INT, B INT, $CSTR) STRICT;
INSERT INTO  T VALUES $VALS;
  </sql-queries>
  <sql-option onslide="0">
  {
    "CSTR": "UNIQUE(A,B)",
    "VALS": "(0,1), (0,0)"
  }
  </sql-option>
  <sql-output>
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
<br/>
<sql-system>
  <sql-queries>
CREATE TABLE T (A INT, B INT, $CSTR) STRICT;
INSERT INTO  T VALUES $VALS;
  </sql-queries>
  <sql-option onslide="0">
  {
    "CSTR": "UNIQUE(A,B)",
    "VALS": "(0,1), (0,1)"
  }
  </sql-option>
  <sql-output>
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
<br/>
<sql-system>
  <sql-queries>
CREATE TABLE T (A INT, B INT, $CSTR) STRICT;
INSERT INTO  T VALUES $VALS;
  </sql-queries>
  <sql-option onslide="0">
  {
    "CSTR": "CHECK(A != B)",
    "VALS": "(0,0)"
  }
  </sql-option>
  <sql-output>
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
</div>
<br/>
💡 Elles s'écrivent <b>après</b> la liste des colonnes.
</div>

</frame-uca>
<frame-section>Les index</frame-section>
<frame-uca>

<div>

***Problème*** : on veut récupérer une entrée à partir d'un identifiant...

- ... mais parcourir entièrement la table est **coûteux** O(N).

</div>

<div>

***Solution*** : les index (contrainte de colonne ou de table).
- permet de rapidement trouver les entrées associées à un identifiant ≤O(log2(N)).
- comme un "annuaire".

</div>

💡 Les SGBD créent automatiquement un index sur les colonnes <sql-code>UNIQUE</sql-code>. 

</frame-uca>
<frame-subsection>Les clefs primaires (PK)</frame-subsection>
<frame-uca>

<ul>
  <li><b>Clef primaire :</b> un index <sql-code>UNIQUE NOT NULL</sql-code>, encore plus rapide, un seul par table.
    <ul>
      <!-- <li>💡 Certains SGBD créent une clef primaire cachée nommée <sql-code>ROWID</sql-code>.</li> -->
      <li onslide="3-"><sql-code>AUTOINCREMENT</sql-code> : incrémente automatiquement la clef primaire.
      <ul><li>⚠ que sur <sql-code>INTEGER PRIMARY KEY</sql-code>.</li></ul></lu>
    </ul>
  </li>
</ul>

<sql-system class="flex">
  <sql-queries>
CREATE TABLE T ( $PK ) STRICT;
SELECT * FROM pragma_table_xinfo('T');
INSERT INTO  T VALUES $VALS;
SELECT * FROM T;
  </sql-queries>
  <sql-option onslide="0">
  {
    "PK": "PK TEXT PRIMARY KEY",
    "VALS": "('A'), ('B')"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "PK": "PK TEXT PRIMARY KEY",
    "VALS": "(NULL)"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "PK": "PK TEXT PRIMARY KEY",
    "VALS": "('A'), ('A')"
  }
  </sql-option>
  <sql-option onslide="3">
  {
    "PK": "PK INTEGER PRIMARY KEY AUTOINCREMENT",
    "VALS": "(NULL), (NULL)"
  }
  </sql-option>
  <sql-option onslide="4">
  {
    "PK": "A TEXT, B TEXT, PRIMARY KEY(A,B)",
    "VALS": "('A', 'B'), ('A', 'A')"
  }
  </sql-option>
  <sql-option onslide="5">
  {
    "PK": "A TEXT, B TEXT, PRIMARY KEY(A,B)",
    "VALS": "('A', 'B'), ('A', 'B')"
  }
  </sql-option>
  <sql-output>
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" q="1"></div>
    </div>
    <div>
      <div class="sql_query"  q="2"></div>
      <div class="sql_result" q="2"></div>
    </div>
    <div class="sql_query"  q="3"></div>
    <div class="overlay">
      <div onslide="1,2,5" class="sql_result" q="3"></div>
      <div onslide="0,3,4">
        <div class="sql_query"  q="4"></div>
        <div class="sql_result" q="4"></div>
      </div>
    </div>
  </sql-output>
</sql-system>

</frame-uca>
<frame-subsection>Les clefs étrangères (FK)</frame-subsection>
<frame-uca>

<div>

***Motivation :*** une *vente* est effectuée par un *vendeur* auprès d'un *client*.

<ul class="flex-2">
  <li>Table <sql-code>Vendeur</sql-code></li>
  <li>Table <sql-code>Client</sql-code></li>
</ul>
<ul>
  <li>Table <sql-code>Vente</sql-code> : met en <b>relation</b> <sql-code>Vendeur</sql-code> et <sql-code>Client</sql-code> (<sql-code>ID_Vendeur</sql-code>, <sql-code>ID_Client</sql-code>, <sql-code>Date</sql-code>, etc.)</li>
</ul>
</div>

***Problématique :*** dans <sql-code>Vente</sql-code>, comment représenter <sql-code>ID_Vendeur</sql-code> et <sql-code>ID_Client</sql-code> ?

<div>

***Solution :*** les contraintes de **clefs étrangères** (FK)
- <sql-code>REFERENCES <var>$T[($PK)]</var></sql-code> : référence la colonne <sql-code><var>$PK</var></sql-code> (doit être <sql-code>UNIQUE</sql-code>) de la table <sql-code><var>$T</var></sql-code>.
- ⚠ Les FK sont une contrainte (garanti l'existence de la PK), pas une optimisation.

</div>

<sql-system class="flex">
  <sql-queries>
CREATE TABLE T (ID INT $FK) STRICT;
INSERT INTO  T VALUES $VALS;
  </sql-queries>
  <sql-option onslide="0">
  {
    "FK": "REFERENCES Users(ID)",
    "VALS": "(1)"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "FK": "REFERENCES Users",
    "VALS": "(1)"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "FK": "REFERENCES Users",
    "VALS": "(4)"
  }
  </sql-option>
  <sql-option onslide="3">
  {
    "FK": "REFERENCES Users",
    "VALS": "(NULL)"
  }
  </sql-option>
  <sql-output>
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

<ul class="overlay">
  <li onslide="0">💡 En contrainte de table : <sql-code>FOREIGN KEY(<var>$FK[,...]</var>) REFERENCES <var>$T</var>[(<var>$PK[,...]</var>)]</sql-code>.</li>
  <li onslide="1">💡 Si les colonnes référencées ne sont pas spécifiées, la clef primaire est utilisée.</li>
  <li onslide="2">
⚠ <sql-code>PRAGMA foreign_keys = ON</sql-code> pour activer la vérification des clefs étrangères sur SQLite.</li>
  <li onslide="3">
💡 La clef étrangère peut être nulle (sauf si contrainte <sql-code>NOT NULL</sql-code>).</li>
</ul>

</frame-uca>
<frame-subsection>UML</frame-subsection>
<frame-uca>

<div>

***Problématique :*** difficile de se représenter les relations entre de nombreuses tables.
<br/>
<br/>
***Solution :*** diagramme UML pour représenter visuellement les tables et leurs relations.
<br/>
<br/>
<div class="flex">
<pre>+------------+   +-----------+
|   Vente    |   |   Client  |
+------------+   +-----------+
| <i>ID_C: INT</i>  |-->| <b>ID  : INT</b> |
| <i>ID_V: INT</i>  |   | Nom: TEXT |
| Date: Date |   +-----------+
+------------+
</pre>

<div>Les tables sont représentées par un cadre en 3 parties :
<ul class="flex-2">
  <li>le <b>nom</b> de la table ;</li>
  <li>les <b>colonnes</b> ;</li>
  <li>les <b>contraintes</b> de table ;</li>
</ul><br/>
Les colonnes sont formattées comme suit :
<ul class="flex">
  <li><b>clefs primaires</b></li>
  <li><i>clefs étrangères</i></li>
  <li><u>unique</u>.</li>
</ul><br/>
La clef étrangère est reliée à la clef primaire référencée.</div>
</div></div>

💡 En fonction des besoins, il est possible d'ajouter plus ou moins de détails.

</frame-uca>
<frame-section>Opérations sur table avec contraintes</frame-section>
<frame-subsection>Modification/Suppression sur des colonnes référencées</frame-subsection>
<frame-uca>

<div>

***Problème :*** que faire lorsqu'une clef primaire référencée est modifiée/supprimée ?

<br/>
<ul>
  <li>C'est à vous de le définir via <sql-code>ON DELETE <var>$POLICY</var></sql-code> et <sql-code>ON UPDATE <var>$POLICY</var></sql-code> :
    <ul>
      <li><sql-code>RESTRICT</sql-code> : empêche la modification/suppression si référencée.</li>
      <li><sql-code>CASCADE</sql-code> : applique la modification/suppression à la clef étrangère.</li>
      <li><sql-code>SET <var>NULL|$DEFAULT</var></sql-code> : la clef étrangère devient <sql-code>NULL</sql-code> (ou <sql-code><var>$DEFAULT</var></sql-code>).
    </ul>
  </li>
</ul>
</div>

<sql-system class="flex">
  <sql-queries>
CREATE TABLE T ( ID INT, A TEXT,
                 FOREIGN KEY(ID) REFERENCES Users
                    ON DELETE $POL
                    ON UPDATE $POL ) STRICT;
INSERT INTO T VALUES (2, 'A');
DELETE FROM Users WHERE ID == 2;
SELECT * FROM T;
  </sql-queries>
  <sql-option onslide="0">
  {
    "POL": "RESTRICT"
  }
  </sql-option>
  <sql-option onslide="1">
  {
    "POL": "CASCADE"
  }
  </sql-option>
  <sql-option onslide="2">
  {
    "POL": "SET NULL"
  }
  </sql-option>
  <sql-output>
    <div>
      <div class="sql_query"  q="1"></div>
      <div class="sql_result" q="1"></div>
    </div>
    <div>
      <div class="sql_query"  q="2"></div>
      <div class="sql_result" q="2"></div>
    </div>
    <div class="sql_query"  q="3"></div>
    <div class="overlay">
      <div class="sql_result" q="3"></div>
      <div onslide="1-">
        <div class="sql_query"  q="4"></div>
        <div class="sql_result" q="4"></div>
      </div>
    </div>
  </sql-output>
</sql-system>

</frame-uca>
<frame-subsection>Modifier les contraintes</frame-subsection>
<frame-uca>

<div>

💡 Certains SGBD permettent de modifier les contraintes de colonnes et de tables :

```sql
ALTER TABLE $T ALTER|MODIFY COLUMN $NAME $DESC;
ALTER TABLE $T ADD|DROP CHECK $DESC;
ALTER TABLE $T ADD|DROP PRIMARY KEY ($COL);
ALTER TABLE $T ADD|DROP CONSTRAINST PK_$T PRIMARY KEY ($COL[,...]);
```

</div>

⚠ Modifier le schéma et contraintes d'une table existante/non-vide est dangereux.

</frame-uca>

</html>