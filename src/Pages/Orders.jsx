import React, { useEffect, useState } from 'react';
import { Error, Loading, SmallFooter } from "../components";
import { FcNext } from 'react-icons/fc';
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../style/orders.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../container/getOrdersSlice';

const Orders = () => {
    const { loading, orders, error } = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders())
    }, [])

    const [openIndex, setOpenIndex] = useState(null);

    const handleOpen = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <>
            <div className='orders__main__title'>
                <h3>All Orders</h3>
            </div>
            <div className="orders-container">
                {orders.map((order, index) => (
                    <div className="order-item" key={index}>
                        <div className='closed__orders'>
                            <div className={`${order.shipped ? 'closed__orders__dot' : 'closed__orders__dot false'}`}></div>
                            <AiOutlineShoppingCart color='#3078ff' fontSize={20} />
                            <p>Order - {index + 1}</p>
                            <p>{order.time}</p>
                            <FcNext
                                onClick={() => handleOpen(index)}
                                className={`orders__icon ${openIndex === index ? 'rotate' : ''}`}
                                fontSize={20}
                            />
                        </div>
                        {openIndex === index && (
                            <div className='open__orders'>
                                <p className='order__item__title'> • Products</p>
                                <div className="order-summary">
                                    <div className="order-products">
                                        {order.cardItems.map((item, itemIndex) => (
                                            <div className="product-item" key={itemIndex}>
                                                <img
                                                    src={item.image ? item.image : 'https://res.cloudinary.com/dcrolfqsj/image/upload/v1697507852/Question_mark__black_.svg_pn5kuf.png'}
                                                    alt={item.name}
                                                    onError={(e) => {
                                                        e.target.src = 'https://res.cloudinary.com/dcrolfqsj/image/upload/v1697507852/Question_mark__black_.svg_pn5kuf.png';
                                                    }}
                                                />
                                                <p>{item.name}</p>
                                                <p>{item.price} UZS</p>
                                                <p>{item.choosenSize}</p>
                                                <p>Quantity: {item.quantity}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="total-price-container">
                                        <div className="total-price">
                                            <p>Total Price: <span>{order.totalPrice} UZS</span></p>
                                        </div>
                                    </div>
                                </div>
                                <p className='order__item__title'> • User Info</p>
                                <div className="order-details">
                                    <p className='order__details__info'>Name:</p>
                                    <p>{order.userInfo[0].userName}</p>
                                    <p className='order__details__info'>Phone Number:</p>
                                    <p>{order.userInfo[0].phoneNumber}</p>
                                    <p className='order__details__info'>Address:</p>
                                    <p>{order.userInfo[0].avenue}</p>
                                    <p>{order.userInfo[0].address}</p>
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

export default Orders;
