import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addTransaction = createAsyncThunk(
  'payment/addTransaction',
  async (transactionData) => {
    const response = await axios.post('http://localhost:8080/pos/api/addtransaction', transactionData);
    return response.data;
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    orders: [],
    status: null,
  },
  reducers: {
    setPaymentOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTransaction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.status = 'success';
        state.orders = []; // Clear the orders after successful transaction
      })
      .addCase(addTransaction.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setPaymentOrders } = paymentSlice.actions;

export default paymentSlice.reducer;
