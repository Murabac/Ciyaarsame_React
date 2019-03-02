import React from 'react';
import classes from './Profile.css'
import wrapper from '../../Wrapper/Wrapper.css'
import Navbar from '../../components/Navbar/Navbar.js'

class Profile extends React.Component {

  render () {

    return(
      <div className={wrapper.Wrapper}>
        
        <Navbar name="Edit Profile"/>

      </div>
    )
  }
}


export default Profile
