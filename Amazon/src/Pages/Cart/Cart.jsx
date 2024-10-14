import React, { useContext } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { StateContext } from "../../components/DataProvidor/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
function Cart() {
  // const [{ basket, user, dispatch }] = useContext(StateContext);
  // const total = basket.reducer((amount, item) => {
  //   return item.price + amount;
  // }, 0);
  return (
    <LayOut>
      <div>
        <h2>Hello</h2>
        <h3>Your's shoping basket</h3>
        <hr />
        {/* {basket?.length == 0 ? (
          <p>Opps ! No item in your cart</p>
        ) : (
          basket?.map((item, i) => {
            return (
              <ProductCard
                data={item}
                flex={true}
                renderDesc={true}
                key={i}
                renderAdd={false}
              />
            );
          })
        )} */}
      </div>
      <div>
        {/* {basket?.length !== 0 && (
          <div>
            <div>
              <p>Subtotal ({basket?.length}items)</p>
              <CurrencyFormat amount="total" />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )} */}
      </div>
    </LayOut>
  );
}

export default Cart;
