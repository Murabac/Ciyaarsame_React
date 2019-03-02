import React from "react"
import classes from './ProfileCard.css'
import {NavLink} from 'react-router-dom'
function Profile(props) {
    return (
      <div className={classes.profileCard}>
        <div className={classes.imageContainer}>
        <img src={props.cover} alt="Cover" className={classes.banner}/>
        <img src={props.image} alt="Profile Picture" className={classes.profilePic}/>
        </div>
        <div className={classes.content}>
          <div className={classes.title}>
            <p>{props.name}</p>
            <span>{props.title}</span>
          </div>
          <NavLink to="/edit_profile" className={classes.link}> Edit Profile</NavLink >
          <div className={classes.edge1}></div>
          <div className={classes.edge2}></div>
        </div>
      </div>
    )
}

export default Profile
