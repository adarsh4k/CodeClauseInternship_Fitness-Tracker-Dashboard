import React from 'react';

const Recommendations = ({ activities }) => {
  const totalDuration = activities.reduce((acc, curr) => acc + parseInt(curr.duration), 0);
  const averageDuration = (totalDuration / activities.length) || 0;

  const recommendWorkout = () => {
    if (averageDuration < 30) {
      return 'Try to increase your workout duration to at least 30 minutes per day.';
    } else if (averageDuration < 60) {
      return 'Great job! Aim to maintain or slightly increase your workout duration.';
    } else {
      return 'Excellent! Consider incorporating more variety into your workouts.';
    }
  };

  return (
    <div>
      <h2>Personalized Recommendations</h2>
      <p>{recommendWorkout()}</p>
    </div>
  );
};

export default Recommendations;
