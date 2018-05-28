import { compose, match, head, split, replace } from 'ramda';
import { urlFormat } from '../constants';

const safeReturn = xs => (xs.length === 1 ? null : xs);
const safeHead = xs => (xs && xs.length ? head(xs) : '');

export default () =>
  compose(safeReturn, split('-'), replace('/', ''), safeHead, match(urlFormat))(
    window.location.href
  );
