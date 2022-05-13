import { SIGN_UP, LOGIN_USER } from '../ActionTypes/UserAction';

const initState = {
    user: [],
    isLoggedIn: false,
    isLoading: false,
    isError: false
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                isLoading: false,
                isError: false
            }
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                isLoading: false,
                isError: false
            }
        default:
            return state;
    }
}

