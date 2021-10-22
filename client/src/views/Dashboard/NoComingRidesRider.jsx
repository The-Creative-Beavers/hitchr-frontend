import React from 'react';
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';

const NoComingRidesRider = () => {
  const history = useHistory();
  return (
    <div id="no-rides">
      <p>You don't have any upcoming rides</p>
      <a onClick={() => history.push('/search')}>
        <button type="button">Search Rides</button>
      </a>
    </div>
  );
};
=======

const NoComingRidesRider = () => (
  <div id="no-rides">
    <p>You don't have any upcoming rides</p>
    <a href="/search">
      <button type="button">Search Rides</button>
    </a>
  </div>
);
>>>>>>> parent of 6b42564 (changed to onlcick instead of hrefs)

export default NoComingRidesRider;
