import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./login_style.css"

export default function Login() {
    const navigate = useNavigate();
    return (
        <div id="storeLogin">
            <div className="login-container">
                <form className="login-form">
                    <h2>Welcome Back!</h2>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter Your Email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" />
                    <button type="submit">Login</button>
                    <div className="divider" />
                    <p className="signup">Don’t have an account? <span onClick={() => navigate("/signup")}>Signup</span></p>
                </form>
            </div>
        </div>
    )
}
