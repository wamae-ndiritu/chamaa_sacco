import React from "react";
import ReactApexChart from "react-apexcharts";

class UsageStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70, 55, 13, 43, 22],
      options: {
        chart: {
          width: 570,
          type: "pie",
        },
        labels: ["Savings", "Loans", " Borrowings", "Investment", "Expenses"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 350,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width={360}
          className="usage-chart"
        />
      </div>
    );
  }
}

export default UsageStats;
