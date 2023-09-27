import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from '../context/context';

const EditImages = () => {
    const { singleItem, setSingleItem } = useGlobalContext();
    const { imageUrls } = singleItem

    const handleDelete = (index) => {
        const updatedImages = imageUrls.filter((_, i) => i !== index);
        setSingleItem({ ...singleItem, imageUrls: updatedImages });
    }
    return (
        <>
            <div className='upload__image__title'>
                <h4>Product Images</h4>
            </div>
            <div className='product-images-container'>
                <div className='main-image'>
                    <img src={imageUrls && imageUrls[0]} alt='Main Product' />
                </div>
                <div className='other-images'>
                    {imageUrls && imageUrls.map((image, index) => (
                        <div className='image-item' key={index}>
                            <img src={image} alt='product-image' />
                            {imageUrls.length > 1 && (
                                <div onClick={() => handleDelete(index)} className='delete__edit__image'>
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