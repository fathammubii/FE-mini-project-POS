import React from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../store/ordersSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddOrder = () => {
        dispatch(addOrder(product));
    };

    return (
        <div className="border p-2">
            <img src={product.image} alt={product.title} className="w-full h-32 object-cover" />
            <div className="mt-2 text-center">
                <h3 className="font-bold">{product.title}</h3>
                <p className="text-gray-600">Rp. {product.price}</p>
                <button onClick={handleAddOrder} className="mt-2 bg-blue-500 text-white px-2 py-1 rounded">
                    Add
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
