import React, { useEffect, useState } from 'react'
import productsDataJson from "../../data/data.json"
import newProductsData from "../../data/product.json"
import "./mainStyle.css"
import ProductList from '../ProductList/ProductList'
import ProductDetail from '../ProductDetail/ProductDetail'
import axios from 'axios'



export default function HomePage() {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                const body = {
                    categoryId: ""
                }
                const response = await axios.post("http://localhost:3001/api/product/get-all-product-not-check", body);
                setProductsData(response.data.rows);
                // console.log(response.data.rows);
                return;
            } catch (error) {
                console.log(error);
            }
        }
        fetchProductsData();
    }, [])

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
                            <h5 className="card-title">Thời Trang Đầy Tinh Tế</h5>
                            <p className="card-text">Chào mừng bạn đến với FashionHub - nơi kết nối đam mê thời trang và phong cách. Chúng tôi tự hào mang đến những bộ sưu tập độc đáo, từ những xu hướng thịnh hành đến những kiểu dáng classic, tạo nên sự đa dạng cho mọi phong cách. Hãy khám phá ngay để tìm ra bộ trang phục hoàn hảo cho phong cách riêng của bạn!</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/skirt.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Chất Lượng và Xu Hướng Hiện Đại</h5>
                            <p className="card-text">FashionHub cam kết mang đến cho bạn những sản phẩm chất lượng nhất từ các nhãn hiệu uy tín trên thế giới. Từ chất liệu đến kiểu dáng, chúng tôi không chỉ theo đuổi sự xuất sắc mà còn luôn cập nhật những xu hướng thời trang mới nhất. Với chúng tôi, bạn không chỉ mua quần áo, bạn đang chọn lựa phong cách và sự tự tin.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/shirts-6.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Trải Nghiệm Mua Sắm Độc Đáo</h5>
                            <p className="card-text">FashionHub không chỉ là một cửa hàng mua sắm, mà là điểm đến của sự độc đáo và phong cách cá nhân. Bạn sẽ không chỉ cảm thấy thoải mái với những bộ trang phục tuyệt vời, mà còn trải nghiệm mua sắm thuận tiện và dễ dàng. Hãy để chúng tôi chăm sóc phong cách của bạn - vì bạn xứng đáng với sự đẳng cấp và tinh tế.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <ProductList productsData={productsData} getProductDetail={getProductDetail} />
            <ProductDetail productDetail={productDetail} /> */}
            <ProductList productsData={productsData} newProductsData={newProductsData} />
            <ProductDetail />

        </div>
    );
}

