import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTransaction, resetPayment } from '../store/paymentSlice';
import { resetOrders } from '../store/ordersSlice';

const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paymentState = useSelector(state => state.payment.orders || []);
  const status = useSelector(state => state.payment.status);
  const orders = useSelector(state => state.orders);
  const totalAmount = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handlePaidAmountChange = (event) => {
    setPaidAmount(parseFloat(event.target.value));
  };

  const handleOrder = () => {
    const transactionData = {
      totalAmount,
      totalPay: paidAmount,
      transactionDetailReqList: orders.map(order => ({
        productId: order.productId,
        quantity: order.quantity,
        subtotal: order.price * order.quantity,
      })),
    };

    dispatch(addTransaction(transactionData));
  };

  useEffect(() => {
    if (status === 'success') {
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        dispatch(resetPayment());
        dispatch(resetOrders()); // Reset orders setelah transaksi berhasil
        navigate('/'); 
      }, 2000); // Popup setelah 2 detik
    }
  }, [status, navigate, dispatch]);

  return (
    <div className="flex p-8">
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-semibold mb-4">Rincian Pesanan</h2>
        {orders.map((order, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img src={order.image} alt={order.title} className="w-20 h-20 object-cover mr-4" />
              <div>
                <h3 className="font-semibold">{order.title}</h3>
                <p className="text-gray-600">Rp. {order.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="mr-2">{order.quantity}x</p>
              <p className="font-semibold">Rp. {order.price * order.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/3 p-4 border-l-2 border-gray-600">
        <h2 className="text-xl font-semibold mb-4">Pembayaran</h2>
        <div className="flex justify-between mb-4">
          <p>Total</p>
          <p className="font-semibold">Rp. {totalAmount}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Dibayar</p>
          <input
            type="number"
            className="border p-2"
            value={paidAmount}
            onChange={handlePaidAmountChange}
          />
        </div>
        <div className="flex justify-between mb-4">
          <p>Kembalian</p>
          <p className="font-semibold">Rp. {paidAmount - totalAmount}</p>
        </div>
        <button
          className={`bg-blue-500 text-white p-4 w-full font-semibold ${paidAmount < totalAmount ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={paidAmount < totalAmount}
          onClick={handleOrder}
        >
          ORDER
        </button>
      </div>
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Pembelian Sukses!</h2>
            <p>Terima kasih atas pembelian Anda.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
