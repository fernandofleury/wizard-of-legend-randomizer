import { compose, head, concat } from 'ramda';
import outfits from '../../fixtures/outfits.json';
import shuffle from '../helpers/shuffle';

export default () => compose(head, shuffle)(outfits);
