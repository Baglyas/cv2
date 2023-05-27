import React from "react";
import { Box, Typography } from "@mui/material";
const Name = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 150,
        backgroundColor: "primary.dark",
      }}>
        <Typography variant="h4"
        sx={{paddingX: 4, paddingY: 3}}>Baglyas Gyozo</Typography>
        <Typography variant="h6"
        sx={{paddingX: 4, bgcolor: "#cfe8fc", marginRight: 6}}>Front-end Developer</Typography>

      </Box>
  );
};

export default Name;
