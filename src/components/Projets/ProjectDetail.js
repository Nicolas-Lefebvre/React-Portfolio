/* eslint-disable react/prop-types */
/* eslint-disable max-len */
// == Import

// == Composant
function ProjectDetail({
  image, name, description, setProjectLayout,
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
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4>{name}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
}

// == Export
export default ProjectDetail;
