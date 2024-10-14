import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { BostonTableHead } from "./OrderStyled";
import TransactionForm from "./TransactionForm";
import { investmentForm } from "./OrderConst";
import { useLocation, useParams } from "react-router-dom";
import { navigatorPath } from "../../MenuBar/constant/TopBarConst";

const ClientOrder = () => {
  const [investmentList, setInvestmentList] = useState([]);
  const [formData, setFormData] = useState(investmentForm);

  return (
    <div className="mb-5 mt-5">
      <TransactionForm
        formData={formData}
        setFormData={setFormData}
        // setInvestmentList={setInvestmentList}
        // handleFormSubmit={handleFormSubmit}
        // editingIndex={editingIndex}
      />
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
                    <TableCell align="center">${row.pricePerUnit} </TableCell>
                    <TableCell align="center">
                      ${row.transactionAmount}
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

export default ClientOrder;
