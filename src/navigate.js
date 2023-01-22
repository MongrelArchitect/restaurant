import loadHome from './home';
import loadAbout from './about';
import loadFood from './food';
import loadContact from './contact';

export default function navigate() {
  const home = document.querySelector('.home');
  const about = document.querySelector('.about');
  const food = document.querySelector('.food');
  const contact = document.querySelector('.contact');

  home.addEventListener('click', loadHome);
  about.addEventListener('click', loadAbout);
  food.addEventListener('click', loadFood);
  contact.addEventListener('click', loadContact);
}
