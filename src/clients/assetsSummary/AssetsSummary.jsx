import React, { useState } from "react";
import { Typography, Box, Paper, Divider } from "@mui/material";
import { AssetsLiabilityChart } from "../../assetsLiabilityChart/AssetsLiabilityCharts";
import AssetsDetails from "./AssetsDetails";

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
  const [availableBalance, setAvailableBalance] = useState(800);
  const clients = JSON.parse(localStorage.getItem("clients"));
  // console.log("id, name", clients);

  const getTotalBalance = () => {
    return data.reduce((total, item) => total + item.balance, 0);
  };

  return (
    <>
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
        {/* <Box
          sx={{
            padding: "1rem",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "space-between", // Align children to edges
            alignItems: "center", // Center align items vertically
            flexDirection: "row", // Keep items in a row
          }}
        > */}
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
            $
            {clients?.investmentAmount
              ? Number(clients?.investmentAmount) - Number(getTotalBalance())
              : "Please invest funds"}
          </Typography>
          {/* </Box> */}

          {/* <Divider orientation="vertical" flexItem sx={{ margin: "0 1rem" }} />

          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#555" }}
            >
              Available Cash:
            </Typography>
            <Typography variant="body1" sx={{ color: "#333" }}>
              ${availableBalance.toLocaleString()}
            </Typography>
          </Box> */}
        </Box>
      </Paper>
      <AssetsDetails
        getTotalBalance={getTotalBalance}
        chartData={chartData}
        data={data}
      />
      <AssetsLiabilityChart />
    </>
  );
};

export default AssetsSummary;
