import { createSlice } from "@reduxjs/toolkit";
export interface User {
  name: String,
  age: Number,
  education: Array<{
    start: Number,
    finish: Number,
    schoolName: String,
    major?: String
  }>,
  experiences: Array<{
    jobTitle: String,
    date: Number,
    description?: String,
  }>,
  contacts: {
    phone?: Number,
    address?: String,
    email?: String
  }
}
const initialState: User = {
  name: '',
  age: 0,
  education: [],
  experiences: [],
  contacts: {
    phone: undefined,
    address: undefined,
    email: undefined
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
    getAge: (state, action) => {
      state.age = action.payload;
    },
    getExperiences: (state, action)=>{
      state.experiences.push(action.payload);
    },
    getEducation: (state, action)=>{
      state.education.push(action.payload);
    },
    
  },
});

export const { getName, getAge, getExperiences, getEducation} = userSlice.actions;
export default userSlice.reducer;
