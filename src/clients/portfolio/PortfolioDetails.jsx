import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import PortfolioOverview from "./PortfolioOverview";

// Custom styles
const BoldCell = styled(TableCell)({
  fontWeight: "bold",
});

const CurrencyCell = styled(TableCell)(({ theme }) => ({
  color: (props) =>
    props.isNegative ? theme.palette.error.main : theme.palette.success.main,
}));

const data = [
  {
    assetClass: "Stocks",
    name: "Tesla",
    description: "Raymond James Bank",
    symbol: "06367TW63",
    quantity: "159",
    delayedPrice: "$1.00",
    currentValue: "$159",
    dailyPriceChange: "$0.00",
    dailyValueChange: "$0.00",
    amountInvested: "$0.48",
    amountInvestedTotal: "$1736",
    gainOrLossPercent: "55.82%",
    gainOrLossValue: "$9,695",
    timeHeld: "2 Days",
    estimatedIncome: "$750",
  },
  {
    assetClass: "Bonds",
    name: "Apple",
    description: "CABOT MICROELECTRONICS CORPORATION",
    symbol: "CCMP",
    quantity: "200.000",
    delayedPrice: "$106.49",
    currentValue: "$21,298.00",
    dailyPriceChange: "-$1.06",
    dailyValueChange: "-$212.00",
    amountInvested: "$63.39",
    amountInvestedTotal: "$12,677.00",
    gainOrLossPercent: "68.01%",
    gainOrLossValue: "$8,621.00",
    timeHeld: "2 Days",
    estimatedIncome: "$160.00",
  },
  // Add more rows as needed
];
export const PortfolioDetails = () => {
  const [portfolioList, setPortfolioList] = useState(data);

  return (
    <>
      <PortfolioOverview />

      <Typography variant="h4" sx={{ textAlign: "center", margin: "2rem 0" }}>
        Portfolio Details
      </Typography>
      <div className="d-flex justify-content-end mb-4">
        <Button variant="contained"> Portfolio Analysis</Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <BoldCell>Sr. No.</BoldCell>
              <BoldCell>Asset Class</BoldCell>
              <BoldCell>Name</BoldCell>
              <BoldCell>Symbol</BoldCell>
              <BoldCell>Quantity</BoldCell>
              <BoldCell>Delayed Price</BoldCell>
              <BoldCell>Current Value</BoldCell>
              <BoldCell>Daily Price Change</BoldCell>
              <BoldCell>Daily Value Change</BoldCell>
              <BoldCell>Amount Invested / Unit</BoldCell>
              <BoldCell>Amount Invested </BoldCell>
              <BoldCell>Investment Gain or (Loss) %</BoldCell>
              <BoldCell>Investment Gain or (Loss) $</BoldCell>
              {/* <BoldCell>Estimated Annual Income</BoldCell> */}
              <BoldCell>Time Held</BoldCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {portfolioList.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.assetClass}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.symbol}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.delayedPrice}</TableCell>
                <TableCell>{row.currentValue}</TableCell>
                <CurrencyCell isNegative={row.dailyPriceChange.startsWith("-")}>
                  {row.dailyPriceChange}
                </CurrencyCell>
                <CurrencyCell isNegative={row.dailyValueChange.startsWith("-")}>
                  {row.dailyValueChange}
                </CurrencyCell>
                <TableCell>{row.amountInvested}</TableCell>
                <TableCell>{row.amountInvestedTotal}</TableCell>
                <TableCell>{row.gainOrLossPercent}</TableCell>
                <TableCell>{row.gainOrLossValue}</TableCell>
                {/* <TableCell>{row.estimatedIncome}</TableCell> */}
                <TableCell>{row.timeHeld}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PortfolioDetails;
