import React, { useEffect, useRef } from 'react';

import Chart from 'chart.js/auto'; 

const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Games', 'Entertainment', 'Art', 'Membership'],
        datasets: [
          {
            data: [12, 19, 3, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Total Assets Owned',
            font: {
              size: 24
            }
          },
          legend: {
            position: 'right'
          }
        }
      }
    });
  }, []);

  return (
    <div className="h-fit w-full md:w-96 md:h-96">
      <div className="p-4 rounded-lg flex-grow">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default DonutChart;
