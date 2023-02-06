import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart,removeToCart } from "../services/Action/action";

const mapStateToprops = (state) => ({
  // cartData: state,
  /////// use for adding multiple items in array 
  cartData : state.cartItems
});

const mapDispatchToprops = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),

});

export default connect(mapStateToprops, mapDispatchToprops)(Home);
