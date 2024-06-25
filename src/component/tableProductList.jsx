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
                        <th className='border-y-2 border-gray-200 p-2'>
                            <div className="flex space-x-1 items-center">
                                <div className='basis-1/5'></div>
                                <div className='flex flex-col'>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div>ID Product</div>
                            </div>
                        </th>
                        <th className='border-y-2 border-gray-200 p-2'>
                            <div className="flex space-x-1 items-center">
                                <div className='basis-1/5'></div>
                                <div className='flex flex-col'>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div>Nama Produk</div>
                            </div>
                        </th>
                        <th className='border-y-2 border-gray-200 p-2'>
                            <div className="flex space-x-1 items-center">
                                <div className='basis-1/5'></div>
                                <div className='flex flex-col'>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div>Harga Satuan</div>
                            </div>
                        </th>
                        <th className='border-y-2 border-gray-200 p-2'>
                            <div className="flex space-x-1 items-center">
                                <div className='basis-1/5'></div>
                                <div className='flex flex-col'>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div>Kategori</div>
                            </div>
                        </th>
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
                                    <button className='p-0 m-1'><Link to={`#`}>Detail</Link></button>
                                    <button className='p-0 m-1'><Link to={`#`}>Edit</Link></button>
                                    <button className='p-0 m-1'><Link to={`#`}>Hapus</Link></button>
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
