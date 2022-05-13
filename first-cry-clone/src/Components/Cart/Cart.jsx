import React from 'react';
import { deleteFromCart } from "../../redux/action";
import { useDispatch , useSelector } from 'react-redux'; 
import { NavLink } from 'react-router-dom';
import { CCardBody } from '@coreui/react'
import { CCardImage } from '@coreui/react'
import { CCardText } from '@coreui/react'
import { CCardTitle } from '@coreui/react'
import { CCard } from '@coreui/react'
import { CRow , CCol} from '@coreui/react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Cart.css"

export const Cart = () => {
    const dispatch = useDispatch();
    const state = useSelector((state)  => state.handleCart );
    const handleClose = (item) => {
            dispatch(deleteFromCart(item));
    }
    const emptyCart = () => {
        return (
            <>
             <h1>Your Cart Is Empty</h1>
            </>
        )
    }
    const btn = () => {
        return (
            <>
            <NavLink to="/checkout" >
            <Button variant="contained" disableElevation style={{textDecoration: 'none', alignContent:"center" , marginLeft:'750px'}}>
            Proceed to CheckOut
            </Button>
            </NavLink>
              </>
        )
    }
    const cartItems = (cartItem) => {
        return(
            <>
                <div className="abhishek">
                <div id='ritesh'>
                    <div className="images">
                        <img src={cartItem.images} alt={cartItem.title} />
                    </div>
                    <div>
                    <h1>{cartItem.title}</h1>
                    <h3><span> <b>₹ </b></span> {cartItem.price}</h3>
                    </div>
                    <div className="deleteButton">
                    <Button onClick={() =>  handleClose(cartItem)} variant="contained"
                     style={{width:"35%", height:'55px'}} startIcon={<DeleteIcon />}>
                    <b>  Delete</b>
                    </Button>
                    </div>
                </div>

                </div>



            </>
        )
    }

    
    return <>
              {state.length ===0 && emptyCart() }
      <div className="container">
      {state.length !==0 && state.map(cartItems)}

      </div>
        <br/>
      <div>

      {state.length !==0 && btn()}
      </div>
    </>
}