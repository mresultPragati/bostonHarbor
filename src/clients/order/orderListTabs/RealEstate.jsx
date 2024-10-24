import React, { useState } from "react";
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
import { calculateTotals } from "../../../resusedComponents/constant/ResusableConst";
import { BoldCell } from "../../portfolio/PortfolioStyled";
import { BostonPaginationElement } from "../../../resusedComponents/BostonPaginationElement";

export const RealEstate = ({ realEstateList }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <>
      {realEstateList?.length > 0 && (
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
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.assetClass}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="center">{row.ownership}</TableCell>
                    <TableCell align="center">{row.DividendYield}</TableCell>
                    <TableCell align="center">
                      ${row.clientAmount?.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <BoldCell colSpan={4}>Total</BoldCell>

                  <BoldCell align="center">
                    {calculateTotals("DividendYield", realEstateList)}
                  </BoldCell>
                  <BoldCell align="center">
                    {calculateTotals("clientAmount", realEstateList)}
                  </BoldCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      {realEstateList?.length === 0 && (
        <div className="mt-5 row">
          <h4 style={{ fontWeight: 300 }}>No Data Found!!!</h4>
        </div>
      )}

      {realEstateList?.length > 0 && (
        <BostonPaginationElement
          count={realEstateList?.length}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};
