// Create a slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: {}
};

const itemSlice = createSlice({
  name: "item",
  initialState,
    reducers: {
        //reducer function
    storeItem: (state, action) => {
          state.item = action.payload;
    },
  },
});

export const { storeItem } = itemSlice.actions;

export default itemSlice.reducer;
