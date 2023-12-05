import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CartStyle.css"
import { useSelector } from 'react-redux';

export default function Cart() {
    const navigate = useNavigate();
    const products = useSelector((state) => state.addToCartReducer.cartList);
    const renderCartPageContent = () => {
        console.log(products);
        if (products.length === 0) {
            return (
                <div className="card my-2" style={{ height: "fit-content" }}>
                    <div className="card-body text-end">
                        <h3 className="text-center my-0">Your shopping cart is empty!</h3>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {renderProducts()}
                <div className="card" style={{ height: "fit-content" }}>
                    <div className="card-body text-end">
                        <button onClick={() => navigate("/checkout")} type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                    </div>
                </div>
            </div>
        )

    }
    const renderProducts = () => {
        return products.map((p) => {
            const { id, name, image, cartQuantity, price } = p;
            return (
                <div className="card rounded-3 mb-4" key={id}>
                    <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                                <img src={image} className="img-fluid rounded-3" alt={name} />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <p className="lead fw-normal mb-2">{name}</p>
                                {/* <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p> */}
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button className="btn btn-link px-2">
                                    <i className="fas fa-minus" />
                                </button>
                                <input id="form1" min={0} name="quantity" defaultValue={cartQuantity} type="number" className="form-control form-control-sm" />
                                <button className="btn btn-link px-2">
                                    <i className="fas fa-plus" />
                                </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 className="mb-0">${price}</h5>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    // console.log(products);
    return (
        <section className="h-100" id='shoppingCartPage' style={{ backgroundColor: '#eee' }}>
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">
                        <i onClick={() => navigate("/")} className="fa-solid fa-house fa-xl"></i>
                        <div className="d-flex justify-content-between align-items-center mb-4 my-2">
                            <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                            <div>
                                <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                            </div>
                        </div>
                        {renderCartPageContent()}


                    </div>
                </div>
            </div>
        </section >
    )
}