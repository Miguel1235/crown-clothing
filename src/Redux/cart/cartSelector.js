import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems, selectCart], cartItems => {
    return cartItems.reduce((sum, act) => sum + act.quantity, 0);
  }
);

export const selectCartTotal = createSelector([selectCartItems, selectCart], cartItems =>
  cartItems.reduce((total, act) => total + act.price * act.quantity,0)
);