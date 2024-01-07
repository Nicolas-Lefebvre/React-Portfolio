// Importations
import './projets.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ProjectList from '../../Data/ProjectList';
import Project from './Project';
import ProjectDetail from './ProjectDetail';

// Composant Projets
function Projets({
  setProjectLayout,
  projectLayout,
  highlithedProject,
  setHighlithedProject,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [projectList, setProjectList] = useState([]);

  // Fonction pour récupérer les médias des posts
  const fetchPostMedia = async (mediaId) => {
    try {
      const response = await axios.get(`https://nl-dev.fr/wp-json/wp/v2/media/${mediaId}`);
      return response.data.source_url; // URL de l'image
    } catch (error) {
      console.error('Erreur lors de la récupération du média:', error);
      return null;
    }
  };

  // Fonction pour charger les posts
  const fetchProjects = async () => {

    // Récupération les projets
    axios.get('https://nl-dev.fr/wp-json/wp/v2/posts')

        .then((response) => {
          console.log(response.data);
          setProjectList(response.data);
        })

        .catch((error) => {
          console.log(error);
        })

        .finally(() => { 
          return projectList;
        });
  };

  // Effet pour charger les posts au montage du composant
  useEffect(() => {
    fetchProjects()
  }, []);

  // Gestion de l'ouverture et de la fermeture du modal
  const openModal = () => setIsOpen(true);
  const closeModal = (event) => {
    const modal = document.getElementById('Modal');
    if (event.target === modal) {
      setIsOpen(false);
    }
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('overlayed');
  };

  // Rendu du composant
  return (
    <>
      <div id="portfolio" />
      <section className="projets" id="portfolio">
        <h2>Projets</h2>
        <div className="project-container card text-center col-12 col-sm-10 col-lg-8">
          {
            projectLayout === 'all'
              ? (
                <div className="project-container-body card-body">
                  {
                    projectList.map((project, index) => (
                      <Project
                        key={project.id}
                        image={project.image}
                        onClick={() => {
                          setHighlithedProject(projectList[index]);
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

        {isOpen && (
          <div className="overlay" onClick={closeModal} style={{ width: '100vw', height: '100vh' }}>
            <div className="Modal" id="Modal">
              <div className="Modal-overlay" onClick={closeModal} />
              <div className="Modal-content">
                <h2 className="Modal-title">{highlithedProject.name}</h2>
                <p className="Modal-paragraph">{highlithedProject.description}</p>
                {highlithedProject.link && (
                  <p className="link">
                    <a href={highlithedProject.link} rel="noreferrer" target="_blank">Voir le site</a>
                  </p>
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

// Export du composant
export default Projets;
