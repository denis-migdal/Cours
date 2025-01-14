<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM3 (TW)</title>
		<meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" blocking="render"></script>
    </head>
    <body class="hide_h1">
        <header></header>
        <main>
<img
  src="https://queue.simpleanalyticscdn.com/noscript.gif?timezone=Europe%2FAmsterdam&unique=false"
  referrerpolicy="no-referrer-when-downgrade"
  alt=""
/>

# Commandes SHELL

## Pourquoi administrer un système ?

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

## Les lignes de commande

### La ligne de commande

Une ligne de commande est une manière de formuler, par le biais d'une ligne de texte, une instruction à exécuter. Elle est assimilable à l'appel d'une fonction, avec :
- une **commande** à exécuter ;
- des **arguments** passés en paramètres de la commande.

🕮 Les **arguments** sont les *valeurs* qu'on transmets (appel) aux **paramètres** d'une commande/fonction (définition).

Sa syntaxe est cependant différente des appels de fonction dont vous avez l'habitude en R ou en Python. En effet, les différents éléments ne sont pas séparés par une virgule, mais par un espace :
- <i>Fonction python :</i> <script type="c-python">foo(1, 2, 3)</script> ;
- <i>Ligne de commande :</i> <script type="c-bash">foo 1 2 3</script>.

Quand l'ordinateur interprète une ligne de commande, il exécute la commande indiquée par le premier élément, en lui transmettant ses arguments sous la forme d'une liste. En soit, une commande n'est rien de plus qu'un exécutable (script ou programme). Vous pouvez ainsi écrire une commande en Python, et lui faire-faire ce que vous souhaitez :

<script type="c-python">
    import sys

    print('args', sys.argv) # liste des arguments de la ligne de commande.
</script>

⚠ <script type="c-python">sys.argv[0]</script> est le nom de la commande.

🕮 Un **script** est un fichier texte *interprété* (e.g. Python), quand un **programme** est un fichier *compilé* (e.g. C/C++).

### Pourquoi les lignes de commandes ?

On distingue 3 manières d'intéragir avec un ordinateur :
- **CLI** : interface *en lignes de commande* (*Command Line Interface*) ;
- **GUI** : interface *graphique* (*Graphical User Interface*) ;
- **TUI** : interface *textuelle* (*Text-based User Interface*).

-> no code

-> création + exhaustivité.

-> automatiser (programmer/reproduire/paramétrer - valeurs conditions loops) (si pas prévu) [possible ma casse gueule/couille] / non-interactif.
    -> série d'instruction : une manière de les représenter.

-> création => plus rapide de créer une commande qu'une interface graphique (+ergonomie, dispositions).
-> automatiser (pour ensuite éventuellement programmer) ;
    -> manière d'enregistrer ces opérations -> donc un langage -> donc on se mort la queue.
-> liberté des options (difficile de faire des GUI exhaustives) ;
-> chaîner des programmes différents (pas vu ici) [prendre sortie de l'un en entrée d'un autre]

-> multiple commandes : une commande fait une chose et une seule, et le fait bien.

.

-> pas dispo (e.g. serveur)
    -> surface atk
    -> ressources (CPU/RAM) + network (txt vs image)

### TUI, Terminal, shell, et lignes de commandes

+ TUI

### Attendus (rappeler cmd)

Objectif
- liste d'étapes : être capable de suivre rigoureusement des instruction à partir des documents fournis (sujet, cheat sheet, etc).
- pour cela comprendre les concepts sous-jacent / ce que vous faites, sans savoir tout par coeur.
- .

Il est attendu de vous que vous soyez capable de suivre de manière **rigoureuse** des instructions 

=> concept vs par coeur comment faire.
=> compétences (aide docs/cheat sheet) vs connaissances par coeur.
=> suivre instructions



</main>
    </body>
</html>