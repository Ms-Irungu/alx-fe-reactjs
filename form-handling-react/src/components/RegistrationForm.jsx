import React from 'react'
import { useState } from 'react'

const RegistrationForm = () => {
    // State variables for form fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //create state to store error message.
    //error is a string that holds the error message
    const [error, setError] = useState('');

    //create a function to handle changes in the form fields
    //We need to update formData every time the user types something in the input fields.
    //e.target.name gets the name of the input field (username, email, or password).
    //e.target.value gets the value entered in the input field.
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({ ...prevState, [name]: value }));
    // };

    //create a function to handle form submission
    //By default, when you submit a form, the page refreshes. We don’t want that to happen.
    //We want to handle the data ourselves.
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents the page from reloading so we can handle the data properly.

        //Ensure no fields are empty upon validation
        //If any field is empty, setError updates 
        // the error message and stops the form from submitting.
        if (!username || !email || !password) {
            setError('All fields are required');
            return;
        }

        console.log("Form submitted", { username, email, password }); //just to see if everything works

        // Clear form and error after submission
        setUsername("");
        setEmail("");
        setPassword("");
        setError("");
    };


    return (
        <div className='form-container'>
            <h2>Register</h2>
            {error && <p className='error'>{error}</p>} {/*display error message if any exists*/}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} //update the state variable username
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} //update the state variable email
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} //update the state variable password
                />
                <button type="submit">Register</button>
            </form>

        </div>

    )
}

export default RegistrationForm