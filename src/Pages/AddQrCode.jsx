import React from 'react';
import '../style/qrcode.css';
import { Error, Loading, SmallFooter, UploadIcons } from '../components';
import { useGlobalContext } from '../context/context';
import { filterAndUploadIcons } from '../functions/functions';
import { useDispatch, useSelector } from 'react-redux';
import { uploadQrCode } from '../container/qrcodeSlice';


const AddQrCode = () => {

    const { qrcodeValue, addQrcode, setAddQrcode } = useGlobalContext();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.qrcodes)

    const uploadAll = () => {
        const readyObj = {
            logoLetter: addQrcode.logoLetter,
            smallText: addQrcode.smallText,
            text: addQrcode.text,
            icons: filterAndUploadIcons(addQrcode.icons)
        }
        dispatch(uploadQrCode({ data: readyObj }))
        setAddQrcode(qrcodeValue)
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

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
                            value={addQrcode.logoLetter}
                            onChange={(e) => setAddQrcode({ ...addQrcode, logoLetter: e.target.value })}
                        />
                    </div>
                    <div className="text">
                        <label htmlFor="">Main Text:</label>
                        <input
                            style={{ border: '1px solid #007bff' }}
                            type="text"
                            value={addQrcode.text}
                            onChange={(e) => setAddQrcode({ ...addQrcode, text: e.target.value })}
                        />
                    </div>
                    <div className="text">
                        <label htmlFor="">Small Text:</label>
                        <input
                            style={{ border: '1px solid #007bff' }}
                            type="text"
                            value={addQrcode.smallText}
                            onChange={(e) => setAddQrcode({ ...addQrcode, smallText: e.target.value })}
                        />
                    </div>
                    <UploadIcons icons={addQrcode.icons} />

                </div>
                <div className="edit-button-container">
                    <button onClick={uploadAll}>Upload New QRcode</button>
                </div>
            </div>
            <SmallFooter />
        </>
    );
}

export default AddQrCode