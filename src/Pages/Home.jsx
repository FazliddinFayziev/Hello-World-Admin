import React, { useEffect } from 'react'
import { useState } from 'react';
import { Loading, Sidebar } from '../components';
import Header from '../components/Header';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

// Files with path (routes)
import { useGlobalContext } from '../context/context';
import SingleProduct from './SingleProduct';
import SingleBanner from './SingleBanner';
import SingleQrCode from './SingleQrCode';
import AllQrCodes from './AllQrCodes';
import AddProduct from './AddProduct';
import AddQrCode from './AddQrCode';
import Products from './Products';
import Orders from './Orders';
import Manage from './Manage';
import Banner from './Banner';
import Notes from './Notes';
import Admin from './Admin';
import Main from './Main';


const Home = () => {

    const { user, setUser } = useGlobalContext();
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    const checkUser = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            setLoading(false);
        }
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const response = await axios.get('/userinfo', config);
            setUser(response.data);
            setLoading(false);
            if (!response.data || response.data.success === false) navigate('/login');
        } catch (error) {
            navigate('/login');
            setLoading(false);
        }
    }

    useEffect(() => {
        checkUser();
        console.log(user)
    }, []);

    if (loading) {
        return <Loading />
    }

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
                    <Route path='/admin' element={user.data.admin ? <Admin /> : <Navigate to="/" />} />
                </Routes>
            </main>

        </section>

    )
}

export default Home