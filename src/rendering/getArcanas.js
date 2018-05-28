import { compose, map, values, join, prop } from 'ramda';
import getArcanaTemplate from '../templates/getArcanaTemplate';
import getRandomArcanas from '../generation/getRandomArcanas';

export default content => {
  const arcanas = content || getRandomArcanas();

  return {
    ids: map(prop('id'), arcanas),
    markup: compose(join(''), values, map(getArcanaTemplate))(arcanas)
  };
};
