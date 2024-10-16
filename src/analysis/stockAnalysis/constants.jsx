import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextareaAutosize,
} from "@mui/material";

export const CompanyDetails = (companyInfo, selectedCompany) => {
  return (
    <>
      {companyInfo?.Company && Object.keys(companyInfo).length > 0 && (
        <>
          <h3 className="mb-4" style={{ textAlign: "start" }}>
            {companyInfo?.Company}'s Information:
          </h3>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ width: "5rem" }}>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Company Details</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%", textAlign: "center" }}>
                    <strong>Values</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Company Description</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyInfo?.Company_Details}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Market Cap</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyInfo?.Market_Cap?.toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>P/E Ratio</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyInfo?.PE_Ratio}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Earnings Per Share (EPS)</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyInfo?.EPS}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong> Book Value</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyInfo?.Book_Value}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Return On Equity (ROE)</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyInfo?.ROE}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Return On Capital Employed (ROCE)</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyInfo?.ROCE}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Earnings Growth</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyInfo?.Earnings_Growth}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Revenue Growth</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyInfo?.Revenue_Growth}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Previous Closing Price</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyInfo?.Previous_Closing_Price}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Sector</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyInfo?.Sector}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Dividends</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyInfo?.Today_Dividends}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's High Price</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyInfo?.Today_High_Price}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Low Price</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyInfo?.Today_Low_Price}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Opening Price</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyInfo?.Today_Opening_Price}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Stock Splits</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyInfo?.Today_Stock_Splits}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Volume</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyInfo?.Today_Volume?.toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Closing Price</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyInfo?.Todays_Closing_Price}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};

export const ownershipType = {
  direct: "direct",
  reit: "reit",
  commercial: "commercial",
  crowdfund: "crowdfund",
};

export const country = [
  { label: "India" },
  { label: "US" },
  { label: "UK" },
  { label: "Japan" },
];

export const markets = [
  { label: "Dow Jones" },
  { label: "NASDAQ" },
  { label: "S&P 500" },
];

export const ownership = [
  { label: "Direct", type: ownershipType?.direct },
  { label: "REIT/Fund", type: ownershipType?.reit },
  {
    label: "Commercial Real Estate (Triple Net Lease)",
    type: ownershipType?.commercial,
  },
  {
    label: "Crowdfunded Real Estate Investments",
    type: ownershipType?.crowdfund,
  },
];

export const reitList = [
  { label: "Regency Centers Corporation", ticker: "REG" },
  { label: "Kimco Realty Corporation", ticker: "KIM" },
  { label: "Federal Realty Investment Trust", ticker: "FRT" },
  { label: "Federal Realty Investment Trust", ticker: "FRT-PC" },
];

export const commercialList = [
  { label: "Prologis", ticker: "PLD" },
  { label: "Simon Property Group", ticker: "SPG" },
  { label: "Equinix", ticker: "EQIX" },
  { label: "Vornado Realty Trust", ticker: "VNO" },
];

export const crowdfundedList = [
  { label: "Equity Residential", ticker: "EQR" },
  // { label: "Simon Property Group", ticker: "SPG" },
  // { label: "Equinix", ticker: "EQIX" },
  // { label: "Vornado Realty Trust", ticker: "VNO" },
];

export const directList = [
  { label: "Direct", ticker: "DR" },
  // { label: "Simon Property Group", ticker: "SPG" },
  // { label: "Equinix", ticker: "EQIX" },
  // { label: "Vornado Realty Trust", ticker: "VNO" },
];

export const assets = [
  { label: "Stocks", isChangeUI: false },
  { label: "Bonds", isChangeUI: false },
  { label: "Real Estate", isChangeUI: true },
  { label: "Commodities", isChangeUI: false },
  { label: "Mutual Funds", isChangeUI: false },
  { label: "ETFS", isChangeUI: false },
];

export const companies = [
  { label: "Tesla", ticker: "TSLA" },
  { label: "NVIDIA Corporation", ticker: "NVDA" },
  { label: "Apple", ticker: "AAPL" },
];
