// == Import
import './contact.scss';

// == Composant
function Contact() {
  return (
    <>
      <div id="contact" />
      <section className="contact-section">
        <h2>Contact</h2>
        <div className="contact-wrapper col-10 col-sm-5">
          <div className="coordonees">
            <h3>Nicolas Lefebvre</h3>
            <p><a href="tel:+33686684136" style={{ textDecoration: 'none' }}>06 86 68 41 36</a></p>
            <p><a href="mailto:nicolas.ap.lefebvre@gmail.com">nicolas.ap.lefebvre@gmail.com</a></p>
          </div>
          {/* <form action="submit" /> */}
        </div>
      </section>
    </>
  );
}

// == Export
export default Contact;
