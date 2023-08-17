import React from 'react';
import "../style/addproduct.css";
import { Description, ImageUpload, InputUpload, SizeColorInput, SmallFooter } from '../components';
import { AiOutlineUpload } from "react-icons/ai";

// images

// name
// category
// price
// option

// color
// size

// descuz
// descru
// desceng




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
                    <h1>Upload Color & Size</h1>
                </div>
                <SizeColorInput />
            </section>

            <section>
                <div className='upload__image__title'>
                    <h1>Descriptions</h1>
                </div>
                <Description />
            </section>

            <div className='add__product__upload__button'>
                <button type='submit'>
                    Upload Product
                    <AiOutlineUpload className='upload__icon' fontSize={25} />
                </button>
            </div>

            <SmallFooter />
        </>
    )
}

export default AddProduct