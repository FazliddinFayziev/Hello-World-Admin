import React, { useState } from 'react';

const EditDescription = () => {
    const [editMode, setEditMode] = useState(false);
    const [descUz, setDescUz] = useState('Hello');
    const [descRu, setDescRu] = useState('');
    const [descEn, setDescEn] = useState('');

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        // You can save the descriptions using API calls or state management here
        console.log('Description (Uzbek):', descUz);
        console.log('Description (Russian):', descRu);
        console.log('Description (English):', descEn);
        setEditMode(false);
    };

    return (
        <div className='edit-description-container'>
            <h1>Edit Descriptions</h1>
            <div className='description-box'>
                <h2>Description (Uzbek)</h2>
                {editMode ? (
                    <textarea
                        value={descUz}
                        onChange={(e) => setDescUz(e.target.value)}
                        rows={4}
                        placeholder='Enter description in Uzbek'
                    />
                ) : (
                    <p>{descUz}</p>
                )}
            </div>
            <div className='description-box'>
                <h2>Description (Russian)</h2>
                {editMode ? (
                    <textarea
                        value={descRu}
                        onChange={(e) => setDescRu(e.target.value)}
                        rows={4}
                        placeholder='Enter description in Russian'
                    />
                ) : (
                    <p>{descRu}</p>
                )}
            </div>
            <div className='description-box'>
                <h2>Description (English)</h2>
                {editMode ? (
                    <textarea
                        value={descEn}
                        onChange={(e) => setDescEn(e.target.value)}
                        rows={4}
                        placeholder='Enter description in English'
                    />
                ) : (
                    <p>{descEn}</p>
                )}
            </div>
            {editMode ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
        </div>
    );
}

export default EditDescription;
