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
      {Object.keys(companyInfo).length > 0 && (
        <>
          <h3 className="mb-4" style={{ textAlign: "start" }}>
            {selectedCompany?.label}'s Information:
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

export const companies = [
  { label: "Tesla", ticker: "TSLA" },
  { label: "NVIDIA Corporation", ticker: "NVDA" },
  { label: "Apple", ticker: "AAPL" },
];
