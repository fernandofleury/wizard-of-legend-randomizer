import { compose, map, values, prop, join } from 'ramda';
import getTemplate from './getArcanaTemplate';
import getRandomArcanas from './getRandomArcanas';
import createUrl from './createUrl';
import setUrl from './setUrl';
import sendEvent from './sendEvent';
import render from './render';

export default (initialArcanas) => {
  const container = document.querySelector('.selection');
  const randomArcanas = initialArcanas || getRandomArcanas();
  const arcanasTemplate = compose(join(''), values, map(getTemplate))(randomArcanas);
  const url = compose(createUrl, map(prop('id')))(randomArcanas);

  !initialArcanas && setUrl(url);
  !initialArcanas && sendEvent(url);

  render(container, arcanasTemplate);
};
