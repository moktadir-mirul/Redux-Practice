export const addItem = (product) => {
    return {type: 'ADD-ITEM', payload: product}
}

export const removeItem = (ItemID) => {
    return {type:'REMOVE-ITEM', payload: ItemID}
}

export const modifyQuantity = (object) => {
    return {type: 'MODIFY-ITEM', payload: object}
}

export const clearCart = () => {
    return {type: 'CLEAR-CART'}
}