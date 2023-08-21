import React from 'react';
import "../style/login.css";

const Login = () => {

    return (
        <div class="login">
            <h5>#Hello-World</h5>
            <input type="text" placeholder="Username" className="text" />
            <input type="Password" placeholder="Password" className="text" />
            <button className='btn'>Login</button>
        </div>
    )
}

export default Login