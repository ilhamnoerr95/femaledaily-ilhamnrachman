import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// assets
import {assets} from "/src/assets"

const initialState = {
    loading: false,
    activities: [],
    brandsImg: [
      {id:1, img: assets.nivea, width:80, height: 80},
      {id:2, img: assets.ordinary, width:100, height: 80},
      {id:3, img: assets.bodyshop, width:130, height: 70},
      {id:4, img: assets.sk2, width:150, height: 100},
      {id:5, img: assets.maybelline, width:150, height: 100},
      {id:6, img: assets.innisfree, width:150, height: 120},
    ],
    trendingProduct: [
      {id:1,img:  assets.lipstick, rate: 4.9, title: "VAL BY VALERIE THOMAS", subtitle: "Pure Pressed Blush", type: "Neutral Rose"},
      {id:2,img: assets.lipstick, rate: 4.9, title: "JUICE BEAUTY", subtitle: "Phyto Pigmens Flawless Mouth", type: "Rosy Beige"},
      {id:3,img:  assets.lipstick, rate: 4.9, title: "SKINCEUTICALS", subtitle: "C E Ferulic", type: null},
      {id:4,img:  assets.lipstick, rate: 4.9, title: "VAL BY VALERIE THOMAS", subtitle: "Pure Pressed Blush", type: "Neutral Rose"},
      {id:5,img: assets.lipstick, rate: 4.9, title: "JUICE BEAUTY", subtitle: "Phyto Pigmens Flawless Mouth", type: "Rosy Beige"},
      {id:6,img:  assets.lipstick, rate: 4.9, title: "SKINCEUTICALS", subtitle: "C E Ferulic", type: null},
      {id:7,img:  assets.lipstick, rate: 4.9, title: "SKINCEUTICALS", subtitle: "C E Ferulic", type: null},

    ],
    groupPopular: [
      {id:1, img: assets.cat, },
      {id:2, img: assets.cat, },
      {id:3, img: assets.cat, },
      {id:4, img: assets.cat},
    ],
    LookForProduct:[
      {id:1,img:  assets.lipstick,match:"Match Skin Type", rate: 4.9, title: "VAL BY VALERIE THOMAS", subtitle: "Pure Pressed Blush", type: "Neutral Rose"},
      {id:2,img: assets.lipstick,match:"Match Skin Type", rate: 4.9, title: "JUICE BEAUTY", subtitle: "Phyto Pigmens Flawless Mouth", type: "Rosy Beige"},
      {id:3,img:  assets.lipstick,match:"Match Skin Type", rate: 4.9, title: "SKINCEUTICALS", subtitle: "C E Ferulic", type: null},
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
export const latestArticlesData = (state) => state.global.articles;
export const trendsProduct = (state) => state.global.trendingProduct;
export const editorsData = (state) => state.global.editorChoices
export const lookProducts = (state) => state.global.LookForProduct
export const dataReviews = (state) => state.global.review

export default globalStore.reducer;
