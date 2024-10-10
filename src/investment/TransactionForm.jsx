import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
  FormLabel,
} from "@mui/material";
import { BostonSearch } from "../resusedComponents/BostonSearch";
import { investmentForm } from "./InvestmentConst";
import { markets } from "../analysis/stockAnalysis/constants";

const TransactionForm = ({ setInvestmentList, formData, setFormData }) => {
  // const [formData, setFormData] = useState({
  //   assetClass: "",
  //   name: "",
  //   transactionType: "buy", // Default to Buy
  //   unit: "",
  //   transactionAmount: "",
  // });
  const [selectedClient, setSelectedClient] = useState({});

  const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD
    const updatedFormData = [{ ...formData, date: currentDate }];
    console.log(updatedFormData, "formDataformData");

    setInvestmentList(updatedFormData);
    setFormData(investmentForm);
  };
  console.log("selectedClient", selectedClient);

  return (
    <>
      <BostonSearch
        label="Name Of Client"
        listArray={clientList}
        filterFields={["clientDetail.clientName", "uniqueId"]}
        setSelectedObj={setSelectedClient}
        primaryValue="clientDetail.clientName"
        secondary={"uniqueId"}
        secondaryName="ID"
        width={50}
      />
      {selectedClient?.uniqueId && (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Market</InputLabel>
                <Select
                  variant="standard"
                  name="market"
                  value={formData.market}
                  onChange={handleChange}
                  label="Market"
                >
                  {markets?.map((item, index) => {
                    return (
                      <MenuItem key={index} value="apple">
                        {item.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Asset Class</InputLabel>
                <Select
                  variant="standard"
                  name="assetClass"
                  value={formData.assetClass}
                  onChange={handleChange}
                  label="Asset Class"
                >
                  <MenuItem value="stocks">Stocks</MenuItem>
                  <MenuItem value="bonds">Bonds</MenuItem>
                  <MenuItem value="real-estate">Real Estate</MenuItem>
                  <MenuItem value="commodities">Commodities</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Name</InputLabel>
                <Select
                  variant="standard"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  label="Name"
                >
                  <MenuItem value="apple">Apple</MenuItem>
                  <MenuItem value="google">Google</MenuItem>
                  <MenuItem value="tesla">Tesla</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={{ display: "flex" }}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel
                    sx={{ textAlign: "start" }}
                    id="demo-row-radio-buttons-group-label"
                  >
                    Buy/Sell
                  </FormLabel>
                  <RadioGroup
                    row
                    name="transactionType"
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    value={formData.transactionType}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="buy"
                      control={<Radio />}
                      label="Buy"
                    />
                    <FormControlLabel
                      value="sell"
                      control={<Radio />}
                      label="Sell"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                variant="standard"
                label="Unit"
                name="units"
                value={formData.units}
                onChange={handleChange}
                type="number"
                fullWidth
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                variant="standard"
                label="Transaction Amount"
                name="transactionAmount"
                value={formData.transactionAmount}
                onChange={handleChange}
                type="number"
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
          <Button
            className="mt-5 mb-5"
            sx={{ width: "auto" }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Invest
          </Button>
        </form>
      )}
    </>
  );
};

export default TransactionForm;
