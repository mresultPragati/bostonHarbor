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
import { Bar } from "react-chartjs-2";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const BostonBarChart = (props) => {
  const { data, width, height, chartWidth } = props;
  const options = {
    responsive: true,
  };

  return (
    <>
      {data && data?.datasets && (
        <div
          style={{
            width: chartWidth === "none" ? "" : "90vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="mt-5"
            style={{
              height: height ? height : "450px",
              width: width ? width : "900px",
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            <Bar data={data} options={options} />
          </div>
        </div>
      )}
    </>
  );
};

export default BostonBarChart;
