import React from 'react';

const OrderItem = ({ order, onRemove, onIncrement, onDecrement }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <button onClick={() => onRemove(order.productId)} className="text-red-500">Hapus</button>
      <span>{order.title}</span>
      <span>Rp. {order.price}</span>
      <div className="flex items-center">
        <button onClick={() => onDecrement(order.productId)} className="px-2">-</button>
        <span>{order.quantity}</span>
        <button onClick={() => onIncrement(order.productId)} className="px-2">+</button>
      </div>
    </div>
  );
};

export default OrderItem;
