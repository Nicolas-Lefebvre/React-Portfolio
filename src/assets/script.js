const navbar = document.getElementById('navbar');

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

// console.log(vh);
// console.log(event);

console.log(navbar.getBoundingClientRect());

document.addEventListener(
  'scroll',
  () => {
    // handle scroll event
    // console.log('scroll');
    // console.log(window.pageYOffset);

    if (window.pageYOffset < vh) {
      navbar.classList.remove('sticky-top-navbar');

      // console.log('PAS STICKY !');
    }
    else {
      navbar.classList.add('sticky-top-navbar');
      // console.log('STICKY !');
    }
  },
);

const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');

console.log(navLinks);
console.log(menuToggle);

function handleClickOnNavbar() {
  console.log('Clique sur Navbar');
  // if (event.target == navLinks) {
  menuToggle.classList.remove('show');

  // }
}

// eslint-disable-next-line no-restricted-syntax
for (const navLink of navLinks) {
  navLink.addEventListener('click', handleClickOnNavbar);
}
