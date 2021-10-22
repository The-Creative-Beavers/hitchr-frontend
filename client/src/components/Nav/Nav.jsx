// React
import React, { useContext } from 'react';
import Proptypes from 'prop-types';
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';
=======
>>>>>>> parent of 6b42564 (changed to onlcick instead of hrefs)

// Stylesheet
import './Nav.css';

// Context
import UserContext from '../../contexts/UserContext';

const Nav = ({ logoutCallback }) => {
  const user = useContext(UserContext);
  return (
    <div id="Nav">
      <div id="brand">
<<<<<<< HEAD
        <a id="logo" onClick={() => history.push('/')}>Hitchr</a>
        <span>Share a ride - save the planet!</span>
      </div>
      <div id="navRight">
        <a onClick={() => history.push('/search')}>Search Rides</a>
        {
          user.isDriver
            ? <a onClick={() => history.push('/create')}>Create Ride</a>
=======
        <a id="logo" href="/">Hitchr</a>
        <span>Share a ride - save the planet!</span>
      </div>
      <div id="navRight">
        <a href="/search">Search Rides</a>
        {
          user.isDriver
            ? <a href="/create">Create Ride</a>
>>>>>>> parent of 6b42564 (changed to onlcick instead of hrefs)
            : null
        }
        {
          user.sessionId
            ? (
              <div id="user-control">
<<<<<<< HEAD
                <a id="username" onClick={() => history.push('/dashboard')}>{user.username}</a>
=======
                <a id="username" href="/dashboard">{user.username}</a>
>>>>>>> parent of 6b42564 (changed to onlcick instead of hrefs)
                <button type="button" onClick={logoutCallback}>Logout</button>
              </div>
            )
            : null
        }
      </div>
    </div>
  );
};

Nav.propTypes = {
  logoutCallback: Proptypes.func.isRequired,
};

export default Nav;
