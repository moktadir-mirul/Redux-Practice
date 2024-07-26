// export const ShopReducer = (state=[], action) => {
//     switch(action.type) {
//         case 'ADD-ITEM': {
//             const product = state.find((item) => item.id === action.payload.id)
//             return product ? state.map((item) => {
//                 if(item.id === action.payload.id) {
//                     return {...item, quantity: item.quantity+1}
//                 }
//                 return item;
//             }): [...state, {...action.payload, quantity: 1}]
//         }
//         case 'REMOVE-ITEM': {
//             return state.filter((item) => (
//                 item.id !== action.payload
//             ))
//         }
//         case 'MODIFY-ITEM': {
//             const updatedArr = state.map((item) => {
//                 if(item.id === action.payload.id) {
//                     return {...item, quantity: action.payload.quantity}
//                 }
//                 return item;
//             })
//             return updatedArr;
//         }
//         case 'CLEAR-CART': {
//             return [];
//         }
//         default: {
//             return state;
//         }
//     }
// }




// CreateReducer Start imported from redux-toolkit

import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer([], (builder) => {
    builder
    .addCase('ADD-ITEM', (state, action) => {
        const product = state.find((item) => item.id === action.payload.id)
    product ? product.quantity++ : state.push({...action.payload, quantity: 1})
    })
    .addCase('REMOVE-ITEM', (state, action) => {
        return state.filter((item) => item.id !== action.payload)
    })
    .addCase('MODIFY-ITEM', (state, action) => {
        const product = state.find((item) => item.id === action.payload.id)
        product.quantity = action.payload.quantity;
    })
    .addCase('CLEAR-CART', () => {return []})
})