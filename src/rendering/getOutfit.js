import { compose } from 'ramda';
import getOutfitTemplate from '../templates/getOutfitTemplate';
import getRandomOutfit from '../generation/getRandomOutfit';

export default () => compose(getOutfitTemplate, getRandomOutfit)();
