export const convertMinsToHrsMins = mins => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}min`;
};
