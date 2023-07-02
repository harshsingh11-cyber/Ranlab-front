import React, { useState } from 'react'
import Input from './Input';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseUrl = "https://ranlabs-bak.onrender.com";
function Login() {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        email: "",
        pass: "",
    });
    const [errorMSG, setError] = useState("");


    const submitNow = () => {

        axios.post(`${baseUrl}/signin`, value)
            .then((response) => {
                console.log(response.data);
                navigate('/home')
            })
            .catch((error) => {
                console.log(error);
            });
    }




    return (
        <div className='login__container'>
            <div className="login__innerbox">
                <h1 className="login__heading">LogIn</h1>
                <Input label="Email" placeholder="Enter email address......" onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} />
                <Input label="Password" placeholder="Enter Password......" onChange={(e) => setValue((prev) => ({ ...prev, pass: e.target.value }))} />
                <div className="login__footer">
                    <b className='error'>{errorMSG} </b>
                    <button onClick={submitNow}>Login</button>
                    <p>
                        Don't have an account? <span>
                            <Link to='/signup'>Sign up</Link></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;
