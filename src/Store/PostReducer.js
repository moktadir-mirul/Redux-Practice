
const initialState = {
                        posts: [],
                        isLoading: true,
                        errorMessage: ''
                    }


export const PostReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'posts/fetchStarted' : {
            return{
                ...state, isLoading: true,
            }
        }
        case 'posts/fetchDone' : {
            return {
                ...state,
                isLoading: false,
                posts: action.payload,
                errorMessage: ''
            }
        }
        case 'posts/fetchFailed' : {
            return {
                ...state, 
                isLoading: false,
                errorMessage: action.payload
            }
        }
        default: {
            return {
                state
            }
        }
    }
}