- Images pour expliquer les merges/branches.
- Images pour résumer commandes (WT + idx + local + distant)

<script type="c-text">
    (A)←(B)←(C)
       ↖   ↙
        (B)
</script>

=======================================

<h2>Outils connexes (?)</h2>

<h3>Github</h3>

- PR
- Fork
- Issues

- git issues/reviews/kanban/roadmap/etc : intégration à d'autres outils/environnement.
    - manager issues : classer/tagger/attribuer + roadmap/board + associer commit
    - vie d'un issue (?)
- milestone / issues / ?

- droits/accès + commit signés.

=======================================

- hooks/CI/CD : automatiser
	-> build
	-> tests
	-> vérifications / checks / enforce policies
    -> yaml (format CI/CD) ~= dockerfile (?)

    -> artefacts / build / release / gitpages
        -> deploy

=======================================

- git merge-base --is-ancestor <commit1> <commit2> ?

=======================================

- submodules /!\ no circularities !!! => dev log ? (composants)

submodules
- git submodule init (1 fois)
- git submodule update --init

git clone (--bare) / init
	-> submodules ~> give path (?)
	-> -b (opti) [?]

=======================================

Shell : PS1 pour montrer nom dépo + current branch.