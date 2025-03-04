<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM1 (DevLog)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/index.css"  rel="stylesheet">
        <script  src="/skeleton/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

⚠ [Draft] Document en cours de rédaction.

# Motivation au développement logiciel

## Trouver son chemin

-> Problème -> Solution : si seulement c'était aussi simple...

- plusieurs solutions possibles
- et plusieurs chemins pour arriver à un même résultat.

-> comment choisir la "bonne" solution et le "bon" chemin approprié aux besoins actuels et futurs ?

### Que faire

-> quels sont déjà nos réels besoins actuels et futurs ?

Les envies : je veux une fonctionnalité, corriger un bug, etc.
Est-ce :
1. utiles (besoins) : est-ce réellement utile ?
2. réalisables (à faire) : est-ce utile et réaliste en considérant les ressources disponibles ?
3. prioritaires (que faire) : 

-> gestion de projet, de planning, etc.

### Comment faire

- comment (bien le) faire [avec quoi] ?
- comment vérifier que c'est (bien) fait ?

-> que signifie "bien" fait ?
-> bons principe de développement
-> pipeline de développement

### Contexte

Tous les projets sont différent avec des contextes différents :
- contraintes : deadline, qualité, garanties
- ressources : temps, personnes

Il n'y a pas d'absolu dans le développement logiciels et la gestion de projets. Tout dépend du contexte, et une règle approprié dans un contexte ne le sera pas nécessairement dans un autre.

Par exemple, un code produit en 2 minutes dans le cadre d'un exercice de TP n'a pas les mêmes besoins en qualité, tests, etc. qu'un code critique pour une centrale nucléaire.

Différents types de contextes :
- développé à plusieurs :
  - organiser l'équipe (gestion de projet / pipeline de dev)
  - communiquer (documentation/UML).
- utilisé par un tiers :
  - stabilité, évolutions/besoins futurs, maintenance
- commandité par un tier : relation contractuelle (CdC = contract)
  - commandité : apporter des garanties travail bien réalisé
  - commanditaire : expliciter ce qu'il demande.

## Autres (à trier)

+ architecture

https://fr.wikipedia.org/wiki/Qualit%C3%A9_logicielle

https://fr.wikipedia.org/wiki/Qualit%C3%A9_logicielle#Indicateurs_de_qualit%C3%A9_logicielle

- Maintenance Optimisation de code Réusinage de code (Règle de trois)

- pipeline de dev (write - build - test - bundle - distribute).

- Exceptions vs Errors values
    -> if no strongly typed : may miss error value
    -> if Exceptions : may miss to handle this Exception
    -> Exception : exceptionnel : e.g. bad usage, should not occurs.
- pure fonctions

- codé rapidement
    - réutiliser existant (ext). [-> DRY]
    - réutiliser son propre code
        -> valeur immutable
        -> (aussi sémantique vs structure - e.g. Resultats -> Dict<string, any>[] ).
            - impl et "est-un/instanceof" pour distinguer.
- interrop (code / modules / API-lib / autres logiciels)
    -> représenter données ou API.
- extensible/refactor sans tout casser + test de non-regressions.
    - MOCK / découper pour manipuler et substituer.
    - modifier en // : maintenir la version précédente en état de fonctionnement => cloner le dépôt git si travail local (sérieux - évite checkouts et problème des modifications locales).
        -> tester/comparer + consulter ancien code facilement.
        -> peut avoir un flag pour switch ancienne version/nouvelle version (classe 1 / classe 2 : 2 files.
- pour un utilisateur : garantir stabilité
	- besoin import/vital ou pas (prioritiser) ?
	- gérer cas d'exceptions non prévus (ou pas) <- tps + complexité '(effets du bug , perte de data ? vs importance de l'appli / API vs app)
	- code écrit de manière stable (éviter les bugs) + maintenable (corriger les bugs).
	- orga   : versions de logiciels pour garantir stabilité (stagging vs prod).
		-> release candidate
			-> v1 vs v1.1
	- debug : prod vs testing
- à plusieurs : se coordonner + transmettre/archiver information
	- anticiper imprévus, truc plus dur/ss estimé, absent, etc.
	- compiler le travail de tout le monde (git).
	- code lisible/compréhensible par d'autres
	- documentation + représenter idées pour les partager (UML).
	- éviter une pers en attente des autres
	- se répartir les tâches :
		- outils : trello / git
- pour qq d'autres [délégation]  (externe entreprise, interne autre service, ou son patron) : CdC / obligations contractuelles / apporter garanties // exprimer ses besoins [cf next cours]
	- cycles en V / Agile
	- anticiper changements besoins
	- prévisionnel
	- coût / besoins humains / licences [ext].
	- PoC
	- tester (TDD/unit test/etc)

=> estimations du temps requis souvent mauvaises
	=> imprévus (chose plus difficile qu'il n'y paraît, bug bizarre, etc)
	=> on peut pas penser à tout (à zut y'a d'autres cas à gérer, ça implique de faire ça).

-> utiliser les bons outils : tests différents types (unit, statiques/types checks, etc).

## Bon principes de développement

### Motivation

- réduire les bugs, facilité leur correction, cela passe par rendre le code lisible.
- rendre le dev plus "confortable"/"pratique", si inconfortable/pas pratique à coder, signe que qq chose ne va pas.
- potentiellement un investissement, mais sinon dette technique qui s'accumule. Explose, rapidement impossible à corriger car trop important. D'autant plus si code avec beaucoup d'interdépendances où modifier la moindre chose fait tout exploser.

### La trinité

#### YAGNI

YAGNI : "You aren't gonna need it"

#### KISS

KISS : https://www.geeksforgeeks.org/kiss-principle-in-software-development/

[pkoi?]

-> Éviter effets de bords + pas de global state / variables locales.

[KISS même si pas opti :]

-> RO même si non opti
	-> sémantique entité (état interne - p-e une valeur...)
		vs valeur (csnt)...
    -> + si orienté events simplifie

- Par défaut structures with events constantes (surtout si events/partagés) => seule la référence change.
	=> pas opti mais plus simple
	=> seulement si BESOIN : complexifier.
	=> uniformiser (notamment events)
	=> 1/60e de seconde GUI : le temps. Lourds calculs, c'est seulement là où on optimise.

#### DRY

DRY (Don't repeat yourself) => sync diff version

### SOLID

SOLID
- SRP (single resp).
	Single-responsibility principle: "There should never be more than one reason for a class to change."[2] In other words, every class should have only one responsibility.[3]
	aussi : SOC (séparation des responsabilités)
- Open–closed principle: "Software entities ... should be open for extension, but closed for modification."[4]
- Liskov substitution principle: "Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it."[5] See also design by contract.[5]
- Interface segregation principle: "Clients should not be forced to depend upon interfaces that they do not use."[6][7]
- Dependency inversion principle: "Depend upon abstractions, [not] concretes."[8][7]

#### TDD + LOD

=> écrire top down (~= TDD).
	=> qq chose à montrer + motivant + garantie que c'est utile

=> ~TDD
	=> main task : to not handle too specific features or anticipate some cases => write them
	=> [proto] => it works
	=> refactor
	=> next features (~= agile)
	=> parts : potentiellement partir de la fin (affichage) avec fausses données, et remplacer progressivement les fausses données.
	=> Avantage : système complexe conception difficile car trop de choses à prendre en compte, on fait un truc difficile.
	=> le plus feignant possible => rester simple.
	=> (difficile : anticiper vs direct).

=> abstraction (plusieurs levels of) - code doit être compréhensible en lisant.
- encapsulation (dérive Liskov) : attention pas tout à fait vrai, e.g. SQL opti / git : besoin de comprendre le fonctionnement grossier pour bien utiliser.

		=> éviter de coder des cas d'utilisations inutiles ou 1% des cas d'usages quand 90% manquant... => y'a plus important
			=> sauf si pas de bug est priorité absolue.
			=> mais possibilité TDD puis revenir dessus pour gérer les cas => force à rester simple plutôt que de partir sur une solution complexe directement => parfois compliqué (faut être astucieux).
		=> pareto : 80% => 20% (temps/fonctions/usages-intérêts)
	LOD (level of details) - lié à encapsulation
		-> Pythhon => Linux => read binary

#### Optimisations (dans autres ?)

- bon résultat / perfs raisonnables (/!\ opti prématurées - impression de gâche mais osef, mais si gratuit/lisible oui).

- opti prématuré evil
	-> moins lisibile, gains nuls, perte.
	-> qqs trucs "gratuits".
	-> où optimiser / comment savoir où optimiser ?
	-> commencer par le plus simple -> optimiser progressivement (et mesurer à chaque fois).

#### Dépendances

- décorrélation / inverser les dépendances / interfaces (données vs API).
-> évite de tout casser quand on modifie un bout de code...
	-> a peut être TRÈS VIOLENT
-> composants/éléments aussi indépendants que possibles.

=> dépendance ordre de création [code -build- et instantiation -runtime-]
	=> créer une structure qui notifiera lorsque valeur disponible.
	=> ou un callback qui creera le truc lorsque valeur disponible.
=> éviter le cas où je dois exécuter ce fichier avant celui-là : cycles de dépendances...

#### Généricité

=> genericity (permettre l'extension future sans forcément la planifier tout de suite).
	=> mais pas trop anticiper/se projeter dans le futur, lisible, rapide.
		=> besoin futur n'existera p-e pas. 
	=> refactor futur possible (laisser la porte ouverte sans plus).
	=> tradeoff parfois.

exemple avec Float3D.

#### Indenter le code (code lisible)

-> indenter le code (techniques)
-> éviter documentation redondante avec le code
-> éviter fct trop longues
-> bien nommer, etc.

- éviter les commentaires à chaque ligne (problème mise à jour) - générer auto + indiquer info nécessaires/git issues/trucs non-triviaux mais pas redondant avec le code.

## Conception : UML/DP/Anti-DP

[Motivation]

### UML (quick recap)

Concevoir et Documenter.

- death by UML/TODO/doc fevers.
- nom explicites + architecture de fichiers explicite
	+ pas tout mettre dans le même fichier, savoir les features à l'arborescence (évite des conflits de version en travail collabo).


### Anti-DP

Dev : on a de l'expérience, des choses qui ne marchent pas.

[Extraire une sous-liste]

#### Les autres mauvaises pratiques

https://fr.wikipedia.org/wiki/Antipattern
https://fr.wikipedia.org/wiki/Code_smell

### DP

[Motivations]

#### Composition

- à la place de héritage

- Composition vs if/else (si option alors ça alors si => OptionHandler/Generator/Output) => + lisible/simple à gérer/modifier/ajouter (évite c/c de code aussi).
	- éviter else. (gérer cas d'erreurs en premier [throw/break/return] + fct + finally).
		- tableau assos
		- valeur => ternaire

#### Adapter

#### Une section par DP important


#### Les autres DP

https://fr.wikipedia.org/wiki/Patron_de_conception


============================================================

code doc vs code comment
https://www.youtube.com/watch?v=Bf7vDBBOBUA

Opti can be less performant.

If vs composition
https://www.youtube.com/watch?v=J1f5b4vcxCQ

- careful float (use int when possible / fixed decimals, etc)

============================================================

https://thucnc.medium.com/how-to-show-current-git-branch-with-colors-in-bash-prompt-380d05a24745


UML [beaucoup de bêtises) https://www.urbanisation-si.com/que-faut-il-garder-d-uml-quelles-seraient-les-evolutions-va-t-on-vers-un-reboot-d-uml-les-alternatives-a-uml

Compo vs Héritage.
as a : is a


Fragile base class problem
	-> super class change -> impact children
	-> one subdivision ok : mani-subdivision = break
	-> child that doesn't have all base property : intermediate prop.

DevLOG : corrigé + Fiche 2 <2h ?

Etat-transition vs activité :
- Etat transition : node = état, vs activité node = action.
- Etat transition : 1 élément vs activité = système ou ss-system

DevLog
------

memoization : cacher les résultats e.g. Fibbo
+ initialize

-> graph/subproblem.

- greedy solution

-> trier souvent simplifie problèmes
-> start from the end

https://www.youtube.com/watch?v=Hdr64lKQ3e4

</main>
    </body>
</html>