import React, { Component } from 'react'
import "./signup_style.css"


export default function Signup() {
    return (
        <div id="storeSignup">
            <div className="container">
                <div className="signup-form">
                    <div className="header">
                        <h2 className="text-center my-2">Sign Up</h2>
                        <p>Become part of the FashionHub shopping community</p>
                    </div>
                    <form action="#">
                        <div className="form-control">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" required placeholder="Enter Your Name" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required placeholder="Enter Your Email" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" required placeholder="Password" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="retype-password">Re-Type Password</label>
                            <input type="password" id="retype-password" required placeholder="Re-Type Password" />
                        </div>
                        <button type="submit" className="signup-btn">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
