import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Initial state
const initialState = {
    data: null,
    loading: false,
    error: null,
}

// Axios
export const deleteProduct = createAsyncThunk('deleteProduct/api', async (payload) => {
    const { id } = payload;
    const response = await axios.delete(`/delete?deleteId=${id}`);
    return response.data;
});

// dataSlice
const deleteProductSlice = createSlice({
    name: 'deleteProduct',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.refetch = !state.refetch;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
                console.log(state.error)
            });
    },
});

export default deleteProductSlice.reducer;
