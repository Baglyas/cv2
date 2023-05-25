'use client'
import { Container, Box } from '@mui/material'
import { useSelector, useDispatch} from "react-redux";
import Inputs from './Components/Inputs';
export default function Home() {
  return (
    <main>
      <Container >
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <Inputs/>
        </Box>
      </Container>
      
    </main>
  )
}
