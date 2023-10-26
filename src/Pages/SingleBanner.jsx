import React, { useEffect, useState } from 'react';
import '../style/singlebanner.css';
import { Error, Loading, SmallFooter } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { AiFillDelete } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { fetchAndEditBanner, fetchSingleBanner } from '../container/bannerSlice';
import { useGlobalContext } from '../context/context';

const SingleBanner = () => {
    const { singleBanner, setSingleBanner } = useGlobalContext();
    const { images } = singleBanner
    const [isEditing, setIsEditing] = useState(false);
    const [singleImage, setSingleImage] = useState([])
    const [selectedImage, setSelectedImage] = useState(null);
    const [chosenImagePreview, setChosenImagePreview] = useState(null);

    const { bannerId } = useParams();
    const dispatch = useDispatch();
    const { loading, sBanner, refetch, error } = useSelector((state) => state.banner)

    useEffect(() => {
        dispatch(fetchSingleBanner({ id: bannerId }))
    }, [bannerId, refetch])

    useEffect(() => {
        if (sBanner) {
            setSingleBanner({
                id: sBanner._id,
                category: sBanner.category,
                imageUrls: sBanner.images,
                images: [],
                link: sBanner.link,
                number: sBanner.number,
                text: sBanner.text
            })
        }
    }, [bannerId, sBanner, refetch])

    const handleImageUpload = () => {
        if (selectedImage) {
            setSingleBanner({ ...singleBanner, images: [...images, selectedImage] });
            setSingleImage([...singleImage, chosenImagePreview])
            setSelectedImage(null);
            setChosenImagePreview(null);
        }
    };

    const handleImageDelete = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setSingleImage(updatedImages)
        setSingleBanner({ ...singleBanner, images: updatedImages });
    };

    const handleImageSelection = (e) => {
        const imageFile = e.target.files[0];
        setSelectedImage(imageFile);
        setChosenImagePreview(URL.createObjectURL(imageFile));
    };

    const handleDelete = (index) => {
        const updatedImages = singleBanner.imageUrls.filter((_, i) => i !== index);
        setSingleBanner({ ...singleBanner, imageUrls: updatedImages });
    }

    // Editing single Product

    const saveAll = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('category', singleBanner.category);
        formData.append('link', singleBanner.link);
        formData.append('number', singleBanner.number);
        formData.append('text', singleBanner.text);

        for (let i = 0; i < singleBanner.images.length; i++) {
            formData.append('images', singleBanner.images[i]);
        }
        for (let i = 0; i < singleBanner.imageUrls.length; i++) {
            formData.append('imageUrls[]', singleBanner.imageUrls[i]);
        }

        dispatch(fetchAndEditBanner({ id: bannerId, data: formData }));
        setIsEditing(false)
        setSingleImage([])
        setSelectedImage(null)
        setChosenImagePreview(null)
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
                <div className='single-product-container'>
                    <div>
                        {/* All banner images */}

                        <div style={{ marginBottom: '50px' }}>
                            <div className='upload__image__title'>
                                <h4>All Banner Images</h4>
                            </div>
                            <div className='product-images-container'>
                                <div className='main-image'>
                                    <img src={singleBanner.imageUrls && singleBanner.imageUrls[0]} alt='Main Product' />
                                </div>
                                <div className='other-images'>
                                    {singleBanner.imageUrls && singleBanner.imageUrls.map((image, index) => (
                                        <div className='image-item' key={index}>
                                            <img src={image} alt='product-image' />
                                            {singleBanner.imageUrls.length > 1 && (
                                                <div onClick={() => handleDelete(index)} className='delete__edit__image'>
                                                    <AiFillDelete fontSize={15} color='red' />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Choose Image Upload */}

                    <div className="image-upload-container">
                        <div className="chosen-image-preview">
                            {chosenImagePreview && <img src={chosenImagePreview} alt="Chosen" />}
                        </div>
                        <div className="image-upload-main">
                            <label className="custom-file-input">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageSelection}
                                />
                                <span>Choose Image</span>
                            </label>
                            <button onClick={handleImageUpload}>Upload</button>
                        </div>
                        <div className="uploaded-images">
                            {singleImage.length > 0 && singleImage.map((imageUrl, index) => (
                                <div className="uploaded-image" key={index}>
                                    <img src={imageUrl} alt={`Uploaded ${index}`} />
                                    <button onClick={() => handleImageDelete(index)}>
                                        <MdDelete />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

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
                    {!isEditing && (
                        <button className='edit-button' onClick={() => setIsEditing(true)}>
                            Edit Banner Text
                        </button>
                    )}
                </div>
                <div className='image-buttons'>
                    <button onClick={saveAll} className='edit-button'>
                        Save All Data
                    </button>
                </div>
            </div>
            <SmallFooter />
        </div>
    );
};

export default SingleBanner;
