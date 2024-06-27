import React from 'react';
import ProductList from '../components/ProductList';
import OrderList from '../components/OrderList';

const HomePage = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="col-span-2">
        <h1 className="text-2xl font-bold mb-4 text-left">Daftar Produk</h1>
        <ProductList />
      </div>
      <div className='border-l-2 border-gray-600 px-6'>
        <h1 className="text-2xl font-bold mb-4 text-left">Daftar Pesanan</h1>
        <OrderList />
      </div>
    </div>
  );
};

export default HomePage;
