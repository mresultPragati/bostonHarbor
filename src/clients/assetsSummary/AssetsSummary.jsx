import React, { useEffect, useState } from "react";
import { Typography, Box, Paper, Divider } from "@mui/material";
import { AssetsLiabilityChart } from "../../assetsLiabilityChart/AssetsLiabilityCharts";
import AssetsDetails from "./AssetsDetails";
import { getClientOrderList } from "../../api/apiServiece";
import BostonLoader from "../../resusedComponents/BostonLoader";
import { getMidDarkColor } from "../../assetsLiabilityChart/Constant";
import { useParams } from "react-router-dom";
import { groupByAssetClass, updateKeyOfArray } from "./Constants";

const chartData = {
  labels: ["Bons", "Stock", "Real Estate", "Commodities"],
  datasets: [
    {
      label: "Assets",
      data: [1000, 1500, 3000, 2500],
      backgroundColor: [
        "rgba(55, 200, 241, 1.7)",
        "rgba(55, 150, 150, 1.7)",
        "rgba(85, 200, 30, 1.7)",
        "rgba(95, 50, 60, 1.7)",
      ],
      borderWidth: 1,
    },
  ],
};

const data = [
  { id: 1, name: "Bons", balance: 1000, availableBalance: 800 },
  { id: 2, name: "Stock", balance: 1500, availableBalance: 1200 },
  { id: 3, name: "Commodities", balance: 2500, availableBalance: 2300 },
  { id: 4, name: "Real Estate", balance: 3000, availableBalance: 2800 },
];

const AssetsSummary = ({ formData, setFormData }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [investmentList, setInvestmentList] = useState([]);
  const [orderChartData, setOrderChartData] = useState([]);

  const selectedClient = JSON?.parse?.(localStorage?.getItem?.("clients"));
  const { uniqueId } = useParams();
  console.log("selectedClient", selectedClient);

  useEffect(() => {
    getInvestmentList();
    getChartData();
  }, []);

  useEffect(() => {
    getChartData();
  }, [investmentList]);

  const getInvestmentList = async () => {
    let payload = {
      client_id: uniqueId ? uniqueId : selectedClient?.uniqueId,
    };
    setShowLoader(true);
    const resp = await getClientOrderList(payload, "application/json");
    console.log("respp", resp);
    if (resp.status === 200) {
      setShowLoader(false);
      // let filtereList = resp?.data?.transaction_data?.filter(
      //   (item) =>
      //     (item?.assetClass).toLowerCase() !== "Real Estate".toLowerCase()
      // );
      // setInvestmentList(resp?.data?.transaction_data);

      let updatedData = updateKeyOfArray(resp?.data?.transaction_data);
      let commonAssetClass = groupByAssetClass(updatedData);
      console.log("commonAssetClass", commonAssetClass);

      setInvestmentList(commonAssetClass);
    }
  };

  const getChartData = () => {
    const assetLabels = [];
    const transactionAmountsData = [];

    // Loop through each transaction to extract asset name and transaction amount
    investmentList?.forEach((item) => {
      const { assetClass, totalBalance } = item;

      // Push the values into respective arrays
      assetLabels.push(assetClass);
      transactionAmountsData.push(totalBalance);
    });

    var backgroundColor = [];

    for (let i = 0; i <= investmentList?.data?.length; i++) {
      backgroundColor?.push(getMidDarkColor());
    }

    const chartData = {
      labels: assetLabels,
      datasets: [
        {
          label: "Assets",
          data: transactionAmountsData,
          backgroundColor: backgroundColor,
          borderWidth: 1,
        },
      ],
    };
    setOrderChartData(chartData);
  };

  const getTotalBalance = () => {
    return investmentList?.reduce(
      (total, item) => total + item.totalBalance,
      // item.assetClass !== "Real Estate" && total + item.transactionAmount,
      0
    );
  };

  return (
    <>
      {showLoader && <BostonLoader />}
      <Paper
        elevation={3}
        sx={{
          // width: "fit-content",
          width: 300,
          margin: "2rem auto",
          padding: "1rem",
          borderRadius: "10px",
          backgroundColor: "#f7f9fc",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            // width: "max-content",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#555" }}
          >
            Funds Available:
          </Typography>
          <Typography variant="body1" sx={{ color: "#333" }}>
            {selectedClient?.investmentAmount
              ? `$${(
                  Number(selectedClient?.investmentAmount) -
                  Number(getTotalBalance())
                )?.toFixed(2)}`
              : "Please invest funds"}
          </Typography>
        </Box>
      </Paper>
      {investmentList?.length > 0 && (
        <AssetsDetails
          getTotalBalance={getTotalBalance}
          chartData={orderChartData}
          data={investmentList}
        />
      )}
      <AssetsLiabilityChart />
    </>
  );
};

export default AssetsSummary;
