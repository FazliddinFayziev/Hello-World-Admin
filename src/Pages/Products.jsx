import React from 'react';
import "../style/products.css";
import { SmallFooter } from "../components";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";


const ProductCard = ({ productId, imageSrc, name, category, price }) => {
    return (
        <Link to={`${productId}`} className="product-card">
            <img src={imageSrc} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-category">{category}</p>
            <p className="product-price">{price} UZS</p>
        </Link>
    );
}

const Products = () => {
    const products = [
        { id: 1, imageSrc: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685875053/stucture-small_yxx8ls.jpg', name: 'Cyber Security', category: 'Humble', price: 19.99 },
        { id: 2, imageSrc: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685875052/yellow-small_gom0xq.jpg', name: 'JavaScript', category: 'Humble', price: 29.99 },
        { id: 3, imageSrc: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685871121/react-small_gvqick.jpg', name: 'React JS', category: 'Simple', price: 24.99 },
        { id: 4, imageSrc: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685875052/green-small_fsz9iy.jpg', name: 'Cyber Attack', category: 'Simple', price: 14.99 },
        { id: 5, imageSrc: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685870848/node-small_shyobp.jpg', name: 'Node JS', category: 'Simple', price: 14.99 },
        { id: 6, imageSrc: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685871120/js-small_v3ucsq.jpg', name: 'Javascript', category: 'Simple', price: 14.99 },
    ];

    return (
        <>
            <div className='main__title__section'>
                <h1>All Products</h1>
            </div>
            <div className='all__products__search__container'>
                <div className='all__products__search'>
                    <input type="text" placeholder='Search Product . . .' />
                </div>
            </div>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        productId={product.id}
                        imageSrc={product.imageSrc}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                    />
                ))}
            </div>
            <SmallFooter />
        </>
    );
}

export default Products