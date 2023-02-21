// == Import
import './contact.scss';

// == Composant
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact</h2>
      <div className="contact-wrapper col-10 col-sm-5">
        <div className="coordonees">
          <h3>Nicolas Lefebvre</h3>
          <p><b>Tel : </b><a href="tel:+33686684136">0686684136</a></p>
          <p><a href="mailto:nicolas.ap.lefebvre@gmail.com">nicolas.ap.lefebvre@gmail.com</a></p>
        </div>
        {/* <form action="submit" /> */}
      </div>
    </section>
  );
}

// == Export
export default Contact;
