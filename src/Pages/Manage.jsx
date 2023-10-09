import React, { useEffect, useState } from 'react';
import { Cart, Error, Loading, SmallFooter } from "../components";
import { FcNext } from 'react-icons/fc';
import { AiOutlineShoppingCart, AiFillDelete, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import '../style/manage.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, updateOrders, deleteOrder } from '../container/getOrdersSlice';

const Manage = () => {

    const [showCart, setShowCart] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const { loading, orders, error, refetch } = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders())
    }, [refetch])

    const updateOrder = (id) => {
        dispatch(updateOrders({ id }))
    }

    const deleteMyOrder = (id) => {
        setShowCart(false)
        dispatch(deleteOrder({ id }))
    }

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

    if (showCart) {
        return <Cart setShowCart={setShowCart} deleteId={deleteId} deleteMyOrder={deleteMyOrder} />
    }

    return (
        <>
            <div className='manage__orders__main__title'>
                <h3>Manage Orders</h3>
            </div>
            <div className="manage__orders-container">
                {orders.map((order, index) => (
                    <div className="manage__order-item" key={index}>
                        <div className='manage__closed__orders'>
                            <div onClick={() => { setShowCart(true); setDeleteId(order._id) }} className='manage__closed__orders__delete'>
                                <AiFillDelete color='red' fontSize={20} />
                            </div>
                            <div className={`${order.shipped ? 'manage__closed__orders__dot' : 'manage__closed__orders__dot false'}`}></div>
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
                                                <img
                                                    src={item.image ? item.image : 'https://res.cloudinary.com/dcrolfqsj/image/upload/v1697507852/Question_mark__black_.svg_pn5kuf.png'}
                                                    alt={item.name}
                                                    onError={(e) => {
                                                        e.target.src = 'https://res.cloudinary.com/dcrolfqsj/image/upload/v1697507852/Question_mark__black_.svg_pn5kuf.png';
                                                    }}
                                                />
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
                                    <p>{order.userInfo[0].userName}</p>
                                    <p className='manage__order__details__info'>Phone Number:</p>
                                    <p>{order.userInfo[0].phoneNumber}</p>
                                    <p className='manage__order__details__info'>Address:</p>
                                    <p>{order.userInfo[0].avenue}</p>
                                    <p>{order.userInfo[0].address}</p>
                                </div>
                                <div className='manage__access__container'>
                                    {!order.shipped ? (
                                        <div onClick={() => updateOrder(order._id)} className='manage__access'>
                                            <AiOutlineCheck color='green' fontSize={20} />
                                        </div>
                                    ) : (
                                        <div onClick={() => updateOrder(order._id)} className='manage__access'>
                                            <AiOutlineClose color='red' fontSize={20} />
                                        </div>
                                    )}
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
