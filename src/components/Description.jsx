import React from 'react'
import { useGlobalContext } from '../context/context';

const Description = () => {
    const { addProduct, setAddProduct } = useGlobalContext();
    const { descuz, descru, desceng } = addProduct
    return (
        <div className="text-inputs-container">
            <div className="text-input">
                <label htmlFor="descuz">Ma'lumot kiriting (UZ)</label>
                <textarea value={descuz} onChange={(e) => setAddProduct({ ...addProduct, descuz: e.target.value })} id="descuz" rows="5" placeholder="Ma'lumot kiriting (UZ)"></textarea>
            </div>
            <div className="text-input">
                <label htmlFor="descru">Description (RU)</label>
                <textarea value={descru} onChange={(e) => setAddProduct({ ...addProduct, descru: e.target.value })} id="descru" rows="5" placeholder="Введите описание (RU)"></textarea>
            </div>
            <div className="text-input">
                <label htmlFor="desceng">Description (EN)</label>
                <textarea value={desceng} onChange={(e) => setAddProduct({ ...addProduct, desceng: e.target.value })} id="desceng" rows="5" placeholder="Enter description (ENG)"></textarea>
            </div>
        </div>
    );
}

export default Description