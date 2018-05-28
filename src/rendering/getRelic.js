import getRelicTemplate from '../templates/getRelicTemplate';
import getRandomRelic from '../generation/getRandomRelic';

export default content => {
  const relic = content || getRandomRelic();

  return {
    markup: getRelicTemplate(relic),
    id: relic.id
  };
};
