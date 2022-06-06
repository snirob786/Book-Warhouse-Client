import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="row notfound-container m-0">
        <div className="col-md-6 d-flex align-items-center justify-content-center flex-column text-center">
          <div>
            <span className="notfound-container-text">404 error</span>
            <br />
            <span className="notfound-container-text-small">
              page not found
            </span>
          </div>
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </div>
        <div className="col-md-6 notfound-container-col-2"></div>
      </div>
    </div>
  );
};

export default NotFound;
