// React
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';

=======
>>>>>>> parent of 6b42564 (changed to onlcick instead of hrefs)

// Contexts & Utils
import UserContext from '../../contexts/UserContext';
import UpdateContext from '../../contexts/UpdateContext';
import serverUtils from '../../serverUtils';

// Stylesheet
import './RideItem.css';

const RideItem = ({ ride }) => {
  const user = useContext(UserContext);
  const updateContext = useContext(UpdateContext);
  let updateFunction;
  if (updateContext && updateContext.update) {
    updateFunction = updateContext.update;
  }
  const {
    rideId, driver, startDest, endDest, completed, riders,
  } = ride;
  const isDriver = driver.id === user.id;
  const isRider = riders && riders.includes(user.id);
  function handleJoin() {
    serverUtils.rides.addRider({ rideId, userId: user.id })
      .then(() => {
        if (updateFunction) {
          updateFunction();
        }
      });
  }
  function handleComplete() {
    serverUtils.user.completeRide(rideId)
      .then(() => {
        if (updateFunction) {
          updateFunction();
        }
      });
  }
  return (
    <div className="RideItem" data-testid={`ride-result${rideId}`}>
      <a href={`/user/${driver.id}`}>{driver.username}</a>
      {
        riders && riders.length
          ? <span>{`+${riders.length}`}</span>
          : <span>+0</span>
      }
      <span>{startDest}</span>
      <span>{endDest}</span>
      {
        completed
          ? <span>{new Date(completed).toDateString()}</span>
          : null
      }
      {
        !isDriver && !isRider && !completed
          ? <button type="button" onClick={handleJoin}>Join</button>
          : null
      }
      {
        isRider && !completed
          ? <button type="button">Joined</button>
          : null
      }
      {
        (isDriver || isRider) && !completed
          ? <button className="complete-button" type="button" onClick={handleComplete}>Mark As Complete</button>
          : null
      }
    </div>
  );
};

export default RideItem;

RideItem.propTypes = {
  ride: PropTypes.shape({
    rideId: PropTypes.number.isRequired,
    driver: PropTypes.shape({
      username: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
    startDest: PropTypes.string.isRequired,
    endDest: PropTypes.string.isRequired,
    completed: PropTypes.string,
    riders: PropTypes.arrayOf(PropTypes.shape),
  }).isRequired,
  driver: PropTypes.bool,
  joinFunction: PropTypes.func,
};
RideItem.defaultProps = {
  driver: false,
  joinFunction: null,
};
