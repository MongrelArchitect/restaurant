import facebookIcon from './images/facebook.svg';
import instaIcon from './images/instagram.svg';

function drawFooter() {
  const container = document.querySelector('.container');

  const footer = document.createElement('div');
  footer.className = 'footer';

  const footerGrid = document.createElement('div');
  footerGrid.className = 'footer-grid';

  // Address section
  const addressList = document.createElement('ul');
  addressList.className = 'address-list';
  const contactAddress = document.createElement('li');
  contactAddress.textContent = '2125 W. Jefferson Blvd.';
  const contactCity = document.createElement('li');
  contactCity.textContent = 'Los Angeles, CA 90018';

  // Social media links
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

  // Attribution
  const footerAttrib = document.createElement('div');
  footerAttrib.className = 'footer-attrib';
  footerAttrib.innerHTML = 'Designed by <a target="_blank" href="http://www.seanericthomas.com">Sean Eric Thomas</a>';

  // Load it all up
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

export default drawFooter;
