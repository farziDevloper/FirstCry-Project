import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { BiSearch } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import { useSelector } from 'react-redux';
import { BsCart } from "react-icons/bs";


// import { useDispatch, useSelector } from "react-redux";


export const  NavBar =() => {
  const state = useSelector((state) => state.handleCart)

//   const dispatch = useDispatch();
  return (
    <>
    <div id="topNavbar">
        <div> 
        <Link to="/">
                <img
                  src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
                  alt="logo"
                />
              </Link>
        </div>
        <div className="navsearchBox">
      <input type="text" placeholder="search for Products" className="intBox" />
              <BiSearch className="searchicon" />
        </div>
        <div className="navlistItem"
                style={{ position: "relative", top: "2px" }}
              >
                <VscLocation className="navicon" />
                <Link to="/">Select location</Link>
        </div>
        <div className="navlistItem">
                <Link to="/">Stores & Preschools</Link>
     </div>
     <div className="navlistItem">
                <Link to="/">Support</Link>
              </div>
              <div className="navlistItem">
                <Link to="/">Track Order</Link>
              </div>
              <div className="navlistItem">
                <Link to="/">FirstCry Parenting</Link>
              </div>
              <div className="navlistItem">
            <Link to="/login">Login/Register</Link>
            </div>
            <div className="navlistItem">
               
                <Link to="/">Shortlist</Link>
              </div>
              <div className="navlistItem">
                <Link to="/cart" className="">
                  <div className="cartnumber">
                  Cart( {state.length} )
                  </div>
                </Link>
              </div>

    </div>

     
    </>
  );
}
