
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TransactionDetailPage = () => {
    const { id } = useParams();
    const [transactionDetails, setTransactionDetails] = useState([]);
    const [transaction, setTransaction] = useState(null);
    const [productDetails, setProductDetails] = useState({});

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

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/pos/api/listtransaksi');
                const transactions = response.data;
                const selectedTransaction = transactions.find(trx => trx.transaction_id.toString() === id);
                setTransaction(selectedTransaction);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, [id]);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const productDetailsMap = {};

                for (const detail of transactionDetails) {
                    const productResponse = await axios.get(`http://localhost:8080/pos/api/detailproduct/${detail.product_id}`);
                    productDetailsMap[detail.product_id] = productResponse.data[0];
                }

                setProductDetails(productDetailsMap);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        if (transactionDetails.length > 0) {
            fetchProductDetails();
        }
    }, [transactionDetails]);

    return (
        <div>
            <div className='flex'>
                <h1 className='flex-none text-left'>Detail Transaksi</h1>
                <div className='grow'></div>
                <div>
                    <button><Link to={`/riwayat-transaksi`}>Kembali</Link></button>
                </div>
            </div>

            <br />
            <hr />

            <br />
            <div className="grid grid-cols-2 text-left">
                <div className="flex flex-col">
                    <div>ID Transaksi</div>
                    <div>Tanggal Transaksi</div>
                    <div>Total Harga</div>
                    <div>Total Bayar</div>
                </div>
                <div>
                    {transaction && (
                        <>
                            <div>{transaction.transaction_id}</div>
                            <div>{new Date(transaction.transaction_date).toLocaleString()}</div>
                            <div>{transaction.total_amount}</div>
                            <div>{transaction.total_pay}</div>
                        </>
                    )}
                </div>
            </div>

            <br />

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
                                <td>
                                    {productDetails[detail.product_id] ? `Rp. ${productDetails[detail.product_id].price}` : 'Loading...'}
                                </td>
                                <td>{detail.quantity}</td>
                                <td><p className='proportional-nums'>Rp. {detail.sub_total}</p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionDetailPage;
