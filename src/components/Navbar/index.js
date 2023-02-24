// == Import
import './navbar.scss';

// == Composant
function Navbar() {
  return (

    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">NL Dev</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse nav-menu-container" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">A propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// == Export
export default Navbar;
