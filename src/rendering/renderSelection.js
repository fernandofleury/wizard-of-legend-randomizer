import { join } from 'ramda';
import getSelection from './getSelection';
import createUrl from '../helpers/createUrl';
import setUrl from '../helpers/setUrl';
import render from './render';

export default fromUrl => {
  const container = document.querySelector('.selection');

  const { arcanas, relic, outfit } = getSelection(fromUrl);

  const url = createUrl({
    ...arcanas.ids,
    relic: relic.id,
    outfit: outfit.id
  });

  const markup = join('', [arcanas.markup, relic.markup, outfit.markup]);

  !fromUrl && setUrl(url);
  render(container, markup);
};
