import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ login }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email && password) {
            login();
            navigate('/profile'); // Redirects to Profile
        } else {
            alert('Please enter valid credentials');
        }
    };

    return (
        <div>
            <h2>Login Page</h2>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
