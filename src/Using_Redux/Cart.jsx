import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cartItems.reduce((acc, curr) => {
        return acc + curr.price * curr.qty;
      }, 0)
    );
  }, [cartItems]);

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
        {cartItems.map((item) => (
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
                onClick={() =>
                  dispatch({
                    type: "reduceQty",
                    payload: { id: item.id, qty: item.qty - 1 },
                  })
                }
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
                onClick={() =>
                  dispatch({
                    type: "addQty",
                    payload: { id: item.id, qty: item.qty + 1 },
                  })
                }
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
