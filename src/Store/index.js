import { createStore } from "@reduxjs/toolkit";
import { ShopReducer } from "./ShopReducer";



export const ShopStore = createStore(ShopReducer);