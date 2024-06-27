import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import ordersReducer from './ordersSlice';
import paymentReducer from './paymentSlice';

const store = configureStore({
  reducer: {
    payment: paymentReducer,
    products: productsReducer,
    orders: ordersReducer,
  },
});

export default store;
