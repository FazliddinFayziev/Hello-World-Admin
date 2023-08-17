import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";

const SizeColorInput = () => {
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [colorInput, setColorInput] = useState('');
    const [sizeInput, setSizeInput] = useState('');

    const handleAddColor = () => {
        if (colorInput) {
            setColors([...colors, colorInput]);
            setColorInput('');
        }
    };

    const handleAddSize = () => {
        if (sizeInput) {
            setSizes([...sizes, sizeInput]);
            setSizeInput('');
        }
    };

    const handleDeleteColor = (index) => {
        const updatedColors = colors.filter((_, i) => i !== index);
        setColors(updatedColors);
    };

    const handleDeleteSize = (index) => {
        const updatedSizes = sizes.filter((_, i) => i !== index);
        setSizes(updatedSizes);
    };

    return (
        <div className='array__input__upload'>
            <div className='upload__image__title'>
                <h1>Color & Size</h1>
            </div>
            <div className='size__color'>
                <div className='size__color__input__box'>
                    <input
                        type="text"
                        placeholder="Enter color"
                        value={colorInput}
                        onChange={(e) => setColorInput(e.target.value)}
                    />
                    <button onClick={handleAddColor}>Add</button>
                </div>
                <div className='size__color__input__box'>
                    <input
                        type="text"
                        placeholder="Enter size"
                        value={sizeInput}
                        onChange={(e) => setSizeInput(e.target.value)}
                    />
                    <button onClick={handleAddSize}>Add</button>
                </div>
            </div>
            <div className='color__size__grid'>
                <div className='color__grid'>
                    {colors.map((color, index) => (
                        <div key={index} className='color__item'>
                            <span style={{ backgroundColor: color }}></span>
                            <button onClick={() => handleDeleteColor(index)}><AiFillDelete /></button>
                        </div>
                    ))}
                </div>
                <div className='size__grid'>
                    {sizes.map((size, index) => (
                        <div key={index} className='size__item'>
                            <span>{size}</span>
                            <button onClick={() => handleDeleteSize(index)}><AiFillDelete /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SizeColorInput;
