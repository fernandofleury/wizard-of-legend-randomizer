import { compose, match, head, split, replace } from 'ramda';

const urlFormat = /\/\d{2}-\d{2}-\d{3}-\d{2}/;
const safeReturn = xs => xs.length === 1 ? null : xs;
const safeHead = xs => (xs && xs.length ? head(xs) : '');

export default () =>
  compose(safeReturn, split('-'), replace('/', ''), safeHead, match(urlFormat))(
    window.location.href
  );
