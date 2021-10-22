// Libraries
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import camelcaseKeys from 'camelcase-keys';

// Views
import RideSearch from './views/RideSearch/RideSearch';
import Dashboard from './views/Dashboard/Dashboard';
import Login from './views/Login/Login';
import LoginModel from './views/Login/LoginModel';
import Register from './views/Auth/Auth';
import RegisterModel from './views/Auth/AuthModel';
import User from './views/User/User';
import CreateRide from './views/CreateRide/CreateRide';
import Nav from './components/Nav/Nav';

// Context
import UserContext from './contexts/UserContext';

// Style Sheet
import './App.css';

// Dummy Data
import userInfo from './dummyData/userInfo';
import emptyUser from './dummyData/emptyUser';

const App = () => {
  const [user, setUser] = useState(emptyUser());

  const logout = () => {
    setUser(emptyUser());
  };

  console.log(user);

  return (
    <div id="App">
      <img
        id="background"
        src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80"
        alt=""
      />
      <div id="content">
        <Router>
          <UserContext.Provider value={user}>
            <Nav logoutCallback={logout} />
            <Route path="/login">
              <Login loginCallback={LoginModel(setUser)} />
            </Route>
            <Route path="/register">
              <Register registerCallback={RegisterModel(setUser)} />
            </Route>
            {
              !user || !user.sessionId
                ? <Redirect to="/login" />
                : (
                  <>
                    <Route path="/create">
                      <CreateRide />
                    </Route>
                    <Route path="/dashboard">
                      <Dashboard />
                    </Route>
                    <Route path="/user/:userId">
                      <User />
                    </Route>
                    <Route exact path="/">
                      <div id="Home" />
                    </Route>
                    <Route path="/search">
                      <RideSearch />
                    </Route>
                    <Route exact path="/">
                      <Redirect to="/search" />
                    </Route>
                  </>
                )
            }
          </UserContext.Provider>
        </Router>
      </div>
    </div>
  );
};

export default App;
