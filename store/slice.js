import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
}

export const getUsers = createAsyncThunk('mySlice/getUsers', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/users')
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error
  }
});

export const postUser = createAsyncThunk('mySlice/postUser', async (userData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users', userData)
    console.log(response.data)
  } catch (error) {
    console.error('Error creating a new user:', error)
    throw error
  }
});

const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
    });

    builder.addCase(postUser.pending, (state) => {
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
    });
    builder.addCase(postUser.rejected, (state, action) => {
    });
  },
});

export default mySlice.reducer;
