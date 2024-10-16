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
  commercialList,
  companies,
  crowdfundedList,
  directList,
  markets,
  ownership,
  ownershipType,
  reitList,
} from "../../analysis/stockAnalysis/constants";
import {
  getDividendYield,
  getPriceOfUnit,
  placeOrder,
} from "../../api/apiServiece";
import { BostonAlertMessage } from "../../resusedComponents/BostonAlertMessage";
import BostonLoader from "../../resusedComponents/BostonLoader";
import { OwnershipOrder } from "./orderOwnership/OwnershipOrder";

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
        setNameSearch("");
        setOwnershipSearch("");
        setMarketSearch("");
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
    if (selectedCompany?.ticker) getValueOfTicker();
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
    const currentDate = new Date();
    // Format the date and time
    const formattedDateTime = currentDate.toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // 12-hour clock (true), 24-hour clock (false)
    });

    const updatedFormData = {
      date: formattedDateTime,
      transactionAmount: Number(formData.units) * Number(formData.pricePerUnit),
      name: selectedCompany?.label,
      symbol: selectedCompany?.ticker,
      market: selectedMarket.label,
      assetClass: selectedAssetClass.label,
      buy_or_sell: formData.transactionType,
      unit_price: formData.pricePerUnit,
      units: Number(formData.units),
    };
    console.log(selectedClient, updatedFormData, "formDataformData");
    var payload;
    if (!selectedAssetClass?.isChangeUI) {
      payload = {
        order_data: updatedFormData,
        client_name: selectedClient?.clientDetail?.clientName,
        client_id: selectedClient.uniqueId,
        funds: selectedClient.investmentAmount,
      };
    } else {
      payload = {
        order_data: {
          ownership: selectedOwnership?.label,
          assetClass: selectedAssetClass.label,
          date: formattedDateTime,
          name: selectedCompany?.label,
          investmentAmount: Number(formData?.investmentAmount),
          dividendYield: formData?.dividendYield,
        },
        client_name: selectedClient?.clientDetail?.clientName,
        client_id: selectedClient.uniqueId,
        // AssetClass: selectedAssetClass.label,
        // ownership: selectedOwnership?.label,
        // Date: formattedDateTime,
        // Name: selectedCompany?.label,
        // InvestmentAmount: Number(formData?.investmentAmount),
        // DividendYield: formData?.dividendYield,
      };
    }
    const resp = await placeOrder(payload, "application/json");
    if (resp.status === 200) {
      setAlertMsg({
        msg: "Order placed successfully",
        severity: "success",
      });
      getInvestmentList();
      setTimeout(() => {
        setFormData(investmentForm);
        setSelectedCompany({});
        setSelectedMarket({});
        setSelectedAssetClass({});
        setSelectedOwnership({});
        setSelectedAssetClass({});
        setNameSearch("");
        setOwnershipSearch("");
        setMarketSearch("");
        setAssetSearch("");
      }, 1000);
    }
  };
  console.log("selectedAssetClass?.isChangeUI", selectedAssetClass?.isChangeUI);

  const isSubmitDisabled = () => {
    switch (selectedOwnership?.type) {
      case ownershipType?.reit:
        return (
          !formData.investmentAmount ||
          !selectedAssetClass?.label ||
          !selectedOwnership?.label ||
          !selectedCompany?.label
        );

      case ownershipType?.commercial:
        return (
          !formData.investmentAmount ||
          !selectedAssetClass?.label ||
          !selectedOwnership?.label ||
          !selectedCompany?.label
        );

      default:
        return (
          // !selectedMarket?.label ||
          !selectedAssetClass?.label ||
          !selectedCompany?.label ||
          !formData?.transactionType ||
          !formData?.units
          // || !formData?.pricePerUnit
        );
    }

    // if (selectedAssetClass?.isChangeUI) {
    //   // return false;
    // } else
    //   return (
    //     // !selectedMarket?.label ||
    //     !selectedAssetClass?.label ||
    //     !selectedCompany?.label ||
    //     !formData?.transactionType ||
    //     !formData?.units ||
    //     !formData?.pricePerUnit
    //   );
    // console.log("itemitem,", selectedAssetClass, selectedCompany);
  };

  return (
    <>
      {/* {showLoader && <BostonLoader />} */}
      <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />

      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2} alignItems="center">
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth margin="normal">
              <BostonSearch
                searchTerm={assetSearch}
                setSearchTerm={setAssetSearch}
                label="Asset Class"
                listArray={assetClasses}
                filterFields={["label"]}
                setSelectedObj={setSelectedAssetClass}
                primaryValue="label"
                width={100}
              />
            </FormControl>
          </Grid2>
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            {selectedAssetClass?.isChangeUI ? (
              <>
                <FormControl fullWidth margin="normal">
                  <BostonSearch
                    searchTerm={ownershipSearch}
                    setSearchTerm={setOwnershipSearch}
                    label="Ownership"
                    listArray={ownership}
                    filterFields={["label"]}
                    setSelectedObj={setSelectedOwnership}
                    primaryValue="label"
                    secondaryName="Ticker"
                    width={100}
                  />
                </FormControl>
              </>
            ) : (
              <FormControl fullWidth margin="normal">
                <BostonSearch
                  searchTerm={marketSearch}
                  setSearchTerm={setMarketSearch}
                  label="Market"
                  listArray={stockMarket}
                  filterFields={["label"]}
                  setSelectedObj={setSelectedMarket}
                  primaryValue="label"
                  width={100}
                />
              </FormControl>
            )}
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} alignItems="center">
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth margin="normal">
              <BostonSearch
                searchTerm={nameSearch}
                setSearchTerm={setNameSearch}
                label="Name"
                listArray={
                  selectedOwnership?.type === ownershipType?.reit
                    ? reitList
                    : selectedOwnership?.type === ownershipType?.commercial
                    ? commercialList
                    : selectedOwnership?.type === ownershipType?.crowdfund
                    ? crowdfundedList
                    : selectedOwnership?.type === ownershipType?.direct
                    ? directList
                    : !selectedAssetClass?.isChangeUI
                    ? stockCompany
                    : []
                }
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
                ).toFixed(2)}
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

        <Button
          className="mt-5 mb-5"
          sx={{ width: "auto" }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          // disabled={false}
          disabled={isSubmitDisabled()} // Disable the button if any field is empty
        >
          Order
        </Button>
      </form>
      {/* )} */}
    </>
  );
};

export default TransactionForm;
