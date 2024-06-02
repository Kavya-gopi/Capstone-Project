import React, { useState } from "react";
import "../Components/css/Registerform.css";
import signUpLogo from "../assets/signUpIcon.png";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import toast from "react-hot-toast";

function RegisterForm() {
  const navigate = useNavigate();
  const [showEyeIcon, setShowEyeIcon] = useState(false);

  const [cPasswordEyeIcon, setCPasswordEyeIcon] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    image: "",
  });

  console.log(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleUploadProfileImage = async (e) => {
    // console.log(e.target.files[0]);
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);
    setUserData((prevState) => {
      return {
        ...prevState,
        image: data,
      };
    });
  };

  const handleShowEyeIcon = () => {
    setShowEyeIcon((prevState) => !prevState);
  };

  const handleCPasswordEyeIcon = () => {
    setCPasswordEyeIcon((prevState) => !prevState);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmpassword } = userData;
    if (firstName && email && password && confirmpassword) {
      if (password === confirmpassword) {
        const fetchData = await fetch(
          `${import.meta.env.VITE_KEY_SERVER_DOMAIN}/user/signup`,
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
        // alert(data.message);
        toast(data.message);
        if (data.alert) {
          navigate("/login");
        }
      } else {
        alert("Password and Confirm Password Not Matched");
      }
    } else {
      alert("Please fill the required fields");
    }
  };
  return (
    <>
      <div className="p-3 p-md-4">
        <div className="signUpContainer">
          {/* <h1 className="text-center">Sign Up</h1> */}
          <div className="w-60 overflow-hidden rounded-circle shadow p-2 mt-2 position-relative">
            <img
              src={userData.image ? userData.image : signUpLogo}
              className="image-styling"
            />

            <div className="position-absolute bottom-0 upload-styling">
              <p onClick={handleShow}>Upload</p>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Upload Profile Picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input
                    type="file"
                    onChange={handleUploadProfileImage}
                    accept="image/*"
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button className="bg-color-style" onClick={handleClose}>
                    Upload
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <form
            className="d-flex flex-column w-100 p-3 mt-0"
            onSubmit={handleSignUp}
          >
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="mt-1 mb-2 bg-input-field px-2 py-1 rounded outl-none border-light"
              value={userData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="mt-1 mb-2 bg-input-field px-2 py-1 rounded outl-none border-light"
              value={userData.lastName}
              onChange={handleChange}
            />

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

            <label htmlFor="cpassword">Confirm Password</label>
            <div className="bg-input-field rounded mt-1 mb-2 px-2 py-1">
              <input
                type={cPasswordEyeIcon ? "text" : "password"}
                name="confirmpassword"
                id="cpassword"
                className="bg-input-field border-light width-90 outl-none"
                value={userData.confirmpassword}
                onChange={handleChange}
              />
              <span onClick={handleCPasswordEyeIcon}>
                {cPasswordEyeIcon ? (
                  <IoEyeSharp className="cursor" />
                ) : (
                  <IoEyeOffSharp className="cursor" />
                )}
              </span>
            </div>

            <button className="mt-4 bg-color-btn">Sign Up</button>
          </form>
          <p className="fst-italic">
            Already Have an account ?{" "}
            <Link to="/login" className="fw-bolder">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
