import React  from "react";
import "./Navbar.css";
const Navbar = (props) => {
   

  return (
    <nav>
            <div className="nav_box">
            <span className="my_shop" onClick={()=>props.setShow(true)}>
                My Shopping
            </span>
            <div className="search">
            <i className="fa fa-search" aria-hidden="true"/>
            <input  type="text" placeholder="Seacrh..." onChange={(event)=>props.handleSearch(event)}/>
            </div>
            <div className="cart" onClick={()=>props.setShow(false)}>
                <span>
                    <i className="fa fa-cart-plus" />
                </span>
                <span>{props.size}</span>

            </div>
        </div>

    </nav>
  )
};

export default Navbar;
