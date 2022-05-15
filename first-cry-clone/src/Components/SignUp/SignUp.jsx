import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import "./Signup.css"
export const SignUp = () => {
    const [user,setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_enter_password:''

    })

    const [name , setName ] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [reEnterPassword , setReEnterPassword] = useState("")

async function  registerUser(e){
    e.preventDefault()
   const response = await fetch (`http://localhost:7215/api/register`, {
            method: 'POST',
            headers: {
                contentType: 'application/json'
            },
           body: JSON.stringify({
            name,
            email,
            password,
            reEnterPassword,
        })
    } )
    const data = await response.json(); 
    console.log(data);
}

     


    const navigate = useNavigate();
    return <>
     <div className="login">
    <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="home" />
    <div>
      
        <form onSubmit={registerUser} >
        <input type="text" name='first_name' value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} className="signUpBox" required />
        <br/>
        <input type="email" name='email' value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}  className="signUpBox" required/>
        <br/>
      
        <input type="password" name='password' onChange={(e) => setPassword(e.target.value)}  value={password} placeholder="Password" className="signUpBox" required/>
        <br/>
        <input type="password" name='re_enter_password' onChange={(e) => setReEnterPassword(e.target.value)}   value={reEnterPassword} placeholder="Re-Enter Password" className="signUpBox"required />
        <br/>
        <input type="submit" value = "Submit"/>
        </form>

        <h4 style={{textAlign:'center'}}>If Already Registered <span style={{color:"red"}} onClick={() => {navigate('/login')}}> Click Here</span> to Login</h4>
    </div>
    </div>
    </>
}