import React from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../features/orders/ordersSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToOrder = () => {
    dispatch(addOrder(product));
  };

  return (
    <div className="border p-4">
      <img src={product.image} alt={product.title} className="w-full h-32 object-cover" />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">Rp. {product.price}</p>
      <button onClick={handleAddToOrder} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
        Tambah
      </button>
    </div>
  );
};

export default ProductCard;
