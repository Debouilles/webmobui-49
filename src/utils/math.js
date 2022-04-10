export function round(val, decimalPlaces = 2) {
  const power =  10 ** decimalPlaces;
  return Math.round(val * power) / power;
};
