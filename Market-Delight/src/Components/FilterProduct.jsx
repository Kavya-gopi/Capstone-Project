import React from "react";
import { CiForkAndKnife } from "react-icons/ci";
import "./css/Home.css"

const FilterProduct = ({category,onClick}) => {
  return (
    <div onClick={onClick}>
        
      <div className="font-30 p-3 bg-prod-dis rounded-circle cursor-pointer">
        <CiForkAndKnife />
      </div>
      <p className="text-center fw-bold my-1 text-capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
