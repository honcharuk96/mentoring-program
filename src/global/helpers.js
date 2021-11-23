export const convertMinsToHrsMins = mins => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}min`;
};

export const pushQueryForSearch = (paramsData, name, value) => {
  let searchParams = new URLSearchParams(paramsData);
  if (!searchParams.has(name)) {
    searchParams.append(name, value);
  } else {
    searchParams.set(name, value);
  }
  return searchParams.toString();
};
