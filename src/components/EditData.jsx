import React, { useState } from 'react';

const EditData = () => {
    const [editMode, setEditMode] = useState(false);
    const [productName, setProductName] = useState('Product Name');
    const [category, setCategory] = useState('Simple');
    const [price, setPrice] = useState('100');
    const [option, setOption] = useState('Option');

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
    };

    return (
        <div className='edit-data-container'>
            <h1>Edit Data</h1>
            <div className='data-fields'>
                <div className='data-field'>
                    <label>Product Name</label>
                    {editMode ? (
                        <input type='text' value={productName} onChange={(e) => setProductName(e.target.value)} />
                    ) : (
                        <p>{productName}</p>
                    )}
                </div>
                <div className='data-field'>
                    <label>Category</label>
                    {editMode ? (
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value='Simple'>Simple</option>
                            <option value='Humble'>Humble</option>
                            <option value='Elegant'>Elegant</option>
                        </select>
                    ) : (
                        <p>{category}</p>
                    )}
                </div>
                <div className='data-field'>
                    <label>Price</label>
                    {editMode ? (
                        <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
                    ) : (
                        <p>{price} UZS</p>
                    )}
                </div>
                <div className='data-field'>
                    <label>Option</label>
                    {editMode ? (
                        <input type='text' value={option} onChange={(e) => setOption(e.target.value)} />
                    ) : (
                        <p>{option}</p>
                    )}
                </div>
            </div>
            <div className='edit_data_buttons'>
                {editMode ? (
                    <button className='save-button' onClick={handleSaveClick}>Save Data</button>
                ) : (
                    <button className='edit-button' onClick={handleEditClick}>Edit Data</button>
                )}
            </div>
        </div>
    );
}

export default EditData;
