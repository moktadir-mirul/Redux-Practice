import { configureStore } from "@reduxjs/toolkit";
import { ShopReducer } from "./ShopReducer";
import { CounterReducer } from "./CounterReducer";


const allReducer = {counter: CounterReducer,
                    shop: ShopReducer
                    }

export const store = configureStore({
    reducer: allReducer
});