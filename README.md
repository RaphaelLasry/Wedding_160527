# Margot & Raphaël · 16 mai 2027

Première proposition de site de mariage en français, responsive et sans compilation. HTML, CSS et JavaScript uniquement : aucun compte technique ou serveur à maintenir.

## Aperçu local

Ouvrir `index.html` dans un navigateur. Aucun serveur ni installation n'est nécessaire. Une connexion Internet est utilisée pour la photo du château et les polices Google Fonts ; des polices de secours sont prévues.

## Publier sur GitHub Pages

1. Vérifier les informations et compléter les coordonnées et liens avant d'envoyer le site aux invités.
2. Dans le terminal du dépôt, exécuter :

   ```sh
   git add index.html styles.css script.js site-config.js mariage.ics .nojekyll README.md
   git commit -m "Add wedding website first proposal"
   git push origin HEAD
   ```

3. Sur GitHub, ouvrir https://github.com/RaphaelLasry/Wedding_160527 puis **Settings > Pages**.
4. Dans **Build and deployment**, choisir **Deploy from a branch**.
5. Choisir la branche contenant les fichiers (généralement `main`) et le dossier **/ (root)**, puis **Save**.
6. Attendre la fin du déploiement, visible dans l'onglet **Actions**. Le site sera disponible à l'adresse : https://raphaellasry.github.io/Wedding_160527/ . L'activation n'est pas faite par la simple création de ces fichiers.

Si l'option Pages n'est pas disponible pour un dépôt privé, vérifier les conditions de votre abonnement GitHub. Ne rendre le dépôt public qu'après avoir retiré toute donnée privée. Les modifications suivantes se publient avec un nouveau commit et un push sur la même branche. Aucun workflow Actions personnalisé n'est nécessaire.

## Personnaliser

- `index.html` : texte, programme, informations pratiques et FAQ.
- `styles.css` : couleurs, typographies et mise en page.
- `site-config.js` : lien du formulaire Google Forms (`rsvpUrl`), lien d'intégration (`rsvpEmbedUrl`), date limite et autres liens externes. Les adresses de contact sont dans `index.html`. Laisser une chaîne vide pour garder un lien externe optionnel masqué et l'annonce « à venir » affichée lorsqu'elle existe. Le lien RSVP et l'iframe possèdent aussi des URL de secours dans `index.html` : les mettre à jour si vous changez de formulaire, afin de conserver l'accès sans JavaScript.
- `mariage.ics` : événement à télécharger ; accueil à 15h30 heure française (13h30 UTC), sans heure de fin supposée.

Exemple de configuration, à remplacer par vos vraies informations :

```js
window.weddingConfig = {
  rsvpUrl: 'https://forms.gle/ELwrREyLkWkmdapq6',
  rsvpEmbedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdptesRBwai4_KKZOee9kGSSuj5t3gyT5eX53w2IHqmwhtWyA/viewform?embedded=true',
  responseDeadline: '1er mars 2027',
  carpoolUrl: 'https://docs.google.com/spreadsheets/d/VOTRE_TABLEAU',
  pizzaUrl: '',
  giftUrl: '',
  photoAlbumUrl: ''
};
```

Seuls les liens HTTPS sont activés. La date de l'exemple n'est pas une date limite décidée pour votre mariage.

## Réponses, réservations et paiements

GitHub Pages héberge des fichiers statiques : il ne reçoit pas de formulaires, ne traite pas de paiements et ne bloque pas de créneaux.

Le formulaire Google Forms est intégré directement dans la rubrique des réponses grâce à une iframe responsive. Un lien « Ouvrir le formulaire séparément » reste disponible si l'intégration est bloquée par le navigateur : https://forms.gle/ELwrREyLkWkmdapq6 . Il remplace l'ancien formulaire de préparation d'e-mail. Les adresses **raphaellasry1@hotmail.fr et margotcosson1997@gmail.com** restent affichées pour les questions, mais le site n'envoie plus de message RSVP par messagerie.

L'URL intégrée est celle du formulaire public sur `docs.google.com`, avec `embedded=true`, pas le lien court `forms.gle`. Pour la retrouver dans Google Forms, utiliser l'option d'intégration HTML (`<>`). Le script n'accepte pour l'iframe que les URL HTTPS de formulaires publics sur `docs.google.com`. L'apparence interne et la confirmation restent gérées par Google. L'iframe se charge à l'approche de la rubrique ; Google reçoit alors une requête du navigateur. Sa hauteur est fixe et adaptée au mobile ; si vous ajoutez des questions, ajuster `.rsvp-embed` dans `styles.css`. Le formulaire reste défilable si son contenu dépasse cette hauteur.

Les réponses sont recueillies par Google Forms, pas par GitHub Pages. Dans Google Forms, vérifier la publication et l'accès à toute personne disposant du lien. Pour ne pas imposer de connexion Google, choisir la collecte d'adresses e-mail par saisie du répondant et ne pas limiter à une réponse. Pour les accusés de réception, activer « Envoyer aux personnes interrogées une copie de leur réponse : Toujours ». Ces réglages privés et la livraison effective des e-mails ne peuvent pas être vérifiés depuis le lien public.

Activer les notifications de nouvelles réponses pour les organisateurs. Pour que Raphaël les reçoive aussi, partager le formulaire avec son compte Google et lui faire activer ses notifications, ou configurer un transfert ciblé depuis Gmail après vérification de son adresse. Ne pas supposer que le formulaire notifie automatiquement les deux adresses simplement parce qu'elles sont affichées sur le site.

Tester le lien en navigation privée et envoyer vous-mêmes une réponse d'essai pour vérifier sa présence dans Forms/Sheets, les notifications aux deux organisateurs et la copie reçue par le répondant. Limiter l'accès aux réponses aux organisateurs, surtout pour les allergies et les informations concernant les enfants. Ne jamais publier les réponses ou la feuille Google Sheets dans le dépôt. Une mention sur le site informe les invités du passage par Google Forms.

- **Covoiturage** : créer un tableau partagé avec départ, date/heure, conducteur, places disponibles et contact. Éviter les coordonnées publiques ; communiquer le lien aux invités en connaissance de ses droits d'accès.
- **Pizzas du samedi 15 mai** : publier un menu confirmé et créer cinq lignes par quart d'heure avec nom et pizza. Un tableur est simple, mais ne garantit pas contre les modifications ou réservations concurrentes ; utiliser un outil de réservation avec capacité de cinq si cette limite doit être stricte. Ne pas annoncer de confirmation avant validation de la commande.
- **Hébergements** : aucune nuitée n'est proposée au château. La rubrique dédiée présente les 22 adresses transmises par le propriétaire, regroupées par secteur, avec contacts cliquables. Les invités réservent et règlent directement auprès des établissements. Les tarifs, capacités, classements et distances sont ceux de la liste fournie, sans vérification pour 2027 ; les durées des tarifs ne sont pas déduites lorsqu'elles ne sont pas précisées. Le numéro transmis après La Ferrière et Le Buisson est présenté comme un contact commun à confirmer.
- **Liste de mariage** : créer votre liste chez un prestataire de confiance et renseigner `giftUrl`. Le site ne demande aucune donnée bancaire.
- **Photos** : utiliser un album à accès limité et ne publier que les images dont vous avez les droits et les accords nécessaires. Un lien publié sur le site n'est pas privé.

## À confirmer avant diffusion

- Noms de famille et noms des parents, si vous souhaitez les publier ; ils ne sont pas inventés dans cette proposition.
- Date limite de réponse ; les deux coordonnées e-mail sont déjà renseignées.
- Horaires de train et trajet entre la gare et le château, accessibilité et modalités d'accueil des enfants.
- Actualité des coordonnées, noms, capacités, classements, distances et tarifs des hébergements de la liste du propriétaire ; le site ne garantit aucune disponibilité ni aucun prix.
- Programme du samedi, menu des pizzas, horaires et ouverture des réservations.
- Texte personnel, photos de couple et du civil ; destination du voyage de noces si vous souhaitez la révéler.

## Images et confidentialité

La photo représente le vrai château de Courtalain : « Chateau-de-courtalain vu-du-parc.jpg », par **Catskingloves**, 5 juin 2010. Source : https://commons.wikimedia.org/wiki/File:Chateau-de-courtalain_vu-du-parc.jpg . Licence choisie : **CC BY-SA 3.0**, https://creativecommons.org/licenses/by-sa/3.0/deed.fr . Le fichier source n'est pas modifié ; le cadrage d'affichage est réalisé par CSS. Les crédits et la licence sont indiqués en pied de page. Vous pouvez la remplacer par une photo dont vous avez l'autorisation de publication. Les photos de chambres ne sont pas inventées.

Le site ne contient ni suivi analytique, ni cookies ajoutés, ni stockage local des réponses. Google Fonts et Wikimedia reçoivent toutefois les requêtes habituelles du navigateur. Les images et polices peuvent être hébergées localement ultérieurement pour supprimer ces dépendances.

La balise `noindex, nofollow` demande aux moteurs de ne pas indexer le site, mais **ne constitue pas un contrôle d'accès**. GitHub Pages est normalement accessible au public, y compris si le dépôt source est privé. Ne publier ni coordonnées personnelles non souhaitées, ni liste d'invités, ni données bancaires ou médicales. Un vrai site privé nécessite un hébergement avec authentification, pas un mot de passe en JavaScript.