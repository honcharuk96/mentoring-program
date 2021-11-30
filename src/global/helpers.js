export const convertMinsToHrsMins = mins => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}min`;
};

export const pushQueryForSearch = (paramsData, name, value) => {
  const searchParams = new URLSearchParams(paramsData);
  if (!searchParams.has(name)) {
    searchParams.append(name, value);
  } else {
    searchParams.set(name, value);
  }
  return searchParams.toString();
};

export const findQueryByName = (paramsData, name) => {
  const searchParams = new URLSearchParams(paramsData);
  return searchParams.get(name);
};

export const parseFromUrl = url => {
  const searchURL = '/search';
  const data = url.replace(`${searchURL}/`, '');
  return data === searchURL ? '' : data;
};
