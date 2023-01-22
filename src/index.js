import './styles/reset.css';
import './styles/style.css';

import drawHeader from './header';
import drawHome from './home';
import drawFooter from './footer';

function drawContainer() {
  // Set up the whole page
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.className = 'container';
  body.appendChild(container);
}

drawContainer();
drawHeader();
drawHome();
drawFooter();
