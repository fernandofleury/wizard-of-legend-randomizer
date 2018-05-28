import { curry, pick } from 'ramda';

export default curry((fn, keys) => fn && pick(keys, fn));
