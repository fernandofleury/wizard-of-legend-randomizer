import { compose, head, concat } from 'ramda';
import relics from '../../fixtures/relics.json';
import shuffle from '../helpers/shuffle';

export default () => compose(head, shuffle)(relics);
