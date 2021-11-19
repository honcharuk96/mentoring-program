import * as Yup from 'yup';

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
  return getUniqueListBy([...def, ...dataNew], 'value');
};
function getUniqueListBy(arr, key) {
  return [...new Map(arr.map(item => [item[key], item])).values()];
}

export const FormValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  poster_path: Yup.string()
    .url('https://.*')
    .required('Required'),
  overview: Yup.string()
    .min(0, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
  runtime: Yup.string()
    .min(0, 'Too Short!')
    .required('Required'),
  release_date: Yup.string().required('Required'),
  vote_average: Yup.number()
    .min(0, 'Too Short!')
    .max(10, 'Too Long!'),
});
