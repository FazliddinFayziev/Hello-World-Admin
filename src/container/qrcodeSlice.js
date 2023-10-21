import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Initial state
const initialState = {
    loading: false,
    refetch: false,
    qrcodes: [],
    sqrcode: [],
    error: '',
}

// Get All QR codes
export const fetchQrcode = createAsyncThunk('qrcode/api', async () => {
    return axios.get("/qrcode").then((res) => res.data)
})

export const fetchSingleQrcode = createAsyncThunk('singleqrcode/api', async (payload) => {
    const { id } = payload
    return axios.get(`/singleqrcode?qrId=${id}`).then((res) => res.data)
})

export const fetchAndEditQrCode = createAsyncThunk('editqrcode/api', async (payload) => {
    const { id, data } = payload
    return axios.put(`/editqrcode?idOfQrcode=${id}`, data).then((res) => res.data).catch((error) => console.log(error));
})

// Slice 
const qrCodeSlice = createSlice({
    name: "qrcode",
    initialState,
    extraReducers: (builder) => {

        // Get qrcodes
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

        // Get single qrcodes
        builder.addCase(fetchSingleQrcode.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchSingleQrcode.fulfilled, (state, action) => {
            state.loading = false
            state.sqrcode = action.payload
            state.error = ''
        });
        builder.addCase(fetchSingleQrcode.rejected, (state, action) => {
            state.loading = false
            state.sqrcode = []
            state.error = action.error.message
        });

        // Edit Single qrcode
        builder.addCase(fetchAndEditQrCode.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchAndEditQrCode.fulfilled, (state) => {
            state.refetch = !state.refetch
        });
        builder.addCase(fetchAndEditQrCode.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });

    }
})

export default qrCodeSlice.reducer