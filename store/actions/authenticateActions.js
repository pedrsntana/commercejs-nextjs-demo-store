import commerce from '../../lib/commerce'
import Router from 'next/router';

import { CLEAR_CUSTOMER, SET_CUSTOMER } from './actionTypes';

/**
 * Async get customer
 */
export const setCustomer = () => (dispatch) => {
  // First check is customer is logged in and just return out if they're not
  const isLoggedIn = commerce.customer.isLoggedIn();
  if (!isLoggedIn || isLoggedIn === false) {
    return;
  }
  return commerce.customer.about().then((customer) => {
    dispatch({ type: SET_CUSTOMER, payload: customer.data })
  });
}

export const clearCustomer = () => (dispatch) => {
  dispatch({ type: CLEAR_CUSTOMER });
}
