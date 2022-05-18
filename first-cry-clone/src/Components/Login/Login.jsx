import Button from '@mui/material/Button';
import './Login.css';
import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const Login = ({setLoginUser}) => {
    const navigate = useNavigate();
    const [user, setUser ]  = useState({
        email: "",
        password: "",
    })
        const handleChange = (event) => {
            const {name , value }   = event.target
            setUser({
                ...user,
                [name] : value
            })
        }

        const login = () => {
            axios.post(`http://localhost:7557/login`, user)
            .then(response =>{alert(response.data.message)
            setLoginUser(response.data.user)
            navigate("/")
            } )
        }


    return <>
    <div className="login">
        <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="home" />
        <div className="loginPage">
            <form>
                {console.log(user)}
            <input type ="text" name = "email" value={user.email} placeholder="Email " onChange={handleChange} className="inputBox"required/>
            <br/>
            <input type ="password" name='password' value ={user.password} onChange={handleChange} placeholder="Password" className="inputBox" required />
            <br/>
            <Button className="inputBox Button" onClick={() => {login()}}>Login</Button>
            </form>
            <h4 style={{textAlign:'center'}}>If Not Registered <span style={{color:"red",textDecoration:'underLine',cursor:'pointer' }} onClick={() => {navigate('/signup')}}> Click Here</span> to Register</h4>

        </div>
    </div>
    </>
}