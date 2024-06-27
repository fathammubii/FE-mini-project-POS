import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeOrder } from '../features/orders/ordersSlice';

const OrderItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <button onClick={() => dispatch(removeOrder(item.productId))} className="text-red-500 mr-2">🗑</button>
        {item.title}
      </div>
      <div>
        <button onClick={() => dispatch(decrementQuantity(item.productId))} className="px-2">-</button>
        {item.quantity}
        <button onClick={() => dispatch(incrementQuantity(item.productId))} className="px-2">+</button>
      </div>
      <div>
        Rp. {item.price * item.quantity}
      </div>
    </div>
  );
};

export default OrderItem;
