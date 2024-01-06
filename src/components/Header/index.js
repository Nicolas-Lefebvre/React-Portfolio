// == Import
import './header.scss';
import logo from '../../assets/images/logo-nicolas-lefebvre-nldev.png';

// == Composant
function Header() {
  return (
    <header className="header">

      <div className="header-wrapper" id="home">
        <div className="title-wrapper">
          <img src={logo} alt="logo Nicolas Lefebvre nl-dev creation de sites web" />
          <h1>Nicolas Lefebvre</h1>
          <p>Création de sites web</p>

          {/* -------------------------------------BOUTON HEADER-------------------------------- */}
          <div>
            <a className="header-btn" href="#navbar">
              <span className="header-button">
                découvrir
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
