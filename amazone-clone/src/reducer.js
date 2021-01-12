export const initialState = {
  basket: [],
};

//selector
//cart total price
//initial amount, iterate through each item
//every time it loops though i want the item price to add to total amount and the initial amount is zero and return as value
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id} as its not in basket! `
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
