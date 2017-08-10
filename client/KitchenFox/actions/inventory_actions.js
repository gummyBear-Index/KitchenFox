import * as APIUtil from '../util/session_api_util';

export const RECEIVE_INVENTORY = 'RECEIVE_INVENTORY';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveInventory = inventory => ({
  type: RECEIVE_INVENTORY,
  inventory,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const requestItems = token => dispatch => (
  APIUtil.fetchItems(token).then((inventory) => {
    const parsedInventory = JSON.parse(inventory._bodyText);
    dispatch(receiveInventory(parsedInventory));
  })
);

export const sendItems = (token, inventory) => dispatch => (
  APIUtil.patchItems(token, inventory).then((newInventory) => {
    const parsedInventory = JSON.parse(newInventory._bodyText);
    dispatch(receiveInventory(parsedInventory));
  })
);
