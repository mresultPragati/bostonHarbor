import {
  Button,
  FormControl,
  FormLabel,
  TextareaAutosize,
} from "@mui/material";
import SearchableDropdown from "../../resusedComponents/SearchableDropdown";
import { Textarea } from "../../resusedComponents/constant/ResusableConst";

const country = [
  { label: "India" },
  { label: "US" },
  { label: "UK" },
  { label: "Japan" },
];

const market = [
  { label: "BSE" },
  { label: "KSolved" },
  { label: "NSE" },
  { label: "S&P 500" },
];

const companies = [
  { label: "Tesla" },
  { label: "Nestle" },
  { label: "MRF Ltd" },
];

export const StockAnalysis = () => {
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
        />
      </FormControl>

      <Button className="mt-5" variant="contained">
        Generate Stock Analysis
      </Button>
    </div>
  );
};
