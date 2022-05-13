import React from 'react';
import { useSelector } from 'react-redux';
import "./CheckOut.css"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export const CheckOut = () => {
    const navigate = useNavigate();
    const state = useSelector((state ) => state.handleCart)
    var total = 0;
    const itemList = (item) => {
       total = total+item.price;
       return  <div>
            <div id='checkOut'>
              <div>  <img src={item.images} alt={item.title}  className="checkoutImage"/></div>
              <div>
              <h2>{item.title}</h2>
                <h3><b style={{fontSize:'25px'}}>₹</b> <span> {item.price}</span></h3>
              </div>
            </div>
        </div>
    }

    const successFull = () => {
        navigate('./success')
    }

 return <>
    <div className="checkOutPage">
        <div id='checkOut'>           
            {state.map((itemList ))}
        </div>
        <div className='totalpage'>
        <b>Total : -</b>
        <h1> ₹{total} </h1>

        <input type="text" placeholder='Name on Card' required={true} className='input_box' />
        <input type="number" placeholder='Card Number' required={true} className='input_box' />
        <input type="number" placeholder='CVV Number' required={true} className='input_box' />
        <input type="date" placeholder='Expiry Date' required={true} className='input_box' />
        <br/>
        <Button variant="contained" color="success"   onClick= {() => {navigate('/success')}} >  Pay Now</Button>

        </div>
        </div>   
    </>
}