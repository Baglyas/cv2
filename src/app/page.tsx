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
import Hobbies from "./Components/Hobbies";
export default function Home() {
  return (
    <main>
      <Container>
        <Box sx={{ bgcolor: "snow", height: "29.7cm", // Approximately 11.69 inches (A4 height)
            width: "21cm", // Approximately 8.27 inches (A4 width)
            padding: 8,
            margin: "auto",}}>
          <Container className="container">
            <div className="Name">
              <Name />
            </div>

            <div className="Picture">
              <Picture />
            </div>

            <div className="Experiences">
              <Experiences />
            </div>

            <div className="Profile">
              <Profile />
            </div>

            <div className="Skills">
              <Skills />
            </div>

            <div className="Education">
              <Education />
            </div>
            <div className="Hobbies">
              <Hobbies />
            </div>
          </Container>
        </Box>
        <Inputs />
      </Container>
    </main>
  );
}
