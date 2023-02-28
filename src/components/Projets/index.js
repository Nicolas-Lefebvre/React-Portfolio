/* eslint-disable max-len */
// == Import
import './projets.scss';

import { useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  const closeModal = (event) => {
    const modal = document.getElementById('Modal');
    if (event.target === modal) {
      setIsOpen(false);
    }
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('overlayed');
  };

  return (
    <>
      <div id="portfolio" />
      <section className="projets" id="portfolio">

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
                          // setProjectLayout('detailed');
                          openModal();
                          const navbar = document.getElementById('navbar');
                          navbar.classList.add('overlayed');
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

        {/* ---------------------------------------- PROJECT MODAL ------------------------------------------- */}
        {isOpen && (
        <div className="overlay" onClick={closeModal} style={{ width: '100vw', height: '100vh' }}>
          <div className="Modal" id="Modal">
            <div className="Modal-overlay" onClick={closeModal} />
            <div className="Modal-content">
              <h2 className="Modal-title">{highlithedProject.name}</h2>
              <p className="Modal-paragraph">{highlithedProject.description}</p>
              { highlithedProject.link && (
              <p className="link"><a href={highlithedProject.link} rel="noreferrer" target="_blank">Voir le site</a></p>
              )}
              <img className="Modal-image" src={highlithedProject.image} alt={highlithedProject.name} />
            </div>
          </div>
        </div>
        )}

      </section>
    </>

  );
}

// == Export
export default Projets;
