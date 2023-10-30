import React, { useState } from 'react'
import { ErrorCart, Loading } from '../components';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Register = () => {
    const [errorCart, setErrorCart] = useState(false);
    const [loading, setLoading] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/admin')
    }

    const handleAddNewUser = async () => {
        setLoading(true)
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            setLoading(false);
        }
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const data = {
                userName,
                password
            }
            const response = await axios.post('/signup', data, config);
            setLoading(false);
            navigate('/admin');
            if (!response.data || response.data.success === false) setErrorCart(true);
        } catch (error) {
            setErrorCart(true);
            setLoading(false);
        }
    }

    if (loading) {
        return <Loading />
    }

    if (errorCart) {
        return <ErrorCart setErrorCart={setErrorCart} />
    }

    return (
        <div className="login">
            <h4>Add New User</h4>
            <br />
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" className="text" />
            <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="text" />
            <button onClick={handleAddNewUser} className='btn'>Add User</button>
            <br />
            <br />
            <button onClick={handleBack} className='btn'>Cancel</button>
        </div>
    )
}

export default Register