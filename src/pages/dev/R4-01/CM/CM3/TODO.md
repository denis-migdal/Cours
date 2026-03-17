Fait en 1h : injecter exo/exemples.
- revoir ordre (deps + gradation difficulté)

Utiliser python -c !!!!

=========================================

- Lib, rentry (sb.imported) + namespace as source first arg (e.g. sb.readline).

=========================================

- source : return possible.

- [[ -t 0 ]] / [[ -t 1 ]] => est-ce que stdin/stdout terminal ou pipé ?
- declare -i (entiers : op entiers possibles)
- declare -n (hack)
- declare -p

=========================================

Shell : PS1 pour montrer nom dépo + current branch.

=========================================

BASH5.3 (2025)
Avril 2026 update ubuntu

${ command; } → exécute command dans le shell actuel et retourne la sortie.
${| command; } → exécute dans le shell actuel, place la sortie dans la variable REPLY.
read -E
source -p PATH