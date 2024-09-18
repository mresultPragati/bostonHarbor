import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { extractKeysAndValues, getMidDarkColor, total } from "./Constant";
import { BostonPieChart } from "../resusedComponents/BostonPieChart";

export const LiabilityChart = () => {
  const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));
  const [chartData, setChartData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const result = clientList?.find((item) => item.uniqueId === id);
    console.log("resultresult li", result);
    setChartData(extractKeysAndValues(result?.liabilityDatasets));
    // ------If user want to see other field info uncomment below line-------
    // setChartData(result?.assetsDatasets);
  }, [id]);

  // const extractKeysAndValues = (arr) => {
  //   const labelsArray = [];
  //   const valueArray = [];
  //   console.log("assetsLiabilities", arr);
  //   arr?.datasets[0]?.data?.map((item, index) => {
  //     if (item) {
  //       labelsArray?.push(arr?.labels[index]);
  //       valueArray?.push(Number(item));
  //     }
  //   });

  //   var backgroundColor = [];

  //   for (let i = 0; i <= labelsArray?.length; i++) {
  //     backgroundColor?.push(getMidDarkColor());
  //   }

  //   const data = {
  //     labels: labelsArray,
  //     //   datasets: valueArray,
  //     datasets: [
  //       {
  //         label: "Assets",
  //         data: valueArray,
  //         backgroundColor: backgroundColor,
  //         // backgroundColor: "rgba(55, 170, 241, 0.2)",
  //         // borderColor: "#0979f1",
  //         borderWidth: 1,
  //       },
  //     ],
  //   };
  //   console.log("assetsLiabilities mylib", data);
  //   setChartData(data);
  // };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const total = tooltipItem.dataset.data.reduce(
              (acc, curr) => acc + curr
            );
            const value = tooltipItem.raw;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <>
      <h3 className="mt-5">{"My Liability"}</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <BostonPieChart
            data={chartData}
            width="390px"
            height="390px"
            options={options}
          />
        </div>
        {/* <div> */}
        <TableContainer style={{ marginTop: "5rem", width: "auto" }}>
          <Table
            sx={{
              th: { border: 1, borderCollapse: "collapse", color: "gray" },
              width: "auto",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "auto" }} align="center">
                  Sr. No.
                </TableCell>
                <TableCell sx={{ width: "auto" }} align="center">
                  Liabilities
                </TableCell>
                <TableCell sx={{ width: "auto" }} align="center">
                  Amount ($)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chartData?.datasets?.[0]?.data?.map((item, index) => {
                return (
                  <TableRow key={index} sx={{ " td,  th": { border: 1 } }}>
                    <TableCell sx={{ width: "auto" }}>{index + 1}</TableCell>
                    <TableCell sx={{ width: "auto" }}>
                      {chartData?.labels?.[index]}
                    </TableCell>
                    <TableCell sx={{ width: "auto" }}>{item}</TableCell>
                  </TableRow>
                );
              })}
              <TableRow sx={{ " td": { border: 1 } }}>
                <TableCell colSpan={2} sx={{ width: "auto" }} align="center">
                  Total
                </TableCell>
                <TableCell>{total(chartData)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* </div> */}
      </div>
    </>
  );
};
