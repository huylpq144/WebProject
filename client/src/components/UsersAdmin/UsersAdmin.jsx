import React, { useEffect, useState } from 'react'
import "./UsersAdminStyle.css"
import axios from 'axios';

export default function UsersAdmin() {
    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const config = {
                    headers: {
                        'token': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                }
                const response = await axios.get("http://localhost:3001/api/get-all-users", config);
                setUsersData(response.data.rows);
                // console.log(usersData);
                return;
            } catch (error) {
                console.log(error);
            }
        }
        fetchProductsData();
    }, [])
    const renderUsers = () => {
        return usersData.map((p) => {
            return (
                <tr key={p.userId}>
                    <td><img src={p.image} alt="Đầm dài bệt vai" /></td>
                    <td>{p.name}</td>
                    <td>{p.price} VNĐ</td>
                    <td>{p.brand}</td>
                    <td>{p.inventory}</td>
                    <td className="">
                        <button type="button" onClick={() => handleEditProductModal(p)} className="btn btn-warning m-2">Edit</button>
                        <button type="button" onClick={() => handleDeleteBtn(p)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            );
        });
    }
    return (
        <div id='UsersAdmin'>
            <div className="user-page-wrapper">
                <header className="user-header">
                    <h1>Users</h1>
                </header>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="user-table">
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Birthday</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
                <button id="deleteUserButton" className="delete-user-button">Delete User</button> {/* Adjusted button styling class */}
                <footer className="pagination-footer">
                    {/* Pagination goes here */}
                </footer>
            </div>


        </div>
    )
}
