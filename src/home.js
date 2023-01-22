export default function drawHome() {
  const content = document.querySelector('.content');
  content.className = 'content home';
  content.innerHTML = '';

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

  // Load everything up
  content.appendChild(hero);
  hero.appendChild(link);
  link.appendChild(button);
  content.appendChild(info);
  info.appendChild(message);
}
