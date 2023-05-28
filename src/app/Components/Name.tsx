import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import theme from "../store/theme";
const Name = () => {
  return (
    <Card
    sx={{ backgroundColor: 'primary.main', height: '100%' }}>
      
      <Typography variant="h4" sx={{ paddingX: 2, paddingY: 2 }}>
        Baglyas Gyozo
      </Typography>
      <Typography
        variant="h6"
        sx={{ paddingX: 2, bgcolor: "#cfe8fc", marginRight: 6 }}>
        Front-end Developer
      </Typography>
      <br />
    </Card>
  );
};

export default Name;
