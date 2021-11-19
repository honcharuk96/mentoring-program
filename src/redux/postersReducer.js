import {
  GET_POSTERS_STARTED,
  GET_POSTERS_SUCCESS,
  GET_POSTERS_FAILURE,
  GET_POSTERS_TOTAL_AMOUNT,
  SET_SELECTED_POSTER,
  GET_POSTERS_BY_CATEGORY_SUCCESS,
  GET_POSTERS_BY_CATEGORY_STARTED,
  GET_POSTERS_BY_CATEGORY_FAILURE,
  GET_POSTERS_BY_CATEGORY_TOTAL_AMOUNT,
  GET_POSTER_BY_ID_SUCCESS,
  GET_POSTER_BY_ID_STARTED,
  GET_POSTER_BY_ID_FAILURE,
  GET_POSTER_BY_ID_FOR_POSTER_INFO_SUCCESS,
} from '../actions/types';

const initialState = {
  loading: false,
  data: [],
  numberOfPosters: 0,
  error: null,
  selectedPoster: null,
  posterDataById: null,
  posterDataForPosterInfo: null,
};

export default function postersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTERS_STARTED:
      return { ...state, loading: true };
    case GET_POSTERS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case GET_POSTERS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case GET_POSTERS_BY_CATEGORY_STARTED:
      return { ...state, loading: true };
    case GET_POSTERS_BY_CATEGORY_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case GET_POSTERS_BY_CATEGORY_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case GET_POSTER_BY_ID_STARTED:
      return { ...state, loading: true };
    case GET_POSTER_BY_ID_SUCCESS:
      return { ...state, loading: false, error: null, posterDataById: action.payload };
    case GET_POSTER_BY_ID_FOR_POSTER_INFO_SUCCESS:
      return { ...state, loading: false, error: null, posterDataForPosterInfo: action.payload };
    case GET_POSTER_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case GET_POSTERS_TOTAL_AMOUNT:
      return { ...state, numberOfPosters: action.payload };
    case GET_POSTERS_BY_CATEGORY_TOTAL_AMOUNT:
      return { ...state, numberOfPosters: action.payload };

    case SET_SELECTED_POSTER:
      return { ...state, selectedPoster: action.payload };
    default:
      return state;
  }
}
