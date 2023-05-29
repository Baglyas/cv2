import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { User } from '../features/userSlice'
import { useSelector } from 'react-redux'
const Hobbies = () => {
  const user: User = useSelector((state: {user: User}) => state.user)
  return (
    <Card sx={{  height: '100%', backgroundColor: '#FFFFFF' }}>
      <CardContent>

      <Typography variant='h5'>Hobbies</Typography>
      <Grid container spacing={4}>

        {user.hobbies.map((hobby)=>{
          return (
            <Grid item key={hobby.id}>
              <Typography variant='h6'> 
              {hobby.hobby}
      </Typography>
            </Grid>
          )
        })}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Hobbies