import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Initial state
const initialState = {
    loading: false,
    refetch: false,
    allnotes: [],
    error: '',
}

// Get All notes
export const fetchNotes = createAsyncThunk('notes/api', async () => {
    return axios.get("/allnotes").then((res) => res.data)
})

// Post single note
export const fetchAndUploadNotes = createAsyncThunk('noteupload/api', async (payload) => {
    const { data } = payload
    return axios.post("/uploadnote", data).then((res) => res.data)
})


// Slice 
const noteSlice = createSlice({
    name: "notes",
    initialState,
    extraReducers: (builder) => {

        // Get notes
        builder.addCase(fetchNotes.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchNotes.fulfilled, (state, action) => {
            state.loading = false
            state.allnotes = action.payload
            state.error = ''
        });
        builder.addCase(fetchNotes.rejected, (state, action) => {
            state.loading = false
            state.allnotes = []
            state.error = action.error.message
        });

        // Post note
        builder.addCase(fetchAndUploadNotes.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchAndUploadNotes.fulfilled, (state, action) => {
            state.loading = false
            state.refetch = !state.refetch
            state.error = ''
        });
        builder.addCase(fetchAndUploadNotes.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });


    }
})

export default noteSlice.reducer