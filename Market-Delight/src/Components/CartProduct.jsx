import React from "react";
import "./css/Home.css";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteCartItem,increaseQty,decreaseQty} from "../redux/productSlice";
// import { deleteCartItemFromServer } from "../redux/productSlice";


const CartProduct = ({id,name,image,category,qty,total,price}) =>{
    const dispatch = useDispatch()
    return(
        <>
        <div className="bg-cart rounded-3 border-dark">
           <div className="cart-st d-flex gap-3">
            <img src={image} className="img-cart-style rounded-4"/>
            <div className="mt-2">
                <h5>{name}</h5>
                <p className="cart-price">₹<span>{price}</span></p>
                <div>
                <div className="mb-2 gap-2 d-md-flex">
                    <button onClick={()=>dispatch(increaseQty(id))} className="bg-btnn"><FiPlusCircle /></button>
                    <p className="mt-2 mb-2 mb-qty">{qty}</p>
                    <button onClick={()=>dispatch(decreaseQty(id))} className="bg-btnn"><FiMinusCircle /></button>
                </div>
                <div className="fw-normal">
                    <p>Total: <span className="fw-bolder">₹{total}</span></p>
                    <button className="mb-2 bg-red" onClick={()=>dispatch(deleteCartItem(id))}>Remove</button>

                </div>
                </div>
            </div>
            
           </div>
          
        </div>
        
        </>
    )
};

export default CartProduct;