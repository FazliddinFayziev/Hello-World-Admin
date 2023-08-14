import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ isSidebarVisible, setIsSidebarVisible }) => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__toggle" id="header-toggle" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                    <AiOutlineMenu color='#000' fontSize={25} className="ri-menu-line" />
                </div>

                <div className='header__text__logo'>
                    #Hello-World
                </div>
            </div>
        </header>
    )
}

export default Header