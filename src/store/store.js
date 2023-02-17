import { configureStore } from "@reduxjs/toolkit";
import globalStore from "./globalStore";

export const store = configureStore({
  reducer: {
    global: globalStore
  },
});
