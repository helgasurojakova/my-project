import React, {useContext, useEffect} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        navigate("/posts")
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter email"/>
                <MyInput type="password" placeholder="Enter password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;