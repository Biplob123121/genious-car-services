import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password =event.target.password.value;
        console.log(name, email, password);
    }
    return (
        <div className='form-container'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter Your Name' required />
                <input type="email" name="email" id="" placeholder='Enter Your Email' required />
                <input type="password" name="password" id="" placeholder='Enter Your Password' required />
                <input type="submit" value="Register" />
                <p>Already Have an Account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;