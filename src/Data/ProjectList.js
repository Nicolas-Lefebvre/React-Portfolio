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
    Description: "Site réalisé avec Symfony et React permettant aux utilisateur d'enregistrer leurs parties de jeux de sociétés afin de faire remonter de nombreuses statistiques.",
    Category: ['React', 'Application'],
    image: imageBGS,
  },
  {
    id: 2,
    name: 'Frenchy Funky',
    Description: "Site E-commerce de vente de vêtements et accessoires, réalisé avec wordpress.",
    Category: ['Wordpress', 'Site E-commerce'],
    image: imageFF,
  },
  {
    id: 3,
    name: 'Nolia Paris',
    Description: "Site vitrine mettant en avant l'entreprise ainsi que toute son offre traiteur",
    Category: ['Wordpress', 'Site vitrine'],
    image: imageNP,
  },
  {
    id: 4,
    name: 'Trip Odvisor',
    Description: "Site dans le genre du célèbre Trip Advisor",
    Category: ['PHP', 'Site vitrine'],
    image: imageTO,
  },
];
