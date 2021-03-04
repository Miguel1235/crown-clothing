import { cartTypes } from "./cartTypes";

export const toggleCart = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: cartTypes.ADD_ITEM,
  payload: item
});