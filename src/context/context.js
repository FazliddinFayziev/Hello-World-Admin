import React, { useContext } from 'react';

const AppContext = React.createContext();


export const AppProvider = ({ children }) => {

    // Text - 1
    const home = "Home"

    // Text - 2
    const login = "Login"

    // Text - 3
    const error = "Error"

    return <AppContext.Provider value={{

        // export all elements
        home, login, error

    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}