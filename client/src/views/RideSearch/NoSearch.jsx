import React from 'react';

<<<<<<< HEAD
const NoSearch = () => {
  const history = useHistory();
  return (
    <div id="create-ride-plug">
      <p>Want to drive fellow Hitchrs?</p>
      <a onClick={() => history.push('/create')}>
        <button type="button">Create A Ride</button>
      </a>
    </div>
  );
};
=======
const NoSearch = () => (
  <div id="create-ride-plug">
    <p>Want to drive fellow Hitchrs?</p>
    <a href="/create">
      <button type="button">Create A Ride</button>
    </a>
  </div>
);
>>>>>>> parent of 6b42564 (changed to onlcick instead of hrefs)

export default NoSearch;
