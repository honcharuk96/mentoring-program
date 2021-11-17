import { combineReducers } from 'redux';
import postersReducer from './postersReducer';
import navigationReducer from './navigationReducer';
import modalFormReducer from './modalFormReducer';

const rootReducer = combineReducers({
  posters: postersReducer,
  navigation: navigationReducer,
  modalForm: modalFormReducer,
});

export default rootReducer;
