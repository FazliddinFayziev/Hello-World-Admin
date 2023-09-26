import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';
import { formatPrice } from '../functions/functions';

const EditData = () => {
    const { singleItem, setSingleItem } = useGlobalContext();
    const { name, category, option, price } = singleItem
    const [editMode, setEditMode] = useState(false);

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
                        <input type='text' value={name} onChange={(e) => setSingleItem({ ...singleItem, name: e.target.value })} />
                    ) : (
                        <p>{name}</p>
                    )}
                </div>
                <div className='data-field'>
                    <label>Category</label>
                    {editMode ? (
                        <select value={category} onChange={(e) => setSingleItem({ ...singleItem, category: e.target.value })}>
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
                        <input type='text' value={price} onChange={(e) => setSingleItem({ ...singleItem, price: e.target.value })} />
                    ) : (
                        <p>{price && formatPrice(price)} UZS</p>
                    )}
                </div>
                <div className='data-field'>
                    <label>Option</label>
                    {editMode ? (
                        <input type='text' value={option} onChange={(e) => setSingleItem({ ...singleItem, option: e.target.value })} />
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
