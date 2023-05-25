import { FormGroup, Input, Button, Typography } from "@mui/material";
import React, {useState} from "react";
import { useSelector, useDispatch, } from "react-redux";
import { userSlice, User, getName, getAge, getExperiences } from "../features/userSlice";
import { current } from "@reduxjs/toolkit";


const Inputs = () => {
  const user: User = useSelector((state: { user: User }) => state.user);
  const dispatch = useDispatch();

  // Experiences
  interface Experiences {
    jobTitle?: String,
    date?: Number,
    description?: String,
  }
  const [experiences, setExperiences] = useState<Experiences>({jobTitle: '',
    date: undefined,
    description: '',})
  return (
    <div>
      <Input type="text" value={user.name} onChange={e=>dispatch(getName(e.target.value))}/>
      Name is: {user.name}
      <Input
      type="number"
      onChange={e=>dispatch(getAge(e.target.value))}/>
      Age is: {user.age.toString()}
      <FormGroup >
        <Typography>Your experiences:</Typography>
        <Input 
        placeholder="Date"
        type="number"
        value={experiences.date}
        onChange={(e) => {
          setExperiences((current) => ({
            ...current,
            date: Number(e.target.value),
          }));
        }}/>
        <Input 
        placeholder="Job Title"
        type="text"
        value={experiences.jobTitle}
        onChange={(e)=>{
          setExperiences((current)=>({
            ...current,
            jobTitle: String(e.target.value)
          }))
        }}/>
        <Input 
        placeholder="description"
        type="text"
        value={experiences.description}
        onChange={(e)=>{
          setExperiences((current)=>({
            ...current,
            description: e.target.value
          }))
        }}/>
        <Button onClick={(e)=>{dispatch(getExperiences(experiences))
        //default values
        setExperiences({jobTitle: '',
        date: undefined,
        description: '',})}
        }>Submit!</Button>
      </FormGroup>
    </div>
  );
};

export default Inputs;
