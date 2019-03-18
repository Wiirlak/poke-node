# poke-node
### Gestionnaire d'un parc d'attraction

+ Gestion des attractions CRUD (nom, description, images, type, capacité, durée, horaire d’ouverture, accès
handicapé, accès avec adulte)

+ Une attraction peut être mise en maintenance à tout moment; uniquement par utilisateur admin, un carnet
d’entretien des attractions doit être mis en place afin de limiter les pannes et perdre le moins d’argent
possible. (un système permettant de dire quelle est la meilleure mois pour réparer l'attraction doit être
disponible pour les admins)

+ Gestion des billets dans le parc: Un billet donne accès à certaines attractions.

 - Il y a différent type de PASS. (PASS journée, PASS Week-end, PASS Annuel, PASS 1daymonth(un jour
par mois toute l'année)

 - Contrôle des billets: Avant chaque attraction, l’API devra valider ou non si l’utilisateur peut accès à l’
attraction

 - PASS Escape game: Certains billet donneront accès aux attractions selon un ordre prédéfini (exemple:
système de pallier/progression)

+ Des statistiques quotidienne et hebdomadaire devront permette de mettre en évidence l’affluence de notre
magnifique parc pour chaque attraction

+ Taux de fréquentation du parc, attractions en temps reel

+ Ouverture nocturne du parc avec PASS Night (par un admin)
