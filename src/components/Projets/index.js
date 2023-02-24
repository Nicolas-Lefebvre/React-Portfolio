/* eslint-disable max-len */
// == Import
import './projets.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import ProjectList from '../../Data/ProjectList';
import Project from './Project';
import ProjectDetail from './ProjectDetail';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  height: '90vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// == Composant
function Projets({
  setProjectLayout,
  projectLayout,
  highlithedProject,
  setHighlithedProject,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                        // setProjectLayout('detailed');
                        handleOpen();
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              style={{
                textAlign: 'center',
              }}
            >
              {highlithedProject.name}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              style={{
                height: '90%',
              }}
            >
              <span>{highlithedProject.description}</span><br />
              <a href="" style={{ margin: 'auto' }}>Voir le site</a>
              <img
                src={highlithedProject.image}
                // className="card-img-top"
                alt="Page d'accueil du site"
                style={{
                  // overflo : 'scroll',
                  marginTop: '2rem',
                  maxHeight: '80%',
                  maxWidth: '90%',
                }}
              />
            </Typography>
          </Box>
        </Modal>

      </div>

    </section>
  );
}

// == Export
export default Projets;
