import Button from '@mui/material/Button';
import './Login.css';
import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    return <>
    <div className="login">
        <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="home" />
        <div className="loginPage">
            <input type ="text" placeholder="Email or UserName" className="inputBox"required/>
            <br/>
            <input type ="password" placeholder="Password" className="inputBox" required />
            <br/>
            <Button className="inputBox Button" onClick={() => {navigate('/')}}>Login</Button>

            <h4 style={{textAlign:'center'}}>If Not Registered <span style={{color:"red"}} onClick={() => {navigate('/signup')}}> Click Here</span> to Register</h4>

        </div>
    </div>
    </>
}