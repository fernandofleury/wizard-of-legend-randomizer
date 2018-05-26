import './styles/reset.css';
import './styles/main.css';

import Clipboard from 'clipboard';
import renderArcanas from './renderArcanas';
import getInitialUrl from './getInitialUrl';
import mapToArcanas from './mapToArcanas';

(() => {
  const initialContent = getInitialUrl();

  const arcanasFromUrl = initialContent ? mapToArcanas(initialContent) : null;
  const shuffleButton = document.querySelector('[data-button="shuffle"]');

  renderArcanas(arcanasFromUrl);
  shuffleButton.addEventListener('click', () => renderArcanas());

  new Clipboard('[data-button="copy"]', {
    text: () => window.location.href
  });
})()

