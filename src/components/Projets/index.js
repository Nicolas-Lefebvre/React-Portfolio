/* eslint-disable max-len */
// == Import
import './projets.scss';

import ProjectList from '../../Data/ProjectList';
import Project from './Project';
import ProjectDetail from './ProjectDetail';

// == Composant
function Projets({
  setProjectLayout,
  projectLayout,
  highlithedProject,
  setHighlithedProject,
}) {
  return (
    <section className="projets">

      <h2>Projets</h2>

      <div className="project-container card text-center col-12 col-sm-10 col-lg-8">
        {/* <div className="card-header">
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
        </div> */}
        {
          projectLayout === 'all'
            ? (
              <div className="project-container-body card-body">
                {
                  ProjectList.map((project, index) => (

                    <Project
                      key={project.id}
                      image={project.image}
                      onClick={() => {
                        console.log('Clic sur projet');
                        setHighlithedProject(ProjectList[index]);
                        setProjectLayout('detailed');
                      }}
                    />

                  ))
                }
              </div>
            )
            : (
              <ProjectDetail
                setProjectLayout={setProjectLayout}
                image={highlithedProject.image}
                name={highlithedProject.name}
                link={highlithedProject.link}
                description={highlithedProject.description}
              />
            )
        }

      </div>

    </section>
  );
}

// == Export
export default Projets;
