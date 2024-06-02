import React, { useEffect, useRef } from "react";
import "./css/Home.css";
import BikeIcon from "../assets/BikeIcon.jpg";
import HomeCard from "./HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "./CardFeature";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import FilterProduct from "./FilterProduct";
import { useState } from "react";
import AllProduct from "./AllProduct";

function Home() {
  const productData = useSelector((state) => state.product.productList);
  
  const homeProductCartList = productData.slice(0, 5);
  
  const homeProductListVegetables = productData.filter(
    (el) => el.category === "Vegetable",
    []
  );
  

  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const previousProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <>
      <div className="p-1 p-md-4 centered-element">
        <div className="d-md-flex gap-4 py-2">
          <div className="w-50">
            <div className="d-flex gap-3">
              <p className="bike-delivery-style">
                Bike Delivery <img src={BikeIcon} className="h-5" />
              </p>
            </div>
            <h2 className="font-style-home">
              Delivering Happiness to{" "}
              <span className="text-color">Your Doorstep</span>
            </h2>
            <p className="para-styling">
              Market Delight is the application responsible for providing the
              best grocery deals in an easy & stress-free manner. This app will
              display grocery items on app and deals directly with local
              vendors, and then provide the buyers best offers and price for the
              item he/she wants to buy.{" "}
            </p>
            <button className="order-btn">Order Now</button>
          </div>
          <div className="w-50 d-flex flex-wrap gap-5 p-4 justify-content-center">
            {homeProductCartList[0] &&
              homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })}
          </div>
        </div>
        <div className="">
          <div className="d-flex w-100 ">
            <h4 className="category-style">Fresh Vegetables</h4>
            <div className="btn-prev-nex">
              <button className="bg-btn gap-4" onClick={previousProduct}>
                <GrPrevious />
              </button>
              <button className="bg-btn" onClick={nextProduct}>
                <GrNext />
              </button>
            </div>
          </div>
          <div
            className="d-flex gap-5 overflow-scroll scroll-smooth scroll-hidden"
            ref={slideProductRef}
          >
            {homeProductListVegetables.map((el) => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  image={el.image}
                  price={el.price}
                />
              );
            })}
          </div>
        </div>
        <AllProduct heading={"Your Product"}/>
      </div>
    </>
  );
}

export default Home;
