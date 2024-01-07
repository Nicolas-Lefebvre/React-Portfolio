/* eslint-disable react/prop-types */
/* eslint-disable max-len */
// == Import

// Fonction pour supprimer les balises <p></p>
const cleanContent = (htmlContent) => {
  return htmlContent.replace(/<\/?p>/g, '');
};

// == Composant
function ProjectDetail({
  image, name, description, link, setProjectLayout,
}) {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          console.log('Clic sur retour');
          setProjectLayout('all');
        }}
      >Retour
      </button>
      <div
        className="project-detail card"
        // style={{ width: '18rem' }}
      >
        <div className="card-body">
          <h4>{name}</h4>
          <p className="card-text">{cleanContent(description)}</p>
          <a href={link} target="_blank" rel="noreferrer">Voir le site</a>
        </div>
        <img src={image} className="card-img-top" alt="..." />
      </div>
    </>
  );
}

// == Export
export default ProjectDetail;
