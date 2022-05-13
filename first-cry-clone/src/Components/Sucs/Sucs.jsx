import Button from '@mui/material/Button';
import React from 'react';
import "./Sucs.css";
import { useNavigate } from 'react-router-dom';
export const Sucs = () => {
    const navigate = useNavigate();
    return (
        <div id="div1">
       <h1 id="con">Congratulations</h1>
    
       <img id="image" src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg" alt=""/>
    <div id ="second">
       <h2>Your Order Placed Successfully !</h2>
       <h4>Your Order Id is : - {(Math.random() * 1)*1000000000000000000}
       </h4>
        <h3>You will soon Recieve A Message for your Order</h3>
       {/* <button className="f-btn" }>Continue Shopping</button> */}
       <Button id="Button" size="large" onClick={() => navigate("/")}  >Continue Shopping</Button>
    </div>
    </div>
    )
}