import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const StockSelection = ({
  stockOption,
  setSelectedCompany,
  setSelectedMarket,
  setQuery,
  setStockOption,
}) => {
  const handleOptionChange = (e) => {
    if (e.target.value === "stockQuery") {
      setSelectedCompany({});
      setSelectedMarket({});
    }
    if (e.target.value === "stockAnalysis") setQuery("");
    setStockOption(e.target.value);
  };

  return (
    <>
      {" "}
      <RadioGroup value={stockOption} onChange={handleOptionChange}>
        <FormControlLabel
          value="stockAnalysis"
          control={<Radio />}
          label="Stock Analysis"
        />
        <FormControlLabel
          value="stockQuery"
          control={<Radio />}
          label="Ask a query"
        />
      </RadioGroup>
    </>
  );
};
