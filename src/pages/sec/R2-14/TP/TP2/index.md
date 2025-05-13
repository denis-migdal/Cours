<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>TP2 (AdminSys)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/tp/index.css"  rel="stylesheet">
        <script  src="/skeleton/tp/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# TP2 (2h)

## Commandes Shell (1h)

[TODO] : update ASTerm
[TODO] : doc
[TODO] : lsd + trash

Vous utilisez des lignes de commandes afin d'effectuer les opérations suivantes sur ASTerm.

Pour lancer ASTerm, vous taperez la commande <script type="c-bash">ASTerm</script> dans le terminal.

### Lister

1. <q-text> Affichez le répertoire de travail actuel.</q-text>
2. <q-text> Comment expliquez vous que le résultat de la commande soit différente de l'invite ?</q-text>
1. <q-text> Affichez le contenu du dossier racine (**sans** les fichiers cachés).</q-text>
1. <q-text> Affichez le contenu du dossier courant (**avec** les fichiers cachés).</q-text>
1. <q-text>Affichez le contenu du dossier courant (**avec** les fichiers cachés **et** les détails).</q-text>
1. <q-text>Quelle est la taille et date de dernière modification du fichier <script type="c-text">.bashrc</script> ?</q-text>
1. <q-text>Recherchez dans le dossier <script type="c-text">/var/log/</script> les fichiers d'extension <script type="c-text">.log</script>.</q-text>

### Navigation

1. <q-text>Allez dans le dossier racine (chemin **absolu**).</q-text>
1. <q-text>Allez dans votre dossier home.</q-text>
1. <q-text>Retournez au dossier précédent.</q-text>
1. <q-text>Allez dans le home de <script type="c-text">zeus</script> en utilisant <script type="c-text">~<h>$USER</h></script>.</q-text>
1. <q-text>Allez dans le dossier <script type="c-text">/var/log/</script> via un chemin **relatif**).</q-text>

### Création et édition de fichiers

1. <q-text>Créez un nouveau fichier <script type="c-text">/tmp/test</script> vide.</q-text>
1. <q-text>En **une seule** ligne de commande créez l'arborescence ci-dessous :
  <script type="c-bash">
    📂 /tmp/
    ├── 📂 A
    │   ├── 📂 1
    │   └── 📂 2
    └── 📂 B
        ├── 📂 1
        └── 📂 2
  </script></q-text>

### Déplacer, copier et renommer

1. <q-text> **Copiez** le **dossier** <script type="c-bash">B/</script> dans le dossier <script type="c-bash">A/</script>.</q-text>
1. <q-text> **Déplacez** <script type="c-bash">A/B/</script> dans le dossier <script type="c-bash">A/1/</script>.</q-text>
1. <q-text> **Déplacez et renommez** le dossier <script type="c-bash">A/1/B/</script> en <script type="c-bash">/tmp/C</script>.</q-text>
1. <q-text> **Copiez et renommez** le **dossier** <script type="c-bash">C/</script> en <script type="c-bash">/tmp/D</script>.</q-text>
1. <q-text> **Copiez** les **dossiers** <script type="c-bash">{A,B,C}/</script> du serveur vers le dossier <script type="c-bash">/tmp/</script> du poste de travail.</q-text>

### Supprimer des fichiers

1. <q-text> Placez les dossiers <script type="c-bash">B/2/</script> et <script type="c-bash">A/2/</script> dans la corbeille.</q-text>
1. <q-text> Listez le contenu de la corbeille.</q-text>
1. <q-text> Restaurez le dossier <script type="c-bash">A/2/</script>.</q-text>
1. <q-text> Videz la corbeille.</q-text>
1. <q-text> Avec la commande <script type="c-bash">rm</script>, supprimez le dossier <script type="c-bash">A/2/</script>.</q-text>
1. <q-text> Ce dossier apparaît-il dans la corbeille ? Pourquoi ?</q-text>

## Fichiers de configuration

### <script type="c-text">.bashrc</script>

Le <script type="c-text">.bashrc</script> est un script Shell exécuté au démarrage d'un nouveau Shell. Il permet notamment d'ajouter des alias de manière permanente.

1. Ajoutez une ligne de commande <b>à la fin</b> du fichier <script type="c-text">.bashrc</script> afin d'ajouter l'alias <script type="c-bash">hello</script>.
1. <q-text>Expliquez en quoi le fait qu'un tiers puisse modifier notre <script type="c-text">.bashrc</script> constitue une faille de sécurité.</q-text>

### Créer une commande

La commande <script type="c-bash">type <h>$CMD</h></script> permet d'afficher la nature et l'emplacement d'une commande.

1. <q-text>Où est enregistrée la commande <script type="c-bash">mkcmd</script> ?</q-text>
1. <q-text>Que faisait exactement la commande <script type="c-bash">mkcmd</script> ?</q-text>
1. <q-text>Quel est l'intérêt de faire un lien physique dans <script type="c-bash">mkcmd</script> ?</q-text>
1. <q-text>Pourquoi ne pas utiliser ici un lien symbolique ?</q-text>
1. <q-text>Pourquoi <script type="c-bash">mkcmd</script> utilise-t-il <script type="c-bash">relpath</script> ?</q-text>
1. <q-text>Où faudrait-il enregistrer les commandes pour les rendre accessibles à tous ?</q-text>
1. <q-text>Quels droits faudrait-il alors donner à ces commandes ?</q-text>
1. Expliquez pourquoi les faits suivants constitueraient une faille de sécurité :
   - <q-text>un tiers a le droit d'écriture sur mon script.</q-text>
   - <q-text>un tiers a le droit d'écriture sur le dossier contenant mon script.</q-text>

### Configuration de SSH


#### Alias SSH

Retenir et écrire l’adresse IP du serveur à chaque connexion au serveur via SSH est
enquiquinant. Pour éviter cela, on utilise des **alias SSH**, permettant d'écrire <script type="c-bash">ssh <h>$ALIAS</h></script> au lieu de <script type="c-bash">ssh <h>$USER</h>@<h>$SERVER</h></script>. Les alias sont définis dans la configuration du client SSH (<script type="c-text">~/.ssh/config</script>) comme suit :
<script type="c-bash">
Host <h>$ALIAS</h> # ssh ALIAS => ssh USER@SERVER
  User <h>$USER</h>
  HostName <h>$SERVER</h>
  IdentityFile <h>$PRIVKEY_PATH</h> # si clé SSH
  IdentitiesOnly yes         # si IdentityFile
</script>

💡 L’autocomplétion du shell marche aussi pour les alias SSH.

1. <q-text><u><b>Sur l'hôte</b></u>, créez un nouvel alias <script type="c-text">AdmSys</script> permettant de vous connecter en tant que <script type="c-text">zeus</script>.</q-text>
2. <q-text>Connectez au serveur en utilisant cet alias.</q-text>

#### Clé SSH

Renseigner son un mot de passe à chaque fois qu’on utilise SSH est enquiquinant, et potentiellement peu sécurisé si le mot de passe est trop faible. On préfère ainsi généralement utiliser une **clé SSH** permettant aux utilisateurs de se connecter au serveur sans mot de passe.

Le principe est alors très simple, l'utilisateur :
1. génère une paire de clés via <script type="c-bash">ssh-keygen</script>.
2. enregistre la clef *publique* dans le serveur (dans <script type="c-text">~/.ssh/authorized_keys</script>).
3. indique au client SSH la clef *privée* à utiliser (cf suite).

À chaque connexion SSH, le client donne alors une preuve qu'il a connaissance de la clef privée, que le serveur est capable de vérifier grâce à la clef publique.

1. <u><b>Sur l'hôte</b></u>, générez une nouvelle clé SSH grâce à la commande <script type="c-bash">ssh-keygen</script>.<br/>
   💡 Vous nommerez la clé <script type="c-text">AdmSys</script>.<br/>
   ⚠ Ne renseignez pas de mot de passe.
1. <q-text><u><b>Sur l'hôte</b></u>, déplacez les clés générées dans <script type="c-text">~/.ssh/keys/{priv/,pub/}</script>.</q-text>
1. <q-text><u><b>Sur l'hôte</b></u>, ajoutez le chemin de la clef privée à l'alias <script type="c-text">AdmSys</script>.</q-text>
2. <q-text><u><b>Sur le serveur</b></u>, créez le dossier <script type="c-text">~zeus/.ssh/</script>.</q-text>
3. <q-text>Transférez la clé publique dans le fichier <script type="c-text">~zeus/.ssh/authorized_keys</script>.</q-text>
4. <q-text>Ouvrez une nouvelle session SSH en tant que <script type="c-text">zeus</script>.</q-text>
1. <q-text>Dupliquez l'alias SSH <script type="c-text">AdmSys</script> que vous nommerez <script type="c-text">AdmSysPwd</script>.</q-text>
1. <q-text>À cet alias, ajoutez l'option <script type="c-text">PubkeyAuthentication no</script>.<br/>
   ⚠ C’est Authentication et non Authenti<b><u>fi</u></b>cation.</q-text>
2. <q-text>Utilisez <script type="c-text">AdmSysPwd</script> afin de vous connecter via mot de passe.</q-text>

</main>
    </body>
</html>