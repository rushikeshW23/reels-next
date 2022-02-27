import React from 'react';
import Navbar from './Navbar';
import Upload from './Upload';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Feed() {
  return (
    <div className='feed-container'>
      <Navbar />
      <Upload />
      <div className='videos-container'>
        <div className='post-container'>
          <video src=""/>
        </div>
        <div className='post-container'>
          <video />
          <div className='videos-info'>
            <div className='avatar-container'><Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" style={{margin: "0.5rem"}} /> <p>Namises</p></div>
            <div className='post-like' ><FavoriteIcon /> 10 </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed