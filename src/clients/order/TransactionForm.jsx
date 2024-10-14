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
  Grid2,
  FormLabel,
  InputAdornment,
} from "@mui/material";
import { BostonSearch } from "../../resusedComponents/BostonSearch";
import { investmentForm } from "./OrderConst";
import {
  assets,
  companies,
  markets,
} from "../../analysis/stockAnalysis/constants";
import { getPriceOfUnit, placeOrder } from "../../api/apiServiece";
import { BostonAlertMessage } from "../../resusedComponents/BostonAlertMessage";
import BostonLoader from "../../resusedComponents/BostonLoader";

const TransactionForm = ({ formData, setFormData }) => {
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });
  // const [selectedClient, setSelectedClient] = useState({});
  const [stockMarket, setStockMarket] = useState(markets);
  const [stockCompany, setStockCompany] = useState(companies);
  const [assetClasses, setAssetClasses] = useState(assets);
  const [selectedMarket, setSelectedMarket] = useState({});
  const [selectedAssetClass, setSelectedAssetClass] = useState({});
  const [selectedCompany, setSelectedCompany] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  const selectedClient = JSON?.parse?.(localStorage?.getItem?.("clients"));

  useEffect(() => {
    if (selectedCompany.ticker) showPriceOfUnit();
  }, [selectedCompany]);

  const showPriceOfUnit = async () => {
    setShowLoader(true);
    const payload = {
      ticker: selectedCompany.ticker,
    };
    const resp = await getPriceOfUnit(payload, "application/json");
    console.log("respresp", resp);
    if (resp.status === 200) {
      setShowLoader(false);
      setFormData({
        ...formData,
        pricePerUnit: resp.data.current_price,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "units" && value <= 0) {
      setFormData({
        ...formData,
        [name]: 0, // Set to 0 if a negative number is entered
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];
    const updatedFormData = {
      // ...formData,
      date: currentDate,
      transactionAmount: Number(formData.units) * Number(formData.pricePerUnit),
      name: selectedCompany.ticker,
      market: selectedMarket.label,
      assetClass: selectedMarket.label,
      buy_or_sell: formData.transactionType,
      unit_price: formData.pricePerUnit,
      units: formData.units,
      // price: Number(formData.units) * Number(formData.pricePerUnit),
    };
    console.log(selectedClient, updatedFormData, "formDataformData");
    const payload = {
      order_data: updatedFormData,
      client_name: selectedClient?.clientDetail?.clientName,
      client_id: selectedClient.uniqueId,
      funds: selectedClient.investmentAmount,
    };
    const resp = await placeOrder(payload, "application/json");
    if (resp.status === 200) {
      setAlertMsg({
        msg: "Order placed successfully",
        severity: "success",
      });
    }
    console.log("selectedClient", payload);
    setTimeout(() => {
      setFormData(investmentForm);
    }, 1000);
  };

  // Check if any required field is empty
  const isSubmitDisabled =
    // !selectedMarket?.label ||
    !selectedAssetClass?.label ||
    !selectedCompany?.ticker ||
    !formData?.transactionType ||
    !formData?.units ||
    !formData?.pricePerUnit;
  console.log("itemitem,", selectedAssetClass, selectedCompany);

  return (
    <>
      {showLoader && <BostonLoader />}
      <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
      {/* <BostonSearch
        label="Name Of Client"
        listArray={clientList}
        filterFields={["clientDetail.clientName", "uniqueId"]}
        setSelectedObj={setSelectedClient}
        primaryValue="clientDetail.clientName"
        secondary={"uniqueId"}
        secondaryName="ID"
        width={50}
      /> */}
      {/* {selectedClient?.uniqueId && ( */}
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2} alignItems="center">
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth margin="normal">
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
          </Grid2>
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth margin="normal">
              <BostonSearch
                label="Asset Class"
                listArray={assetClasses}
                filterFields={["label"]}
                setSelectedObj={setSelectedAssetClass}
                primaryValue="label"
                width={100}
              />
            </FormControl>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} alignItems="center">
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth margin="normal">
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
          </Grid2>
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 2 }}>
            <FormControl
              style={{ textAlign: "start" }}
              component="fieldset"
              margin="normal"
            >
              <FormLabel sx={{ textAlign: "start" }} id="buy-sell-label">
                Buy/Sell
              </FormLabel>
              <RadioGroup
                row
                name="transactionType"
                aria-labelledby="buy-sell-label"
                value={formData.transactionType}
                onChange={handleChange}
              >
                <FormControlLabel value="buy" control={<Radio />} label="Buy" />
                <FormControlLabel
                  value="sell"
                  control={<Radio />}
                  label="Sell"
                />
              </RadioGroup>
            </FormControl>
          </Grid2>

          <Grid2 item size={{ xs: 12, md: 2 }}>
            <TextField
              sx={{
                "& .Mui-disabled": {
                  WebkitTextFillColor: "black",
                },
              }}
              variant="standard"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                },
              }}
              label="Price Per Unit"
              name="pricePerUnit"
              value={formData.pricePerUnit}
              type="number"
              fullWidth
              margin="normal"
              disabled
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} alignItems="center">
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <TextField
              variant="standard"
              label="Units"
              name="units"
              value={formData.units}
              onChange={handleChange}
              type="number"
              fullWidth
              margin="normal"
            />
          </Grid2>
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <TextField
              sx={{
                "& .Mui-disabled": {
                  WebkitTextFillColor: "black",
                },
              }}
              variant="standard"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                },
              }}
              label="Transaction Amount"
              name="transactionAmount"
              value={Number(formData.units) * Number(formData.pricePerUnit)}
              type="number"
              fullWidth
              margin="normal"
              disabled
            />
          </Grid2>
        </Grid2>

        <Button
          className="mt-5 mb-5"
          sx={{ width: "auto" }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitDisabled} // Disable the button if any field is empty
        >
          Order
        </Button>
      </form>
      {/* )} */}
    </>
  );
};

export default TransactionForm;
