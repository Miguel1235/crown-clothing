export const addItemToCart = (cartItems, cartItemToAdd) => {
  if (cartItems.find(item => item.id === cartItemToAdd.id)) {
    cartItems.map(item => {
      //eslint-disable-next-line no-unused-expressions
      item.id === cartItemToAdd.id ? item.quantity++ : null;
      return item;
    });
    return (cartItems);
  }
  else {
    cartItemToAdd.quantity = 1;
    cartItems.push(cartItemToAdd);
    return (cartItems);
  }
};