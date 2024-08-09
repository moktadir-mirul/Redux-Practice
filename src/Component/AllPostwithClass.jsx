import { Component } from "react";
import { withFetch } from "../Higher Order Component/WithFetch";


class AllPostClass extends Component{
    state = {
        isLoading: true,
        posts:[],
        errorMessage: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => {this.setState({...this.state, isLoading: false, posts: data, errorMessage: ''})})
        .catch((err) => (this.setState({...this.state, isLoading: false, posts: [], errorMessage: err.message})))
    }

    // componentDidUpdate(state, props) {
    //     if(state.isLoading == this.state.isLoading){
    //     console.log("state not state");}
    // }
    render() {
        const {isLoading, posts, errorMessage} = this.state;
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

export default AllPostClass;;