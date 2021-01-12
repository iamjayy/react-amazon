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
    default:
      return state;
  }
};

export default reducer;
