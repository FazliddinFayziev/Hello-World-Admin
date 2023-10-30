import React, { useEffect, useState } from 'react';
import '../style/qrcode.css';
import { Cart, Error, Loading, RenderIcons, SmallFooter } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQrcode, fetchAndEditQrCode, fetchSingleQrcode } from '../container/qrcodeSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import { filterIcons } from '../functions/functions';

const SingleQrCode = () => {
    const [showCart, setShowCart] = useState(false);
    const { user, singleQrcode, setSingleQrcode } = useGlobalContext();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const { qrcodeId } = useParams();
    const dispatch = useDispatch();
    const { loading, sqrcode, refetch, error } = useSelector((state) => state.qrcodes);

    useEffect(() => {
        dispatch(fetchSingleQrcode({ id: qrcodeId }))
    }, [qrcodeId, refetch])

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
    }, [qrcodeId, sqrcode, refetch])

    const handleSave = (e) => {
        e.preventDefault()
        const readyQrCode = {
            logoLetter: singleQrcode.logoLetter,
            text: singleQrcode.text,
            smallText: singleQrcode.smallText,
            icons: filterIcons(singleQrcode.icons)
        }
        dispatch(fetchAndEditQrCode({ qrcodeId, readyQrCode }))
        setIsEditing(false)
    }

    const handleDelete = () => {
        dispatch(deleteQrcode({ qrcodeId }))
        setShowCart(false)
        navigate('/allqrcodes')
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    if (showCart) {
        return <Cart setShowCart={setShowCart} deleteId={qrcodeId} deleteFunction={handleDelete} />
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

                    <RenderIcons singleQrcode={singleQrcode} setSingleQrcode={setSingleQrcode} icons={singleQrcode.icons} isEditing={isEditing} />

                </div>
                {user?.data?.admin && (
                    <div className="edit-button-container">
                        {!isEditing ? (
                            <button onClick={() => setIsEditing(true)}>Edit</button>
                        ) : (
                            <button onClick={handleSave}>Save</button>
                        )}
                    </div>
                )}
            </div>
            {user?.data?.admin && (
                <div onClick={() => setShowCart(true)} className='delete__qr__code'>
                    <button>Delete QR code</button>
                </div>
            )}
            <SmallFooter />
        </>
    );
};

export default SingleQrCode;
