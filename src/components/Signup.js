import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();  //to prevent the page from reloading
        const { name, email, password, cpassword } = credentials;

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password, cpassword }),
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            //save the auth-token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate('/');
            props.showAlert("User created successfully", "success");
        } else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className='container mt-5' style={{ backgroundColor: '#F7F7F7', color: '#333', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '30px', color: '#2B4257' }}>Create an account to use iNotebook</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label"style={{color:'#2B4257',fontWeight:'bold'}}>Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px' }} placeholder='Enter Your Name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{color:'#2B4257',fontWeight:'bold'}}>Email</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px'}} placeholder='Enter your email' />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{color:'#2B4257',fontWeight:'bold'}}>Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px' }} placeholder='Enter Your Password' />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label" style={{color:'#2B4257',fontWeight:'bold'}}>Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required style={{ backgroundColor: '#ECF0F1', color: '#333', border: 'none', borderRadius: '5px', padding: '10px' }} placeholder='Enter Your Password' />
                </div>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#001233', border: 'none', borderRadius: '5px', padding: '10px 20px', fontWeight: 'bold' }}>Submit</button>
            </form>
        </div>
    );
}

export default Signup;
