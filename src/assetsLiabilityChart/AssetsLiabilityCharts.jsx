import { useParams } from "react-router-dom";
import { AssetsChart } from "./AssetsChart";
import { extractKeysAndValues, getMidDarkColor } from "./Constant";
import { LiabilityChart } from "./LiabilityChart";
import { useEffect, useState } from "react";

export const AssetsLiabilityChart = () => {
  const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));
  const [smallValueChartData, setSmallValueChartData] = useState({});
  const [largeValueChartData, setLargeValueChartData] = useState({});
  const [assetsChartData, setAssetsChartData] = useState({});
  const [liabilityChartData, setLiabilityChartData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // --------------------------------------------------------------------------------------
    const result = clientList?.find((item) => item.uniqueId === id);
    setLiabilityChartData(extractKeysAndValues(result?.liabilityDatasets));
    const values = result?.assetsDatasets?.datasets?.[0]?.data;
    var backgroundColor = [];

    for (
      let i = 0;
      i <= result?.assetsDatasets?.datasets?.[0]?.data?.length;
      i++
    ) {
      backgroundColor?.push(getMidDarkColor());
    }

    // Step 1: Sort the array to find the median
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
    setAssetsChartData(extractKeysAndValues(result?.assetsDatasets));

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
  console.log(
    "smallValueChartData",
    smallValueChartData?.datasets?.[0]?.data?.length > 0 ||
      largeValueChartData?.datasets?.[0]?.data?.length > 0 ||
      liabilityChartData?.datasets?.[0]?.data?.length > 0
  );

  return (
    <div className="mb-5">
      <h2>Assets And Liability Breakdown</h2>
      {smallValueChartData?.datasets?.[0]?.data?.length > 0 ||
      largeValueChartData?.datasets?.[0]?.data?.length > 0 ||
      liabilityChartData?.datasets?.[0]?.data?.length > 0 ? (
        <>
          <AssetsChart
            options={options}
            chartData={assetsChartData}
            smallValueChartData={smallValueChartData}
            largeValueChartData={largeValueChartData}
          />
          <LiabilityChart options={options} chartData={liabilityChartData} />
        </>
      ) : (
        <h3 className="m-5" style={{ fontWeight: "lighter" }}>
          DATA UNAVAILABLE
        </h3>
      )}
    </div>
  );
};
