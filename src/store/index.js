import { combineReducers, createStore } from "redux";

import productsReducer from "./reducers/products.reducer";
import categoryReducer from "./reducers/category.reducer";



const RootReducer = combineReducers({
    category: categoryReducer,
    products: productsReducer,
})

export default createStore(RootReducer)