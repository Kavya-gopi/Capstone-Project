import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Menu from "./Components/Menu.jsx";
import Cart from "./Components/Cart.jsx";
import Login from "./Components/Login.jsx";
import About from "./Components/About.jsx";
import NewProduct from "./Components/NewProduct.jsx";
import RegisterForm from "./Components/RegisterForm.jsx";
import { store } from "./redux/index.js";
import { Provider } from "react-redux";
import Payment from "./Components/Payment.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/menu" element={<Menu />} /> */}
            <Route path="/menu/:filterby" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/newproduct" element={<NewProduct />} />
            <Route path="/signUp" element={<RegisterForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
