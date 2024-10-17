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

export const RealEstate = ({ realEstateList }) => {
  return (
    <>
      {realEstateList?.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="transaction table">
              <TableHead>
                <TableRow>
                  <BostonTableHead sx={{ fontWeight: "bold" }}>
                    Asset Class
                  </BostonTableHead>
                  <BostonTableHead sx={{ fontWeight: "bold" }}>
                    Name
                  </BostonTableHead>
                  {/* <BostonTableHead sx={{ fontWeight: "bold" }} align="center">
                    Buy/Sell
                  </BostonTableHead> */}
                  <BostonTableHead sx={{ fontWeight: "bold" }} align="center">
                    Ownership
                  </BostonTableHead>
                  <BostonTableHead sx={{ fontWeight: "bold" }} align="center">
                    Yield
                  </BostonTableHead>
                  <BostonTableHead sx={{ fontWeight: "bold" }} align="center">
                    Investment Amount
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
                {realEstateList?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.assetClass}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="center">{row.ownership}</TableCell>
                    <TableCell align="center">{row.DividendYield}</TableCell>
                    <TableCell align="center">
                      ${row.InvestmentAmount?.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                  </TableRow>
                ))}
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
