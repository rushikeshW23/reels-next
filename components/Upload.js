import React from 'react'
import { Button } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';

function Upload() {
  return (
    <div className='upload-btn'>
        <Button variant="contained" fullWidth style={{marginTop: "1rem"}} startIcon={<MovieIcon/>} component="label" > <input type="file" accept='image/*' style={{display: 'none'}} /> Upload</Button>
        <LinearProgress variant="determinate" style={{marginTop: "0.2rem"}} value={50} />
    </div>
  )
}

export default Upload