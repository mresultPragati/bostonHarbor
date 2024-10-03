import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { BostonSearch } from "../resusedComponents/BostonSearch";
import { investmentPersnalityAssament } from "../api/apiServiece";
import ConfirmationDialog from "../resusedComponents/BostonConfirmation";
import { BostonAlertMessage } from "../resusedComponents/BostonAlertMessage";
import { useNavigate } from "react-router-dom";
import BostonLoader from "../resusedComponents/BostonLoader";

const InvestmentPersonality = () => {
  const [personalityData, setPersonalityData] = useState({});
  const [selectedClient, setSelectedClient] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));

  const handleOpen = () => {
    setOpenDialog(true);
    // return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    var question = "";

    if (name === "question1") {
      question = `You and your friend are betting on a series of coin tosses.He always bets ₹2,000 on Heads
You always bet ₹2,000 on Tails Winner of last 8 turns You lost ₹8,000 in the last 4 turns! If you were to bet one last time, what would you bet on:`;
    }
    if (name === "question2") {
      question = `Imagine you are a contestant in a game show, and you are presented the following choices.What would you prefer?`;
    }
    if (name === "question3") {
      question = ` In general, how would your best friend describe your risk-taking tendencies?`;
    }
    if (name === "question4") {
      question = `Suppose you could replace your current investment portfolio with this new one:
50 percent chance of Gaining 35 percent or 50 percent chance of Loss In order to have a 50 percent chance of gaining +35 percent, how much loss are you willing to take?`;
    }
    if (name === "question5") {
      question = ` Over any 1-year period, what would be the maximum drop in the value of your investment portfolio that you would be comfortable with?`;
    }
    if (name === "question6") {
      question = `When investing, what do you consider the most?`;
    }
    if (name === "question7") {
      question = `What best describes your attitude?`;
    }
    if (name === "question8") {
      question = `How much monthly investment you want to do?`;
    }
    if (name === "question9") {
      question = `What is the time horizon for your investment?`;
    }

    setPersonalityData({
      ...personalityData,
      [name]: { question: question, answer: value },
    });
  };

  const handleConfirm = async () => {
    setOpenDialog(false);
    setShowLoader(true);
    console.log("Form Data Submitted:", personalityData);
    const payload = {
      client_id: selectedClient?.uniqueId,
      assessment_data: personalityData,
    };
    const resp = await investmentPersnalityAssament(
      payload,
      "application/json"
    );

    const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));
    console.log(
      "Form Data Submitted: resp RESULT",
      resp?.data?.investment_personality
    );
    if (resp?.status === 200) {
      setShowLoader(false);
      setAlertMsg({
        msg: "Investor Assessment Successfully Submitted",
        severity: "success",
      });

      const clientIndex = clientList.findIndex(
        (item) => item.uniqueId === resp?.data?.client_id
      );

      if (clientIndex !== -1) {
        clientList[clientIndex].investment_personality =
          resp?.data?.investment_personality;
        localStorage.setItem("financialForm", JSON.stringify(clientList));
      }
      setTimeout(() => {
        navigate("/");
      }, 2500);
      //  setAlertMsg({ msg: "Invesrtor Assessment Completed", severity: "success" });
    } else {
      setShowLoader(false);
      setAlertMsg({ msg: resp.data?.message, severity: "error" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpen();
  };

  return (
    <>
      <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
      {showLoader && <BostonLoader />}

      <div className="mb-5">
        <Typography className="mb-4" variant="h5" gutterBottom>
          Investment Personality Questions
        </Typography>

        <BostonSearch
          label="Name Of Client"
          listArray={clientList}
          filterFields={["clientDetail.clientName", "uniqueId"]}
          setSelectedObj={setSelectedClient}
          primaryValue="clientDetail.clientName"
          secondary={"uniqueId"}
          secondaryName="ID"
          width={50}
        />

        {Object.keys(selectedClient).length > 0 ? (
          <div className="mt-5" style={{ textAlign: "start" }}>
            <div className="row">
              <div className="col-sm-1 col-md-1"></div>
              <div className="col-sm-11 col-md-11">
                {/* <form onSubmit={handleOpen}> */}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      {/* Question 1 */}
                      <FormControl component="fieldset" margin="normal">
                        <FormLabel component="legend">
                          1. You and your friend are betting on a series of coin
                          tosses. He always bets ₹2,000 on Heads You always bet
                          ₹2,000 on Tails Winner of last 8 turns You lost ₹8,000
                          in the last 4 turns! If you were to bet one last time,
                          what would you bet on:
                        </FormLabel>
                        <RadioGroup
                          name="question1"
                          // name="betChoice"
                          value={personalityData.betChoice}
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
                          2. Imagine you are a contestant in a game show, and
                          you are presented the following choices. What would
                          you prefer?
                        </FormLabel>
                        <RadioGroup
                          name="question2"
                          // name="gameShowChoice"
                          value={personalityData.gameShowChoice}
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
                          3. In general, how would your best friend describe
                          your risk-taking tendencies?
                        </FormLabel>
                        <RadioGroup
                          name="question3"
                          // name="riskTendency"
                          value={personalityData.riskTendency}
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
                          4. Suppose you could replace your current investment
                          portfolio with this new one: 50 percent chance of
                          Gaining 35 percent or 50 percent chance of Loss In
                          order to have a 50 percent chance of gaining +35
                          percent, how much loss are you willing to take?
                        </FormLabel>
                        <RadioGroup
                          name="question4"
                          // name="portfolioChoice"
                          value={personalityData.portfolioChoice}
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
                          drop in the value of your investment portfolio that
                          you would be comfortable with?
                        </FormLabel>
                        <RadioGroup
                          name="question5"
                          // name="maxDropComfort"
                          value={personalityData.maxDropComfort}
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
                          name="question6"
                          // name="investmentFocus"
                          value={personalityData.investmentFocus}
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
                          name="question7"
                          // name="riskAttitude"
                          value={personalityData.riskAttitude}
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
                          name="question8"
                          // name="monthlyInvestment"
                          variant="outlined"
                          value={personalityData.monthlyInvestment}
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
                    name="question9"
                    // name="investment"
                    value={personalityData.investment}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                  {/* <Slider
                  value={personalityData.investmentHorizon}
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
                      Submit ASSESSMENT
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <h6 className="mt-5">
            Please Enter the client name or client Id in above field
          </h6>
        )}
      </div>
      <ConfirmationDialog
        open={openDialog}
        setOpenDialog={setOpenDialog}
        onConfirm={() => handleConfirm()}
        message="Are you sure you want to proceed?"
      />
    </>
  );
};

export default InvestmentPersonality;
