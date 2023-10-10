import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Initial state
const initialState = {
    loading: false,
    refetch: false,
    banners: [],
    error: '',
}

// Get banner
export const fetchBanner = createAsyncThunk('banner/api', async () => {
    return axios.get("/getbanner").then((res) => res.data)
})

// update Orders
// export const updateOrders = createAsyncThunk('updateorders/api', async (payload) => {
//     const { id } = payload
//     return axios.put(`/updatecart?cardId=${id}`).then((res) => res.data)
// })

// // Delete orders
// export const deleteOrder = createAsyncThunk('deleteorder/api', async (payload) => {
//     const { id } = payload
//     return axios.delete(`/deletecard?cardId=${id}`).then((res) => res.data)
// })


// Slice 
const bannerSlice = createSlice({
    name: "banners",
    initialState,
    extraReducers: (builder) => {

        // Get orders
        builder.addCase(fetchBanner.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchBanner.fulfilled, (state, action) => {
            state.loading = false
            state.banners = action.payload
            state.error = ''
        });
        builder.addCase(fetchBanner.rejected, (state, action) => {
            state.loading = false
            state.banners = []
            state.error = action.error.message
        });

    }
})

export default bannerSlice.reducer