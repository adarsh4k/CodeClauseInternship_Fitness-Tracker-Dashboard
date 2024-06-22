import React, { useState } from 'react';
import Header from './components/Header';
import ActivityTracker from './components/ActivityTracker';
import Statistics from './components/Statistics';
import Recommendations from './components/Recommendations';
import './App.css';

console.log('Header:', Header);
console.log('ActivityTracker:', ActivityTracker);
console.log('Statistics:', Statistics);
console.log('Recommendations:', Recommendations);

const App = () => {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <ActivityTracker addActivity={addActivity} />
        <Statistics activities={activities} />
        <Recommendations activities={activities} />
      </main>
    </div>
  );
};

export default App;
