import React, { Component } from 'react'
import "./ProductDetailStyle.css"

export default class ProductDetail extends Component {
    render() {
        const { name, price, description, shortDescription, quantity, image } = this.props.productDetail;
        return (
            <div>
                <div className="modal fade" id="product-detail" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold" id="exampleModalLabel">PRODUCT DETAIL</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="card mb-3" style={{ maxWidth: 700 }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={image} className="img-fluid rounded-start" alt={name} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title product-detail-title fw-bold">{name}</h5>
                                                <p className="card-text">{description}</p>
                                                <p className="card-text"><small className="text-muted">{shortDescription}</small></p>
                                                <p className="card-text"><strong>Price:</strong> {price}$</p>
                                                <p className="card-text"><strong>Quantity:</strong> {quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
