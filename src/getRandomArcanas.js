import { compose, head, concat } from 'ramda';
import arcanas from '../fixtures/arcanas.json';
import shuffle from './shuffle';

const getRandom = compose(head, shuffle);

export default () => ({
  basic: getRandom(arcanas.basic),
  dash: getRandom(arcanas.dash),
  standard: getRandom(arcanas.standard),
  signature: getRandom(arcanas.signature)
});
