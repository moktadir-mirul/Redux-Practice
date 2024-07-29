
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