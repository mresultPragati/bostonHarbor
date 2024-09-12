import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { BostonClientSearch } from "../resusedComponents/BostonClientSearch";

export const AdvisorUsingText = (props) => {
  const {
    investMentValue,
    investorPersonalityVal,
    setInvestMentValue,
    setInvestorPersonalityVal,
    setSelectedClient,
  } = props;

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
          <BostonClientSearch
            setSelectedClient={setSelectedClient}
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
              value={investorPersonalityVal}
              onChange={handleInvestorChange}
              placeholder="Investor Personality"
              fullWidth
            >
              <MenuItem value={"conservativeInvestor"}>
                Conservative Investor
              </MenuItem>
              <MenuItem value={"moderateInvestor"}>Moderate Investor</MenuItem>
              <MenuItem value={"aggressiveInvestor"}>
                Aggressive Investor
              </MenuItem>
            </Select>
          </FormControl>
        </td>
      </div>
    </>
  );
};
