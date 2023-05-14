import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Adminlogin = () => {
  return (
    <div>
      <br></br><br></br>
        <Typography variant='h4' style={{fontFamily: 'Segoe UI'}}>ADMIN LOGIN</Typography><br></br>
        <TextField required id="email" label="Email" variant="outlined" style={{ outlineColor: 'white' }}/><br></br><br></br>
        <TextField required id="password" label="Password" variant="outlined"/><br></br><br></br>
        <Button variant='outlined' color='inherit' style={{margin: "0px 3px 0px 10px", fontSize: "14px", color: "red"}}>Login</Button>
    </div>
  )
}

export default Adminlogin