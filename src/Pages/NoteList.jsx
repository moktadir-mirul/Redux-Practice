import { useState } from "react";

export const NoteList = () => {

    const [noteTitle, setNoteTitle] = useState('');


    return(
        <div>
            <form >
                <input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
                <button className="btnC">Add Note</button>
            </form>
            {notes?.map((note) => (
                <li key={note.id}>
                    <span>{note.title}</span>
                    <button className="btnC">Delete</button>
                </li>
            ))}
        </div>
    )

}