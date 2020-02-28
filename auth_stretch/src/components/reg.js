import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Axios from "axios";

const Register = () => {
    let history = useHistory();
    const [userReg, setUserReg] = useState({
        username: "",
        password: ""
    });

    const handleChanges = (e) => {
        setUserReg({
          ...userReg,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3300/api/auth/register', userReg)
            .then(res => {
                console.log("new user registered", res);
                history.push("/login");
            })
            .catch(err => {
                console.log("could not register new user", err);
              });
        setUserReg({
            username: "",
            password: ""
        })
    };

    return(
        <>
            <h1>Please Sign Up!</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                type='text'
                name='username'
                id='username'
                onChange={handleChanges}
                value={userReg.name} />

                <label>Password</label>
                <input 
                type='password'
                name='password'
                id='password'
                onChange={handleChanges}
                value={userReg.password}/>

                <button>Submit!</button>
            </form>
        </>
    )
};

export default Register;