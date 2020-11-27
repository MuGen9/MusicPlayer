import React from 'react';
import './Login.scss';
import { loginUrl } from './../spotify';
import logo from './../assets/Spotify_Logo_White.png';

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="Spotify Logo" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;