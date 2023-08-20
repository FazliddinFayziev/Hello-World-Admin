import React from 'react'
import { Link } from 'react-router-dom';

const Data = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685798280/small-js_ruslcz.png',
        category: "Simple",
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685856151/react-small-removebg-preview_ueegk6.png',
        category: "Humble",
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685856258/small-removebg-preview_zedakx.png',
        category: "Elegant",
    },
];

const Banners = () => {
    return (
        <>
            <div className='all__banners'>
                {Data.map((banner, index) => {
                    return (
                        <Link to={`${banner.id}`} key={index} className='single__banner__container'>
                            <div className='banner__image__container'>
                                <div className='single__banner__image'>
                                    <img src={`${banner.image}`} alt="banner-image" />
                                </div>
                            </div>
                            <div className='banner__text'>
                                <p>{banner.category}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Banners