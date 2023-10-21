import React from 'react';
import '../style/qrcode.css';
import { RenderIcons, SmallFooter, UploadIcons } from '../components';


const AddQrCode = () => {

    return (
        <>
            <div className='main__title__section'>
                <h1>Upload New QR Code</h1>
            </div>
            <div className="single-qrcode">
                <div className="qr-code">
                    <div className="logo-letter">
                        <label htmlFor="">Logo Letter:</label>
                        <input
                            style={{ border: '1px solid #007bff' }}
                            type="text"
                            value={''}
                        // onChange={(e) => setSingleQrcode({ ...singleQrcode, logoLetter: e.target.value })}
                        />
                    </div>
                    <div className="text">
                        <label htmlFor="">Main Text:</label>
                        <input
                            style={{ border: '1px solid #007bff' }}
                            type="text"
                            value={''}
                        // onChange={(e) => setSingleQrcode({ ...singleQrcode, text: e.target.value })}
                        />
                    </div>
                    <div className="text">
                        <label htmlFor="">Small Text:</label>
                        <input
                            style={{ border: '1px solid #007bff' }}
                            type="text"
                            value={''}
                        // onChange={(e) => setSingleQrcode({ ...singleQrcode, smallText: e.target.value })}
                        />
                    </div>

                    {/* <RenderIcons singleQrcode={singleQrcode} setSingleQrcode={setSingleQrcode} icons={singleQrcode.icons} isEditing={isEditing} /> */}
                    <UploadIcons />

                </div>
                <div className="edit-button-container">
                    <button>Upload New QRcode</button>
                </div>
            </div>
            <SmallFooter />
        </>
    );
}

export default AddQrCode