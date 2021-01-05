import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h3>everyMoni</h3>
            <h6 className="list-unstyled">
              <li>233-234-345</li>
              <li>Accra, Ghana</li>
              <li>123 Street North Legon</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h6>SUPPORT</h6>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Help Center</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h6>PRODUCTS</h6>
            <ul className="list-unstyled">
              <li>Customer Stories</li>
              <li>SignUp for Free</li>
              <li>everyMoni</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} everyMoni | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;