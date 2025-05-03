<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM1 (AdminSys)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/slides/index.css"  rel="stylesheet">
        <script  src="/skeleton/slides/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

<frame-uca-title
    caption   = "R2-14 Administration Système"
    subcaption= "CM1 : Commandes Shell"
    author    = "Denis MIGDAL"
    mail      = "denis.migdal@uca.fr">
</frame-uca-title>

<frame-section id="intro" name="Introduction">
    <frame-subsection id="motivation" name="Pourquoi administrer un système ?">

<frame-uca>
<div>

Administrer un ordinateur permet de :
- installer/configurer des outils ;
- programmer (*schedule*) et automatiser, *e.g. sauvegardes, générations de rapports*.

</div><div>

Ce module se concentrera sur le système d'exploitation Linux :
- poste de travail des développeurs ;
- très présent sur les serveurs (96,4%).

</div>
</frame-uca>

<frame-subsection id="attentes" name="Attentes et objectifs du module">

<frame-uca>

<div>

Objectifs du module :
- notions de cybersécurité sur le fonctionnement des ordinateurs ;
- administrer et personnaliser un poste de travail/serveur ;
- présentations d'outils métiers, *e.g. serveurs de calculs*, *accès à distance*.
</div><div>

Attentes :
- comprendre les concepts du module ;
- être capable de suivre des instructions avec rigueur et méthode ;
- être capable d'exploiter les documents fournis, *e.g. cheat sheet*.
</div>

</frame-uca>

        </frame-subsection>
        <frame-subsection id="repl" name="REPL et scripts">
<frame-uca>

<div>

- **interpreteur** : logiciel interprétant des instructions textuelles (e.g. <script type="c-text">python3</script>, <script type="c-text">sqlite3</script>). Deux modes :
  - **scripts** : instructions dans un fichier (e.g. <script type="c-text">.py</script>);
  - **REPL** (*Read-Eval-Print Loop*) : instructions lues ligne par ligne :

<div class="flex-2">
    <script type="c-text">
        sqlite> SELECT 1+1 as result;
        ┌────────┐
        │ result │
        ├────────┤
        │ 2      │
        └────────┘
        sqlite> 
    </script>
    <script type="c-python">
        >>> print("Hello")
        Hello
        >>> 
    </script>
</div>

</div>

<div>

En administration système :
- langage **Shell**, interpréteur <script type="c-bash">bash</script> ;
  - *interface en lignes de commande* (*CLI*) : l'interface REPL ;
  - *invite de commande* (*prompt*) : l'invite ;
  - *ligne de commande* : ligne d'instruction lue par l'interpréteur.
</div>

</frame-uca>
        </frame-subsection>
        <frame-subsection id="why-cli" name="Pourquoi les lignes de commandes ?">
<frame-uca>

<div>

3 manières d'intéragir avec un ordinateur :
- **CLI** : interface *en lignes de commande* (*Command Line Interface*) ;
- **GUI** : interface *graphique* (*Graphical User Interface*) ;
- **TUI** : interface *textuelle* (*Text-based User Interface*).
</div><div>

Avantages des CLI par rapport GUI :
- possibilité de copier/coller des instructions (c'est du texte).
- automatisation avec des scripts (fichier contenant des lignes de commandes).
- langage de programmation (variables, conditions, boucles, etc).
- interface plus rapide/simple à concevoir.
- serveurs sans interfaces graphiques (réduit surface d'attaque, économise ressources).
</div>

</frame-uca>
        </frame-subsection>
        <frame-subsection id="servers" name="Les serveurs">

<frame-uca>

<div>

Les **serveurs** (*matériel*) sont des ordinateurs fournissant un **service** (*logiciel*) :
<ul class="flex-2">
    <li> serveur Web</li>
    <li> serveur de messagerie</li>
    <li> serveurs d'applications, <em>e.g. Office 365</em></li>
    <li> serveur de calculs</li>
</ul>
</div>

💡 **serveur** peut aussi faire référence au logiciel.

<div>

Avantage des serveurs :
- **disponibilité** : h24 7j/7, protections *e.g. onduleurs*.
- **performances** : e.g. 100+ CPU, 1To+ de RAM, etc.
- **mutualisation des ressources** entre plusieurs utilisateurs.
- **services sans installation** sur les postes de travail, *e.g. Intranet, webmails, etc.*
- **synchronisation de données** entre plusieurs postes de travail, *e.g. serveur de fichiers*.
</div>

</frame-uca>

</frame-section>

<frame-section name="Le Shell" id="shell">
    <frame-subsection name="L'invite de commande" id="invite">
<frame-uca>

<div>

L'invite de commande (ou *prompt*) :
- indique que l'utilisateur peut saisir une nouvelle ligne de commande.
- affiche des informations (personnalisable).
</div>

<div class="terminal">
<pre><font color="#4CE64C"><b>demigda@demigda-Latitude-5400</b></font>:<font color="#295FCC"><b>~</b></font>$ echo &quot;Hello&quot;
Hello
<font color="#4CE64C"><b>demigda@demigda-Latitude-5400</b></font>:<font color="#295FCC"><b>~</b></font>$</pre>
</div>
<div>

L'invite <script type="c-shell">demigda@demigdal-Latitude-5400:\~$</script> indique ainsi :
  <div><ul class="flex-2">
    <li>le nom de l'<b>utilisateur</b> (<script type="c-shell">demigda</script>)</li>
    <li>le nom de l'<b>ordinateur</b> (<script type="c-shell">demigdal-Latitude-5400</script>)</li>
    <li>le <b>répertoire</b> actuel (<script type="c-shell">~</script>), cf CM2.</li>
  </ul></div>
  <br/>
  💡 <script type="c-shell">@</script> se lit "at" en anglais et indique un lieu.
</div>

</frame-uca>
    </frame-subsection>
    <frame-subsection name="La ligne de commande" id="command-line">
<frame-uca>

<div>
Ligne de commande = instruction à exécuter (≈ appel d'une fonction), avec :
    <ul>
        <li>une <b>commande</b> (≈ une fonction) à exécuter ;</li>
        <li>des <b>arguments</b> passés en <b>paramètres</b>.</li>
    </ul>
</div>

<table>
    <thead>
        <tr>
            <th>Fonction python :</th><th>Ligne de commande :</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><center><script type="c-python">foo(1, 2, 3)</script></center></td>
            <td><center><script type="c-bash">foo 1 2 3</script></center></td>
        </tr>
    </tbody>
</table>

<div>
Différences syntaxiques :
    <ul class="flex-2">
        <li>pas de parenthèses ;</li>
        <li mark="🕮"><b>argument</b> = <i>valeur</i> qu'on transmet (appel).</li>
        <li>arguments séparés par un espace.</li>
        <li mark="🕮"><b>paramètre</b> = <i>variable</i> manipulée (définition).</li>
    </ul>
</div>
</frame-uca>
    </frame-subsection>
    <frame-subsection name="Les commandes" id="command">
<frame-uca>

<div>

Commande = *exécutable* (script ou programme), *e.g. un script Python* :

<div class="flex-2">
    <script type="c-python">
        #!/usr/bin/env -S python3
        import sys
        # liste des arguments reçus :
        print('args', sys.argv)
    </script>
    <div>
        <script type="c-shell">
            $ foo 1 2 3
            args ['foo', '1', '2', '3']
        </script>
        ⚠ <script type="c-python">sys.argv[0]</script> est le nom de la commande.
    </div>
</div>
</div><div>

🕮 **Shebang** : indique à l'ordinateur l'interpréteur à utiliser (ici <script type="c-bash">python3</script>).
<script type="c-python">
    #!/usr/bin/env -S python3
</script>
<i>Syntaxe :</i>
<script type="c-python">
    #!/usr/bin/env -S <h>$INTERPRETEUR</h> <h>[$INTERPRETEUR_ARGS...]</h>
</script>
</div>
</frame-uca>
    </frame-subsection>
    <frame-subsection name="Les arguments" id="arguments">
<frame-uca>

La <b>commande</b> reçoit les arguments sous la forme d'un <b>tableau</b>, et les interprète <b>arbitrairement</b>.

<div>

💡 Les bibliothèques comme [argparse](https://docs.python.org/3/library/argparse.html) (Python) fournissent diverses fonctionnalités :
- interprétation des arguments (*arguments parsing*) ;
- détection et affichage des erreurs d'usage ;
- génération automatique de la documentation.
</div>

<div>
Il suffit alors de déclarer les arguments, la bibliothèque se charge du reste :

<script type="c-python">
    import sys
    from argparse import ArgumentParser

    parser = ArgumentParser()

    <h>déclaration des arguments</h>

    args = parser.parse_args(sys.argv[1:])
    print(args) # les arguments après interprétation
</script>
</div>
</frame-uca><frame-uca>

<div>
Différents types d'arguments/paramètres :
<ul>
    <li><b>positionnels</b> : paramètre déterminé par la <b>position</b> de l'argument.
    <div class="flex-2">
        <script type="c-shell">
            $ foo 1 2
            Namespace(src='1', dst='2')
        </script>
        <script type="c-python">
            parser.add_argument("src")
            parser.add_argument("dst")
        </script>
    </div>
    </li>
    <li><b>nommés</b> : paramètre déterminé par le <b>nom</b> de l'argument (<script type="c-bash">--<h>$NAME</h> <h>$VALUE</h></script> ou <script type="c-bash">--<h>$NAME</h>=<h>$VALUE</h></script>).
    <div class="flex-2">
        <script type="c-shell">
            $ foo --fuu 42 --faa=toto
            Namespace(faa='toto', fuu='42')
        </script>
        <script type="c-python">
            parser.add_argument("--faa")
            parser.add_argument("--fuu")
        </script>
    </div>
    </li>
    <li>
    les <b>drapeaux</b> (<i>flags</i>) : paramètre booléen dont la valeur dépend de la présence de l'argument.
    <div class="flex-2">
        <script type="c-shell">
            $ foo --list
            Namespace(list=True, human=False)
            $ foo --list --human
            Namespace(list=True, human=True)
        </script>
        <script type="c-python">
            parser.add_argument("-l", "--list",
                                action="store_true")
            parser.add_argument("-h", "--human",
                                action="store_true")
        </script>
    </div>
    </li>
    <li mark="💡">Il est possible de fusionner les drapeaux d'une lettre : 
        <script type="c-shell">foo -l -H</script> = <script type="c-shell">foo -lH</script>.
    </li>
</ul>
</div>

</frame-uca>
<frame-uca>

<div>
Une fois les paramètres déclarés, l'argument <script type="c-bash">--help</script> permet d'en afficher l'usage :

<script type="c-shell">
$ foo --help
usage: foo [-h] [--faa FAA] [--fuu FUU] [-l] [-H] src dst

positional arguments:
    src
    dst

options:
    -h, --help   show this help message and exit
    --faa FAA
    --fuu FUU
    -l, --list
    -H, --human
</script>

💡 <script type="c-text">[]</script> = argument facultatif.

⚠ À l'inverse de Python, les arguments nommés sont usuellement écrits <b>avant</b> les arguments positionnels.
</div>

💡 [argparse](https://docs.python.org/3/library/argparse.html) a encore bien d'autres options que vous pourrez découvrir en lisant sa documentation.
</frame-uca>
</frame-subsection>

</frame-section>

<frame-section name="Réécritures de la ligne de commande" id="rewrites">
    <frame-subsection name="Espaces dans les arguments" id="spaces">
    <frame-uca></frame-uca>
    </frame-subsection>
    <frame-subsection name="Alias" id="alias">
    <frame-uca></frame-uca>
    </frame-subsection>
</frame-section>

<frame-section name="Le terminal" id="terminal">
    <frame-subsection name="Shell vs Terminal">
<frame-uca>

- *Shell* : programme qui **interpréte** et **exécute** les commandes shell.

- *Terminal* (ou *console*) : interface graphique entre l'utilisateur et le Shell.

🕮 Les premiers ordinateurs avaient la taille d'une pièce (e.g. 160m²). Des consoles constituées d'un clavier et d'un écran (≈ terminal) permettaient d’interagir avec l'ordinateur mainframe (≈ shell).

</frame-uca>
        </frame-subsection>
        <frame-subsection name="CLI vs TUI">
<frame-uca>

- **CLI** (*Command-Line Interface*) : lignes de commande.
- **TUI** (*Terminal User Interface*) : interactif avec clavier et souris (pas standard, + ergonomique).

<div class='flex-2'>
    <div>
        <center>
            <strong>CLI</strong> (commande <script type="c-bash">tree</script>)
        </center>
        <img src="../../../../assets/admsys/img/cli-example.png"/>
    </div>
    <div>
        <center>
            <strong>TUI</strong> (commande <script type="c-bash">gdu</script>)
        </center>
        <img src="../../../../assets/admsys/img/tui-example.png"/>
    </div>
</div>

</frame-uca>
        </frame-subsection>
        <frame-subsection name="Utilisation du terminal">
<frame-uca>

⚠ Recopies à la main ⇒ erreurs et fautes de frappe.

- **Copier-coller** : <script type="c-text">^+⇧+C</script> et <script type="c-text">^+⇧+V</script> ou clic-milieu/molette de la souris.<br/>
  ⚠ <script type="c-text">^+C</script> arrête la commande en cours d'exécution.<br/><br/>
- **Auto-complétion** des commandes et chemins : <script type="c-text">⭾</script>.<br/>
  💡 <script type="c-text">⭾+⭾</script> pour affiches les possibilités.<br/><br/>
- **Historique** : <script type="c-text">↑</script> ou <script type="c-text">↓</script> pour naviguer dans l'historique des lignes de commandes (et les réexécuter) .<br/>
  💡 <script type="c-text">←</script> ou <script type="c-text">→</script> pour  modifier la ligne de commande.<br/><br/>



</frame-uca>
    </frame-subsection>
    <frame-subsection name="Quelques commandes utiles" id="utils">
<frame-uca>

<div>

**La documentation :**

- <script type="c-bash">man  <h>$CMD</h></script> (<u>man</u>uel) : affiche la documentation de la commande <script type="c-bash"><h>$CMD</h></script>.
- <script type="c-bash">tldr <h>$CMD</h></script> (<u>t</u>oo <u>l</u>ong : <u>d</u>idn't <u>r</u>ead) : version simplifiée de <script type="c-bash">man</script>.
- <script type="c-bash">help <h>$CMD</h></script> : affiche la liste des commandes internes de bash.

</div><div>

**Le terminal :**

- <script type="c-bash">clear</script> : replace l'invite de commande en haut de la fenêtre.
- <script type="c-bash">reset</script> : efface complètement le contenu du terminal.
- <script type="c-bash">exit</script> : quitte le terminal.

</div><div>

**L'historique :**

- <script type="c-bash">history</script> : affiche l'historique des dernières lignes de commandes exécutées.
- <script type="c-bash">!!</script> : réexécuter la dernière commande entrée.
- <script type="c-bash">!<h>$CMD</h></script> : réexécute la dernière commande <script type="c-bash"><h>$CMD</h></script> entrée.

</div>
</frame-uca>
    </frame-subsection>
</frame-section>
<frame-section name="Accès à distance" id="ssh">
    <frame-uca>    
    </frame-uca>
</frame-section>

        </main>
    </body>
</html>