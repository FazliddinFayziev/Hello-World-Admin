import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Initial state
const initialState = {
    data: null,
    loading: false,
    error: null,
    refetch: false
}

// Axios
export const fetchAndEditProduct = createAsyncThunk('editProduct/api', async (payload) => {
    const { id, data } = payload;
    const response = await axios.put(`/edit?id=${id}`, data);
    return response.data;
});

// dataSlice
const editProductSlice = createSlice({
    name: 'editProduct',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAndEditProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAndEditProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.refetch = !state.refetch;
            })
            .addCase(fetchAndEditProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
                console.log(state.error)
            });
    },
});

export default editProductSlice.reducer;
