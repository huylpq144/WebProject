import React, { Component } from 'react'
import "./ListStyle.css"
import ProductItem from '../ProductItem/ProductItem';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <div className="main-heading">
                    <h1>Shoes fashion</h1>
                </div>
                <div className="container product-list">
                    <div id='product-list' className="row row-cols-1 row-cols-md-4 g-4">
                        {this.renderProductList()}
                    </div>
                </div>
            </div>
        )
    }

    renderProductList = () => {
        return this.props.productsData.map((element) => {
            return (
                <div key={element.id} className="col">
                    <ProductItem
                        item={element}
                        getProductDetail={this.props.getProductDetail} />
                </div>
            );
        });
    }



}
