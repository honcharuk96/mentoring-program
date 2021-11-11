import {
  GET_ACTIVE_NAV,
  SET_ACTIVE_NAV,
} from './types';

export const getActiveNav = () => ({
  type: GET_ACTIVE_NAV,
});

export const setActiveNav = navELem => ({
  type: SET_ACTIVE_NAV,
  payload: navELem,
});


