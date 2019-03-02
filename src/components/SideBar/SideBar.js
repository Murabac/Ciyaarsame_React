import React from 'react'
import classes from './SideBar.css'
import {Nav, NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom'
import MaterialIcon from 'material-icons-react';

function Sidebar(){
    return (
      <section className={classes.App}>
        <div className={classes.SideBar}>
          <div className={classes.logo}>
            <NavLink to="/" className={classes.simpleText}>Ciyaarsame</NavLink>
          </div>
          <div className={classes.sidebarWrapper}>
            <Nav className={classes.nav}>
              <NavItem >
                <NavLink to="/" className={classes.navLink} activeClassName={classes.active1} exact>
                  <MaterialIcon icon="dashboard" />
                  <p>Users</p>
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink to="/CreateAdmin" className={classes.navLink} activeClassName={classes.active1} exact>
                  <MaterialIcon icon="assignment_ind" />
                  <p>Create Admin</p>
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink to="/Parents" className={classes.navLink} activeClassName={classes.active1} exact>
                  <MaterialIcon icon="person" />
                  <p>Parents</p>
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink to="/StudentList" className={classes.navLink} activeClassName={classes.active1} exact>
                  <MaterialIcon icon="content_paste" />
                  <p>Student List</p>
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink to="/ParentRegistration" className={classes.navLink} activeClassName={classes.active1} exact>
                  <MaterialIcon icon="library_books" />
                  <p>Parent Registration</p>
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink to="/Payment" className={classes.navLink} activeClassName={classes.active1} exact>
                  <MaterialIcon icon="language" />
                  <p>Payment</p>
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink to="/Report" className={classes.navLink} activeClassName={classes.active1} exact>
                  <MaterialIcon icon="bubble_chart" />
                  <p>Report</p>
                </NavLink>

              </NavItem>
            </Nav>
          </div>
        </div>
      </section>
    )
}

export default Sidebar
