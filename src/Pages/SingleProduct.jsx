import React, { useEffect, useState } from 'react';
import '../style/singleproduct.css';
import { Cart, EditData, EditDescription, EditImageUpload, EditImages, EditSizeColor, Error, Loading, SmallFooter } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../container/singleProductSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import { fetchAndEditProduct } from '../container/editProductSlice';
import { deleteProduct } from '../container/deleteProductSlice';

const SingleProduct = () => {
    const [showCart, setShowCart] = useState(false);
    const { user, singleItem, setSingleItem } = useGlobalContext();
    const { productId } = useParams();
    const { sLoading, sProduct, sError } = useSelector((state) => state.singleProduct)
    const { loading, error, refetch } = useSelector((state) => state.editProduct)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Getting single product

    useEffect(() => {
        dispatch(fetchSingleProduct(productId));
    }, [productId, refetch]);

    useEffect(() => {
        if (sProduct) {
            setSingleItem({
                name: sProduct.name,
                price: sProduct.price,
                option: sProduct.option,
                category: sProduct.category,
                size: sProduct.size,
                imageUrls: sProduct.images,
                images: [],
                colors: sProduct.colors,
                descuz: sProduct.descuz,
                descru: sProduct.descru,
                desceng: sProduct.desceng,
            });
        }
    }, [sProduct, refetch]);


    // Editing single Product

    const saveAll = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', singleItem.name);
        formData.append('price', singleItem.price);
        formData.append('option', singleItem.option);
        formData.append('category', singleItem.category);
        formData.append('descuz', singleItem.descuz);
        formData.append('descru', singleItem.descru);
        formData.append('desceng', singleItem.desceng);
        for (let i = 0; i < singleItem.colors.length; i++) {
            formData.append('colors[]', singleItem.colors[i]);
        }
        for (let i = 0; i < singleItem.size.length; i++) {
            formData.append('size[]', singleItem.size[i]);
        }
        for (let i = 0; i < singleItem.images.length; i++) {
            formData.append('images', singleItem.images[i]);
        }
        for (let i = 0; i < singleItem.imageUrls.length; i++) {
            formData.append('imageUrls[]', singleItem.imageUrls[i]);
        }

        dispatch(fetchAndEditProduct({ id: productId, data: formData }));
    };


    const handleDeleteProduct = (id) => {
        setShowCart(false)
        dispatch(deleteProduct({ id }));
        navigate('/products')
    }


    if (sLoading || loading) {
        return <Loading />
    }

    if (sError || error) {
        return <Error />
    }

    if (showCart) {
        return <Cart setShowCart={setShowCart} deleteId={productId} deleteFunction={handleDeleteProduct} />
    }

    return (
        <>
            <div className='single-product-container'>
                <div className='main__title__section'>
                    <h3>Single Product</h3>
                </div>
                <EditImages user={user} />
                <div className='upload__image__title'>
                    <h4>Upload New Images</h4>
                </div>
                {user?.data?.admin && (
                    <EditImageUpload />
                )}
            </div>
            <EditData user={user} />
            {user?.data?.admin && (
                <EditSizeColor />
            )}
            <EditDescription user={user} />

            {user?.data?.admin && (
                <div className='save__delete__product'>
                    <div className='save__delete__product__buttons'>
                        <button onClick={saveAll} style={{ backgroundColor: "#0095ff" }}>Save All</button>
                        <button onClick={() => setShowCart(true)} style={{ backgroundColor: "#ff0000" }}>
                            Delete
                        </button>
                    </div>
                </div>
            )}

            <SmallFooter />
        </>
    );
}

export default SingleProduct;
