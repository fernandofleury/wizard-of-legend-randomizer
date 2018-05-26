import { replace } from 'ramda';
const urlFormat = /\/\d{2}-\d{2}-\d{3}-\d{2}/;

const replaceWithId = (id, path) => path.replace(urlFormat, `/${id}`);

export default id => {
  const { pathname } = window.location;
  const path = urlFormat.test(pathname) ? replaceWithId(id, pathname) : pathname + id;

  return history.pushState(null, null, path);
}
