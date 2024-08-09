import { Component } from "react";
import { withFetch } from "../Higher Order Component/WithFetch";


class AllPostClass extends Component{

    // componentDidUpdate(state, props) {
    //     if(state.isLoading == this.state.isLoading){
    //     console.log("state not state");}
    // }
    // componentDidCatch() {}= used for triggering while logical error happened
    // componentWillUnmount(){}= used for triggering when a component item is deleted
    render() {
        const {isLoading, result: posts, errorMessage} = this.props;
        return(
            <div>
                <h1 className="posthd" style={{color:'green'}}>All Posts</h1>
                {isLoading &&  <h1>Data is Loading.....</h1>}
                {errorMessage && <h1>Data Loading Failed!!!</h1>}
                {posts?.map((post) => (
                    <li key={post.id} style={{listStyle:"none", fontWeight: 'bold'}}>
                        <h3>{post.title}</h3>
                    </li>
                ))}
            </div>
        )
    }
}

export default withFetch('http://localhost:3000/posts', [], AllPostClass);