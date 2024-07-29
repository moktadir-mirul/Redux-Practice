import { useSelector} from "react-redux"
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";




export const PostDetails = () => {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('')
    const {details} = useParams();
   
        useEffect(() => {
            fetch(`http://localhost:3000/posts/${details}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
                setIsLoading(false)
                setErrorMessage('')
            })
            .catch((err) => {
                setPost(null);
                setIsLoading(false);
                setErrorMessage(err.message)
            })
    }, [])
    if(isLoading === true) {
        return(
            <h1 style={{color:"blue", textAlign:"center", fontSize:"25px", marginTop: '40px'}}>Data is Loading...</h1>

        )
    }
    return (
        <div>
            {errorMessage && <h1 style={{color:"crimson", textAlign:"center", fontSize:"30px", marginTop: '40px'}}>!!!Warning: Data Loading has Failed!!!</h1>}
            <h1 style={{color:"cyan", textAlign:"center", fontSize:"30px", marginTop: '40px', width: '500px', height: 'auto', margin: '0 auto'}}>{post?.details}</h1>
            <p style={{color:"crimson", textAlign:"center", fontSize:"15px", marginTop: '20px', width: '500px', height: 'auto', margin: '0 auto'}}>{post?.body}</p>
            <li style={{color:"crimson", textAlign:"center", fontSize:"15px", marginTop: '30px', width: '500px', height: 'auto', margin: '0 auto'}}><Link to={"/posts"}>Go back</Link></li>
        </div>
    )
}