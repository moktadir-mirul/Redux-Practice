import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./Reducers/CounterReducer";
import { ShopSlice } from "./Reducers/ShopReducer";
import { ShopApi } from "./QueryFeatures/ApiQuery";


const allReducer = {counter: CounterReducer,
                    shop: ShopSlice.reducer,
                    [ShopApi.reducerPath] : ShopApi.reducer,
                    }

export const store = configureStore({
    reducer: allReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ShopApi.middleware)
});