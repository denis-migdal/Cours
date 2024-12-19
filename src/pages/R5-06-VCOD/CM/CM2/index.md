<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM2 (Dev Log)</title>
		<meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
  		<!--<link rel="modulepreload" href="./index.js" blocking="render" as="script" />-->
        <script type="module" src="./index.js"></script>
        <link rel="stylesheet" href="./index.css">
		<script>
			console.warn("script start");
			document.addEventListener("DOMContentLoaded", function() {
    	    	console.warn("DOM loaded")
	    	});
		</script>
    </head>
    <body class="hide_h1">
        <header></header>
        <main>

⚠ [Draft] Document en cours de rédaction.

# Git

## [TODO] Motivations

- pkoi git
	-> suivi modifications (revert)
		-> git bisect / [blame]
		-> voir ce qu'on a modifié (relecture de code)
	-> plusieurs versions en //
	-> travail en même temps à plusieurs

## [TODO] Les commits

plusieurs versions/chaîne de commits
-> schéma

-> qu'est-ce qu'un commit
	- commits -> hash + store changes
		+ dupl files.

-> créer un commit
(git add ./-u/-A)

-> .gitignore

-> git status
-> git log (et plus joli ?)

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


</main>
    </body>
</html>