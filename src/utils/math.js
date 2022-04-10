export function round(val, nbDecimals) {
  const power =  10 ** nbDecimals;
  return Math.round(val * power) / power;
};