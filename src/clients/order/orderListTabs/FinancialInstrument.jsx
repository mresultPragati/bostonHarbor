import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { BostonTableHead } from "../OrderStyled";
import { BoldCell } from "../../portfolio/PortfolioStyled";
import { calculateTotals } from "../../../resusedComponents/constant/ResusableConst";

export const FinancialInstrument = ({ investmentList }) => {
  return (
    <>
      {investmentList?.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="transaction table">
              <TableHead>
                <TableRow>
                  <BostonTableHead sx={{ fontWeight: "bold" }}>
                    Sr. No.
                  </BostonTableHead>
                  <BostonTableHead sx={{ fontWeight: "bold" }}>
                    Asset Class
                  </BostonTableHead>
                  <BostonTableHead sx={{ fontWeight: "bold" }}>
                    Name
                  </BostonTableHead>
                  <BostonTableHead sx={{ fontWeight: "bold" }} align="center">
                    Buy/Sell
                  </BostonTableHead>
                  <BostonTableHead sx={{ fontWeight: "bold" }} align="center">
                    Units
                  </BostonTableHead>
                  <BostonTableHead sx={{ fontWeight: "bold" }} align="center">
                    Price per Unit
                  </BostonTableHead>
                  <BostonTableHead sx={{ fontWeight: "bold" }} align="center">
                    Transaction Amount
                  </BostonTableHead>
                  <BostonTableHead sx={{ fontWeight: "bold" }} align="center">
                    Date
                  </BostonTableHead>
                  {/* <BostonTableHead sx={{ fontWeight: "bold" }} align="center">
                    Actions
                  </BostonTableHead> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {investmentList?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.assetClass}</TableCell>
                    <TableCell>{row.Name}</TableCell>
                    <TableCell align="center">{row.Action}</TableCell>
                    <TableCell align="center">{row.Units}</TableCell>
                    <TableCell align="center">
                      ${row.UnitPrice?.toFixed(2)}{" "}
                    </TableCell>
                    <TableCell align="center">
                      ${row.clientAmount?.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <BoldCell colSpan={4}>Total</BoldCell>

                  <BoldCell align="center">
                    {calculateTotals("Units", investmentList)}
                  </BoldCell>
                  <BoldCell align="center">
                    {calculateTotals("UnitPrice", investmentList)}
                  </BoldCell>
                  <BoldCell align="center">
                    {calculateTotals("clientAmount", investmentList)}
                  </BoldCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <div className="mt-5 row">
          <h4 style={{ fontWeight: 300 }}>No Data Found!!!</h4>
        </div>
      )}
    </>
  );
};
