import { compose } from 'ramda';
import getRelicTemplate from '../templates/getRelicTemplate';
import getRandomRelic from '../generation/getRandomRelic';

export default () => compose(getRelicTemplate, getRandomRelic)();
