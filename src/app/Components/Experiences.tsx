import React from 'react'
import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
const Experiences = () => {
  return (
    <Card sx={{ backgroundColor: "lightblue", height: '100%' }}>
      <CardContent>
        <Typography variant='h5'>Job Experience</Typography>
        <Divider></Divider>
        {/**Job Title user.experiences.jobTitle */}
        <Typography variant='h6' sx={{color: 'Highlight'}}>Sales</Typography>
        {/**Job Date user.experiences.start-finish */}
        <Typography variant='subtitle2'>feb 2012 - apr 2309</Typography>
        {/**Job description user.experiences.description */}
        <Typography variant='body1'>THis is the description for the job in the experiences ccard section</Typography>
      </CardContent>
    </Card>
  )
}

export default Experiences