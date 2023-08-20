import React, { useState } from 'react';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';
import '../style/notes.css';
import { SmallFooter } from '../components';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [noteInput, setNoteInput] = useState('');
    const currentDate = new Date();
    const [editingNoteIndex, setEditingNoteIndex] = useState(null);

    const handleAddNote = () => {
        if (noteInput) {
            setNotes([...notes, { text: noteInput, date: currentDate }]);
            setNoteInput('');
        }
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    const handleEditNote = (index) => {
        setEditingNoteIndex(index);
        setNoteInput(notes[index].text);
    };

    const handleSaveNote = () => {
        const updatedNotes = [...notes];
        updatedNotes[editingNoteIndex].text = noteInput;
        setNotes(updatedNotes);
        setEditingNoteIndex(null);
        setNoteInput('');
    };

    return (
        <>
            <div className="notes-container">
                <div className='notes__input__container'>
                    <div className="notes-input">
                        <input
                            type="text"
                            placeholder="Write a note . . ."
                            value={noteInput}
                            onChange={(e) => setNoteInput(e.target.value)}
                        />
                    </div>
                    {editingNoteIndex !== null ? (
                        <button className='save-button' onClick={handleSaveNote}>
                            <FaSave />
                        </button>
                    ) : (
                        <button className='add-button' onClick={handleAddNote}>
                            Add
                        </button>
                    )}
                </div>
                <div className="notes-list">
                    {notes.map((note, index) => (
                        <div className='note-item-container' key={index}>
                            <div className="note-item">
                                <p>{note.text}</p>
                            </div>
                            <div className="note-buttons">
                                {editingNoteIndex === index ? (
                                    <button className='save-button' onClick={handleSaveNote}>
                                        <FaSave />
                                    </button>
                                ) : (
                                    <>
                                        <button className='edit-button-notes' onClick={() => handleEditNote(index)}>
                                            <FaEdit />
                                        </button>
                                        <button className='delete-button-notes' onClick={() => handleDeleteNote(index)}>
                                            <FaTrash />
                                        </button>
                                    </>
                                )}
                            </div>
                            <p className="note-date">{note.date.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </div>
            <SmallFooter />
        </>
    );
};

export default Notes;
