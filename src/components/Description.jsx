import React from 'react'

const Description = () => {
    return (
        <div className="text-inputs-container">
            <div className="text-input">
                <label htmlFor="descuz">Ma'lumot kiriting (UZ)</label>
                <textarea id="descuz" rows="5" placeholder="Ma'lumot kiriting (UZ)"></textarea>
            </div>
            <div className="text-input">
                <label htmlFor="descru">Description (RU)</label>
                <textarea id="descru" rows="5" placeholder="Введите описание (RU)"></textarea>
            </div>
            <div className="text-input">
                <label htmlFor="desceng">Description (EN)</label>
                <textarea id="desceng" rows="5" placeholder="Enter description (ENG)"></textarea>
            </div>
        </div>
    );
}

export default Description