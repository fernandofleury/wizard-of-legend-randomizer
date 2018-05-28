import { compose, map, values, join } from 'ramda';
import getArcanaTemplate from '../templates/getArcanaTemplate';
import getRandomArcanas from '../generation/getRandomArcanas';

export default () =>
  compose(join(''), values, map(getArcanaTemplate))(getRandomArcanas());
