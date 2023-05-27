import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSlice, User } from "../features/userSlice";
import { Typography, Box, Container, Divider } from "@mui/material";

const Profile = () => {
  const user: User = useSelector((state: { user: User }) => state.user);
  const contacts = user.contacts;
  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 400,
          backgroundColor: "primary.dark",
        }}>
        <Container sx={{ padding: 4 }}>
          <Typography variant="h5">Profile</Typography>
          <Box sx={{ bgcolor: "#cfe8fc", height: 8 }}></Box>
          <Typography sx={{ paddingY: 1 }}>NAME</Typography>
          <Typography variant="body1">{user.name}</Typography>
          <Divider />
          <Typography sx={{ paddingY: 1 }}>AGE</Typography>
          <Typography variant="body2">{String(user.age)}</Typography>
          <Divider />
          {Object.entries(contacts).map(([key, value]) => {
            return (
              <div key={key}>
                <Typography sx={{ paddingY: 1 }} variant="body1">
                  {key.toUpperCase()}
                </Typography>
                <Typography variant="body2">{String(value)}</Typography>
                <Divider />
              </div>
            );
          })}
        </Container>
        ;
      </Box>
    </>
  );
};

export default Profile;
