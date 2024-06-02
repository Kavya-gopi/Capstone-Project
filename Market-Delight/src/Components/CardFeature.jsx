import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";
import { useDispatch } from "react-redux";
// import { addCartItemToServer } from "../redux/productSlice";

const CardFeature = ({ image, name, price, category, id }) => {
  const dispatch = useDispatch();
  const handleAddCartProduct = ()=>{
    // e.stopPropagation();
    dispatch(addCartItem({
      _id:id,
      name:name,
      price:price,
      category:category,
      image:image
    }))
}

  return (
    <div className="card-container rounded">
      <Link to={`/menu/${id}`} className="menu-link" onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
      <div className="h-20 d-flex justify-content-center">
        <img src={image} className="h-100 rounded" />
      </div>
      <h3 className="name-md my-4 text-center text-nowrap overflow-hidden">
        {name}
        <span className="price-styling"> ₹{price}</span>
      </h3>
      <p className="text-dark text-center">{category}</p>
      </Link>
      <div className="text-center">
        <button type="button" className="bg-btn" onClick={handleAddCartProduct}>
          Add To Cart
        </button>
      </div>
      
    </div>
  );
};

export default CardFeature;
