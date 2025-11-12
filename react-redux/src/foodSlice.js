import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foods: [
    { id: 1, name: "Rice" },
    { id: 2, name: "Beans" },
  ],
};

const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    addFood: (state, action) => {
      const newFood = {
        id: state.foods[state.foods.length - 1] + 1,
        name: action.payload,
      };
      state.foods.push(newFood);
    },
    removeFood: (state, action) => {},
  },
});

export const { addFood, removeFood } = foodSlice.actions;
export default foodSlice.reducer;
