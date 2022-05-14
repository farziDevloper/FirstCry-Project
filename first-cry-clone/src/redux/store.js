import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { productReducer } from "./reducers/productReducer";

import { handleCart } from "./reducer";

export const rootReducer = combineReducers({
  product: productReducer,
  handleCart: handleCart,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
