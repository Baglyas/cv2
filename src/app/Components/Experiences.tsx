import React from "react";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { userSlice, User } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Experiences = () => {
  const user: User = useSelector((state: { user: User }) => state.user);
  const dispatch = useDispatch();
  return (
    <Card sx={{ height: "100%" , backgroundColor: '#FFFFFF'}}>
      <CardContent>
        <Typography variant="h5">Job Experience</Typography>
        <Divider></Divider>
        {user.experiences.map((exp) => {
          return (
            <div key={exp.date}>
              {/**Job Title user.experiences.jobTitle */}
              <Typography variant="h6" sx={{ color: "#4095D3" }}>
                {exp.jobTitle}
              </Typography>
              {/**Job Date user.experiences.start-finish */}
              <Typography variant="subtitle2">{exp.date.toString()}</Typography>
              {/**Job description user.experiences.description */}
              <Typography variant="body1">{exp.description}</Typography>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Experiences;
