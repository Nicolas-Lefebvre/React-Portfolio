/* eslint-disable max-len */
// == Import
import './about.scss';

import image from '../../assets/images/handsome-young-man-sitting-near-coffee-while-working.jpg';

// == Composant
function About() {
  return (
    <>
      <div id="about" />

      <section className="about">
        <h2>A propos</h2>
        <div className="about-container col-10 col-sm-8">
          <img src={image} alt="Moi en train de travailler" className="" />
          <p>
            Développeur web passionné, je vous accompagne tout au long de votre projet de création de site web.<br />
            Je travaille en étroite collaboration avec mes clients pour leur fournir des solutions sur mesure, design et intuitives pour les utilisateurs, tout en veillant à ce qu'ils soient optimisés pour les moteurs de recherche.<br />
            Organisé et axé sur les résultats, je dispose d'une solide expérience dans le marketing digital et le commerce électronique, et serai donc en mesure de vous conseiller au delà de la simple conception de votre site.<br />
            Si vous êtes à la recherche d'un développeur web compétent et qualifié, n'hésitez pas à me contacter pour discuter de votre besoin de développement web.
          </p>
        </div>
      </section>

    </>
  );
}

// == Export
export default About;
