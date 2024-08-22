import { useState } from "react";
import { useCreateANoteMutation, useGetAllNotesQuery, useRemoveANoteMutation } from "../Store/QueryFeatures/Endpoints/noteEndpoints";
import { useCreateNote, useGetAllNotes, useRemoveMutation, useUpdateMutation } from "../Hooks/useNotesHooks";


export const NoteList = () => {

    const [noteTitle, setNoteTitle] = useState('');

    const {isFetching, isError, error, notes} = useGetAllNotes();

    const createNote = useCreateNote();

    const deleteMutation = useRemoveMutation();

    const {updateMutation} = useUpdateMutation();

    const submitHandler = (event) => {
        event.preventDefault();
        if(noteTitle.trim() === '') return alert('Please enter a note name');
        const newNote = {title: noteTitle, isComplete: false};
        createNote.mutate(newNote);
        setNoteTitle('')
    }

    const removeHandler = (NoteID) => {
        deleteMutation.mutate(NoteID);
    }

    const updateHandler = (editedNote) => {
        const {id, ...rest} = editedNote;
        const updatedNote = {...rest, isComplete: !editedNote.isComplete};
        updateMutation.mutate({id, note: updatedNote});
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
                <button className="btnAll" type="submit">Add Note</button>
            </form>
            <ul>
                {notes?.map((note) => (
                    <li key={note.id}>
                        <input type="checkbox" onChange={() => updateHandler(note)} checked={note.isComplete} />
                        <span style={{fontSize: '30px'}}>{note.title}</span>
                        <button className="btnAll" onClick={() => removeHandler(note.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}