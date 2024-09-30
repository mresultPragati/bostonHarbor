import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useRef } from "react";

// Register Chart.js components
// Chart.register(ArcElement, ChartDataLabels);
// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

// Now you can use Bar and Pie charts in your component

export const BostonPieChart = ({ data, width, height, options }) => {
  const pieChartOptions = {
    plugins: {
      responsive: true,
      // tooltip: {
      //   callbacks: {
      //     label: function (tooltipItem) {
      //       const total = tooltipItem.dataset.data.reduce(
      //         (acc, curr) => acc + curr
      //       );
      //       const value = tooltipItem.raw;
      //       const percentage = ((value / total) * 100).toFixed(2);
      //       return `${tooltipItem.label}: ${percentage}%`;
      //     },
      //   },
      // },

      datalabels: {
        color: "white", // Color of the labels
        formatter: (value, context) => {
          const total = context.chart._metasets?.[0]?.total;
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          return percentage;
        },
      },

      label: function (tooltipItem) {
        const total = tooltipItem.dataset.data.reduce(
          (acc, curr) => acc + curr
        );
        const value = tooltipItem.raw;
        const percentage = ((value / total) * 100).toFixed(2);
        return `${tooltipItem.label}: ${percentage}%`;
      },
    },
  };
  //   responsive: true,
  //   plugins: {
  //     datalabels: {
  //       color: "white", // Color of the labels
  //       formatter: (value) => `${value} ==`, // Format the labels to display the raw value
  //     },
  //   },
  // };

  return (
    <>
      {data && data?.datasets && (
        <div
          style={{
            height: height ? height : "450px",
            width: width ? width : "450px",
          }}
        >
          {/* <Pie data={data} options={options ? options : pieChartOptions} /> */}
          <Pie data={data} options={pieChartOptions} />
        </div>
      )}
    </>
  );
};
