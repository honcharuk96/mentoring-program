import { SET_ACTIVE_NAV, SET_VARIANT_SORT } from '../actions/types';

const initialState = {
  loading: false,
  variantSort: 'release_date',
  activeNav: 'all',
  error: null,
};

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_NAV:
      return { ...state, activeNav: action.payload };
    case SET_VARIANT_SORT:
      return { ...state, variantSort: action.payload };
    default:
      return state;
  }
}
