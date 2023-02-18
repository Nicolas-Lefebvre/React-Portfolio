// == Import
import './styles.scss';

import { useEffect, useState } from 'react';

import Header from '../Header';
import Navbar from '../Navbar';
import Projets from '../Projets';

// import ProjectList from '../../Data/ProjectList';

// == Composant
function App() {
  const [projectLayout, setProjectLayout] = useState('all');
  const [highlithedProject, setHighlithedProject] = useState([]);

  // ------------------ECOUTEUR SUR LE SCROLL POUR RENDRE LA NAVBAR STICKY--------------------------
  useEffect(() => {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const navbar = document.getElementById('navbar');

    // eslint-disable-next-line no-unused-vars
    const onScroll = (event) => {
      // console.info('scrolling', event);
      if (window.pageYOffset < vh) {
        navbar.classList.remove('sticky-top-navbar');
        // console.log('PAS STICKY !');
      }
      else {
        navbar.classList.add('sticky-top-navbar');
        // console.log('STICKY !');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  // -----------------------------------------------------------------------------------------------

  return (
    <div
      className="app"
      // onScroll={handleScroll}
    >
      <Header />
      <Navbar />
      <Projets
        projectLayout={projectLayout}
        setProjectLayout={setProjectLayout}
        highlithedProject={highlithedProject}
        setHighlithedProject={setHighlithedProject}
      />
      <div>Projets</div>
      <div>Presentation / contact</div>
      <h1>Composant : App</h1>
    </div>
  );
}

// == Export
export default App;
