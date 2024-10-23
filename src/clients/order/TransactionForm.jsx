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
  ListItemText,
} from "@mui/material";
import { BostonSearch } from "../../resusedComponents/BostonSearch";
import { investmentForm, isSubmitDisabled, resetOrderForm } from "./OrderConst";
import {
  assets,
  commercialList,
  commodities,
  stocks,
  crowdfundedList,
  crypto,
  directList,
  markets,
  mutualFunds,
  ownership,
  ownershipType,
  reitList,
  bonds,
} from "../../analysis/stockAnalysis/constants";
import {
  getDividendYield,
  getPriceOfUnit,
  placeOrder,
} from "../../api/apiServiece";
import { BostonAlertMessage } from "../../resusedComponents/BostonAlertMessage";
import BostonLoader from "../../resusedComponents/BostonLoader";
import { OwnershipOrder } from "./orderOwnership/OwnershipOrder";
import { getUSTime } from "../../resusedComponents/constant/ResusableConst";
import BostonAutocomplete from "../../resusedComponents/BostonAutocomplete";
import { StyledListItem } from "./OrderStyled";

const TransactionForm = (props) => {
  const {
    formData,
    selectedCompany,
    selectedAssetClass,
    showLoader,
    alertMsg,
    setAlertMsg,
    stockMarket,
    setSelectedMarket,
    assetClasses,
    setSelectedAssetClass,
    stockCompany,
    setSelectedCompany,
    selectedMarket,
    setFormData,
    selectedClient,
    setShowLoader,
    getInvestmentList,
    setSelectedOwnership,
    selectedOwnership,
  } = props;

  const [assetSearch, setAssetSearch] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [ownershipSearch, setOwnershipSearch] = useState("");
  const [marketSearch, setMarketSearch] = useState("");

  useEffect(() => {
    if (assetSearch) {
      setTimeout(() => {
        setFormData(investmentForm);
        // setSelectedCompany({});
        // setSelectedMarket({});
        // setSelectedAssetClass({});
        // setNameSearch("");
        // setOwnershipSearch("");
        // setMarketSearch("");
      }, 500);
      // return;
    }
  }, [assetSearch]);

  useEffect(() => {
    if (ownershipSearch) {
      setTimeout(() => {
        setFormData({ ...formData, dividendYield: 0 });
        // setSelectedCompany({});
        // setSelectedMarket({});
        // setSelectedAssetClass({});
        setNameSearch("");
        // setAssetSearch("");
        // setMarketSearch("");
      }, 500);
      // return;
    }
  }, [ownershipSearch]);

  useEffect(() => {
    if (
      selectedCompany?.ticker &&
      selectedOwnership?.type !== ownershipType.direct
    )
      getValueOfTicker();
  }, [selectedCompany]);

  const getValueOfTicker = async () => {
    setShowLoader(true);
    const payload = {
      ticker: selectedCompany?.ticker,
    };
    if (!selectedAssetClass?.isChangeUI) {
      const resp = await getPriceOfUnit(payload, "application/json");
      console.log("respresp", resp);
      if (resp.status === 200) {
        setShowLoader(false);
        setFormData({
          ...formData,
          pricePerUnit: resp.data.current_price,
        });
      }
    } else {
      const resp = await getDividendYield(payload, "application/json");
      console.log("respresp", resp);
      if (resp.status === 200) {
        setShowLoader(false);
        setFormData({
          ...formData,
          dividendYield: resp?.data?.dividend_yield_percent,
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "units" && value < 0) {
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

    const updatedFormData = {
      date: getUSTime(),
      transactionAmount: Number(formData.units) * Number(formData.pricePerUnit),
      name: selectedCompany?.label,
      symbol: selectedCompany?.ticker,
      market: selectedMarket?.label,
      assetClass: selectedAssetClass.label,
      buy_or_sell: formData.transactionType,
      unit_price: formData.pricePerUnit,
      units: Number(formData.units),
    };

    var payload;
    var order_data;
    if (selectedOwnership?.type === ownershipType.direct) {
      // order_data = {
      payload = {
        order_data: {
          ownership: selectedOwnership?.label,
          assetClass: selectedAssetClass.label,
          vacancy_rate: formData.vacancyRate,
          capex: formData.capEx,
          cap_rate: formData.capRateValuation,
          market_value: formData.currentMarketValue,
          property_management_fees: formData.propertyManageFees,
          maintenance_repairs: formData.maintenanceRepairs,
          property_taxes: formData.propertyTaxes,
          insurance: formData.insurance,
          utilities: formData.utilities,
          hoa_fees: formData.hoaFees,
          date: getUSTime(),
        },
        client_name: selectedClient?.clientDetail?.clientName,
        client_id: selectedClient.uniqueId,
        funds: selectedClient.investmentAmount,
      };
    } else if (
      !selectedAssetClass?.isChangeUI &&
      selectedOwnership?.type !== ownershipType.direct
    ) {
      // order_data = updatedFormData;
      payload = {
        order_data: updatedFormData,
        client_name: selectedClient?.clientDetail?.clientName,
        client_id: selectedClient.uniqueId,
        funds: selectedClient.investmentAmount,
      };
    } else {
      // order_data = {
      payload = {
        order_data: {
          ownership: selectedOwnership?.label,
          assetClass: selectedAssetClass.label,
          date: getUSTime(),
          name: selectedCompany?.label,
          investmentAmount: Number(formData?.investmentAmount),
          dividendYield: formData?.dividendYield,
        },
        client_name: selectedClient?.clientDetail?.clientName,
        funds: selectedClient.investmentAmount,
        client_id: selectedClient.uniqueId,
      };
    }

    // payload = {
    //   order_data,
    //   client_name: selectedClient?.clientDetail?.clientName,
    //   funds: selectedClient.investmentAmount,
    //   client_id: selectedClient.uniqueId,
    // };
    const resp = await placeOrder(payload, "application/json");
    if (resp.status === 200) {
      setAlertMsg({
        msg: "Order placed successfully",
        severity: "success",
      });
      getInvestmentList();
      setTimeout(() => {
        resetOrderForm(
          setFormData,
          setSelectedCompany,
          setSelectedMarket,
          setSelectedAssetClass,
          setSelectedOwnership,
          setNameSearch,
          setOwnershipSearch,
          setMarketSearch,
          setAssetSearch
        );
      }, 1000);
    }
  };

  return (
    <>
      {/* {showLoader && <BostonLoader />} */}
      <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />

      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth margin="normal">
              <BostonAutocomplete
                value={assetSearch}
                options={assetClasses}
                getOptionLabel={(option) => option.label || ""}
                onChange={(event, value) => {
                  // handleAutocompleteChange(event, value, "assetClass");
                  setSelectedAssetClass(value);
                  setAssetSearch(value);
                  // setMarketSearch("");
                  // setNameSearch("");
                  // setOwnershipSearch("");
                  resetOrderForm(
                    setFormData,
                    setSelectedCompany,
                    setSelectedMarket,
                    setSelectedAssetClass,
                    setSelectedOwnership,
                    setNameSearch,
                    setOwnershipSearch,
                    setMarketSearch,
                    setAssetSearch,
                    false
                  );
                }}
                label="Asset Class"
                required
                renderOption={(props, option) => (
                  <StyledListItem {...props}>
                    <ListItemText primary={option.label} />
                  </StyledListItem>
                )}
              />
            </FormControl>
          </Grid2>
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            {selectedAssetClass?.isChangeUI ? (
              <>
                <BostonAutocomplete
                  value={ownershipSearch}
                  options={ownership}
                  getOptionLabel={(option) => option.label || ""}
                  onChange={(event, value) => {
                    // handleAutocompleteChange(event, value, "ownership");
                    setSelectedOwnership(value);
                    setOwnershipSearch(value);
                    setNameSearch("");
                  }}
                  label="Ownership"
                  required
                  renderOption={(props, option) => (
                    <StyledListItem {...props}>
                      <ListItemText primary={option.label} />
                    </StyledListItem>
                  )}
                />
              </>
            ) : (
              selectedAssetClass?.label !== "Cryptocurrency" && (
                <BostonAutocomplete
                  value={marketSearch}
                  options={stockMarket}
                  getOptionLabel={(option) => option.label || ""}
                  onChange={(event, value) => {
                    // handleAutocompleteChange(event, value, "market");
                    setSelectedMarket(value);
                    setMarketSearch(value);
                    setNameSearch("");
                  }}
                  label="Market"
                  // required
                  renderOption={(props, option) => (
                    <StyledListItem {...props}>
                      <ListItemText primary={option.label} />
                    </StyledListItem>
                  )}
                />
              )
            )}
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            {selectedOwnership?.type !== ownershipType?.direct && (
              <BostonAutocomplete
                options={
                  selectedOwnership?.type === ownershipType?.reit
                    ? reitList
                    : selectedOwnership?.type === ownershipType?.commercial
                    ? commercialList
                    : selectedOwnership?.type === ownershipType?.crowdfund
                    ? crowdfundedList
                    : selectedOwnership?.type === ownershipType?.direct
                    ? directList
                    : selectedAssetClass?.label === "Cryptocurrency"
                    ? crypto
                    : selectedAssetClass?.label === "Commodities"
                    ? commodities
                    : selectedAssetClass?.label === "Mutual Funds"
                    ? mutualFunds
                    : selectedAssetClass?.label === "Bonds"
                    ? bonds
                    : selectedAssetClass?.label === "Stocks"
                    ? stockCompany
                    : []
                }
                value={nameSearch}
                getOptionLabel={(option) => option.label || ""}
                onChange={(event, value) => {
                  // handleAutocompleteChange(event, value, "name");
                  setSelectedCompany(value);
                  setNameSearch(value);
                }}
                label="Name"
                required
                renderOption={(props, option) => (
                  <StyledListItem {...props}>
                    <ListItemText
                      primary={option?.label}
                      secondary={`Ticker: ${option.ticker}`}
                    />
                  </StyledListItem>
                )}
              />
            )}
          </Grid2>

          <Grid2 item size={{ md: 1 }} />
          {!selectedAssetClass?.isChangeUI && (
            <>
              <Grid2
                item
                size={{ xs: 12, md: 2 }}
                style={{ textAlign: "start" }}
              >
                <FormControl component="fieldset" margin="normal">
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
                  value={formData.pricePerUnit?.toFixed(2)}
                  type="number"
                  fullWidth
                  margin="normal"
                  disabled
                />
              </Grid2>
            </>
          )}
        </Grid2>

        {!selectedAssetClass?.isChangeUI && (
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
                value={(
                  Number(formData.units) * Number(formData.pricePerUnit)
                )?.toFixed(2)}
                type="number"
                fullWidth
                margin="normal"
                disabled
              />
            </Grid2>
          </Grid2>
        )}

        {selectedAssetClass?.isChangeUI && (
          <>
            <OwnershipOrder
              selectedOwnership={selectedOwnership}
              formData={formData}
              setFormData={setFormData}
            />
          </>
        )}
        <div className="mt-5 mb-5" style={{ marginTop: "3rem" }}>
          <Button
            sx={{ width: "auto" }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitDisabled(
              selectedOwnership,
              ownershipType,
              formData,
              selectedAssetClass,
              selectedCompany
            )}
          >
            Order
          </Button>
        </div>
      </form>
      {/* )} */}
    </>
  );
};

export default TransactionForm;
