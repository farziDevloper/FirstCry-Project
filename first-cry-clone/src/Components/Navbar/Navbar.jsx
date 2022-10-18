import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import { useSelector } from 'react-redux';
import {Icon, Text} from "../Style"
import { Input, SearchIcon } from "./Style";

// import { useDispatch, useSelector } from "react-redux";


export const  NavBar =() => {
  const state = useSelector((state) => state.handleCart)

//   const dispatch = useDispatch();
  return (
    <>
    <div className="flex pad gap4" >
        <Link to="/" className=" mr12">
                <Icon
                  src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
                  alt="logo"
                />
              </Link>
      <Input placeholder="search for Products" type='text'  className="mt4" />
              <SearchIcon className="mr80 mt8">
              <BiSearch className="mt12" />
              </SearchIcon >
        
                <Link to="/" className="flex mt8">
                <VscLocation />
                  <Text>Select Location</Text>
                </Link>
                <span className="mt8">|</span>
       
                <Link to="/" className="mt8" >
                  <Text>Stores & Preschools</Text>
                </Link>
                <span className="mt8">|</span>
                <Link to="/"  className="mt8">
                  <Text>Support</Text>
                </Link>
                <span className="mt8">|</span>
                <Link to="/"  className="mt8">
                  <Text>Track Order</Text>
                </Link>
                <span className="mt8">|</span>
                <Link to="/"  className="mt8">
                  <Text>FirstCry Parenting</Text>
                </Link>
                <span className="mt8">|</span>
            <Link to="/login"  className="mt8">
              <Text>Login/Register</Text>
            </Link>
            <span className="mt8">|</span>
               
                <Link to="/"  className="mt8">
                  <Text>Shortlist</Text>
                </Link>
                <span className="mt8">|</span>
                <Link to="/cart"   className="mt8 ">
                    <Text className={`inline-message error`}>
                  Cart( {state.length} )
                    </Text>
                </Link>

    </div>

     
    </>
  );
}
