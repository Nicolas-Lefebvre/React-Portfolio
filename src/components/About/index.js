/* eslint-disable max-len */
// == Import
import './about.scss';

import image from '../../assets/images/développeur-web-busy-working-116658678.jpg';

// == Composant
function About() {
  return (
    <section className="">
      <h2>A propos</h2>
      <div className="about-container col-10 col-sm-8">
        <img src={image} alt="Moi en train de travailler" className="" />
        <p>Développeur fullstack spécialisé sur React JS, Je vous accompagne dans vos projets de création de sites web et d'applications mobiles. Fort de multiples expériences en entreprise mêlant marketing et commerce digital, data et développement web, je saurai vous accompagner tout au long de votre rpojet tout en étatn force de proposition dans ces domaines.
        </p>
      </div>
    </section>
  );
}

// == Export
export default About;
