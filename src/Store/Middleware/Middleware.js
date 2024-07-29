
export const ShopMiddleware = (store) => (next) => (action) => {
    if( typeof action === 'function') {
        action(store.dispatch);
        return;
    }
    next(action);
}

export const fetchPosts = (dispatch) => {
    dispatch({type: 'posts/fetchStarted'});
    fetch('http://localhost:3000/posts')
    .then((res) => res.json())
    .then((data) => {
        dispatch({type: 'posts/fetchDone', payload: data})
    })
    .catch((error) => {
        dispatch({type: 'posts/fetchFailed', payload: error.message})
    })
}

export const fetchUsers = (dispatch) => {
    dispatch({type: 'user/fetchStarted'});
    fetch('http://localhost:3000/users')
    .then((res) => res.json())
    .then((data) => {
        dispatch({type: 'user/fetchDone', payload: data})
    })
    .catch((error) => {
        dispatch({type: 'user/fetchFailed', payload: error.message})
    })
}