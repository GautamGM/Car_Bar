import { createSlice, nanoid } from "@reduxjs/toolkit";

const carslice = createSlice({
  name: "cars",
  initialState: {
    searchString: "",
    carsData: [],
  },
  reducers: {
    // for the serch functionlity
    changeSearchString(state, action) {
      state.searchString = action.payload;
    },

    // add the the Car into the array of cardata
    addCar(state, action) {
      state.carsData.push({
         id: nanoid(),
        name:action.payload.name,
        cost:action.payload.cost
       });
    },

    removeCar(state,action){
       const updatedCars= state.carsData.filter((car)=>car.id!==action.payload)
        state.carsData=updatedCars
    }
  },
});


export const {addCar,changeSearchString,removeCar}=carslice.actions

export const carReducer=carslice.reducer
