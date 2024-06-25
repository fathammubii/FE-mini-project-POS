import React from 'react';
import { Link } from 'react-router-dom';

const TableProductList = ({ products, productsPerPage, totalProducts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <table className='table-auto text-center w-full'>
                <thead>
                    <tr>
                        <th className='border-y-2 border-gray-200 p-2'>ID Produk</th>
                        <th className='border-y-2 border-gray-200 p-2'>Nama Produk</th>
                        <th className='border-y-2 border-gray-200 p-2'>Harga Satuan</th>
                        <th className='border-y-2 border-gray-200 p-2'>Kategori</th>
                        <th className='border-y-2 border-gray-200 p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.productId}</td>
                            <td>{product.title}</td>
                            <td>Rp. {product.price}</td>
                            <td>{product.categoryName}</td>
                            <td>
                                <div className='grid grid-cols-3'>
                                    <button><Link to={`#`}>Detail</Link></button>
                                    <button><Link to={`#`}>Edit</Link></button>
                                    <button><Link to={`#`}>Hapus</Link></button>
                                </div>
                            </td>
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

export default TableProductList;
