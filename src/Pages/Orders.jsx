import React from 'react';
import '../style/orders.css';

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
            }
        ],
        totalPrice: 400,
        userInfo: {
            userName: "Fazliddin",
            phoneNumber: "990194515",
            avenue: "Toshkent",
            address: "Sergeli-7 Ibrat Mahalla"
        }
    }
]

const Orders = () => {
    return (
        <div className="orders-container">
            {orders.map((order, index) => (
                <div className="order-item" key={index}>
                    <p className='order__item__title'> • Products</p>
                    <div className="order-summary">
                        <div className="order-products">
                            {order.cardItems.map((item, itemIndex) => (
                                <div className="product-item" key={itemIndex}>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>{item.price} UZS</p>
                                    <p>Elegant</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            ))}
                        </div>

                        <div className="total-price-container">
                            <div className="total-price">
                                <p>Total Price: <span>{order.totalPrice}  UZS</span></p>
                            </div>
                        </div>

                        <p className='order__item__title'> • User Info</p>

                        <div className="order-details">
                            <p className='order__details__info'>Name:</p>
                            <p>{order.userInfo.userName}</p>
                            <p className='order__details__info'>Phone Number:</p>
                            <p>{order.userInfo.phoneNumber}</p>
                            <p className='order__details__info'>Address:</p>
                            <p>{order.userInfo.avenue}</p>
                            <p>{order.userInfo.address}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Orders;
