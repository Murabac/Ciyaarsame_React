import React from 'react';
import classes from './Report.css'
import wrapper from '../../Wrapper/Wrapper.css'
import Navbar from '../../components/Navbar/Navbar.js'

class Report extends React.Component {

  render () {

    return(
      <div className={wrapper.Wrapper}>
        
        <Navbar name="Report"/>

      </div>
    )
  }
}


export default Report
