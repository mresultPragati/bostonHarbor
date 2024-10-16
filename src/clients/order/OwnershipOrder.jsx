import { TextField } from "@mui/material";
import { ownershipType } from "../../analysis/stockAnalysis/constants";
import { useState } from "react";

export const OwnershipOrder = ({ selectedOwnership }) => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [dividendYield, setDividendYield] = useState("");

  return (
    <>
      {selectedOwnership === ownershipType?.reit ||
      selectedOwnership === ownershipType?.commercial ? (
        <>
          <TextField
            label="Investment Amount"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            type="number"
          />

          <TextField
            label="Dividend Yield (%)"
            value={dividendYield}
            onChange={(e) => setDividendYield(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            type="number"
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
