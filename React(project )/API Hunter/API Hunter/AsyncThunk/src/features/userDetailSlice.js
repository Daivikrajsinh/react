import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create user
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://localhost:3001/users", data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

// Fetch all users
export const getUsers = createAsyncThunk("getUsers", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("http://localhost:3001/users");
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch users";
            })
            .addCase(createUser.fulfilled, (state, action) => {
                // Optional: push new user directly without calling getUsers
                state.users.push(action.payload);
            });
    },
});

export default userDetail.reducer;
