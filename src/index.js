import './styles/reset.css';
import './styles/style.css';

import drawHeader from './header';
import drawHome from './home';
import drawFooter from './footer';

function drawPage() {
  // Set up the whole page
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.className = 'container';
  body.appendChild(container);
  drawHeader();
  const content = document.createElement('div');
  content.className = 'content';
  container.appendChild(content);
  drawHome();
  drawFooter();
}

drawPage();
