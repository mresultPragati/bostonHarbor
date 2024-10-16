import React, { useState } from "react";
import { TextField, Grid2, Paper, Typography } from "@mui/material";

const DirectOwnership = () => {
  // Using state to store form data
  const [marketData, setMarketData] = useState({
    vacancyRate: "",
    capEx: "",
    capRateAndMarketValuation: "",
    currentMarketValue: "",
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarketData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Grid2 className="mb-5" container spacing={2}>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Vacancy Rate"
            variant="standard"
            fullWidth
            name="vacancyRate"
            value={marketData.vacancyRate}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="CapEx (Capital Expenditures)"
            variant="standard"
            fullWidth
            name="capEx"
            value={marketData.capEx}
            onChange={handleChange}
          />
        </Grid2>
      </Grid2>

      <Grid2 className="mb-5" container spacing={2}>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Cap Rate and Market Valuation"
            variant="standard"
            fullWidth
            name="capRateAndMarketValuation"
            value={marketData.capRateAndMarketValuation}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Current Market Value"
            variant="standard"
            fullWidth
            name="currentMarketValue"
            value={marketData.currentMarketValue}
            onChange={handleChange}
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default DirectOwnership;
