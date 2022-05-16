import { FETCH_DATA } from '../ActionTypes/ProductAction';

const initState = {
    products: [],
    filteredProducts: [],
    isLoading: false,
    isError: false,
    productById: {},
    cart: 0,
}

export const productReducer = (state = initState, action) => { switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                products: [...action.payload],
                loading: false,
                isError: false
            }
     
    
        default:
            return state;
    }
}

