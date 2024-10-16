import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { BostonTableHead } from "./OrderStyled";

const ClientOrderList = ({ investmentList }) => {
  console.log("investmentList", investmentList);

  return (
    <div className="mb-5 mt-5">
      <Typography variant="h4" sx={{ textAlign: "center", margin: "2rem 0" }}>
        Order History
      </Typography>
      {investmentList?.length > 0 ? (
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
                    <TableCell>{row.AssetClass}</TableCell>
                    <TableCell>{row.Name}</TableCell>
                    <TableCell align="center">{row.buy_or_sell}</TableCell>
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
      ) : (
        <div className="mt-5 row">
          <h4 style={{ fontWeight: 300 }}>No Data Found!!!</h4>
        </div>
      )}
    </div>
  );
};

export default ClientOrderList;
