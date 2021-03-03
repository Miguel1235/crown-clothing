import { cartTypes } from "./cartTypes";

export const toggleCart = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN,
});
