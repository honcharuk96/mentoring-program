import axios from 'axios';
import {
  ADD_POSTER_FAILURE,
  ADD_POSTER_STARTED,
  ADD_POSTER_SUCCESS,
  DELETE_POSTER_FAILURE,
  DELETE_POSTER_STARTED,
  DELETE_POSTER_SUCCESS,
  GET_POSTER_BY_ID_FAILURE,
  GET_POSTER_BY_ID_FOR_POSTER_INFO_SUCCESS,
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
  UPDATE_POSTER_FAILURE,
  UPDATE_POSTER_STARTED,
  UPDATE_POSTER_SUCCESS,
} from './types';

const defaultUrl = 'http://localhost:4000/movies';

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

const getPosterByForPosterInfoSuccess = poster => ({
  type: GET_POSTER_BY_ID_FOR_POSTER_INFO_SUCCESS,
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

const addPosterSuccess = data => ({
  type: ADD_POSTER_SUCCESS,
  payload: data,
});

const addPosterStarted = () => ({
  type: ADD_POSTER_STARTED,
});

const addPosterFailure = error => ({
  type: ADD_POSTER_FAILURE,
  payload: {
    error,
  },
});

const updatePosterSuccess = data => ({
  type: UPDATE_POSTER_SUCCESS,
  payload: data,
});

const updatePosterStarted = () => ({
  type: UPDATE_POSTER_STARTED,
});

const updatePosterFailure = error => ({
  type: UPDATE_POSTER_FAILURE,
  payload: {
    error,
  },
});

const deletePosterSuccess = data => ({
  type: DELETE_POSTER_SUCCESS,
  payload: data,
});

const deletePosterStarted = () => ({
  type: DELETE_POSTER_STARTED,
});

const deletePosterFailure = error => ({
  type: DELETE_POSTER_FAILURE,
  payload: {
    error,
  },
});

export const getPosters = () => dispatch => {
  dispatch(getPostersStarted());
  axios
    .get(defaultUrl)
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
    .get(defaultUrl, { params })
    .then(res => {
      dispatch(getPostersByCategorySuccess(res.data.data));
      dispatch(getPostersByCategoryTotalAmountSuccess(res.data.totalAmount));
    })
    .catch(err => {
      dispatch(getPostersByCategoryFailure(err.message));
    });
};

export const getPosterByID = (posterId, forPosterInfo = false) => dispatch => {
  dispatch(getPosterByIdStarted());
  axios
    .get(`${defaultUrl}/${posterId}`)
    .then(res => {
      forPosterInfo ? dispatch(getPosterByForPosterInfoSuccess(res.data)) : dispatch(getPosterByIdSuccess(res.data));
    })
    .catch(err => {
      dispatch(getPosterByIdFailure(err.message));
    });
};
export const addPoster = data => dispatch => {
  dispatch(addPosterStarted());
  axios
    .post(defaultUrl, data)
    .then(res => {
      console.log('res' + res);
      dispatch(addPosterSuccess(res.data));
    })
    .catch(err => {
      dispatch(addPosterFailure(err.message));
    });
};

export const updatePoster = data => dispatch => {
  dispatch(updatePosterStarted());
  axios
    .put(defaultUrl, data)
    .then(res => {
      dispatch(updatePosterSuccess(res.data));
    })
    .catch(err => {
      dispatch(updatePosterFailure(err.message));
    });
};
export const deletePoster = id => dispatch => {
  dispatch(deletePosterStarted());
  axios
    .delete(`${defaultUrl}/${id}`)
    .then(res => {
      dispatch(deletePosterSuccess(res.data.data));
    })
    .catch(err => {
      dispatch(deletePosterFailure(err.message));
    });
};
