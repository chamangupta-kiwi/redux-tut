import React from "react";

const Home = (props) => {
  // console.log("props",props)
  console.log("home",props)
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="data:image/png;base64,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"
          alt="cart-img"
        />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://i.gadgets360cdn.com/products/large/iphone-14-plus-db-396x800-1662581536.jpg"
            alt="phone-img"
          />
        </div>
        <div className="txt-wrapper item">
          <span>i-phone14</span>
          <br></br>
          <span>price: $1100.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ name: "i-phone14", price: 1100 })
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
