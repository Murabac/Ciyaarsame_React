import React from 'react';
import classes from './StudentList.css'
import wrapper from '../../Wrapper/Wrapper.css'
import Navbar from '../../components/Navbar/Navbar.js'

class StudentList extends React.Component {

  render () {

    return(
      <div className={wrapper.Wrapper}>
        
        <Navbar name="Student List"/>

      </div>
    )
  }
}


export default StudentList
