import { configureStore } from "@reduxjs/toolkit";
import covidDataReducer from "./reducers";

export const store = configureStore({
  reducer: {
    covidData: covidDataReducer,
  },
});

export type StoreData = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
