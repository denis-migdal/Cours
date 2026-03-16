Fait en 1h : injecter exo/exemples.
- revoir ordre (deps + gradation difficulté)

- utiliser JSON pour transférer les données => moins "dirty" que fields.
    => TESTER ~> + | callback foo arg1 arg2 arg3
        => readJSON arg1[=arg1] arg2[=arg2] arg3[=arg3]
        => extraire {x:E} (simple).
    => fonctions helpers + callback [fields] ~> ou dictionnaire (easy)
    => limite MAP + Array
    => ou syntaxe bash ?

=========================================

Shell : PS1 pour montrer nom dépo + current branch.