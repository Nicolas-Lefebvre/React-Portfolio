// Importations des ressources nécessaires
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
  const [projects, setProjects] = useState([]); // Renommé de 'posts' en 'projects'

  // Fonction pour récupérer les médias associés à un projet
  const fetchProjectMedia = async (mediaId) => {
    try {
      const response = await axios.get(`https://nl-dev.fr/wp-json/wp/v2/media/${mediaId}`);
      // console.log(response.data);
      return response.data.source_url; // Récupère l'URL de l'image
    } catch (error) {
      console.error('Erreur lors de la récupération du média:', error);
      return null;
    }
  };

  // Fonction pour charger les projets depuis l'API
  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://nl-dev.fr/wp-json/wp/v2/posts');
      const fetchedProjects = response.data;
  
      // Récupère les images pour chaque projet
      const projectsWithMedia = await Promise.all(fetchedProjects.map(async project => {
        const mediaUrl = project.featured_media ? await fetchProjectMedia(project.featured_media) : null;
        // console.log({ ...project, mediaUrl});
        // Insère l'url des images dans les projets
        return { ...project, mediaUrl };
      }));
      console.log(projectsWithMedia);
      return projectsWithMedia;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
      return [];
    }
  };

  // Effet pour charger les projets au montage du composant
  useEffect(() => {
    const loadProjects = async () => {
      const fetchedProjects = await fetchProjects();
      setProjects(fetchedProjects); // Met à jour l'état avec les projets chargés
    };

    loadProjects();
  }, []);

  // Gère l'ouverture et la fermeture du modal
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
                    projects.map((project, index) => (
                      <Project
                        key={project.id}
                        image={project.mediaUrl}
                        onClick={() => {
                          setHighlithedProject(projects[index]);
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
                  image={highlithedProject.mediaUrl}
                  name={highlithedProject.title.rendered}
                  link={highlithedProject.lien_site}
                  description={highlithedProject.content.rendered}
                />
              )
          }
        </div>

        {isOpen && (
          <div className="overlay" onClick={closeModal} style={{ width: '100vw', height: '100vh' }}>
            <div className="Modal" id="Modal">
              <div className="Modal-overlay" onClick={closeModal} />
              <div className="Modal-content">
                <h2 className="Modal-title">{highlithedProject.title.rendered}</h2>
                <p className="Modal-paragraph">{highlithedProject.content.rendered}</p>
                {highlithedProject.link && (
                  <p className="link">
                    <a href={highlithedProject.lien_site} rel="noreferrer" target="_blank">Voir le site</a>
                  </p>
                )}
                <img className="Modal-image" src={highlithedProject.mediaUrl} alt={highlithedProject.title.renderered} />
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
