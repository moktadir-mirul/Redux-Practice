import { Component } from "react";
import PersonCompo from "../Component/personCompo";
import CounterAndNote from "../Component/CounterWithClass";
import AllPostClass from "../Component/AllPostwithClass";
import AllUserClass from "../Component/AllUserClass";




class ClassComponent extends Component {
    render () {
        return (
            <div>
               <h1 className="posthd" style={{color:'darkblue'}}>Class Component Example.</h1>
               <PersonCompo name={"Mirul"} age={32} />
               <hr />
               <CounterAndNote />
               <hr />
               <AllPostClass />
               <hr />
               <AllUserClass name={"user"}/>
            </div>
        )
    }
}

export default ClassComponent;