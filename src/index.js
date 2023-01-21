import './styles/reset.css';
import './styles/style.css';

function drawLayout() {
  const body = document.querySelector('body');

  // Whole page grid container
  const container = document.createElement('div');
  container.className = 'container';

  // Header section
  const header = document.createElement('div');
  header.className = 'header';

  const logo = document.createElement('div');
  logo.className = 'logo';

  const h1 = document.createElement('h1');
  h1.textContent = 'Ribtown BBQ';

  const nav = document.createElement('ul');
  nav.className = 'nav';

  const home = document.createElement('li');
  home.className = 'home';
  home.textContent = 'HOME';

  const about = document.createElement('li');
  about.className = 'about';
  about.textContent = 'ABOUT';

  const food = document.createElement('li');
  food.className = 'food';
  food.textContent = 'FOOD';

  const contact = document.createElement('li');
  contact.className = 'contact';
  contact.textContent = 'CONTACT';

  // Hero image section
  const hero = document.createElement('div');
  hero.className = 'hero';

  // Current info section
  const info = document.createElement('div');
  info.className = 'info';

  // Footer section
  const footer = document.createElement('div');
  footer.className = 'footer';

  // Load everything up
  container.appendChild(header);
  header.appendChild(logo);
  logo.appendChild(h1);
  header.appendChild(nav);
  nav.appendChild(home);
  nav.appendChild(about);
  nav.appendChild(food);
  nav.appendChild(contact);
  container.appendChild(hero);
  container.appendChild(info);
  container.appendChild(footer);
  body.appendChild(container);
}

drawLayout();
