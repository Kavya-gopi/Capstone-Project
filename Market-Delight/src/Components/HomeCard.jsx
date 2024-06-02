import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, id }) => {
  return (
    <>
    <Link to={`/menu/${id}`} className="menu-link" onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
      <div className="card-md rounded">
        <div className="w-40">
          <img src={image} className="w-100 h-100 rounded" />
        </div>
        <h3 className="name-md text-center">
          {name} <span className="price-styling"> ₹{price}</span>
        </h3>
        <p className="text-center text-dark">{category}</p>
      </div>
      </Link>
    </>
  );
};

export default HomeCard;
