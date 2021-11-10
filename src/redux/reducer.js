import { combineReducers } from 'redux';
import postersReducer from './postersReducer';

const rootReducer = combineReducers({
  posters: postersReducer,
});

export default rootReducer;
