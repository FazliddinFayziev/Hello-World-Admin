import React from 'react';

const InputUpload = () => {
    return (
        <div className='input-upload-container'>
            <div className='name__input__upload'>

                <div className='name__input'>
                    <label htmlFor="">Product Name</label>
                    <input className='input__data' type="text" />
                </div>

                <div className='name__input'>
                    <label htmlFor="">Category</label>
                    <select className='input__data' name="" id="">
                        <option value="">Simple</option>
                        <option value="">Humble</option>
                        <option value="">Elegant</option>
                    </select>
                </div>

                <div className='name__input'>
                    <label htmlFor="">Price</label>
                    <input className='input__data' type="number" />
                </div>

                <div className='name__input'>
                    <label htmlFor="">Option</label>
                    <input className='input__data' type="text" />
                </div>

            </div>
        </div>
    )
}

export default InputUpload;
