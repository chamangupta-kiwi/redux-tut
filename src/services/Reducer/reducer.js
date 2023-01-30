import { Add_To_Cart } from "../constants";

const initialState = {
  cartData: [],
};
const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      console.log("reducer data from action",action)
      return {
        ...state,
        cartData: action.data,
      };
    default:
      return state;
  }
};
export default cartItems;
