import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./App";

const Cart = () => {
  const { state, dispatch } = useContext(UserContext);
  const cart = state.cart;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        id: id,
        qty: qty,
      },
    });
  };
  return (
    <div
      style={{
        backgroundColor: "lightGrey",
        width: "20%",
        textAlign: "center",
        padding: "10px",
        padding: "2rem",
      }}
    >
      <h2>Cart</h2>
      <h4>Subtotal ${total}</h4>
      <section>
        {cart.map((item) => (
          <div style={{ margin: "1rem 0" }} key={item.id}>
            <img
              src={item.img}
              alt="cart items image"
              style={{ height: 100, width: 120, objectFit: "cover" }}
            />
            <p>{item.title}</p>
            <p>$ {item.price}</p>
            <section>
              <button
                style={{
                  padding: "5px",
                  fontSize: "1rem",
                  margin: "5px",
                  cursor: "pointer",
                }}
                onClick={() => changeQty(item.id, item.qty - 1)}
              >
                -
              </button>
              <>{item.qty}</>
              <button
                style={{
                  padding: "5px",
                  fontSize: "1rem",
                  margin: "5px",
                  cursor: "pointer",
                }}
                onClick={() => changeQty(item.id, item.qty + 1)}
              >
                +
              </button>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cart;
