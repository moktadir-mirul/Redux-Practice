import { Component } from "react";


export default class CounterAndNote extends Component{ 

    state = {
        counter: 1,
        noteTitle: '',
        notes: []
    }

    increaseHandler = () => {
        const {counter} = this.state;
        this.setState({...this.state, counter: counter + 1})
    }

    decreaseHandler = () => {
        const {counter} = this.state;
        this.setState({...this.state, counter: counter - 1})
    }
    changeHandler = (event) => {
        this.setState({...this.state, noteTitle: event.target.value})
    }

    submitHandler = (event) => {
        const {noteTitle, notes} = this.state;
        event.preventDefault();
        if (noteTitle.trim() === '') return alert('Please enter a note name');
        const newNote = {
            id: Date.now() + '',
            title: noteTitle        
        }
        this.setState({...this.state, notes: [...notes, newNote], noteTitle: ''});
    }
    removeHandler= (noteID) => {
        const {notes} = this.state;
        const updatedArray = notes.filter((note) => note.id !== noteID);
        this.setState({...this.state, notes: updatedArray})
    }
    render() {
        const {counter, noteTitle, notes} = this.state;
        return(
            <div>
                <h1 className="posthd" style={{color:'blue'}}>The value of counter is {counter}</h1>
                <br />
                <button onClick={this.increaseHandler}>Increase by 1</button>
                <button onClick={this.decreaseHandler}>Decrease By 1</button>
                <hr />
                <h1 className="posthd" style={{color:'brown'}}>Note Taking App</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={noteTitle} onChange={this.changeHandler} />
                    <button type="submit">Add Note</button>
                </form>
                <ul>
                    {notes?.map((note) => (
                        <li key={note.id}>
                            <span>{note.title}</span>
                            <button onClick={() => this.removeHandler(note.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}