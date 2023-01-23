import Tips from './images/tips.jpg';
import Pork from './images/pork.jpg';
import Chicken from './images/chicken.jpg';

export default function loadFood() {
  const content = document.querySelector('.content');
  content.className = 'content food';
  content.innerHTML = '';

  const foodHero = document.createElement('div');
  foodHero.className = 'food-hero';

  const foodInfo = document.createElement('div');
  foodInfo.className = 'food-info';

  const infoHeading = document.createElement('p');
  infoHeading.textContent = 'We serve a variety of fresh smoked barbecue. Here is just a small sample of our most popular offerings:';

  const tips = document.createElement('div');
  tips.className = 'food-item';
  const tipsHeading = document.createElement('h3');
  tipsHeading.textContent = 'RIB TIP PLATE';
  const tipsInfo = document.createElement('div');
  tipsInfo.className = 'food-item-info';
  const tipsImage = new Image();
  tipsImage.src = Tips;
  tipsImage.setAttribute('alt', 'Rib-tip plate');
  const tipsText = document.createElement('p');
  tipsText.textContent = 'A crowd favorite, loaded up with a pile of delicious rib-tips, includes two sides and bread.';

  const pork = document.createElement('div');
  pork.className = 'food-item';
  const porkHeading = document.createElement('h3');
  porkHeading.textContent = 'PULLED PORK SANDWICH';
  const porkInfo = document.createElement('div');
  porkInfo.className = 'food-item-info';
  const porkImage = new Image();
  porkImage.src = Pork;
  porkImage.setAttribute('alt', 'Pulled pork sandwich');
  const porkText = document.createElement('p');
  porkText.textContent = 'A mound of tender pulled pork, piled atop a fresh bun and drizzled with our house-made sauce.';

  const chicken = document.createElement('div');
  chicken.className = 'food-item';
  const chickenHeading = document.createElement('h3');
  chickenHeading.textContent = 'CHICKEN PLATE';
  const chickenInfo = document.createElement('div');
  chickenInfo.className = 'food-item-info';
  const chickenImage = new Image();
  chickenImage.src = Chicken;
  chickenImage.setAttribute('alt', 'BBQ chicken plate');
  const chickenText = document.createElement('p');
  chickenText.textContent = 'A mound of tender pulled pork, piled atop a fresh bun and drizzled with our house-made sauce.';

  content.appendChild(foodHero);
  content.appendChild(foodInfo);
  foodInfo.appendChild(infoHeading);
  foodInfo.appendChild(tips);
  tips.appendChild(tipsHeading);
  tips.appendChild(tipsInfo);
  tipsInfo.appendChild(tipsImage);
  tipsInfo.appendChild(tipsText);
  foodInfo.appendChild(pork);
  pork.appendChild(porkHeading);
  pork.appendChild(porkInfo);
  porkInfo.appendChild(porkImage);
  porkInfo.appendChild(porkText);
  foodInfo.appendChild(chicken);
  chicken.appendChild(chickenHeading);
  chicken.appendChild(chickenInfo);
  chickenInfo.appendChild(chickenImage);
  chickenInfo.appendChild(chickenText);
}
