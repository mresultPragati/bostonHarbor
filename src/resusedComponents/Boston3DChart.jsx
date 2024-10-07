import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Highcharts3D from "highcharts/highcharts-3d";

Highcharts3D(Highcharts);

const transformDataToHighchartsFormat = (data) => {
  const { labels, datasets } = data;

  return datasets[0].data.map((value, index) => ({
    name: labels[index],
    y: value,
    color: datasets[0].backgroundColor[index],
  }));
};

const BostonPieChart3D = ({ chartData }) => {
  const transformedSeriesData = transformDataToHighchartsFormat(chartData);

  const options = {
    chart: {
      type: "pie",
      backgroundColor: "#fff",
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
      width: 600, // Increase width
      height: 400, // Increase height
    },
    title: {
      text: null,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        depth: 45,
        dataLabels: {
          enabled: true,
          formatter: function () {
            const total = this.series.data.reduce(
              (sum, point) => sum + point.y,
              0
            );
            const percentage = ((this.y / total) * 100).toFixed(2) + "%";
            return `${this.point.name}: ${percentage}`;
          },
        },
        allowPointSelect: true,
        cursor: "pointer",
        showInLegend: true,
      },
    },
    series: [
      {
        name: chartData.datasets[0].label,
        data: transformedSeriesData,
      },
    ],
    tooltip: {
      formatter: function () {
        const valueWithoutSeparator = Highcharts.numberFormat(
          this.y,
          0,
          ".",
          ""
        );
        return `${this.point.name}: ${valueWithoutSeparator}`;
      },
    },
  };

  return (
    <div style={{ width: "600px", height: "auto" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BostonPieChart3D;
