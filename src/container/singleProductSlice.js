// SingleProduct.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialState = {
    sLoading: false,
    sProduct: [],
    sError: []
}

export const fetchSingleProduct = createAsyncThunk('single/product/api', async (productId) => {
    return axios.get(`/single?singleId=${productId}`).then((res) => res.data)
})

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchSingleProduct.pending, (state) => {
            state.sLoading = true
        })
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.sLoading = false
            state.sProduct = action.payload
            state.sError = ''
        })
        builder.addCase(fetchSingleProduct.rejected, (state, action) => {
            state.sLoading = false
            state.sProduct = []
            state.sError = action.error.message
        })
    }
})

export default singleProductSlice.reducer;