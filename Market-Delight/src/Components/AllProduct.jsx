import React, { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeature";
import { useSelector } from "react-redux";

const AllProduct = ({heading}) => {
    const productData = useSelector((state) => state.product.productList);
    const categoryList = [...new Set(productData.map((el) => el.category))];
    // console.log(categoryList);

    //filter data display

   const [dataFilter, setDataFilter] = useState([]);

   useEffect(()=>{
    setDataFilter(productData)
   },[productData])

   const handleFilterProduct = (category) => {
     const filter = productData.filter(
       (el) => el.category.toLowerCase() === category.toLowerCase()
     );
     setDataFilter(() => {
       return [...filter];
     });
  }
  

  return (
    <>
      <div className="my-4">
        <h4 className="category-style">{heading}</h4>

        <div className="d-flex gap-4 justify-content-center overflow-scroll scroll-hidden">
          {categoryList[0] &&
            categoryList.map((el,index) => {
              return (
                <FilterProduct
                  category={el}
                  key={index}
                  onClick={() => handleFilterProduct(el)}
                />
              );
            })}
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-4 my-4">
          {dataFilter.map((el) => {
            return (
              <CardFeature
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                category={el.category}
                price={el.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllProduct;
