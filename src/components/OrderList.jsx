import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeOrder, incrementQuantity, decrementQuantity } from '../store/ordersSlice';
import OrderItem from './OrderItem';
import { setPaymentOrders } from '../store/paymentSlice';

const OrderList = () => {
  const orders = useSelector(state => state.orders || []); // Gunakan fallback jika state.orders undefined
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (productId) => {
    dispatch(removeOrder(productId));
  };

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const handlePayment = () => {
    dispatch(setPaymentOrders(orders)); // Simpan data pesanan ke halaman pembayaran
    navigate('/payment'); // Navigasi ke halaman pembayaran
  };

  const totalPrice = orders.reduce((total, order) => total + order.price * order.quantity, 0);

  return (
    <div className="flex flex-col">
      {orders.map(order => (
        <OrderItem
          key={order.productId}
          order={order}
          onRemove={handleRemove}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <div className="mt-4 flex justify-between">
        <span className="font-bold">Total</span>
        <span className="font-bold">Rp. {totalPrice}</span>
      </div>
      <button onClick={handlePayment} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">BAYAR</button>
    </div>
  );
};

export default OrderList;
