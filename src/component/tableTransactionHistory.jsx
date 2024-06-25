import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TableTransactionHistory = ({ transactions, transactionsPerPage, totalTransactions, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTransactions / transactionsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <table className='table-auto text-center w-full'>
                <thead>
                    <tr>
                        <th className='border-y-2 border-gray-200 p-2'>Tanggal Transaksi</th>
                        <th className='border-y-2 border-gray-200 p-2'>ID Transaksi</th>
                        <th className='border-y-2 border-gray-200 p-2'>Total Harga</th>
                        <th className='border-y-2 border-gray-200 p-2'>Total Bayar</th>
                        <th className='border-y-2 border-gray-200 p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{new Date(transaction.transaction_date).toLocaleString()}</td>
                            <td>{transaction.transaction_id}</td>
                            <td>Rp. {transaction.total_amount}</td>
                            <td>Rp. {transaction.total_pay}</td>
                            <td><button><Link to={`/transaction-detail/${transaction.transaction_id}`}>Detail Transaksi</Link></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='flex justify-center mt-4'>
                <button 
                    onClick={() => paginate(currentPage - 1)} 
                    disabled={currentPage === 1}
                    className='mx-1 px-3 py-1 border rounded'
                >
                    Previous
                </button>
                {pageNumbers.map(number => (
                    <button 
                        key={number} 
                        onClick={() => paginate(number)} 
                        className={`mx-1 px-3 py-1 border rounded ${currentPage === number ? 'bg-gray-300' : ''}`}
                    >
                        {number}
                    </button>
                ))}
                <button 
                    onClick={() => paginate(currentPage + 1)} 
                    disabled={currentPage === pageNumbers.length}
                    className='mx-1 px-3 py-1 border rounded'
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default TableTransactionHistory;
