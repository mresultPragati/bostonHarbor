import React, { useState } from "react";
import { TextField, Grid2, Paper, Typography } from "@mui/material";

const DirectOwnership = ({ formData, setFormData }) => {
  // const [formData, setFormData] = useState({});

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Grid2 className="mb-4 mt-4" container spacing={2}>
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
          />
        </Grid2>
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
      </Grid2>

      <Grid2 className="mb-4" container spacing={2}>
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
      </Grid2>

      <Grid2 className="mb-4" container spacing={2}>
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
      </Grid2>

      <Grid2 className="mb-4" container spacing={2}>
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
    </>
  );
};

export default DirectOwnership;
