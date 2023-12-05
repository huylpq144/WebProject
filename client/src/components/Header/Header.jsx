import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./HeaderStyle.css"
// import { addToCartAction } from '../../store/actions/addToCartAction';
import { useSelector } from 'react-redux';
// import Cart from '../Cart/Cart';

export default function Header() {
    const navigate = useNavigate();
    const size = useSelector(state => state.addToCartReducer.size);
    return (
        <div id="storeHeader">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a onClick={() => navigate("/")} className="navbar-brand" href="/">
                        FashionHub
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="dropdown">
                                    <a
                                        className="btn btn-dark dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Đầm
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item w-100 px-4" href="#">
                                                Đầm Dài
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item w-100 px-4" href="#">
                                                Đầm Ngắn
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item w-100 px-4" href="#">
                                                Đầm Ôm
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <a
                                        className="btn btn-dark dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Quần/Váy
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item w-100 px-4" href="#">
                                                Jeans
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item w-100 px-4" href="#">
                                                Quần Váy
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item w-100 px-4" href="#">
                                                Váy Chữ A
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item w-100 px-4" href="#">
                                                Quần Short
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item w-100 px-4" href="#">
                                                Quần Dài
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <a
                                        className="btn btn-dark dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Áo
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item w-100 px-4" href="#">
                                                Áo Dài
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item w-100 px-4" href="#">
                                                Áo Croptop
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item w-100 px-4" href="#">
                                                Áo Thun
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item space-s"></li>
                        </ul>
                    </div>
                    <button onClick={() => navigate("/cart")} id='shoppingCart' className="dropdown-item position-relative" type="button">
                        <i className="fa-solid fa-cart-shopping" />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            style={{ fontSize: '10px' }}>
                            {size}
                        </span>
                    </button>

                </div>
                <form className="d-flex search-form" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-dark" type="submit">
                        <i className="fa-solid fa-magnifying-glass" />
                    </button>
                </form>

                {/* <Cart cartList={this.props.cartList} /> */}
                <div id='user-actions' className="btn-group">
                    <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                        aria-expanded="false"
                    >
                        <i className="fa-solid fa-user" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
                        <li>
                            <button onClick={() => navigate("/login")} className="dropdown-item" type="button">
                                <i className="fa-solid fa-right-to-bracket" style={{ color: '#000000' }} /> Login
                            </button>
                        </li>
                        <li>
                            <button onClick={() => navigate("/signup")} className="dropdown-item" type="button">
                                <i className="fa-solid fa-user-plus" style={{ color: '#000000' }} /> Signup
                            </button>
                        </li>

                    </ul>
                </div>

            </nav>
        </div>


    );
}
