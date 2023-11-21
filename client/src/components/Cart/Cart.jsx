import React, { Component } from 'react'
import './CartStyle.css'

export default class Cart extends Component {
    renderCartList = () => {
        // if (this.props.cartList.length === 0) {
        //     return (
        //         <tr>
        //             <td className="fs-3">YOUR CART IS EMPTY <strong>˙◠˙</strong></td>
        //         </tr>
        //     );
        // }
        // return (
        //     <table className="table table-striped">
        //         <thead>
        //             <tr>
        //                 <th scope="col">ID</th>
        //                 <th scope="col">Item Image</th>
        //                 <th scope="col">Item Name</th>
        //                 <th scope="col">Unit</th>
        //                 <th scope="col">Quantity</th>
        //                 <th scope="col">Total</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {this.renderItems()}
        //         </tbody>
        //     </table>
        // );

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center" scope="col">ID</th>
                        <th className="text-center" scope="col">Item Image</th>
                        <th className="text-center" scope="col">Item Name</th>
                        <th className="text-center" scope="col">Unit</th>
                        <th className="text-center" scope="col">Quantity</th>
                        <th className="text-center" scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="text-center" scope="row">1</th>
                        <td className="text-center"><img className="img-thumbnail img-fluid"
                            width={120} src="https://svcy3.myclass.vn/images/adidas-prophere.png"
                            alt="Adidas Prophere" /></td>
                        <td className="text-center">Adidas Prophere</td>
                        <td className="text-center">350$</td>
                        <td className="text-center">2</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    // render every item in table body
    renderItems = () => {
        return this.props.cartList.map((element) => {
            const { id, image, name, price, cartQuantity } = element;
            <tr key={id}>
                {/* <th scope="row">{id}</th>
                <td><img src={image} alt={name} /></td>
                <td>{name}</td>
                <td>{price}$</td>
                <td>{cartQuantity}</td> */}
            </tr>
        });
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="shoppingCart" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold" id="exampleModalLabel">YOUR SHOPPING CART</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {this.renderCartList()}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Check out</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
