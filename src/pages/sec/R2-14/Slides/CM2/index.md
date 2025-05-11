<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM2 (AdminSys)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/slides/index.css"  rel="stylesheet">
        <script  src="/skeleton/slides/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

<frame-uca-title
    caption   = "R2-14 Administration Système"
    subcaption= "CM2 : Les fichiers"
    author    = "Denis MIGDAL"
    mail      = "denis.migdal@uca.fr">
</frame-uca-title>

<frame-section id="filesystem" name="Le système de fichiers">

<frame-uca>

<div>

Un ordinateur manipule et stocke des données binaires (i.e. suites de 0 et de 1) :
- données **persistantes** : sur le disque dur/SSD ;
- données **temporaires** : sur la mémoire vive (RAM).

💡 Opérations sur la RAM bien plus rapides, mais données perdues au redémarrage.

</div>

<div>

L'OS utilise un **système de fichiers** (*filesystem*) déterminant où et comment les données d'un **fichier** (*file*) sont stockés sur le disque. Chaque fichier est identifié par un **inode** (*<u>i</u>ndex <u>node</u>*).

<center>
    <img class="svg" src="/assets/admsys/img/filesystem.svg"/>
</center>

</div>

</frame-uca>

    <frame-subsection id="directories" name="Les dossiers">

<frame-uca>

<div>

**Dossier** (*directory*) ou **répertoire** (*folder*) : fichier contenant l'inode et le nom des fichiers qu'il inclus.

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

</div>

<div>

💡 <script type="c-bash">ls <h>$DIR</h></script> : liste le contenu d'un dossier.
<div class="terminal">
<pre>$ ls foo
📄  faa  <font color="#0039AA"><b>📂  fee</b></font>  📄  fii  📄  fuu</pre>
</div>

</div>

⚠ <b>fichiers cachés</b> : fichiers dont le nom commence par <script type="c-text">.</script>, ne s'affiche qu'avec l'option <script type="c-bash">-a</script> (<u>a</u>ll).

</frame-uca>

</frame-subsection>
<frame-subsection id="metadata" name="Les méta-données d'un fichier">

<frame-uca>

<div>

Pour chaque fichier, le système enregistre ses méta-données :

<ul class="flex-3">
    <li>son type</li>
    <li>son propriétaire</li>
    <li>sa date de dernière modification</li>
    <li>sa taille</li>
    <li>les droits d'accès au fichier</li>
    <li>etc.</li>
</ul>

</div>

<div>

💡 <script type="c-bash">ls -lh <h>[-d]</h> <h>$FILE[...]</h></script> : afficher les méta-données.
<div class="terminal">
<pre>$ ls -lh -d foo
<u style="text-decoration-style:single">Permissions</u> <u style="text-decoration-style:single"> User  </u> <u style="text-decoration-style:single"> Group </u> <u style="text-decoration-style:single"> Size </u> <u style="text-decoration-style:single">     Date Modified      </u> <u style="text-decoration-style:single"> Name  </u>
<font color="#0039AA"><b>d</b></font><font color="#44AA44">r</font><font color="#AA5500">w</font><font color="#AA0000">x</font><font color="#44AA44">r</font><font color="#AA5500">w</font><font color="#AA0000">x</font><font color="#44AA44">r</font><font color="#8A8A8A">-</font><font color="#AA0000">x</font>  <font color="#FFFFD7">demigda</font> <font color="#D7D7AF">demigda</font> <font color="#FFFFAF">4.0</font> <font color="#FFFFAF">KB</font> <font color="#00D700">Tue Apr  1 09:16:45 2025</font> <font color="#0039AA"><b>📂  foo</b></font></pre>
</div>

</div>


<div>

⚠ Ne pas confondre les méta-données stockées au niveau du :
- **système de fichiers** : communes entre tous les fichiers ;
- **fichier** : dépendant de son format (e.g. png, jpeg, pdf, zip).
</div>

</frame-uca>

</frame-subsection>
<frame-subsection id="permissions" name="Les permissions">

<frame-uca>

<div class="terminal">
<pre><u style="text-decoration-style:single">Permissions</u> <u style="text-decoration-style:single"> User  </u> <u style="text-decoration-style:single"> Group </u> <u style="text-decoration-style:single"> Size </u> <u style="text-decoration-style:single">     Date Modified      </u> <u style="text-decoration-style:single"> Name  </u>
<font color="#0039AA"><b>d</b></font><font color="#44AA44">r</font><font color="#AA5500">w</font><font color="#AA0000">x</font><font color="#44AA44">r</font><font color="#AA5500">w</font><font color="#AA0000">x</font><font color="#44AA44">r</font><font color="#8A8A8A">-</font><font color="#AA0000">x</font>  <font color="#FFFFD7">demigda</font> <font color="#D7D7AF">demigda</font> <font color="#FFFFAF">4.0</font> <font color="#FFFFAF">KB</font> <font color="#00D700">Tue Apr  1 09:16:45 2025</font> <font color="#0039AA"><b>📂  foo</b></font></pre>
</div>

<div>

Les droits sont décrits par 3 caractères (<script type="c-text">-</script> affiché si le droit n'est pas donné) :
- <script type="c-text">r</script> (<u>r</u>ead) : <b>lecture</b> du fichier (ou <b>lister</b> le contenu d'un dossier).
- <script type="c-text">w</script> (<u>w</u>rite) : <b>écriture</b> du fichier (ou <b>modifier</b> le contenu d'un dossier).
- <script type="c-text">x</script> (e<u>x</u>ec) : <b>exécution</b> du fichier script/binaire qui est alors un <i>exécutable</i> (ou <b>aller dans</b> le dossier).

</div>
<div>

Ces droits peuvent être attribués à :
- <script type="c-text">d<h>rwx</h>rwxrwx</script> : l'<b>utilisateur</b> (<i>user</i>) propriétaire du fichier.
- <script type="c-text">drwx<h>rwx</h>rwx</script> : le <b>groupe</b> d'utilisateur (<i>group</i>) propriétaire du fichier ;
- <script type="c-text">drwxrwx<h>rwx</h></script> : les <b>autres</b> utilisateurs.

</div>

<div>

⚠ Bien penser à donner le droit d'exécution (et de lecture) sur les fichiers de script.

</div>

</frame-uca>
<frame-uca>

<div>

<script type="c-bash">chown <h>[-R]</h> <h>[$USER][:$GROUP]</h> <h>$FILES...</h></script> (<u>ch</u>ange <u>own</u>er) : changer l'utilisateur/groupe propriétaire.

<script type="c-bash">chmod <h>[-R]</h> <h>$MODE,...</h> <h>$FILES...</h></script> (<u>ch</u>ange <u>mod</u>e) : changer les droits d'un fichier.

💡 <script type="c-bash">-R</script> (<u>r</u>ecursive) : appliquer les changements de manière récursive.

</div>

<div>
    <center>
        <script type="c-text"><h>$MODE</h></script> s'écrit sous la forme suivante :
    </center>
<div class="flex-3">
    <div>
        <center><script type="c-text"><h>$QUI</h></script></center>
        <ul>
            <li><script type="c-text">u</script> (<u>u</u>ser) : l'<b>utilisateur</b> </li>
            <li><script type="c-text">g</script> (<u>g</u>roup) : le <b>groupe</b></li>
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
</div>

- <script type="c-text">u+x</script> : ajouter le droit d'exécution à l'utilisateur propriétaire.
- <script type="c-text">go-r</script> : retire le droit de lecture au groupe propriétaire et aux autres.
- <script type="c-text">o=rx</script> : donne aux autres uniquement les droits de lecture et d'exécution (retire le droit de lecture). 
- <script type="c-text">a-x,a+r</script> : retire le droit d'exécution à tous, et ajoute le droit de lecture.


</frame-uca>

</frame-subsection>
</frame-section>
<frame-section id="path" name="Les chemins">

<frame-uca>

<div>

- *inode* : identifie chaque fichier par un numéro.

</div><div>

- peu pratique pour un humain :
  - à quoi correspond le fichier <script type="c-text">6577188</script> ?
  - quel est l'*inode* du dossier dans lequel j'ai enregistré mes note de cours ?

</div><div>

- **chemins** : désigne les fichiers de manière plus explicite et simple à retenir.

</div>

</frame-uca>

<frame-subsection id="abspath" name="Chemin absolu">

<frame-uca>

<div>

Sous Linux tous les fichiers sont contenus dans le dossier **racine** (*root directory*), noté <script type="c-text">/</script> :
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

</div><div>

**Chemin absolu** (*absolute path*) : en partant de la **racine**, chemin à emprunter pour atteindre le fichier.

💡 <script type="c-text">/tmp/foo/faa</script> est le chemin absolu de <script type="c-text">faa</script>.

</div><div>

💡 Par convention, on suffixe le nom des dossiers par <script type="c-text">/</script>, e.g. <script type="c-text">/tmp/foo/fee/</script>.

⚠ Évitez les chemins absolus dans les scripts : il n'est pas forcément le même d'un ordinateur à l'autre.

</div>

</frame-uca>

</frame-subsection><frame-subsection id="relpath" name="Chemin relatif">

<frame-uca>

<div>

**Dossier de travail** (*working directory*), noté <script type="c-text">./</script> : dossier dans lequel on se trouve actuellement.

💡 Ce dossier est indiqué dans l'**invite de commande** : <div class="terminal"><pre><font color="#4CE64C"><b>demigda@demigda-Latitude-5400</b></font>:<font color="#295FCC"><b>/tmp/foo</b></font>$</pre></div>

</div>


<div>

**Chemin relatif** (*relative path*) : en partant du **dossier de travail**, chemin pour atteindre le fichier.

💡 <script type="c-text">./foo/faa</script> est le chemin relatif de <script type="c-text">faa</script> à partir de <script type="c-text">/tmp/</script>.

</div>

<div>

<ul>
    <li mark="💡"> <script type="c-text">../</script> représente le parent d'un dossier. 

- <script type="c-text">./../../</script> est le chemin relatif de <script type="c-text">/tmp/</script> à partir de <script type="c-text">/tmp/foo/fee/</script>.

</li></ul>
</div>

</frame-uca><frame-uca>

<div>

💡 <script type="c-bash">cd <h>$DIR</h></script> (*<u>c</u>hange <u>d</u>irectory*) : se déplacer dans le dossier <script type="c-bash"><h>$DIR</h></script>.

💡 <script type="c-bash">pwd</script> (*<u>p</u>rint <u>w</u>orking <u>d</u>irectory*) : afficher le dossier de travail.
<div class="terminal"><pre>$ pwd
/tmp/foo
</pre></div>
    
</div>

<div>

⚠ Dans un script, les chemins relatifs sont évalués relativement au <b>dossier de travail</b> actuel.

💡 Pour placer le dossier de travail à l'emplacement du script :
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
</div>

</frame-uca>

</frame-subsection><frame-subsection id="manip_files" name="Manipuler les fichiers">

<frame-uca>

<div>

Commandes standards pour manipuler les fichiers :

<ul class="flex-2">

    <li><script type="c-bash">mkdir <h>$DIR...</h></script> (<i><u>m</u>a<u>k</u>e <u>dir</u>ectory</i>) <b>créer</b>.</li>
    <li><script type="c-bash">touch <h>$FILE...</h></script> <b>créer un fichier</b> vide.</li>
    <li><script type="c-bash">rm <h>[-r]</h> <h>$FILE...</h></script> (<i><u>r</u>e<u>m</u>ove</i>) <b>supprimer</b>.</li>
    <li><script type="c-bash">cp <h>[-r]</h> <h>$SRC...</h> <h>$DST</h>/</script> (<i><u>c</u>o<u>p</u>y</i>) <b>copier</b>.</li>
    <li><script type="c-bash">mv <h>$SRC...</h> <h>$DST</h>/</script> (<i><u>m</u>o<u>v</u>e</i>) <b>déplacer</b>.</li>
    <li><script type="c-bash">mv <h>$SRC</h> <h>$DST</h>/<h>$NAME</h></script> <b>déplacer et renommer</b>.</li>
</ul>
<ul>
    <li><script type="c-bash">find <h>$DIR</h> -name <h>$NAME</h></script> rechercher (récursivement) dans <script type="c-bash"><h>$DIR</h></script> les fichiers correspondant à <script type="c-bash"><h>$NAME</h></script>.</li>
</ul>
</div>

💡 <script type="c-bash">-r</script> : copier/supprimer des dossiers récursivement.<br/>
💡 <script type="c-bash">mkdir -p <h>$DIR</h></script> : créer les dossiers parents de <script type="c-bash"><h>$DIR</h></script> s'ils n'existent pas.

⚠ <script type="c-bash">rm</script> : supprime **définitivement** les fichiers.<br/>
💡 <script type="c-bash">trash <h>$FILE...</h></script> : place les fichiers dans la corbeille.

</frame-uca>

</frame-subsection><frame-subsection id="pathset" name="Ensemble de chemins">

<frame-uca>

<div>

- pour manipuler plusieurs fichiers ⇒ écrire leurs chemins uns à uns ☹.

</div><div>

- Représenter un ensemble de chemins avec les **caractères de remplacements** (*wildcard*) :
  - <script type="c-text">*</script> : 0 à plusieurs <b>caractères</b>, <i>e.g. <script type='c-bash'>./*.txt</script> : tous les fichiers d'extension ".txt"</i>.
  - <script type="c-text">**/</script> : 0 à plusieurs <b>dossiers</b>, <i>e.g. <script type='c-bash'>./**/a.txt</script> : le fichier "a.txt" dans un des sous dossiers</i>.
  - <script type="c-text">{<h>$VALS,...</h>}</script> : une <b>alternative</b>, <i>e.g. <script type="c-bash">./{foo, faa}.txt</script> : "./foo.txt" ou "./faa.txt"</i>.

</div>

<div>

💡 <script type="c-text">~<h>[$USER]</h>/</script> : alias représentant le chemin absolu du home de l'utilisateur <script type="c-text"><h>$USER</h></script> (actuel si non précisé).

💡 Utilisez l'auto-complétion afin d'éviter les erreurs lors de la saisie d'un chemin.

</div>

</frame-uca>
</frame-subsection>

</frame-section>

<frame-section id="plan_sav" name="Prévoir des sauvegardes">

<frame-subsection id="motiv" name="Motivations">

<frame-uca>

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

</frame-uca>
</frame-subsection><frame-subsection id="organize" name="Organiser ses fichiers">
<frame-uca>

<div>

Préparer une sauvegarde :
- **quoi** : que va-t-on sauvegarder ?
- **comment** et **où** va-t-on enregistrer la sauvegarde ?
- **quand** et **à quelle fréquence** va-t-on effectuer la sauvegarde ?

</div>

<div>

Bien organiser ses fichiers :

<div class="flex-2">

<div>

- retrouver facilement un fichier ;
- identifier les fichiers obsolètes ;
- faciliter les sauvegardes.

</div><div>

<script type="c-text">~/Documents/<h>$SEMESTRE</h>/<h>$MODULE</h>/{TP,CM}/</script>
- cohérence ;
- consistance.    

</div>
</div>

</div>

<div>

Par exemple :
- <script type="c-text">~/Documents/</script> : supports de cours, rendus de TP, etc. à sauvegarder chaque soir.
- <script type="c-text">~/Téléchargements/</script> : téléchargements temporaires, ne nécessite pas de sauvegardes.

</div>    

</frame-uca>

</frame-subsection><frame-subsection id="linux_files" name="Arborescence Linux">
<frame-uca>

- <script type="c-text">/home/<h>$USER</h>/</script> : fichiers <b>personnels</b> de l'utilisateur <script type="c-text"><h>$USER</h></script> (dossier potentiellement <b>sensible</b>).
- <script type="c-text">/usr/{lib,bin,sbin}/</script> : logiciels installés (<b>lecture seule</b> et <b>partagé</b> entre plusieurs ordinateurs).
- <script type="c-text">/etc/<h>$NAME</h>/</script> : configuration du logiciel <script type="c-text"><h>$NAME</h></script>, données <b>spécifiques</b> à l'ordinateur (<b>lecture seule</b>).
- <script type="c-text">/srv/<h>$NAME</h>/</script> : fichiers servis par le serveur (e.g. pour un serveur Web, de fichier, etc), peu utilisé.
- <script type="c-text">/var/</script> : données écrites par les logiciels en cours d'exécution, <script type="c-text">/var/logs/<h>$NAME</h>/</script> contient les logs.
- <script type="c-text">/tmp/</script> : fichiers temporaires, supprimés au redémarrage de la machine (stockés en RAM).

<div>

⚠ Générer aléatoirement les noms des fichiers temporaires de <script type="c-text">/tmp/</script> afin d'éviter des collisions.

💡 Pour de **gros** fichiers temporaire, on utilisera généralement <script type="c-text">/var/tmp/</script> au lieu de <script type="c-text">/tmp/</script>.

</div>

⚠ Les utilisateurs ne peuvent modifier que les fichiers de leur home et de <script type="c-text">/{,var/}tmp/</script> (sauf exceptions).

</frame-uca>

</frame-subsection><frame-subsection id="app_files" name="Les fichiers des applications">
<frame-uca>

<table>
    <style scoped>
        th {
            text-align: left;
        }
    </style>
    <thead>
        <tr><th></th><th>Standard/Partagé</th><th>Local</th><th>Personnel</th></tr>
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

<div>

💡 <script type="c-text">/usr/{,local/}<h>[s]bin</h>/</script>, <script type="c-text">~/.local/<h>bin</h>/</script> : contiennent les commandes (fichier de même nom).

💡 <script type="c-text">/opt/<h>$NAME</h>/</script> : alternative à <script type="c-text">/usr/local/*/<h>$NAME</h>/</script>.

</div><div>

⚠ Conventions pas toujours très bien respectées :
- <script type="c-text">~/.ssh/</script> : configuration SSH d'un utilisateur (cf TP).
- <script type="c-text">~/.bashrc</script> : configuration du shell d'un utilisateur (cf TP).

</div>

</frame-uca>
</frame-subsection>
</frame-section>

<frame-section id="volumes" name="Volumes et partitions">

<frame-uca>

<div>

Un **volume** est un *espace de stockage* :
- disque entier ;
- *partie* de disque (**partition**) ;
- ensemble de partitions ;
- clef USB ;
- etc.

</div>

💡 Sur un ordinateur personnel, généralement un seul système de fichier, sur le disque entier.

</frame-uca>
<frame-subsection id="motivations" name="Motivations">
<frame-subsubsection id="separate" name="séparer les données du système d'exploitation">

<frame-uca>

<div>

Séparer données et OS sur deux volumes différents.
- permet de (ré)installer l'OS sans effacer les données.

⚠ Sauvegardez vos données avant toutes opérations de ce genre !

</div><div>

Possibilité, sur un même ordinateur, d'installer plusieurs OS (qu'on choisi au démarrage) pour :
- avoir un dual boot Linux-Windows ;
- avoir un système d'exploitation de secours ;
- tester un système d'exploitation.

</div><div>

💡 <b>live USB</b> : clef USB surlaquelle un système d'exploitation est installé.

⚠  Il est très vivement recommandé d'avoir au moins un live USB.

</div>

</frame-uca>
</frame-subsubsection><frame-subsubsection id="several" name="utiliser différents systèmes de fichiers">

<frame-uca>

<div>

Différents systèmes de fichiers...

<ul class="flex-2">
    <li> compression des données (<script type="c-text">ZFS</script>, <script type="c-text">BTRFS</script>) ;</li>
    <li> chiffrement des données (via <script type="c-text">cryptosetup</script>) ;</li>
    <li> conservation d'un historique (via <script type="c-text">ZFS</script>, ou <script type="c-text">LVM</script>) ;</li>
    <li> données stockées sur la RAM (<script type="c-text">tmpfs</script>);</li>
    <li> données stockées à distance (<script type="c-text">NFS</script>, <script type="c-text">sshfs</script>).</li>
</ul>
<ul>
    <li> modifications possibles mais non-persistantes (via <script type="c-text">aufs</script>, <script type="c-text">unionfs</script>, <script type="c-text">overlayfs</script>, ou <script type="c-text">mergefs</script>);</li>
</ul>

</div>
<div>

... pour différents besoins :

<ul class="flex-2">
    <li>sauvegardes fréquentes ;</li>
    <li>lecture seule ;</li>
    <li>partagé sur le réseau ;</li>
    <li>stocké en RAM.</li>
</ul>

</div>

Or, un volume ne peut contenir qu'<b>un seul</b> système de fichier.<br/>
Il faut alors <b>découper</b> les ressources de stockages en plusieurs volumes.

<div>

💡 Par défaut, les systèmes de fichiers suivants sont usuellement utilisés :

<ul class="flex-4">
    <li><script type="c-text">ext4</script> pour Linux ;</li>
    <li><script type="c-text">NTFS</script> pour Windows ;</li>
    <li><script type="c-text">APFS</script> pour Apple ;</li>
    <li><script type="c-text">FAT32</script> pour les clefs USB ;</li>
</ul>


</div>

</frame-uca>
</frame-subsubsection>
</frame-subsection>
<frame-subsection id="create" name="Créer et formatter une partition">
<frame-uca>

<div>

Un volume peut être identifié par 3 éléments :
- un **chemin** dans <script type="c-text">/dev/</script>, e.g. <script type="c-text">/dev/sda</script>, nom susceptible de changer si l'ordre des disques change.
- un **UUID** (*IDentifiant Universel Unique*), e.g. <script type="c-text">42d1660e-e04c-4a76-b40e-61aa62798ed2</script>, peu explicite.
- une **étiquette** (*label*), e.g. <script type="c-text">DATA</script>, explicite mais pas de garantie d'unicité.

⚠ L'UUID et l'étiquette peuvent êtres placés au niveau de la partition ou du système de fichier.
</div>


<div>

💡 Dans le cadre des TP nous vous fournissons la commande <script type="c-bash">lsvol</script> permettant d'afficher les volumes :

<div class="terminal">
<pre># lsvol
PATH              LABEL TYPE  PARTTYPENAME       SIZE FSUSE% FSTYPE
/dev/nvme0n1            disk                   238,5G                    
├─/dev/nvme0n1p1  EFI   part  EFI System         512M     1% vfat
├─/dev/nvme0n1p2  BOOT  part  Linux filesystem   732M    36% ext4
</pre>
</div>
</div>

</frame-uca><frame-uca>

Un disque peut avoir 4 **partitions primaires**, découpées en plusieurs **partitions secondaires**.

<div>

Pour créer un nouveau volume :
1. <script type="c-bash">fdisk <h>$DISK</h></script> (ou logiciel comme gparted) pour créer/manipuler les partitions d'un disque.
<ul>
    <li mark="💡"><i>commande TUI <script type="c-bash">cfdisk <h>$DISK</h></script> en TP</i></li>
</ul>
2. <script type="c-bash">mkfs.<h>$FS</h> <h>$VOL</h></script> pour <b>formatter</b> la partition, i.e. lui attribuer un système de fichier.
3. <script type="c-bash">e2label <h>$VOL</h> <h>$LABEL</h></script> pour lui attribuer un label.

</div>

<div class="terminal">
<pre># mkfs.ext4 /dev/nvme0n1p3
# e2label /dev/nvme0n1p3 DATA
# lsvol
PATH              LABEL TYPE  PARTTYPENAME       SIZE FSUSE% FSTYPE
/dev/nvme0n1            disk                   238,5G                    
├─/dev/nvme0n1p1  EFI   part  EFI System         512M     1% vfat
├─/dev/nvme0n1p2  BOOT  part  Linux filesystem   732M    36% ext4
├─/dev/nvme0n1p3  DATA  part  Linux filesystem 237,3G     0% ext4
</pre>
</div>

⚠ La commande permettant d'attribuer une étiquette au volume dépend du système de fichier utilisé.

</frame-uca></frame-subsection>
<frame-subsection id="mount" name="Monter des volumes">

<frame-uca>

<div>

**monter** (*mount*) un volume : l'associer à un dossier (**point de montage**/*mountpoint*) de l'arborescence :

<div class="terminal">
<pre># lsvol
PATH              LABEL TYPE  PARTTYPENAME       SIZE FSUSE% FSTYPE MOUNTPOINT
/dev/nvme0n1            disk                   238,5G                    
├─/dev/nvme0n1p1  EFI   part  EFI System         512M     1% vfat   /boot/efi
├─/dev/nvme0n1p2  BOOT  part  Linux filesystem   732M    36% ext4   /boot
├─/dev/nvme0n1p3  DATA  part  Linux filesystem 237,3G     0% ext4   /
</pre>
</div>

</div>

<div>

<script type="c-bash">mount -L <h>$LABEL</h> <h>$DIR</h></script> : monter un volume (de nombreuses options e.g. lecture seule <script type="c-bash">-o ro</script>).<br/>
<script type="c-bash">umount <h>$DIR</h></script> : démonter le volume.

</div><div>

💡 Par défaut, on monte usuellement les volumes dans :
- <script type="c-text">/media/<h>$NAME</h>/</script> : pour les volumes amovibles (e.g. clef USB) ;
- <script type="c-text">/mnt/<h>$NAME</h>/</script> : pour les volumes montés manuellement.

</div>

</frame-uca><frame-uca>

<div>

<script type="c-text">/etc/fstab</script> (<i><u>F</u>ile<u>S</u>ystem <u>TAB</u>le</i>) : liste les systèmes de fichiers à monter au démarrage de la machine :

<script type="c-text">
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
LABEL=DATA      /               ext4    errors=remount-ro 0       1
</script>

</div>

- <script type="c-text"><options></script> : options à transmettre à la commande <script type="c-bash">mount</script>. (noauto cf TP).
- <script type="c-text"><dump></script> : obsolète.
- <script type="c-text"><pass></script> : ordre dans lequel monter le système de fichier (1 pour la racine, 2+ pour les suivants).

<div>

💡 Il est aussi possible de monter :
- des volumes NFS (*Network FileSystem*) distants,
cf https://doc.ubuntu-fr.org/disque_reseau
- des dossiers distants via SSH avec la commande <script type="c-bash">sshfs</script>, cf TP.

</div>

</frame-uca>
</frame-subsection>
</frame-section>

        </main>
    </body>
</html>