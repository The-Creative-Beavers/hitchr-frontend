import React from 'react';

<<<<<<< HEAD
const NoComingRides = () => {
  const history = useHistory();
  return (
    <div id="no-rides">
      <p>You don&apos;t have any upcoming rides</p>
      <a onClick={() => history.push('/create')}>
        <button type="button">Create Ride</button>
      </a>
    </div>
  );
};
=======
const NoComingRides = () => (
  <div id="no-rides">
    <p>You don&apos;t have any upcoming rides</p>
    <a href="/create">
      <button type="button">Create Ride</button>
    </a>
  </div>
);
>>>>>>> parent of 6b42564 (changed to onlcick instead of hrefs)

export default NoComingRides;
