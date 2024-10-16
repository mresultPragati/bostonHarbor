import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { BostonSearch } from "../../resusedComponents/BostonSearch";

export const AdvisorUsingText = (props) => {
  const {
    investMentValue,
    investorPersonalityVal,
    setInvestMentValue,
    setInvestorPersonalityVal,
    setSelectedClient,
    selectedClient,
  } = props;
  const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));

  const [clientSearch, setClientSearch] = useState("");

  useEffect(() => {
    setInvestorPersonalityVal(selectedClient?.investment_personality);
  }, [selectedClient]);

  const handleInvestmentChange = (event) => {
    setInvestMentValue(event.target.value);
  };

  const handleInvestorChange = (event) => {
    setInvestorPersonalityVal(event.target.value);
  };

  return (
    <>
      <div className="row">
        <td className="col-4 mr-5">
          {/* <TextField variant="standard" fullWidth label="What do you like to do ?" /> */}
          <FormControl variant="standard" fullWidth>
            <InputLabel id="dropdown-label">
              What do you like to do ?
            </InputLabel>
            <Select
              labelId="dropdown-label"
              value={investMentValue}
              onChange={handleInvestmentChange}
              placeholder="What do you like to do ?"
              fullWidth
            >
              <MenuItem value={"Suggest Investments"}>
                Suggest Investments
              </MenuItem>
            </Select>
          </FormControl>
        </td>
        <td className="col-4 mr-5">
          {/* <TextField variant="standard" fullWidth label="Client Name" /> */}
          <BostonSearch
            label="Name Of Client"
            searchTerm={clientSearch}
            setSearchTerm={setClientSearch}
            listArray={clientList}
            filterFields={["clientDetail.clientName", "uniqueId"]}
            setSelectedObj={setSelectedClient}
            primaryValue="clientDetail.clientName"
            secondary={"uniqueId"}
            secondaryName="ID"
            width={100}
          />
        </td>
        <td className="col-4 mr-5">
          {/* <TextField variant="standard" fullWidth label="Investor Personality" /> */}

          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              Investor Personality
            </InputLabel>
            <Select
              disabled={!selectedClient?.uniqueId}
              value={investorPersonalityVal}
              onChange={handleInvestorChange}
              placeholder="Investor Personality"
              fullWidth
            >
              <MenuItem value={"Conservative Investor"}>
                Conservative Investor
              </MenuItem>
              <MenuItem value={"Moderate Investor"}>Moderate Investor</MenuItem>
              <MenuItem value={"Aggressive Investor"}>
                Aggressive Investor
              </MenuItem>
            </Select>
          </FormControl>
        </td>
      </div>
    </>
  );
};
