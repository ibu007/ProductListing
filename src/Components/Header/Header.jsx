import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <div className="bg-light-blue">
        <div className="container flex flex-between">
          <h1>Product Task</h1>
          <div className="flex header-all-link fs-16 fw-7">
            <li>
              <a href="#" className="hover-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover-link">
                Search
              </a>
            </li>
            <li>
              <a href="#" className="hover-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover-link">
                Contact
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
