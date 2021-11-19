import { GET_ACTIVE_NAV, SET_ACTIVE_NAV, SET_VARIANT_SORT } from './types';

export const getActiveNav = () => ({
  type: GET_ACTIVE_NAV,
});

export const setActiveNav = navELem => ({
  type: SET_ACTIVE_NAV,
  payload: navELem,
});

export const setVariantSort = variant => ({
  type: SET_VARIANT_SORT,
  payload: variant,
});
