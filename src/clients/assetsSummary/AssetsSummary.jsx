import React, { useEffect, useState } from "react";
import { Typography, Box, Paper, Divider } from "@mui/material";
import { AssetsLiabilityChart } from "../../assetsLiabilityChart/AssetsLiabilityCharts";
import AssetsDetails from "./AssetsDetails";
import { getClientOrderList } from "../../api/apiServiece";
import BostonLoader from "../../resusedComponents/BostonLoader";
import { getMidDarkColor } from "../../assetsLiabilityChart/Constant";
import { useParams } from "react-router-dom";
import { groupByAssetClass, updateKeyOfArray } from "./Constants";
import { StickBox } from "../portfolio/PortfolioStyled";

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
      {/* <Paper
        elevation={3}
        sx={{
          // width: "fit-content",
          width: 300,
          margin: "2rem auto",
          padding: "1rem",
          borderRadius: "10px",
          backgroundColor: "#f7f9fc",
        }}
      > */}
      <StickBox
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: "1rem",
          borderRadius: "10px",
          backgroundColor: "#fbfbfb",
          // backgroundColor: "#f3f3f3",
          width: 300,
          border: "1.3px solid",
          // width: "max-content",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
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
      </StickBox>
      {/* </Paper> */}
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
