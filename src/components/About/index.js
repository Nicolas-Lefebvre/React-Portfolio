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
          <p className="col-12 col-lg-10">
            Développeur web passionné, je vous accompagne tout au long de votre projet de création de site web.
          </p>
          <p className="col-12 col-lg-10">
            Je travaille en étroite collaboration avec mes clients pour leur fournir des solutions sur mesure, design, intuitives, et optimisées pour les moteurs de recherche.
          </p>
          <p className="col-12 col-lg-10">
            Organisé et axé sur les résultats, je dispose également d'une solide expérience dans le marketing digital et le commerce électronique, et serai donc en mesure de vous conseiller au delà de la simple conception de votre site.<br />
          </p>
          <p className="col-12 col-lg-10">
            Si vous êtes à la recherche d'un développeur web compétent et à l'écoute, n'hésitez pas à me contacter pour discuter de votre projet.
          </p>
        </div>
      </section>

    </>
  );
}

// == Export
export default About;
