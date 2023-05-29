import React from "react";
import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import theme from "../store/theme";
import { User } from "../features/userSlice";
import { useSelector } from "react-redux";

const Name = () => {
const user: User = useSelector((state: {user: User})=>state.user)
  return (
    <Card
      sx={{height: '100%' }}>

      <Typography 
      fontWeight={900}
      variant="h5" sx={{ paddingX: 2, paddingY: 2, color: '#F2F2F2'}}>
        {user.name}
      </Typography>
      <Typography
        variant="body1"
        sx={{ paddingX: 2, bgcolor: "#f2f2f2", color: '#4095D3', marginRight: 6 }}>
        Front-end Developer
      </Typography>
      <br />
    </Card>
  );
};

export default Name;
