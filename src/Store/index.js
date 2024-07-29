import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CounterReducer } from "./CounterReducer";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { ShopMiddleware } from "./Middleware/Middleware";
import { PostReducer } from "./PostReducer";

const allReducer = combineReducers({
    counter:CounterReducer,
    shop:ShopReducer,
    posts: PostReducer
});

export const store = createStore(allReducer, applyMiddleware(ShopMiddleware));