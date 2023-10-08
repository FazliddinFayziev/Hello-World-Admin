import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Initial state
const initialState = {
    loading: false,
    refetch: false,
    orders: [],
    error: '',
}

// Get orders
export const fetchOrders = createAsyncThunk('orders/api', async () => {
    return axios.get("/getcard").then((res) => res.data)
})

// update Orders
export const updateOrders = createAsyncThunk('updateorders/api', async (payload) => {
    const { id } = payload
    return axios.put(`/updatecart?cardId=${id}`).then((res) => res.data)
})

// Delete orders
export const deleteOrder = createAsyncThunk('deleteorder/api', async (payload) => {
    const { id } = payload
    return axios.delete(`/deletecard?cardId=${id}`).then((res) => res.data)
})


// Slice 
const getOrdersSlice = createSlice({
    name: "orders",
    initialState,
    extraReducers: (builder) => {

        // Get orders
        builder.addCase(fetchOrders.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.loading = false
            state.orders = action.payload
            state.error = ''
        });
        builder.addCase(fetchOrders.rejected, (state, action) => {
            state.loading = false
            state.orders = []
            state.error = action.error.message
        });

        // Update Orders
        builder.addCase(updateOrders.pending, (state) => {
            state.loading = true
        });
        builder.addCase(updateOrders.fulfilled, (state) => {
            state.refetch = !state.refetch;
        });
        builder.addCase(updateOrders.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });

        // Delete Single Order
        builder.addCase(deleteOrder.pending, (state) => {
            state.loading = true
        });
        builder.addCase(deleteOrder.fulfilled, (state) => {
            state.refetch = !state.refetch;
        });
        builder.addCase(deleteOrder.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });

    }
})

export default getOrdersSlice.reducer