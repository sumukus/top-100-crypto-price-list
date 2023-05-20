import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCryptocurrency = createAsyncThunk(
  "crypto/getCryptocurrency",
  async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    );

    return response.data;
  }
);

const cryptoSlice = createSlice({
  name: "cryptocurrency",
  initialState: {
    loading: null,
    cryptocurrency: null,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCryptocurrency.fulfilled, (state, action) => {
        state.cryptocurrency = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getCryptocurrency.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCryptocurrency.rejected, (state) => {
        state.loading = false;
        state.error = "Request Failed";
      });
  },
});

export default cryptoSlice.reducer;
