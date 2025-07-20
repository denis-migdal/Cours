Sources à lire
==============

- https://fr.wikipedia.org/wiki/Qualit%C3%A9_logicielle
- https://fr.wikipedia.org/wiki/Qualit%C3%A9_logicielle#Indicateurs_de_qualit%C3%A9_logicielle

+ DP & anti-DP FR

- https://fr.wikipedia.org/wiki/Code_smell
- https://en.wikipedia.org/wiki/Design_smell

- https://fr.wikipedia.org/wiki/Antipattern
- https://fr.wikipedia.org/wiki/Code_smell

UML
	- https://guides.visual-paradigm.com/component-diagram-vs-deployment-diagram-in-uml/

Principles
	- https://www.youtube.com/watch?v=Bf7vDBBOBUA
		- code doc vs code comment
	- https://www.youtube.com/watch?v=J1f5b4vcxCQ
		- If vs composition

Dynamic programming : https://www.youtube.com/watch?v=Hdr64lKQ3e4

DP
	- https://fr.wikipedia.org/wiki/Patron_de_conception
	- https://www.youtube.com/watch?v=tv-_1er1mWI
		- 10 DP
	- https://www.youtube.com/watch?v=4eeESJQk-mw&list=WL&index=15 21"
	- https://www.youtube.com/watch?v=OvO2NR7pXjg
	- https://www.youtube.com/watch?v=VVKJQ-QrMYg
	- https://www.youtube.com/watch?v=DEtne_KZ74Y
	- Composition :
			- revoir les composants essentiels d'abord (la base pas forcément 1 classe)
		- https://www.youtube.com/watch?v=zclxRbh4AN0
		- https://refactoring.guru/design-patterns/composite
		- https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-composite-structure-diagram/
		- https://www.youtube.com/watch?v=hxGOiiR9ZKg

- DAD: https://www.overleaf.com/project
- Moodle

Dev LOG
=======

Composability https://www.youtube.com/watch?v=zclxRbh4AN0

Thread / mutex / reader/writer

https://refactoring.guru/design-patterns/composite


DP : https://www.youtube.com/watch?v=OvO2NR7pXjg
=> Command : what should be done, Strategy how it should be done.
=> same structure.

Iterator
Adapter (Array => pile / fifo / filo)
Proxy

https://www.youtube.com/watch?v=VVKJQ-QrMYg
DP nom + intention

Cstr() avec beaucoup de vals par défauts.

Fluent Interface API DP

Builder (Gof builder vs Joshua Bloch Builder - not a DP)
	-> class compli
	quée
		-> sous-types d'instances
		-> problème de designs (?) accepter une struct ?
Factory
	=> buildFromJSON() [not a factory DP]
	=> 
Bridge
	=> Klass has ConcreteImpl depending on platform (e.g. Linux/Windows) => choose in its constructor ? [privée/pr	otected pas exposée]
		=> similaire Strategy.

Architecture vs Implementation
	=> I don't need to know the implementation
Dependancies inversion / extensibilité / etc.

"C++ software design" by Klaus Iglberger (60€)
	=> Design principle and patterns for high quality software
https://www.youtube.com/watch?v=DEtne_KZ74Y

Architectural boundary 29"
	=> separate concerns / my part (interfaces/bib) your parts (implemnters)

Dsign patterns - elements of reusable oo sofware
Erich Gamma

https://www.youtube.com/watch?v=4eeESJQk-mw&list=WL&index=15 21"

SRP : single resp
OCP : open-close
ISP : (?)
	
Type erasure ?

External polymorphisme

Game programming patterns (Robert Nystrom ?)

DP (3 types)
	-> creationnal (cot créer un objet)
		-> Singleton
	-> structural
		-> cot données/classes structurées
	-> behavioral
		-> communication entre objs

============================

Focus : garder l'objectif
	-> calculs
	-> interfaces
	-> calculs SANS l'interface (sinon on perd l'outil de travail).

+ bon principe de dev dans les exercices de conceptions/refactorer (erreur vs chose maladroite): e.g. lecture puis recul.
+ UML donner signification implémentation
	+> compo/aggregation = liste ptr vs liste objet.

- Single resp
	- + simple : conception, code, débug, indépendant, reuse (exemple)

"Composable" ?
TDD : starts from the usage.

coquilles : pais + pour pour
UE => module ?

Sources :
- https://guides.visual-paradigm.com/component-diagram-vs-deployment-diagram-in-uml/
- https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-composite-structure-diagram/

- https://ent.uca.fr/moodle/course/view.php?id=34270
- https://moodle2024.uca.fr/course/view.php?id=10699

- DAD: https://www.overleaf.com/project

- https://www.youtube.com/watch?v=tv-_1er1mWI
- https://www.youtube.com/watch?v=hxGOiiR9ZKg