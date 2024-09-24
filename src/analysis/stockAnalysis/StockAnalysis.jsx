import {
  Button,
  FormControl,
  FormLabel,
  TextareaAutosize,
} from "@mui/material";
import SearchableDropdown from "../../resusedComponents/SearchableDropdown";
import { Textarea } from "../../resusedComponents/constant/ResusableConst";
import { useEffect, useState } from "react";
import { generateStockAnalysis } from "../../api/apiServiece";

const country = [
  { label: "India" },
  { label: "US" },
  { label: "UK" },
  { label: "Japan" },
];

const market = [
  { label: "Dow Jones" },
  { label: "NASDAQ" },
  { label: "S&P 500" },
];

const companies = [
  { label: "Tesla", ticker: "TSLA" },
  { label: "NVIDIA Corporation", ticker: "NVDA" },
  { label: "Apple", ticker: "AAPL" },
];

export const StockAnalysis = () => {
  // const [stockMarket,setStockMarket] = useState([])
  // const [stockCompany,setStockCompany] = useState([])
  const [selectedTicker, setSelectedTicker] = useState(null);
  const [query, setQuery] = useState("");

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue?.ticker, event);
    setSelectedTicker(newValue?.ticker);
    // add logic
  };

  const handleQuery = (e) => {
    setQuery(e?.target?.value);
  };

  // useEffect(()=>{

  // },[])

  return (
    <div style={{ margin: "1rem 8rem" }}>
      {/* <div className="d-flex">
					<SearchableDropdown label="Select Country" options={country} />
					<p style={{ transform: "translateY(10px)", marginLeft: "10px" }}>
						Time
					</p>
				</div> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="mt-5">
          <SearchableDropdown
            width={400}
            label={"Select Stock Market"}
            options={market}
          />
        </div>
        <div className="mt-5 mb-3">
          <SearchableDropdown
            width={400}
            label={"Select Company"}
            options={companies}
            handleChange={handleChange}
          />
        </div>
      </div>
      <FormControl className="d-flex mt-4">
        {/* <FormLabel htmlFor="max-height-textarea" sx={{ mb: 1 }}>
						Query
					</FormLabel> */}
        <Textarea
          minRows={3}
          maxRows={6}
          aria-label="maximum height"
          placeholder="Add Query"
          onChange={(e) => handleQuery(e)}
        />
      </FormControl>

      <Button className="mt-5" variant="contained">
        Generate Stock Analysis
      </Button>
    </div>
  );
};
