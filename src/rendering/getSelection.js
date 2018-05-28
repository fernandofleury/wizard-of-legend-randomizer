import { prop } from 'ramda';
import getArcanas from './getArcanas';
import getRelic from './getRelic';
import getOutfit from './getOutfit';
import mapToContent from '../helpers/mapToContent';
import fromContent from '../helpers/fromContent';

const ARCANAS = ['basic', 'dash', 'standard', 'signature'];
const RELIC = ['relic'];
const OUTFIT = ['outfit'];

export default fromUrl => {
  const content = fromUrl && mapToContent(fromUrl);
  const mappedFrom = fromContent(content);

  const initialArcanas = mappedFrom(ARCANAS);
  const initialRelic = prop('relic', mappedFrom(RELIC));
  const initialOutfit = prop('outfit', mappedFrom(OUTFIT));

  return {
    arcanas: getArcanas(initialArcanas),
    relic: getRelic(initialRelic),
    outfit: getOutfit(initialOutfit)
  };
};
