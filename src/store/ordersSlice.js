// store/ordersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
    name: 'orders',
    initialState: [],
    reducers: {
        addOrder: (state, action) => {
            const existingOrder = state.find(order => order.productId === action.payload.productId);
            if (existingOrder) {
                existingOrder.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeOrder: (state, action) => {
            return state.filter(order => order.productId !== action.payload);
        },
        incrementQuantity: (state, action) => {
            const order = state.find(order => order.productId === action.payload);
            if (order) {
                order.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const order = state.find(order => order.productId === action.payload);
            if (order && order.quantity > 1) {
                order.quantity -= 1;
            }
        },
        resetOrders: () => {
            return []; // Mengembalikan state ke array kosong
          }
    },
});

export const { addOrder, removeOrder, incrementQuantity, decrementQuantity, resetOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
