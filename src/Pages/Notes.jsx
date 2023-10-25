import React, { useEffect, useState } from 'react';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';
import '../style/notes.css';
import { Cart, Error, Loading, SmallFooter } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndDeleteNote, fetchAndEditNote, fetchAndUploadNotes, fetchNotes } from '../container/noteSlice';
import { formatCurrentTime } from '../functions/functions';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [noteInput, setNoteInput] = useState('');
    const [noteId, setNoteId] = useState('');
    const [showCart, setShowCart] = useState(false);

    const [editingNoteId, setEditingNoteId] = useState(null);
    const dispatch = useDispatch();
    const { loading, allnotes, refetch, error } = useSelector((state) => state.note)

    useEffect(() => {
        dispatch(fetchNotes())
    }, [refetch])

    const addNote = () => {
        if (noteInput) {
            const formattedTime = formatCurrentTime()
            const data = { text: noteInput, time: formattedTime }
            dispatch(fetchAndUploadNotes({ data }))
            setNoteInput('');
        }
    }

    const deleteNote = (deleteId) => {
        setShowCart(false)
        dispatch(fetchAndDeleteNote({ id: deleteId }))
    }

    // const updateNotes = (id) => {
    //     setEditingNoteId(id)
    //     const data = {text}
    //     dispatch(fetchAndEditNote({id, data}))
    // }


    const handleEditNote = (id) => {
        setEditingNoteId(id);
        setNoteInput(notes[id].text);
    };

    const handleSaveNote = () => {
        // const updatedNotes = [...notes];
        // updatedNotes[editingNoteIndex].text = noteInput;
        // setNotes(updatedNotes);
        // setEditingNoteIndex(null);
        // setNoteInput('');
    };

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    if (showCart) {
        return <Cart setShowCart={setShowCart} deleteId={noteId} deleteFunction={deleteNote} />
    }

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
                    {editingNoteId !== null ? (
                        <button className='save-button' onClick={handleSaveNote}>
                            <FaSave />
                        </button>
                    ) : (
                        <button className='add-button' onClick={addNote}>
                            Add
                        </button>
                    )}
                </div>
                <div className="notes-list">
                    {allnotes.length > 0 ? (allnotes.map((note, index) => (
                        <div className='note-item-container' key={index}>
                            <div className="note-item">
                                <p>{note.text}</p>
                            </div>
                            <div className="note-buttons">
                                {editingNoteId === note._id ? (
                                    <button className='save-button' onClick={handleSaveNote}>
                                        <FaSave />
                                    </button>
                                ) : (
                                    <>
                                        <button className='edit-button-notes' onClick={() => handleEditNote(note._id)}>
                                            <FaEdit />
                                        </button>
                                        <button className='delete-button-notes' onClick={() => { setShowCart(true); setNoteId(note._id) }}>
                                            <FaTrash />
                                        </button>
                                    </>
                                )}
                            </div>
                            <p className="note-date">{note.time}</p>
                        </div>
                    ))) : (
                        <div className='center__no__notes'>
                            <p>There is no note</p>
                        </div>
                    )}
                </div>
            </div>
            <SmallFooter />
        </>
    );
};

export default Notes;
