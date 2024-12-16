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

## TP3 : Exécuter du code côté client

1. Mettez à jour votre version de LISS en téléchargeant sa dernière version via ce lien : https://raw.githubusercontent.com/denis-migdal/LISS/refs/heads/V2/dist/dev/index.js
2. Lisez la documentation de LISS via ce lien : https://denis-migdal.github.io/LISS/dist/dev/pages/fr/docs/controler/?bry=true
3. En vous servant des exemples, modifiez le composant "user-desc" en lui ajoutant un fichier "index.bry".
4. Créez une structure Python contenant les informations d'un utilisateur.
5. Remplissez le composant "user-desc" à partir de cette structure via l'API JS (cf CM3).
6. Transformez la structure précédente en un dictionnaire associatif dont la clef sera l'identifiant de l'utilisateur et la valeur les information de l'utilisateur.
6. En considérant que "user-desc" a un unique attribut "user-id", remplissez le composant "user-desc" avec les informations de l'utilisateur d'identifiant "user-id".


## TP4 : Serveur

### Prise en main

Vous vous servirez de :
- la documentation : https://denis-migdal.github.io/VSHS/dist/dev/pages/docs/fr/
- du bac à sable : https://denis-migdal.github.io/VSHS/dist/dev/pages/playground/

1. Téléchargez la V2 de VSHS : https://github.com/denis-migdal/VSHS
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

1. Dans un fichier Brython que vous inclurez à une page Web, effectuez une requête `fetch` permettant d'afficher dans la console la liste des utilisateurs ainsi qu'un utilisateur de votre choix.
2. Créez de nouvelles routes pour ajouter/supprimer/modifier un utilisateur (cf les 6 routes vues en cours). Vous testerez ces routes via `curl`/`wget`.
3. Créez des fonctions Brython permettant d'effectuer de telles requêtes auprès du serveur.

</main>
    </body>
</html>