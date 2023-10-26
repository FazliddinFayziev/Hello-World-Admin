import React, { useContext, useState } from 'react';
import {
    FaInstagram,
    FaTelegram,
    FaFacebook,
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaGlobe,
    FaYoutube
} from 'react-icons/fa';

const AppContext = React.createContext();


export const AppProvider = ({ children }) => {

    const [dashboardItems, setDashboardItems] = useState({
        orders: 0,
        products: 0,
        lastweekOrders: 0,
        weekOrders: [],
        monthOrders: [],
    })

    const [addProduct, setAddProduct] = useState({
        name: '',
        price: '',
        option: '',
        category: '',
        size: [],
        images: [],
        colors: [],
        descuz: '',
        descru: '',
        desceng: '',
    })

    const [singleItem, setSingleItem] = useState({
        name: '',
        price: '',
        option: '',
        category: '',
        size: [],
        images: [],
        imageUrls: [],
        colors: [],
        descuz: '',
        descru: '',
        desceng: '',
    });

    const [singleBanner, setSingleBanner] = useState({
        id: '',
        category: '',
        images: [],
        imageUrls: [],
        link: '',
        number: '',
        text: ''
    })

    const [singleQrcode, setSingleQrcode] = useState({
        id: '',
        text: '',
        icons: [],
        smallText: '',
        logoLetter: '',
    })

    const qrcodeValue = {
        text: '',
        smallText: '',
        logoLetter: '',
        icons: [
            { name: 'instagram', icon: <FaInstagram />, value: '' },
            { name: 'telegram', icon: <FaTelegram />, value: '' },
            { name: 'facebook', icon: <FaFacebook />, value: '' },
            { name: 'linkedIn', icon: <FaLinkedin />, value: '' },
            { name: 'youtube', icon: <FaYoutube />, value: '' },
            { name: 'twitter', icon: <FaTwitter />, value: '' },
            { name: 'github', icon: <FaGithub />, value: '' },
            { name: 'website', icon: <FaGlobe />, value: '' },
        ],
    }

    const [addQrcode, setAddQrcode] = useState(qrcodeValue)

    return <AppContext.Provider value={{
        qrcodeValue,
        addQrcode, setAddQrcode,
        singleItem, setSingleItem,
        addProduct, setAddProduct,
        singleBanner, setSingleBanner,
        singleQrcode, setSingleQrcode,
        dashboardItems, setDashboardItems,
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}