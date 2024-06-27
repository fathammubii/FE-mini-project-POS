// store/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ sortBy = '', title = '' }) => {
        let url = `http://localhost:8080/pos/api/listproduct`;

        if (sortBy) {
            url += `?sort_by=${sortBy}`;
        }

        const response = await axios.get(url);
        return response.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.status = 'success';
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default productsSlice.reducer;
