import './styles/reset.css';
import './styles/main.css';

import { compose, map, values, join } from 'ramda';
import getTemplate from './getArcanaTemplate';
import getRandomArcanas from './getRandomArcanas';
import render from './render';

const renderArcanas = compose(join(''), values, map(getTemplate));

(() => {
  const container = document.querySelector('.selection');
  const arcanas = renderArcanas(getRandomArcanas());

  render(container, arcanas);
})()

