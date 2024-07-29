
const initState = {
    users: [],
    isLoading: true,
    errorMessage: ''
}


export const PersonsReducer = (state = initState, action) => {
    switch(action.type) {
        case "user/fetchStarted" : {
            return {
                ...state,
                isLoading: true
            }
        }
        case "user/fetchDone" : {
            return {
                ...state,
                isLoading: false,
                users: action.payload,
                errorMessage: ''
            }
        }
        case "user/fetchFailed" : {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
                users: []
            }
        }
        default: {
            return {state}
        }
    }
}