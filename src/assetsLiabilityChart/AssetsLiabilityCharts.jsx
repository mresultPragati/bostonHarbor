import { useParams } from "react-router-dom";
import { AssetsChart } from "./AssetsChart";
import { extractKeysAndValues, getMidDarkColor } from "./Constant";
import { LiabilityChart } from "./LiabilityChart";
import { useEffect, useState } from "react";
import { isEmpty } from "../resusedComponents/constant/ResusableConst";

export const AssetsLiabilityChart = () => {
  const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));
  const [firstPartAssetsData, setFirstPartAssestData] = useState({});
  const [secondPartAssetsData, setLargeValueChartData] = useState({});
  const [assetsChartData, setAssetsChartData] = useState({});
  const [liabilityChartData, setLiabilityChartData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // --------------------------------------------------------------------------------------
    const result = clientList?.find((item) => item.uniqueId === id);

    // if (isEmpty(result?.liabilityDatasets))
    setLiabilityChartData(
      extractKeysAndValues(
        result?.liabilityDatasets ? result?.liabilityDatasets : {}
      )
    );

    // const values = result?.assetsDatasets?.datasets?.[0]?.data;
    var backgroundColor = [];
    // if (isEmpty(result?.assetsDatasets)) {
    for (
      let i = 0;
      i <= result?.assetsDatasets?.datasets?.[0]?.data?.length;
      i++
    ) {
      backgroundColor?.push(getMidDarkColor());
    }

    // Step 1: Sort the array to find the median
    // const sortedValues = [...values].sort((a, b) => a - b);

    // Step 2: Find the median
    // let median;
    // const midIndex = Math.floor(sortedValues.length / 2);

    // if (sortedValues.length % 2 === 0) {
    //   median = (sortedValues[midIndex - 1] + sortedValues[midIndex]) / 2;
    // } else {
    //   median = sortedValues[midIndex];
    // }

    // let smallDataValues = [];
    // let smallLabelValues = [];

    // values?.filter((item, index) => {
    //   if (item <= median) {
    //     smallDataValues?.push(item);
    //     smallLabelValues?.push(result?.assetsDatasets?.labels[index]);
    //   }
    // });

    // let largeDataValues = [];
    // let largeLabelValues = [];

    // values?.filter((item, index) => {
    //   if (item > median) {
    //     largeDataValues?.push(item);
    //     largeLabelValues?.push(result?.assetsDatasets?.labels[index]);
    //   }
    // });

    var assetsList = extractKeysAndValues(
      result?.assetsDatasets ? result?.assetsDatasets : {}
    );
    console.log("assetsList", assetsList);

    const firstPartOfAssetCHart = {
      labels: assetsList?.labels?.slice(0, 5),
      // labels: smallLabelValues,
      datasets: [
        {
          label: "Assets",
          data: assetsList?.datasets[0]?.data?.slice(0, 5),
          // data: smallDataValues,
          backgroundColor: backgroundColor?.slice(0, 5),
          borderWidth: 1,
        },
      ],
    };

    const secondPartOfAssets = {
      labels: assetsList?.labels?.slice(5, assetsList?.labels?.length),
      // labels: largeLabelValues,
      datasets: [
        {
          label: "Assets",
          data: assetsList?.datasets[0]?.data?.slice(
            5,
            assetsList?.datasets[0]?.data?.length
          ),
          // data: largeDataValues,
          backgroundColor: backgroundColor?.slice(
            5,
            assetsList?.labels?.length
          ),
          borderWidth: 1,
        },
      ],
    };

    var chartObj = {
      firstPartOfAssetCHart: firstPartOfAssetCHart,
      secondPartOfAssets: secondPartOfAssets,
    };

    setFirstPartAssestData(chartObj?.firstPartOfAssetCHart);
    setLargeValueChartData(chartObj?.secondPartOfAssets);
    setAssetsChartData(
      extractKeysAndValues(result?.assetsDatasets ? result?.assetsDatasets : {})
    );
    // }
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
            const percentage = ((value / total) * 100)?.toFixed(2);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
    },
  };
  console.log(liabilityChartData, "result?.liabilityDatasets linde");

  return (
    <div className="mb-5 mt-5">
      <h2>Assets And Liability Breakdown</h2>
      {firstPartAssetsData?.datasets?.[0]?.data?.length > 0 ||
      secondPartAssetsData?.datasets?.[0]?.data?.length > 0 ||
      liabilityChartData?.datasets?.[0]?.data?.length > 0 ? (
        <>
          <AssetsChart
            options={options}
            chartData={assetsChartData}
            firstPartAssetsData={firstPartAssetsData}
            secondPartAssetsData={secondPartAssetsData}
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
