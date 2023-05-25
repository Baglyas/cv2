'use client'
import { Container, Box } from '@mui/material'
import { useSelector, useDispatch} from "react-redux";
import Inputs from './Components/Inputs';
import Profile from './Components/Profile';
export default function Home() {
  return (
    <main>
      <Container >
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <Profile />
          <Inputs/>
        </Box>
      </Container>
      
    </main>
  )
}
