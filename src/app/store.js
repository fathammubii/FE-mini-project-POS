import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import ordersReducer from '../features/orders/ordersSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        orders: ordersReducer,
    },
});

export default store;