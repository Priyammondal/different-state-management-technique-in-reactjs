import React, { useState, useEffect } from "react";

const Cart = ({ cartItems, changeQty }) => {
  console.log("cartItems==>", cartItems);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  });
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
        {cartItems.map((item) => (
          <div key={item.id} style={{ margin: "1rem 0" }}>
            <img
              src={item.img}
              alt="cart Item image"
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
