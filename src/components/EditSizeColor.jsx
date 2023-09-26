import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from '../context/context';

const EditSizeColor = () => {
    const { singleItem, setSingleItem } = useGlobalContext();
    const { size, colors } = singleItem
    const [colorInput, setColorInput] = useState('');
    const [sizeInput, setSizeInput] = useState('');

    const handleAddColor = () => {
        if (colorInput) {
            setSingleItem({ ...singleItem, colors: [...colors, colorInput] });
            setColorInput('');
        }
    };

    const handleAddSize = () => {
        if (sizeInput) {
            setSingleItem({ ...singleItem, size: [...size, sizeInput] });
            setSizeInput('');
        }
    };

    const handleDeleteColor = (index) => {
        const updatedColors = colors.filter((_, i) => i !== index);
        setSingleItem({ ...singleItem, colors: updatedColors });
    };

    const handleDeleteSize = (index) => {
        const updatedSizes = size.filter((_, i) => i !== index);
        setSingleItem({ ...singleItem, size: updatedSizes });
    };

    return (
        <div className='edit__array__input__upload'>
            <div className='edit__title'>
                <h1>Color & Size</h1>
            </div>
            <div className='edit__size__color'>
                <div className='edit__size__color__input__box'>
                    <input
                        type="text"
                        placeholder="Enter color"
                        value={colorInput}
                        onChange={(e) => setColorInput(e.target.value)}
                    />
                    <button onClick={handleAddColor}>Add</button>
                </div>
                <div className='edit__size__color__input__box'>
                    <input
                        type="text"
                        placeholder="Enter size"
                        value={sizeInput}
                        onChange={(e) => setSizeInput(e.target.value)}
                    />
                    <button onClick={handleAddSize}>Add</button>
                </div>
            </div>
            <div className='edit__color__size__grid'>
                <div className='edit__color__grid'>
                    {colors && colors.map((color, index) => (
                        <div key={index} className='edit__color__item'>
                            <span style={{ backgroundColor: color }}></span>
                            {colors.length > 1 && (
                                <button onClick={() => handleDeleteColor(index)}><AiFillDelete /></button>
                            )}
                        </div>
                    ))}
                </div>
                <div className='edit__size__grid'>
                    {size && size.map((s, index) => (
                        <div key={index} className='edit__size__item'>
                            <span>{s}</span>
                            {size.length > 1 && (
                                <button onClick={() => handleDeleteSize(index)}><AiFillDelete /></button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EditSizeColor;
