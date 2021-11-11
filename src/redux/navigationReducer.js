import {
  SET_ACTIVE_NAV,
} from '../actions/types';

const initialState = {
  loading: false,
  selectedCategory: 'release_date',
  activeNav: 'all',
  navigationItems:[
    { id: 0, text: 'all' },
    { id: 1, text: 'documentary' },
    { id: 2, text: 'comedy' },
    { id: 3, text: 'horror' },
    { id: 4, text: 'crime' },
  ],
  error: null,

};

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_NAV:
      return { ...state,  activeNav: action.payload };
    default:
      return state;
  }
}
