import React, { useEffect, useState } from 'react'
import "../style/admin.css";
import axios from '../api/axios';
import { Error } from '../components';

const Admin = () => {


    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);

    const fetchUsers = async () => {

        const token = localStorage.getItem('token');
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.get('/users', config);
            setUsers(response.data)

        } catch (error) {
            setError(true)
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (error) {
        return <Error />
    }

    return (
        <div className="admin">
            <h2>User Management</h2>
            <div className="user-list">
                {users.data && users.data.map((user, index) => (
                    <div className="user-card" key={index}>
                        <h3>{user.userName}</h3>
                        <p>ID: {user._id}</p>
                        <p>Admin: {user.admin ? 'true' : 'false'}</p>
                        <p>Viewer: {user.viewer ? 'true' : 'false'}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Admin