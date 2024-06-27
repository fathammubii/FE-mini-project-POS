import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeftNavbar = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-y-0 left-0 bg-sky-950 text-white flex flex-col justify-between min-h-full text-xs">
            <div>
                <button onClick={() => navigate('/')} className="bg-sky-950 p-4 rounded-none w-full text-left hover:bg-sky-800 flex items-center space-x-1 mt-16">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>

                    <span>Pesan Product</span>
                </button>
            </div>
            <div>
                <button onClick={() => navigate('/payment')} className="bg-sky-950 p-4 rounded-none w-full text-left hover:bg-sky-800 flex items-center space-x-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>

                    <span>Pembayaran</span>
                </button>
            </div>
            <div>
                <button onClick={() => navigate('/riwayat-transaksi')} className="bg-sky-950 p-4 rounded-none w-full text-left hover:bg-sky-800 flex items-center space-x-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                    </svg>
                    <span>Riwayat Transaksi</span>
                </button>
            </div>
            <div>
                <button onClick={() => navigate('/product-list')} className="bg-sky-950 p-4 rounded-none w-full text-left hover:bg-sky-800 flex items-center space-x-1 ">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H14.82C14.4 2.84 13.3 2 12 2C10.7 2 9.6 2.84 9.18 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM12 4C12.55 4 13 4.45 13 5C13 5.55 12.55 6 12 6C11.45 6 11 5.55 11 5C11 4.45 11.45 4 12 4ZM13 18H8C7.45 18 7 17.55 7 17C7 16.45 7.45 16 8 16H13C13.55 16 14 16.45 14 17C14 17.55 13.55 18 13 18ZM16 14H8C7.45 14 7 13.55 7 13C7 12.45 7.45 12 8 12H16C16.55 12 17 12.45 17 13C17 13.55 16.55 14 16 14ZM16 10H8C7.45 10 7 9.55 7 9C7 8.45 7.45 8 8 8H16C16.55 8 17 8.45 17 9C17 9.55 16.55 10 16 10Z" fill="white" />
                    </svg>
                    <span>List Product</span>
                </button>
            </div>

            <div className="text-gray-400 p-4">
                <hr className="border-gray-700 mb-2" />
                <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3335 2.66675H2.66683C1.9335 2.66675 1.34016 3.26675 1.34016 4.00008L1.3335 12.0001C1.3335 12.7334 1.9335 13.3334 2.66683 13.3334H13.3335C14.0668 13.3334 14.6668 12.7334 14.6668 12.0001V4.00008C14.6668 3.26675 14.0668 2.66675 13.3335 2.66675ZM13.0668 5.50008L8.3535 8.44675C8.14016 8.58008 7.86016 8.58008 7.64683 8.44675L2.9335 5.50008C2.76683 5.39341 2.66683 5.21341 2.66683 5.02008C2.66683 4.57341 3.1535 4.30675 3.5335 4.54008L8.00016 7.33341L12.4668 4.54008C12.8468 4.30675 13.3335 4.57341 13.3335 5.02008C13.3335 5.21341 13.2335 5.39341 13.0668 5.50008Z" fill="#E0E0E0" />
                    </svg>
                    <span>Support</span>
                </div>
                <p>cs@bosnet.com</p>
            </div>
        </div>
    );
}

export default LeftNavbar;
