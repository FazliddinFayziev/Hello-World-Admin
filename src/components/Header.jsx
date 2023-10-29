import React, { useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const Header = ({ isSidebarVisible, setIsSidebarVisible }) => {
    const { user, checkAdmin, setCheckAdmin } = useGlobalContext();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/admin') {
            setCheckAdmin(false);
        } else {
            setCheckAdmin(true);
        }
    }, [location, setCheckAdmin]);

    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__toggle" id="header-toggle" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                    <AiOutlineMenu color='#000' fontSize={25} className="ri-menu-line" />
                </div>

                <div className='header__text__logo'>
                    {checkAdmin && user.data.admin ? (
                        <Link to={'/admin'} className='admin__header__button'>
                            Main Admin
                        </Link>
                    ) : (
                        <div>
                            #Hello-World
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;
