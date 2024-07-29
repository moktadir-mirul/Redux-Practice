import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";


export const Users = () => {
    const dispatch = useDispatch();
    const {users, isLoading, errorMessage} = useSelector((storeState) => storeState.users);

    useEffect(() => {
        dispatch('fake-user-action')
    }, [])
    if(isLoading === true) {
        return (
            <h1 style={{color:"blue", textAlign:"center", fontSize:"25px", marginTop: '40px'}}>Data is Loading...</h1>
        )
    }
    return (
        <div>
            {errorMessage && <h1 style={{color:"crimson", textAlign:"center", fontSize:"30px", marginTop: '40px'}}>!!!Warning: Data Loading has Failed!!!</h1>}
            {
                users?.map((user) => (
                    <li key={user.id}>
                        <h1>{user?.name}</h1>
                        <p>{user?.username}:{user?.email}</p>
                        <p>{user?.address.street}, {user?.address.suite}, {user?.address.city}.</p>
                    </li>
                ))
            }
        </div>
    )
}