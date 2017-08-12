import * as APIUtil from '../util/api_util';

export const RECEIVE_CART = 'RECEIVE_CART';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_CART = 'CLEAR_CART';

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const sendItems = (token, cart) => dispatch => (
  APIUtil.patchItems(token, cart).then((newCart) => {
    const parsedInventory = JSON.parse(newCart._bodyText);
    dispatch(receiveCart(parsedInventory.cart));
  })
);

export const requestUpc = (upc, token) =>(dispatch) => {
  APIUtil.upcLookUp(upc, token).then((response => {
    let parsedResponse = JSON.parse(response._bodyText);
    parsedResponse = parsedResponse.constructor === Array ? parsedResponse[0] : parsedResponse;
    dispatch(receiveCart(parsedResponse))
  }))
}
