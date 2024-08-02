import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./Reducers/CounterReducer";
import { ShopSlice } from "./Reducers/ShopReducer";
import { ProductSlice } from "./Reducers/ProductThunk";


const allReducer = {counter: CounterReducer,
                    shop: ShopSlice.reducer,
                    product: ProductSlice.reducer
                    }

export const store = configureStore({
    reducer: allReducer
});