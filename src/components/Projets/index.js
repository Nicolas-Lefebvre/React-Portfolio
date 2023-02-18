// == Import
import './projets.scss';

// == Composant
function Projets() {
  return (
    <section className="projets">

      <h2>Projets</h2>

      <div className="card text-center col-8">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">Tous</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Wordpress</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">React</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </section>
  );
}

// == Export
export default Projets;
