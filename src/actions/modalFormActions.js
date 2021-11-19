import { CLOSE_FORMS, OPEN_MODAL_FORM } from './types';

export const closeForms = () => ({
  type: CLOSE_FORMS,
});
export const openModal = (type, id) => ({
  type: OPEN_MODAL_FORM,
  payload: { type, id },
});
