import React, { useContext, useState } from 'react';

const AppContext = React.createContext();


export const AppProvider = ({ children }) => {

    const [singleItem, setSingleItem] = useState({
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
    });

    return <AppContext.Provider value={{

        singleItem, setSingleItem

    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}