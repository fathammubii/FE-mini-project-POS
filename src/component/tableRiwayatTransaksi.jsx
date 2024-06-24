import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const tableRiwayatTransaksi = ({transactions}) => {
    return(
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
            {transactions.map((transactions, index) => (
                <tr key={index}>
                    <td>{new Date(transactions.transaction_date).toLocaleString()}</td>
                    <td>{transactions.transaction_id}</td>
                    <td>{transactions.total_amount}</td>
                    <td>{transactions.total_pay}</td>
                    <td><button><Link to={`/transaction-detail/${transactions.transaction_id}`}>Detail Transaksi</Link></button></td>
                </tr>

            ))}

        </tbody>

    </table>
    )
}

export default tableRiwayatTransaksi;