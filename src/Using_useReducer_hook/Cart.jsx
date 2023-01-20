import React, { useState } from "react";
import { useEffect } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);
  //   console.log("Cart==>", cart);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        id: id,
        qty: qty,
      },
    });
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  return (
    <div
      style={{
        backgroundColor: "lightGrey",
        width: "20%",
        textAlign: "center",
        padding: "10px",
        padding:"2rem"
      }}
    >
      <h2>Cart</h2>
      <h4>Subtotal ${total}</h4>
      <section>
        {cart.map((item) => (
          <div style={{ margin: "1rem 0" }} key={item.id}>
            <img
              src={item.img}
              alt="cart item image"
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
                onClick={() => {
                  changeQty(item.id, item.qty - 1);
                }}
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
                onClick={() => {
                  changeQty(item.id, item.qty + 1);
                }}
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
