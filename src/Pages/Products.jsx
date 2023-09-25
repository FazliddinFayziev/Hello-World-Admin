import React, { useEffect, useState } from 'react';
import "../style/products.css";
import { Error, Loading, SmallFooter } from "../components";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../container/productSlice';
import { formatPrice } from '../functions/functions';
import { AiOutlineSearch } from "react-icons/ai";


const ProductCard = ({ productId, imageSrc, name, category, price }) => {
    return (
        <Link to={`${productId}`} className="product-card">
            <img src={imageSrc} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-category">{category}</p>
            <p className="product-price">{formatPrice(price)} UZS</p>
        </Link>
    );
}

const Products = () => {

    // Fetching Logic Products

    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.products)
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const filteredProducts = products.filter((product) => {
        if (searchTerm === "") {
            return true;
        } else {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
    });

    if (loading) {
        return <Loading loading={loading} />
    }

    if (error) {
        return <Error />
    }

    return (
        <>
            <div className='main__title__section'>
                <h1>All Products</h1>
            </div>
            <div className='all__products__search__container'>
                <div className='all__products__search'>
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search Product . . .' />
                </div>
            </div>
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            productId={product.id}
                            imageSrc={product.images}
                            name={product.name}
                            category={product.category}
                            price={product.price}
                        />
                    ))
                ) : (
                    <div className='product__search__logo'>
                        No Product
                        <AiOutlineSearch style={{ marginLeft: '10px' }} fontSize={30} />
                    </div>
                )}
            </div>
            <SmallFooter />
        </>
    );
}

export default Products