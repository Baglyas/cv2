import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import theme from "../store/theme";
const Name = () => {
  return (
    <Card
    sx={{ backgroundColor: '#3798D4', height: '100%' }}>
      
      <Typography 
      fontWeight={900}
      variant="h5" sx={{ paddingX: 2, paddingY: 2, color: '#F2F2F2'}}>
        Baglyas Gyozo
      </Typography>
      <Typography
        variant="body1"
        sx={{ paddingX: 2, bgcolor: "#f2f2f2", color: '#4095D3', marginRight: 6 }}>
        Front-end Developer
      </Typography>
    </Card>
  );
};

export default Name;
