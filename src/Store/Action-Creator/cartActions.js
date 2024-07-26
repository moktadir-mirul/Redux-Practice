// export const addItem = (product) => {
//     return {type: 'ADD-ITEM', payload: product}
// }

// export const removeItem = (ItemID) => {
//     return {type:'REMOVE-ITEM', payload: ItemID}
// }

// export const modifyQuantity = (object) => {
//     return {type: 'MODIFY-ITEM', payload: object}
// }

// export const clearCart = () => {
//     return {type: 'CLEAR-CART'}
// }

// Redux toolkit actions

import { createAction } from "@reduxjs/toolkit";

const addItem = createAction('ADD-ITEM');
const removeItem = createAction('REMOVE-ITEM')
const modifyQuantity = createAction('MODIFY-ITEM')
const clearCart = createAction('CLEAR-CART')

export {addItem, removeItem, modifyQuantity, clearCart};