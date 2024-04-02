import type { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "Portfolio",
    stacks: ["Nuxt", "Figma"],
    img: "/images/previews/portfolio.png",
    year: "2024",
    websiteUrl: "https://hugomandou.fr",
    githubUrl: "https://github.com/Atlenexe/Portfolio-2024",
    content: `J'ai réalisé ce portfolio, du design jusqu'au développement. Tout a commencé par une phase de conception sur Figma, où j'ai donné vie à mes idées en créant des maquettes et en peaufinant chaque détail visuel.

    Une fois le design solidifié, je me suis lancé dans la phase de développement en utilisant le framework Nuxt. Bien que j'aie eu peu d'expérience avec ce framework auparavant, cette opportunité m'a permis d'en apprendre beaucoup plus sur cette technologie.
    
    Pour le déploiement de mon portfolio, j'ai décidé d'utiliser Github Pages. Cela m'a permis d'héberger facilement et rapidement mon site web gratuitement. Sachant qu'il s'agit d'une petite application web, cela ne nécessitait pas une infrastructure lourde. Bien que ce fût ma première expérience avec cet outil, j'ai rencontré quelques problèmes initiaux, notamment au niveau du chargement des ressources telles que les images. Après quelques tours sur des documentations de Github Pages et de Nuxt, j'ai rapidement résolu tous mes problèmes !`,
  },
  {
    id: "supermaxiplanefight",
    name: "Super maxi plane fight",
    stacks: ["HTML", "Javascript"],
    img: "/images/previews/supermaxiplanefight.png",
    year: "2024",
    websiteUrl: null,
    githubUrl: "https://github.com/Atlenexe/supermaxiplanefight",
    content: `Dans le cadre du mastère en développement web à l'ECV Nantes, j'ai participé à un projet solo consistant en la création d'un jeu vidéo réalisé entièrement en JavaScript pur.

    Ayant déjà créé un jeu simple de type arcade sur le moteur de jeu GameMaker Studio 2, j'ai décidé de le reproduire sur un navigateur web, sans utiliser aucun moteur, en utilisant mes connaissances en JavaScript. Le défi principal résidait dans l'utilisation pour la première fois de l'élément HTML Canvas, permettant de réaliser des rendus dynamiques.
    
    Ce jeu, nommé "Super Maxi Plane Fight", est un jeu d'arcade inspiré des jeux que l'on trouvait sur ces machines dans les années 80, d'où cet aspect très cliché. Le but du jeu est très simple : nous contrôlons un avion et devons tirer sur d'autres avions ! (Il n'y a pas plus compliqué). Il y a un système de vie et de score pour créer de la compétition avec soi-même et, bien sûr, avec d'autres joueurs. Pour rendre le jeu plus dynamique et nerveux, j'ai pensé à ajouter d'autres types d'avions, chacun ayant ses spécificités.
    
    Ce projet n'est pas encore terminé, mais il repose sur de bonnes bases. Malheureusement, j'ai dû quitter cette formation à l'ECV Nantes en février, n'ayant pas trouvé d'alternance. Cependant, je compte tout de même continuer ce projet prochainement. Il me reste beaucoup à faire afin d'obtenir un jeu complet et agréable à jouer !`,
  },
  {
    id: "neobloom",
    name: "Neo bloom",
    stacks: ["Next.js", "Figma"],
    img: "/images/previews/neobloom.png",
    year: "2023",
    websiteUrl: "https://neo-bloom.vercel.app/",
    githubUrl: "https://github.com/Atlenexe/Hackathon-ECV-2023",
    content: `
    En octobre 2023, dans le cadre de mon mastère Développement Web à l'ECV Nantes, j'ai participé à un Hackathon regroupant toutes les filières des mastères présents dans l'école (animation 2D/3D, illustration, UI/UX, Direction Artistique...).

Le but de ce hackathon était de proposer une attraction immersive sur le site de la Carrière Misery en utilisant l'IA à un moment de la conception, où nous avons été répartis dans des groupes de 10 étudiants, afin de concevoir la totalité du projet, de son contenu à sa communication en passant par son identité graphique ainsi que son modèle économique sur le temps d'une semaine. 

Notre groupe a imaginé Neobloom, un parc végétal où la technologie est mise au service de la vie botanique à travers un jardin extraordinaire.

En tant que seul développeur web dans l'équipe, j'ai décider de créer un petit site web vitrine présentant le projet, avec l'aide d'une étudiante en UI/UX, qui a réalisé la maquette Figma de la page web. J'ai développé en parallèle le site internet avec NextJS.

Le développement du site a été plutôt compliqué, à cause du temps très restreint. En effet, j'ai eu seulement 2 jours pour réaliser ce site internet, c'est donc pour cela que certaines fonctionnalités manquent, ou sont très simplifiées.`,
  },
  {
    id: "acrousthetime",
    name: "Acrous the time",
    stacks: ["Next.js", "Docker", "Figma"],
    img: "/images/previews/acrousthetime.png",
    year: "2023",
    websiteUrl: null,
    githubUrl: null,
    content: `
    Lors de ma formation en licence professionnelle MIAR en juin 2023, j'ai effectué un projet en équipe de 6 durant 2 semaines. Le but du projet consistait à refaire entièrement l'emploi du temps de l'université de Nantes (back, front et appli mobile Android), avec comme seules ressources données par les enseignants, les fichiers CSV de toutes les données (étudiants, créneaux, salles, etc...). 

Cette application a pour utilité de consulter les emplois du temps des salles, étudiants, groupes et enseignants, grâce à un système de recherche et de favoris. L'utilisateur a aussi la possibilité de pouvoir se connecter, afin de demander la réservation d'une salle en fonction des disponibilités.

Je me suis donc occupé de la partie design et développement front de l'application web. J'ai utilisé Figma pour designer, et NextJS (React) pour réaliser ce site web. Étant habitué à utiliser Angular, j'ai appris très rapidement pendant ces deux semaines ce framework qui était nouveau pour moi.

Tous les composants, y comprit le calendrier, ont été réalisés sans librairie, mais à la main de zéro, afin de coller au mieux au design Figma.`,
  },
  {
    id: "flaguesser",
    name: "Flaguesser",
    stacks: ["Angular", "Figma"],
    img: "/images/previews/flaguesser.png",
    year: "2022",
    websiteUrl: "https://flaguesser.vercel.app/",
    githubUrl: "https://github.com/Atlenexe/Flaguesser",
    content: `
    Lors de ma formation en licence professionnelle MIAR en fin d'année 2022, j'ai effectué un projet web en utilisant le framework Angular. Nous avions le choix quant au framework à utiliser et j'ai opté pour Angular, une technologie que je maîtrisais déjà en entreprise mais que je continuais à approfondir à l'époque.

La consigne du projet consistait à intégrer un système de route et de stockage à une application web, en utilisant une API et une bibliothèque de notre choix. 

J'ai choisi d'utiliser une API fournissant des drapeaux de pays du monde, flagcdn, et j'ai conçu un jeu de quiz où l'on doit deviner le pays auquel correspond le drapeau affiché. J'ai également décidé de créer une interface mobile à cette application web, et de la rendre responsive.`,
  },
  {
    id: "fichepaie",
    name: "Fiche-paie.net",
    stacks: ["Angular", "Symfony", "Docker", "Figma"],
    img: "/images/previews/fichepaie.png",
    year: "2022-2023",
    websiteUrl: "https://www.fiche-paie.net/",
    githubUrl: null,
    content: `Pour répondre aux difficultés des entrepreneurs à traiter la paie facilement pour leurs salariés, Dotnet développe un logiciel simple, conforme et à jour de la réglementation, appelé Fiche Paie. Elle compte près de 100 000 utilisateurs dans toute la France métropolitaine et dans les DOM-TOM, que ce soit des TPE, des PME, des commerçants ou des artisans.

      Le logiciel propose un grand nombre de fonctionnalités pour simplifier le processus de paie, telles que la création rapide de fiches de paie, la DSN, les régularisations, les fins de contrat, la gestion du Prélèvement à la Source, un journal de paie complet, et bien d’autres fonctionnalités, avec une veille sociale et juridique pour rester en conformité avec les réglementations en vigueur.
      
      Dans le cadre de ma formation en Licence professionnelle MIAR à l'IUT de Nantes, j'ai effectué une alternance d'une durée d'un an dans l'entreprise Dotnet, dans laquelle j'ai été chargé de la mission de refonte complète du logiciel Fiche Paie, mission partagée avec le reste de l’équipe.
      
      Avant cette refonte, l'application tournait sous PHP, et avait quelques problèmes d’évolution, de stabilité, mais aussi de performance. Cette refonte consistait à refaire à neuf l'application dans sa totalité, en utilisant de nouvelles technologies, comme le framework Angular pour le front, mais aussi Symfony pour le back.
      
      N'ayant à mon arrivée aucune connaissance autour d'Angular et de Symfony, j'ai dû apprendre à utiliser ces outils en suivant des formations sur internet, en lisant les documentations et surtout en pratiquant. Au bout de quelques semaines, je me sentais très à l'aise avec ces technologies !
      
      Pour résumer mes tâches pendant cette alternance, j'ai reproduit des pages déjà existantes sur l'ancienne version de l'application, en reprenant exactement le même design, ou à certaines occasions, en les redesignant.`,
  },
  {
    id: "proxinnov",
    name: "Proxinnov",
    stacks: ["HTML", "Javascript", "NodeJs"],
    img: "/images/previews/proxinnov.png",
    year: "2022",
    websiteUrl: null,
    githubUrl: null,
    content: `
    Lors de ma formation en BTS SN IR dans le dernier semestre de l'année 2021-2022, j'ai effectué un projet de fin d'année en groupe pour l'entreprise Proxinnov, une société qui accompagne les entreprises dans le développement de leurs projets de robotisation.

Le but de notre projet était fabriquer un démonstrateur visant à montrer les différentes consommations électriques des robots ou d’éléments robotiques, sous forme de boîtiers consultables en direct à distance, sur une interface web. 

Mon rôle dans l'équipe était donc de m'occuper de l'affichage des données, et de réaliser l'interface de cette application web.

J'ai donc réalisé un serveur web à l'aide de NodeJS, afin d'envoyer les données en temps réel à l'interface web, que j'ai réalisé en HTML, CSS et Javascript. J'ai également utilisé la librairie ChartJS, afin d'afficher les données sous forme de graphiques.`,
  },
];
