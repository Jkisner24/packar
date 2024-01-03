import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
}

export const getUsers = createAsyncThunk('mySlice/getUsers', async () => {
  try {
    const response = await axios.get('http://localhost:3001')
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error
  }
});

export const postUser = createAsyncThunk('mySlice/postUser', async (userData) => {
  try {
    const response = await axios.post('http://localhost:3001', userData)
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
    // Añade la lógica de manejo de acciones asíncronas generadas por createAsyncThunk
    builder.addCase(getUsers.pending, (state) => {
      // Puedes actualizar el estado durante la petición si es necesario
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      // Actualiza el estado con la información obtenida
      state.value = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      // Maneja el error si es necesario
    });

    builder.addCase(postUser.pending, (state) => {
      // Puedes actualizar el estado durante la petición si es necesario
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      // Maneja la respuesta después de una petición POST exitosa
    });
    builder.addCase(postUser.rejected, (state, action) => {
      // Maneja el error si es necesario
    });
  },
});

export default mySlice.reducer;
