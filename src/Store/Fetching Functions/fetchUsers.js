
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