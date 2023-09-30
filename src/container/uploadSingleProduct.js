import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Initial state
const initialState = {
    data: null,
    loading: false,
    error: null,
}

// Axios
export const uploadProduct = createAsyncThunk('uploadProduct/api', async (payload) => {
    const { data } = payload;
    const response = await axios.post('/upload', data);
    return response.data;
});

// dataSlice
const uploadProductSlice = createSlice({
    name: 'uploadProduct',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(uploadProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(uploadProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(uploadProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
                console.log(state.error)
            });
    },
});

export default uploadProductSlice.reducer;
