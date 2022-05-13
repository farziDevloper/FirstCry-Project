// console.log(urlToSyntax)
import axios from 'axios';
import { FETCH_DATA, FILTER_DATA, UPDATE_DATA, FETCH_BY_ID } from "../ActionTypes/ProductAction"

const urlToSyntax = process.env.REACT_APP_MY_URL;


const getProductsData = (data) => {
    return {
        type: FETCH_DATA,
        payload: data
    }
}

const mydata = () => async (dispatch) => {
    try {
        const response = await axios.get (`https://first-cry-db.herokuapp.com/data`);
        dispatch(getProductsData(response.data));      
    }
    catch (error) {
        console.log(error);
    }
}


const filterProducts = (data) => {
    return {
        type: FILTER_DATA,
        payload: data
    }
}

const filterProductsData = (
    name,
    price,
    discount,
    brand,
    age,
    color,
    material,
    subCategory,
    gender) => async (dispatch) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `${urlToSyntax}/products/filters`,
                params: {
                    name,
                    price,
                    discount,
                    brand,
                    age,
                    color,
                    material,
                    subCategory,
                    gender
                }
            });
            dispatch(filterProducts(res.data));
          
        } catch (err) {
            console.log(err);
        }
    }

const getProductById = (data) => {
    return {
        type: FETCH_BY_ID,
        payload: data
    }
}

const fetchProductById = (id) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${'https://first-cry-db.herokuapp.com/data'}/products/${id}`
        });
        dispatch(getProductById(res.data));
      
    } catch (err) {
        console.log(err);
    }
}

const updateCartNumber = (data) => {
    return {
        type: UPDATE_DATA,
        payload: data
    }
}


export { updateCartNumber, mydata, filterProductsData, getProductById, fetchProductById };
