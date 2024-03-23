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
        <div className='container mt-5' style={{ backgroundColor: '#F7F7F7', color: '#333', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'  }}>
            <h3 className= "mx-1" style={{ textAlign: 'center', marginBottom: '30px', color: '#2B4257' }}>Login to continue to iNotebook</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'#2B4257',fontWeight:'bold'}}>Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="exampleInputEmail1" name="email" aria-describedby="emailHelp" style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px' }} placeholder='Enter Your Registered mail'/>
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{color:'#2B4257',fontWeight:'bold'}}>Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="exampleInputPassword1" name="password" style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px' }} placeholder='Enter Your Password'/>
                </div>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#001233', border: 'none', borderRadius: '5px', padding: '10px 20px', fontWeight: 'bold' }}>Submit</button>
            </form>
        </div>
    );
}

export default Login;
