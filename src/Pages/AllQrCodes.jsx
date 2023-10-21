import React, { useEffect, useState } from 'react';
import "../style/qrcode.css";
import { Error, Loading, SmallFooter } from "../components";
import { useDispatch, useSelector } from 'react-redux';
import { fetchQrcode } from '../container/qrcodeSlice';
import { Link } from 'react-router-dom';

const AllQrCodes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch('');
    const { loading, qrcodes, refetch, error } = useSelector((state) => state.qrcodes)

    useEffect(() => {
        dispatch(fetchQrcode())
    }, [refetch])

    const filteredQrcodes = qrcodes.filter((qrcode) => {
        if (searchTerm === "") {
            return true;
        } else {
            return qrcode.text.toLowerCase().includes(searchTerm.toLowerCase());
        }
    });

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <>

            <div className='main__title__section'>
                <h1>All QR codes</h1>
            </div>

            <div className='all__products__search__container'>
                <div className='all__products__search'>
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search any QR code . . .' />
                </div>
            </div>

            {/* QR code Display */}
            <div className='qrcode__container'>

                <div className='qrcode__box'>

                    {filteredQrcodes.length > 0 && filteredQrcodes.map((qrcode) => {
                        const { id, logo, text } = qrcode
                        return (
                            <Link to={`${id}`} key={id} className='qrcode__single__box'>
                                <div>
                                    <div className='qrcode__center qrcode__center__letter'>
                                        <h1>{logo}</h1>
                                    </div>
                                    <div className='qrcode__center'>
                                        <h3>{text.slice(0, 15)}...</h3>
                                    </div>
                                    <div className='qrcode__center'>
                                        <p>
                                            {id}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                </div>

            </div>

            <SmallFooter />
        </>
    )
}

export default AllQrCodes