import React from 'react'
import classes from './Navbar.css'
import {NavLink} from 'react-router-dom'


function Header(props){
    return (
      <header className={classes.Navbar}>
        <div className={classes.contaierFluid}>
          <div className={classes.navbarWrapper}>
              <p className={classes.navbarBrand}>{props.name}</p>
          </div>
          <div className={classes.collapse}>
            <ul className={classes.navbarNav}>
              <NavLink to="/profile" className={classes.navbarNavItem}>Profile</NavLink>
              <NavLink to="#" className={classes.navbarNavItem}>Logout</NavLink>
            </ul>
          </div>
        </div>
      </header>
    )
}

export default Header
