<!DOCTYPE html>
<html>
    <head>
        <title>CM1 (Web1)</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <style>
        </style>
        <header></header>
        <main>

# CM1 : HTML5

[Motivation? : Pourquoi apprendre à faire des pages Web = utile]

## L'arbre DOM

Page Web : composées de différents éléments (donner e.g. textes, images, bouttons, zones de textes, etc.) / certains éléments peuvent en contenir d'autres / organisé sous la forme d'une hiérarchie.


Motivation...

Site Web : affiché dans votre navigateur => mais comment structuré / keskecé derrière.

-

### Terminologie

C’est comme un arbre g ´en ´ealogique...
Racine (root)
...
...
La racine : le tout premier noeud
de l’arbre.
Parent/P`ere (parent/father)
Enfant/Fils (child)
...
Le p `ere/fils : noeud (p `ere)
contenant d’autres noeuds (fils).
Ancˆetre (ancestor)
...
Descendant (descendant)
L’anc ˆetre/descendant : p `ere, ou
p `ere d’un anc ˆetre, (anc ˆetre) d’un
noeud (descendant).
...
Fr`ere (sibling)
Fr`ere (sibling)
Les fr `eres : noeuds contenus par
un m ˆeme noeud (parent).

-> Qst pour introduire section suivante

## Le langage HTML

Comment ´ecrire/repr ´esenter cet ”arbre DOM”
dans un fichier ?

Le langage HTML
Le langage HTML
L’arbre DOM ”traduit” en HTML
Page
Barre d'en-tˆete
Image UCA
Image coeur
Bouton assistance
Bouton menu
Zone messagerie
Texte "Messagerie"
Bouton rafraˆıchir
Zone mails
Image BAL
Texte
...
<body>
<header>
<img src='...'/>
<img src='...'/>
<button>Assistance</button>
<button></button>
</header>
<div>
<span>Messagerie</span>
<button></button>
<div>
<img src='...'/>
<span>87 mail(s)</span>
</div>
</div>
</body>
7/34
Le langage HTML
Les types de noeuds DOM et leur ´equivalent HTML
▶ 3 diff ´erents types de noeuds DOM :
DOM HTML
Texte Le texte
Commentaire <!-- commentaire -->
´El ´ement Balise HTML (HTML tag) :
<tagname></tagname> ou <tagname/>
8/34
Le langage HTML
Les balises HTML
▶ Balise HTML (vocabulaire) :
<tagname> <!-- balise ouvrante (opening tag) -->
<!-- contenu/fils... -->
</tagname> <!-- balise fermante (closing tag) -->
<!-- OU -->
<tagname/> <!-- balise auto-fermante (self-closing) -->
9/34
Le langage HTML
Les balises HTML
▶ Attributs HTML : <tagname attrname="value"/>
▶ Permet de personnaliser la ”configuration” d’un ´el ´ement.
▶ Attributs HTML sp ´eciaux :
▶ Identifiant : id="identifiant" (s ´electeur : #identifiant).
▶ Classe(s) : class="c1 c2..." (s ´electeur : .c1).
▶ Nom : name="nom" (pour les formulaires).
▶ Info-bulle : title="..." (texte affich ´e au survol).
▶ Donn ´ees : data-name="value"
10/34

Les outils
Les outils
La documentation
▶ La documentation :
▶ https://developer.mozilla.org/docs/Web/HTML
▶ https://www.w3schools.com/html/
▶ Les cours :
▶ https://developer.mozilla.org/docs/Learn/HTML/
Introduction_to_HTML/Getting_started
▶ Les exemples :
▶ https://www.w3schools.com/html/html_examples.asp
▶ Les r ´ef ´erences :
▶ https://developer.mozilla.org/docs/Web/HTML/Element
▶ https://www.w3schools.com/tags/ref_byfunc.asp
26/34
Les outils
La documentation
▶ V ´erifier la compatibilit ´e des navigateurs : https://caniuse.com/
27/34
Les outils
La documentation
▶ Attentions aux ´el ´ements d ´epr ´eci ´es !
28/34
Les outils
Pour ´ecrire de l’HTML
▶ HTML : fichier texte d’extension .html ;
▶ On utilisera Visual Studio Code (supporte aussi R/Python) :
▶ Coloration et auto-compl ´etion ;
▶ Documentation au survol ;
▶ Extension HTML Hint : v ´erification de la syntaxe HTML ;
▶ Extension Live Server : mise `a jour temps r ´eel ;
▶ ChatGPT INTERDIT !
29/34
Les outils
Navigateur
▶ Source : fichier HTML (FF/Chr: ctrl + U ).
▶ Inspecteur : DOM (FF: ctrl + + I / Chr: ctrl + + C ).
30/34
R ´esultat
R ´esultat
Il manque quelque chose...
<body>
<header>
<img src='...'/>
<img src='...'/>
<button>Assistance</button>
<button></button>
</header>
<div>
<span>Messagerie</span>
<button></button>
<div>
<img src='...'/>
<span>87 mail(s)</span>
</div>
</div>
</body>
32/34
R ´esultat
Il manque quelque chose...
▶ HTML : structure de la page Web :
▶ Quels sont les ´el ´ements de la page ?
▶ Quelle est la hi ´erarchie des ´el ´ements ?
▶ Mise en forme de la page ?
▶ Quelles sont les positions, marges, et tailles des ´el ´ements ?
▶ Quelles sont les couleurs, polices, d ´ecorations des ´el ´ements ?
▶ Quels sont les filtres, transformations, transitions, et animations 

</main>
    </body>
</html>