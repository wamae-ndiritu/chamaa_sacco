import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Monthly Saving Statistics",
      backgroundColor: "darkcyan",
      borderColor: "darkcyan",
      data: [0, 10, 5, 2, 20, 30, 45, 1, 12, 7, 8, 32, 16],
    },
  ],
};

const LineChart = () => {
  <Chart />;
  return (
    <div className="chart-cont">
      <Line data={data} className="chart-item" />
    </div>
  );
};

export default LineChart;
