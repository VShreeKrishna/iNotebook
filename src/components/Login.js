import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the page from reloading
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            // Save the auth-token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in Successfully", "success"); // Display success message
            navigate('/');
        } else {
            props.showAlert("Invalid credentials", "danger"); // Display error message
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className="container mt-5" style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '20px', borderRadius: '10px' }}>
            <h3 className='mb-4'>Login to continue to iNotebook</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="exampleInputEmail1" name="email" aria-describedby="emailHelp" style={{ backgroundColor: '#34495e', color: '#fff' }} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="exampleInputPassword1" name="password" style={{ backgroundColor: '#34495e', color: '#fff' }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#2980b9', border: 'none' }}>Submit</button>
            </form>
        </div>
    );
}

export default Login;
