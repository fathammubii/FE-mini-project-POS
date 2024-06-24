// src/pages/TransactionDetailPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TransactionDetailPage = () => {
    const { id } = useParams();
    const [transactionDetails, setTransactionDetails] = useState([]);

    useEffect(() => {
        const fetchTransactionDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/pos/api/listtransaksidetail/${id}`);
                setTransactionDetails(response.data);
            } catch (error) {
                console.error('Error fetching transaction details:', error);
            }
        };

        fetchTransactionDetails();
    }, [id]);

    return (
        <div>
            <h1>Detail Transaksi</h1>
            <table>
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Quantity</th>
                        <th>Product ID</th>
                        <th>Sub Total</th>
                        <th>Product Name</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionDetails.map((detail, index) => (
                        <tr key={index}>
                            <td>{detail.transaction_id}</td>
                            <td>{detail.quantity}</td>
                            <td>{detail.product_id}</td>
                            <td>{detail.sub_total}</td>
                            <td>{detail.product_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionDetailPage;
