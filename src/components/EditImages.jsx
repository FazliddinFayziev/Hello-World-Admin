import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from '../context/context';

const EditImages = () => {
    const { singleItem, setSingleItem } = useGlobalContext();
    const { images } = singleItem
    return (
        <>
            <div className='upload__image__title'>
                <h4>Product Images</h4>
            </div>
            <div className='product-images-container'>
                <div className='main-image'>
                    <img src={images && images[0]} alt='Main Product' />
                </div>
                <div className='other-images'>
                    {images && images.map((image, index) => (
                        <div className='image-item' key={index}>
                            <img src={image} alt='product-image' />
                            {images.length > 1 && (
                                <div className='delete__edit__image'>
                                    <AiFillDelete fontSize={15} color='red' />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default EditImages