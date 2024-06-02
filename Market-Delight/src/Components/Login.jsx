import React from "react";
import "../Components/css/Registerform.css";
import signUpLogo from "../assets/signUpLogo.jpg";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {loginRedux} from "../redux/userSlice";

function Login() {
  const [showEyeIcon, setShowEyeIcon] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  console.log(userData);
  const navigate = useNavigate();

  const userData1 = useSelector(state => state.user);
  console.log(userData1)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleShowEyeIcon = () => {
    setShowEyeIcon((prevState) => !prevState);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (email && password) {
      const fetchData = await fetch(
        `${import.meta.env.VITE_KEY_SERVER_DOMAIN}/user/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await fetchData.json();
      console.log(data);
      toast (data.message);

      if (data.alert) {
        dispatch(loginRedux(data))
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } else {
      alert("Please fill the required fields");
    }
  };

  return (
    <>
    <div className="login-con">
      <div className="p-3 p-md-4 margin-20">
        <div className="signUpContainer">
          {/* <h1 className="text-center">Sign Up</h1> */}
          <div className="w-60 overflow-hidden rounded-circle shadow mt-2">
            <img src={signUpLogo} className="w-100" />
          </div>
          <form
            className="d-flex flex-column w-100 p-3 mt-0"
            onSubmit={handleLogin}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 mb-2 bg-input-field px-2 py-1 rounded outl-none border-light"
              value={userData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <div className="bg-input-field rounded mt-1 mb-2 px-2 py-1">
              <input
                type={showEyeIcon ? "text" : "password"}
                name="password"
                id="password"
                className="bg-input-field border-light width-90 outl-none"
                value={userData.password}
                onChange={handleChange}
              />
              <span onClick={handleShowEyeIcon}>
                {showEyeIcon ? (
                  <IoEyeSharp className="cursor" />
                ) : (
                  <IoEyeOffSharp className="cursor" />
                )}
              </span>
            </div>
            <button className="mt-4 bg-color-btn">Login</button>
          </form>
          <p className="fst-italic">
            Don't Have an account ?{" "}
            <Link to="/signup" className="fw-bolder">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
