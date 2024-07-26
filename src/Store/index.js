import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./CounterReducer";
import { ShopSlice } from "./ShopReducer";



const allReducer = {counter: CounterReducer,
                    shop: ShopSlice.reducer
                    }

export const store = configureStore({
    reducer: allReducer
});