import React from 'react';
import './LoginPage.css';

const LoginPage = () => {


    const login = () => {
        document.getElementById('login-form').style.left="50px";
        document.getElementById('register-form').style.left="450px";
        document.getElementById('btn').style.left="0px";
        console.log("Login Clicked")
    }

    const register = () =>{
        document.getElementById('login-form').style.left="-400px";
        document.getElementById('register-form').style.left="50px";
        document.getElementById('btn').style.left="110px";
        console.log("Register Clicked")
    }

    return (
        <div class="login-page">
            <div className="login-box">
                <div className="button-box">
                    <div id="btn"></div>
                    <button type="button" className="heading-btn" onClick={() => login()}>Log In</button>
                    <button type="button" className="heading-btn" onClick={() => register()}>Register</button>
                </div>
                <form id="login-form" className="input-group">
                    <input type="text" className="input-field" placeholder="User Id" required />
                    <input type="text" className="input-field" placeholder="Enter Password" required />
                    <input type="checkbox" className="check-box"/><span>Remember Password</span>
                    <button type="submit" className="submit-btn">Log In </button>
                </form>
                <form id="register-form" className="input-group">
                    <input type="text" className="input-field" placeholder="User Name" required />
                    <input type="text" className="input-field" placeholder="Email Id" required />
                    <input type="text" className="input-field" placeholder="Enter Password" required />
                    <input type="checkbox" className="check-box"/><span>I agree </span>
                    <button type="submit" className="submit-btn">Resister</button>
                </form>

                <hr />
                <span className="or">OR</span>
                <button className="fb-login">Login with Facebook </button>
                <button className="tw-login">Login with Twitter </button>
                <button className="gm-login">Login with G-Mail </button>
            </div>
        </div>
    );
};

export default LoginPage;