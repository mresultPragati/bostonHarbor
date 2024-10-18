import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TransactionForm from "./TransactionForm";
import { investmentForm } from "./InvestmentConst";
import { BostonTableHead } from "../order/OrderStyled";

// Sample data
// const initialRows = [
//   {
//     assetClass: "Stocks",
//     name: "Apple",
//     units: 10,
//     pricePerUnit: 150,
//     transactionAmount: 1500,
//     date: "2024-10-09",
//   },
//   {
//     assetClass: "Bonds",
//     name: "Government Bond",
//     units: 20,
//     pricePerUnit: 200,
//     transactionAmount: 4000,
//     date: "2024-10-01",
//   },
//   {
//     assetClass: "Real Estate",
//     name: "Property X",
//     units: 1,
//     pricePerUnit: 300000,
//     transactionAmount: 300000,
//     date: "2024-09-25",
//   },
// ];

const InvestmentAllocation = () => {
  const [investmentList, setInvestmentList] = useState([]);
  const [formData, setFormData] = useState(investmentForm);

  return (
    <div className="mb-5 mt-5">
      {/* <TransactionForm
        formData={formData}
        setFormData={setFormData}
        // setInvestmentList={setInvestmentList}
        // handleFormSubmit={handleFormSubmit}
        // editingIndex={editingIndex}
      /> */}
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
                    <TableCell>{row.assetClass}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="center">{row.units}</TableCell>
                    <TableCell align="center">
                      ${row.pricePerUnit?.toFixed(2)}{" "}
                    </TableCell>
                    <TableCell align="center">
                      ${row.transactionAmount?.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    {/* <TableCell align="center">
                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(index)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell> */}
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

export default InvestmentAllocation;
