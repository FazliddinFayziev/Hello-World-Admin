import React, { useEffect, useState } from 'react';
import '../style/singlebanner.css';
import { Error, Loading, SmallFooter } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleBanner } from '../container/bannerSlice';
import { useGlobalContext } from '../context/context';

const SingleBanner = () => {
    const { singleBanner, setSingleBanner } = useGlobalContext();
    const [isEditing, setIsEditing] = useState(false);

    const { bannerId } = useParams();
    const dispatch = useDispatch();
    const { loading, sBanner, error } = useSelector((state) => state.banner)

    useEffect(() => {
        dispatch(fetchSingleBanner({ id: bannerId }))
    }, [bannerId])

    useEffect(() => {
        if (sBanner) {
            setSingleBanner({
                id: sBanner._id,
                category: sBanner.category,
                images: sBanner.images,
                link: sBanner.link,
                number: sBanner.number,
                text: sBanner.text
            })
        }
    }, [bannerId, sBanner])

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <div className='single-banner-container'>
            <div className='banner-image'>
                {
                    isEditing ? (
                        <label className="custom-file-input">
                            <input
                                type="file"
                                accept="image/*"
                            // onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                            />
                            <span>Choose Image</span>
                        </label>
                    ) : (
                        <img src={singleBanner.images && singleBanner.images[0]} alt='Banner' />
                    )
                }
            </div>
            <div className='banner-details'>
                <div className='detail-grid'>
                    <div className='detail-item'>
                        <h2 className='detail-title'>Title:</h2>
                        {isEditing ? (
                            <input
                                type='text'
                                value={singleBanner.text}
                                onChange={(e) => setSingleBanner({ ...singleBanner, text: e.target.value })}
                            />
                        ) : (
                            <span>{singleBanner.text}</span>
                        )}
                    </div>
                    <div className='detail-item'>
                        <h2 className='detail-title'>Number:</h2>
                        {isEditing ? (
                            <input
                                type='text'
                                value={singleBanner.number}
                                onChange={(e) => setSingleBanner({ ...singleBanner, number: e.target.value })}
                            />
                        ) : (
                            <span>{singleBanner.number}</span>
                        )}
                    </div>
                    <div className='detail-item'>
                        <h2 className='detail-title'>Category:</h2>
                        {isEditing ? (
                            <input
                                type='text'
                                value={singleBanner.category}
                                onChange={(e) => setSingleBanner({ ...singleBanner, category: e.target.value })}
                            />
                        ) : (
                            <span>{singleBanner.category}</span>
                        )}
                    </div>
                    <div className='detail-item'>
                        <h2 className='detail-title'>Link:</h2>
                        {isEditing ? (
                            <input
                                type='text'
                                value={singleBanner.link}
                                onChange={(e) => setSingleBanner({ ...singleBanner, link: e.target.value })}
                            />
                        ) : (
                            <a href={singleBanner.link}>{singleBanner.link}</a>
                        )}
                    </div>
                </div>
                <div className='image-buttons'>
                    <button className='edit-button' onClick={handleEditToggle}>
                        {isEditing ? 'Save Banner' : 'Edit Banner'}
                    </button>
                </div>
            </div>
            <SmallFooter />
        </div>
    );
};

export default SingleBanner;
