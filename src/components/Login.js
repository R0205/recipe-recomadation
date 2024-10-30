import React, { useState } from 'react';
import { loginUser } from '../api';
import { useNavigate } from 'react-router-dom';
import Sppiner from './Sppiner'; // Assuming Sppiner is imported correctly

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await loginUser({ email, password });
            localStorage.setItem('token', response.data.token);
            onLogin();
            navigate('/recipes');
        } catch (err) {
            setError('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='login-page'>
            <div className='auth-container'>
                {loading ? (
                    <div className='spinner-container'>
                        <Sppiner />
                        <h2 className='loading-text'>Logging in...</h2>
                    </div>
                ) : (
                    <>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label>Email</label>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button type='submit' className='login-button'>Login</button>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default Login;
