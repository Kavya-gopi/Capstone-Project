import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./css/Home.css";
import AllProduct from "./AllProduct";
import { addCartItem } from "../redux/productSlice";
// import { addCartItemToServer } from "../redux/productSlice";

function Menu() {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);

  const prodDisplay = productData.filter((el) => el._id === filterby);
  console.log(prodDisplay);

  const dispatch=useDispatch();
  const handleAddCartProduct = ()=>{
    dispatch(addCartItem(prodDisplay));
  }



  return (
    <>
      <div className="p-2 p-md-4 menu-sm">
        <div className="w-100 custom-max-width bg-menu d-lg-flex flex-mob rounded">
          <div className="w-40 menu-img">
            <img
              src={prodDisplay[0].image}
              className="w-100 h-100 rounded scale-hover"
            />
          </div>
          <div className="single-product">
            <h3 className="name-md text-center">
              {prodDisplay[0].name}{" "}
              <span className="price-styling"> ₹{prodDisplay[0].price}</span>
            </h3>
            <p className="text-center text-dark">{prodDisplay[0].category}</p>
            <div className="d-flex gap-3 btn-mob">
              <button type="button" className="bg-btn" onClick={handleAddCartProduct}>
                Add To Cart
              </button>
              <button type="button" className="bg-btn">
                Buy Now
              </button>
            </div>
            <div className="des-mob">
                <p className="text-des">Description:</p>
                <p>{prodDisplay[0].description}</p>
            </div>
          </div>
        </div>

        <AllProduct heading={"Related Product"}/>
      </div>
    </>
  );
}

export default Menu;
