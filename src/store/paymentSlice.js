// store/paymentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: [], // Pastikan initialState adalah array kosong
  reducers: {
    setPaymentOrders: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPaymentOrders } = paymentSlice.actions;

export default paymentSlice.reducer;
