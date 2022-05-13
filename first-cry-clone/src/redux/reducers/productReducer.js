import { FETCH_DATA, FILTER_DATA, UPDATE_DATA, FETCH_BY_ID } from '../ActionTypes/ProductAction';

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
        case FILTER_DATA:
            return {
                ...state,
               
                products: [...action.payload],
                loading: false,
                isError: false
            }
        case FETCH_BY_ID:
            return {
                ...state,
                productById: { ...action.payload },
                loading: false,
                isError: false
            }

        case UPDATE_DATA:
            return {
                ...state,
                cart: action.payload,
            }
        default:
            return state;
    }
}

