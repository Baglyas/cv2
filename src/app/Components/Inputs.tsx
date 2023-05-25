import { Input } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userSlice } from '../features/userSlice'
const Inputs = () => {
  const user = useSelector((state)=>{
    state.user
  })
  return (
    <div>
      <Input 
      type='text'
      value={user.name}/>
    </div>
  )
}

export default Inputs