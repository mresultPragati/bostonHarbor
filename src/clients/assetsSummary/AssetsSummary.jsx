import React, { useState } from "react";
import { Typography, Box, Paper, Divider } from "@mui/material";
import { AssetsLiabilityChart } from "../../assetsLiabilityChart/AssetsLiabilityCharts";
import AssetsDetails from "./AssetsDetails";

const AssetsSummary = ({ formData, setFormData }) => {
  const [availableBalance, setAvailableBalance] = useState(800);
  const clients = JSON.parse(localStorage.getItem("clients"));
  // console.log("id, name", clients);

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
            ${clients?.investmentAmount?.toLocaleString()}
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
      <AssetsDetails />
      <AssetsLiabilityChart />
    </>
  );
};

export default AssetsSummary;
