import React from 'react';
import classes from './Error.css'
import wrapper from '../../Wrapper/Wrapper.css'
import {NavLink} from 'react-router-dom'
class Error extends React.Component {

  render () {

    return(
      <div className={wrapper.Wrapper}>
        <div className={classes.error}>
            <div className={classes.errorText}>
                <span>404</span>
                <p className={classes.hmpg}><NavLink to="/" className={classes.back}>Back To Home</NavLink></p>
            </div>
      </div>
      </div>
    )
  }
}


export default Error
