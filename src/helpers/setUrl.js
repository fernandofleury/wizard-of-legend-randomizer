import { replace } from 'ramda';
import { urlFormat } from '../constants';

const replaceWithId = (id, path) => path.replace(urlFormat, `/${id}`);

export default id => {
  const { pathname } = window.location;
  const path = urlFormat.test(pathname) ? replaceWithId(id, pathname) : pathname + id;

  return history.pushState(null, null, path);
}
