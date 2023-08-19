import React from 'react';
import '../style/singleproduct.css';
import { EditData, EditDescription, EditImages, EditSizeColor } from '../components';

const SingleProduct = () => {
    return (
        <>
            <div className='single-product-container'>
                <div className='main__title__section'>
                    <h3>Single Product</h3>
                </div>
                <EditImages />
            </div>
            <EditData />
            <EditSizeColor />
            <EditDescription />
        </>
    );
}

export default SingleProduct;
