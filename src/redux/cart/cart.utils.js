export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quanity: cartItem.quanity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quanity: 1 }];
};
