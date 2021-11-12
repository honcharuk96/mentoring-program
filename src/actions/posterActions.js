import axios from 'axios';
import {
  GET_POSTER_BY_ID_FAILURE,
  GET_POSTER_BY_ID_STARTED,
  GET_POSTER_BY_ID_SUCCESS,
  GET_POSTERS_BY_CATEGORY_FAILURE,
  GET_POSTERS_BY_CATEGORY_STARTED,
  GET_POSTERS_BY_CATEGORY_SUCCESS,
  GET_POSTERS_BY_CATEGORY_TOTAL_AMOUNT,
  GET_POSTERS_FAILURE,
  GET_POSTERS_STARTED,
  GET_POSTERS_SUCCESS,
  GET_POSTERS_TOTAL_AMOUNT,
  SET_SELECTED_POSTER,
} from './types';

export const setSelectedPoster = id => ({
  type: SET_SELECTED_POSTER,
  payload: id,
});

const getPostersTotalAmountSuccess = totalAmount => ({
  type: GET_POSTERS_TOTAL_AMOUNT,
  payload: totalAmount,
});

const getPostersSuccess = listOfPosters => ({
  type: GET_POSTERS_SUCCESS,
  payload: listOfPosters,
});

const getPostersStarted = () => ({
  type: GET_POSTERS_STARTED,
});

const getPostersFailure = error => ({
  type: GET_POSTERS_FAILURE,
  payload: {
    error,
  },
});

const getPosterByIdSuccess = poster => ({
  type: GET_POSTER_BY_ID_SUCCESS,
  payload: { ...poster },
});

const getPosterByIdStarted = () => ({
  type: GET_POSTER_BY_ID_STARTED,
});

const getPosterByIdFailure = error => ({
  type: GET_POSTER_BY_ID_FAILURE,
  payload: {
    error,
  },
});

const getPostersByCategoryTotalAmountSuccess = totalAmount => ({
  type: GET_POSTERS_BY_CATEGORY_TOTAL_AMOUNT,
  payload: totalAmount,
});
const getPostersByCategorySuccess = listOfPosters => ({
  type: GET_POSTERS_BY_CATEGORY_SUCCESS,
  payload: listOfPosters,
});

const getPostersByCategoryStarted = () => ({
  type: GET_POSTERS_BY_CATEGORY_STARTED,
});

const getPostersByCategoryFailure = error => ({
  type: GET_POSTERS_BY_CATEGORY_FAILURE,
  payload: {
    error,
  },
});

export const getPosters = () => dispatch => {
  dispatch(getPostersStarted());
  axios
    .get('http://localhost:4000/movies')
    .then(res => {
      dispatch(getPostersSuccess(res.data.data));
      dispatch(getPostersTotalAmountSuccess(res.data.totalAmount));
    })
    .catch(err => {
      dispatch(getPostersFailure(err.message));
    });
};

export const getPostersByActiveNavWithSort = () => (dispatch, getState) => {
  const { navigation } = getState();

  let params = { sortBy: navigation.variantSort, sortOrder: 'desc' };
  if (navigation.activeNav !== 'all') {
    params = { ...params, search: navigation.activeNav, searchBy: 'genres' };
  }
  dispatch(getPostersByCategoryStarted());
  axios
    .get('http://localhost:4000/movies', { params })
    .then(res => {
      dispatch(getPostersByCategorySuccess(res.data.data));
      dispatch(getPostersByCategoryTotalAmountSuccess(res.data.totalAmount));
    })
    .catch(err => {
      dispatch(getPostersByCategoryFailure(err.message));
    });
};

export const getPosterByID = posterId => dispatch => {
  dispatch(getPosterByIdStarted());
  axios
    .get(`http://localhost:4000/movies/${posterId}`)
    .then(res => {
      dispatch(getPosterByIdSuccess(res.data));
    })
    .catch(err => {
      dispatch(getPosterByIdFailure(err.message));
    });
};
