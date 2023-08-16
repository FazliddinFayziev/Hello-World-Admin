import React from 'react';
import "../style/addproduct.css";
import { ImageUpload, InputUpload, SizeColorInput } from '../components';

const AddProduct = () => {
    return (
        <>
            <div className='main__title__section'>
                <h1>Add Product</h1>
            </div>

            <section>
                <div className='upload__image__title'>
                    <h1>Upload Image</h1>
                </div>
                <ImageUpload />
            </section>

            <section>
                <div className='upload__image__title'>
                    <h1>Upload Data</h1>
                </div>
                <InputUpload />
            </section>

            <section>
                <div className='upload__image__title'>
                    <h1>Upload Data</h1>
                </div>
                <SizeColorInput />
            </section>
        </>
    )
}

export default AddProduct