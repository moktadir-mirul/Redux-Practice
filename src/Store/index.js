import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./CounterReducer";
import { cartReducer } from "./ShopReducer";


const allReducer = {counter: CounterReducer,
                    shop: cartReducer
                    }

export const store = configureStore({
    reducer: allReducer
});