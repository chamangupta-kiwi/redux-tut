import { Add_To_Cart, Remove_To_Cart } from "../constants";

const initialState = {
  cartData: [],
};
const cartItems = (state = [], action) => {
  switch (action.type) {
    case Add_To_Cart:
      // console.log("reducer data from action",action)
      return [...state, { cartData: action.data }];
    case Remove_To_Cart:
      console.log("reducer data from action", action);
      state.pop();
      return [...state];
    default:
      return state;
  }
};
export default cartItems;
