import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import "./Signup.css"
import axios from "axios"


export const SignUp = () => {
    const [user,setUser] = useState({
        name: '',     
        email: '',
        password: '',
        reEnterPassword:''

    })

    const handleChange = (event) => {
        const {name , value }   = event.target
        setUser({
            ...user,
            [name] : value
        })
    }

// async function  registerUser(e){
//     e.preventDefault()
//    const response = await fetch (`http://localhost:7215/api/register`, {
//             method: 'POST',
//             headers: {
//                 contentType: 'application/json'
//             },
//            body: JSON.stringify({
//             name,
//             email,
//             password,
//             reEnterPassword,
//         })
//     } )
//     const data = await response.json(); 
//     console.log(data);
// }

const Register = (e) => {
    e.preventDefault();
    const {name, email, password , reEnterPassword} = user
    if(name && email && password && (password === reEnterPassword)){
        // alert("Data Posted to Register")
        axios.post('http://localhost:7557/register', user )
        .then((response) => {
            alert(response.data.message)
            navigate('/login')
        })
    }
    else {
        alert ("Invalid data posted")
    }
}
     


    const navigate = useNavigate();
    return <>
     <div className="login">
    <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="home" />
    <div>
      
        <form  >
            {console.log(user)}
        <input type="text" name='name' value={user.name} placeholder="Name" onChange={handleChange} className="signUpBox" required />
        <br/>
        <input type="email" name='email' value={user.email} placeholder="Email" onChange={handleChange}  className="signUpBox" required/>
        <br/>
      
        <input type="password" name='password' onChange={handleChange}  value={user.password} placeholder="Password" className="signUpBox" required/>
        <br/>
        <input type="password" name='reEnterPassword' onChange={handleChange}   value={user.reEnterPassword} placeholder="Re-Enter Password" className="signUpBox"required />
        <br/>
        {/* <input type="submit" value = "Submit"  /> */}
        <Button className="inputBox Button" onClick={Register}>Register</Button>
        </form>

        <h4 style={{textAlign:'center'}}>If Already Registered <span style={{color:"red"}} onClick={() => {navigate('/login')}}> Click Here</span> to Login</h4>
    </div>
    </div>
    </>
}