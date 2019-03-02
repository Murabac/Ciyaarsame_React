import React from 'react';
import classes from './Users.css'
import wrapper from '../../Wrapper/Wrapper.css'
import Navbar from '../../components/Navbar/Navbar.js'
import ProfileCard from '../../components/ProfileCard/ProfileCard.js'
import SearchBar from '../../components/SearchBar/SearchBar.js'

class Users extends React.Component {

  render () {

    return(
      <div className={wrapper.Wrapper}>
        <Navbar name="Users"/>
        <SearchBar />
        <ProfileCard />

      </div>
    )
  }
}


export default Users
