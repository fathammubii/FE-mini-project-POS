
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const categorySlice = createSlice({
    name : 'categories',
    initialState: {
        categories: [],
        status: null,
    },
    reducers:{
        fetchCategoriesStart(state){
            state.status = 'loading';
        },
        fetchCategorySuccess(state, action){
            state.status = 'succeeded';
            state.categories = action.payload;
        },
        fetchCategoryFailure(state, action){
            state.status = 'failed';
            state.error = action.payload;
        }
    }
})

export const  {
    fetchCategoriesStart,
    fetchCategorySuccess,
    fetchCategoryFailure,
} = categorySlice.actions;

export const fetchCategories = () => async (dispatch) =>{
    dispatch(fetchCategoriesStart());
    try{
        const response = await axios.get('http://localhost:8080/pos/api/category/list');
        dispatch(fetchCategorySuccess(response.data));
    } catch (error){
        dispatch(fetchCategoryFailure(error.toString()));
    }
};

export default categorySlice.reducer;