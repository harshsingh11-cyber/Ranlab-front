import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';
import axios from 'axios';

// import { createUserWithEmailAndPassword } from 'firebase/auth';
// // import { auth } from '../../../firebase';
// import { auth } from "../../firebase";




const baseUrl = "https://ranlabs-bak.onrender.com";

function Signin() {

    const navigate = useNavigate();
    const [value, setValue] = useState({
        name: "",
        email: "",
        pass: "",
    });

    const [sub, setBub] = useState(false);
    const [errorMSG, setError] = useState("");

    const submitNow = () => {
        axios.post(`${baseUrl}/signup`, value)
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
                <h1 className="login__heading">Sign - Up</h1>
                <Input label="Name " placeholder="Enter Name......" onChange={(e) => setValue((prev) => ({ ...prev, name: e.target.value }))} />
                <Input label="Email" placeholder="Enter email address......" onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} />
                <Input label="Password" placeholder="Enter Password......" onChange={(e) => setValue((prev) => ({ ...prev, pass: e.target.value }))} />
                <div className="login__footer">
                    <b className='error'> {errorMSG}</b>
                    <button onClick={submitNow} disabled={sub}>Sign-up</button>
                    <p>
                        Already have an account ? <span>

                            <Link to='/login'>Log-In</Link></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signin