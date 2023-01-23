export default function loadContact() {
  const content = document.querySelector('.content');
  content.className = 'content contact';
  content.innerHTML = '';

  const contactHero = document.createElement('div');
  contactHero.className = 'contact-hero';

  const contactInfo = document.createElement('div');
  contactInfo.className = 'contact-info';

  const contactHeading = document.createElement('h3');
  contactHeading.textContent = 'CONTACT US';

  const phoneSection = document.createElement('p');
  phoneSection.innerHTML = 'Call:<br>424-354-3612';

  const addressSection = document.createElement('p');
  addressSection.innerHTML = 'Address:<br>2125 W. Jefferson Blvd<br>Los Angeles, CA 90018';

  content.appendChild(contactHero);
  content.appendChild(contactInfo);
  contactInfo.appendChild(contactHeading);
  contactInfo.appendChild(phoneSection);
  contactInfo.appendChild(addressSection);
}
