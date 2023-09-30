import React from 'react';
import { useGlobalContext } from '../context/context';

const InputUpload = () => {
    const { addProduct, setAddProduct } = useGlobalContext();
    const { name, price, option, category } = addProduct
    return (
        <div className='input-upload-container'>
            <div className='name__input__upload'>

                <div className='name__input'>
                    <label htmlFor="">Product Name</label>
                    <input value={name} onChange={(e) => setAddProduct({ ...addProduct, name: e.target.value })} className='input__data' type="text" />
                </div>

                <div className='name__input'>
                    <label htmlFor="">Category</label>
                    <select value={category} onChange={(e) => setAddProduct({ ...addProduct, category: e.target.value })} className='input__data' name="" id="">
                        <option value="">Choose</option>
                        <option value="Simple">Simple</option>
                        <option value="Humble">Humble</option>
                        <option value="Elegant">Elegant</option>
                    </select>
                </div>

                <div className='name__input'>
                    <label htmlFor="">Price</label>
                    <input value={price} onChange={(e) => setAddProduct({ ...addProduct, price: e.target.value })} className='input__data' type="number" />
                </div>

                <div className='name__input'>
                    <label htmlFor="">Option</label>
                    <input value={option} onChange={(e) => setAddProduct({ ...addProduct, option: e.target.value })} className='input__data' type="text" />
                </div>

            </div>
        </div>
    )
}

export default InputUpload;
