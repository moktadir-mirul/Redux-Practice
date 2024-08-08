import { useState } from "react";
import { useCreateANoteMutation, useGetAllNotesQuery, useRemoveANoteMutation } from "../Store/QueryFeatures/Endpoints/noteEndpoints";;


export const NoteList = () => {

    const [noteTitle, setNoteTitle] = useState('');

    const {isFetching, isError, error, data: notes} = useGetAllNotesQuery();

    const [createNote] = useCreateANoteMutation();

    const [removeNote] = useRemoveANoteMutation();

    const submitHandler = (event) => {
        event.preventDefault();
        if(noteTitle.trim() === '') return alert('Please enter a note name');
        const newNote = {title: noteTitle};
        createNote(newNote);
        setNoteTitle('')
    }

    const removeHandler = (NoteID) => {
        removeNote(NoteID);
    }

    if (isFetching) {
        return <h2>Data is Loading......</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }

    return(
        <div style={{textAlign: "center", marginTop: '15px', width: '100%', height: '100vh', backgroundColor: "#D0B8A8", border: '2px solid yellow'}}>
            <form className="formArea" onSubmit={submitHandler} style={{margin: '20px'}}>
                <input type="text" className="inputField" placeholder='Enter the note name' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
                <button className="btnAll">Add Note</button>
            </form>
            {notes?.map((note) => (
                <li key={note.id}>
                    <span style={{fontSize: '30px'}}>{note.title}</span>
                    <button className="btnAll" onClick={() => removeHandler(note.id)}>Delete</button>
                </li>
            ))}
        </div>
    )

}