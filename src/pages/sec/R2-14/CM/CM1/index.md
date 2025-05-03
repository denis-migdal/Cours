<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM1 (AdminSys)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/index.css"  rel="stylesheet">
        <script  src="/skeleton/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# Commandes SHELL

## Introduction

### Pourquoi administrer un serveur ?

L'administration d'un ordinateur a (entre autres) pour objectifs :
- d'installer et de configurer les outils nécessaire à vos usages ;
- programmer (*schedule*) et automatiser des séries d'actions (e.g. sauvegardes, générations de rapports, etc).

Ce module se concentrera sur le système d'exploitation Linux. En effet, si Windows domine les parts de marchés pour les ordinateurs de bureaux (69% contre 4,5% pour Linux), Linux est majoritaire sur les serveurs (96,4%), et les mobiles (71% avec Android). Linux est aussi très utilisé comme poste de travail par les développeurs.

### Attentes et objectifs du module

Dans le cadre de votre formation, ce module vous permettra :
- d'acquérir des notions de cybersécurité relatives au fonctionnement d'un ordinateur ;
- administrer et personnaliser votre poste de travail ou un serveur (e.g. dans une PME) ;
- d'utiliser certains outils métiers (e.g. serveurs de calculs).

Dans le cadre de ce module, il ne vous sera pas demandé de retenir les étapes de configurations par coeur, mais d'être capable de suivre des séries d'instructions, en comprenant ce que vous faites, leur effets et raisons. Vous devrez ainsi :
- comprendre les différents concepts présentés dans ce module ;
- être capable d'exploiter les documents fournis (e.g. cheat sheet) ;
- faire preuve de rigueur et de méthode.

### REPL et scripts

Dans le cadre de vos cours précédents, vous avez déjà manipulé plusieurs langages de scripts (R, Python, SQL). Vous utilisiez alors un interpréteur (Rscript, python3, sqlite3) pour exécuter des instructions écrites dans ces langages.

En Python, vous saisissiez vos instructions dans un fichier <script type="c-text">.py</script> qui était lu et exécuté par l'interpréteur Python. On parlait alors de *script Python*.

En revanche, en SQL, vous utilisiez une interface *REPL* (*Read-Eval-Print Loop*). Vous écriviez alors une ligne que sqlite3 lisait (*read*), interprétait (*eval*), puis vous en affichait le résultat (*print*). Après chaque exécution, l'interpréteur vous affichait une **invite** (ici <script type="c-text">sqlite> </script>) pour vous indiquer que vous pouviez saisir une nouvelle instruction :

<script type="c-text">
    sqlite> SELECT 1+1 as result;
    ┌────────┐
    │ result │
    ├────────┤
    │ 2      │
    └────────┘
    sqlite> 
</script>

Les interpréteurs supportent bien souvent ces deux modes (scripts et REPL). Il est par exemple tout à fait possible de donner un fichier SQL à sqlite3, ou de lancer python3 en mode REPL :

<script type="c-python">
    >>> print("Hello")
    Hello
</script>

Pour administrer un système Linux, on utilise principalement *Shell* (un autre langage de script), avec l'interpréteur shell *Bash*. Comme pour les autres langages de script, il est possible de l'utiliser avec des *scripts Shell*, mais aussi via une interface REPL.

Cependant, le vocabulaire sera légèrement différent. On parlera de :
- *ligne de commande* pour la ligne saisie puis lue par l'interpréteur ;
- *invite de commande* (*prompt*) pour l'invite ;
- *interface en lignes de commande* (*CLI*) pour l'interface REPL.

### Pourquoi les lignes de commandes ?

On distingue 3 manières d'intéragir avec un ordinateur :
- **CLI** : interface *en lignes de commande* (*Command Line Interface*) ;
- **GUI** : interface *graphique* (*Graphical User Interface*) ;
- **TUI** : interface *textuelle* (*Text-based User Interface*).

Pourquoi donc administrer un ordinateur en lignes de commande, plutôt que d'utiliser une interface graphique ?

Les interfaces en lignes de commandes comportent de nombreux avantages par rapport aux interfaces graphiques :
- on peut copier/coller des lignes de commandes (c'est du texte).
- les lignes de commandes sont indépendantes de la langue de l'utilisateur (i.e. pas de traductions).
- on a toute la puissance qu'offre un langage de programmation (variables, conditions, boucles, etc).
- on peut automatiser une série d'instructions en enregistrant les lignes de commandes dans un fichier (script).

Une autre raison est tout simplement que l'ordinateur n'a pas nécessairement d'interface graphique installée. C'est généralement le cas pour les serveurs, afin d'en économiser les ressources (GPU/CPU/RAM/réseau) et de réduire les surfaces d'attaques.

### Les serveurs

Les **serveurs** sont des ordinateurs fournissant divers **services** à ses utilisateurs :
- *serveur Web* : héberge un site Web ;
- *serveur de messagerie* : permet d'envoyer et de recevoir des mails ;
- *serveurs d'applications* : permet d'utiliser des applications à distances, sans installations, *e.g. Office 365*.
- *serveur de calculs* : permet d'effectuer des calculs longs et intensifs.

💡 Le terme **service** fait référence au *logiciel*, quand le terme **serveur** peut faire référence au *matériel* ou au *logiciel*.

Les serveurs sont très utiles dans le cadre de vos activités (notamment pour effectuer des calculs intensifs) :
- ils restent allumés h24 7j/7, avec des protections en cas de coupures d'électricité (e.g. onduleur).
- ils ont des capacités bien supérieures à un poste de travail classique (e.g. 100+ CPU, 1To+ de RAM, etc).
- ils mutualisent des ressources (CPU/RAM/licences logicielles) entre plusieurs utilisateurs.
- ils fournissent des services sans avoir à les installer sur le poste de travail (e.g. Intranet, webmails, etc.).
- ils permettent de synchroniser des données entre plusieurs postes de travail (e.g. serveur de fichiers).
- etc.

## Le Shell

### L'invite de commande

L'invite de commande (ou *prompt*) indique que l'utilisateur peut saisir une ligne de commande. Elle se termine généralement par <script type="c-shell">$</script> ou <script type="c-shell">#</script>, et peut être personnalisée. Par exemple <script type="c-shell">demigda@demigdal-Latitude-5400:~$</script> indique :
- l'utilisateur (<script type="c-shell">demigda</script>) ;
- le nom de l'ordinateur (<script type="c-shell">demigdal-Latitude-5400</script>) ;
- le répertoire actuel (<script type="c-shell">~</script>), cf CM2.

💡 <script type="c-shell">@</script> se lit "at" en anglais et indique un lieu. Par exemple une adresse mail <script type="c-text">denis.migdal@uca.fr</script> signifie *"le compte <script type="c-text">denis.migdal</script> qui se trouve sur le serveur <script type="c-text">uca.fr</script>"*.

### La ligne de commande

Une ligne de commande est une manière de formuler, par le biais d'une ligne de texte, une instruction à exécuter. Elle est assimilable à l'appel d'une fonction, avec :
- une **commande** à exécuter (≈ une fonction à exécuter) ;
- des **arguments** passés en paramètres de la commande.

🕮 Les **arguments** sont les *valeurs* qu'on transmets (appel) aux **paramètres** d'une commande/fonction (définition).

Sa syntaxe est cependant différente des appels de fonction dont vous avez l'habitude en R ou en Python. En effet, les différents éléments ne sont pas séparés par une virgule, mais par un espace :
- <i>Fonction python :</i> <script type="c-python">foo(1, 2, 3)</script> ;
- <i>Ligne de commande :</i> <script type="c-bash">foo 1 2 3</script>.

Quand l'ordinateur interprète une ligne de commande, il exécute la commande indiquée par le premier élément, en lui transmettant les arguments sous la forme d'une liste.

### Les commandes

En soit, une commande n'est rien de plus qu'un exécutable (i.e. un script ou un programme). Vous pouvez ainsi créer une commande en écrivant un simple script Python :

<script type="c-python">
    #!/usr/bin/env -S python3
    import sys

    print('args', sys.argv) # liste des arguments de la ligne de commande.
</script>

⚠ <script type="c-python">sys.argv[0]</script> est le nom de la commande.

<script type="c-shell">
    $ foo 1 2 3
    args ['foo', '1', '2', '3']
</script>

Vous noterez la première ligne un peu bizarre du script :
<script type="c-python">
    #!/usr/bin/env -S python3
</script>

Cette ligne est le **Shebang**. Il permet d'indiquer à l'ordinateur quel interpréteur utiliser pour exécuter le script (ici python3).<br/>
Il est aussi possible d'indiquer des arguments à transmettre à l'interpréteur :
<script type="c-python">
    #!/usr/bin/env -S <h>$INTERPRETEUR</h> <h>[$INTERPRETEUR_ARGS...]</h>
</script>

### Les arguments

Comme nous l'avons vu, une commande reçoit ses différents arguments sous la forme d'un tableau. Elle peut ensuite les interpréter de manière totalement arbitraire.

Il est cependant préférable d'utiliser une bibliothèque dédiée (e.g. [argparse](https://docs.python.org/3/library/argparse.html) en Python) qui fournira diverses fonctionnalités :
- interprétation des arguments (*arguments parsing*) ;
- détection et affichage des erreurs dans l'usage de la commande ;
- génération automatique de la documentation de la commande.

Il suffit alors de déclarer les différents arguments de la commande et la bibliothèque se chargera alors du reste :

<script type="c-python">
    import sys
    from argparse import ArgumentParser

    parser = ArgumentParser()

    # déclarer ici les arguments de la commande

    args = parser.parse_args(sys.argv[1:])
    print(args) # les arguments après interprétation
</script>

Les arguments/paramètres **positionnels** suivent le même principe qu'en Python : le i-ème argument positionnel est mis dans le i-ème paramètre positionnel. Avec [argparse](https://docs.python.org/3/library/argparse.html), ils se déclarent ainsi :

<div class="flex-2">
    <script type="c-python">
        parser.add_argument("src")
        parser.add_argument("dst")
    </script>
    <script type="c-shell">
        $ foo 1 2
        Namespace(src='1', dst='2')
    </script>
</div>

De même, les arguments/paramètres **nommés** fonctionnent de la même manière qu'en Python. Ils ont cependant une syntaxe différente : <script type="c-bash">--<h>$NAME</h> <h>$VALUE</h></script> ou <script type="c-bash">--<h>$NAME</h>=<h>$VALUE</h></script>. Avec [argparse](https://docs.python.org/3/library/argparse.html), ils se déclarent ainsi :

<div class="flex-2">
    <script type="c-python">
        parser.add_argument("--faa")
        parser.add_argument("--fuu")
    </script>
    <script type="c-shell">
        $ foo --fuu 42 --faa=toto
        Namespace(faa='toto', fuu='42')
    </script>
</div>

Petite nouveauté, les <b>drapeaux</b> (*flags*), où les paramètres sont des booléens mis à vrai ou faux en fonction de la présence de l'argument. Avec [argparse](https://docs.python.org/3/library/argparse.html), ils se déclarent ainsi :

<div class="flex-2">
    <script type="c-python">
        parser.add_argument("--list",
                            action="store_true")
        parser.add_argument("--human",
                            action="store_true")
    </script>
    <script type="c-shell">
        $ foo --list
        Namespace(list=True, human=False)
        $ foo --list --human
        Namespace(list=True, human=True)
    </script>
</div>

Il est aussi possible d'associer une lettre à un paramètre. Il est alors possible de fusionner les arguments de drapeaux :

<div class="flex-2">
    <script type="c-python">
        parser.add_argument("-l", "--list",
                            action="store_true")
        parser.add_argument("-H", "--human",
                            action="store_true")
    </script>
    <script type="c-shell">
        $ foo -l
        Namespace(list=True, human=False)
        $ foo -lH
        Namespace(list=True, human=True)
    </script>
</div>

Une fois les paramètres déclarés, vous pouvez alors utiliser la commande et en afficher l'usage :

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

💡 <script type="c-text">[]</script> indique le caractère facultatif d'un argument.

⚠ À l'inverse de Python, les arguments nommés sont usuellement écrits <b>avant</b> les arguments positionnels.

💡 <script type="c-python">add_argument()</script> a de nombreux autres arguments notamment :
- <script type="c-python">help</script> pour ajouter une description au paramètre qui s'affichera dans l'usage.
- <script type="c-python">type</script> pour convertir l'argument en un type python (e.g. booléen, int, etc).
- <script type="c-python">choices</script> pour fixer les valeurs possibles pour l'argument.
- <script type="c-python">default</script> pour fixer une valeur par défaut si l'argument n'est pas fourni.
- <script type="c-python">required</script> pour indiquer si l'argument est requis.

💡 [argparse](https://docs.python.org/3/library/argparse.html) a encore bien d'autres options que vous pourrez découvrir en lisant sa documentation.

## Réécritures de la ligne de commande

### Les alias

<mark>todo</mark>
<mark>set -x (b4 espaces ?)</mark>


Avant d'exécuter la ligne de commande, le shell (Bash) procède éventuellement à quelques réécritures de la ligne de commande. La commande <script type="c-bash">set -x</script> permet d'afficher la ligne de commande réellement exécutée (<script type="c-bash">set +x</script> pour annuler) :
<script type='c-shell'>
$ set -x
$ foo a b
+ foo a b
</script>

💡 <script type="c-bash">set -x</script> est aussi utilisé pour déboguer les scripts shell, en affichant l'execution du script pas à pas.

Cela est par exemple le cas lorsqu'on utilise des *alias*, 

- alias (unalias) + liste

### Espaces dans les arguments

Pour inclure un espace dans un argument, il convient de soit les échapper, soit de mettre le texte entre guillements simples :
<script type="c-shell">
$ foo 'a b' c\ d
Namespace(src='a b', dst='c d')
</script>

💡 Il est aussi possible de ne mettre qu'une partie de l'argument entre guillements :
<script type="c-shell">
$ foo a' 'b c\ d
Namespace(src='a b', dst='c d')
</script>

💡 <script type="c-bash">$'<h>$TXT</h>'</script> permet d'interpréter les caractères échappés, e.g. :
- <script type="c-text">\n</script> : retour à la ligne ;
- <script type="c-text">\t</script> : tabulation ;
- <script type="c-text">\e</script> : pour le formattage du texte (cf TP1).

<script type="c-python">
    # commande faa :
    print( sys.argv[1] )
</script>

<div class="flex-2">
    <script type="c-shell">
        $ faa '-\n\t-'
        -\n\t-
    </script>
    <script type="c-shell">
        $ faa $'-\n\t-'
        -
	        -
    </script>
</div>

## Le terminal

### Shell vs Terminal

- Le *Shell* est le programme qui va **interpréter** et **exécuter** les commandes shell que vous entrerez.

- Le *Terminal* (ou *console*) est l'interface graphique qui permet de faire le lien entre l'utilisateur et le Shell. Il vous permet d'écrire des *lignes de commandes* qui seront envoyées au *Shell*, puis d'en visualiser le résultat.

🕮 Historiquement, les premiers ordinateurs avaient la taille d'une pièce (e.g. 160m²). Des consoles constituées d'un clavier et d'un écran permettaient d’interagir avec l'ordinateur (mainframe). Vous pouvez voir le shell comme le mainframe, et le terminal comme la console permettant d'interagir avec le mainframe.

### CLI vs TUI

Vous pouvez utiliser deux types d'interfaces au sein d'un terminal :
- **CLI** (*Command-Line Interface*) : lignes de commande.
- **TUI** (*Terminal User Interface*) : interactif, avec le clavier et la souris.

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

💡 Les interfaces TUI sont moins "standard", mais sont plus ergonomiques. Dans le cadre de ce module, et afin de faciliter votre apprentissage, nous essayerons de proposer des alternatives ergonomique lorsque possible.

### Utilisation du terminal

Recopier à la main des commandes est sources d'erreurs et de fautes de frappe. Il convient d'utiliser autant que possible les 3 fonctionnalités suivantes :

- **Copier-coller** le texte sélectionné :<br/>
  ⚠ Copier (<script type="c-text">^+⇧+C</script>) et Coller (<script type="c-text">^+⇧+V</script>) s'effectuent avec un <script type="c-text">⇧</script>.<br/>
  💡 Le clic-milieu ou clic-molette de la souris copie/colle le texte sélectionné.
- **Auto-complétion** des commandes et chemins (<script type="c-text">⭾</script>).<br/>
  💡 <script type="c-text">⭾+⭾</script> affiche les différentes possibilités d'auto-complétion.
- **Historique** : <script type="c-text">↑</script> ou <script type="c-text">↓</script> permettent de naviguer parmi l'historique des lignes de commandes tapées (et potentiellement de les réexécuter).<br/>
  💡 <script type="c-text">←</script> ou <script type="c-text">→</script> permettent ensuite de modifier la ligne de commande.


⚠ <script type="c-text">^+C</script> permet d'arrêter une commande en cours d'exécution.

### Quelques commandes utiles

#### La documentation

- <script type="c-bash">man  <h>$CMD</h></script> (<u>man</u>uel) : affiche la documentation de la commande <script type="c-bash"><h>$CMD</h></script>.
- <script type="c-bash">tldr <h>$CMD</h></script> (<u>t</u>oo <u>l</u>ong : <u>d</u>idn't <u>r</u>ead) : version simplifiée de <script type="c-bash">man</script>.
- <script type="c-bash">help <h>$CMD</h></script> : affiche la liste des commandes internes de bash.

#### Le terminal

- <script type="c-bash">clear</script> : replace l'invite de commande en haut de la fenêtre.
- <script type="c-bash">reset</script> : efface complètement le contenu du terminal.
- <script type="c-bash">exit</script> : quitte le terminal.

#### L'historique

- <script type="c-bash">history</script> : affiche l'historique des dernières lignes de commandes exécutées.
- <script type="c-bash">!!</script> : réexécuter la dernière commande entrée.
- <script type="c-bash">!<h>$CMD</h></script> : réexécute la dernière commande <script type="c-bash"><h>$CMD</h></script> entrée.

## Accès à distance

Les serveurs sont usuellement installés dans une salle dédiée avec contrôle d’accès, parfois à plusieurs centaines (ou milliers) de km de votre poste de travail. Par exemple, le serveur pourrait être à Clermont-Ferrand alors que votre bureau est à Aurillac.

Bien évidement, vous n'allez pas faire l'aller-retour à Clermont-Ferrand, à chaque ligne de commande que vous souhaitez exécuter sur le serveur. Imaginez que vous deviez régulièrement intervenir sur le serveur, vous passeriez votre temps à faire l’aller-retour Aurillac/Clermont-Ferrand !

Il est ainsi nécessaire de pouvoir accéder au serveur à distance afin d’éviter de tels déplacements chronophages. Pour ce faire, on utilise **SSH** (<u>s</u>ecure <u>sh</u>ell) afin d’envoyer, via Internet, des lignes de commande au serveur, ce en à peine quelques millisecondes.


SSH suit une architecture client-serveur avec :
- un **client SSH** sur le poste de travail ;
- un **serveur SSH** sur le serveur.

Le *client SSH* permet d’initier une connexion SSH (≈ session SSH) avec le *serveur SSH*. Une fois la connexion établie, le *client SSH* peut alors envoyer des commandes shell au *serveur SSH* qui les exécutera, et en retournera le résultat.

La commande <script type="c-bash">ssh <h>$USER</h>@<h>$SERVER</h></script> initie une session SSH. Les commandes entrées par la suite sont envoyées au serveur pour être exécutées. Dans les faits, cela revient à ouvrir un terminal du serveur sur votre poste de travail :

<img src='/assets/admsys/img/scheme.svg'/>

💡 <script type="c-bash">ssh <h>$USER</h>@<h>$SERVER</h> "<h>$CMD</h>"</script> exécute la commande <script type="c-bash">CMD</script> sur le serveur, et retourne immédiatement. 


        </main>
    </body>
</html>