import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBanner } from '../container/bannerSlice';
import Loading from './Loading';
import Error from './Error';

const Banners = () => {

    const dispatch = useDispatch();
    const { loading, banners, error } = useSelector((state) => state.banner);

    useEffect(() => {
        dispatch(fetchBanner())
    }, [])

    if (loading) {
        return <Loading />
    }

    if (error) {
        <Error />
    }

    return (
        <>
            <div className='all__banners'>
                {banners.map((banner, index) => {
                    return (
                        <Link to={`${banner._id}`} key={index} className='single__banner__container'>
                            <div className='banner__image__container'>
                                <div className='single__banner__image'>
                                    <img src={`${banner.images && banner.images[0]}`} alt="banner-image" />
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