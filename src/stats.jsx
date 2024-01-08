// import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Navbar from './Navbar2.0';

const ScorePage = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomScores = Array.from({ length: 7 }, () => getRandomInt(0,50));
  console.log(randomScores);
  const ColorMemoScore = localStorage.getItem('ColorMemoScore');
  randomScores.push(ColorMemoScore);

  const chartOptions = {
    chart: {
      id: 'scores-chart',
    },
    xaxis: {
      categories: Array.from({ length: 8 }, (_, i) => `Score ${i + 1}`),
    },
  };

  const chartSeries = [
    {
      name: 'Scores',
      data: randomScores,
    },
  ];

  return (
    <div>
      <Navbar/>
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2> Your Stats</h2>
      <div style={{ marginBottom: '20px' }}>
        <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
      </div>
      <div style={{ textAlign: 'left' }}>
        <h3>Scores:</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {randomScores.map((score, index) => (
            <li key={index}>{`Game ${index + 1}: ${score}`}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default ScorePage;
