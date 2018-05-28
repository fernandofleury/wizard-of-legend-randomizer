import { find, propEq } from 'ramda';
import arcanas from '../../fixtures/arcanas';
import relics from '../../fixtures/relics';
import outfits from '../../fixtures/outfits';

export default ([basic, dash, standard, signature, relic, outfit]) => ({
  basic: find(propEq('id', Number(basic)), arcanas.basic),
  dash: find(propEq('id', Number(dash)), arcanas.dash),
  standard: find(propEq('id', Number(standard)), arcanas.standard),
  signature: find(propEq('id', Number(signature)), arcanas.signature),
  relic: find(propEq('id', Number(relic)), relics),
  outfit: find(propEq('id', Number(outfit)), outfits)
});
