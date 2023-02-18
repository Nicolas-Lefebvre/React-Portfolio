/* eslint-disable max-len */
// == Import
import './projets.scss';
import ProjectList from '../../Data/ProjectList';

// == Composant
function Projets() {
  return (
    <section className="projets">

      <h2>Projets</h2>

      <div className="project-container card text-center col-12 col-sm-10 col-lg-8">
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

        <div className="project-container-body card-body">
          {
            ProjectList.map((project) => (

              <div className="project-card card" style={{ width: '18rem' }}>
                <img src={project.image} className="card-img-top" alt="..." />
                {/* <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div> */}
              </div>

            ))
          }
        </div>

      </div>

    </section>
  );
}

// == Export
export default Projets;
