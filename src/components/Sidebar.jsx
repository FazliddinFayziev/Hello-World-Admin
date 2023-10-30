import React, { useState } from 'react';
import { AiFillHome, AiOutlineShoppingCart, AiOutlineQrcode } from "react-icons/ai";
import { FaSitemap } from "react-icons/fa";
import { BiSolidAddToQueue, BiNotepad } from "react-icons/bi";
import { MdScreenshotMonitor } from "react-icons/md";
import { BsShop, BsQrCodeScan } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Sidebar = ({ user, isSidebarVisible, setIsSidebarVisible }) => {

    const sidebarLinks = [
        { icon: (<AiFillHome />), name: 'Home', link: '/' },
        { icon: (<MdScreenshotMonitor />), name: 'Banner', link: '/banner' },
        { icon: (<FaSitemap />), name: 'Products', link: '/products' },
        user?.data?.admin && { icon: (<BiSolidAddToQueue />), name: 'Add Product', link: '/addproduct' },
        { icon: (<BsShop />), name: 'All Orders', link: '/allorders' },
        { icon: (<AiOutlineShoppingCart />), name: 'Manage Orders', link: '/manage' },
        { icon: (<BiNotepad />), name: 'Important Notes', link: '/notes' },
        { icon: (<AiOutlineQrcode />), name: 'All QR codes', link: '/allqrcodes' },
        user?.data?.admin && { icon: (<BsQrCodeScan />), name: 'Add New QR code', link: '/addqrcodes' },
    ].filter(Boolean);

    const [activeLink, setActiveLink] = useState(0);

    const handleLinkClick = (index) => {
        setActiveLink(index);
        setIsSidebarVisible(false);
    };

    return (
        <div className={`sidebar ${isSidebarVisible ? 'show-sidebar' : ''}`} id="sidebar" >
            <nav className="sidebar__container">
                {!isSidebarVisible ? (
                    <div className="sidebar__logo">
                        #Hello-World
                    </div>
                ) : (
                    <div className="sidebar__logo">
                        #HW
                    </div>
                )}


                <div className="sidebar__content">

                    <h3 className="sidebar__title">
                        <span>Admin</span>
                    </h3>

                    <div className="sidebar__list">
                        {sidebarLinks.map((link, index) => (
                            <Link
                                to={`${link.link}`}
                                key={index}
                                className={`sidebar__link ${index === activeLink ? 'active-link' : ''}`}
                                onClick={() => handleLinkClick(index)}
                            >
                                <i>{link.icon}</i>
                                <span className="sidebar__link-name">{link.name}</span>
                                <span className="sidebar__link-floating">{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="sidebar__account">

                    {!isSidebarVisible ? (
                        <>
                            <div className='profile__image'>
                                <img src="https://res.cloudinary.com/dip5rm08k/image/upload/v1691978320/admin_usp4yy.jpg" alt="sidebar image" className="sidebar__perfil" />
                            </div>

                            <div className="sidebar__names">
                                <h3 className="sidebar__name">Admin</h3>
                                <span className="sidebar__email">#Hello-World Admin</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='profile__image'>
                                <img src="https://res.cloudinary.com/dip5rm08k/image/upload/v1691978320/admin_usp4yy.jpg" alt="sidebar image" className="sidebar__perfil" />
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </div >
    )
}

export default Sidebar