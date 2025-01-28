R 2-14 Administration Système

## CM1

- "Les serveurs" (reprendre début)

## X : TP

+ make_cmd (cp)

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

## ?

CM1: exécuter du code sur un serveur
    -> mais aussi pdt
    -> serveur de calculs
        -> ordonanceurs, dédié, etc.
        -> autres types de services sur le serveur (serveur [hardware vs software ~= service] vs service)
            => serveur SQL (TW ou IDN)
            => serveur Web (TW ou IDN)
            => Wiki (TW ou IDN)
            => git (e.g. gitlab/gitea)
            => de fichier (Seafile, Owncloud), etc
            => Intranet
            => serveur mail
            => etc.
            => lire et suivre les instructions pour installer et configurer...
                => docker
    -> commandes -> intérêts
    -> pkoi pas d'interfaces graphiques
    -> créer une commande (params/var d'env)
    -> fichier cd/ls/chmod +x/shebangs
    -> chemins importants
CM2: SSH
    -> accéder serveur
    -> fichiers + premier mount pour sync dossiers.
CM3: Sauvegarde
CM4: install linux + containers
    -> install autres trucs.

## Auto et test


- **Fermer l'entrée standard** : <script type="c-text">^+D</script>.