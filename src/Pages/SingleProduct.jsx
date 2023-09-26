import React, { useEffect } from 'react';
import '../style/singleproduct.css';
import { EditData, EditDescription, EditImages, EditSizeColor, Error, Loading, SmallFooter } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../container/singleProductSlice';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const SingleProduct = () => {
    const { setSingleItem } = useGlobalContext();
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { sLoading, sProduct, sError } = useSelector((state) => state.singleProduct)

    useEffect(() => {
        dispatch(fetchSingleProduct(productId));
    }, [productId]);

    useEffect(() => {
        if (sProduct) {
            setSingleItem({
                name: sProduct.name,
                price: sProduct.price,
                option: sProduct.option,
                category: sProduct.category,
                size: sProduct.size,
                images: sProduct.images,
                colors: sProduct.colors,
                descuz: sProduct.descuz,
                descru: sProduct.descru,
                desceng: sProduct.desceng,
            });
        }
    }, [sProduct]);

    if (sLoading) {
        return <Loading />
    }

    if (sError) {
        return <Error />
    }

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
