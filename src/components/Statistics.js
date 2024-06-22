import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Statistics = ({ activities }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const activityLabels = activities.map((activity) => activity.activity);
  const activityDurations = activities.map((activity) => activity.duration);

  const data = {
    labels: activityLabels,
    datasets: [
      {
        label: 'Activity Duration (mins)',
        data: activityDurations,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  useEffect(() => {
    
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    
    chartInstance.current = new Chart(chartRef.current, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [activities]);

  return (
    <div>
      <h2>Statistics</h2>
      <div style={{ height: '400px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default Statistics;

