// console.log(urlToSyntax)
import axios from 'axios';
import { FETCH_DATA } from "../ActionTypes/ProductAction"




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





export {  mydata};
