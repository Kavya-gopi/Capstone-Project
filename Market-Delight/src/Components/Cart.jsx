import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import "./css/Home.css";
import EmptyCartImage from "../assets/emptycart.png"
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);

  const totalPrice = productCartItem.reduce((acc,curr)=>acc + parseInt(curr.total),0)
  const totalQty = productCartItem.reduce((acc,curr)=>acc + parseInt(curr.qty),0)
  
  return (
    <>
    
      <div className="p-2 p-md-4">
        <h3>Your Cart Items</h3>
        { productCartItem[0] ? 
        <div className="my-4 d-md-flex gap-3">
          {/* display cart items */}
          <div className="w-100 max-w-3xl">
            {productCartItem.map((el) => {
              return (
                <CartProduct
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  price={el.price}
                  qty={el.qty}
                  total={el.total}
                />
              );
            })}
          </div>
          {/* total cart item */}
          <div className="w-100 max-w-md bg-backg rounded-2 ml-auto">
            <h4 className="sum-sty">Summary</h4>
            <div className="d-flex w-100 py-2 bg-sum">
              <p>Total Qty: </p>
              <p className="fw-bolder">{totalQty}</p>
            </div>
            <div className="d-flex w-100 py-2 bg-sum">
              <p>Total Price</p>
              <p className="fw-bold"><span className="fw-bolder">₹</span>{totalPrice}</p>
            </div>
            <Link to="/payment" className="menu-link"><button className="bg-primary w-100 fs-6 fw-bold mt-2 py-2 text-white">Payment</button></Link>
            </div>
          </div>
          :
          <>
          <div className="d-flex w-100 justify-content-center">
            <img src={EmptyCartImage}/>
          </div>
          </>
          }
        </div>
       
    </>
  );
}

export default Cart;
