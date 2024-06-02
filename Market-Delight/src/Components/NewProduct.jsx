import React, { useState } from "react";
import "./css/NewProduct.css";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import toast from "react-hot-toast";

function NewProduct() {
  const [newProductData, setNewProductData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewProductData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    // console.log(data);
    setNewProductData((prevState) => {
      return {
        ...prevState,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newProductData);

    const { name, image, category, price } = newProductData;

    if (name && image && category && price) {
      const fetchData = await fetch(
        `${import.meta.env.VITE_KEY_SERVER_DOMAIN}/product/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newProductData),
        }
      );
      const fetchRes = await fetchData.json();
      console.log(fetchRes);
      toast(fetchRes.message);

      setNewProductData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Enter Required Fields");
    }
  };
  return (
    <>
    <div className="productContainer">
      <div className="p-4">
        <form
          className="mx-auto w-400 rounded d-flex flex-column p-3 box-style-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="outl-none rounded p-1 my-1"
            onChange={handleOnChange}
            value={newProductData.name}
          />

          <label htmlFor="category">Category</label>
          <select
            className="outl-none rounded p-1 my-1 select-style"
            id="category"
            name="category"
            onChange={handleOnChange}
            value={newProductData.category}
          >
            <option value={"other"}>Select Category</option>
            <option value={"Fruits"}>Fruits</option>
            <option value={"Vegetable"}>Vegetable</option>
            <option value={"Snacks"}>Snacks</option>
            <option value={"Groceries"}>Various groceries</option>
            <option value={"Frozen"}>Frozen</option>
            <option value={"Sauces"}>Sauces</option>
            <option value={"Dairy"}>Dairy</option>
            <option value={"Bath"}>Personal Care</option>
            <option value={"Spices"}>Spices and Herbs</option>
            <option value={"Oils"}>Oils/Vinegars</option>
          </select>

          <label htmlFor="image">
            Image
            <div className="h-7 w-100 bg-color my-1 rounded d-flex justify-content-center align-items-center cursor-pointer">
              {newProductData.image ? (
                <img src={newProductData.image} className="h-100" />
              ) : (
                <span className="display-4">
                  <BsCloudUpload />
                </span>
              )}

              <input
                type="file"
                accept="image/*"
                id="image"
                onChange={uploadImage}
                className="d-none"
              />
            </div>
          </label>
          <label htmlFor="price" className="my-1">
            Price
          </label>
          <input
            type="text"
            className="outl-none rounded p-1 my-1"
            name="price"
            onChange={handleOnChange}
            value={newProductData.price}
          />

          <label htmlFor="description">Description</label>
          <textarea
            rows={2}
            className="outl-none rounded p-1 my-1 text-area-style"
            onChange={handleOnChange}
            name="description"
            value={newProductData.description}
          ></textarea>

          <button className="button-btn">Save</button>
        </form>
      </div>
      </div>
    </>
  );
}

export default NewProduct;
