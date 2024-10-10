import React, { useEffect, useState } from "react";
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
import {
  assets,
  companies,
  markets,
} from "../analysis/stockAnalysis/constants";
import { getPriceOfUnit, placeOrder } from "../api/apiServiece";
import { BostonAlertMessage } from "../resusedComponents/BostonAlertMessage";

const TransactionForm = ({ formData, setFormData }) => {
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });
  const [selectedClient, setSelectedClient] = useState({});
  const [stockMarket, setStockMarket] = useState(markets);
  const [stockCompany, setStockCompany] = useState(companies);
  const [assetClasses, setAssetClasses] = useState(assets);
  const [selectedMarket, setSelectedMarket] = useState({});
  const [selectedAssetClass, setSelectedAssetClass] = useState({});
  const [selectedCompany, setSelectedCompany] = useState({});

  const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));

  useEffect(() => {}, [selectedCompany]);

  const showPriceOfUnit = async () => {
    const payload = {
      ticker: selectedCompany.ticker,
    };
    const resp = await getPriceOfUnit(payload, "application/json");
    if (resp.status === 200) {
      setFormData({
        ...formData,
        pricePerUnit: resp.current_stock_price,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD
    const updatedFormData = {
      ...formData,
      date: currentDate,
      transactionAmount: Number(formData.units) * Number(formData.pricePerUnit),
      name: selectedCompany.ticker,
      market: selectedMarket.label,
    };
    console.log(updatedFormData, "formDataformData");
    const payload = {
      order_data: updatedFormData,
      client_name: selectedClient.clientDetail.clientName,
      client_id: selectedClient.uniqueId,
      funds: selectedClient.investmentAmount,
    };
    const resp = await placeOrder(payload, "application/json");
    if (resp.status === 200) {
      setAlertMsg({
        msg: "Order place successfully",
        severity: "success",
      });
    }
    console.log("selectedClient", payload);
    setTimeout(() => {
      setFormData(investmentForm);
    }, 1000);
  };

  return (
    <>
      <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
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
            <Grid item md={1} />
            <Grid item xs={12} md={4}>
              <FormControl fullWidth margin="normal">
                {/* <InputLabel>Market</InputLabel>
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
                </Select> */}
                <BostonSearch
                  label="Market"
                  listArray={stockMarket}
                  filterFields={["label"]}
                  setSelectedObj={setSelectedMarket}
                  primaryValue="label"
                  secondaryName="Ticker"
                  width={100}
                />
              </FormControl>
            </Grid>
            <Grid item md={1} />
            <Grid item xs={12} md={4}>
              <FormControl fullWidth margin="normal">
                {/* <InputLabel>Asset Class</InputLabel>
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
                </Select> */}
                <BostonSearch
                  label="Asset Class"
                  listArray={assetClasses}
                  filterFields={["label"]}
                  setSelectedObj={setSelectedAssetClass}
                  primaryValue="label"
                  width={100}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center">
            <Grid item md={1} />
            <Grid item xs={12} md={4}>
              <FormControl fullWidth margin="normal">
                {/* <InputLabel>Name</InputLabel>
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
                </Select> */}
                <BostonSearch
                  label="Name"
                  listArray={stockCompany}
                  filterFields={["label", "ticker"]}
                  setSelectedObj={setSelectedCompany}
                  primaryValue="label"
                  secondary={"ticker"}
                  secondaryName="Ticker"
                  width={100}
                />
              </FormControl>
            </Grid>
            <Grid item md={1} />
            <Grid item xs={12} md={2}>
              <div style={{ display: "flex" }}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel
                    sx={{ textAlign: "start" }}
                    id="demo-row-radio-buttons-group-label"
                  >
                    Buy/Sale
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
                      label="Sale"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>

            <Grid item xs={12} md={2}>
              <TextField
                variant="standard"
                label="Price Per Unit"
                name="pricePerUnit"
                value={formData.pricePerUnit}
                // onChange={handleChange}
                type="number"
                fullWidth
                margin="normal"
                disabled
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center">
            <Grid item md={1} />
            <Grid item xs={12} md={4}>
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
            <Grid item md={1} />
            <Grid item xs={12} md={4}>
              <TextField
                variant="standard"
                label="Transaction Amount"
                name="transactionAmount"
                value={Number(formData.units) * Number(formData.pricePerUnit)}
                // value={formData.transactionAmount}
                // onChange={handleChange}
                type="number"
                fullWidth
                margin="normal"
                disabled
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
            Order
          </Button>
        </form>
      )}
    </>
  );
};

export default TransactionForm;
