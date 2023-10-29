import React, { useState } from 'react';
import "../style/login.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchandLoginUser } from '../container/adminSlice';
import { ErrorCart, Loading } from '../components';
import { useGlobalContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setUser } = useGlobalContext();
    const [errorCart, setErrorCart] = useState(false);
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.admin)

    const handleLogin = async () => {
        try {
            const data = {
                userName,
                password
            }
            const action = await dispatch(fetchandLoginUser({ data }));

            if (fetchandLoginUser.fulfilled.match(action)) {
                const loginData = action.payload;
                if (loginData && loginData.data.token) {
                    localStorage.setItem('token', loginData.data.token);
                    setUser(loginData);
                    navigate('/');
                }
            } else {
                setErrorCart(true)
            }
        } catch (error) {
            setErrorCart(true)
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
            <h5>#Hello-World</h5>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" className="text" />
            <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="text" />
            <button onClick={handleLogin} className='btn'>Login</button>
        </div>
    )
}

export default Login