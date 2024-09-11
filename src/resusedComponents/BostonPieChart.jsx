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

// import { Chart, ArcElement } from 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels";

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

export const BostonPieChart = (props) => {
  const { data } = props;

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        color: "white", // Color of the labels
        formatter: (value) => value, // Format the labels to display the raw value
      },
    },
  };

  return (
    <>
      {data && data?.datasets && (
        <div style={{ height: "450px", width: "450px" }}>
          <Pie data={data} options={options} />
        </div>
      )}
    </>
  );
};
