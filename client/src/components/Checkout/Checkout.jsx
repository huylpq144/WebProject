import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./CheckoutStyle.css"

export default function Checkout() {
    const navigate = useNavigate();
    return (
        <div id='checkoutPage' className="wrapper" style={{ backgroundColor: "#F1D4E5" }}>
            <div className="container">
                <form action>
                    <h1>
                        <i className="fas fa-shipping-fast" />
                        Shipping Details
                    </h1>
                    <div className="name">
                        <div>
                            <label htmlFor="f-name">Total Price</label>
                            <input type="text" name="f-name" />
                        </div>
                        <div>
                            <label htmlFor="l-name">Total Products</label>
                            <input type="text" name="l-name" />
                        </div>
                        <div>
                            <label htmlFor="l-name">Total discounts</label>
                            <input type="text" name="l-name" />
                        </div>
                    </div>
                    <div className="street">
                        <label htmlFor="name">Address</label>
                        <input type="text" name="address" />
                    </div>
                    {/* <div className="address-info">
                        <div>
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" />
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                            <input type="text" name="state" />
                        </div>
                        <div>
                            <label htmlFor="zip">Zip</label>
                            <input type="text" name="zip" />
                        </div>
                    </div> */}
                    <h1>
                        <i className="far fa-credit-card" /> Payment Information
                    </h1>
                    <div className="cc-num">
                        <label htmlFor="card-num">Payment Method</label>
                        <input type="text" name="card-num" />
                    </div>
                    <div className="cc-info">
                        <div>
                            <label htmlFor="card-num">Discount Code</label>
                            <input type="text" name="expire" />
                        </div>
                        <div>
                            <label htmlFor="card-num">CCV</label>
                            <input type="text" name="security" />
                        </div>
                    </div>
                    <div className="btns">
                        <button>Purchase</button>
                        <button onClick={() => navigate("/")}>Back to cart</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
