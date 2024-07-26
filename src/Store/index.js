import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CounterReducer } from "./CounterReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter:CounterReducer,
    shop:ShopReducer,
});

export const store = createStore(allReducer);