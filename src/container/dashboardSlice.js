import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Initial state
const initialState = {
    loading: false,
    refetch: false,
    dashboard: [],
    error: '',
}

// Get banner
export const fetchDashboard = createAsyncThunk('dashboard/api', async () => {
    return axios.get("/dashboard").then((res) => res.data)
})


// Slice 
const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    extraReducers: (builder) => {

        // Get Dashboard
        builder.addCase(fetchDashboard.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchDashboard.fulfilled, (state, action) => {
            state.loading = false
            state.dashboard = action.payload
            state.error = ''
        });
        builder.addCase(fetchDashboard.rejected, (state, action) => {
            state.loading = false
            state.dashboard = []
            state.error = action.error.message
        });

    }
})

export default dashboardSlice.reducer