import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from '../context/context';

const SizeColorInput = () => {
    const { addProduct, setAddProduct } = useGlobalContext();
    const { colors, size } = addProduct;
    const [colorInput, setColorInput] = useState('');
    const [sizeInput, setSizeInput] = useState('');

    const handleAddColor = () => {
        if (colorInput) {
            setAddProduct({ ...addProduct, colors: [...colors, colorInput] });
            setColorInput('');
        }
    };

    const handleAddSize = () => {
        if (sizeInput) {
            setAddProduct({ ...addProduct, size: [...size, sizeInput] });
            setSizeInput('');
        }
    };

    const handleDeleteColor = (index) => {
        const updatedColors = colors.filter((_, i) => i !== index);
        setAddProduct({ ...addProduct, colors: updatedColors });
    };

    const handleDeleteSize = (index) => {
        const updatedSizes = size.filter((_, i) => i !== index);
        setAddProduct({ ...addProduct, size: updatedSizes });
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
                    {colors.length > 0 && colors.map((color, index) => (
                        <div key={index} className='color__item'>
                            <span style={{ backgroundColor: color }}></span>
                            <button onClick={() => handleDeleteColor(index)}><AiFillDelete /></button>
                        </div>
                    ))}
                </div>
                <div className='size__grid'>
                    {size.length > 0 && size.map((s, index) => (
                        <div key={index} className='size__item'>
                            <span>{s}</span>
                            <button onClick={() => handleDeleteSize(index)}><AiFillDelete /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SizeColorInput;
