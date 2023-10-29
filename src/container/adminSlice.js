import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Initial state
const initialState = {
    loading: false,
    login: [],
    error: '',
}

// login User
export const fetchandLoginUser = createAsyncThunk('userlogin/api', async (payload) => {
    const { data } = payload
    return axios.post("/login", data).then((res) => res.data)
})

// Slice 
const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {

        // Get user and check
        builder.addCase(fetchandLoginUser.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchandLoginUser.fulfilled, (state, action) => {
            state.loading = false
            state.login = action.payload
            state.error = ''
        });
        builder.addCase(fetchandLoginUser.rejected, (state, action) => {
            state.loading = false
            state.login = []
            state.error = action.error.message
        });
    }
})

export default userSlice.reducer