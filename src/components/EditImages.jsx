import React from 'react';
import { AiFillDelete } from "react-icons/ai";

const images = [
    {
        id: 0,
        img: "https://res.cloudinary.com/djijmzccq/image/upload/v1685875052/yellow-small_gom0xq.jpg",
    },
    {
        id: 1,
        img: "https://res.cloudinary.com/djijmzccq/image/upload/v1685871121/react-small_gvqick.jpg",
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/djijmzccq/image/upload/v1685871120/python-small_kejrdm.jpg",
    },
];

const EditImages = () => {

    return (
        <>
            <div className='upload__image__title'>
                <h4>Product Images</h4>
            </div>
            <div className='product-images-container'>
                <div className='main-image'>
                    <img src='https://res.cloudinary.com/djijmzccq/image/upload/v1685870848/node-small_shyobp.jpg' alt='Main Product' />
                </div>
                <div className='other-images'>
                    {images.map((image) => (
                        <div className='image-item' key={image.id}>
                            <img src={image.img} alt='product-image' />
                            <div className='delete__edit__image'>
                                <AiFillDelete fontSize={15} color='red' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default EditImages