import React from 'react'
import classes from './ProfileCard.css'
import Profile from './Profile'
import ProfileData from './ProfileData'


function ProfileCard (props){

let ProfileComponents = ProfileData.map(profile => <Profile key={profile.id} name={profile.name} title={profile.title} image={profile.image} cover={profile.cover} />)

    return (
      <div className={classes.wrapper}>
        {ProfileComponents}
      </div>
    )
}

export default ProfileCard
