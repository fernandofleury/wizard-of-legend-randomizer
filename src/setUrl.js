import { replace } from 'ramda';
const urlFormat = /\/\d{2}-\d{2}-\d{3}-\d{2}/;

const replaceWithId = (id, path) => replace(urlFormat, id, path);

export default id => {
  const { origin, pathname } = window.location;
  const path = urlFormat.test(pathname) ? replaceWithId(id, pathname) : pathname + id;

  return history.pushState(null, null, path);
}
