import { createSlice } from "@reduxjs/toolkit";
export interface User {
  name: String,
  age: Number,
  education: Array<{
    start: Number,
    finish: Number,
    schoolName?: String,
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
    email?: String,
    website?: String,
  },
  skills: Array<String>,
  hobbies: Array<{
    icon?: any,
    hobby: String,
  }>
}
const initialState: User = {
  name: '',
  age: 0,
  education: [],
  experiences: [],
  contacts: {
    phone: undefined,
    address: undefined,
    email: undefined,
    website: undefined,
  },
  skills: [],
  hobbies: []
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
    getContacts: (state, action)=>{
      state.contacts = action.payload;
    },
    getSkills: (state, action)=>{
      state.skills.push(action.payload)
    },
    getHobbies: (state, action) =>{
      state.hobbies.push(action.payload);
    },
    }
  }
)

export const { getName, getAge, getExperiences, getEducation, getContacts, getSkills, getHobbies} = userSlice.actions;
export default userSlice.reducer;
