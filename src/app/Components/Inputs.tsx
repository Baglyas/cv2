import { FormGroup, Input, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  userSlice,
  User,
  getName,
  getAge,
  getExperiences,
  getEducation,
  getContacts,
  getSkills
} from "../features/userSlice";
import { current } from "@reduxjs/toolkit";

const Inputs = () => {
  const user: User = useSelector((state: { user: User }) => state.user);
  const dispatch = useDispatch();

  // Experiences
  interface Experiences {
    jobTitle?: String;
    date?: Number;
    description?: String;
  }
  const [experiences, setExperiences] = useState<Experiences>({
    jobTitle: "",
    date: undefined,
    description: "",
  });

  // Education
  interface Education {
    start?: Number;
    finish?: Number;
    schoolName: String;
    major?: String;
  }
  const [educations, setEducations] = useState<Education>({
    start: undefined,
    finish: undefined,
    schoolName: '',
    major: ''
  });

  //Contacts
  
  interface Contacts {
    phone?: Number,
    address?: String,
    email?: String,
    website?: String,
  }
  const [contacts, setContacts] = useState<Contacts>({
    email: '',
    phone: undefined,
    address: '',
    website: '',
  })

  //Skills
  const [skills, setSkills] = useState('')
  return (
    <div>
      <Input
        type="text"
        value={user.name}
        onChange={(e) => dispatch(getName(e.target.value))}
      />
      Name is: {user.name}
      <Input type="number" onChange={(e) => dispatch(getAge(e.target.value))} />
      Age is: {user.age.toString()}

      {/* Experiences */}

      <FormGroup>
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
          }}
        />
        <Input
          placeholder="Job Title"
          type="text"
          value={experiences.jobTitle}
          onChange={(e) => {
            setExperiences((current) => ({
              ...current,
              jobTitle: String(e.target.value),
            }));
          }}
        />
        <Input
          placeholder="description"
          type="text"
          value={experiences.description}
          onChange={(e) => {
            setExperiences((current) => ({
              ...current,
              description: e.target.value,
            }));
          }}
        />
        <Button
          onClick={(e) => {
            dispatch(getExperiences(experiences));
            //default values
            setExperiences({ jobTitle: "", date: undefined, description: "" });
          }}>
          Submit!
        </Button>
      </FormGroup>

            {/* Education */}

        <FormGroup>
          <Input
          type="text"
          placeholder="School name:"
          value={educations.schoolName}
          onChange={(e)=>{
            setEducations((current)=> ({
              ...current,
              schoolName: String(e.target.value)
            }))
          }}/>
          <Input
          placeholder="Starting year"
          value={educations.start}
          type="number"
          onChange={(e)=>{
            setEducations((current)=>({
              ...current,
              start: Number(e.target.value)
            }))
          }}/>
          <Input
          placeholder="Graduation year"
          type="number"
          value={educations.finish}
          onChange={(e)=>{
            setEducations((current)=>({
              ...current, 
              finish: Number(e.target.value)
            })
            )
          }}/>
          <Input
          placeholder="Major (optional)"
          type="text"
          value={educations.major}
          onChange={(e)=>{
            setEducations((current)=>({
              ...current,
              major: String(e.target.value)
            }))
          }}/>
          <Button onClick={(e)=>{
            dispatch(getEducation(educations));
            //Reset educations
            setEducations({
              start: undefined,
              finish: undefined,
              schoolName: '',
              major: ''
            })
          }}>Submit!</Button>
        </FormGroup>
        <FormGroup>
          <Input
          placeholder="Email address"
          value={contacts.email}
          type="text"
          onChange={(e)=>{
            setContacts((current)=>({
              ...current,
              email: e.target.value,
            }))
          }}/>
          <Input
          placeholder="Address"
          value={contacts.address}
          type="text"
          onChange={(e)=>{
            setContacts((current)=>({
              ...current,
              address: e.target.value,
            }))
          }}/>
          <Input
          placeholder="Phone number"
          value={contacts.phone}
          type="num"
          onChange={(e)=>{
            setContacts((current)=>({
              ...current,
              phone: Number(e.target.value),
            }))
          }}/>
          <Input
          placeholder="Website"
          value={contacts.website}
          type="text"
          onChange={(e)=>{
            setContacts((current)=>({
              ...current,
              website: String(e.target.value),
            }))
          }}/>
          <Button onClick={()=>{
            dispatch(getContacts(contacts))
          }}>Submit!</Button>
        </FormGroup>
        <Input placeholder="Skills"
        value={skills}
        onChange={(e)=>setSkills(e.target.value)}/>
        <Button onClick={()=>{
          dispatch(getSkills(skills));
          setSkills('')
        }}>Submit!</Button>

    </div>
  );
};

export default Inputs;
