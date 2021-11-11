import { combineReducers } from 'redux';
import postersReducer from './postersReducer';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
  posters: postersReducer,
  navigation: navigationReducer
});

export default rootReducer;
