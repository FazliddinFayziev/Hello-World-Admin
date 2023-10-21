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

// Get Single Qr code
export const fetchSingleQrcode = createAsyncThunk('singleqrcode/api', async (payload) => {
    const { id } = payload
    return axios.get(`/singleqrcode?qrId=${id}`).then((res) => res.data)
})

// Edit Single QR code
export const fetchAndEditQrCode = createAsyncThunk('editmyqrcode/api', async (payload) => {
    const { qrcodeId, readyQrCode } = payload
    return axios.put(`/editqrcode?idOfQrcode=${qrcodeId}`, readyQrCode).then((res) => res.data);
})

// Upload Single QR code
export const uploadQrCode = createAsyncThunk('uploadqrcode/api', async (payload) => {
    const { data } = payload
    return axios.post(`/qrcode`, data).then((res) => res.data);
})

// Delete Single QR code
export const deleteQrcode = createAsyncThunk('deleteqrcode/api', async (payload) => {
    const { qrcodeId } = payload
    return axios.delete(`deleteqrcode?id=${qrcodeId}`).then((res) => res.data)
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

        // Upload Single qrcode
        builder.addCase(uploadQrCode.pending, (state) => {
            state.loading = true
        });
        builder.addCase(uploadQrCode.fulfilled, (state) => {
            state.loading = false
        });
        builder.addCase(uploadQrCode.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });

        // Delete Single qrcode
        builder.addCase(deleteQrcode.pending, (state) => {
            state.loading = true
        });
        builder.addCase(deleteQrcode.fulfilled, (state) => {
            state.refetch = !state.refetch
        });
        builder.addCase(deleteQrcode.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });

    }
})

export default qrCodeSlice.reducer