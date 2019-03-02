import React from 'react';
import classes from './Payment.css'
import wrapper from '../../Wrapper/Wrapper.css'
import Navbar from '../../components/Navbar/Navbar.js'

class Payment extends React.Component {

  render () {

    return(
      <div className={wrapper.Wrapper}>
        
        <Navbar name="New Payment"/>

      </div>
    )
  }
}


export default Payment
