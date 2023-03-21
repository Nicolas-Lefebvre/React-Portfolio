// == Import
import './header.scss';
import logo from '../../assets/images/nicolas-lefebvre-developpeur-logo.png';

// == Composant
function Header() {
  return (
    <header className="header">

      <div className="header-wrapper" id="home">
        <div className="title-wrapper">
          <img src={logo} alt="logo Nicolas Lefebvre Développeur Web" />
          <h1>Nicolas Lefebvre</h1>
          <p>Développeur Web</p>

          {/* -------------------------------------BOUTON HEADER-------------------------------- */}
          <div>
            <a className="header-btn" href="#navbar">
              <span className="header-button">
                Voir plus
                <i className="fa fa-arrow-right fa-1x" aria-hidden="true" />
              </span>
            </a>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
        </div>
      </div>
    </header>
  );
}

// == Export
export default Header;
