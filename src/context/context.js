import React, { useContext, useState } from 'react';

const AppContext = React.createContext();


export const AppProvider = ({ children }) => {

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

    return <AppContext.Provider value={{

        singleItem, setSingleItem,
        addProduct, setAddProduct,

    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}