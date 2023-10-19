import React, { useEffect, useState } from 'react';
import '../style/qrcode.css';
import { Error, Loading, RenderIcons, SmallFooter } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleQrcode } from '../container/qrcodeSlice';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const SingleQrCode = () => {
    const { singleQrcode, setSingleQrcode } = useGlobalContext();
    const [isEditing, setIsEditing] = useState(false);
    const { qrcodeId } = useParams();
    const dispatch = useDispatch();
    const { loading, sqrcode, error } = useSelector((state) => state.qrcodes)

    useEffect(() => {
        dispatch(fetchSingleQrcode({ id: qrcodeId }))
    }, [qrcodeId])

    useEffect(() => {
        if (sqrcode) {
            setSingleQrcode({
                id: sqrcode._id,
                text: sqrcode.text,
                icons: sqrcode.icons || [],
                smallText: sqrcode.smallText,
                logoLetter: sqrcode.logoLetter,
            })
        }
        console.log(singleQrcode)
    }, [qrcodeId, sqrcode])

    const { icons } = singleQrcode

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <>
            <div className='main__title__section'>
                <h1>Single QR Code</h1>
            </div>
            <div className="single-qrcode">
                <div className="qr-code">
                    <p>{singleQrcode.id}</p>
                    <div className="logo-letter">
                        {isEditing ? (
                            <input
                                type="text"
                                value={singleQrcode.logoLetter}
                                onChange={(e) => setSingleQrcode({ ...singleQrcode, logoLetter: e.target.value })}
                            />
                        ) : (
                            <span>{singleQrcode.logoLetter}</span>
                        )}
                    </div>
                    <div className="text">
                        {isEditing ? (
                            <input
                                type="text"
                                value={singleQrcode.text}
                                onChange={(e) => setSingleQrcode({ ...singleQrcode, text: e.target.value })}
                            />
                        ) : (
                            <span>{singleQrcode.text}</span>
                        )}
                    </div>
                    <div className="text">
                        {isEditing ? (
                            <input
                                type="text"
                                value={singleQrcode.smallText}
                                onChange={(e) => setSingleQrcode({ ...singleQrcode, smallText: e.target.value })}
                            />
                        ) : (
                            <span>{singleQrcode.smallText}</span>
                        )}
                    </div>

                    <RenderIcons singleQrcode={singleQrcode} setSingleQrcode={setSingleQrcode} icons={icons} isEditing={isEditing} />

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
