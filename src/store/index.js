import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import ordersReducer from './ordersSlice';
import paymentReducer from './paymentSlice';
import categoryReducer from './categorySlice';

const store = configureStore({
  reducer: {
    payment: paymentReducer,
    products: productsReducer,
    orders: ordersReducer,
    categories: categoryReducer,
  },
});

export default store;
