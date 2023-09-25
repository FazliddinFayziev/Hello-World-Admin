import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialState = {
    loading: false,
    products: [],
    error: '',
}

export const fetchProducts = createAsyncThunk('product/api', () => {
    return axios.get("/").then((res) => res.data)
})

const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer