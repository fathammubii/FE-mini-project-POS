// store/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ sortBy = '', sortOrder = '', title = '' }) => {
        let url = `http://localhost:8080/pos/api/listproduct`;

        const params = {};
        if (sortBy) params.sort_by = sortBy;
        if (sortOrder) params.sort_order = sortOrder;

        const response = await axios.get(url, { params });
        return response.data;
    }
);

export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchProductsByCategory',
    async (categoryId) => {
        const url = `http://localhost:8080/pos/api/listproduct/id?category_id=${categoryId}`;
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
            })
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.status = 'success';
            })
            .addCase(fetchProductsByCategory.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default productsSlice.reducer;
