import React, { useState } from 'react'
import productsData from "../../data/data.json"
import "./mainStyle.css"
import ProductList from '../ProductList/ProductList'
import ProductDetail from '../ProductDetail/ProductDetail'



export default function ShoesStore() {
    const [productDetail, setProductDetail] = useState(productsData[0]);


    const getProductDetail = (product) => {
        setProductDetail(product);
    };

    const [cartList, setCartList] = useState([]);

    const addToCart = (product) => {
        const currentCart = [...cartList];
        const index = currentCart.findIndex((element) => element.id === product.id);

        if (index !== -1) {
            currentCart[index].cartQuantity++;
        } else {
            const newProduct = { ...product, cartQuantity: 1 };
            currentCart.push(newProduct);
        }

        setCartList(currentCart);
    };

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/black-friday-2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/clothing-store.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/store-front-2.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div id="mainCategories" className="row row-cols-1 row-cols-md-3 g-4 my-5 mx-3">
                <div className="col">
                    <div className="card">
                        <img src="/images/pants.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/skirt.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/shirts-6.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>

            <ProductList productsData={productsData} getProductDetail={getProductDetail} />
            <ProductDetail productDetail={productDetail} />
        </div>
    );
}

