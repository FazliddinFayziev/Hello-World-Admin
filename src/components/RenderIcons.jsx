import React from 'react';
import { FaInstagram, FaTelegram, FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaGlobe, FaYoutube } from 'react-icons/fa';

const RenderIcons = ({ singleQrcode, setSingleQrcode, icons, isEditing }) => {
    return (
        <div className="icon-container">

            <div className='icons__container__box'>
                <a className='qr__code__icons' href={icons[0].instagram ? icons[0].instagram : '#'} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                {isEditing ? (
                    <input value={icons[0].instagram ? icons[0].instagram : ''} onChange={(e) => setSingleQrcode({ ...singleQrcode, icons: [{ ...icons[0], instagram: e.target.value }] })} type="text" />
                ) : (
                    <span>{icons[0].instagram ? icons[0].instagram.slice(0, 26) : 'No instagram'}...</span>
                )
                }
            </div>

            <div className='icons__container__box'>
                <a className='qr__code__icons' href={icons[0].telegram ? icons[0].telegram : '#'} target="_blank" rel="noopener noreferrer">
                    <FaTelegram />
                </a>
                {isEditing ? (
                    <input value={icons[0].telegram ? icons[0].telegram : ''} onChange={(e) => setSingleQrcode({ ...singleQrcode, icons: [{ ...icons[0], telegram: e.target.value }] })} type="text" />
                ) : (
                    <span>{icons[0].telegram ? icons[0].telegram.slice(0, 26) : 'No telegram'}...</span>
                )
                }
            </div>

            <div className='icons__container__box'>
                <a className='qr__code__icons' href={icons[0].facebook ? icons[0].facebook : '#'} target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                {isEditing ? (
                    <input value={icons[0].facebook ? icons[0].facebook : ''} onChange={(e) => setSingleQrcode({ ...singleQrcode, icons: [{ ...icons[0], facebook: e.target.value }] })} type="text" />
                ) : (
                    <span>{icons[0].facebook ? icons[0].facebook.slice(0, 26) : 'No facebook'}...</span>
                )
                }
            </div>

            <div className='icons__container__box'>
                <a className='qr__code__icons' href={icons[0].twitter ? icons[0].twitter : '#'} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                {isEditing ? (
                    <input value={icons[0].twitter ? icons[0].twitter : ''} onChange={(e) => setSingleQrcode({ ...singleQrcode, icons: [{ ...icons[0], twitter: e.target.value }] })} type="text" />
                ) : (
                    <span>{icons[0].twitter ? icons[0].twitter.slice(0, 26) : 'No twitter'}...</span>
                )
                }
            </div>

            <div className='icons__container__box'>
                <a className='qr__code__icons' href={icons[0].github ? icons[0].github : '#'} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                {isEditing ? (
                    <input value={icons[0].github ? icons[0].github : ''} onChange={(e) => setSingleQrcode({ ...singleQrcode, icons: [{ ...icons[0], github: e.target.value }] })} type="text" />
                ) : (
                    <span>{icons[0].github ? icons[0].github.slice(0, 26) : 'No github'}...</span>
                )
                }
            </div>

            <div className='icons__container__box'>
                <a className='qr__code__icons' href={icons[0].linkedIn ? icons[0].linkedIn : '#'} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                {isEditing ? (
                    <input value={icons[0].linkedIn ? icons[0].linkedIn : ''} onChange={(e) => setSingleQrcode({ ...singleQrcode, icons: [{ ...icons[0], linkedIn: e.target.value }] })} type="text" />
                ) : (
                    <span>{icons[0].linkedIn ? icons[0].linkedIn.slice(0, 26) : 'No LinkedIn'}...</span>
                )
                }
            </div>

            <div className='icons__container__box'>
                <a className='qr__code__icons' href={icons[0].website ? icons[0].website : '#'} target="_blank" rel="noopener noreferrer">
                    <FaGlobe />
                </a>
                {isEditing ? (
                    <input value={icons[0].website ? icons[0].website : ''} onChange={(e) => setSingleQrcode({ ...singleQrcode, icons: [{ ...icons[0], website: e.target.value }] })} type="text" />
                ) : (
                    <span>{icons[0].website ? icons[0].website.slice(0, 26) : 'No Self-Website'}...</span>
                )
                }
            </div>

            <div className='icons__container__box'>
                <a className='qr__code__icons' href={icons[0].youtube ? icons[0].youtube : '#'} target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                {isEditing ? (
                    <input value={icons[0].youtube ? icons[0].youtube : ''} onChange={(e) => setSingleQrcode({ ...singleQrcode, icons: [{ ...icons[0], youtube: e.target.value }] })} type="text" />
                ) : (
                    <span>{icons[0].youtube ? icons[0].youtube.slice(0, 26) : 'No YouTube'}...</span>
                )
                }
            </div>
        </div>
    );
};

export default RenderIcons;