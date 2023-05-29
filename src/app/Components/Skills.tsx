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
import { userSlice, User } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Skills = () => {
  const user: User = useSelector((state: { user: User }) => state.user);
  const dispatch = useDispatch();
  return (
    <Card sx={{ height: "100%" , backgroundColor: '#FFFFFF'}}>
      <CardContent>
        <Typography variant="h5">Skills</Typography>
        <Divider></Divider>
        <List>
          <Grid container columns={3}>
            {user.skills.map((skill) => {
              return (
                <div key={skill.id}>
                  <Grid item xs={1}>
                    <ListItem>
                      <ListItemText>•{skill}</ListItemText>
                    </ListItem>
                  </Grid>
                </div>
              );
            })}
          </Grid>
        </List>
      </CardContent>
    </Card>
  );
};

export default Skills;
