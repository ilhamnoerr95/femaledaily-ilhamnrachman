import { createSlice } from "@reduxjs/toolkit";
// assets
import {assets} from "/src/assets"

const initialState = {
    loading: false,
    activities: [],
    brandsImg: [
      {id:1, img: assets.nivea, width:80, height: 80},
      {id:2, img: assets.ordinary, width:120, height: 120},
      {id:3, img: assets.bodyshop, width:150, height: 80},
      {id:4, img: assets.sk2, width:180, height: 120},
      {id:5, img: assets.maybelline, width:180, height: 120},
      {id:6, img: assets.innisfree, width:150, height: 120},

    ],
};

export const globalStore = createSlice({
  name: "global store",
  initialState,

  reducers: {},
});

export const brandsImg = (state) => state.global.brandsImg;


export default globalStore.reducer;
