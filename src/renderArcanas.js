import { compose, map, values, join } from 'ramda';
import getTemplate from './getArcanaTemplate';
import getRandomArcanas from './getRandomArcanas';
import render from './render';

export default () => {
  const container = document.querySelector('.selection');
  const arcanas = compose(join(''), values, map(getTemplate))(getRandomArcanas());

  render(container, arcanas);
};
