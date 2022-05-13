import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { productReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";
import { handleCart } from "./reducer";

export const rootReducer = combineReducers({
  product: productReducer,
  handleCart: handleCart,
  user: userReducer,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
