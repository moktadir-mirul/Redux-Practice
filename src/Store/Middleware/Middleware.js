// import { useDispatch } from "react-redux";
// const dispatch = useDispatch()
export const ShopMiddleware = (store) => (next) => (action) => {

    if(action === 'fake-post-action') {
        store.dispatch({type: 'posts/fetchStarted'});
        fetch('http://localhost:300/posts')
        .then((res) => res.json())
        .then((data) => {
            store.dispatch({type: 'posts/fetchDone', payload: data})
        })
        .catch((error) => {
            store.dispatch({type: 'posts/fetchFailed', payload: error.message})
        })
        return;
    }
    next(action);
}