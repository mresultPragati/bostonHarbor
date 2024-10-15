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
import { BostonTableHead } from "./OrderStyled";

const ClientOrderList = ({ investmentList }) => {
  return (
    <div className="mb-5 mt-5">
      {investmentList?.length > 0 && (
        <>
          <h3 className="mb-5">Investment Summary</h3>
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
                    <TableCell>{row.AssetClass}</TableCell>
                    <TableCell>{row.Name}</TableCell>
                    <TableCell align="center">{row.Units}</TableCell>
                    <TableCell align="center">${row.UnitPrice} </TableCell>
                    <TableCell align="center">
                      ${row.TransactionAmount}
                    </TableCell>
                    <TableCell align="center">{row.Date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default ClientOrderList;
