import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCartFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Components/css/Registerform.css";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";

function Header() {
  const [loginMenu, setLoginMenu] = useState(false);

  const userData1 = useSelector((state) => state.user.user);
  console.log(userData1.email);

  const dispatch = useDispatch();

  const handleLoginMenu = () => {
    setLoginMenu((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Successfully Logout");
  };

  console.log(import.meta.env.VITE_KEY_ADMIN_EMAIL);

  const cartItemNumber = useSelector((state)=>state.product.cartItem)

  return (
    <>
      
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <p className="headerTitle">
              <BsCartFill /> Market<span className="subTitle">Delight</span>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-bolder">
              <NavLink to=" " className="nav-link">
                <p>Home</p>
              </NavLink>
              <NavLink to="/menu/6652e2ce6a05e683562cedc2" className="nav-link">
                <p>Menu</p>
              </NavLink>
              <NavLink to="/about" className="nav-link">
                <p>About</p>
              </NavLink>
              <NavLink to="/cart" className="nav-link">
                <p>
                  Cart
                  <span className="position-relative">
                    <MdOutlineShoppingCart />
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill custom-badge"
                      style={{ fontSize: "0.67rem" }}
                    >
                      {cartItemNumber.length}
                    </span>
                  </span>
                </p>
              </NavLink>
              <Nav.Link
                href="#login"
                className="nav-link"
                onClick={handleLoginMenu}
              >
                <p className="">
                  {userData1.image ? (
                    <img
                      src={userData1.image}
                      className="profile-image-styling rounded-circle"
                    />
                  ) : (
                    <HiUserCircle className="h3" />
                  )}
                </p>
                {loginMenu && (
                  <div className="position-absolute p-3 bg-white text-dark shadow drop-shadow-sm d-flex flex-column">
                    {userData1.email ===
                      import.meta.env.VITE_KEY_ADMIN_EMAIL && (
                      <NavLink
                        to="/newProduct"
                        className="font-size-16 nav-bar-style"
                      >
                        New Product
                      </NavLink>
                    )}

                    {userData1.firstName ? (
                      <p
                        className="font-size-16 nav-bar-style"
                        onClick={handleLogout}
                      >
                        Logout
                        ({userData1.firstName})
                      </p>
                    ) : (
                      <NavLink
                        to="/login"
                        className="font-size-16 nav-bar-style"
                      >
                        Login
                      </NavLink>
                    )}
                  </div>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Header;
