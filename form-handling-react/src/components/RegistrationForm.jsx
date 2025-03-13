import React from 'react'
import { useState } from 'react'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Ensure no fields are empty upon validation
        if (!formData.username || !formData.email || !formData.password) {
            setError('All fields are required');
            return;
        } 

        console.log("Form submitted", formData);
        setError(''); //Clear error message after successful submission
    }


    return (
        <div className='form-container'>
            <h2>Register</h2>
            {error && <p className='error'>{error}</p>}
        
            <form onSubmit = {handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Enter your name"
                value = {formData.username}
                onChange = {handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value = {formData.email}
                onChange = {handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value = {formData.password}
                onChange = {handleChange}
            />
            <button type="submit">Register</button>
        </form>

        </div>

    )
}

export default RegistrationForm