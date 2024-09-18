import { useEffect, useRef, useState } from "react";
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

export const AssetsChart = () => {
  const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));
  const [smallValueChartData, setSmallValueChartData] = useState({});
  const [largeValueChartData, setLargeValueChartData] = useState({});
  const [chartData, setChartData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // --------------------------------------------------------------------------------------
    const result = clientList?.find((item) => item.uniqueId === id);
    const values = result?.assetsDatasets?.datasets?.[0]?.data;
    var backgroundColor = [];

    for (
      let i = 0;
      i <= result?.assetsDatasets?.datasets?.[0]?.data?.length;
      i++
    ) {
      backgroundColor?.push(getMidDarkColor());
    }

    //   Step 1: Sort the array to find the median
    const sortedValues = [...values].sort((a, b) => a - b);

    // Step 2: Find the median
    let median;
    const midIndex = Math.floor(sortedValues.length / 2);

    if (sortedValues.length % 2 === 0) {
      median = (sortedValues[midIndex - 1] + sortedValues[midIndex]) / 2;
    } else {
      median = sortedValues[midIndex];
    }

    let smallDataValues = [];
    let smallLabelValues = [];

    values?.filter((item, index) => {
      if (item <= median) {
        smallDataValues?.push(item);
        smallLabelValues?.push(result?.assetsDatasets?.labels[index]);
      }
    });

    let largeDataValues = [];
    let largeLabelValues = [];

    values?.filter((item, index) => {
      if (item > median) {
        largeDataValues?.push(item);
        largeLabelValues?.push(result?.assetsDatasets?.labels[index]);
      }
    });

    var testArr = extractKeysAndValues(result?.assetsDatasets);
    console.log("testArr", testArr);

    const smallValueData = {
      labels: testArr?.labels?.slice(0, 5),
      // labels: smallLabelValues,
      datasets: [
        {
          label: "Assets",
          data: testArr?.datasets[0]?.data?.slice(0, 5),
          // data: smallDataValues,
          backgroundColor: backgroundColor?.slice(0, 5),
          borderWidth: 1,
        },
      ],
    };

    const largeValueData = {
      labels: testArr?.labels?.slice(5, testArr?.labels?.length),
      // labels: largeLabelValues,
      datasets: [
        {
          label: "Assets",
          data: testArr?.datasets[0]?.data?.slice(
            5,
            testArr?.datasets[0]?.data?.length
          ),
          // data: largeDataValues,
          backgroundColor: backgroundColor?.slice(5, testArr?.labels?.length),
          borderWidth: 1,
        },
      ],
    };
    console.log("assetsLiabilities mylib smallValueData", smallValueData);

    var chartObj = {
      smallValueData: smallValueData,
      largeValueData: largeValueData,
    };

    setSmallValueChartData(chartObj?.smallValueData);
    setLargeValueChartData(chartObj?.largeValueData);
    setChartData(extractKeysAndValues(result?.assetsDatasets));

    // ---------------------------All data-----------------
    // setChartData(extractKeysAndValues(result?.assetsDatasets));
    // ------If user want to see other field info uncomment below line-------
    // setChartData(result?.assetsDatasets);
  }, [id]);

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
      <h3 className="mt-5">{"All Assets"}</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {/* <div> */}
        <TableContainer
          style={{ marginTop: "5rem", width: "auto", marginRight: "1rem" }}
        >
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
                  Assets
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
        <div className="mt-3">
          <BostonPieChart
            data={smallValueChartData}
            width="450px"
            height="450px"
            options={options}
          />

          <div className="mt-3">
            <BostonPieChart
              data={largeValueChartData}
              width="450px"
              height="450px"
              options={options}
            />
            {/* <BostonPieChart
            data={chartData}
            width="450px"
            height="450px"
            options={options}
          /> */}
          </div>
        </div>
      </div>
    </>
  );
};
