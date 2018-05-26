import './styles/reset.css';
import './styles/main.css';

import renderArcanas from './renderArcanas';

(() => {
  const shuffleButton = document.querySelector('[data-button="shuffle"]');

  shuffleButton.addEventListener('click', renderArcanas);

  renderArcanas();
})()

