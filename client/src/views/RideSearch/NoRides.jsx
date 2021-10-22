import React from 'react';

<<<<<<< HEAD
const NoRides = () => {
  const history = useHistory();
  return (
    <div id="no-rides">
      <p>No rides match your search. Create this ride for others?</p>
      <a onClick={() => history.push('/create')}>
        <button type="button">Create Ride</button>
      </a>
    </div>
  );
};
=======
const NoRides = () => (
  <div id="no-rides">
    <p>No rides match your search. Create this ride for others?</p>
    <a href="/create">
      <button type="button">Create Ride</button>
    </a>
  </div>
);
>>>>>>> parent of 6b42564 (changed to onlcick instead of hrefs)

export default NoRides;
