import React from 'react';
import '../style/singleproduct.css';
import EditImages from '../components/EditImages';

const SingleProduct = () => {
    return (
        <div className='single-product-container'>
            <div className='main__title__section'>
                <h3>Single Product</h3>
            </div>
            <EditImages />
        </div>
    );
}

export default SingleProduct;
