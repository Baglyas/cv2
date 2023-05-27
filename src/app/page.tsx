"use client";
import { Container, Box, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Inputs from "./Components/Inputs";
import Profile from "./Components/Profile";
import Name from "./Components/Name";
import Picture from "./Components/Picture";
import Experiences from "./Components/Experiences";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
export default function Home() {
  return (
    <main>
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Container>
            <Container >
              <Grid container>
              <Grid item>
                <Name />
              </Grid>
              <Grid item>
                <Picture />
              </Grid>

              <Grid item>
                <Profile />
              </Grid>
              </Grid>
              </Container>
              <Container>
                
              <Grid container>
              <Grid item >
                <Experiences />
              </Grid>
              <Grid item>
                <Skills />
              </Grid>
              <Grid item>
                <Education />
              </Grid>
              </Grid>
            </Container>
          </Container>
          <Inputs />
        </Box>
      </Container>
    </main>
  );
}
