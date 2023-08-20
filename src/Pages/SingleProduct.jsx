import React from 'react';
import '../style/singleproduct.css';
import { EditData, EditDescription, EditImages, EditSizeColor, SmallFooter } from '../components';

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

            <div className='save__delete__product'>
                <div className='save__delete__product__buttons'>
                    <button style={{ backgroundColor: "#0095ff" }}>Save All</button>
                    <button style={{ backgroundColor: "#ff0000" }}>
                        Delete
                    </button>
                </div>
            </div>

            <SmallFooter />
        </>
    );
}

export default SingleProduct;
