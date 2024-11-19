<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf8"/>
        <title>DS BDR 2024-2025</title>
        <link rel="stylesheet" href="./index.css">
        <script type="module" src="./index.js" defer></script>
    </head>
    <body>
        <header></header>
        <main>

# DS BDR 2024-2025 (1h30)

## SELECT (/10)

Soit la table `Patient`, écrivez les requêtes SQL permettant d'afficher :

1. Le nom, prénom, et date de naissance de chaque patients.
   <pre contenteditable lang="sql"></pre>
2. La liste des noms se finissant par `'d'`.
   <pre contenteditable lang="sql"></pre>
3. La liste des patients sans date de naissance.
   <pre contenteditable lang="sql"></pre>
4. La liste des patients, si la date de naissance est nulle, la remplace par "N/A".
   <pre contenteditable lang="sql"></pre>
5. La liste des patients nés entre une date A et B (inclus).
   <pre contenteditable lang="sql"></pre>
6. La liste (distincte) des dates de naissances.
   <pre contenteditable lang="sql"></pre>
7. La liste des patients dont le prénom est "Paul", "Jean", "Pierre", ou "X".
   <pre contenteditable lang="sql"></pre>
8. La liste des patients du plus vieux au plus jeune.
   <pre contenteditable lang="sql"></pre>
9. La liste des 10 patients les plus jeunes.
   <pre contenteditable lang="sql"></pre>
10. Par rapport à la requête précédente, la liste des 5 patients suivants.
   <pre contenteditable lang="sql"></pre>

## Modifier des entrées et pré-traitements (/10)

Soit la table `Patient`, écrivez les requêtes SQL permettant d'afficher :

1. Le nombre de patients (nb).
   <pre contenteditable lang="sql"></pre>
2. Chaque patients avec leur IMC (imc), calculé comme `poids/(taille*taille)`.
   <pre contenteditable lang="sql"></pre>
3. Pour chaque date de naissance, le poids moyen (moy_poids) des patients.
   <pre contenteditable lang="sql"></pre>
4. L'identifiant de chaque patient, et leur date de naissance au format (MM/DD).
   <pre contenteditable lang="sql"></pre>

Écrivez maintenant les requêtes permettant de répondre aux situations suivantes :

5. Un bébé est né aujourd'hui, son nom est "Dupond", il n'a pas encore de prénom.
   <pre contenteditable lang="sql"></pre>
6. L'hôpital suit la grossesse de Mme Y, enceinte de "Eddy", "Freddy"
   <pre contenteditable lang="sql"></pre>
7. Une erreur logicielle a donné des poids négatifs à certains patients. Transformez les poids de ces patients pour le rendre positif.
   <pre contenteditable lang="sql"></pre>
8. Paul Durand (n°44), est embêtant, les infirmiers ont décidé de le supprimer.
   <pre contenteditable lang="sql"></pre>
9. En quoi est-il important de pré-traiter/formatter les données avant de les insérer ?
   <pre contenteditable></pre>

## Création de tables et contraintes (/10)

Répondez aux questions suivantes :

1. Écrivez la requête SQL permettant de créer la table `Docteurs`.
   <pre contenteditable lang="sql"></pre>
2. Lors de la création d'un nouveau docteur, il arrive régulièrement que son nom apparaisse aussi dans la colonne prenom.<br/>
   Modifier la requête précédente pour empêcher cela.
   <pre contenteditable lang="sql"></pre>
3. Écrivez la requête SQL permettant de créer la table `Dossier`.
   <pre contenteditable lang="sql"></pre>
4. Qu'est-ce qu'une clef primaire ? Quelle(s) contrainte(s) implique-t-elles ? En quoi sont-elles utiles ?
   <pre contenteditable></pre>
5. Quel est l'effet de "ON UPDATE RESTRICT" ?
   <pre contenteditable></pre>
6. Un patient peut-il avoir plusieurs dossiers ? Expliquez pourquoi.
   <pre contenteditable></pre>
7. Expliquez la différence entre des colonnes générées 'STORED' et 'VIRTUAL'.
   <pre contenteditable></pre>

## Jointures (/10)

Soit les tables `Patients`, `Docteurs` et `Dossiers` :

1. Avec une sous-requête, affichez les docteurs qui suivent au moins un patient.
   <pre contenteditable lang="sql"></pre>
2. Réécrivez la requête précédente avec une jointure.
   <pre contenteditable lang="sql"></pre>
3. Affichez, chaque docteur avec le nombre de patients (nb_dossiers) qu'il suit.
   <pre contenteditable lang="sql"></pre>
4. Quelle est la différence entre `A LEFT JOIN B` et `A INNER JOIN B` ?
   <pre contenteditable></pre>
5. Qu'est-ce que `NATURAL JOIN`, en quoi est-il potentiellement dangereux ?
   <pre contenteditable></pre>
6. Pourquoi ne **jamais** faire de produits cartésien ?
   <pre contenteditable></pre>

</main>
    </body>
</html>