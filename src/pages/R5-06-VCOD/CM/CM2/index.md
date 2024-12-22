<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM2 (Dev Log)</title>
		<meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" blocking="render"></script>
    </head>
    <body class="hide_h1">
        <header></header>
        <main>

⚠ [Draft] Document en cours de rédaction.

# Git

## Motivations

Lorsque vous travaillez sur un projet, chaque modifications fait passer votre projet d'une version x à une version x+1. Cependant, ces modifications peuvent (temporairement) altérer le bon fonctionnement de votre projet, e.g. une modification peut introduire un bug empêchant l'exécution de votre programme.

On souhaite donc à minima conserver une version "qui marche", en plus de la version actuelle (de travail), afin de pouvoir :
- continuer d'utiliser le projet, même si la version actuelle ne fonctionne plus ;
- comparer les comportements/résultats/codes de la version "qui marche" avec la version actuelle ;
- revenir en arrière, si la nouvelle version ne fonctionne plus et que vous n'arrivez pas à la réparer ;
- etc.

Pour cela, vous pouvez copier le dossier de votre projet pour en conserver une version. Cependant cela devient très vite chaotique avec des dossiers dans lesquels on se perd ("v1", "v2", "actuel", "final", "final final", "test", etc.). Il n'est aussi pas possible de revenir à une version antérieur qui n'a pas été préalablement sauvegardée.

Pire encore pour des projets collaboratifs, où les échanges de codes se font par partages de fichiers via mails, Discord, Dropbox, etc. Il est alors nécessaire de récupérer les fichiers à la main, de les copier au bon endroit, etc. en espérant que la nouvelle version du fichier soit compatible avec le reste du projet que vous avez en local, et n'annule pas des modifications précédentes effectuées sur ce fichier.

Lorsqu'on travail sur un projet, il est ainsi important d'utiliser les bons outils, dont un **gestionnaire de versions**. Git ([*connard* en argot britanique](https://www.wordreference.com/enfr/git)) est, de nos jours, le gestionnaire de version le plus populaire. Il offre de très nombreuses fonctionnalités permettant la gestion et manipulation des versions de votre projet, et facilite le travail collaboratif sur un projet.

## L'historique du projet

### L'historique

Git représente chaque version de votre projet par un **commit**. Chaque commit est identifié par un hash, contient une description, et référence le commit précédent :

<script type="c-text">
    (v1)←(v2)←(v3)←(v4)←(v5)
</script>

La commande <script type="c-shell">git log</script> permet alors de visualiser l'historique du projet par le biais de ses différents commits :

<script type="c-text">
*  b21bf65  v5  denmigda  il y a 5 minutes
*  62a079a  v4  denmigda  il y a 17 minutes
*  5e6b8fa  v3  denmigda  il y a 22 minutes
*  3979e9d  v2  denmigda  il y a 28 minutes
*  cb6fc36  v1  denmigda  il y a 48 minutes
</script>

Ici, chaque ligne décrit un commit, du plus récent au plus ancien, avec son hash et sa description.

💡 <script type="c-bash">git log</script> a de **très** nombreuses options permettant de modifier le formattage de l'historique :
- <script type="c-bash">--oneline</script> : affichage condensé, une ligne par commit.
- <script type="c-bash">--pretty=<h>$FORMAT</h></script> : modifier le format d'affichage des commits.
- <script type="c-bash">--date=<h>$FORMAT</h></script> : modifier le format d'affichage de la date.

### Le contenu des commits

Pour stocker les différentes versions de votre projet, Git ne va pas copier l'intégralité du projet dans chaque commits, ce qui serait à la fois lent et lourd. Au lieu de cela, il va effectuer une sorte de *sauvegarde incrémentale* en ne stockant que les modifications effectuées depuis le dernier commit.

💡 La commande <script type="c-bash">git log <h>$REF</h> -p</script> permet d'afficher le contenu du commit <script type="c-bash"><h>$REF</h></script>.

💡 La commande <script type="c-bash">git diff</script> permet de comparer deux fichiers, deux commits, ou deux versions d'un même fichier :
- <script type="c-bash">git diff --no-index <h>$FILE_A</h> <h>$FILE_B</h></script> compare les fichiers <script type="c-bash"><h>$FILE_A</h></script> et <script type="c-bash"><h>$FILE_B</h></script>.
- <script type="c-bash">git diff <h>$REF_A</h> <h>$REF_B</h></script> compare les commits <script type="c-bash"><h>$REF_A</h></script> et <script type="c-bash"><h>$REF_B</h></script>.
- <script type="c-bash">git diff <h>$REF_A</h> <h>$REF_B</h> <h>$FILE</h></script> compare le fichier <script type="c-bash"><h>$FILE</h></script> entre les commits <script type="c-bash"><h>$REF_A</h></script> et <script type="c-bash"><h>$REF_B</h></script>.

💡 Par défaut <script type="c-bash">git diff</script> effectue une comparaison lignes par lignes. L'option <script type="c-bash">--word-diff</script> permet d'effectuer une comparaison mots par mots.

### Ajouter un nouveau commit

La création d'un nouveau commit s'effectue grâce à la commande <script type="c-bash">git commit</script>. Vous pourrez ainsi saisir une description de votre commit, la première ligne étant par la suite utilisée comme nom de commit.

Cependant, il faut au préalable indiquer à Git le contenu à inclure au commit. Pour cela on utilise la commande <script type="c-bash">git add <h>$FILE</h></script> (pour un fichier) ou <script type="c-bash">git add -A</script> (pour l'ensemble des fichiers), afin d'ajouter à l'*index* le contenu du/des fichier(s) indiqués.


💡 La commande <script type="c-bash">git status</script> affiche les fichiers modifiés et indique s'ils ont été ajoutés à l'index.
- <script type="c-bash">-v</script> : affiche les modifications des contenus ajoutés à l'index.
- <script type="c-bash">-vv</script> : affiche aussi les modifications des contenus non-ajoutés à l'index.
- <script type="c-bash">-bs</script> : pour un affichage concis.

#### Bons principes

Un commit doit contenir un ensemble cohérent de modifications, e.g. :
- l'ajout d'une nouvelle (sous-)fonctionnalité ;
- la correction d'un bug ;
- une modification de la documentation/tests ;
- etc.

⚠ Il est important que le commit ai un nom court mais explicite afin de faciliter la lecture de l'historique. Dans certains projets Open Source, les noms de commits suivent un formatage très précis, permettant d'automatiser certaines opérations.

Il est par exemple recommandé de préfixer ses noms de commit par :
- <script type="c-text">feat:</script> ajoute une fonctionnalité.
- <script type="c-text">fix:</script> corrige un bug.
- <script type="c-text">test:</script> modifie les tests.
- <script type="c-text">refactor:</script> refactor du code.
- <script type="c-text">docs:</script> met à jour la documentation.
- <script type="c-text">build:</script> modifie le processus de construction du projet.


💡 De la même manière qu'il faut sauvegarder et tester votre code très régulièrement, en procédant par itérations successives, il est important de créer des commits le plus régulièrement possible afin d'exploiter toute la puissance de Git.

⚠ Il est préférable d'éviter de faire un commit sur une version non-fonctionnelle du projet (ou "moins" fonctionnel que le commit précédent).

#### Ignorer des fichiers

⚠ <script type="c-bash">git add -A</script> ajoute tous les fichiers du projet à l'index. Or on souhaite généralement exclure certains fichiers (ou dossiers), soit parce qu'ils contiennent des informations sensibles (e.g. tokens, mots de passes, etc.), soit parce qu'ils ne sont pas pertinents (e.g. fichiers de configurations de l'IDE), soit parce qu'ils sont des dépendences externes.

Pour éviter que ces fichiers (ou dossiers) soient (par erreur) ajoutés à l'index lors d'un <script type="c-bash">git add</script>, il suffit de créer un fichier <script type="c-text">.gitignore</script> contenant le chemin des fichiers (ou dossiers) à exclure.

⚠ Il est nécessaire d'exécuter la commande <script type="c-bash">git add .gitignore</script> afin de le mettre à jour après modifications.

💡 Il est fréquent d'ajouter des fichiers à l'index par erreur. Pour corriger cela :
- **si vous n'avez pas encore fait de commit** :
    - <script type="c-bash">git reset <h>$FILE</h></script> : annule un <script type="c-bash">git add <h>$FILE</h></script> ;
- **si vous avez déjà fait un commit** :
    - <script type="c-bash">git commit --amend</script> : modifie le dernier commit.
    - <script type="c-bash">git rm --cached <h>$FILE</h></script> : dans l'index considère le fichier <script type="c-bash"><h>$FILE</h></script> comme supprimé (puis <script type="c-bash">add</script> et <script type="c-bash">amend</script>).
    - <script type="c-bash">git reset <h>$REF</h> <h>$FILE</h></script> : dans l'index, met <script type="c-bash"><h>$FILE</h></script> tel qu'il était dans <script type="c-bash"><h>$REF</h></script> (puis <script type="c-bash">add</script> et <script type="c-bash">amend</script>).

### Naviguer dans l'historique

revenir à un commit

-> index vide / pas de modifications
    -> git stash pop/push

HEAD + ~ ^

###

restore -s REF file (modifier le fichier du worktree)
    [sinon from index]

    git-revert is about making a new commit that reverts the changes made by other commits.
    git-restore is about restoring files in the working tree from either the index or another commit.
    This command does not update your branch.
    The command can also be used to restore files in the index from another commit.
    git-reset is about updating your branch, moving the tip in order to add or remove commits from the branch. This operation changes the commit history.
    git reset can also be used to restore the index, overlapping with git restore.


###

Naviguer dans l'historique /  (déplacer master -> branch)
HEAD : @~1

###

Config (latter)

L'affichage précédent est obtenu via la commande suivante :
<script type="c-bash">
    git log --color --date=relative --graph --format=format:'§%C(auto)%d%C(reset)§%C(03)%h%C(reset)§%C(bold 0)%s%C(reset)§%C(green)%an%C(reset)§%C(04)%ad%C(reset)' | column -t -s '§'
</script>
=> usage énorme -> on fait des alias une fois en fonction de ce qu'on veut puis on utilise les alias.
    => git config (global)/(local)

git log [branch|commit|autre]
--graph (for branches ?) [+tard]

=> références.



## Dépôt distant et travail collabo ?

-> clone (tree/bare)
-> push/pull
-> stash pop/push

-> les conflits (éviter les force !)

-> issues (?) / PR issues
	-> (classer+associer à un commit) + attribuer pers/roadmap? + board + roadmap

## Les branches

-> pointeurs sur un commit
	-> head = working tree

git switch [-c]

-> aussi versions (tags) - téléchargement github etc.

-> add worktree
-> git wortree add -b branch ../dir (se mettre dans un autre dossier).


## Fct avancée ?

### Problèmes

--amend
- annuler change / annuler add / modifier commit / annuler commit(s) locaux / annuler commit(s) distants
- blame/diff / bisect / reset/revert/rebase/etc.
-> diff [--word-diff] / range-diff
-> restore (file) --source (commit)

- fetch to another branch.

- bisect: each commits must work.

### Alias

### Submodules

-> no circularity

### CI/CD

(yaml/.yml)
=> artefacts/build
=> git pages

### X

=> git maintenance start (big repo, speed up things)
=> squash commit merge
=> $PS1 : git repo/branch

<script type="c-text">
    (A)←(B)←(C)
       ↖   ↙
        (B)
</script>

</main>
    </body>
</html>