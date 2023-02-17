import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    activities: [],
};

export const globalStore = createSlice({
  name: "global store",
  initialState,

  reducers: {},
});



export default globalStore.reducer;
