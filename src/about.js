import ZoAndRegina from './images/zo-and-regina.jpg';
import Lonnie from './images/lonnie.jpg';

export default function loadAbout() {
  const content = document.querySelector('.content');
  content.className = 'content about';
  content.innerHTML = '';

  const heading = document.createElement('h2');
  heading.textContent = 'ABOUT US';

  const aboutRibtown = document.createElement('div');
  aboutRibtown.className = 'about-ribtown';
  const aboutRibtownHeading = document.createElement('h3');
  aboutRibtownHeading.textContent = 'RIBTOWN BBQ';
  const aboutInfo = document.createElement('div');
  aboutInfo.className = 'about-info';
  const family = new Image();
  family.src = ZoAndRegina;
  family.setAttribute('alt', 'Zo and Regina');
  const aboutRibtownText = document.createElement('p');
  aboutRibtownText.textContent = 'We cook real pit barbecue, slow-smoked over apple and oak wood. Since 2009 our family-owned business has strived to provide the people of Los Angeles with a fresh, homemade, unforgettable pit-smoked experience.';

  const aboutLonnie = document.createElement('div');
  aboutLonnie.className = 'about-lonnie';
  const aboutLonnieHeading = document.createElement('h3');
  aboutLonnieHeading.textContent = 'PITMASTER LONNIE EDWARDS';
  const lonnieInfo = document.createElement('div');
  lonnieInfo.className = 'about-lonnie-info';
  const lonnieImage = new Image();
  lonnieImage.src = Lonnie;
  lonnieImage.setAttribute('alt', 'Pitmaster Lonnie Edwards');
  const aboutLonnieText = document.createElement('p');
  aboutLonnieText.textContent = 'Lonnie has been smoking wood fueled barbecue since the age of 10, when his Auntie Punkin asked for help to finish off five racks of ribs on her tiny backyard grill. This sparked a passion for barbecue that has rapidly evolved over the years, and Lonnie has spent countless hours looking for ways to improve his craft. To this day, Lonnie is proud to answer the question "what type of barbecue do you serve?" with a simple yet complex answer: "real barbecue."';

  content.appendChild(heading);
  content.appendChild(aboutRibtown);
  aboutRibtown.appendChild(aboutRibtownHeading);
  aboutRibtown.appendChild(aboutInfo);
  aboutInfo.appendChild(family);
  aboutInfo.appendChild(aboutRibtownText);
  content.appendChild(aboutLonnie);
  aboutLonnie.appendChild(aboutLonnieHeading);
  aboutLonnie.appendChild(lonnieInfo);
  lonnieInfo.appendChild(lonnieImage);
  lonnieInfo.appendChild(aboutLonnieText);
}
