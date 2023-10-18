import React, { useState } from 'react';
import { FaInstagram, FaTelegram, FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaGlobe, FaYoutube } from 'react-icons/fa'; // Import the icons you need
import '../style/qrcode.css';
import { SmallFooter } from '../components';

const SingleQrCode = () => {
    const [isEditing, setIsEditing] = useState(false);

    const [data, setData] = useState({
        logoLetter: "F",
        text: "Hi, I am Fazliddin !",
        smallText: "I am Software engineer",
        instagram: "https://www.instagram.com/",
        telegram: "https://t.me/",
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        github: "https://github.com/",
        linkedIn: "https://www.linkedin.com/",
        website: "https://www.yourwebsite.com/",
        youtube: "https://www.youtube.com/",
    });

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e, field) => {
        setData({
            ...data,
            [field]: e.target.value,
        });
    };

    const renderIcons = () => {
        return (
            <div className="icon-container">
                <a href={data.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href={data.telegram} target="_blank" rel="noopener noreferrer">
                    <FaTelegram />
                </a>
                <a href={data.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href={data.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href={data.linkedIn} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href={data.website} target="_blank" rel="noopener noreferrer">
                    <FaGlobe />
                </a>
                <a href={data.youtube} target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
            </div>
        );
    };

    return (
        <>
            <div className='main__title__section'>
                <h1>Single QR Code</h1>
            </div>
            <div className="single-qrcode">
                <div className="qr-code">
                    <div className="logo-letter">
                        {isEditing ? (
                            <input
                                type="text"
                                value={data.logoLetter}
                                onChange={(e) => handleChange(e, 'logoLetter')}
                            />
                        ) : (
                            <span>{data.logoLetter}</span>
                        )}
                    </div>
                    <div className="text">
                        {isEditing ? (
                            <input
                                type="text"
                                value={data.text}
                                onChange={(e) => handleChange(e, 'text')}
                            />
                        ) : (
                            <span>{data.text}</span>
                        )}
                    </div>
                    <div className="text">
                        {isEditing ? (
                            <input
                                type="text"
                                value={data.smallText}
                                onChange={(e) => handleChange(e, 'smallText')}
                            />
                        ) : (
                            <span>{data.smallText}</span>
                        )}
                    </div>
                    {renderIcons()}
                </div>
                <div className="edit-button-container">
                    <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
                </div>
            </div>
            <SmallFooter />
        </>
    );
};

export default SingleQrCode;
