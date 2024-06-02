import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/NavBar";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  // console.log(productData);
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_KEY_SERVER_DOMAIN}/product/prod`
      );
      const resData = await response.json();
      console.log(resData);
      dispatch(setDataProduct(resData));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Toaster />
      <Header />
      <main className="body-bg">
        <Outlet />
      </main>
    </>
  );
}

export default App;
