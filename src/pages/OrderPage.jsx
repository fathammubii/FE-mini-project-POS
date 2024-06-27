import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../component/OrderItem';
import { Link } from 'react-router-dom';

const OrderPage = () => {
    const orders = useSelector((state) => state.orders.items);
    const totalPrice = orders.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="p-4">
            <div className='flex'>
                <h1 className='flex-none text-left'>Daftar Pesanan</h1>
                <div className='grow'></div>
                <div>
                    <button><Link to={`/`}>{"< Kembali"}</Link></button>
                </div>
            </div>
            {orders.map((item) => (
                <OrderItem key={item.productId} item={item} />
            ))}
            <div className="mt-4 text-right text-lg font-bold">
                Total: Rp. {totalPrice}
            </div>
            <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded w-full">
                BAYAR
            </button>
        </div>
    );
};

export default OrderPage;
