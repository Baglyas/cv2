import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
const Skills = () => {
  return (
    <Card sx={{ backgroundColor: "lightblue", height: "100%" }}>
      <CardContent>
        <Typography variant="h5">Skills</Typography>
        <Divider></Divider>
        <List>
          <Grid container columns={3}>
            <Grid item xs={1}>
              <ListItem>
                <ListItemText>• Javascript</ListItemText>
              </ListItem>
            </Grid>
            
          </Grid>
        </List>
      </CardContent>
    </Card>
  );
};

export default Skills;
