import React from 'react';
import classes from './CreateAdmin.css'
import wrapper from '../../Wrapper/Wrapper.css'
import Navbar from '../../components/Navbar/Navbar.js'
import ProfileCard from '../../components/ProfileCard/ProfileCard.js'

class CreateAdmin extends React.Component {

  render () {

    return(
      <div className={wrapper.Wrapper}>

        <Navbar name="Create New Admin"/>
      
      </div>
    )
  }
}


export default CreateAdmin
