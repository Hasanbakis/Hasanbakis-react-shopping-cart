import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>My Shopping</h3>
        <p>
          Lorem ipsdo eiusmod tempor incmagna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in
        </p>
        <ul className="socials">
          <li>
          <a href="http://localhost:3000/#">
            <i className="fa fa-cart-plus" />
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/#">
            <i className="fa fa-cart-plus" />
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/#">
            <i className="fa fa-cart-plus" />
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/#">
            <i className="fa fa-cart-plus" />
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/#">
            <i className="fa fa-cart-plus" />
            </a>
          </li>
        </ul>
      </div>
      
    </footer>
  );
};

export default Footer;
