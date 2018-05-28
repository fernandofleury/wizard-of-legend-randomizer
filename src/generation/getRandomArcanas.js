import { compose, head, concat, reject, propEq } from 'ramda';
import arcanas from '../../fixtures/arcanas.json';
import shuffle from '../helpers/shuffle';

const getRandom = compose(head, shuffle);
const rejectByName = (name, fn) => reject(propEq('name', name), fn);

export default () => {
  const basic = getRandom(arcanas.basic);
  const dash = getRandom(arcanas.dash);
  const signature = getRandom(arcanas.signature);
  const standard = getRandom(rejectByName(signature.name, arcanas.standard));

  return {
    basic,
    dash,
    standard,
    signature
  };
};
