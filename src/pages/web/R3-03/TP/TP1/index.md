<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>TP1 (TW)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/index.css"  rel="stylesheet">
        <script  src="/skeleton/index.js"  type="module"     blocking="render"></script>
    </head>
    <body>
        <main>

# TP1 : HTML5

## Consignes

<tp-consignes></tp-consignes>

## Visual Studio Code

Dans le cadre des modules de Web, nous utiliserons l'IDE *Visual Studio Code*.

### Installation de Visual Studio Code

Visual Studio Code est déjà installé sur vos postes de travail UCA.

Si vous utilisez un poste de travail personnel, suivez les instructions ci-dessous :
- *Si vous bénéficiez des droits d’administration sur votre poste de travail :*
  1. [Téléchargez l’installateur](https://code.visualstudio.com/download) (.deb pour Linux).
  2. Installez le paquet (<shell-code>dpkg -i code_*.deb</shell-code>).
  3. S’il manque des dépendances, installez-les (<shell-code>apt -f install</shell-code>).
- *Sinon :*
  1. [Téléchargez le .tar.gz](https://code.visualstudio.com/download) (64bits) pour Linux.
  2. Décompressez le .tar.gz dans un dossier <shell-code class="d4rk"><var>$DIR</var></shell-code>.
  3. Ajoutez le dossier <shell-code class="d4rk"><var>$DIR</var>/VSCode-linux-arm64/bin/</shell-code> à votre <shell-code class="d4rk"><var>$PATH</var></shell-code>.

### Configuration de Visual Studio Code

1. Dans un terminal, lancez Visual Studio Code via la commande <shell-code>code</shell-code>.<br/>
   ⚠ Sur les postes de travail UCA, vous ne pourrez pas installer les extensions si vous lancez Visual Studio Code via l’interface graphique *(problèmes de variables d’environnements mal non-définies)*.
2. Ouvrez la barre latérale des extensions via <key-shortcut>Ctrl+⇧+X</key-shortcut>
3. Recherchez, puis installez les extensions suivantes :
   1. *HTMLHint* : améliore l’affichage du code HTML dans l’éditeur.
   1. *Live server* : permet de visualiser votre site en temps réel.

### Utilisation de Visual Studio Code

Vous pouvez alors ouvrir un dossier dans Visual Studio Code :
1. *à partir de Visual Studio Code* :<br/>
   `Fichier -> Ouvrir le dossier`.
1. *à partir d'un explorateur de fichier* en cliquant-droit sur le dossier puis :<br/>
  `Ouvrir avec -> Visual Studio Code`.

Vous pouvez alors visualiser et manipuler l'arborescence de votre projet via la barre latérale gauche.

💡 Pour lancer votre projet dans un navigateur, cliquez sur "Go live" en bas à droite.


Visual Studio Code offre aussi les fonctionnalités suivantes :
1. Auto-complétion.
1. Un accès à la documentation MDN au survol d’une balise.
1. Réduire/ouvrir les balises *(via les petits triangles à gauche des n° de lignes)*.
1. Navigation dans l'arborescence d'un fichier via la barre au-dessus de l'éditeur.

Il vous est recommandé d’organiser votre espace de travail de la sorte :
- *Bureau 1* :
  - à gauche, Visual Studio Code
  - à droite, votre site Web.
- *Bureau(x) 2+* : Le sujet de TP, la documentation, votre cours, etc.

## Votre premier composant Web

### Ouvrir le projet

1. Téléchargez, puis décompressez l'archive [Site Web](../../../../assets/web/W1-TP1.zip).
1. Ouvrez le dossier dans Visual Studio Code, puis lancez `Go Live`.
1. Vous devriez alors voir un texte s'afficher dans la page Web.

💡 Le dossier ainsi ouvert est alors la racine (*root dir*) <shell-code>$ROOT</shell-code> de votre site Web.<br/>
Dans le navigateur, il correspondra à l'URL `http://localhost:5000/`.

Pour rappel, une URL suit la forme suivante : <shell-code class="d4rk"><var>$PROTO</var>//<var>$HOST</var>/<var>$PATHNAME</var></shell-code> :
- <shell-code class="d4rk"><var>$PROTO</var></shell-code> : le protocole, ici <shell-code>http:</shell-code>.
- <shell-code class="d4rk"><var>$HOST</var></shell-code> : l'hôte, indique l'adresse du serveur Web (où le joindre).
- <shell-code class="d4rk"><var>$PATHNAME</var></shell-code> : le chemin (*path*), indique le fichier demandé.

💡 Dans votre projet, une telle URL correspondra au fichier <shell-code class="d4rk"><var>$ROOT</var>/<var>$PATHNAME</var></shell-code>.

💡 Si l'URL correspond à un dossier, par défaut, son fichier `index.html` sera affiché.

### L'inspecteur

1. Ouvrez l'inspecteur en cliquant-droit sur le texte puis sur `Inspecter`.

Vous pouvez alors visualiser et manipuler le DOM de votre page Web.
- En haut, la barre de recherche 🔍 recherche des éléments à partir d'un sélecteur.
- En bas, vous pouvez naviguer parmi les ancêtres de l'élément sélectionné.
- Vous pouvez déplier et replier les éléments en via le triangle à leur gauche.

💡 Vous remarquerez alors que l'élément personnalisé <html-code>\<hello-world\></html-code> contient un "#shadow-root" incluant le contenu affiché du composant Web.

⚠ Toutes modifications du DOM via l'inspecteur sont locales et temporaires.

### LISS

Afin de créer des composants Web simplement, en HTML uniquement, nous utiliserons LISS en mode automatique. LISS offre une [documentation en français](https://github.com/denis-migdal/LISS/blob/V2/doc/fr/auto.md) ainsi qu'un [bac à sable](https://denis-migdal.github.io/LISS/dist/dev/pages/playground/?example=auto-html) contenant divers exemples. 

Dans le cadre de ce projet, chaque composant Web est défini par un dossier :<br>
<shell-code class="d4rk"><var>$ROOT</var>/components/<var>$NAME</var>/</shell-code>

Dans ce dossier, le contenu du composant Web est défini par le fichier <shell-code class="d4rk">index.html</shell-code>.

⚠ Respectez la casse et la convention <shell-code class="d4rk"><var>$ROOT</var>/components/<var>$NAME</var>/index.html</shell-code> sinon votre composant ne fonctionnera pas !

1. Lisez la documentation de LISS et visualisez ses examples dans le bac à sable.
1. Modifiez le contenu de <html-code>\<hello-world\></html-code> afin d'afficher `Bonjour le monde ;)`.
1. Créez un nouveau composant Web <html-code>\<my-hello\></html-code> affichant `Bonjour ;)`.
1. Ajoutez ce nouveau composant Web à la page Web.
1. Vérifiez que `Bonjour ;)` s'affiche bien dans la page Web.

## Créer des composants Web plus avancés.

### Contenu dynamique dépendant des attributs de l'élément

LISS permet d'insérer la valeur d'un attribut de l'élément personnalisé dans son contenu. Plus concrètement, <html-code class="d4rk">${<var>$ATTR_NAME</var>}</html-code> sera remplacé par la valeur de l'attribut <html-code class="d4rk"><var>$ATTR_NAME</var></html-code>.

1. Créer un nouveau composant web <html-code>\<user-desc\></html-code> contenant :
   - un titre de niveau 2 dont le texte est <html-code>User ${user-id}</html-code>.
   - un texte <html-code>Nom : ${user-name}</html-code> suivi d'un retour à la ligne (*line <u>br</u>eak*).
   - un texte <html-code>Prénom : ${user-surname}</html-code> suivi d'un retour à la ligne (*line <u>br</u>eak*).
   - un texte <html-code>Âge : ${user-age}</html-code> suivi d'un retour à la ligne (*line <u>br</u>eak*).
2. En vous inspirant de `/index.html`, créez une nouvelle page `/user/` via un fichier `/user/index.html` affichant la description d'un utilisateur John Doe de 42 ans.
3. Vérifiez que la page `/user/` affiche bien la description de l'utilisateur.

💡 Une telle fonctionnalité est usuellement implémentée en JavaScript, mais LISS permet de cacher cette complexité. Ici, l'attribut n'est pas synchronisé avec le contenu, c'est à dire que si vous modifiez l'attribut via l'inspecteur, sa valeur ne sera pas mise à jour dans le contenu de l'élément personnalisé.

💡 De nombreux framework web fournissent des fonctionnalités équivalentes et bien plus avancées.

### Répéter un élément personnalisé.

1. À la fin de la page `/user/` ajoutez un titre de niveau 3 `Dernières connexions`
1. Ajoutez une liste ordonnée (*<u>o</u>rdered <u>l</u>ist*) contenant 10 éléments (*<u>l</u>ist <u>i</u>tem*) :<br/>
   <html-code>[2020-02-23] \<b\>localhost\</b\> \<em\>1h30\</em\></html-code>
1. Créez un composant personnalisé <html-code>\<user-connexion\></html-code> pour <b>remplacer</b> les éléments de cette liste. Ses attributs seront <html-code>date</html-code>, <html-code>host</html-code>, et <html-code>duration</html-code>.
1. Vérifiez que la page `/user/` affiche bien la liste des dernières connexions.
1. Quel est l'un des intérêts des composants personnalisés exploité ici ?
   <pre contenteditable></pre>

### Hériter d'un élément existant

1. Créez une nouvelle page Web `/users/` contenant un tableau dont la première colonne de l'en-tête sera vide, et les suivantes seront `ID`, `Nom`, `Prénom`, `Âge`.
1. Créez un nouveau composant Web <html-code>\<user-line\></html-code> qui correspondra à une ligne du tableau et qui contiendra 5 cellules (<u>t</u>able <u>d</u>ata) :
   - une <u>im</u>a<u>g</u>e dont la <u>s</u>ou<u>rc</u>e sera <html-code>/assets/img/roles/${user-role}.jpg</html-code> ;
   - l'identifiant (attribut <html-code>user-id</html-code>) ;
   - le prénom (attribut <html-code>user-surname</html-code>) ;
   - le nom (attribut <html-code>user-name</html-code>) ;
   - l'âge (attribut <html-code>user-age</html-code>) ;
1. Vérifiez que la page `/users/` affiche bien un tableau vide.
2. Ajoutez 5 lignes au tableau de `/users/` en utilisant une balise :
   <html-code class="block">\<tr is="user-line"\></html-code>
   💡 3 rôles sont définis : `admin`, `user`, et `disabled`.
1. Vérifiez que la page `/users/` affiche bien 5 utilisateurs.
2. Observez une ligne via l'inspecteur. Vous remarquerez que cet élément n'a pas de `#shadow-root`.
2. Intervertissez les colonnes `Nom` et `Prénom`.
2. Transformez le contenu de la cellule `ID` en un lien hypertexte renvoyant sur <html-code>/user/?id=${user-id}</html-code>.
2. Vérifiez que le lien hypertexte fonctionne bien en cliquant dessus.
2. Quel est l'un des intérêts des composants personnalisés exploité ici ?
   <pre contenteditable></pre>

💡 Pour le moment, <html-code>/user/?id=${user-id}</html-code> affichera toujours le même utilisateur. Nous verrons par la suite comment générer dynamiquement son contenu en fonction de données locales ou externes.

</main>
    </body>
</html>