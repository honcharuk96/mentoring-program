import API from '../global/API';
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

export const getPosters = () => async dispatch => {
  dispatch(getPostersStarted());
  try {
    const result = await API.get('/');
    dispatch(getPostersSuccess(result.data.data));
    dispatch(getPostersTotalAmountSuccess(result.data.totalAmount));
  } catch (err) {
    dispatch(getPostersFailure(err.message));
  }
};

export const getPostersByActiveNavWithSort = () => async (dispatch, getState) => {
  const { navigation } = getState();

  let params = { sortBy: navigation.variantSort, sortOrder: 'desc' };
  if (navigation.activeNav !== 'all') {
    params = { ...params, search: navigation.activeNav, searchBy: 'genres' };
  }
  dispatch(getPostersByCategoryStarted());
  try {
    const result = await API.get('/', { params });
    dispatch(getPostersByCategorySuccess(result.data.data));
    dispatch(getPostersByCategoryTotalAmountSuccess(result.data.totalAmount));
  } catch (err) {
    dispatch(getPostersByCategoryFailure(err.message));
  }
};

export const getPosterByID = (posterId, forPosterInfo = false) => async dispatch => {
  dispatch(getPosterByIdStarted());
  try {
    const { data } = await API.get(`/${posterId}`);
    forPosterInfo ? dispatch(getPosterByForPosterInfoSuccess(data)) : dispatch(getPosterByIdSuccess(data));
  } catch (err) {
    dispatch(getPosterByIdFailure(err.message));
  }
};

export const addPoster = posterData => async dispatch => {
  dispatch(addPosterStarted());
  try {
    const { data } = await API.post('/', posterData);
    dispatch(addPosterSuccess(data));
  } catch (err) {
    dispatch(addPosterFailure(err.message));
  }
};

export const updatePoster = posterData => async dispatch => {
  dispatch(updatePosterStarted());
  try {
    const { data } = await API.put('/', posterData);
    dispatch(updatePosterSuccess(data));
  } catch (err) {
    dispatch(updatePosterFailure(err.message));
  }
};

export const deletePoster = id => async dispatch => {
  dispatch(deletePosterStarted());
  try {
    const { data } = await API.delete(`/${id}`);
    dispatch(deletePosterSuccess(data));
  } catch (err) {
    dispatch(deletePosterFailure(err.message));
  }
};
