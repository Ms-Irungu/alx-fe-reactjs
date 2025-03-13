import React from 'react'
import { useState } from 'react'

const RegistrationForm = () => {
    // State variables for form fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //create state to store error message.
    //error is a string that holds the error message
    const [errors, setErrors] = useState('');

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
    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        let validationErrors = {}; // Object to store errors

        // Field validation
        if (!username) {
            validationErrors.username = "Username is required";
        }
        if (!email) {
            validationErrors.email = "Email is required";  // Explicit check for email
        }
        if (!password) {
            validationErrors.password = "Password is required"; // Explicit check for password
        }

        // If there are errors, update state and stop form submission
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("Form submitted", { username, email, password });

        // Clear form and errors after successful submission
        setUsername("");
        setEmail("");
        setPassword("");
        setErrors({});
    };

    return (
        <div className="form-container">
            <h2>Register</h2>

            {/* Display errors dynamically */}
            {errors.username && <p className="error">{errors.username}</p>}
            {errors.email && <p className="error">{errors.email}</p>}
            {errors.password && <p className="error">{errors.password}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm