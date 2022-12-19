import React, {useState} from "react";
import './Login.css'
import {Link} from "react-router-dom";
import Video from "./Video";
import bankVideo from "../assets/Bank stock video-NO COPYRIGHT VIDEO.mp4";
const Login = () => {
    return(
        <div className="page" data-testid='todo_1'>
            <div className="loginForm">
                <div className="form">
                <p className="seConnecter"> Se connecter</p>
                <p className="user">
                    <label className="username"> user or email</label>
                    <input className="userinput"/>
                </p>
                <p className="password">
                    <label className="username"> password</label>
                    <input className="passwordinput" type={"password"}/>
                </p>
                    <button className="btn">Login</button>
                <p>Don't have account ?</p>
            </div>
            </div>
        </div>
    )
}

export default Login;
