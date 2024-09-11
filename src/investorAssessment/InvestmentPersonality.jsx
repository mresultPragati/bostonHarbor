import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  TextField,
  Slider,
  Typography,
  Button,
} from "@mui/material";

const InvestmentPersonality = () => {
  const [formData, setFormData] = useState({
    betChoice: "",
    gameShowChoice: "",
    riskTendency: "",
    portfolioChoice: "",
    maxDropComfort: "",
    investmentFocus: "",
    riskAttitude: "",
    monthlyInvestment: "",
    investment: "",
    // investmentHorizon: [1, 5],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSliderChange = (e, newValue) => {
    setFormData({ ...formData, investmentHorizon: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <div className="mb-5">
        <Typography className="mb-5" variant="h5" gutterBottom>
          Investment Personality Questions
        </Typography>
        <div style={{ textAlign: "start" }}>
          <div className="row">
            <div className="col-sm-1 col-md-1"></div>
            <div className="col-sm-11 col-md-11">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    {/* Question 1 */}
                    <FormControl component="fieldset" margin="normal">
                      <FormLabel component="legend">
                        1. If you were to bet one last time, what would you bet
                        on?
                      </FormLabel>
                      <RadioGroup
                        name="betChoice"
                        value={formData.betChoice}
                        onChange={handleInputChange}
                      >
                        <FormControlLabel
                          value="Heads"
                          control={<Radio />}
                          label="Heads"
                        />
                        <FormControlLabel
                          value="Tails"
                          control={<Radio />}
                          label="Tails"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    {/* Question 2 */}
                    <FormControl component="fieldset" margin="normal">
                      <FormLabel component="legend">
                        2. What would you prefer?
                      </FormLabel>
                      <RadioGroup
                        name="gameShowChoice"
                        value={formData.gameShowChoice}
                        onChange={handleInputChange}
                      >
                        <FormControlLabel
                          value="50 percent chance of winning 15 gold coins"
                          control={<Radio />}
                          label="50 percent chance of winning 15 gold coins"
                        />
                        <FormControlLabel
                          value="100 percent chance of winning 8 gold coins"
                          control={<Radio />}
                          label="100 percent chance of winning 8 gold coins"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    {/* Question 3 */}
                    <FormControl component="fieldset" margin="normal">
                      <FormLabel component="legend">
                        3. How would your best friend describe your risk-taking
                        tendencies?
                      </FormLabel>
                      <RadioGroup
                        name="riskTendency"
                        value={formData.riskTendency}
                        onChange={handleInputChange}
                      >
                        <FormControlLabel
                          value="A real gambler"
                          control={<Radio />}
                          label="A real gambler"
                        />
                        <FormControlLabel
                          value="Willing to take risks after research"
                          control={<Radio />}
                          label="Willing to take risks after research"
                        />
                        <FormControlLabel
                          value="Cautious"
                          control={<Radio />}
                          label="Cautious"
                        />
                        <FormControlLabel
                          value="Avoids risk"
                          control={<Radio />}
                          label="Avoids risk"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    {/* Question 4 */}
                    <FormControl component="fieldset" margin="normal">
                      <FormLabel component="legend">
                        4. How much loss are you willing to take for a 50%
                        chance of gaining 35%?
                      </FormLabel>
                      <RadioGroup
                        name="portfolioChoice"
                        value={formData.portfolioChoice}
                        onChange={handleInputChange}
                      >
                        <FormControlLabel
                          value="5 to 10"
                          control={<Radio />}
                          label="5% to 10%"
                        />
                        <FormControlLabel
                          value="10 to 15"
                          control={<Radio />}
                          label="10% to 15%"
                        />
                        <FormControlLabel
                          value="15 to 20"
                          control={<Radio />}
                          label="15% to 20%"
                        />
                        <FormControlLabel
                          value="20 to 25"
                          control={<Radio />}
                          label="20% to 25%"
                        />
                        <FormControlLabel
                          value="25 to 30"
                          control={<Radio />}
                          label="25% to 30%"
                        />
                        <FormControlLabel
                          value="30 to 35"
                          control={<Radio />}
                          label="30% to 35%"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    {/* Question 5 */}
                    <FormControl component="fieldset" margin="normal">
                      <FormLabel component="legend">
                        5. Over any 1-year period, what would be the maximum
                        drop in value that you'd be comfortable with?
                      </FormLabel>
                      <RadioGroup
                        name="maxDropComfort"
                        value={formData.maxDropComfort}
                        onChange={handleInputChange}
                      >
                        <FormControlLabel
                          value="<5%"
                          control={<Radio />}
                          label="Less than 5%"
                        />
                        <FormControlLabel
                          value="5 - 10%"
                          control={<Radio />}
                          label="5 - 10%"
                        />
                        <FormControlLabel
                          value="10 - 15%"
                          control={<Radio />}
                          label="10 - 15%"
                        />
                        <FormControlLabel
                          value="15 - 20%"
                          control={<Radio />}
                          label="15 - 20%"
                        />
                        <FormControlLabel
                          value=">20%"
                          control={<Radio />}
                          label="Greater than 20%"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    {/* Question 6 */}
                    <FormControl component="fieldset" margin="normal">
                      <FormLabel component="legend">
                        6. When investing, what do you consider the most?
                      </FormLabel>
                      <RadioGroup
                        name="investmentFocus"
                        value={formData.investmentFocus}
                        onChange={handleInputChange}
                      >
                        <FormControlLabel
                          value="Risk"
                          control={<Radio />}
                          label="Risk"
                        />
                        <FormControlLabel
                          value="Return"
                          control={<Radio />}
                          label="Return"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    {/* Question 7 */}
                    <FormControl component="fieldset" margin="normal">
                      <FormLabel component="legend">
                        7. What best describes your attitude?
                      </FormLabel>
                      <RadioGroup
                        name="riskAttitude"
                        value={formData.riskAttitude}
                        onChange={handleInputChange}
                      >
                        <FormControlLabel
                          value="Reasonable returns, reasonable risk"
                          control={<Radio />}
                          label="Prefer reasonable returns, can take reasonable risk"
                        />
                        <FormControlLabel
                          value="Higher returns, higher risk"
                          control={<Radio />}
                          label="Like higher returns, can take slightly higher risk"
                        />
                        <FormControlLabel
                          value="Maximize returns, significant risk"
                          control={<Radio />}
                          label="Want to maximize returns, can take significant risk"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    {/* Question 8 */}
                    <FormControl component="fieldset" margin="normal">
                      <FormLabel component="legend">
                        8. How much monthly investment you want to do?
                      </FormLabel>
                      <TextField
                        // label="8. How much monthly investment you want to do?"
                        variant="outlined"
                        name="monthlyInvestment"
                        value={formData.monthlyInvestment}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                      />
                    </FormControl>
                  </div>
                </div>

                {/* Question 9 */}

                <FormLabel component="legend" className="mt-3">
                  9. What is the time horizon for your investment?
                </FormLabel>
                <TextField
                  // label="8. How much monthly investment you want to do?"
                  variant="outlined"
                  name="investment"
                  value={formData.investment}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                {/* <Slider
                  value={formData.investmentHorizon}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  marks
                  min={1}
                  max={30}
                /> */}

                <div className=" d-flex justify-content-center">
                  <Button
                    className="mt-5"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentPersonality;
