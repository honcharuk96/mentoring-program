import { convertGenres, convertSelectedGenres } from '../../postersBlock/posterForm/formHelper';

export const statusForm = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

export const getDefaultPosterState = ( withId = false) => {
    const defData = {
      title: '',
      vote_average: 0,
      release_date: '',
      poster_path: '',
      runtime: '',
      overview: '',
      genres: convertGenres([]),
      selectedGenres: convertSelectedGenres([]),
    };
    return withId ? {id:'', ...defData} : defData
}

export const convertPosterState = (data, withId = false) => {
    const poster = {
      title: data.title,
      vote_average: +data.vote_average,
      release_date: data.release_date,
      poster_path: data.poster_path,
      runtime: +data.runtime,
      overview: data.overview,
      genres: convertSelectedGenres(data.selectedGenres, false),
    }
    return withId ? {id:data.id, ...poster} : poster
}
