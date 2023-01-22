function drawHeader() {
  const container = document.querySelector('.container');

  const header = document.createElement('div');
  header.className = 'header';

  // Logo
  const logo = document.createElement('div');
  logo.className = 'logo';
  const h1 = document.createElement('h1');
  h1.textContent = 'Ribtown BBQ';

  // Navigation section
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

  // Load it all up
  header.appendChild(logo);
  logo.appendChild(h1);
  header.appendChild(nav);
  nav.appendChild(home);
  nav.appendChild(about);
  nav.appendChild(food);
  nav.appendChild(contact);

  container.appendChild(header);
}

export default drawHeader;
