import React, { useState } from 'react';

const ActivityTracker = ({ addActivity }) => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity && duration) {
      addActivity({ activity, duration });
      setActivity('');
      setDuration('');
    }
  };

  return (
    <div>
      <h2>Track Your Activity</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Duration (mins)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default ActivityTracker;
