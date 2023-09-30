import React from 'react';
import "../style/addproduct.css";
import { Description, Error, ImageUpload, InputUpload, Loading, SizeColorInput, SmallFooter } from '../components';
import { AiOutlineUpload } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalContext } from '../context/context';
import { uploadProduct } from '../container/uploadSingleProduct';


const AddProduct = () => {
    const { addProduct, setAddProduct } = useGlobalContext();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.uploadProduct)
    const handleUploadProduct = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', addProduct.name);
        formData.append('price', addProduct.price);
        formData.append('option', addProduct.option);
        formData.append('category', addProduct.category);
        formData.append('descuz', addProduct.descuz);
        formData.append('descru', addProduct.descru);
        formData.append('desceng', addProduct.desceng);
        for (let i = 0; i < addProduct.colors.length; i++) {
            formData.append('colors[]', addProduct.colors[i]);
        }
        for (let i = 0; i < addProduct.size.length; i++) {
            formData.append('size[]', addProduct.size[i]);
        }
        for (let i = 0; i < addProduct.images.length; i++) {
            formData.append('images', addProduct.images[i]);
        }

        dispatch(uploadProduct({ data: formData }));
        setAddProduct({ name: '', price: '', option: '', category: '', size: [], images: [], colors: [], descuz: '', descru: '', desceng: '', })
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

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
                <button onClick={handleUploadProduct} type='submit'>
                    Upload Product
                    <AiOutlineUpload className='upload__icon' fontSize={25} />
                </button>
            </div>

            <SmallFooter />
        </>
    )
}

export default AddProduct