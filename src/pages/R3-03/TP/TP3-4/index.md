<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>TP3-4 (Web1)</title>
        <!--
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        -->
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="./index.css"  rel="stylesheet" blocking="render">
        <script  src="./index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# TP3-4

## TP3 : Exécuter du code côté serveur

La documentation de LISS V2 n'ayant pas été achevée, et son inclusion de fichiers `.js`/`.bry` pas encore proprement testé, vous ne l'utiliserez pas dans le cadre de cette séance de TP.

LISS v2 est déjà utilisé ailleurs, donc devrait fonctionner proprement, mais en l'absence de documentations, tests unitaires et d'exemples bac à sable, on ne va pas prendre trop de risques.

## TP4 : Serveur

### Prise en main

Vous vous servirez de :
- la documentation : https://denis-migdal.github.io/VSHS/dist/dev/pages/docs/fr/
- du bac à sable : https://denis-migdal.github.io/VSHS/dist/dev/pages/playground/

1. Téléchargez la V2 de VSHS : https://github.com/denis-migdal/VSHS/tree/V2
2. En vous servant de la documentation, lancez le serveur en mode démonstration.
3. Testez quelques exemple de la documentation/bac à sable.
4. En vous servant de la documentation, exécutez quelques requête via `curl` ou `wget` sur le serveur.

### Création des routes

1. Créez une route `/users` permettant d'accéder à la liste des utilisateurs (pour le moment un simple tableau global) ;
2. Lancez votre serveur en ligne de commande
3. Testez cette route via `curl` ou `wget`.
4. Créez une route `/user/{ID}` permettant d'accéder aux données d'un utilisateur (pour le moment un simple dictionnaire associatif global) ;
5. Testez cette route via `curl` ou `wget`.

### Création des requêtes

1. Dans un fichier JS que vous inclurez à une page Web, effectuez une requête `fetch` permettant d'afficher dans la console la liste des utilisateurs ainsi qu'un utilisateur de votre choix.
2. Créez de nouvelles routes pour ajouter/supprimer/modifier un utilisateur (cf les 6 routes vues en cours). Vous testerez ces routes via `curl`/`wget`.
3. Créez des fonctions JS permettant d'effectuer de telles requêtes auprès du serveur.
4. Kilian ayant très certainement harcelé l'encadrant pour obtenir une pause, il pourra refaire le TP en Brython afin de ne pas s'ennuyer.

</main>
    </body>
</html>