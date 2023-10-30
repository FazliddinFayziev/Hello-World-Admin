import React, { useEffect, useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "../style/admin.css";
import axios from '../api/axios';
import { Cart, ChangeAdminCart, Error, Loading } from '../components';
import { useGlobalContext } from '../context/context';

const Admin = () => {

    const { user } = useGlobalContext();
    const [allUsers, setAllUsers] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [changeAdmin, setChangeAdmin] = useState(false)
    const [userId, setUserId] = useState('');
    const [refetch, setRefetch] = useState(false);

    // Get All users
    const fetchUsers = async () => {
        setLoading(true)
        const token = localStorage.getItem('token');
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.get('/users', config);
            setAllUsers(response.data)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    };

    // Delete user
    const handleDeleteUser = async (id) => {
        setLoading(true)
        setShow(false)
        const token = localStorage.getItem('token');
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.delete(`/users/${id}`, config);
            setRefetch(!refetch)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    // Change Admin
    const handleChangeAdmin = async (id) => {
        setChangeAdmin(false)
        setLoading(true);
        const token = localStorage.getItem('token');
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.put(`/users/${id}`, null, config);
            setRefetch(!refetch);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
        }
    };


    useEffect(() => {
        fetchUsers();
    }, [refetch]);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    if (show) {
        return <Cart
            deleteId={userId}
            setShowCart={setShow}
            deleteFunction={handleDeleteUser}
        />
    }

    if (changeAdmin) {
        return <ChangeAdminCart
            userId={userId}
            setShowCart={setChangeAdmin}
            mainFunction={handleChangeAdmin}
        />
    }

    const fiterUsers = allUsers.data && allUsers.data.filter((singleUser) => singleUser._id != user.data.userId)

    return (
        <div className="admin">
            <div className='main__title__section'>
                <h1>Admin Managment</h1>
            </div>
            <div className="user-list">
                {fiterUsers ? fiterUsers.map((user, index) => (
                    <div className="user-card" key={index}>
                        <h3>{user.userName}</h3>
                        <p><span className='span__admin'>ID:</span> {user._id}</p>

                        {/* ADMIN */}

                        <p className={user.admin ? 'admin__text__true' : 'admin__text__false'}><span className='span__admin'>Admin:</span> {user.admin ? 'TRUE' : 'FALSE'}</p>
                        <div>
                            {!user.admin ? (
                                <div className='manage__admin__access'>
                                    <AiOutlineCheck onClick={() => { setChangeAdmin(true); setUserId(user._id) }} color='green' fontSize={20} />
                                </div>
                            ) : (
                                <div className='manage__admin__access'>
                                    <AiOutlineClose onClick={() => { setChangeAdmin(true); setUserId(user._id) }} color='red' fontSize={20} />
                                </div>
                            )}
                        </div>

                        <div className='delete__admin__user'>
                            <button onClick={() => { setShow(true); setUserId(user._id) }}>Delete Admin</button>
                        </div>

                    </div>
                )) : (
                    <div className='no__admin__users'>
                        There are no users!
                    </div>
                )}
            </div>
        </div>
    )
}

export default Admin