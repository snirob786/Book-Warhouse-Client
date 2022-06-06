import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="containre-fluid border-top">
      <div className="container footer">
        <div className="row py-3">
          <div className="col p-0">
            <Link to="/" className="footer-link btn btn-primary text-light">
              Book Warehouse
            </Link>
          </div>
          <div className="col p-0 d-flex align-items-center justify-content-end">
            <div className="text-end">
              {"\u00A9" + currentYear} - All Right Reserved to{" "}
              <Link to="/" className="copyright-link">
                Book Warehouse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
