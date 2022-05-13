import React  from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import "./Signup.css"
export const SignUp = () => {
    const navigate = useNavigate();
    return <>
     <div className="login">
    <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="home" />
    <div>
        <input type="text" placeholder="First Name" className="signUpBox" required />
        <br/>
        <input type="text" placeholder="Last Name" className="signUpBox" required/>
        <br/>
        <input type="email" placeholder="Email" className="signUpBox" required/>
        <br/>
        <input type="text" placeholder="UserName" className="signUpBox"required />
        <br/>
        <input type="password" placeholder="Password" className="signUpBox" required/>
        <br/>
        <input type="password" placeholder="Password" className="signUpBox"required />
        <br/>
        <Button  className="signUpBox Button" onClick={() => {navigate('/')}}>Sign Up</Button>

        <h4 style={{textAlign:'center'}}>If Already Registered <span style={{color:"red"}} onClick={() => {navigate('/login')}}> Click Here</span> to Login</h4>
    </div>
    </div>
    </>
}