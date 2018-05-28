import { join } from 'ramda';
import getArcanas from './getArcanas';
import getRelic from './getRelic';
import getOutfit from './getOutfit';
import render from './render';

export default (initialSelection) => {
  const container = document.querySelector('.selection');
  const markup = join('', [getArcanas(), getRelic(), getOutfit()]);

  render(container, markup);
};
