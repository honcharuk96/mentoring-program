import { CLOSE_FORMS, OPEN_MODAL_FORM } from '../actions/types';
import { statusForm } from '../global/constants/global.constants';

const initialState = {
  [statusForm.ADD]: false,
  [statusForm.UPDATE]: false,
  [statusForm.DELETE]: false,
  idForModal: null,
};

export default function modalFormReducer(state = initialState, action) {
  switch (action.type) {
    case CLOSE_FORMS:
      return initialState;
    case OPEN_MODAL_FORM:
      return { ...state, [action.payload.type]: true, idForModal: action.payload.id };
    default:
      return state;
  }
}
