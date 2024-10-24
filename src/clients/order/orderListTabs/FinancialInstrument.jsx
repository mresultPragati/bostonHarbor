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
import { BoldCell } from "../../portfolio/PortfolioStyled";
import { calculateTotals } from "../../../resusedComponents/constant/ResusableConst";
import { BostonTableCell } from "./OrderListStyled";
import { BostonPaginationElement } from "../../../resusedComponents/BostonPaginationElement";

export const FinancialInstrument = ({ investmentList }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <>
      {investmentList?.length > 0 && (
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
                {investmentList
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((row, index) => (
                    <TableRow key={index}>
                      <BostonTableCell>{index + 1}</BostonTableCell>
                      <BostonTableCell>{row.assetClass}</BostonTableCell>
                      <BostonTableCell>{row.name}</BostonTableCell>
                      <BostonTableCell align="center">
                        {row.Action}
                      </BostonTableCell>
                      <BostonTableCell align="center">
                        {row.Units}
                      </BostonTableCell>
                      <BostonTableCell align="center">
                        ${row.UnitPrice?.toFixed(2)}{" "}
                      </BostonTableCell>
                      <BostonTableCell align="center">
                        ${row.clientAmount?.toFixed(2)}
                      </BostonTableCell>
                      <BostonTableCell align="center">
                        {row.date}
                      </BostonTableCell>
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
      )}

      {investmentList?.length === 0 && (
        <div className="mt-5 row">
          <h4 style={{ fontWeight: 300 }}>No Data Found!!!</h4>
        </div>
      )}

      {investmentList?.length > 0 && (
        <BostonPaginationElement
          count={investmentList?.length}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};
