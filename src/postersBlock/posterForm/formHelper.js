export const convertSelectedGenres = (data, toObj = true) => {
  if (toObj) {
    return data.map(el => ({ value: el, label: el }));
  } else {
    return data.map(el => el.value);
  }
};
export const convertGenres = data => {
  const def = [
    { value: 'Crime', label: 'Crime' },
    { value: 'Documentary', label: 'Documentary' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Comedy', label: 'Comedy' },
  ];
  let dataNew = data.map(el => ({ value: el, label: el }));
  dataNew = [...def, ...dataNew];
  return dataNew;
};
