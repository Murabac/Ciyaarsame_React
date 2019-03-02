import React from 'react'
import classes from './SearchBar.css'
import MaterialIcon from 'material-icons-react';
import SearchIcon from '../../assets/img/search-icon.png'
import ProfileData from '../ProfileCard/ProfileData.js'

class Users extends React.Component {
  constructor (){
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

  render () {
    return (
      <div className={classes.wrap}>
      <form className={classes.searchContainer}>
        <input type="text" className={classes.searchBar} placeholder="What can I help you with today?"
         value={this.state.search}
         onChange={this.updateSearch.bind(this)}/>
        <a href="#"><img className={classes.searchIcon} src={SearchIcon} /></a>
      </form>
      </div>
    )
  }
  }

export default Users
