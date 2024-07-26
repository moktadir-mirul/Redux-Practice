
export const ShopReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD-ITEM': {
            const product = state.find((item) => item.id === action.payload.id)
            return product ? state.map((item) => {
                if(item.id === action.payload.id) {
                    return {...item, quantity: item.quantity+1}
                }
                return item;
            }): [...state, {...action.payload, quantity: 1}]
        }
        case 'REMOVE-ITEM': {
            return state.filter((item) => (
                item.id !== action.payload
            ))
        }
        case 'MODIFY-ITEM': {
            const updatedArr = state.map((item) => {
                if(item.id === action.payload.id) {
                    return {...item, quantity: action.payload.quantity}
                }
                return item;
            })
            return updatedArr;
        }
        case 'CLEAR-CART': {
            return [];
        }
        default: {
            return state;
        }
    }
}