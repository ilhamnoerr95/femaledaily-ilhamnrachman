import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    groupPopular: [
      {id:1, img: assets.cat, },
      {id:2, img: assets.cat, },
      {id:3, img: assets.cat, },
      {id:4, img: assets.cat},
    ],
    editorChoices: [],
    articles: [],
    review: [],
    loading: false
};


export const fetchingData = createAsyncThunk(
  'femaleDaily/getData',
  async ( thunkAPI) => {
    const response = await axios.get("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp")
    return response.data
  }
)
export const globalStore = createSlice({
  name: "global store",
  initialState,

  reducers: {
  
  }, 
  extraReducers: (builder) => {
    builder.addCase(fetchingData.pending, (state, action) => {
      state.loading= true
    })
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchingData.fulfilled, (state, action) => {
      state.loading= false
      // console.log(action.payload['latest articles'])
      // Add user to the state array
      state.articles = action.payload['latest articles']
      state.editorChoices = action.payload["editor's choice"]
      state.review = action.payload["latest review"]

    })
  },
});

export const brandsImg = (state) => state.global.brandsImg;
export const groupBoxes = (state) => state.global.groupPopular;
export const latestArticlesData = (state) => state.global.articles


export default globalStore.reducer;
