<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM1 (AdmSys)</title>
		<meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" blocking="render"></script>
    </head>
    <body class="hide_h1">
        <header></header>
        <main>

# Commandes SHELL

## Introduction

### Pourquoi administrer un système ?

L'administration d'un ordinateur a (entre autres) pour objectifs :
- d'installer et de configurer les outils nécessaire à vos usages ;
- programmer (*schedule*) et automatiser des séries d'actions (e.g. sauvegardes, générations de rapports, etc).

Dans le cadre de votre formation, ce module vous permettra :
- d'acquérir des notions de cybersécurité relatives au fonctionnement d'un ordinateur ;
- d'utiliser certains outils métiers (e.g. serveurs de calculs) ;
- personnaliser et administrer votre poste de travail ou un serveur (e.g. dans une PME).

Ce module se concentrera sur le système d'exploitation Linux. En effet, si Windows domine les parts de marchés pour les ordinateurs de bureaux (69% contre 4,5% pour Linux), Linux est majoritaire sur les serveurs (96,4%), et les mobiles (71% avec Android). Linux est aussi très utilisé comme poste de travail par les développeurs.

En effet les serveurs sont très utiles dans le cadre de vos activités (notamment pour effectuer des calculs intensifs) :
- ils restent allumés h24 7j/7, avec des protections en cas de coupures d'électricité (e.g. onduleur).
- ils ont des capacités bien supérieures à un poste de travail classique (e.g. 100+ CPU, 1To+ de RAM, etc).
- ils mutualisent des ressources (CPU/RAM/licences logicielles) entre plusieurs utilisateurs.
- ils fournissent des services sans avoir à les installer sur le poste de travail (e.g. Intranet, webmails, etc.).
- ils permettent de synchroniser des données entre plusieurs postes de travail (e.g. serveur de fichiers).
- etc.

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

La raison première est tout simplement qu'il n'y a pas nécessairement d'interfaces graphiques installées sur l'ordinateur. C'est le généralement cas pour les serveurs afin d'en économiser les ressources (GPU/CPU/RAM/réseau) et de réduire les surfaces d'attaques.

De plus, les interfaces en lignes de commandes comportent de nombreux avantages par rapport aux interfaces graphiques :
- on peut copier/coller des lignes de commandes (c'est du texte).
- les lignes de commandes sont indépendantes de la langue de l'utilisateur (i.e. pas de traductions).
- on a toute la puissance qu'offre un langage de programmation (variables, conditions, boucles, etc).
- on peut automatiser une série d'instructions en enregistrant les lignes de commandes dans un fichier (script).

## Le Shell

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

Petite nouveauté, les drapeaux (*flags*), où les paramètres sont des booléans mis à vrai ou faux en fonction de la présence de l'argument. Avec [argparse](https://docs.python.org/3/library/argparse.html), ils se déclarent ainsi :

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

💡 <script type="c-python">add_argument()</script> a de nombreux autres arguments notamment :
- <script type="c-python">help</script> pour ajouter une description au paramètre qui s'affichera dans l'usage.
- <script type="c-python">type</script> pour convertir l'argument en un type python (e.g. booléen, int, etc).
- <script type="c-python">choices</script> pour fixer les valeurs possibles pour l'argument.
- <script type="c-python">default</script> pour fixer une valeur par défaut si l'argument n'est pas fourni.
- <script type="c-python">required</script> pour indiquer si l'argument est requis.

💡 [argparse](https://docs.python.org/3/library/argparse.html) a encore bien d'autres options que vous pourrez découvrir en lisant sa documentation.

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
- <script type="c-text">\e</script> : pour le formattage du texte (cf TP).

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

## TUI, Terminal, et Shell

Term vs shell
TUI ?

Transformation des arguments

Usage du shell/terminal

## Quelques commandes de bases

### Attendus (rappeler cmd)

Objectif
- liste d'étapes : être capable de suivre rigoureusement des instruction à partir des documents fournis (sujet, cheat sheet, etc).
- pour cela comprendre les concepts sous-jacent / ce que vous faites, sans savoir tout par coeur.
- .

Il est attendu de vous que vous soyez capable de suivre de manière **rigoureuse** des instructions 

=> concept vs par coeur comment faire.
=> compétences (aide docs/cheat sheet) vs connaissances par coeur.
=> suivre instructions

## Y

xxx

Contrairement à une application graphique, qui regroupe un ensemble de fonctionnalités cohérentes, chaque commande ne fait qu'une seule chose, mais le fait bien. Par exemple, un logiciel graphique d'administration de serveurs fournira diverses fonctionnalités pour e.g. :
- obtenir la liste des serveurs ;
- obtenir l'état d'un serveur donné ;
- démarrer un serveur donné ;
- mettre à jour un serveur ;
- etc.

=> pareil que fonctions.
Dans le cadre d'une interface en ligne de commande, chacune de ces fonctionnalités correspondra à une commande. Il est alors possible d'automatiser une série d'actions, e.g. démarrer, mettre à jour, puis éteindre un serveur donné :

<script type="c-python">
    sid = 1

    server_start (sid)
    server_update(sid)
    server_stop  (sid)
</script>


-> chaîner et paramétrer (pas vu ici). => S4 Test et auto en prog.

-> ajouter une option aisée :
    --x -x
    doc.
    dictionnaire associatif
    et traiter.
    pas de mise en page, d'écran trop chargé ou autre.

## X

💡 Pour effectuer certaines actions, un executable peut utiliser des bibliothèques, mais aussi appeler d'autres commandes :

<script type="c-python">
    # Dans un script Python, exécuter la ligne de commande "foo 1 2 3".
    print( shell_exec("foo 1 2 3") )
</script>

<details>
    <summary>Cliquez pour afficher l'implémentation de <script type="c-python">shell_exec()</script></summary>
    <script type="c-python">
        from subprocess import run
        #
        def shell_exec(cmd, input=None,  env=None):
            return run(cmd, input=input, env=env,
                        executable="/usr/bin/bash",
                        capture_output=True, text=True, shell=True, check=True)
    </script>
</details>

### Réécritures de la ligne de commande (alias + tard)

Avant d'exécuter la ligne de commande, le shell (Bash) procède éventuellement à quelques réécritures de la ligne de commande. La commande <script type="c-bash">set -x</script> permet d'afficher la ligne de commande réellement exécutée (<script type="c-bash">set +x</script> pour annuler) :
<script type='c-shell'>
$ set -x
$ foo a b
+ foo a b
</script>

💡 <script type="c-bash">set -x</script> est aussi utilisé pour déboguer les scripts shell, en affichant l'execution du script pas à pas.

Cela est par exemple le cas lorsqu'on utilise des *alias*, 

- alias (unalias) + liste

</main>
    </body>
</html>