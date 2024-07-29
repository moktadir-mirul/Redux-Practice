import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";




export const PostsHeading = () => {
    const {posts, isLoading, errorMessage} = useSelector((storeState) => storeState.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch('fake-post-action')
    }, [])

    if(isLoading === true) {
        return(
            <h1 style={{color:"blue", textAlign:"center", fontSize:"25px", marginTop: '40px'}}>Data is Loading...</h1>

        )
    }
    return (
        
        <div>
            {errorMessage && <h1 style={{color:"crimson", textAlign:"center", fontSize:"30px", marginTop: '40px'}}>!!!Warning: Data Loading has Failed!!!</h1>}
            <h2>
                {
                    posts?.map((post) => (
                        <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    ))
                }
            </h2>
        </div>
    )

}