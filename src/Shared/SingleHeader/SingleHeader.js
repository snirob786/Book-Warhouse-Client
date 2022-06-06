import React from "react";
import { Link } from "react-router-dom";

const SingleHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand mx-auto" to="/">
              Book Warehouse
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SingleHeader;
