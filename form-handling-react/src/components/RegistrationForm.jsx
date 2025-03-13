import React from 'react'
import { useState } from 'react'

const RegistrationForm = () => {
    //create state to store the values entered in the form
    //formData is an object that holds values for username, email, and password
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });


    //create state to store error message.
    //error is a string that holds the error message
    const [error, setError] = useState('');

    //create a function to handle changes in the form fields
    //We need to update formData every time the user types something in the input fields.
    //e.target.name gets the name of the input field (username, email, or password).
    //e.target.value gets the value entered in the input field.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    //create a function to handle form submission
    //By default, when you submit a form, the page refreshes. We don’t want that to happen.
    //We want to handle the data ourselves.
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents the page from reloading so we can handle the data properly.

        //Ensure no fields are empty upon validation
        //If any field is empty, setError updates 
        // the error message and stops the form from submitting.
        if (!formData.username || !formData.email || !formData.password) {
            setError('All fields are required');
            return;
        } 

        console.log("Form submitted", formData); //just to see if everything works
         // Reset form
        setFormData({ username: "", email: "", password: "" });
        setError(''); //Clear error message after successful submission
    }


    return (
        <div className='form-container'>
            <h2>Register</h2>
            {error && <p className='error'>{error}</p>} {/*display error message if any exists*/}
        
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