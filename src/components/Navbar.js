import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { carts } = useContext(Context);
  return (
    <div className="bg-white border-bottom sticky-top shadow-sm p-3 px-md-4 mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        <Link
          className="heading my-0 mr-md-auto font-weight-normal"
          style={{
            textDecoration: "none",
            color: "#282C34",
            fontWeight: 800,
            fontSize: "2rem",
            fontFamily: "Source Code Pro, monospace"
          }}
          to="/"
        >
          Book_Shop
        </Link>

        <nav className="my-0 my-md-0.0 mr-md-4 ">
          <Link className="p-3 text-dark h4 font-weight-500" to="/about">
            About
          </Link>
        </nav>
        <Link className="btn btn-outline-primary font-weight-bold" to="/book-cart">
          Book Cart (
          <span style={{ color: "#FF0000" }}>
            {carts.length !== 0 ? carts.length : 0}
          </span>
          )
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
