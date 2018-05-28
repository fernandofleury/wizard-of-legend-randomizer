import leftPad from 'left-pad';

export default ({ basic, dash, standard, signature, relic, outfit }) =>
  `${leftPad(basic, 2, '0')}-${leftPad(dash, 2, '0')}-${leftPad(
    standard,
    3,
    '0'
  )}-${leftPad(signature, 2, '0')}-${leftPad(relic, 3, '0')}-${leftPad(
    outfit,
    2,
    '0'
  )}`;
