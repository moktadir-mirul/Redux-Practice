import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CounterReducer } from "./CounterReducer";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { PostReducer } from "./PostReducer";
import { PersonsReducer } from "./PersonsReducer";
import { thunk } from "redux-thunk";

const allReducer = combineReducers({
    counter:CounterReducer,
    shop:ShopReducer,
    posts: PostReducer,
    users: PersonsReducer
});

export const store = createStore(allReducer, applyMiddleware(thunk));