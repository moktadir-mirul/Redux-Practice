import { Component } from "react";
import { withFetch } from "../Higher Order Component/WithFetch";



class AllUserClass extends Component {
    state = {
        isLoading: true,
        users: [],
        errorMessage: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/users')
        .then((res) => res.json())
        .then((data) => {this.setState({...this.state, isLoading: false, users: data, errorMessage: ''})})
        .catch((err) => (this.setState({...this.state, isLoading: false, users: [], errorMessage: err.message})))
    }

    render() {
        const {isLoading, users, errorMessage} = this.state;
        return (
            <div>
                <h1 className="posthd" style={{color:'crimson'}}>All User name</h1>
                {isLoading &&  <h1>Data is Loading.....</h1>}
                {errorMessage && <h1>Data Loading failed!!!</h1>}
                {users?.map((user) => (
                    <li key={user.id} style={{listStyle:"none"}}>
                        <h3 style={{fontWeight: 'bold'}}>{user.name}</h3>
                        <p><strong>Email:</strong> {user.email}, <strong>Phone:</strong> {user.phone}.</p>
                    </li>
                ))}               
            </div>
        )
    }
}

export default AllUserClass;