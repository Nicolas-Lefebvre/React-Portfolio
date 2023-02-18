/* eslint-disable react/prop-types */
/* eslint-disable max-len */
// == Import

// == Composant
function Project({ image, onClick }) {
  return (
    <div className="project-card card" style={{ width: '18rem' }} onClick={onClick}>
      <img src={image} className="card-img-top" alt="..." />
      {/* <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div> */}
    </div>
  );
}

// == Export
export default Project;
