import React, { useState } from 'react';
import { SmallFooter } from "../components";
import { FcNext } from 'react-icons/fc';
import { AiOutlineShoppingCart, AiFillDelete, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import '../style/manage.css';

const orders = [
    {
        cardItems: [
            {
                name: "Javascript T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685875052/yellow-small_gom0xq.jpg",
                price: 200000,
                quantity: 2
            },
            {
                name: "React T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685871121/react-small_gvqick.jpg",
                price: 200000,
                quantity: 2
            },
            {
                name: "React T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685871121/react-small_gvqick.jpg",
                price: 200000,
                quantity: 2
            },
        ],
        totalPrice: 400,
        userInfo: {
            userName: "Fazliddin",
            phoneNumber: "990194515",
            avenue: "Toshkent",
            address: "Sergeli-7 Ibrat Mahalla"
        },
        order: true
    },
    {
        cardItems: [
            {
                name: "Javascript T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685875052/yellow-small_gom0xq.jpg",
                price: 200000,
                quantity: 2
            },
            {
                name: "React T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685871121/react-small_gvqick.jpg",
                price: 200000,
                quantity: 2
            },
            {
                name: "React T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685871121/react-small_gvqick.jpg",
                price: 200000,
                quantity: 2
            },
        ],
        totalPrice: 400,
        userInfo: {
            userName: "Fazliddin",
            phoneNumber: "990194515",
            avenue: "Toshkent",
            address: "Sergeli-7 Ibrat Mahalla"
        },
        order: false
    }
]

const Manage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleOpen = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <>
            <div className='manage__orders__main__title'>
                <h3>Manage Orders</h3>
            </div>
            <div className="manage__orders-container">
                {orders.map((order, index) => (
                    <div className="manage__order-item" key={index}>
                        <div className='manage__closed__orders'>
                            <div className='manage__closed__orders__delete'>
                                <AiFillDelete color='red' fontSize={20} />
                            </div>
                            <div className={`${order.order ? 'manage__closed__orders__dot' : 'manage__closed__orders__dot false'}`}></div>
                            <AiOutlineShoppingCart color='#3078ff' fontSize={20} />
                            <p>Order - {index + 1}</p>
                            <p>08/18/2023</p>
                            <FcNext
                                onClick={() => handleOpen(index)}
                                className={`manage__orders__icon ${openIndex === index ? 'rotate' : ''}`}
                                fontSize={20}
                            />
                        </div>
                        {openIndex === index && (
                            <div className='manage__open__orders'>
                                <p className='manage__order__item__title'> • Products</p>
                                <div className="manage__order-summary">
                                    <div className="manage__order-products">
                                        {order.cardItems.map((item, itemIndex) => (
                                            <div className="manage__product-item" key={itemIndex}>
                                                <img src={item.image} alt={item.name} />
                                                <p>{item.name}</p>
                                                <p>{item.price} UZS</p>
                                                <p>Elegant</p>
                                                <p>Quantity: {item.quantity}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="manage__total-price-container">
                                        <div className="manage__total-price">
                                            <p>Total Price: <span>{order.totalPrice} UZS</span></p>
                                        </div>
                                    </div>
                                </div>
                                <p className='manage__order__item__title'> • User Info</p>
                                <div className="manage__order-details">
                                    <p className='manage__order__details__info'>Name:</p>
                                    <p>{order.userInfo.userName}</p>
                                    <p className='manage__order__details__info'>Phone Number:</p>
                                    <p>{order.userInfo.phoneNumber}</p>
                                    <p className='manage__order__details__info'>Address:</p>
                                    <p>{order.userInfo.avenue}</p>
                                    <p>{order.userInfo.address}</p>
                                </div>
                                <div className='manage__access__container'>
                                    <div className='manage__access'>
                                        <AiOutlineCheck color='green' fontSize={20} />
                                    </div>
                                    <div className='manage__access'>
                                        <AiOutlineClose color='red' fontSize={20} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <SmallFooter />
        </>
    );
};

export default Manage;
