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
import { useRef } from "react";

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

// Now you can use Bar and Pie charts in your component

export const BostonBarChart = (props) => {
  const { data } = props;
  const options = {
    responsive: true,
  };

  // const generateUniqueId = (name) => {
  //   const uniqueId = `${name}${Math.floor(1000 + Math.random() * 9000)}`;
  //   console.log("Math.random()", Math.random());
  //   return uniqueId;
  // };
  return (
    <>
      {/* <p>{generateId("pragati", 9673846610)}</p> */}
      {/* <p>{generateUniqueId("pragati")}</p> */}
      {data && data?.datasets && (
        <div
          style={{ width: "90vw", display: "flex", justifyContent: "center" }}
        >
          <div
            className="mt-5"
            style={{
              height: "450px",
              width: "900px",
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
