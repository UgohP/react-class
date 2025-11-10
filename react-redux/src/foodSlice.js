import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foods: [],
};

const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.foods.push(action.payload);
    },
    removeFood: (state, action) => {},
  },
});

export const { addFood, removeFood } = foodSlice.actions;
export default foodSlice.reducer;
