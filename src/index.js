import './styles/reset.css';
import './styles/style.css';
import facebookIcon from './images/facebook.svg';
import instaIcon from './images/instagram.svg';

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

  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', 'https://ribtown-bar-b-que.square.site/');
  const button = document.createElement('button');
  button.textContent = 'Order Here';

  // Current info section
  const info = document.createElement('div');
  info.className = 'info';
  const message = document.createElement('p');
  message.innerHTML = 'We are now taking pre-orders for Fridays and Saturdays. If you do not pre-order, feel free to arrive starting at 11:30AM as we will be accepting walk ups until we are sold out. <strong>Please make sure to select a date and time in the "Checkout" section when pre-ordering to avoid any delays and parking lot congestion.</strong> Thank you for all of the continued support!';

  // Footer section
  const footer = document.createElement('div');
  footer.className = 'footer';

  const footerGrid = document.createElement('div');
  footerGrid.className = 'footer-grid';

  const addressList = document.createElement('ul');
  addressList.className = 'address-list';
  const contactAddress = document.createElement('li');
  contactAddress.textContent = '2125 W. Jefferson Blvd.';
  const contactCity = document.createElement('li');
  contactCity.textContent = 'Los Angeles, CA 90018';

  const socialList = document.createElement('ul');
  socialList.className = 'social-list';
  const contactFacebook = document.createElement('li');
  const facebookLink = document.createElement('a');
  facebookLink.setAttribute('target', '_blank');
  facebookLink.setAttribute(
    'href',
    'https://www.facebook.com/ribtownbarbecue/',
  );
  const facebookImage = document.createElement('img');
  facebookImage.setAttribute('src', facebookIcon);
  const contactInsta = document.createElement('li');
  const instaLink = document.createElement('a');
  instaLink.setAttribute('target', '_blank');
  instaLink.setAttribute('href', 'https://www.instagram.com/ribtownbbq');
  const instaImage = document.createElement('img');
  instaImage.setAttribute('src', instaIcon);

  const footerAttrib = document.createElement('div');
  footerAttrib.className = 'footer-attrib';
  footerAttrib.innerHTML = 'Designed by <a target="_blank" href="http://www.seanericthomas.com">Sean Eric Thomas</a>';

  // Load everything up
  body.appendChild(container);
  container.appendChild(header);
  header.appendChild(logo);
  logo.appendChild(h1);
  header.appendChild(nav);
  nav.appendChild(home);
  nav.appendChild(about);
  nav.appendChild(food);
  nav.appendChild(contact);
  container.appendChild(hero);
  hero.appendChild(link);
  link.appendChild(button);
  container.appendChild(info);
  info.appendChild(message);
  container.appendChild(footer);
  footer.appendChild(footerGrid);
  footerGrid.appendChild(addressList);
  addressList.appendChild(contactAddress);
  addressList.appendChild(contactCity);
  footerGrid.appendChild(socialList);
  socialList.appendChild(contactFacebook);
  contactFacebook.appendChild(facebookLink);
  facebookLink.appendChild(facebookImage);
  socialList.appendChild(contactInsta);
  contactInsta.appendChild(instaLink);
  instaLink.appendChild(instaImage);
  footerGrid.appendChild(footerAttrib);
}

drawLayout();
