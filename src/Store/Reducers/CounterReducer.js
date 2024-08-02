

export const CounterReducer = (state=0, action) => {
    switch(action.type) {
        case 'ADD': {
            return state+action.payload;
        }
        case 'MINUS': {
            return state-action.payload;
        }
        case 'MULTI': {
            return state*action.payload;
        }
        case 'DIVIDE': {
            return state/action.payload;
        }
        default: {
            return state;
        }
    }
}