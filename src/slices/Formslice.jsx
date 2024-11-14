import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "../store/store";

const formSlice = createSlice({
  name: "carForm",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeCarName(state, action) {
      state.name = action.payload;
    },
    changeCarCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(bulider) {
    bulider.addCase(addCar, (state, action) => {
      (state.name = ""), (state.cost = 0);
    });
  },
});
console.log(formSlice);

export const { changeCarName, changeCarCost } = formSlice.actions;

export const formReducer = formSlice.reducer;
