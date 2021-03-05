import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems,selectCart], cartItems => {
    return cartItems.reduce((sum, act) => sum + act.quantity, 0);
  }
);