import axios from 'axios';
import { SIGN_UP, LOGIN_USER } from "../ActionTypes/UserAction";



const signupUser = (data) => {
    return {
        type: SIGN_UP,
        payload: data
    }
}

const signupUserData = (
    firstName,
    lastName,
    email,
    password,
) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `${`https://first-cry-db.herokuapp.com/data`}/users/signup`,
            data: {
                firstName,
                lastName,
                email,
                password
            }
        });
        let userData = res.data.user;
        dispatch(signupUser(userData));
        localStorage.setItem('userId', JSON.stringify(userData._id));
        localStorage.setItem("isUserLogedIn", true);
        localStorage.setItem("userName", JSON.stringify(userData.firstName + " " + userData.lastName));
    }
    catch (error) {
        console.log(error);
    }
}

const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    }
}

const loginUserData = (
    email,
    password
) => async (dispatch) => {


    try {
        const res = await axios({
            method: 'POST',
            url: `${`https://first-cry-db.herokuapp.com/data`}/users/login`,
            data: {
                email,
                password
            }
        });
        let userData = res.data.user;
        dispatch(loginUser(userData));
     
        localStorage.setItem('userId', JSON.stringify(userData._id));
        localStorage.setItem("isUserLogedIn", true);
        localStorage.setItem("userName", JSON.stringify(userData.firstName + " " + userData.lastName));
    }
    catch (error) {
        console.log(error.message);
    }
}

const addProductTocartData = (
    productId,
    userId
) => async (dispatch) => {
        try {
        const res = await axios({
            method: 'PATCH',
            url: `${`https://first-cry-db.herokuapp.com/data`}/users/cart/add`,
            data: {
                productId,
                userId
            }
        });
        let userData = res.data.data;
      
        dispatch(loginUser(userData));
       
    }
    catch (error) {
        console.log(error);
    }
}

const removeProductFromCart = (
    productId,
    userId
) => async (dispatch) => {
   
    try {
        const res = await axios({
            method: 'PATCH',
            url: `${`https://first-cry-db.herokuapp.com/data`}/users/cart/remove`,
            data: {
                productId,
                userId
            }
        });
        let userData = res.data.data;
        dispatch(loginUser(userData));
        
       
    }
    catch (error) {
        console.log(error);
    }
}

export {
    signupUserData,
    loginUserData,
    addProductTocartData,
    removeProductFromCart
}