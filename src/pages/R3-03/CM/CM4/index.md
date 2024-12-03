<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>CM4 (Web1)</title>
        <!--
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        -->
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="./index.css"  rel="stylesheet" blocking="render">
        <script  src="./index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# CM4 : Architecture client/serveur

Un site Web est généralement constitué d'au moins 2 parties :
- *le côté client* (*front-end*) : dans le navigateur, affiche la page Web et gère les interactions avec l'utilisateur. Il est usuellement défini par un ensemble de fichiers HTML, CSS, JS, WASM, etc.
- *le côté serveur* (*back-end*) : sur le serveur, répond aux requêtes du navigateur afin de distribuer les fichiers nécessaires à la page Web.

Les échanges entre le client et le serveur Web utilisent le protocole HTTP(S) :
- le client demande une ressource via une *requête HTTP* ;
- le serveur retourne la ressource demandée via une *réponse HTTP*.

Les requêtes et réponses HTTP contiennent :
- une *en-tête* : contenant des méta-données ;
- un *corps* (facultatif) : contenant les données transférées.

## Contenus dynamiques

Afin de tester nos pages Web en TP, nous utilisions jusqu'à présent *Live Server* comme serveur Web. Son fonctionnement est très simple : la racine du site Web est associée à un dossier <shell-code class="d4rk"><var>$ROOT</var></shell-code> du serveur. Chaque URL est alors associée à un fichier du serveur. 
*Live Server* est ainsi un serveur web *statique* (*static web server*) distribuant des fichiers/ressources statiques (*static files/assets*). Ainsi, lorsqu'il reçoit une requête HTTP, il retourne le fichier demandé, e.g. :<br/>
<shell-code class="d4rk">http://localhost:5000/<var>$PATHNAME</var></shell-code> est associé au fichier <shell-code class="d4rk"><var>$ROOT</var>/<var>$PATHNAME</var></shell-code>.

Il est cependant possible d'avoir des serveurs *dynamiques* (*dynamic server*) générant le contenu renvoyé en fonction de la requête HTTP reçue. Imaginez un site vendant 5,000 produits différents. Il est évident qu'on ne va pas s'amuser à créer 5,000 pages Web à la main. À la place, on voudrait générer dynamiquement les pages Web à partir :
- de l'**identifiant** du produit (i.e. quel produit afficher) ;
- des **données** du produit, stockées dans une base de données ;
- d'un **modèle** (*template*) indiquant comment structurer et afficher ces données.

Il serait alors très aisé d'ajouter un nouveau produit en ajoutant une entrée dans la base de donnée, ou de modifier l'affichage des pages produits en modifiant le modèle. On aurait ainsi deux parties :
- *statique* : le modèle commun à tous les produits (HTML/CSS/JS/Brython/etc) ;
- *dynamique* : les données spécifiques à chaque produit.

Les données ne sont cependant pas directement accessibles à partir de la page Web. En effet, si les accès à la base de données (e.g. SQL) étaient effectués sur la page Web, i.e. sur le navigateur/côté client, n'importe quel visiteur pourrait alors arbitrairement modifier les requêtes effectuées, ou récupérer/réutiliser les identifiants utilisés pour se connecter à la base de données.

Il convient alors envoyer des requêtes au serveur Web, qui se chargera de manipuler la base de données côté serveur, puis en retournera les résultats. Le serveur Web fournira ainsi une *API*.

### Les API REST

REST (*<u>RE</u>presentational <u>S</u>tate <u>T</u>ransfer*) est un ensemble de principes permettant d'architecturer proprement une API Web de sorte à éviter qu'elle devienne chaotique :
- URL uniformes ;
- sémantique des requêtes HTTP ;
- données structurées ;
- sans états.

#### Uniformiser les URL

Comme vous le savez déjà, les URL identifient les ressources de manière unique.

Afin d'éviter les collisions, et rendre les URL plus explicites/lisibles, il convient de les uniformiser en suivant un format unique. Pour cela on conserve une logique d'arborescence avec des *collections*, qui sont des ressources contenant elles-mêmes d'autres ressources (≈dossiers).

Par exemple, un produit sera identifié par (et manipulé via) l'URL `/produits/{$ID_PRODUIT}`. L'ensemble des URL correspondant à ce format est appelé **route** et sera alors traité par la même fonction (*handler*), avec `$ID_PRODUIT` comme paramètre. La collection `/produits/` est alors la liste des produits, et permettra des manipulations d'ensemble.

💡 Il est fréquent de préfixer les chemins par `/api/v1/` et `/static/` afin d'aisément distinguer l'API REST, des ressources statiques. Le numéro de version permet d'assurer la rétro-compatibilité pour les applications utilisant d'anciennes versions de l'API.

💡 La structuration des URL en routes permet d'aisément visualiser les ressources accessibles via l'API, ainsi que de gérer plus facilement les droits d'accès aux données, en autorisant/interdisant l'accès à certaines routes.

#### Uniformiser les requêtes

Les API REST utilisent 5 *méthodes HTTP* :
- *GET :* lire une ressource.
- *POST :* ajouter une ressource à une collection.
- *PUT :* créer une ressource ou la remplacer si elle existe.
- *PATCH :* modifier partiellement une ressource.
- *DELETE :* supprimer une ressource.

Il est ainsi d'usage d'utiliser les requêtes suivantes afin d'indiquer le type d'opération effectué sur la ressource :
- <js-code class="d4rk">GET    /<var>$COLLECTION</var>/</js-code> : obtenir la liste des ressources de la collection.
- <js-code class="d4rk">POST   /<var>$COLLECTION</var>/</js-code> : créer une nouvelle ressource dans la collection.
- <js-code class="d4rk">GET    /<var>$COLLECTION</var>/<var>$ID</var></js-code> : obtenir la ressource d'identifiant <js-code class="d4rk"><var>$ID</var></js-code>.
- <js-code class="d4rk">PUT    /<var>$COLLECTION</var>/<var>$ID</var></js-code> : créer ou remplacer la ressource d'identifiant <js-code class="d4rk"><var>$ID</var></js-code>.
- <js-code class="d4rk">PATCH  /<var>$COLLECTION</var>/<var>$ID</var></js-code> : modifier la ressource d'identifiant <js-code class="d4rk"><var>$ID</var></js-code>.
- <js-code class="d4rk">DELETE /<var>$COLLECTION</var>/<var>$ID</var></js-code> : supprimer la ressource d'identifiant <js-code class="d4rk"><var>$ID</var></js-code>.

⚠ Les requêtes `GET` et `DELETE` ne peuvent contenir de corps (*body*).

#### Query strings

Les URL peuvent aussi être suffixées par une *chaîne de requête* (*query string*), indiquée par un `?`. Les query strings sont des paires `clefs=valeurs` séparées par un `&`, e.g. : `?limit=10&export=csv`. 

Elles sont principalement utilisées sur les requêtes `GET` afin de :
- indiquer le format des données souhaité ;
- filtrer les champs/informations ;
- sur une collection, filtrer les entrées.

⚠ Il est fréquent que les serveurs Web loggent les URL demandées. Il est ainsi important de ne pas inclure d'informations sensibles dans les query strings.

Les query strings sont manipulées via la classe `URLSearchParams` :

<center>
<table>
    <thead>
        <tr>
            <th>
                Opération
            </th>
            <th>
                URLSearchParams
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>Créer</i></td>
            <td><js-code class="d4rk">new URLSearchParams(<var>$URL</var>.search)</js-code></td>
        </tr>
        <tr>
            <td><i>Générer</i></td>
            <td><js-code class="d4rk">.toString()</js-code></td>
        </tr>
        <tr>
            <td><i>Lister</i></td>
            <td><js-code class="d4rk">.entries()/.keys()/.values()</js-code></td>
        </tr>
        <tr>
            <td><i>Obtenir</i></td>
            <td><js-code class="d4rk">.get[All](<var>$N</var>)</js-code></td>
        </tr>
        <tr>
            <td><i>Ajouter</i></td>
            <td><js-code class="d4rk">.set(<var>$N</var>, <var>$V</var>)/.append(<var>$N</var>, <var>$V</var>)</js-code></td>
        </tr>
        <tr>
            <td><i>Supprimer</i></td>
            <td><js-code class="d4rk">.delete(<var>$N</var>)</js-code></td>
        </tr>
        <tr>
            <td><i>Contient ?</i></td>
            <td><js-code class="d4rk">.has(<var>$N</var>)</js-code></td>
        </tr>
    </tbody>
</table>
</center>

💡 L'URL de la page est stockée dans <js-code>document.location</js-code>.

#### Données structurées

Le corps des requêtes/réponses REST sont usuellement au format JSON, mais peuvent utiliser n'importe quel format, e.g. :
- texte brut ;
- données binaires ;
- URLSearchParams/FormData ;
- XML ;
- CSV ;
- etc.

Le format utilisé/à utiliser est potentiellement indiqué par la requête REST. Il est cependant important de conserver des données structurées (i.e. éviter des réponses au format HTML) afin de permettre leur réutilisation pour d'autres usages (et potentiellement leur mise en cache). 

Notamment, il est fréquent d'offrir la possibilité aux développeurs tiers d'exploiter les données du site via une API REST (e.g. *Open Data* avec stats INSEE, données météo, etc). Bien évidemment, certaines API peuvent être payantes, e.g. en fonction du nombre de requêtes autorisées à la seconde.

#### Sans États

Les API REST se doivent d'être *sans état* (*stateless*), cela signifie que :
1. le serveur ne stocke aucun état de la connexion/session HTTP actuelle ;
2. une requête contient toutes les données nécessaires à sa réponse ;
3. une requête ne dépend pas d'autres requêtes ;
4. les requêtes identiques produisent des réponses identiques *(sauf si les données ont été modifiées)*.

Cela comporte de nombreux avantages :
- *sécurité* : l'absence d'état côté serveur (1) évite des attaques par *déni de services* (DoS).
- *performance* : les requêtes ne dépendant pas d'un état (2), il aisé de répartir les charges (*load balancing*).
- *clarté* : les requêtes ne dépendant pas d'autres requêtes (3), les échanges sont plus simples à comprendre.
- *tests* : les réponses étant déterministes et reproductibles (4), on peut écrire des tests unitaires.

## API JS

### Fetch

Une requête HTTP peut être effectuée au sein de la page Web via `fetch()`:
<js-code class="block d4rk">
const response = await fetch(<var>$URL</var>, {
    method: <var>$HTTP_METHOD</var>,
    body  : <var>$BODY</var>
});
</js-code>

Le corps peut être de différent type :
- <js-code>string</js-code>
- <js-code>Blob</js-code>/<js-code>File</js-code>
- <js-code>Uint8Array</js-code>/<js-code>ReadableStream</js-code>
- <js-code>URLSearchParams</js-code>/<js-code>FormData</js-code>
- etc.

💡 Pour envoyer des données au format, JSON, il convient de les convertir en <js-code>string</js-code> :
<js-code class="block d4rk">
const response = await fetch(<var>$URL</var>, {
    body: JSON.stringify(<var>$DATA</var>)
    headers: {
        "Content-Type": "application/json"
    }
});
</js-code>

💡 <js-code>"Content-Type"</js-code> indique le type des données contenu dans le corps de la requête :
- <js-code>"text/plain"</js-code> : texte ;
- <js-code>"application/json"</js-code> : JSON ;
- <js-code>"application/octet-stream"</js-code> : données binaires.
- <js-code>"application/x-www-form-urlencoded"</js-code> : <js-code>URLSearchParams</js-code>/<js-code>FormData</js-code> ;

`fetch()` retourne un `Response`, dont le contenu peut être lu via :
- <js-code>await response.text()</js-code>
- <js-code>await response.json()</js-code>
- <js-code>await response.bytes()</js-code> : Uint8Array
- <js-code>await response.formData()</js-code> : FormData

⚠ Le corps d'une réponse ne peut être lue qu'une seule fois.
- <js-code>.bodyUsed</js-code> : indique si le corps a été lu.
- <js-code>.clone()</js-code> : clone la réponse (permet ainsi plusieurs lectures).

#### Status

`Response` indique aussi si la requête s'est bien effectuée :
- `.ok` : pas d'erreurs ;
- `.status` : code de status HTTP ;
- `.statusText` : message précisant l'erreur.

Les codes de status HTTP se divisent en 5 catégories :
- 1XX : requête en cours
- 2XX : succès
- 3XX : redirection
- 4XX : erreur du client
- 5XX : erreur du serveur.

+ cors
+ cache

🚩 [TODO] : outils network

### SSE

Contrairement aux WebSockets, les *Server Send Events* ne permettent qu'une communication unidirectionnelle du serveur vers le client. Il est utilisé lorsque le serveur doit régulièrement envoyer des informations au client, sans attendre de réponses, e.g. envoyer des logs en temps réel.

Le principe est très simple, il s'agit d'une requête et d'une réponse HTTP normales, à l'exception que la réponse HTTP est maintenue en vie (`keep-alive`) et est écrite petit à petit (`text/event-stream`). Le corps de la réponse suit le format suivant :

```
event: $EVENT_NAME
data: $DATA

event: $EVENT_NAME
data: $DATA

event: $EVENT_NAME
data: $DATA
```

Côté client, l'utilisation est très simple, il suffit d'écouter des événements d'un `EventSource`.

```javascript
// [JS] JavaScript

// Client
const servEvent = new EventSource($URL);
servEvent.addEventListener($EVENT_NAME, function(ev) {
    console.log(ev.data)
});
servEvent.close(); // termine la communication.


// Serveur (helper)
class SSE {
    constructor(res) {
        this.res = res;
        this.#setHeaders
    }
    #setHeaders() {
        this.res.set({
            'Cache-Control': 'no-cache',
            'Content-Type' : 'text/event-stream',
            'Connection'   : 'keep-alive'
        });
        this.res.flushHeaders();
    }
    dispatchEvent(name, data) {
        this.res.write(`event: ${name}\n${data}\n\n`);
    }
}

// Serveur
app.get($URL, async function(req, res) {

    const sse = new SSE(res);

    sse.dispatchEvent($EVENT_NAME, $DATA); // Envoyer un événement.
});
```

### Upload/Download

=> qu'est-ce qu'un Blob/File ?
=> decode/encode

### Websockets

https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

## Les formulaires

-> form
    -> input
    -> FormData / URLSearchParams.
    -> clear
    
-> validation + CSS

/!\ vérifier les donnés côté serveur.

**⚠** Vous ne devez **<u>*JAMAIS*</u>** faire confiance client. En effet, il est très aisé d'envoyer des données arbitraires au serveur. Vous devez ainsi *<u>**SYSTÉMATIQUEMENT**</u>* vérifier la validité des données envoyées par le client (format, valeurs, autorisations, etc).

## Gestion des données

Localstorage/sessionStorage/FileSystem API/cache.

## Les différents type de serveurs Web

La distribution du contenu statique est relativement simple, le serveur lit les fichiers, puis les envoie au client. Bien évidemment, peut gérer des fonctionnalités plus avancées comme mettre les fichiers en RAM pour les distribuer plus rapidement, vérifier les droits d'accès aux fichiers (dont authentifications), réécrire les URL, transmettre la requête à un autre serveur, personnaliser l'en-tête de la réponse HTTP, etc.

On utilise alors des serveurs Web, e.g. Apache, Nginx, qui offrent de nombreuses fonctionnalités et possibilités de configurations :
- réécritures d'URL/redirections ;
- transfert du flux / reverse proxy ;
- vérification des droits d'accès / authentification ;
- gestion des caches ;
- cgi/fastcgi ;
- etc.

Pour du contenu dynamique, i.e. généré sur demande par le serveur, il existe plusieurs façons de procéder :

- *CGI :* le serveur Web execute le fichier au lieu de transmettre son contenu au client. Il écrit sur l'entrée standard le corps de la requête, et transmet la sortie standard au client. Cette technique est simple mais peu performante.

- *fastCGI :* analogue au CGI, mais plus performant. Un ou plusieurs processus s'executent en contenu et communiquent avec le serveur Web via des sockets IPC, des sockets TCP, ou via des tubes nommés. C'est notamment ce qui est communément utilisé pour PHP, Ruby on rails, etc.

- *implémenter son propre serveur* qui répondra aux requêtes des clients. Le serveur peut alors supporter plusieurs protocoles en sus de HTTP, e.g. des WebSockets, des sockets TCP, etc. Il peut être implémenté dans n'importe quel langage (e.g. Python, JavaScript,  shell), et a donc accès à toutes leurs fonctionnalités et bibliothèques.

- *rediriger le flux* vers un autre serveur (reverse proxy). Quasi-identique à la solution précédente, il a l'avantage de pouvoir bénéficier des fonctionnalités du serveur Web (authentification, cache, etc), ainsi que d'éviter des problèmes de *Same Origin Policy* (SOP). Il peut aussi permettre de simplifier l'implémentation du serveur, en déléguant la sécurisation de la communication au reverse proxy, i.e. le serveur  envoie et reçoit des données en clair, et le reverse proxy les chiffre et les déchiffre.

Contrôle d'accès :
- soit au niveau du serveur REST ;
- soit via un reverse Proxy se plaçant entre le client et le serveur REST (e.g. apache, nginx).


Afin de rendre le code plus lisible, il est fréquent que les frameworks représentent les routes par une arborescence de fichiers. Au démarrage, le framework va ainsi lire de manière récursive un dossier e.g. `/routes/` et ajouter les différents gestionnaires en fonction des fichiers qui s'y trouvent. Ainsi, le fichiers/dossier `/routes/dir/{PARAMS}/foo` contiendra le gestionnaire à utiliser pour la route `/dir/$PARAM/foo`.

-> BDD
-> execute shell commands
-> redirections

-> 403/gestion authentification/.htaccess

## Opti (CM5 ?)

### Architecture client/serveur


L'affichage d'une page Web se déroule usuellement de la sorte :

```html
<!DOCTYPE>
<html>
    <head>
        <script src='...' defer></script>
        <link rel='stylesheet' href='...'></link>
    </head>
    <body>

    </body>
</html>
```

1. Le navigateur demande au serveur le fichier HTML correspondant à la page Web à afficher.

2. Le navigateur commence à lire et à interpréter le fichier HTML reçu.

3. Le navigateur lit la balise `<script>` et commence à télécharger le fichier correspondant. Comme la balise a l'attribut `defer`, le navigateur continue de lire et interpréter le fichier HTML.

4. Le navigateur lit la balise `<link>` et commence à télécharger le fichier CSS correspondant.

5. Le navigateur commence à construire l'arbre DOM à partir du contenu de `<body>`.

6. Une fois l'arbre DOM construit, il execute le script qui était `defer`.

7. Une fois l'exécution du script fini, le navigateur dessine la page Web pour la première fois.

### Optimisations

-> séparer static/dynamique pour cache
-> cache : client storage / RAM (dont sqlite)
-> pré-générer vs on demand vs lazy
-> calculs
-> async
-> webworker
-> img

-> profiler / lighthouse
-> hoist/+ les 2 autres trucs
-> page parsing
-> HTTP1vs2vs3

L'un des objectifs des développeur Web est de dessiner la page Web le plus tôt possible. Pour cela, il va user de diverses techniques :

- *Compresser les fichiers* avant de les transmettre, réduisant le temps de téléchargement des ressources nécessaires.

- *Réduire la taille des fichiers* en
  
  - supprimant le code inutilisé
  
  - le minimifiant (supprime les espaces et retours à la ligne)
  
  - en l'uglifiant (réduit la taille du code au prix de sa lisibilité, e.g. en renommant les variables).
  
  - pour les images, en réduisant sa résolution/qualité, ou en utilisant des formats vectoriels (SVG).
  
  - pour les images, afficher un *placeholder* ou version en basse résolution puis progressivement [la remplacer une version de plus haute résolution](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Loading#images).

- *Télécharger ou exécuter plus tard* les ressources non-nécessaires à l'affichage, via :
  
  - du *lazy load*, e.g. ne télécharger les images que lorsqu'elles apparaissent à l'écran.
  
  - de la *pagination*, e.g. sur un tableau ne télécharger/afficher que les X premières entrées et proposer des boutons pour afficher les entrées suivantes.
  
  - en reportant l'execution de certains bouts de codes à plus tard.

- *Réduire le nombre de fichiers téléchargés* (on vise généralement 3-4 fichiers par page) :
  
  - remplacer l'URL d'une image par [une chaîne de charactère en base64](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs).
  
  - fusionner les fichiers CSS en un seul.
  
  - fusionner les fichiers JS en un seul.
  
  - intégrer certaines ressources (e.g. JSON) dans le fichier JS.
  
  - intégrer le JS et/ou le CSS dans le fichier HTML.

- *Utiliser des caches* pour éviter de re-télécharger à chaque fois certaines ressources :
  
  - un cache basé le protocole HTTP (cf [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)).
  
  - un cache local basé sur `localStorage`, `sessionStorage`, ou `indexDB`.
  
  - un cache côté serveur en enregistrant des données dans la RAM afin de pouvoir répondre plus rapidement aux requêtes qui s'il fallait aller les lire directement sur le disque.

- *Pré-télécharger les ressources*, en commençant à les télécharger le plus tôt possible :
  
  - dans les balises `<script>`, l'attribut `defer`.
  
  - pour d'autres ressources utilisées plus tard, cf [<link rel=preload href='...' as='...'/>](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload).

- Pour les site Web massivement visités :
  
  - *distribuer la charge* (load balancing) entre plusieurs serveurs (⚠ engendre des problématiques de synchronisations).
  
  - *rapprocher le serveur du client*, *edge computing* (contenu dynamique), *content delivery network* (contenu statique).
  
  - découper son site Web en plusieurs modules/services indépendants hébergés sur plusieurs serveurs (⚠ si les services doivent fréquemment communiquer entre eux cela peut s'avérer contre-productif).

⚠ L'optimisation prématurée est diabolique. Vous n'avez, à votre niveau, pas besoin d'optimiser vos sites Web. Vous n'avez pas non plus à implémenter vous-mêmes ces optimisations, de nombreux outils le font déjà pour vous (e.g. Webpack).

🚩 [TODO] : outils navigateur pour network / load performances (lighthouse)

🚩 [TODO] : archi projet dev vs prod.

</main>
    </body>
</html>