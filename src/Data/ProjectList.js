/* eslint-disable quotes */
import imageBGS from '../assets/images/Board-game-score-capture.jpg';
import imageFF from '../assets/images/Funky-frenchy-screenshot.jpg';
import imageNP from '../assets/images/Capture-Nolia-paris-homepage.png';
import imageTO from '../assets/images/capture-trip-odvisor.jpg';

export default
[
  {
    id: 1,
    name: 'Board Game Score',
    description: "Site réalisé avec Symfony et React permettant aux utilisateur d'enregistrer leurs parties de jeux de société afin de faire remonter de nombreuses statistiques. Mise en ligne prévue prochainement.",
    category: ['React', 'Application'],
    image: imageBGS,
    // link: 'https://boardgamescores.fr',
  },
  {
    id: 2,
    name: 'Frenchy Funky',
    description: "Site E-commerce de vente de vêtements et accessoires, réalisé avec wordpress.",
    category: ['Wordpress', 'Site E-commerce'],
    image: imageFF,
    link: 'https://frenchy-funky.fr',
  },
  {
    id: 3,
    name: 'Nolia Paris',
    description: "Site vitrine réalisé avec Wordpress, mettant en avant l'entreprise ainsi que toute son offre traiteur afin de favoriser les prises de contact et les demandes de devis directement en ligne.",
    category: ['Wordpress', 'Site vitrine'],
    image: imageNP,
    link: 'https://nolia-paris.fr',
  },
  {
    id: 4,
    name: 'Trip Odvisor',
    description: "Site dans le genre du célèbre Trip Advisor. Le but de ce projet est de s'entrainer à construire un site en utilisant PHP pour afficher dynamiquement son contenu, et Javascript afin de gérer les thèmes (dark mode ...) ainsi que les systèmes de filtrage du contenu. ",
    category: ['PHP', 'Site vitrine'],
    image: imageTO,
    // link: 'https://boardgamescores.fr',
  },
];
