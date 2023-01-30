import { connect } from "react-redux";

import Home from "../components/Home";
import { addToCart } from "../services/Action/action";

const mapStateToprops = (state) => ({
  cartData: state,
});

const mapDispatchToprops = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToprops, mapDispatchToprops)(Home);
