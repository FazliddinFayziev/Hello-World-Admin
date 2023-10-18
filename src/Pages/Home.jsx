import React from 'react'
import { useState } from 'react';
import { Sidebar } from '../components';
import Header from '../components/Header';
import { Route, Routes } from 'react-router-dom';

// Files with path (routes)
import SingleProduct from './SingleProduct';
import SingleBanner from './SingleBanner';
import AllQrCodes from './AllQrCodes';
import AddProduct from './AddProduct';
import AddQrCode from './AddQrCode';
import Products from './Products';
import Orders from './Orders';
import Manage from './Manage';
import Banner from './Banner';
import Notes from './Notes';
import Main from './Main';
import SingleQrCode from './SingleQrCode';


const Home = () => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    return (
        <section>

            {/* <!--=============== HEADER ===============--> */}
            <Header isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} />

            {/* <!--=============== SIDEBAR ===============--> */}
            <Sidebar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} />

            {/* <!--=============== MAIN ===============--> */}
            <main className="main container" id="main">
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/banner' element={<Banner />} />
                    <Route path='/banner/:bannerId' element={<SingleBanner />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:productId' element={<SingleProduct />} />
                    <Route path='/addproduct' element={<AddProduct />} />
                    <Route path='/allorders' element={<Orders />} />
                    <Route path='/manage' element={<Manage />} />
                    <Route path='/notes' element={<Notes />} />
                    <Route path='/allqrcodes' element={<AllQrCodes />} />
                    <Route path='/allqrcodes/:qrcodeId' element={<SingleQrCode />} />
                    <Route path='/addqrcodes' element={<AddQrCode />} />
                </Routes>
            </main>

        </section>

    )
}

export default Home