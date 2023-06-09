import {
  FormGroup,
  Input,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
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
  getSkills,
  getHobbies,
} from "../features/userSlice";
import { AnimatePresence, motion } from "framer-motion";

const Inputs = () => {
  const user: User = useSelector((state: { user: User }) => state.user);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<any>(null);


  const Name = () => {
    return (
      <motion.div layoutId="Name">
<motion.div>
        <Input
          type="text"
          value={user.name}
          onChange={(e) => dispatch(getName(e.target.value))}
        />
</motion.div>
        Name is: {user.name}
        <motion.input
          type="number"
          onChange={(e) => dispatch(getAge(e.target.value))}
        />
        Age is: {user.age.toString()}
        <motion.button onClick={() => setSelectedId(null)}>X</motion.button>
      </motion.div>
    );
  };

  // Experiences
  
  const Experiences = () => {
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
    return (
      <motion.div layoutId="Experiences">
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
            variant="contained"
            onClick={(e) => {
              dispatch(getExperiences(experiences));
              //default values
              setExperiences({
                jobTitle: "",
                date: undefined,
                description: "",
              });
            }}>
            Submit!
          </Button>
        </FormGroup>
      </motion.div>
    );
  };

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
    schoolName: "",
    major: "",
  });
  const Education = () => {
    return (
      <motion.div layoutId="Education">
        {/* Education */}

        <FormGroup>
          <Input
            type="text"
            placeholder="School name:"
            value={educations.schoolName}
            onChange={(e) => {
              setEducations((current) => ({
                ...current,
                schoolName: String(e.target.value),
              }));
            }}
          />
          <Input
            placeholder="Starting year"
            value={educations.start}
            type="number"
            onChange={(e) => {
              setEducations((current) => ({
                ...current,
                start: Number(e.target.value),
              }));
            }}
          />
          <Input
            placeholder="Graduation year"
            type="number"
            value={educations.finish}
            onChange={(e) => {
              setEducations((current) => ({
                ...current,
                finish: Number(e.target.value),
              }));
            }}
          />
          <Input
            placeholder="Major (optional)"
            type="text"
            value={educations.major}
            onChange={(e) => {
              setEducations((current) => ({
                ...current,
                major: String(e.target.value),
              }));
            }}
          />
          <Button
            onClick={(e) => {
              dispatch(getEducation(educations));
              //Reset educations
              setEducations({
                start: undefined,
                finish: undefined,
                schoolName: "",
                major: "",
              });
            }}>
            Submit!
          </Button>
        </FormGroup>
      </motion.div>
    );
  };
  //Contacts

  interface Contacts {
    phone?: Number;
    address?: String;
    email?: String;
    website?: String;
  }
  const [contacts, setContacts] = useState<Contacts>({
    email: "",
    phone: undefined,
    address: "",
    website: "",
  });
  const Contacts = () => {
    return (
      <motion.div layoutId="Contacts">
        <FormGroup>
          <Input
            placeholder="Email address"
            value={contacts.email}
            type="text"
            onChange={(e) => {
              setContacts((current) => ({
                ...current,
                email: e.target.value,
              }));
            }}
          />
          <Input
            placeholder="Address"
            value={contacts.address}
            type="text"
            onChange={(e) => {
              setContacts((current) => ({
                ...current,
                address: e.target.value,
              }));
            }}
          />
          <Input
            placeholder="Phone number"
            value={contacts.phone}
            type="num"
            onChange={(e) => {
              setContacts((current) => ({
                ...current,
                phone: Number(e.target.value),
              }));
            }}
          />
          <Input
            placeholder="Website"
            value={contacts.website}
            type="text"
            onChange={(e) => {
              setContacts((current) => ({
                ...current,
                website: String(e.target.value),
              }));
            }}
          />
          <Button
            onClick={() => {
              dispatch(getContacts(contacts));
            }}>
            Submit!
          </Button>
        </FormGroup>
      </motion.div>
    );
  };
  //Skills
  const [skills, setSkills] = useState("");
  const Skills = () => {
    return (
      <motion.div layoutId="Skills">
        <Input
          placeholder="Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <Button
          onClick={() => {
            dispatch(getSkills(skills));
            setSkills("");
          }}>
          Submit!
        </Button>
      </motion.div>
    );
  };
  //Hobbies
  interface Hobbies {
    icon: any;
    hobby: String;
  }
  const [hobbies, setHobbies] = useState<Hobbies>({
    icon: undefined,
    hobby: "",
  });
  const Hobbies = () => {
    return (
      <motion.div layoutId="Hobbies">
        <Input
          placeholder="Hobbies"
          value={hobbies.hobby}
          onChange={(e) => {
            setHobbies({
              ...hobbies,
              hobby: e.target.value,
            });
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={hobbies.icon}
            label="Age"
            onChange={(e) =>
              setHobbies({
                ...hobbies,
                icon: e.target.value,
              })
            }>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        {/**Make here some custom made list of icons */}
        <Button
          onClick={() => {
            hobbies.hobby !== ""
              ? dispatch(getHobbies(hobbies))
              : alert("Hobbies input is empty!");
            setHobbies({
              icon: undefined,
              hobby: "",
            });
          }}>
          Submit!
        </Button>
      </motion.div>
    );
  };
  const categories = [
    "Name",
    "Experiences",
    "Education",
    "Contacts",
    "Skills",
    "Hobbies",
  ];
  const components = [Name, Experiences, Education, Contacts, Skills, Hobbies];

  return (
    <div>
      <div style={{}}>
        {categories.map((categ) => {
          return (
            <motion.div
              key={categ}
              layoutId={categ}
              onClick={() => setSelectedId(categ)}>
              <Button>{categ}</Button>
            </motion.div>
          );
        })}
      </div>
      {components.map((Comp, index) => {
        if (selectedId === categories[index]) {
          return (
            <AnimatePresence key={index}>
              <Comp />
              <motion.button onClick={() => setSelectedId(null)}>
                X
              </motion.button>
            </AnimatePresence>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Inputs;
