import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Initial state
const initialState = {
    loading: false,
    refetch: false,
    qrcodes: [],
    error: '',
}

// Get banner
export const fetchQrcode = createAsyncThunk('qrcode/api', async () => {
    return axios.get("/qrcode").then((res) => res.data)
})

// // Get Single Banner
// export const fetchSingleBanner = createAsyncThunk('singleBanner/api', async (payload) => {
//     const { id } = payload
//     return axios.get(`/getsinglebanner?bannerId=${id}`).then((res) => res.data)
// })

// // Edit Banner 
// export const fetchAndEditBanner = createAsyncThunk('editBanner/api', async (payload) => {
//     const { id, data } = payload;
//     const response = await axios.put(`/editbanner?bannerId=${id}`, data);
//     return response.data;
// });


// Slice 
const qrCodeSlice = createSlice({
    name: "qrcode",
    initialState,
    extraReducers: (builder) => {

        // Get banners
        builder.addCase(fetchQrcode.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchQrcode.fulfilled, (state, action) => {
            state.loading = false
            state.qrcodes = action.payload
            state.error = ''
        });
        builder.addCase(fetchQrcode.rejected, (state, action) => {
            state.loading = false
            state.qrcodes = []
            state.error = action.error.message
        });

    }
})

export default qrCodeSlice.reducer