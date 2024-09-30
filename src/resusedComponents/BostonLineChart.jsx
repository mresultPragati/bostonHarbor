import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
 
// Register the components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

export const BostonLineChart=(props)=>{
    const{data}=props;

const options = {
    responsive: true,
    plugins: {
      data: true,
      datalabels: false,
      legend: {
        position: "top",
        display: true,
      },
    },
  };

console.log("DATAA",data);
    return(
        <>
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
        <Line data={data} options={options}/>
        </div>
        </div>
      )}
        </>
    )
}