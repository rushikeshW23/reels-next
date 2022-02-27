import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/profile.jpg';

function ProfileComp() {
  return (
    <div>
        <Navbar />
        <div>
            <div className='profile_upper'>
                <img src= {logo} style={{height: "8rem" , width:"8rem", borderRadius: '50%'}} />
                <div style={{flexBasis:"40%"}}>
                    <h2>Name</h2>
                    <h4>Post : 10</h4>
                </div>
            </div>
        </div>
        <hr />
        <div className='profile_videos'>
            <video src='' />
            <video src='' />
        </div>
    </div>
  )
}

export default ProfileComp;