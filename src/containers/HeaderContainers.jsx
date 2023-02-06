import { connect } from "react-redux";

import Header from "../components/Header";

const mapStateToprops = (state) => ({
  // cartData: state,
  cartData: state.cartItems,
});

const mapDispatchToprops = (dispatch) => ({});

export default connect(mapStateToprops, mapDispatchToprops)(Header);
