import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Initial state
const initialState = {
    loading: false,
    refetch: false,
    sBanner: [],
    banners: [],
    error: '',
}

// Get banner
export const fetchBanner = createAsyncThunk('banner/api', async () => {
    return axios.get("/getbanner").then((res) => res.data)
})

// Get Single Banner
export const fetchSingleBanner = createAsyncThunk('singleBanner/api', async (payload) => {
    const { id } = payload
    return axios.get(`/getsinglebanner?bannerId=${id}`).then((res) => res.data)
})

// Edit Banner 
export const fetchAndEditBanner = createAsyncThunk('editBanner/api', async (payload) => {
    const { id, data } = payload;
    const response = await axios.put(`/editbanner?bannerId=${id}`, data);
    return response.data;
});


// Slice 
const bannerSlice = createSlice({
    name: "banners",
    initialState,
    extraReducers: (builder) => {

        // Get banners
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

        // Get Single Banner
        builder.addCase(fetchSingleBanner.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchSingleBanner.fulfilled, (state, action) => {
            state.loading = false
            state.sBanner = action.payload
            state.error = ''
        });
        builder.addCase(fetchSingleBanner.rejected, (state, action) => {
            state.loading = false
            state.sBanner = []
            state.error = action.error.message
        });


        // Edit Banner
        builder.addCase(fetchAndEditBanner.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchAndEditBanner.fulfilled, (state) => {
            state.loading = false
            state.refetch = !state.refetch
            state.error = ''
        });
        builder.addCase(fetchAndEditBanner.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });


    }
})

export default bannerSlice.reducer