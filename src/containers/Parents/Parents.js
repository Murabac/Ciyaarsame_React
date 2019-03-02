import React from 'react';
import classes from './Parents.css'
import wrapper from '../../Wrapper/Wrapper.css'
import Navbar from '../../components/Navbar/Navbar.js'

class Parents extends React.Component {

  render () {

    return(
      <div className={wrapper.Wrapper}>
      
        <Navbar name="Parents"/>

      </div>
    )
  }
}


export default Parents
