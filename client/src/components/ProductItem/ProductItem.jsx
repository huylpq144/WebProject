import React, { Component } from 'react'
import "./ItemStyle.css"

export default class ProductItem extends Component {
    render() {
        const { name, price, image } = this.props.item;
        return (
            <div>
                <div className="card product-item">
                    <img src={image} className="card-img-top img-thumbnail" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-5">{name}</h5>
                        <p className="card-text">{price}$</p>
                    </div>
                    <div className="card-footer">
                        {/* add onclick event for these buttons */}
                        <button type="button" className="btn btn-primary">Add to cart</button>
                        <button
                            type="button" className="btn btn-warning"
                            data-bs-toggle="modal" data-bs-target="#product-detail"
                            onClick={() => this.props.getProductDetail(this.props.item)}>Information</button>
                    </div>
                </div>
            </div>
        );
    }
}
