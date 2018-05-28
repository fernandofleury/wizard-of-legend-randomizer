import { compose, head, concat } from 'ramda';
import arcanas from '../../fixtures/arcanas.json';
import shuffle from '../helpers/shuffle';

const getRandom = compose(head, shuffle);

export default () => {
  const basic = getRandom(arcanas.basic);
  const dash = getRandom(arcanas.dash);
  const signature = getRandom(arcanas.signature);
  let standard = getRandom(arcanas.standard);

  if (standard.name === signature.name) {
    standard = getRandom(arcanas.standard);
  }

  return {
    basic,
    dash,
    standard,
    signature
  };
};
