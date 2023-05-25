import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { getName } = userSlice.actions;
export default userSlice.reducer;
