Qu'est-ce qu'un ordinateur ?

Un assemblage d'opérateurs élémentaires : une entrée => une sortie.
Peut être mécanique/hydrolique/électro-magnétique/électronique, etc.
=> premiers automates ~ -IIIe av JC.

=> plusieurs tentatives, un seul "gagnant" moderne.

Problème : comment faire cela avec un circuit électronique ?
    => déjà les valeurs possibles :
        => analogique : valeurs continues (3.8 = 3.8Volt)
            => peu résistant aux interférences, imprécision inhérente qui se cumule.
        => base 10 : pas pratique.
        => binaire : 0 et 1
        => ternaire : -1 / 0 / 1.
    => binaire a gagné.
        => binaire + simple que ternaire.


- Formule mathématique (algèbre de Boole) [théorie, permet de faire des calculs à partir d'op élémentaires binaires / calculs en base 2].
    => VRAI/FAUX => du courant/pas de courant // allumé/éteint.
    => ET (*) / OU (+) / NOT (!).
        => Tables de vérités.
    => Variants : NAND / XOR / NOR.
    => un exemple avec des conditions...
=> on peut faire des calculs, mais comment implémenter cela sur un circuit électronique ? (Shanon 1937)
    - Circuit électronique (1XXX)
        - 1847 : commutateurs.
    -> simplifier les circuits avant de les construire (formule => physique + formule => simplification).
=> lampe
=> interrupteur.

=> AND : série
=> OR : //

=> NOT : soit inverser l'interrupteur, soit court-circuit.

=> relais electro-magnétique (réellement utile?)
    => permet la composition.
    => plus tard : transisteurs.

Il reste un problème : humain <-> binaire
    => encodage/décodage.
    => embraye sur repr entiers / float / image / etc.