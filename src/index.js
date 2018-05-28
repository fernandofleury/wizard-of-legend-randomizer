import './styles/reset.css';
import './styles/main.css';

import Clipboard from 'clipboard';
import getInitialUrl from './helpers/getInitialUrl';
import renderSelection from './rendering/renderSelection';

(() => {
  const shuffleButton = document.querySelector('[data-button="shuffle"]');

  renderSelection(getInitialUrl());
  shuffleButton.addEventListener('click', () => renderSelection());

  new Clipboard('[data-button="copy"]', {
    text: () => window.location.href
  });
})()

