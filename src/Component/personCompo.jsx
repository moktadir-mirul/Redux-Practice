import { Component } from "react";


export default class PersonCompo extends Component {
    render() {
        const {name, age} = this.props;
        return(
            <div>
                <h2>My Name is {name}</h2>
                <p>This is a simple information. I live in Dhaka. My age is {age}</p>
            </div>
        )
    }
}