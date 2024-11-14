import { configureStore } from "@reduxjs/toolkit";
import { formReducer,changeCarCost,changeCarName } from "../slices/Formslice";
import { carReducer,addCar,changeSearchString,removeCar } from "../slices/CarSlice";

const store=configureStore({
    name:"cars",
    reducer:{
        form:formReducer,
        car:carReducer
    }
})

export {store,addCar,changeSearchString,removeCar,changeCarName,changeCarCost}