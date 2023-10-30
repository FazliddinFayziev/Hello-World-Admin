import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';

const EditDescription = ({ user }) => {
    const { singleItem, setSingleItem } = useGlobalContext();
    const { descuz, descru, desceng } = singleItem;
    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        setEditMode(false);
    };

    return (
        <div className='edit-description-container'>
            <h1>Edit Descriptions</h1>
            <div className='description-box'>
                <h2>Description (Uzb)</h2>
                {editMode ? (
                    <textarea
                        value={descuz}
                        onChange={(e) => setSingleItem({ ...singleItem, descuz: e.target.value })}
                        rows={4}
                        placeholder='Enter description in Uzbek'
                    />
                ) : (
                    <p>{descuz}</p>
                )}
            </div>
            <div className='description-box'>
                <h2>Description (Ru)</h2>
                {editMode ? (
                    <textarea
                        value={descru}
                        onChange={(e) => setSingleItem({ ...singleItem, descru: e.target.value })}
                        rows={4}
                        placeholder='Enter description in Russian'
                    />
                ) : (
                    <p>{descru}</p>
                )}
            </div>
            <div className='description-box'>
                <h2>Description (Eng)</h2>
                {editMode ? (
                    <textarea
                        value={desceng}
                        onChange={(e) => setSingleItem({ ...singleItem, desceng: e.target.value })}
                        rows={4}
                        placeholder='Enter description in English'
                    />
                ) : (
                    <p>{desceng}</p>
                )}
            </div>
            {user?.data?.admin && (
                editMode ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={handleEdit}>Edit</button>
                )
            )}
        </div>
    );
}

export default EditDescription;
