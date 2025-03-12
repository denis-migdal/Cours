<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>DOP</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/liss/index.css"  rel="stylesheet">
        <script  src="/skeleton/liss/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

Parfois on a des calculs assez importants à faire et on ne veut pas que ça prend des années.
Donc chercher à les exécuter le plus rapidement possible, i.e. optimiser.


I/ La complexité algorithmique.

Soit des données de tailles N, l'ordre de grandeur des opérations (N^2), Nlog(N), etc.
Donc plus la complexité est faible, mieux c'est.

/!\ Piège : cela est vrai quand N devient grand.
Pour un N petit, si l'opération est plus rapide, O(N) < O(log(N) ).

- memoize (parfois bien parfois pas bien, dépend) -> dynamic programming -> en gros graphe des opération, calculs qui se répètent.
	=> on peut réagencer l'ordre des calculs ou faire un cache pour éviter la répétition.

II/ Le code

Une opération = un ensemble d'instructions exécutées sur le CPU.
Certaines opérations sont exécutées plus rapidement que d'autres.

On peut chercher à optimiser les instructions ce que le CPU exécute.

E.g. SIMD, etc. instructions pour faire des calculs sur des vecteurs de données, e.g. v1 + v2 => une seule instruction au lieu de faire une boucle pour sommer les éléments 1 à 1.

Éviter de faire des instructions inutiles.

éviter if si possible (en gros CPU prédit, et commence à exécuter en avance) - couteux.
	=> parfois évitable
		=> x boolean (true/false)
		=> opérateur ternaire
		=> /!\ langages interprété...

Leur ordre d'exécution (les instructions CPU prennent un ALU + un temps différent), donc organiser pour que ce soit le plus rapide possible, etc.

Pipeline : commencer des calculs pendant que d'autres se terminent.

Inlining... (appel de fct coûteux) => Pure fcts aide optimization (et effets de bords = pas bien de toute façon).

Etc. etc. etc.

Le compilateur est plus fort que vous sur les micro-opti.


III/ Le paralellisme.

Au lieu de ne faire les calculs que sur un coeur CPU, on peut en faire sur plusieurs coeurs, plusieurs CPU, voire plusieurs ordinateurs/serveurs à la fois (e.g. serveurs de calculs).

Calculer d'autres trucs pendant qu'un thread est en attente, etc.

https://en.wikipedia.org/wiki/MapReduce

GPU !

-----

/!\ Optimisation prématurée : les parties qu'on souhaite optimiser vs optimisation gratuite.
=> distinguer ce qui est gratuit (idiomes) de ce qui est coûteux (complexité du code, difficile à maintenir, etc).
=> distinguer les besoins / benchmarquer/mesurer.

/!\ JS benchmark (et les langages du genre - généralement scripts faiblement typés)... aie... Optimisations Browser au fur et à mesure que ça s'exécute (plus la fct est appelée). Difficile à prévoir, micro-benchmark difficile car pas real-life, opti e.g. supprime les instructions, fausse les benchmarks.

Niveau d'opti par le compiler/interpréteur.
- static opti (compiler)
- profiler (GCC)
- during execution (JS)

+ (AssemblyScript) + (fast py interpreter ?) Python + modules écrits en C++

======

On a parlé des instructions... mais des calculs ce n'est pas que cela... c'est aussi... des DONNÉES.
Il faut que ces données soient amenés au CPU (ou GPU), avec les instructions, pour qu'il puisse faire ses calculs.

CPU/GPU : execute instructions TRÈS rapidement ~0.22 ns le cycle -> certaines instructions [rappel 1ns = 1 milliard de secondes].

Récupérer des données, c'est LENT : 

DDR : ~100+ cycles (et certains plus lents). => peut monter à 2,000 voire plus...
	243 to 288
	30,000,000 (page fault ?).

=> 10,000,000 : hard-drive
=> ENCORE PLUS Ethernet (sauf si cluster de serveurs, toussa).

Heureusement
=> BEAUCOUP d'optimisation que le CPU (et le langage fait tout seul : prefetch, etc).

Caches :
	CPU register : free
	3 cycles L1   - 64Ko
	~12 cycles L2 - 256Ko
	L3            - 2.5Mo
	
+petit + rapide.

Aussi d'autres problèmes :
	- allocations :
		=> GC / allocations : CG - micro-secondes (?)  / real allocation 60 cycles ?
	- /!\ Accès concurrent : lock/mutex (reader-writer) / etc. [attendre].


DOP : au lieu de s'intéresser aux instructions exécutées, s'intéresser aux données qu'on manipule/dont on a besoin/comment on va les manipuler.

1) Quand on récupère les données, on ne récupère pas 1 bit, mais un chunk de données (=> taille fixe, dépend) - aussi pré-chargements (l'OS/l'interpréteur/compilateur se démerde).

E.g. parcourir une série de nombre : array vs liste chaînée.
	=> array chargé en un coup vs liste chaînée jusqu'à un chargement par élément (si next élément pas "proche").

i.e. plus les données que je vais manipuler son contiguent en mémoire, plus je vais faciliter le travail du CPU (pas besoin d'aller rechercher les données à chaque instructions).

- SIMD (calculs sur vecteurs) => seulement si contigu en mémoire/cache... (compiler/interpréteur va optimiser pour vous).


=> choisir les structures de données appropriées pour mon USAGE.

Objectifs:
1/ Réduire la taille de mes données.
2/ Regrouper les données utiles (quitte à devoir faire quelques instructions en plus).
3/ Réduire les allocations.

En faisant cela => en fonction des usages, parfois gros gains de perfs, même lorsque déjà opti.

==================================================

Astuces
- éviter des copies inutiles.
	=> contradiction avec mes autres cours : normal pas le même niveau/besoins. (GUI, complexe sync / cmpute plus "direct")
- ordre parcours d'un array à N dimension => contigue...
- array : au lieu de splice (recopie), si ordre pas besoin de conserver, juste copier le dernier élément à la place puis réduire taille.
	=> reprs listes/graphes en array 1D
	
- ajouts/suppressions : par chunk lorsque possibles (e.g. filter() - create new ) / mark then delete all at once - in place + keep order.
	=> filter()/map()
	=> pre-allocate array .length
	
- utiliser des ID/Constantes (nombre) au lieu de strings (+ rapide à comparer) (ou ptrs JS)
	=> data[USER_NAME] au lieu de data["user_name"] <= /!\ data.user_name langage compilé pas pareil !!!
	=> username(data) / username(USER_ID) [inline fcts].
	
- pool of unused objects. (profile first)
- circular buffers / preallocated buffers
- double buffer : 1 écrit, 1 consomme, puis flip (utilisé dans JV pour dessiner une frame).
- multi-thread : diviser en chunks indépendant contigus (e.g. 2x2) [évite thread locks] - éviter des dépendances / blocages.


DOP pas que ça.
Quand on charge des données, on veut charger un max données qui nous intéressent, dont on a besoin tout de suite.
	=> i.e. moins charger de données inutiles (bon déjà réduire conso mémoire aide).
	=> i.e. données contiguent, mais EN PLUS, sans "junk".

- OO : separate data & méthodes (plus facile de rendre les données contiguent dans un array + taille réduite) - méthodes chargées que lorsque besoin - ofc pas d'héritage, toussa.
- Découper les données
	- e.g. SBrython : ASTNodes (utile) + Py code positions (peu utile, pas en même temps) (trouver meilleur exemple).
	- ECS (Entity Component System)
		- Entité juste un ID (nombre)
		- properties Array[ID] to get.
			-> good : on peut facilement rajouter des props ;)
			-> ofc ajout/del + coûteux => lorsque plus parcouru que modifié.
		- Array of struct => struct of array.
		- et pleeeein de techniques : (e.g. index indirections pour sparse / ajout / suppressions ).
		- status => retirer props et faire un array par type de status (! seulement si intéressant vis à vis du besoin).

/!\ C'est pour des besoins spécifiques, de performances, pas besoin de jetter l'OO dans 99% des cas !!!

Data oriented Programming (JS)
	-> TypeArray
	-> multiples arrays (struct of arrays)
	-> memoize
	-> separate data & fcts
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/JavaScript

==================================================

/!\ Benchmark : influence le reste du code, évaluer dans son ensemble.
	-> pas nécessairement le code critique (en durée d'exécution).
	-> testé en JS (à prendre avec des pincettes - cf problème benchmark JS), j'ai l'impression d'un bon gain de perfs (ex. SBrython).

</main>
</body>
</html>