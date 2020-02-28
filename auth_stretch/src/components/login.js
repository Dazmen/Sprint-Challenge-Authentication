import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    const [userLog, setUserLog] = useState({
        username: "",
        password: ""
    });

    const handleChanges = (e) => {
        setUserLog({
          ...userLog,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3300/api/auth/login', userLog)
            .then(res => {
                console.log(" user logged in", res);
                localStorage.setItem("token", res.data.token);
                history.push("/jokes");
            })
            .catch(err => {
                console.log("could not login user", err);
              });
        setUserLog({
            username: "",
            password: ""
        })
    };

    return(
        <>
            <h1>Please Sign In to view a list of Dad Jokes!</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                type='text'
                name='username'
                id='username'
                onChange={handleChanges}
                value={userLog.name} />

                <label>Password</label>
                <input 
                type='password'
                name='password'
                id='password'
                onChange={handleChanges}
                value={userLog.password}/>

                <button>Submit!</button>
            </form>
        </>
    )
};

export default Login;