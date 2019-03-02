import React, { Component } from 'react';
import Users from './containers/Users/Users.js'
import CreateAdmin from './containers/CreateAdmin/CreateAdmin.js'
import ParentRegistration from './containers/ParentRegistration/ParentRegistration.js'
import Parents from './containers/Parents/Parents.js'
import Payment from './containers/Payment/Payment.js'
import Report from './containers/Report/Report.js'
import Error from './containers/Error/Error.js'
import StudentList from './containers/StudentList/StudentList.js'
import Profile from './containers/Profile/Profile.js'
import SideBar from './components/SideBar/SideBar.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <div >
            <SideBar />
            <Switch>
              <Route path= "/" component={Users} exact/>
              <Route path= "/CreateAdmin" component={CreateAdmin}/>
              <Route path= "/ParentRegistration" component={ParentRegistration}/>
              <Route path= "/Parents" component={Parents}/>
              <Route path= "/Payment" component={Payment}/>
              <Route path= "/Report" component={Report}/>
              <Route path= "/StudentList" component={StudentList}/>
              <Route path= "/profile" component={Profile}/>
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
