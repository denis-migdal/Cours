<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf8"/>
        <title>CM4 (Web1)</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <style>
        </style>
        <header></header>
        <main>

# CM4 : Architecture client/serveur

Un site Web est généralement constitué d'au moins 2 parties :
- *le côté client* (*front-end*) : dans le navigateur, affiche la page Web et gère les interactions avec l'utilisateur. Il est usuellement défini par un ensemble de fichiers HTML, CSS, JS, WASM, etc.
- *le côté serveur* (*back-end*) : sur le serveur, répond aux requêtes du navigateur afin de distribuer les fichiers nécessaires à la page Web.

Les échanges entre le client et le serveur Web utilisent le protocole HTTP(S) :
- le client demande une ressource via une *requête HTTP* ;
- le serveur retourne la ressource demandée via une *réponse HTTP*.

## Contenu dynamique

Afin de tester nos pages Web en TP, nous utilisions jusqu'à présent *Live Server* comme serveur Web. Son fonctionnement est très simple : la racine du site Web est associée à un dossier <shell-code class="d4rk"><var>$ROOT</var></shell-code> du serveur. Chaque URL est alors associée à un fichier du serveur. Ainsi, lorsqu'il reçoit une requête HTTP, il retourne le fichier demandé, e.g. :<br/>
<shell-code class="d4rk">http://localhost:5000/<var>$PATHNAME</var></shell-code> est associé au fichier <shell-code class="d4rk"><var>$ROOT</var>/<var>$PATHNAME</var></shell-code>.

*Live Server* est ainsi un serveur web *statique* (*static web server*) distribuant des fichiers/ressources statiques (*static files/assets*). Il est cependant possible d'avoir des serveurs *dynamiques* (*dynamic server*) générant le contenu renvoyé en fonction de la requête HTTP reçue.


GET $PATHNAME http1/1
Host: $SERVER
Content-Length: BODY_LEN

BODY

    -> HTTP method.
    -> URL/Page // query string
    -> body/corps.

-> UNIFORMISÉ
    -> params (GET/POST)
    -> URL routes
    -> REST (state less : avoid DOS, cache)
    -> X.

-> fetch
    -> mais aussi WebSocket/SSE.

-> form

-> impl server (?)
    -> DOS ?

-> opti (CM5?)

-> distribue contenu *static*, quid *dynamique* e.g. généré from BDD, from params, from command shell, etc.



[...]


Cela est bien utile lors de la phase de développement, mais n'est pas adapté pour la phase de production, i.e. lorsque le site Web sera mis sur un serveur afin d'être accessible via Internet. On utilise alors des serveurs Web, e.g. Apache, Nginx, qui offrent de nombreuses fonctionnalités et possibilités de configurations :
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


# OLD

La distribution du contenu statique est relativement simple, le serveur lit les fichiers, puis les envoie au client. Bien évidemment, peut gérer des fonctionnalités plus avancées comme mettre les fichiers en RAM pour les distribuer plus rapidement, vérifier les droits d'accès aux fichiers (dont authentifications), réécrire les URL, transmettre la requête à un autre serveur, personnaliser l'en-tête de la réponse HTTP, etc.

# Le serveur Web



Le contenu généré peut être sous n'importe quel format : de l'HTML, des images, du texte brut, des données binaires, du JSON, etc. Cependant, il est préférable de séparer la structure de la page Web (HTML/CSS/JS/Images, etc.), des données dynamiques du site Web, cela pour plusieurs raisons :

- la *mise en cache facilitée* de la structure de la page Web statique ;

- *améliore la lisibilité* du code de votre site Web (notamment si la partie dynamique utilise une API REST) ;

- *découpler la structure de la page Web des données*, permettant ainsi de formatter les données afin de pouvoir facilement les réutiliser pour d'autres usages tout en évitant qu'une modification de la structure de la page Web ne casse tout.

**⚠** Vous ne devez **<u>*JAMAIS*</u>** faire confiance client. En effet, il est très aisé d'envoyer des données arbitraires au serveur. Vous devez ainsi *<u>**SYSTÉMATIQUEMENT**</u>* vérifier la validité des données envoyées par le client (format, valeurs, autorisations, etc).

## Serveur HTTP

Un serveur HTTP répond aux *requêtes HTTP* du client par une *réponse HTTP*. Les requêtes et réponses HTTP se composent d'un *en-tête* (header) contenant les méta-données, et d'un *corps* (body) contenant les données échangées.

L'en-tête de la requête contient ainsi l'URI demandée et la *méthode HTTP*. L'en-tête de la réponse contient le *code de status* de la réponse (200 si tout c'est bien passé). Cf la section *"Envoyer une requête HTTP"* de la fiche *API JS/DOM* pour plus de détails.

Côté serveur HTTP, on manipule des routes. Une route représente un ensemble d'URI qui seront traitées par le même gestionnaire. Il peut contenir des paramètres e.g. `/dir/$PARAM/foo` qui seront exploités par le gestionnaire (handler).

Afin de rendre le code plus lisible, il est fréquent que les frameworks représentent les routes par une arborescence de fichiers. Au démarrage, le framework va ainsi lire de manière récursive un dossier e.g. `/routes/` et ajouter les différents gestionnaires en fonction des fichiers qui s'y trouvent. Ainsi, le fichiers/dossier `/routes/dir/{PARAMS}/foo` contiendra le gestionnaire à utiliser pour la route `/dir/$PARAM/foo`.

🚩 [TODO] : outils network


# Architecture client/serveur


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

## Optimisations

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

### Serveur HTTP (bas niveau)

```typescript
// [TS] TypeScript
// Exécuter le fichier : deno run --allow-net --allow-env $FILE

// @deno-types="npm:@types/express@4"
import express from "npm:express";
import cors    from "npm:cors"

const app = express();
app.use(cors()) // CORS - Autorise l'accès à partir d'autres domaines.

// Considérer que le corps des requêtes est du texte brut.
// .raw() permet d'obtenir des données binaires.
// .json() si le corps des requêtes est systématiquement du JSON.
app.use(express.text()); 

// ---------------------------------------------
// ---------- ROUTES ---------------------------
// ---------------------------------------------

// Ajouter une route (méthode HTTP GET)
app.get($ROUTE, (request, response) => {

    // Affiche les paramètres de la requête GET.
    console.log(request.query);

    response.send($DATA); // $DATA est une chaîne de charactère.
});

// Ajouter une route (méthode HTTP POST)
app.post($ROUTE, (request, response) => {

    // Affiche le corps de la requête POST.
    console.log(request.body);

    response.send($DATA);
});

// Renvoyer du JSON dans la réponse
app.get($ROUTE, (request, response) => {
    response.json($DATA); // $DATA est un object.
});

// Avec un paramètre dans la route
app.get("/dir/:param/foo", (request, response) => {
    response.send(request.params.param);
});

// Retourner un code d'erreur
app.get("*", (request, response) => {
    response.status(404).send("Not found");
});

// ---------------------------------------------

const port = Number(Deno.env.get("PORT")) || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}...`);
});
```

```python
# [🐍] Python
from aiohttp import web

# CORS
import aiohttp_cors

app = web.Application()

#########################################################
########### ROUTES ######################################
#########################################################

routes = web.RouteTableDef()

# Ajouter une route (méthode HTTP GET)
@routes.get($ROUTE)
async def myhandler(request):

    # Affiche les paramètres de la requête GET.
    print(request.rel_url.query)

    return web.Response(text=$DATA) # $DATA est une chaîne de charactères.

# Ajouter une route (méthode HTTP POST)
@routes.post($ROUTE)
async def myhandler(request):

    body = await request.text # pour du texte.
    body = await request.json # pour du JSON.
    print(body)

    return web.Response(text=$DATA)

# Renvoyer du JSON dans la réponse
@routes.get($ROUTE)
async def myhandler(request):
    web.json_response($DATA); # $DATA est un dictionaire.

# Avec un paramètre dans la route.
@routes.get("/dir/{param}/foo")
async def myhandler(request):
    param = request.match_info.get('param', None)
    print(param)
    web.Response(text=$DATA)

# Retourner un code d'erreur
@routes.get("*")
async def myhandler(request):
    raise web.HTTPNotFound("Not found")
    # ou request.Response(text="Not found", status=404)

app.add_routes(routes)

#########################################################

# CORS - Autorise l'accès à partir d'autres domaines.
cors = aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
        allow_credentials=True,
        expose_headers="*",
        allow_headers="*"
    )
})

if __name__ == '__main__':
    web.run_app(app)
```

### Serveur HTTP (avec arborescence de routes)

## API REST

Une API REST est une manière de concevoir les échanges HTTP entre le client et le serveur de sorte à les uniformaliser, les rendre plus compréhensibles, et faciliter les opérations de tests et de déboguages. Une API REST est donc implémentée par un serveur HTTP.

Une requête REST est composée de 3 éléments :

- *une URI* (ou route) qui désigne une ressource ;

- la *méthode HTTP* qui indique le type d'opération à effectuer ;

- le *corps de la requête* contenant des données envoyées au serveur.

Une API REST supporte 5 méthodes HTTP :

- *GET :* lire la ressource.

- POST : ajouter une ressource à une collection.

- *PUT :* créer une ressource ou la remplacer si elle existe.

- *PATCH :* modifier partiellement une ressource.

- *DELETE :* supprimer une ressource.

L'URI/route des ressources doivent suivre le même format. On appelle *collection* une ressource qui est elle-même un ensemble de ressources. Les routes permettent aussi de gérer plus facilement les droits d'accès aux données, en autorisant/interdisant l'accès à certaines routes, soit au niveau du serveur REST, soit via un reverse Proxy se plaçant entre le client et le serveur REST (e.g. apache, nginx).

La modification d'une ressource est effectuée de la sorte :

- `GET /$COLLECTION/` : obtenir la liste des ressources de la collection.

- `POST /$COLLECTION/` : créer une nouvelle ressource dans la collection.

- `GET /$COLLECTION/$ID` : obtenir la ressource d'identifiant `$ID` appartenant à la collection.

- `PUT /$COLLECTION/$ID` : modifier ou créer la ressource d'identifiant `$ID` appartenant à la collection.

- `PATCH /$COLLECTION/$ID` : modifier la ressource d'identifiant `$ID` appartenant à la collection.

- `DELETE /$COLLECTION/$ID` : supprimer la ressource d'identifiant `$ID` appartenant à la collection.

Le corps de la requête et de la réponse REST sont usuellement au format JSON, mais peuvent utiliser n'importe quel format (potentiellement déterminé par la requête REST) :

- URLSearchParams ;

- texte brut ;

- données binaires ;

- XML ;

- etc.

Les API REST sont *sans état*, c'est à dire que le serveur n'enrigistre pas l'état de la connexion/session HTTP. L'état est stocké côté client et les données nécessaires sont inclues dans la requête REST.

Le fait de ne pas stocker d'état côté serveur permet d'éviter certaines attaques DoS de clients malicieux qui ouvriraient des connexions/sessions HTTP afin de surcharger le serveur. Cela permet aussi de mettre en cache la réponse à certaines requêtes REST, ainsi que de plus facilement répartir l'API REST sur plusieurs serveur en limitant les problématiques de synchronisations.

Pour les opérations de tests et de débogues, le fait qu'il n'y a pas d'état stocké signifie qu'une même requête REST produira le même effet, quel que soit l'état de la connexion/session. Cela permet ainsi de mieux comprendre les échanges entre le client et le serveur.

## Websocket

🚩 [TODO]

## Server Send Event

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

```python
# [🐍] Python

# Client
def handler(ev):
    console.log(ev.data)

const servEvent = EventSource.new($URL);
servEvent.addEventListener($EVENT_NAME, handler);
servEvent.close(); # termine la communication.

# Serveur
# pip3 install aiohttp_sse
from aiohttp_sse import sse_response


async def GET(request):
    req = sse_response(request)

    req.send($DATA, event=$EVENT_NAME) # Envoyer un événement.
```

</main>
    </body>
</html>