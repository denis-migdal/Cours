<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM2 (AdminSys)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/index.css"  rel="stylesheet">
        <script  src="/skeleton/index.js"  type="module"     blocking="render" async></script>
        <style>
todo {
    background-color: yellow;
    color: black;
    float: right;
    &::before {
        content: "todo: "
    }
}
        </style>
    </head>
    <body>
        <main>

# Les fichiers

## Le système de fichiers

Un ordinateur manipule et stocke des données binaires (i.e. suites de 0 et de 1). Ces données peuvent être stockées :
- sur le disque dur/SSD, pour des données **persistantes** ;
- sur la mémoire vive (RAM), pour des données **temporaires**.

💡 Les opérations de lecture et d'écriture sur la RAM sont bien plus rapides que sur le disque, cependant les données stockées en RAM sont perdues au redémarrage de l'ordinateur.

L'OS ne va pas directement lire/écrire les données sur le disque, mais va utiliser un **système de fichiers** (*filesystem*) qui détermine où et comment stocker les données d'un **fichier** (*file*) sur le disque.

💡 Chaque fichier est identifié par un entier nommé **inode** (*<u>i</u>ndex <u>node</u>*).

<center>
    <img class="svg" src="/assets/admsys/img/filesystem.svg"/>
</center>

Un **volume** est un *espace de stockage*, il peut ainsi être :
- un disque entier ;
- une *partie* de disque (**partition**) ;
- un ensemble de partitions ;
- une clef USB ;
- etc.

Sur un ordinateur personnel, on n'utilise généralement qu'un seul système de fichier, sur un seul volume (le disque entier).

### Les dossiers

Un **dossier** (*directory*), aussi appelé **répertoire** (*folder*), est un fichier spécial contenant l'inode et le nom des fichiers qu'il inclus.

<div class="flex-2">
<script type="c-text">
├── faa
├── fee
├── fii
└── fuu
</script>
<script type="c-text">
6577185 faa
6577189 fee
6577187 fii
6577188 fuu
</script></div>

💡 Un même fichier peut alors être présent dans plusieurs dossiers à la fois, sous des noms différents.

💡 La commande <script type="c-bash">ls <h>$DIR</h></script> permet de lister le contenu d'un dossier :
<div class="terminal">
<pre>$ ls foo
📄  faa  <font color="#0039AA"><b>📂  fee</b></font>  📄  fii  📄  fuu</pre>
</div>


⚠ Les fichiers dont le nom commence par <script type="c-text">.</script> sont des <b>fichiers cachés</b>, et ne s'afficheront qu'avec l'option <script type="c-bash">-a</script> (<u>a</u>ll).

### Les méta-données d'un fichier

Le système de fichiers enregistre aussi, pour chaque fichier, des méta-données. Notamment :
- son type ;
- sa taille ;
- sa date de dernière modification ;
- son propriétaire ;
- les droits d'accès au fichier.
- etc.

💡 La commande <script type="c-bash">stat <h>$FILE</h></script> permet d'afficher l'ensemble des méta-données d'un fichier :
<div class="terminal">
<pre>$ stat foo
  Fichier : foo
   Taille : 4096      	Blocs : 8          Blocs d&apos;E/S : 4096   répertoire
Périphérique : fd01h/64769d	Inœud : 6577172     Liens : 3
Accès : (0775/drwxrwxr-x)  UID : ( 1000/ demigda)   GID : ( 1000/ demigda)
Accès : 2025-03-29 15:02:50.812405953 +0100
Modif. : 2025-03-29 15:02:19.868310502 +0100
Changt : 2025-03-29 15:02:19.868310502 +0100
  Créé : 2025-03-29 15:01:55.808234278 +0100</pre>
</div>

💡 Cependant, en pratique, on se contente généralement d'utiliser la commande <script type="c-bash">ls -lh <h>[-d]</h> <h>$FILE[...]</h></script> :
<div class="terminal">
<pre>$ ls -lh -d foo
<u style="text-decoration-style:single">Permissions</u> <u style="text-decoration-style:single"> User  </u> <u style="text-decoration-style:single"> Group </u> <u style="text-decoration-style:single"> Size </u> <u style="text-decoration-style:single">     Date Modified      </u> <u style="text-decoration-style:single"> Name  </u>
<font color="#0039AA"><b>d</b></font><font color="#44AA44">r</font><font color="#AA5500">w</font><font color="#AA0000">x</font><font color="#44AA44">r</font><font color="#AA5500">w</font><font color="#AA0000">x</font><font color="#44AA44">r</font><font color="#8A8A8A">-</font><font color="#AA0000">x</font>  <font color="#FFFFD7">demigda</font> <font color="#D7D7AF">demigda</font> <font color="#FFFFAF">4.0</font> <font color="#FFFFAF">KB</font> <font color="#00D700">Tue Apr  1 09:16:45 2025</font> <font color="#0039AA"><b>📂  foo</b></font></pre>
</div>

⚠ Il convient de ne pas confondre ces méta-données, stockées au niveau du système de fichiers, et communes entre tous les fichiers, avec des méta-données stockées dans le fichier, et dépendant de son format (e.g. png, jpeg, pdf, zip).

### Les permissions

Sous Linux, il est possible d'attribuer 3 types de droits sur un fichier :
- <script type="c-text">r</script> (<u>r</u>ead) : <b>lecture</b> du fichier (ou <b>lister</b> le contenu d'un dossier).
- <script type="c-text">w</script> (<u>w</u>rite) : <b>écriture</b> du fichier (ou <b>modifier</b> le contenu d'un dossier).
- <script type="c-text">x</script> (e<u>x</u>ec) : <b>exécution</b> du fichier script/binaire qui est alors un <i>exécutable</i> (ou <b>aller dans</b> le dossier).

⚠ Lorsque vous créez un script, il est alors important se donner le droit d'exécution (et de lecture) sur le fichier de script.

Les droits sont alors décrits par 3 caractères : si le droit est donné, la lettre correspondante est affichée (<script type="c-text">r</script>, <script type="c-text">w</script>, <script type="c-text">x</script>).<br/>
Ainsi <script type="c-bash">rw-</script> correspond au droit de lecture et d'écriture, sans le droit d'exécution.

Par défaut, ces droits peuvent être attribués à :
- l'**utilisateur** (*user*) propriétaire du fichier (les 3 premiers caractères, e.g. <script type="c-text">rwx</script>).
- le **groupe** d'utilisateur (*group*) propriétaire du fichier  (les 3 caractères du milieu, e.g. <script type="c-text">rwx</script>);
- les **autres** utilisateurs (les 3 derniers caractères, e.g. <script type="c-text">r-x</script>).

💡 L'utilisateur/groupe d'utilisateur propriétaire d'un fichier peut être modifié grâce à la commande <script type="c-bash">chown</script> (<u>ch</u>ange <u>own</u>er) :
<script type="c-bash">
chown <h>[-R]</h> <h>[$USER][:$GROUP]</h> <h>$FILES...</h>
</script>

💡 Les droits attribués sur un fichier peuvent être modifiés grâce à la commande <script type="c-bash">chmod</script> (<u>ch</u>ange <u>mod</u>e) :
<script type="c-bash">
chmod <h>[-R]</h> <h>$MODE,...</h> <h>$FILES...</h>
</script>

<script type="c-text"><h>$MODE</h></script> s'écrit sous la forme suivante :
<div class="flex-3">
    <div>
        <center><script type="c-text"><h>$QUI</h></script></center>
        <ul>
            <li><script type="c-text">u</script> (<u>u</u>ser) : l'<b>utilisateur</b> propriétaire</li>
            <li><script type="c-text">g</script> (<u>g</u>roup) : le <b>groupe</b> propriétaire</li>
            <li><script type="c-text">o</script> (<u>o</u>ther) : les <b>autres</b></li>
            <li><script type="c-text">a</script> (<u>a</u>ll) : <b>tous</b> les utilisateurs</li>
        </ul>
    </div><div><center><script type="c-text"><h>$OP</h></script></center>
        <ul>
            <li><script type="c-text">+</script> : <b>ajouter</b></li>
            <li><script type="c-text">-</script> : <b>retirer</b></li>
            <li><script type="c-text">=</script> : <b>appliquer</b></li>
        </ul>
    </div><div>
        <center><script type="c-text"><h>$DROITS</h></script></center>
        <ul>
            <li><script type="c-text">r</script></li>
            <li><script type="c-text">x</script></li>
            <li><script type="c-text">w</script></li>
        </ul>
    </div>
</div>

Quelques exemples :
- <script type="c-text">u+x</script> : ajouter le droit d'exécution à l'utilisateur propriétaire.
- <script type="c-text">go-r</script> : retire le droit de lecture au groupe propriétaire et aux autres.
- <script type="c-text">o=rx</script> : donne aux autres uniquement les droits de lecture et d'exécution (ils n'auront pas le droit de lecture). 
- <script type="c-text">a-x,a+r</script> : retire le droit d'exécution à tous, et ajoute le droit de lecture.


💡 <script type="c-bash">-R</script> (<u>r</u>ecursive) permet d'appliquer les changements de manière récursive au dossier.

## Les chemins

Comme nous l'avons vu, l'*inode* identifie chaque fichier par un numéro. Cependant il est peu pratique pour un humain :<br/>
- à quoi correspond le fichier <script type="c-text">6577188</script> ?
- quel est l'*inode* du dossier dans lequel j'ai enregistré mes note de cours ?

À la place, on utilise des **chemins** pour désigner les fichiers de manière plus explicite et simple à retenir.

### Chemin absolu

Sous Linux tous les fichiers sont, directement ou indirectement, contenus dans le dossier **racine** (*root directory*), noté <script type="c-text">/</script> :
<div class="terminal">
<pre>
<font color="#0039AA"><b>📂 /</b></font>
<font color="#8A8A8A">└── </font><font color="#0039AA"><b>📂 tmp</b></font>
    <font color="#8A8A8A">└── </font><font color="#0039AA"><b>📂 foo</b></font>
        <font color="#8A8A8A">├── </font>📄 faa
        <font color="#8A8A8A">├── </font><font color="#0039AA"><b>📂 fee</b></font>
        <font color="#8A8A8A">├── </font>📄 fii
        <font color="#8A8A8A">└── </font>📄 fuu</pre>
</div>

Le **chemin absolu** (*absolute path*) identifie alors un fichier par son emplacement par rapport à la **racine**, i.e. en partant de la racine, le chemin à emprunter pour atteindre ce fichier. Ainsi, pour atteindre le fichier <script type="c-text">faa</script>, il faudra partir de la racine <script type="c-text">/</script>, puis aller dans les dossiers <script type="c-text">tmp</script>, puis <script type="c-text">foo</script>, pour enfin atteindre <script type="c-text">faa</script>, donnant ainsi le chemin absolu : <script type="c-text">/tmp/foo/faa</script>.

💡 Par convention, lorsque le chemin désigne un dossier, on le suffixera par <script type="c-text">/</script>, e.g. <script type="c-text">/tmp/foo/fee/</script>.

⚠ Lorsque vous utilisez un chemin absolu dans vos scripts, il n'y a aucune garantie que le fichier visé soit placé exactement au même endroit d'un ordinateur à l'autre. Il convient ainsi d'éviter les chemins absolus dans vos scripts.

### Chemin relatif

Sous Linux, le **dossier de travail** (*working directory*), noté <script type="c-text">./</script>, désigne le dossier dans lequel on se trouve actuellement.

💡 La commande <script type="c-bash">pwd</script> (*<u>p</u>rint <u>w</u>orking <u>d</u>irectory*) permet d'afficher le dossier de travail :
<div class="terminal"><pre>$ pwd
/tmp/foo
</pre></div>

💡 Ce dossier est aussi usuellement indiqué dans l'**invite de commande** : <div class="terminal"><pre><font color="#4CE64C"><b>demigda@demigda-Latitude-5400</b></font>:<font color="#295FCC"><b>/tmp/foo</b></font>$</pre></div>

💡 La commande <script type="c-bash">cd <h>$DIR</h></script> (*<u>c</u>hange <u>d</u>irectory*) permet de se déplacer dans le dossier <script type="c-bash"><h>$DIR</h></script>.

Le **chemin relatif** (*relative path*) identifie alors un fichier par son emplacement par rapport au **dossier de travail**, i.e. en partant du dossier de travail, le chemin à emprunter pour atteindre ce fichier. Ainsi, pour atteindre le fichier <script type="c-text">faa</script>, à partir de <script type="c-text">/tmp/</script>, il faudra partir du dossier de travail <script type="c-text">./</script>, puis aller dans le dossier <script type="c-text">foo</script>, pour enfin atteindre <script type="c-text">faa</script>, donnant ainsi le chemin relatif : <script type="c-text">./foo/faa</script>.

💡 <script type="c-text">..</script> représente le parent d'un dossier. Ainsi, à partir de <script type="c-text">/tmp/foo/fee/</script>, <script type="c-text">./../../</script> désigne le dossier <script type="c-text">tmp/</script>.

⚠ Dans un script, les chemins relatifs sont évalués relativement au dossier de travail actuel, et non relativement à l'emplacement du script. Il convient donc de faire attention à vos chemins relatifs.

💡 Le code suivant vous permet de placer le dossier de travail à l'emplacement du script :
<div class="flex-2">
    <div>
        <center><b>Python:</b></center>
        <script type="c-python">
            import os
            os.chdir( os.path.dirname(__file__) )
        </script>
    </div><div>
        <center><b>Shell:</b></center>
        <script type="c-python">
            cd $(dirname "$0")
        </script>
    </div>
</div>

### Manipuler les fichiers

Sous Linux, il existe un ensemble de commandes standards permettant de manipuler les fichiers :
- <script type="c-bash">mkdir   <h>$DIR...</h></script> (<i><u>m</u>a<u>k</u>e <u>dir</u>ectory</i>) <b>créer un dossier</b> vide.
- <script type="c-bash">touch   <h>$FILE...</h></script> <b>créer un fichier</b> vide.
- <script type="c-bash">rm <h>[-r]</h> <h>$FILE...</h></script> (<i><u>r</u>e<u>m</u>ove</i>) <b>supprimer</b> des fichiers.
- <script type="c-bash">cp <h>[-r]</h> <h>$SRC...</h> <h>$DST</h>/</script> (<i><u>c</u>o<u>p</u>y</i>) <b>copier</b> des fichiers.
- <script type="c-bash">mv      <h>$SRC...</h> <h>$DST</h>/</script> (<i><u>m</u>o<u>v</u>e</i>) <b>déplacer</b> des fichiers.
- <script type="c-bash">mv      <h>$SRC</h>    <h>$DST</h>/<h>$NAME</h></script> <b>déplacer et renommer</b> un fichier.
- <script type="c-bash">find <h>$DIR</h> -name <h>$NAME</h></script> rechercher (récursivement) dans le dossier <script type="c-bash"><h>$DIR</h></script> les fichiers correspondant à <script type="c-bash"><h>$NAME</h></script>.

💡 L'option <script type="c-bash">-r</script> permet de copier/supprimer des dossiers.<br/>
💡 <script type="c-bash">mkdir -p <h>$DIR</h></script> permet, s'ils n'existent pas, de créer aussi les dossiers parents de <script type="c-bash"><h>$DIR</h></script>.

⚠ Les fichiers supprimés via <script type="c-bash">rm</script> ne sont pas placés dans la corbeille et sont donc supprimés **définitivement**.<br/>
Il est ainsi recommandé d'utiliser la commande <script type="c-bash">trash <h>$FILE...</h></script> à la place afin de déplacer les fichiers dans la corbeille.

### Ensemble de chemins

Lorsqu'on souhaite manipuler plusieurs fichiers à la fois, e.g. via <script type="c-bash">cp</script>, <script type="c-bash">mv</script>, <script type="c-bash">rm</script>, etc. on préfère éviter d'avoir à écrire leurs chemins uns à uns.

Pour cela on peut représenter un ensemble de chemins en utilisant les **caractères de remplacements** (*wildcard*) suivants :
- <script type="c-text">*</script> : représente 0 à plusieurs <b>caractères</b>, e.g. <script type='c-bash'>./*.txt</script> : tous les fichiers d'extension ".txt".
- <script type="c-text">**/</script> : représente 0 à plusieurs <b>dossiers</b>, e.g. <script type='c-bash'>./**/foo.txt</script> : le fichier "foo.txt" dans un des sous dossiers.
- <script type="c-text">{<h>$VALS,...</h>}</script> : représente une <b>alternative</b>, e.g. <script type="c-bash">./{foo, faa}.txt</script> : "foo.txt" ou "faa.txt" dans le dossier courant.

💡 <script type="c-text">~<h>[$USER]</h>/</script> est un alias représentant le chemin absolu du home de l'utilisateur <script type="c-text"><h>$USER</h></script> (utilisateur actuel si non précisé).

💡 Afin d'éviter les erreurs dans la saisie d'un chemin, il est très vivement encouragé d'utiliser l'auto-complétion du shell.

## Prévoir des sauvegardes

### Motivations

Une sauvegarde n'est réellement utile que lorsqu'on perd ses données, i.e. lorsqu'il est déjà trop tard. Il est ainsi nécessaire d'anticiper et d'effectuer régulièrement des sauvegardes de ses données afin de se prémunir contre d'éventuelles pertes.

Ces pertes peuvent survenir suite à une erreur de manipulation, à un acte de cyberdélinquance, à une défaillance du matériel, à un incendie, etc. Elles sont usuellement rares, mais le coût d'une perte de données élevé.

Les pertes de données ont un triple coût :
- le coût de la remise en service ;
- le coût de l'interruption des activités ;
- le coût de l'impossibilité d'honorer des obligations contractuelles.

Ces coûts peuvent engendrer la faillite d'une entreprise, en effet 60% des entreprises victimes d'un rançongiciel déposent le bilan peu après l'attaque. La perte de données peut en effet concerner des <u>décennies</u> de travail, que ce soit des données clients ou fournisseurs, des outils développés en interne dont les développeurs ont quitté l'entreprise depuis longtemps, etc. De plus le temps d’interruption et de restauration des services constitue un manque à gagner pour l'entreprise, et impacte sa réputation.

Plus grave encore, lorsque ces pertes de données touchent des hôpitaux, où une dégradation des services peut se traduire en vies humaines.

⚠ Il est ainsi vital d'effectuer <u>régulièrement</u> des sauvegardes, en s'assurant que la procédure de restauration est fonctionnelle, et peut être rapidement mise en place.

⚠ Il est important que les sauvegardes soient stockées dans des lieux différents afin de se prémunir contre des incidents pouvant toucher toute une zone (e.g. cambriolages, incendies, inondations, etc).

⚠ De la même manière des sauvegardes sur des disques coupés du réseau permettent de se protéger contre des attaques touchant l'intégralité du système informatique (e.g. rançongiciel).

### Organiser ses fichiers

Préparer une sauvegarde commence par réfléchir à :
- **quoi** : que va-t-on sauvegarder ?
- **comment** et **où** va-t-on enregistrer la sauvegarde ?
- **quand** et **à quelle fréquence** va-t-on effectuer la sauvegarde ?

Pour cela, la première étape est déjà de bien organiser ses fichiers. Cela permet non-seulement de facilement pouvoir retrouver un fichier au quotidien, d'identifier les fichiers obsolètes, mais aussi de faciliter les sauvegardes. Par exemple :
- <script type="c-text">~/Documents/</script> : mes supports de cours, rendus de TP, etc. à sauvegarder chaque soir.
- <script type="c-text">~/Téléchargements/</script> : mes téléchargements temporaires, ne nécessite pas de sauvegardes.

Bien organiser ses fichiers demande aussi de conserver une arborescence consistante et cohérente. Par exemple :
- <script type="c-text">~/Documents/<h>$SEMESTRE</h>/<h>$MODULE</h>/{TP,CM}/</script> : pour les fichiers du module <script type="c-text"><h>$MODULE</h></script>

### Les fichiers des applications

Afin de garder une arborescence propre et explicite, les logiciels évitent d'écrire leurs fichiers n'importe où. Pour cela on respecte autant que possible des **conventions**. Cela permet notamment d'éviter des conflits, e.g. deux exécutables souhaitant utiliser le même chemin pour deux fichiers différents.

Par convention on distingue 3 niveaux :
- <script type="c-text">/usr/</script> : les applications standards installées, potentiellement partagées entre plusieurs ordinateurs.
- <script type="c-text">/usr/local/</script> : les applications installées localement, spécifique à cet ordinateur.
- <script type="c-text">~/.local/</script> : les applications/configurations personnelles, spécifique à un utilisateur.

Par convention, on distingue alors 7 sous-dossiers (pas entièrement consistant) :
<table>
    <thead>
        <tr><th></th><th>Standard</th><th>Local</th><th>Personnel</th></tr>
    </thead>
    <tbody>
        <tr>
            <th>Base</th>
            <td><script type="c-text">/usr/</script></td>
            <td><script type="c-text">/usr/local/</script></td>
            <td><script type="c-text">~/.local/</script></td>
        </tr><tr>
            <th>Exécutables</th>
            <td><script type="c-text">/usr/<h>bin</h>/</script></td>
            <td><script type="c-text">/usr/local/<h>bin</h>/</script></td>
            <td><script type="c-text">~/.local/<h>bin</h>/</script></td>
        </tr><tr>
            <th>Exécutables (admin)</th>
            <td><script type="c-text">/usr/<h>sbin</h>/</script></td>
            <td><script type="c-text">/usr/local/<h>sbin</h>/</script></td>
        </tr><tr>
            <th>Bibliothèques</th>
            <td><script type="c-text">/usr/<h>lib</h>/</script></td>
            <td><script type="c-text">/usr/local/<h>lib</h>/</script></td>
            <td><script type="c-text">~/.local/<h>lib</h>/</script></td>
        </tr><tr>
            <th>Ressources</th>
            <td><script type="c-text">/usr/<h>share</h>/</script></td>
            <td><script type="c-text">/usr/local/<h>share</h>/</script></td>
            <td><script type="c-text">~/.local/<h>share</h>/</script></td>
        </tr><tr>
            <th>Configuration</th>
            <td><script type="c-text">/etc/<h>$NAME</h>/</script></td>
            <td><script type="c-text">/usr/local/<h>etc</h>/<h>$NAME</h>/</script></td>
            <td><script type="c-text">~/.config/<h>$NAME</h>/</script></td>
        </tr><tr>
            <th>Cache</th>
            <td><script type="c-text">/var/<h>cache</h>/<h>$NAME</h>/</script></td>
            <td><script type="c-text">/var/local/<h>$NAME</h>/</script></td>
            <td><script type="c-text">~/.cache/<h>$NAME</h>/</script></td>
        </tr>
    </tbody>
</table>

💡 Par défaut, lorsque vous entrez une commande, le shell va rechercher, puis exécuter, le fichier de même nom présent dans <script type="c-text">/usr/bin/</script> ou <script type="c-text">/usr/local/bin/</script>.

💡 La commande <script type="c-text">type <h>$CMD</h></script> permet d'afficher le type et l'emplacement de la commande <script type="c-text"><h>$CMD</h></script>.

⚠ Les fichiers temporaires sont usuellement enregistrés dans <script type="c-text">/tmp/</script>. Cependant, il convient d'en générer aléatoirement les noms afin d'éviter des conflits.

💡 Il est aussi possible d'installer ses applications locales dans <script type="c-text">/opt/<h>$NAME</h>/</script>, évitant ainsi d'avoir à en disperser le contenu, entre ses executables, bibliothèques, et configurations.

⚠ Malheureusement, ces conventions ne sont pas toujours très bien respectées. Par exemple :
- <script type="c-text">~/.ssh/</script> contient la configuration SSH d'un utilisateur (cf TP).
- <script type="c-text">~/.bashrc</script> contient la configuration du shell d'un utilisateur (cf TP).

### Arborescence Linux

Sous Linux les fichiers sont organisés comme suit :
- <script type="c-text">/home/<h>$USER</h>/</script> : les fichiers <b>personnels</b> de l'utilisateur <script type="c-text"><h>$USER</h></script> (donc dossier potentiellement <b>sensible</b>).
- <script type="c-text">/usr/{lib,bin,sbin}/</script> : logiciels installés, peut être en <b>lecture seule</b> et <b>partagé</b> entre plusieurs ordinateurs.
- <script type="c-text">/etc/<h>$NAME</h>/</script> : configuration du logiciel <script type="c-text"><h>$NAME</h></script>, données <b>spécifiques</b> à l'ordinateur, peut être en <b>lecture seule</b>.
- <script type="c-text">/srv/<h>$NAME</h>/</script> : fichiers servis par le serveur (e.g. pour un serveur Web, de fichier, etc), peu utilisé de nos jours.
- <script type="c-text">/var/</script> : données écrites par les logiciels en cours d'exécution, <script type="c-text">/var/logs/<h>$NAME</h>/</script> contient les logs.
- <script type="c-text">/tmp/</script> : les fichiers temporaires, supprimés au redémarrage de la machine, généralement stockés en RAM.

💡 Pour de **gros** fichiers temporaire, on utilisera généralement <script type="c-text">/var/tmp/</script> au lieu de <script type="c-text">/tmp/</script>.

⚠ Pour des raisons de sécurité les utilisateurs ne peuvent (sauf exceptions) modifier que les fichiers contenus dans leur propre home. <script type="c-text">/tmp/</script> et <script type="c-text">/var/tmp/</script> sont deux exceptions à cela.

## Volumes et partitions

### Motivations

#### Utiliser différents systèmes de fichiers

Comme nous l'avons vu précédemment, les différents dossiers d'un système Linux peuvent avoir différents besoins :
- sauvegardes fréquentes ;
- lecture seule ;
- partagé sur le réseau ;
- stocké en RAM.

Pour cela il nous faudrait utiliser différents systèmes de fichiers fournissant les fonctionnalités désirées :
- compression des données sur le disque (<script type="c-text">ZFS</script>, <script type="c-text">BTRFS</script>) ;
- chiffrement des données sur le disque (via <script type="c-text">cryptosetup</script>) ;
- conservation d'un historique des fichiers (via <script type="c-text">ZFS</script>, ou <script type="c-text">LVM</script>) ;
- modifications possibles mais non-persistantes (via <script type="c-text">aufs</script>, <script type="c-text">unionfs</script>, <script type="c-text">overlayfs</script>, ou <script type="c-text">mergefs</script>);
- données stockées sur la RAM (<script type="c-text">tmpfs</script>);
- données stockées à distance (<script type="c-text">NFS</script>, <script type="c-text">sshfs</script>);
- etc.

Or, un volume ne peut contenir qu'un seul système de fichier. Ainsi, si on souhaite utiliser plusieurs systèmes de fichiers, il nous faut alors découper nos ressources de stockages en plusieurs volumes.

💡 Par défaut, les systèmes de fichiers suivants sont usuellement utilisés :
- <script type="c-text">ext4</script> pour Linux ;
- <script type="c-text">NTFS</script> pour Windows ;
- <script type="c-text">APFS</script> pour Apple ;
- <script type="c-text">FAT32</script> pour les clefs USB ;


#### Séparer les données du système d'exploitation

Il est possible, et même recommandé, d'enregistrer les données et le système d'exploitation sur deux volumes différents. Cela permet en effet de (ré)installer le système d'exploitation sans effacer les données déjà présentes.

⚠ Il est très vivement recommandé de sauvegarder ses données avant toutes opérations de ce genre.


Il est aussi possible d'installer plusieurs systèmes d'exploitations sur un même ordinateur, qu'on pourra alors choisir au démarrage. Cela permet :
- d'avoir un dual boot Linux-Windows ;
- d'avoir un système d'exploitation de secours ;
- de tester un système d'exploitation.

💡 Lorsque le système d'exploitation est installé sur une clef USB, on parle alors de live USB.

⚠  Il est très vivement recommandé d'avoir au moins un live USB.

### Créer et formatter une partition

Un volume peut être identifié par 3 éléments :
- un **chemin** dans <script type="c-text">/dev/</script>, e.g. <script type="c-text">/dev/sda</script>, le nom est susceptible de changer si l'ordre des disques change.
- un **UUID** (*IDentifiant Universel Unique*), e.g. <script type="c-text">42d1660e-e04c-4a76-b40e-61aa62798ed2</script>, peu explicite.
- une **étiquette** (*label*), e.g. <script type="c-text">DATA</script>, explicite mais pas de garantie d'unicité.

⚠ L'UUID et l'étiquette peuvent êtres placés au niveau de la partition, ou du système de fichier.

💡 Dans le cadre des TP nous vous fournissons la commande <script type="c-bash">lsvol</script> permettant d'afficher les volumes :

<div class="terminal">
<pre># lsvol
PATH              LABEL TYPE  PARTTYPENAME       SIZE FSUSE% FSTYPE
/dev/nvme0n1            disk                   238,5G                    
├─/dev/nvme0n1p1  EFI   part  EFI System         512M     1% vfat
├─/dev/nvme0n1p2  BOOT  part  Linux filesystem   732M    36% ext4
</pre>
</div>

Un disque peut être découpé en 4 partitions appelées **partitions primaires**, qui peuvent elles-même être découpées en plusieurs **partitions secondaires**.

Pour manipuler les partitions d'un disque, on utilise généralement un logiciel comme gparted, ou la commande <script type="c-bash">fdisk <h>$DISK</h></script>. Il est ainsi possible d'ajouter une partition au disque s'il lui reste de l'espace disponible :
<div class="terminal">
<pre># lsvol
PATH              LABEL TYPE  PARTTYPENAME       SIZE FSUSE% FSTYPE
/dev/nvme0n1            disk                   238,5G                    
├─/dev/nvme0n1p1  EFI   part  EFI System         512M     1% vfat
├─/dev/nvme0n1p2  BOOT  part  Linux filesystem   732M    36% ext4
├─/dev/nvme0n1p3        part                   237,3G
</pre>
</div>

💡 Dans le cadre des TP, on utilisera la commande TUI <script type="c-bash">cfdisk <h>$DISK</h></script>. Par exemple <script type="c-bash">cfdisk <h>/dev/nvme0n1</h></script>.

Pour le moment la partition est vide, il faut maintenant la **formatter**, i.e. lui attribuer un système de fichier. Cela peut être fait via la commande <script type="c-bash">mkfs.<h>$FS</h> <h>$VOL</h></script> :
<div class="terminal">
<pre># mkfs.ext4 /dev/nvme0n1p3
# lsvol
PATH              LABEL TYPE  PARTTYPENAME       SIZE FSUSE% FSTYPE
/dev/nvme0n1            disk                   238,5G                    
├─/dev/nvme0n1p1  EFI   part  EFI System         512M     1% vfat
├─/dev/nvme0n1p2  BOOT  part  Linux filesystem   732M    36% ext4
├─/dev/nvme0n1p3        part  Linux filesystem 237,3G     0% ext4
</pre>
</div>

Il ne nous reste ensuite plus qu'à attribuer une étiquette au nouveau volume ainsi créé.

<div class="terminal">
<pre># e2label /dev/nvme0n1p3 DATA
# lsvol
PATH              LABEL TYPE  PARTTYPENAME       SIZE FSUSE% FSTYPE
/dev/nvme0n1            disk                   238,5G                    
├─/dev/nvme0n1p1  EFI   part  EFI System         512M     1% vfat
├─/dev/nvme0n1p2  BOOT  part  Linux filesystem   732M    36% ext4
├─/dev/nvme0n1p3  DATA  part  Linux filesystem 237,3G     0% ext4
</pre>
</div>

⚠ La commande permettant d'attribuer une étiquette au volume change en fonction du système de fichier utilisé.

### Monter des volumes

Maintenant que nous avons un nouveau volume, il nous faut l'ajouter à notre arborescence. C'est à dire choisir un dossier dont le contenu sera celui de notre volume. On appelle cette opération **monter** (*mount*) un volume, et le dossier dans lequel il est monté, le **point de montage** (*mountpoint*) :

<div class="terminal">
<pre># lsvol
PATH              LABEL TYPE  PARTTYPENAME       SIZE FSUSE% FSTYPE MOUNTPOINT
/dev/nvme0n1            disk                   238,5G                    
├─/dev/nvme0n1p1  EFI   part  EFI System         512M     1% vfat   /boot/efi
├─/dev/nvme0n1p2  BOOT  part  Linux filesystem   732M    36% ext4   /boot
├─/dev/nvme0n1p3  DATA  part  Linux filesystem 237,3G     0% ext4   /
</pre>
</div>

Pour monter un volume, on utilise la commande <script type="c-bash">mount -L <h>$LABEL</h> <h>$DIR</h></script>. Cette dernière possède de nombreuses options, notamment pour monter le volume en lecture seule (<script type="c-bash">-o ro</script>).

💡 Par défaut, on monte usuellement les volumes dans les dossiers suivants :
- <script type="c-text">/media/<h>$NAME</h>/</script> : pour les volumes amovibles (e.g. clef USB) ;
- <script type="c-text">/mnt/<h>$NAME</h>/</script> : pour les volumes montés manuellement.

💡 La commande <script type="c-bash">umount <h>$DIR</h></script> permet l'opération inverse, celui de démonter le volume.

💡 Le fichier <script type="c-text">/etc/fstab</script> (*FileSystem TABle*) liste les systèmes de fichiers à monter au démarrage de la machine :

<script type="c-text">
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
LABEL=DATA      /               ext4    errors=remount-ro 0       1
</script>

Il est alors possible d'indiquer les informations suivantes :
- <script type="c-text"><options></script> : les options à transmettre à la commande <script type="c-bash">mount</script>. (noauto cf TP).
- <script type="c-text"><dump></script> : obsolète.
- <script type="c-text"><pass></script> : l'ordre dans lequel monter le système de fichier (1 pour la racine, 2+ pour les suivants).

💡 Il est aussi possible de monter des volumes NFS (*Network FileSystem*) distants,\
cf https://doc.ubuntu-fr.org/disque_reseau

💡 Il est aussi possible de monter des dossiers distants via SSH avec la commande <script type="c-bash">sshfs</script>, cf TP.

## Techniques de sauvegardes

### Au niveau du volume

Une méthode triviale de sauvegarde est tout simplement de copier le contenu du volume, octets par octets :

<script type="c-bash">
dd <h>[conv=sparse]</h> if=<h>$SRC</h> of=<h>$DST</h>
</script>

Cependant, cette méthode génère des sauvegardes volumineuses, bien qu'il soit possible de les compresser ensuite.

#### RAID

Le RAID (<i><u>R</u>edundant <u>A</u>rray of <u>I</u>nexpensive <u>D</u>isk</i>) permet de dupliquer, en temps réel, les données sur plusieurs disques afin d'éviter les pertes de données en cas de défaillance matérielle. Il possède plusieurs "niveaux" :

<table>
    <thead>
        <tr>
            <th>Nom</th>
            <th>Description</th>
            <th># disques</th>
            <th>Résilience</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>RAID 0 (striping)</td>
            <td>volume sur plusieurs disques</td>
            <td>N</td>
            <td>0</td>
        </tr>
        <tr>
            <td>RAID 1 (mirroring)</td>
            <td>duplique un disque</td>
            <td>1+1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>RAID 5 (distributed parity)</td>
            <td>bloc de parité b<sub>p</sub> = b<sub>1</sub> ⊕ ... ⊕ b<sub>n</sub></td>
            <td>N+1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>RAID 6 (dual parity)</td>
            <td>2 blocs de parité</td>
            <td>N+2</td>
            <td>2</td>
        </tr>
    </tbody>
</table>

💡 Il est possible de faire des combinaisons, e.g. RAID 1+0 ou RAID 10.

#### LVM

<b>LVM</b> (<i><u>L</u>ogical <u>V</u>olume <u>M</u>anager</i>) est un logiciel permettant de gérer les volumes d'un ordinateur. Pour cela :
1. on formate des volumes alors appelés <b>volumes physiques</b> (<i><u>p</u>hysical <u>v</u>olume</i>) :<br/>
   <script type="c-bash">pvcreate <h>$VOLUME...</h></script>
2. qu'on regroupe ensuite au sein d'un <b>groupe de volume</b> (<i><u>v</u>olume <u>g</u>roup</i> ≈ disque virtuel) :<br/>
   <script type="c-bash">vgcreate <h>$VG_NAME</h> <h>$VOLUME...</h></script>
3. qu'on redécoupe ensuite en **volumes logiques** (<i><u>l</u>ogicial <u>v</u>olume</i> ≈ partition virtuelle) :<br/>
   <script type="c-bash">lvcreate --name <h>$LV_NAME</h> <h>$VG_NAME</h> <h>{-l 100%FREE,--size 10GB}</h></script>

LVM offre alors différentes fonctionnalités :
- RAID : <script type="c-bash">--type raid1 --nosync</script>
- instantanés (<i>snapshots</i>) du système de fichier ;
- etc.

💡 Bien évidemment LVM possède de très nombreuses commandes permettant de manipuler les PV, VG, et LV.

### Au niveau du système de fichier

Une autre méthode relativement simple de sauvegarde, est de tout simplement copier les fichiers (<u>a</u>rchive) :
<script type="c-bash">
cp -a <h>$SRC...</h> <h>$DST</h>
</script>

💡 Il est aussi possible de créer une archive compressée :
<script type="c-bash">
tar -cf <h>-{z,j}</h> <h>$ARCHIVE</h> <h>$SRC...</h> # compresser
tar -xf <h>-{z,j}</h> <h>$ARCHIVE</h> <h>$DST</h>    # décompresser
</script>

Pour une copie vers/à partir d'un ordinateur distant, il est bien évidemment possible de monter un volume ou partition distante, puis d'effectuer la copie.

Plus pratique, on peut utiliser <script type="c-bash">scp</script> (<u>s</u>ecure <u>c</u>opy <u>p</u>rotocol), où les chemins sont de la forme <script type="c-text"><h>[$USER@$SERVER:]$PATH</h></script> :
<script type="c-bash">
scp -r <h>$SRC...</h> <h>$DST</h>
</script>

#### Sauvegarde incrémentale

Pour le moment on effectuait une **sauvegarde complète**, i.e. la sauvegarde de l'ensemble des données.

On se retrouve alors avec des fichiers identiques, dupliqués dans les différentes sauvegardes. Or si la majorité des fichiers ne changent pas d’une sauvegarde sur l’autre, cela peut très vite prendre beaucoup de place pour rien.

Afin d'accélérer les sauvegardes et d'en réduire le poids, il est possible d'effectuer des <b>sauvegardes incrémentales</b>, i.e. de ne sauvegarder que les modifications depuis la dernière sauvegarde. Cela est possible avec <script type="c-bash">rsync</script>, similaire à <script type="c-bash">scp</script>, mais offrant bien plus de fonctionnalités (dont les sauvegardes incrémentale).

💡 Son utilisation n’étant pas simple, nous vous fournirons, un script basé sur <script type="c-bash">rsync</script>, facilitant son usage.


Les sauvegardes incrémentales utilisent souvent des **liens physiques** (*hard links*) permettant de placer un même fichier (inode) à plusieurs endroit différents (donc dans plusieurs sauvegardes), tout en évitant sa copie.

La commande <script type="c-bash">ln [-s] <h>$SRC</h> <h>$DST</h></script> (<u>l</u>i<u>n</u>k) permet de créer un lien physique (ou <u>s</u>ymbolique).

💡 Le fichier ne sera réellement supprimé que lorsque toutes ses occurrences seront supprimées.

⚠ Il n'est pas possible de faire un lien physique d'un dossier. Pour cela il faudra utiliser un <b>lien symbolique</b>, un fichier spécial qui contiendra le chemin de la cible.

Le principe est alors simple : pour chaque fichier, s’il n’a pas été modifié depuis la dernière sauvegarde, on crée un lien physique pointant sur sa dernière version sauvegardée, sinon, on copie le fichier. Une sauvegarde sera alors un dossier que vous pourrez parcourir, supprimer, renommer, modifier, etc. comme s’il avait été créé via <script type="c-bash">cp -a</script>.

#### Gestionnaire de version

Pour des fichiers de configurations, on souhaite généralement effectuer des sauvegardes plus intelligentes. Pour cela on n'utilise un <b>gestionnaire de version</b>, comme Git (que vous verrez plus tard dans votre formation), permettant de :
- ajouter une description aux versions.
- comparer deux versions.
- gérer, et maintenir plusieurs versions en parallèle.
- annuler une modification précise.
- intégration avec des interfaces Web et des fonctionnalités comme les issues.

#### Synchronisation de fichiers

Dans le cas de dossiers partagés entre plusieurs utilisateurs, on souhaite généralement conserver un historique de chaque modifications afin d'en avoir un suivi, et d'être capable, lorsque nécessaire, de restaurer un fichier à une version précédente.

Pour cela on utilisera usuellement un logiciel de synchronisation de fichiers, comme Seafile.

#### Exportations/Importations

Certains logiciels (e.g. les SGBD) permettent d'exporter et d'importer leurs données, par exemple en faisant un *dump* d'une base de donnée. Le format de l'export dépend du logiciel, et est généralement adapté aux besoins spécifiques du logiciel.

### Instantanés

Que se passe-t-il aussi si le serveur modifie des fichiers pendant la sauvegarde ?<br/>
La sauvegarde se retrouverait dans un état invalide, avec un mix de fichiers pré-modifications et post-modifications.

Une sauvegarde nécessite ainsi généralement l'arrêt des services du serveur. Or les opérations de sauvegardes peuvent être longues, de plusieurs minutes à plusieurs heures. Ce qui est autant de temps pendant lesquel les services seront indisponibles.


La solution est alors de créer un instantané (snapshot) du système de fichier à un instant donné, et d’effectuer la sauvegarde à partir de cet instantané :

<script type="c-bash">
# arrêt des services
lvcreate -s --name <h>$LV_NAME</h>-snap <h>$LV_NAME</h> <h>{-l 100%FREE,--size 10GB}</h>
# redémarrage des services
# sauvegarde
</script>

Lors de la modifications d'un bloc, l'instantané enregistrera le bloc original. Ainsi lorsqu'on cherchera à récupérer un bloc, LVM ira le rechercher dans l'instantané, puis dans le volume originel si non trouvé (i.e. pas modifié).

⚠ Une fois la sauvegarde effectuée, il faudra bien penser à supprimer l'instantané :
<script type="c-bash">
lvremove <h>$LV_NAME</h>-snap
</script>

</main>
    </body>
</html>