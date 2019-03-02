import React from 'react'
import classes from './Navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


function Header(){
    return (
      <header className={classes.Navbar}>
        <div className={classes.contaierFluid}>
          <div className={classes.navbarWrapper}>
              <p className={classes.navbarBrand}>Ciyaarsame</p>
          </div>
          <div className={classes.collapse}>
            <ul className={classes.navbarNav}>
              <li></li>
            </ul>
          </div>
        </div>
      </header>
    )
}

export default Header
