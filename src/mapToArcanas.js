import { find, propEq } from 'ramda';
import arcanas from '../fixtures/arcanas';

export default ([basic, dash, standard, signature]) => ({
  basic: find(propEq('id', Number(basic)), arcanas.basic),
  dash: find(propEq('id', Number(dash)), arcanas.dash),
  standard: find(propEq('id', Number(standard)), arcanas.standard),
  signature: find(propEq('id', Number(signature)), arcanas.signature),
});
