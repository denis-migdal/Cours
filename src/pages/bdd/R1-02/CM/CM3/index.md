<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>BDR1 (CM3)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/bdr/index.css"  rel="stylesheet">
        <script  src="/skeleton/bdr/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# Tables et contraintes

## Schémas de tables

La structure d'une table, appelée **schémas**, est constituée du nom et du type de chaque colonne :

<sql-interactive>
  <span slot="options" data-tablename="'Users'">Schéma de la table Users</span>
  <span slot="options" data-tablename="'Produits'">Schéma de la table Produits</span>

<script type="c-sql">
SELECT * FROM
pragma_table_xinfo(<h>$TABLENAME</h>);
</script>

</sql-interactive>

- <script type="c-sql">cid</script> est l'identifiant de la colonne.
- <script type="c-sql">name</script> est le nom de la colonne.
- <script type="c-sql">type</script> est le type de données stockées dans la colonne.
- <script type="c-sql">notnull</script> indique si la colonne peut contenir des valeurs <script type="c-sql">NULL</script>.
- <script type="c-sql">dflt_value</script> est la valeur par défaut de la colonne (i.e. valeur insérée si non spécifiée lors de l'insertion).
- <script type="c-sql">pk</script> indique si la colonne fait partie d'une clé primaire (cf suite du cours).
- <script type="c-sql">hidden</script> indique si la colonne est générée (cf suite du cours)

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

<script type="c-sql">
SELECT * FROM pragma_table_xinfo(<h>$TABLENAME<h>);
</script>

</td>
    </tr><tr>
      <td>PostgreSQL</td>
      <td>

<script type="c-sql">
SELECT * FROM information_schema.columns 
WHERE table_name == <h>$TABLENAME</h>;
</script>

</td>
    </tr><tr>
      <td>MySQL</td>
      <td>

<script type="c-sql">
DESCRIBE <h>$TABLENAME</h>;
</script>

</td>
    </tr>
  </tbody>
</table>

## Opérations sur les tables

Jusqu'à présent, nous avons écrit des requêtes SQL pour récupérer, insérer, modifier, et supprimer des entrées d'une table. De manière analogue est aussi possible de créer, modifier, et supprimer des tables via des commandes SQL :

- <script type="c-sql">CREATE TABLE</script> : créer une table ;
- <script type="c-sql">ALTER TABLE</script> : modifier une table ;
- <script type="c-sql">TRUNCATE TABLE</script> : supprimer toutes les entrées d'une table ;
- <script type="c-sql">DELETE TABLE</script> : supprimer une table.

### Création d'une table

La requête SQL <script type="c-sql">CREATE TABLE</script> permet de créer une nouvelle table, et se présente usuellement sous la forme suivante :

<script type="c-sql">
CREATE TABLE <h>[IF NOT EXISTS]</h> <h>$TABLENAME</h> (<h>$COLNAME $COLTYPE[,...]</h>);
</script>

- <script type="c-sql"><h>$COLNAME</h></script> est le nom de la colonne ;
- <script type="c-sql"><h>$COLTYPE</h></script> est le type des données stockées dans la colonne.

⚠ Si vous utilisez SQLite, il faut ajouter <script type="c-sql">STRICT</script> à la fin de la requête SQL afin de le forcer à vérifier les types des colonnes lors des opérations sur la table.

<sql-interactive>
  <span slot='select'>SELECT * FROM T;</span>
  <span slot="options" data-m_cols="(Ref TEXT, Q INT)" data-m_vals="('Crayon', 4)">Création d'une table</span>
  <span slot="options" data-m_cols="(Ref TEXT, Q INT)" data-m_vals="(4, 'Crayon')">Violation contrainte de type</span>

<script type="c-sql">
CREATE TABLE T
      <h>$M_COLS</h> STRICT;
INSERT INTO T VALUES
      <h>$M_VALS</h>;
</script>

</sql-interactive>

#### IF NOT EXISTS

Si la table existe déjà, une erreur sera lancée. Pour éviter cela, vous pouvez ajouter la clause <script type="c-sql">IF NOT EXISTS</script> qui créera la table seulement si elle n'existe pas.

⚠ Après un <script type="c-sql">IF NOT EXISTS</script>, la table ne sera pas nécessairement vide. Si vous avez besoin que la table soit vide, utilisez une requête <script type="c-sql">TRUNCATE TABLE</script> (cf suite du cours).

⚠ Si le schéma de table du <script type="c-sql">IF NOT EXISTS</script> est différent de la table existante, aucune erreur ne sera lancée.

<sql-interactive>
  <span slot="options" data-ifexists="">Re-création d'une table</span>
  <span slot="options" data-ifexists="IF NOT EXISTS">Avec IF NOT EXISTS</span>

<script type="c-sql">
CREATE TABLE T
      (Date TEXT) STRICT;
CREATE TABLE <h>$IFEXISTS</h> T
      (Date INT) STRICT;
</script>

</sql-interactive>

#### CREATE TABLE AS

💡 Vous pouvez aussi créer et remplir une nouvelle table à partir d'entrées grâce à la clause <script type="c-sql">AS <h>$VALUES_OR_SELECT</h></script>.

⚠ Cette méthode ne permet pas de préciser les contraintes de la table ainsi créez. Ainsi, il est préférable de d'abord créer une table vide (avec ses contraintes) avec <script type="c-sql">CREATE TABLE</script>, puis de la remplir avec <script type="c-sql">INSERT INTO</script>.

<sql-interactive>
  <span slot="select">SELECT * FROM T;</span>
  <span slot="options" data-cols="*" data-tablename="Produits" data-cond="1==1"></span>
  <span slot="options" data-cols="Date, Q" data-tablename="Produits" data-cond="Ref == 'Gomme'"></span>

<script type="c-sql">
CREATE TABLE T AS
    SELECT <h>$COLS</h>
    FROM <h>$TABLENAME</h>
    WHERE <h>$COND</h>;
SELECT * FROM T;
</script>

</sql-interactive>

⚠ Sur SQLite, les tables créées de cette manière ne sont pas <script type="c-sql">STRICT</script>.

#### Exemples

💡 Pour références, les requêtes SQL utilisées pour créer les tables des exemples peuvent être visualisées ci-dessous :

<sql-interactive>
  <span slot="options" data-tablename="'Produits'">CREATE TABLE pour Produits</span>
  <span slot="options" data-tablename="'Users'">CREATE TABLE pour Users</span>

<script type="c-sql">
SELECT sql FROM sqlite_schema
WHERE name == <h>$TABLENAME</h>;
</script>

</sql-interactive>

### Suppression d'une table

Les requêtes SQL <script type="c-sql">DROP TABLE</script> et <script type="c-sql">TRUNCATE TABLE</script> permettent, respectivement, de supprimer et de vider une table existantes, et se présentent usuellement sous la forme suivante :

<script type="c-sql">
DROP TABLE <h>[IF EXISTS]</h> <h>$TABLENAME</h>;
TRUNCATE TABLE <h>$TABLENAME</h>;
</script>

<sql-interactive>
  <span slot="select">SELECT name, type, "notnull", dflt_value, pk, hidden
        FROM pragma_table_xinfo('Produits');
SELECT COUNT(*) as "NB ENTRIES" FROM Produits;</span>
  <span slot="options" data-command="DROP TABLE">Suppression de la table</span>
  <span slot="options" data-command="DELETE FROM">Suppression des entrées</span>

<script type="c-sql">
<h>$COMMAND</h> Produits;
</script>

</sql-interactive>

💡 Dans certains SGBD, <script type="c-sql">DROP TABLE</script> supporte une clause <script type="c-sql">IF EXISTS</script>. Ainsi, si vous souhaitez créer une table vide, vous pouvez la <script type="c-sql">DROP TABLE IF EXISTS</script> avant sa création pour vous assurer de la construire correctement.

⚠ <script type="c-sql">TRUNCATE TABLE</script> n'existe pas sur SQLite. Il vous faut alors utiliser <script type="c-sql">DELETE FROM <h>$TABLENAME</h>;</script> à la place.

### Modification d'une table

La requête SQL <script type="c-sql">ALTER TABLE</script> permet de modifier une table, et se présente usuellement sous la forme suivante :

<script type="c-sql">
ALTER TABLE <h>$TABLENAME</h> <h>(RENAME|ADD|DROP)</h> COLUMN <h>$COLNAME</h> <h>$OPT</h>;
</script>

- <script type="c-sql">RENAME</script> renomme une colonne (<script type="c-sql"><h>$OPT</h></script> = <script type="c-sql">TO <h>$NEW_COLNAME</h></script>).
- <script type="c-sql">ADD</script> ajoute une colonne (<script type="c-sql"><h>$OPT</h></script> = <script type="c-sql"><h>$COLTYPE</h></script>).
- <script type="c-sql">DROP</script> supprime une colonne (<script type="c-sql"><h>$OPT</h></script> = <script type="c-sql"> </script>).

<sql-interactive>
  <span slot="select">SELECT name, type, "notnull", dflt_value, pk, hidden
        FROM pragma_table_xinfo('Produits');</span>
  <span slot="options" data-command="RENAME" data-colname="Ref" data-opts="TO Prod">Renommer une colonne</span>
  <span slot="options" data-command="ADD" data-colname="Sum" data-opts="INT">Ajouter une colonne</span>
  <span slot="options" data-command="DROP" data-colname="Date" data-opts="">Supprimer une colonne</span>

<script type="c-sql">
ALTER TABLE Produits
  <h>$COMMAND</h> COLUMN <h>$COLNAME</h> <h>$OPTS</h>;
SELECT * FROM Produits;
</script>

</sql-interactive>

⚠ Renommer ou supprimer la colonne d'une table n'est pas anodin. En effet, si ces colonnes sont utilisées ailleurs, e.g. dans des requêtes SQL, ces dernières ne fonctionneront plus correctement.

💡 Certains SGBD supportent des clauses <script type="c-sql">IF EXISTS</script> et <script type="c-sql">IF NOT EXISTS</script> sur les colonnes.

💡 Vous pouvez aussi renommer une table avec la commande SQL suivante :

<script type="c-sql">
ALTER TABLE <h>$OLD_TABLENAME</h> RENAME TO <h>$NEW_TABLENAME</h>;
</script>

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

<script type="c-sql">
CREATE TABLE T ( A TEXT,
    B TEXT <h>$CSTRNT</h>
  ) STRICT;
INSERT INTO  T <h>$COLS</h> VALUES
    <h>$VALS</h>;
</script>

</sql-interactive>

- <script type="c-sql">DEFAULT <h>$VAL</h></script> : valeur par défaut si non renseignée lors d'un <script type="c-sql">INSERT</script>.
- <script type="c-sql">NOT NULL</script> : la valeur ne peut pas être <script type="c-sql">NULL</script>.
- <script type="c-sql">UNIQUE</script> : il ne peut pas y avoir deux valeurs identiques dans la colonne.<br/>
  ⚠ La colonne peut contenir plusieurs valeurs <script type="c-sql">NULL</script>.
- <script type="c-sql">CHECK(<h>$COND</h>)</script> : la valeur de la colonne doit respecter la condition <script type="c-sql"><h>$COND</h></script>.

### Contraintes sur la table

Les contraintes <script type="c-sql">UNIQUE</script> et <script type="c-sql">CHECK</script> peuvent dépendre de plusieurs colonnes. Dans ce cas, la contrainte est ajoutée après la liste des colonnes :

<sql-interactive>
  <span slot="options" data-cstrnt="UNIQUE(A,B)" data-vals="(1, 2), (1, 2)">Colonnes uniques</span>
  <span slot="options" data-cstrnt="CHECK(B != A)" data-vals="(1, 1)" >Condition</span>

<script type="c-sql">
CREATE TABLE T (
    A TEXT, B TEXT,
    <h>$CSTRNT</h>
  ) STRICT;
INSERT INTO  T VALUES
    <h>$VALS</h>;
</script>

</sql-interactive>

### Colonnes générées

Il est possible de générer la valeur d'une colonne à partir des valeurs d'autres colonnes grâce à la contrainte <script type="c-sql">AS</script> :

<sql-interactive>
  <span slot='select'>SELECT * FROM T;</span>
  <span slot="options" data-cstrnt="(PU*Q )" data-vals="(1,2), (3,4)">Colonne générée virtuelle</span>
  <span slot="options" data-cstrnt="(PU*Q) STORED" data-vals="(1,2), (3,4)">Colonne générée stockée</span>

<script type="c-sql">
CREATE TABLE T (
    PU INT, Q INTEGER,
    T INT AS <h>$CSTRNT</h>
  ) STRICT;
INSERT INTO  T VALUES
    <h>$VALS</h>;
</script>

</sql-interactive>

💡 <script type="c-sql">STORED</script> signifie que la valeur sera calculée lors des insertions/modifications puis stockées. Si absent, la valeur sera recalculée à chaque accès.

## Les index

Il est fréquent de vouloir récupérer une entrée à partir d'un identifiant donné. Cependant, s'il faut à chaque fois parcourir toutes les entrées de la table unes à unes, cela peut s'avérer relativement lent sur de grandes tables.

Un **index** est une structure permettant de trouver très rapidement la/les entrée(s) associée(s) à un tel identifiant.

💡 Lorsqu'une colonne a la contrainte <script type="c-sql">UNIQUE</script>, le SGBD créé automatiquement un index.

### Les clefs primaires (PK)

Une clef primaire est un index un peu spécial accélérant encore plus les recherches d'entrées à partir d'un identifiant. Il est un champ (ou un ensemble de champs) identifiant de manière unique une entrée.

Elle est créée via une contrainte <script type="c-sql">PRIMARY KEY</script> et implique les contraintes <script type="c-sql">UNIQUE NOT NULL</script>. Il ne peut y avoir qu'une clef primaire par table.

<sql-interactive>
  <span slot='select'>SELECT * FROM T;</span>
  <span slot="options" data-pk="TEXT PRIMARY KEY" data-vals="('1'), ('2')">Clé primaire (texte)</span>
  <span slot="options" data-pk="TEXT PRIMARY KEY" data-vals="('1'), ('1')">Clé primaire (dupliquée)</span>
  <span slot="options" data-pk="INTEGER
      PRIMARY KEY AUTOINCREMENT" data-vals="(NULL), (NULL)">Clé primaire (auto-incrément)</span>

<script type="c-sql">
CREATE TABLE T (
    K <h>$PK</h>
  ) STRICT;
INSERT INTO  T VALUES
    <h>$VALS</h>;
</script>

</sql-interactive>

💡 La contrainte <script type="c-sql">AUTOINCREMENT</script> permet d'automatiquement incrémenter la clef primaire des entrées insérées. Elle ne peut être utilisée que sur une colonne <script type="c-sql">INTEGER PRIMARY KEY</script>.

💡 Comme avec la contrainte <script type="c-sql">UNIQUE</script>, il est aussi possible de créer une clef primaire sur plusieurs colonnes via contrainte de table :

<sql-interactive>
  <span slot='select'>SELECT * FROM T;</span>
  <span slot="options" data-pk="PRIMARY KEY(ID, CODE)" data-vals="(1, 'E')">Clé primaire (multi-cols)</span>

<script type="c-sql">
CREATE TABLE T (
    ID INT, CODE TEXT,
    <h>$PK</h>
  ) STRICT;
INSERT INTO  T VALUES
    <h>$VALS</h>;
</script>

</sql-interactive>

💡 Certains SGBD créent automatiquement, pour chaque table, une clef primaire cachée nommée <script type="c-sql">ROWID</script>.

### Les clefs étrangères (FK)

Il est fréquent, dans une base de données, que des entrées fassent référence à des entrées d'une autre table. Par exemple, une table <script type="c-sql">Vente</script> pourra mettre en relation une table <script type="c-sql">Vendeur</script> et une table <script type="c-sql">Client</script>.

💡 Le terme de "base de données relationnelles" vient en partie de là : on établie des relations entre différentes entrées/données. Ceci constitue une des fonctionnalités majeurs des bases de données SQL.

Pour cela, on utilise une clef étrangère (FK) afin de garantir l'existence de la donnée référencée. Elle est composée d'une ou plusieurs colonnes référençant une ou plusieurs colonnes de contrainte <script type="c-sql">UNIQUE</script> ou <script type="c-sql">PRIMARY KEY</script>. On l'indique soit via une contrainte <script type="c-sql">REFERENCES <h>$T</h><h>[($PK)]</h></script>, ou via une contrainte de table :

<script type="c-sql">
FOREIGN KEY(<h>$FK[,...]</h>) REFERENCES <h>$T[($PK[,...])]</h>
</script>

- <script type="c-sql"><h>$T</h></script> est la table référencée.
- <script type="c-sql"><h>$FK</h></script> sont les colonnes constituant la clé étrangère.
- <script type="c-sql"><h>$PK</h></script> sont les colonnes référencées.

💡 Si la/les colonne(s) de la table référencée ne sont pas spécifiées, la/les colonne(s) de la clef primaire sont utilisée(s).

<sql-interactive>
  <span slot='select'>SELECT * FROM T;
SELECT * FROM Users;</span>
  <span slot="options" data-fk="REFERENCES Users" data-vals="(1, 'E')">Clef étrangère existante</span>
  <span slot="options" data-fk="REFERENCES Users" data-vals="(4, 'E')">Clef étrangère non-existante</span>
  <span slot="options" data-fk="REFERENCES Users" data-vals="(NULL, 'E')">Clef étrangère nulle</span>

<script type="c-sql">
CREATE TABLE T (ID INT <h>$FK</h>, C TEXT
  ) STRICT;
INSERT INTO  T VALUES
    $VALS;
</script>

</sql-interactive>

💡 La clé étrangère peut être nulle (sauf si contrainte <script type="c-sql">NOT NULL</script>).

💡 On préfère souvent nommer la/les colonne(s) de la clef étrangères avec les noms de la/les colonne(s) référencée(s).

⚠ Les clefs étrangères ne sont qu'une contrainte garantissant l'existence de la valeur référencée. Elle ne sont pas une optimisation en soit (mais peuvent aider le SGBD à optimiser la requête).

⚠ La vérification des clefs étrangères n'est pas activé par défaut sur SQLite. La commande <script type="c-sql">PRAGMA foreign_keys = ON</script> permet de l'activer.

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

<script type="c-sql">
CREATE TABLE A (
    <h>$COLS_A</h>,
    PRIMARY KEY(<h>$PK</h>)
  ) STRICT;
CREATE TABLE B (
    <h>$COLS_B</h>,
    FOREIGN KEY(<h>$FK</h>)
    REFERENCES B
  ) STRICT;
</script>

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

C'est à vous de le définir via les clauses <script type="c-sql">ON DELETE <h>$POLICY</h></script> et <script type="c-sql">ON UPDATE <h>$POLICY</h></script> sur la clef étrangère :

<sql-interactive full-reset="true">
  <span slot='select'>SELECT * FROM T3;</span>
  <span slot="options" data-pol="RESTRICT">Empêcher la suppression</span>
  <span slot="options" data-pol="CASCADE">Supprimer l'entrée</span>
  <span slot="options" data-pol="SET NULL">Mettre la colonne à NULL</span>


<script type="c-sql">
CREATE TABLE T3 (
    ID INT, A TEXT,
    FOREIGN KEY(ID) REFERENCES T1
    ON DELETE <h>$POL</h>
  ) STRICT;
INSERT INTO T3 VALUES (2, 'A');
DELETE FROM T1 WHERE ID = 2;
</script>

</sql-interactive>

- <script type="c-sql">RESTRICT</script>: empêche la modification/suppression si les valeurs sont référencées par une clef étrangère.
- <script type="c-sql">CASCADE</script> : modifie/supprime la clef étrangère lorsque des valeurs des colonnes référencées sont modifiées.
- <script type="c-sql">SET NULL|DEFAULT</script> : modifie la clef étrangère lorsque des valeurs des colonnes référencées sont modifiées.

<details>
  <summary>

### Merge : mettre à jour si existe, sinon insérer (en TD ?).
 
</summary>

En gros la problématique est d'ajouter si inexistant, et de modifier si existant.
 
On peut faire un select, puis refaire une requête pour update ou insert, mais c'est pas pratique de faire plusieurs requêtes.
 
On a des choses comme REPLACE (MySQL) supprime l'entrée si elle existe, puis ajoute la nouvelle. Sauf que s'il y a des clefs primaires référencées par des clefs étrangères ça casse tout.
 
Il faut ainsi faire cela en une seule opération.
Pour cela on a UPSERT et INSERT ON DUPLICATE KEYS UPDATE (dépend du SGBD) qui s'utilise comme INSERT et qui sont plutôt simples (vérifient si la clef primaire existe).
 
Et pour d'autres, MERGE (SQL2003), qui est plus puissant (on peut personnaliser la condition), et l'utiliser pour d'autres usages (on peut aussi supprimer).

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

<script type="c-sql">
ALTER TABLE <h>$T</h> <h>ALTER|MODIFY</h> COLUMN <h>$NAME</h> <h>$DESC</h>;
ALTER TABLE <h>$T</h> <h>ADD|DROP</h> CHECK <h>$DESC</h>;
ALTER TABLE <h>$T</h> <h>ADD|DROP</h> PRIMARY KEY (<h>$COL</h>);
ALTER TABLE <h>$T</h> <h>ADD|DROP</h> CONSTRAINST PK_<h>$T</h> PRIMARY KEY (<h>$COL[,...]</h>);
</script>

⚠ Modifier le schéma et les contraintes d'une table existante/non-vide n'est pas anodin.

</main>
    </body>
</html>