// export const addItemToCart = (cartItems, cartItemToAdd) => {
//   if (cartItems.find(item => item.id === cartItemToAdd.id)) {
//     cartItems.map(item => {
//       if (item.id === cartItemToAdd.id) {
//         item.quantity++;
//       }
//       return ({
//         ...item
//       });
//     });
//   }
//   else {
//     cartItemToAdd.quantity = 1;
//     cartItems.push({ ...cartItemToAdd });
//   }
//   return ([...cartItems]);
// };

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToRemove) =>
  cartItems.filter(item => item.id !== cartItemToRemove.id);

export const removeItemsFromCart = (cartItems, cartItemToRemove) =>
  cartItems.map(item => {
    if (item.id === cartItemToRemove.id) {
      item.quantity--;
    }
    return ({
      ...item
    });
  }).filter(item => item.quantity !== 0);