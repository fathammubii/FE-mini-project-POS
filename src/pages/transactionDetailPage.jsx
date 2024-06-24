// src/pages/TransactionDetailPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
            <div className='flex'>
                <h1 className='flex-none text-left'>Detail Transaksi</h1>
                <div className='grow'></div>
                <div>
                    <button><Link to={`/riwayat-transaksi`}>Kembali</Link></button>
                </div>
            </div>

            <br></br>
            <hr></hr>

            <br></br>
            <div className="grid grid-cols-2 text-left">
                <div className="flex flex-col">
                    <div>ID Transaksi</div>
                    <div>Tanggal Transaksi</div>
                    <div>Total Harga</div>
                    <div>Total Bayar</div>
                </div>
                <div>
                    {/* <div>{transactionDetails[1].transaction_id}</div> */}
                </div>
            </div>

            <br></br>

            <div>
                <table className='table-auto text-center w-full'>
                    <thead>
                        <tr>
                            <th className='border-y-2 border-gray-200 p-2'>ID Product</th>
                            <th className='border-y-2 border-gray-200 p-2'>Nama Produk</th>
                            <th className='border-y-2 border-gray-200 p-2'>Harga Satuan</th>
                            <th className='border-y-2 border-gray-200 p-2'>Quantity</th>
                            <th className='border-y-2 border-gray-200 p-2'>Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionDetails.map((detail, index) => (
                            <tr key={index}>
                                <td>{detail.product_id}</td>
                                <td>{detail.product_name}</td>
                                <td>{ }</td>
                                <td>{detail.quantity}</td>
                                <td>Rp. {detail.sub_total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionDetailPage;
