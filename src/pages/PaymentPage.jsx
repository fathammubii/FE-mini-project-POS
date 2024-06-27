import React from 'react';
import { useSelector } from 'react-redux';

const PaymentPage = () => {
  const paymentState = useSelector(state => state.payment || []);
  const orders = paymentState || []; 
  const totalAmount = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);
  const [paidAmount, setPaidAmount] = React.useState(0);

  const handlePaidAmountChange = (event) => {
    setPaidAmount(event.target.value);
  };

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
        <button className="bg-blue-500 text-white p-4 w-full font-semibold">SELESAIKAN</button>
      </div>
    </div>
  );
};

export default PaymentPage;
