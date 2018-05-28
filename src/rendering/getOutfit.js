import getOutfitTemplate from '../templates/getOutfitTemplate';
import getRandomOutfit from '../generation/getRandomOutfit';

export default content => {
  const outfit = content || getRandomOutfit();

  return {
    markup: getOutfitTemplate(outfit),
    id: outfit.id
  };
};
