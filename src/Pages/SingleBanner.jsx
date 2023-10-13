import React, { useEffect, useState } from 'react';
import '../style/singlebanner.css';
import { SmallFooter } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleBanner } from '../container/bannerSlice';

const SingleBanner = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState('Title Text');
    const [number, setNumber] = useState('123');
    const [category, setCategory] = useState('Category Name');
    const [link, setLink] = useState('https://example.com');

    const { bannerId } = useParams();
    const dispatch = useDispatch();
    const { loading, singleBanner, error } = useSelector((state) => state.banner)


    useEffect(() => {
        dispatch(fetchSingleBanner({ id: bannerId }))
    }, [])

    useEffect(() => {
        console.log(singleBanner)
    }, [])

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

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
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        ) : (
                            <span>{title}</span>
                        )}
                    </div>
                    <div className='detail-item'>
                        <h2 className='detail-title'>Number:</h2>
                        {isEditing ? (
                            <input
                                type='text'
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        ) : (
                            <span>{number}</span>
                        )}
                    </div>
                    <div className='detail-item'>
                        <h2 className='detail-title'>Category:</h2>
                        {isEditing ? (
                            <input
                                type='text'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        ) : (
                            <span>{category}</span>
                        )}
                    </div>
                    <div className='detail-item'>
                        <h2 className='detail-title'>Link:</h2>
                        {isEditing ? (
                            <input
                                type='text'
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        ) : (
                            <a href={link}>{link}</a>
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
