import React from 'react'
import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
const Education = () => {
  return (
    <Card sx={{ backgroundColor: "lightblue", height: '100%' }}>
      <CardContent>
        <Typography variant='h5'>Education</Typography>
        <Divider></Divider>
        {/**Job Title user.experiences.jobTitle */}
        <Typography variant='h6' sx={{color: 'Highlight'}}>School name - Major</Typography>
        {/**Job Date user.experiences.start-finish */}
        <Typography variant='subtitle2'>feb 2012 - apr 2309</Typography>
      </CardContent>
    </Card>
  )
}

export default Education