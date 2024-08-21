import { Component } from "react";
import { withFetch } from "../Higher Order Component/WithFetch";



class AllUserClass extends Component {

    render() {
        const {isLoading, result: users, errorMessage} = this.props;
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

export default withFetch('http://localhost:3000/users', [], AllUserClass);