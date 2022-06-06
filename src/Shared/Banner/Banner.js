import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="container-fluid
    banner-section"
    >
      <h2 className="banner-heading text-center">Books Warehouse</h2>
      <p className="banner-content text-center">
        You can find all the necessary books here. Best book Library on the
        internet.
      </p>
      <Link className="btn btn-primary" to="/additem">
        Add Item
      </Link>
    </div>
  );
};

export default Banner;
