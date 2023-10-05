import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialState = {
    loading: false,
    orders: [],
    error: '',
}

export const fetchOrders = createAsyncThunk('orders/api', () => {
    return axios.get("/getcard").then((res) => res.data)
})

const getOrdersSlice = createSlice({
    name: "orders",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.loading = false
            state.orders = action.payload
            state.error = ''
        })
        builder.addCase(fetchOrders.rejected, (state, action) => {
            state.loading = false
            state.orders = []
            state.error = action.error.message
        })
    }
})

export default getOrdersSlice.reducer