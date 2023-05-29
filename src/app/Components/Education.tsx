import React from "react";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { userSlice, User } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Education = () => {
  const user: User = useSelector((state: { user: User }) => state.user);
  return (
    <Card sx={{ height: "100%", backgroundColor: '#FFFFFF' }}>
      <CardContent>
        <Typography variant="h5">Education</Typography>
        <Divider></Divider>
        {user.education.map((edu) => {
          return (
            <div key={edu.id}>
              {/**Job Title user.experiences.jobTitle */}
              <Typography variant="h6" sx={{ color: "#4095D3" }}>
                {edu.schoolName ? edu.schoolName : null} -{" "}
                {edu.major ? edu.major : null}
              </Typography>
              {/**Job Date user.experiences.start-finish */}
              <Typography variant="subtitle2">
                {
                edu.start ?
                edu.start.toString()
              : null} - {
              edu.finish ?
              edu.finish.toString()
            : null}
              </Typography>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Education;
