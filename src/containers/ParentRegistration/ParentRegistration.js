import React from 'react';
import classes from './ParentRegistration.css'
import wrapper from '../../Wrapper/Wrapper.css'
import Navbar from '../../components/Navbar/Navbar.js'

class ParentRegistration extends React.Component {

  render () {

    return(
      <div className={wrapper.Wrapper}>
        <Navbar name="Parent Registration Form"/>

      </div>
    )
  }
}


export default ParentRegistration
