<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>TP1 (AdminSys)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/tp/index.css"  rel="stylesheet">
        <script  src="/skeleton/tp/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# TP1 (2h)

## Prise en main

1. Ouvrez un nouveau terminal (tapez <script type="c-text">Terminal</script> dans <script type="c-text">Activités</script> en haut à gauche).
2. Installez le serveur en copiant le texte ci-dessous dans le terminal :
<script type="c-bash">
/home/scratch/denmigda/public/S2_AdmSys/ASTerm/ASTerm.install
</script>
3. Le serveur est désormais lancé. Vous pourrez le retrouver dans la liste des applications sous le nom "ASTerm".
4. <q-text>Dans l'invite, identifiez le nom du serveur et de l'utilisateur actuel :</q-text>

- prise en main du terminal (#17+#18)

## Créer une commande

1. <q-text>Avec <script type="c-bash">nano</script>, ouvrez le fichier <script type="c-text">skeleton</script>.</q-text>
2. <q-text>Modifiez ce fichier pour qu'il affiche la somme de deux arguments passés en paramètres (sans utiliser argparse).</q-text>
3. Enregistrez ce fichier sous le nom <script type="c-text">add</script> (<script type="c-text">^+X</script>).
4. <q-text>Utilisez la commande <script type="c-text">mkcmd <h>$FILE</h></script> afin de transformer ce fichier en commande.</q-text>
5. <q-text>Testez votre nouvelle commande afin d'afficher la somme de 1 et de 2.</q-text>

## Argparse

Nous allons utiliser la bibliothèque Python argparse afin d'ajouter des options à notre commande <script type="c-bash">add</script>. Pour cela, vous vous référerez au contenu des supports de cours. Aussi, vous prendrez soin de bien tester votre commande après chaque modification.

1. Transformez la commande <script type="c-bash">add</script> en déclarant, via argparse, ses 2 arguments positionnels : a et b.
2. Ajoutez un drapeau <script type="c-bash">-s</script>/<script type="c-bash">--string</script> qui effectuera la concaténation au lieu de la somme.
3. Ajoutez un drapeau <script type="c-bash">-c</script>/<script type="c-bash">--color</script> qui affichera le résultat en couleur (implémenté plus tard).
4. Ajoutez un paramètre nommé <script type="c-bash">--prefix</script> qui indiquera le texte à afficher avant le résultat (par défaut <script type="c-text">Sum: </script>).
5. <q-text>Copiez le contenu de votre script ci-dessous :</q-text>
5. <q-text>Effectuez l'addition de 2 et 3, avec un préfixe valant <script type="c-text">a + b = </script> :</q-text>

## Mise en forme de l'affichage

Le Shell est quelque peu terne, ajoutons-lui un peu de couleurs.

Pour cela nous pouvons écrire <script type="c-shell">\e[<h>$CODE[;...]</h>m</script> qui, au lieu d'être affiché, sera interprété par le terminal. Ainsi le texte qui suivra sera mis en forme, en fonction des options que nous aurons spécifiés :

<style>
  .table_format {


    & td, & th {
      text-align: center;
      border: 1px solid light-dark(black, white);
    }

    & blink {
      animation: blinker 1s linear infinite;
    }

  }

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>

<center><b>Couleur du texte</b></center>

<table class='table_format'>
  <tbody>
    <tr><th>Code</th>
      <td>30</td>
      <td>31</td>
      <td>32</td>
      <td>33</td>
      <td>34</td>
      <td>35</td>
      <td>36</td>
      <td>37</td>
    </tr>
    <tr><th>Résultat</th>
      <td><span style='color:black;background-color:white'>black</span></td>
      <td><span style='color:red'>red</span></td>
      <td><span style='color:green'>green</span></td>
      <td><span style='color:yellow'>yellow</span></td>
      <td><span style='color:blue'>blue</span></td>
      <td><span style='color:magenta'>magenta</span></td>
      <td><span style='color:cyan'>cyan</span></td>
      <td><span style='color:lightgray'>lightgray</span></td>
    </tr><tr>
      <td colspan='9'></td>
    </tr><tr><th>Code</th>
      <td>90</td>
      <td>91</td>
      <td>92</td>
      <td>93</td>
      <td>94</td>
      <td>95</td>
      <td>96</td>
      <td>97</td>
    </tr>
    <tr><th>Résultat (light)</th>
      <td><span style='color:darkgray'>darkgray</span></td>
      <td><span style='color:#FF8787'>light red</span></td>
      <td><span style='color:lightgreen'>light green</span></td>
      <td><span style='color:#DED82C'>light yellow</span></td>
      <td><span style='color:lightblue'>light blue</span></td>
      <td><span style='color:#CC58CC'>light magenta</span></td>
      <td><span style='color:#4CCCE6'>light cyan</span></td>
      <td><span style='color:white;background-color:black'>white</span></td>
    </tr>
  </tbody>
</table>


<center><b>Format du texte</b></center>

<table class='table_format'>
  <tbody>
    <tr><th>Code</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr><th>Résultat</th>
      <td>(reset)</td>
      <td><b>bold</b></td>
      <td><span style="opacity:0.5">dim</span></td>
      <td><em>italic</em></td>
      <td><u>underline</u></td>
      <td><blink>blink</blink></td>
      <td>(hidden)</td>
      <td><s>barred</s></td>
    </tr>
  </tbody>
</table>

⚠ Pensez à bien réinitialiser la mise en forme (<script type="c-bash">\e[0m</script>) à la fin de votre texte.

1. Testez la mise en forme avec <script type="c-bash">echo $'\e[1;34mblue\e[0m'</script>.
2. <q-text>Pourquoi utiliser <script type="c-bash">$''</script> et non <script type="c-bash">''</script> ?</q-text>
3. <q-text>Affichez "Hello" en italique et magenta :</q-text>
4. <q-text>Modifiez la commande <script type="c-bash">add</script> afin que le résultat s'affiche en vert et en gras.<br/>⚠ Pour python, il faut utiliser <script type="c-text">\033</script> à la place de <script type="c-text">\e</script>.</q-text>
5. <q-text>Modifiez la commande <script type="c-bash">add</script> afin que les résultats négatifs s'affichent en rouge clignotant :</q-text>

## SSH et alias

En réalité la commande <script type="c-bash">ASTerm</script> ouvre un terminal distant sur le serveur via SSH.

1. <q-text>Ouvrez un nouveau terminal, puis exécutez la commande <script type="c-bash">add</script>. Que se passe-t-il ? Pourquoi ?</q-text>
1. <q-text>Utilisez la commande <script type="c-bash">ssh zeus@ASTerm '<h>$CMD</h>'</script> pour exécuter la commande <script type="c-bash">add</script> sur le serveur :</q-text>
1. <q-text>Créez puis testez l'alias <script type="c-bash">hello</script> correspondant à <script type="c-bash">echo Bonjour</script>.</q-text>
1. <q-text>Utilisez SSH pour exécuter la commande <script type="c-bash">hello</script>. Que se passe-t-il ? Pourquoi ?</q-text>
1. Lancez SSH en mode interractif via la commande <script type="c-bash">ssh zeus@ASTerm</script>.
1. <q-text>Lancez les commandes <script type="c-bash">add</script> et <script type="c-bash">hello</script>. Que se passe-t-il ? Pourquoi ?</q-text>

</main>
    </body>
</html>