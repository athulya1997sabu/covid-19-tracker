import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CovidDataState {
  data: Array<any>;
  filter: string;
}

const initialState: CovidDataState = {
  data: [],
  filter: "All",
};

const covidDataSlice = createSlice({
  name: "covidData",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setData(state, action: PayloadAction<Array<any>>) {
      state.data = action.payload;
    },
  },
});

export const { setFilter, setData } = covidDataSlice.actions;
export default covidDataSlice.reducer;
