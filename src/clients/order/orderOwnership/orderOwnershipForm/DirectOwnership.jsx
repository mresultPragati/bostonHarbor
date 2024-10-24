import React, { useEffect, useState } from "react";
import { TextField, Grid2, Paper, Typography } from "@mui/material";

const DirectOwnership = ({ formData, setFormData }) => {
  const selectedClient = JSON?.parse?.(localStorage?.getItem?.("clients"));

  useEffect(() => {
    let operatingExpenses =
      Number(formData?.propertyManageFees) +
      Number(formData?.maintenanceRepairs) +
      Number(formData.propertyTaxes) +
      Number(formData?.insurance) +
      Number(formData?.utilities);

    let NOI;
    if (
      formData?.propertyManageFees &&
      formData?.maintenanceRepairs &&
      formData?.propertyManageFees &&
      formData?.insurance &&
      formData?.utilities
    )
      NOI =
        Number(selectedClient?.investmentAmount) - Number(operatingExpenses);
    else NOI = Number(selectedClient?.investmentAmount);

    let cap_Rate = (NOI / Number(formData?.currentMarketValue)) * 100;
    console.log("cap_Rate", cap_Rate, cap_Rate.isNaN);

    setFormData({
      ...formData,
      capRateValuation: cap_Rate.toFixed(2),
      // capRateValuation: cap_Rate.isNaN ? cap_Rate.toFixed(2) : 0,
    });
  }, [formData?.currentMarketValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Grid2 className="mb-4" container spacing={2}>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Name"
            variant="standard"
            fullWidth
            name="directOwnershipName"
            value={formData.directOwnershipName}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Vacancy Rate"
            variant="standard"
            fullWidth
            name="vacancyRate"
            value={formData.vacancyRate}
            onChange={handleChange}
          />
        </Grid2>
      </Grid2>

      <Grid2 className="mb-4" container spacing={2}>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Current Market Value"
            variant="standard"
            fullWidth
            name="currentMarketValue"
            value={formData.currentMarketValue}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Property management fees"
            variant="standard"
            name="propertyManageFees"
            value={formData.propertyManageFees}
            onChange={handleChange}
            fullWidth
          />
        </Grid2>
      </Grid2>

      <Grid2 className="mb-4" container spacing={2}>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Maintenance and repairs"
            variant="standard"
            name="maintenanceRepairs"
            value={formData.maintenanceRepairs}
            onChange={handleChange}
            fullWidth
          />
        </Grid2>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Property taxes"
            variant="standard"
            name="propertyTaxes"
            value={formData.propertyTaxes}
            onChange={handleChange}
            fullWidth
          />
        </Grid2>
      </Grid2>

      <Grid2 className="mb-4" container spacing={2}>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Insurance"
            variant="standard"
            name="insurance"
            value={formData.insurance}
            onChange={handleChange}
            fullWidth
          />
        </Grid2>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Utilities (if the landlord pays for them)"
            variant="standard"
            name="utilities"
            value={formData.utilities}
            onChange={handleChange}
            fullWidth
          />
        </Grid2>
      </Grid2>

      <Grid2 className="mb-4" container spacing={2}>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="CapEx (Capital Expenditures)"
            variant="standard"
            fullWidth
            name="capEx"
            value={formData.capEx}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="HOA fees (if applicable)"
            variant="standard"
            name="hoaFees"
            value={formData.hoaFees}
            onChange={handleChange}
            fullWidth
          />
        </Grid2>
      </Grid2>

      <Grid2 className="mb-4" container spacing={2}>
        <Grid2 item size={{ md: 1 }} />
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <TextField
            label="Cap Rate and Market Valuation"
            variant="standard"
            fullWidth
            name="capRateValuation"
            value={formData.capRateValuation}
            onChange={handleChange}
            sx={{
              "& .Mui-disabled": {
                WebkitTextFillColor: "black",
              },
            }}
            disabled
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default DirectOwnership;
