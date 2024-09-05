import { Box, Button, Checkbox, TextField } from "@mui/material";
import styled from "styled-components";
import { RetirementGoalForm } from "./retirementGoal/RetirementGoalForm";
// import { BostonClientLabel } from "./FinancialStyled";

const BostonClientLabel = styled.label`
  display: flex;
`;

export const FinancialForm = () => {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <h2>Financial Form</h2>
      <p>
        To make our meeting as productive as possible, please complete this form
        to the best of your ability. Let us know if you have any questions or
        concerns.
      </p>

      <div>
        <Box
          className="container"
          component="form"
          //   sx={{ "& .MuiTextField-root": { width: 500 } }}
          sx={{
            width: 1000,
            margin: "auto",
            // ml: 5,
            // m: "2px 10px 10px 2px",
          }}
          //   noValidate
          autoComplete="off"
        >
          <div className="row mb-3">
            <div className="col-6">
              <TextField
                variant="standard"
                label="Client Name"
                name="name"
                //   value={formData.name}
                //   onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div className="col-4">
              <TextField
                label="Mobile No."
                variant="standard"
                name="name"
                //   value={formData.name}
                //   onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div className="col-2">
              <TextField
                label="Age"
                variant="standard"
                name="name"
                //   value={formData.name}
                //   onChange={handleChange}
                fullWidth
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-6">
              <TextField
                variant="standard"
                label=" Co-Client Name "
                name="name"
                //   value={formData.name}
                //   onChange={handleChange}
                fullWidth
                // required
              />
            </div>
            <div className="col-4">
              <TextField
                label="Mobile No."
                variant="standard"
                name="name"
                //   value={formData.name}
                //   onChange={handleChange}
                fullWidth
                // required
              />
            </div>
            <div className="col-2">
              <TextField
                label="Age"
                variant="standard"
                name="name"
                //   value={formData.name}
                //   onChange={handleChange}
                fullWidth
                // required
              />
            </div>
          </div>
          <RetirementGoalForm />

          {/* --------------------------------YOUR RETIREMENT GOAL--------------------------- */}
          {/* <h5 className="mt-4">YOUR RETIREMENT GOAL</h5>
          <div>
            <tr className="row">
              <td className="col-8"></td>
              <td className="col-2">
                {" "}
                <label> Client</label>
              </td>
              <td className="col-2">
                {" "}
                <label>Co-Client</label>
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                When do you plan to retire? (age or date)
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                Social Security Benefit (include expected start date)
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                Pension Benefit (include expected start date)
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                Other Expected Income (rental, part-time work, etc.)
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                Estimated Annual Retirement Expense ($ or % of current salary)
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>
          </div> */}

          {/* --------------------------------YOUR OTHER MAJOR GOALS------------------- */}
          <div>
            <h5 className="mt-5" style={{ lineHeight: "2px" }}>
              YOUR OTHER MAJOR GOALS
            </h5>
            <small> Example-fund,education,buy</small>

            <div className="mt-3">
              <tr className="row">
                <td className="col-8">GOAL</td>
                <td className="col-2">
                  {" "}
                  <label> Cost</label>
                </td>
                <td className="col-2">
                  {" "}
                  <label>When</label>
                </td>
              </tr>

              <tr className="row mt-2">
                {/* <BostonClientLabel className="col-8 mr-2"> */}
                <td className="col-7 mr-5" style={{ marginRight: "5.2rem" }}>
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
                {/* </BostonClientLabel> */}
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>

              <tr className="row mt-2">
                {/* <BostonClientLabel className="col-8 mr-2"> */}
                <td className="col-7 mr-5" style={{ marginRight: "5.2rem" }}>
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
                {/* </BostonClientLabel> */}
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                {/* <BostonClientLabel className="col-8 mr-2"> */}
                <td className="col-7 mr-5" style={{ marginRight: "5.2rem" }}>
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
                {/* </BostonClientLabel> */}
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                {/* <BostonClientLabel className="col-8 mr-2"> */}
                <td className="col-7 mr-5" style={{ marginRight: "5.2rem" }}>
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
                {/* </BostonClientLabel> */}
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                {/* <BostonClientLabel className="col-8 mr-2"> */}
                <td className="col-7 mr-5" style={{ marginRight: "5.2rem" }}>
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
                {/* </BostonClientLabel> */}
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
            </div>
          </div>

          {/* ---------------------------YOUR ASSETS AND LIABILITIES-------------------- */}
          <div>
            <h5 className="mt-5">YOUR ASSETS AND LIABILITIES</h5>
            <div>
              <tr className="row">
                <BostonClientLabel className="col-8">
                  <b>My Assets</b>
                </BostonClientLabel>
                <td className="col-2">
                  {" "}
                  <label> Current Value $</label>
                </td>
                <td className="col-2">
                  {" "}
                  <label style={{ textWrap: "nowrap" }}>
                    Annual Contributions $
                  </label>
                </td>
              </tr>

              <tr className="row mt-3">
                <BostonClientLabel className="col-8 mr-2">
                  401(k), 403(b), 457
                </BostonClientLabel>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>

              <tr className="row mt-2">
                <BostonClientLabel className="col-8 mr-2">
                  Traditional, SEP and SIMPLE IRAs
                </BostonClientLabel>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>

              <tr className="row mt-2">
                <BostonClientLabel className="col-8 mr-2">
                  Roth IRA, Roth 401(k)
                </BostonClientLabel>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>

              <tr className="row mt-2">
                <BostonClientLabel className="col-8 mr-2">
                  Brokerage/non-qualified accounts
                </BostonClientLabel>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>

              <tr className="row mt-2">
                <BostonClientLabel className="col-8 mr-2">
                  Cash/bank accounts
                </BostonClientLabel>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                <BostonClientLabel className="col-8 mr-2">
                  Annuities
                </BostonClientLabel>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                <BostonClientLabel className="col-8 mr-2">
                  529 Plans
                </BostonClientLabel>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                <BostonClientLabel className="col-8 mr-2">
                  Home
                </BostonClientLabel>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                <BostonClientLabel className="col-8 mr-2">
                  Other Real Estate
                </BostonClientLabel>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                <BostonClientLabel className="col-8 mr-2">
                  Business
                </BostonClientLabel>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                <BostonClientLabel className="col-8 mr-2">
                  Other (e.g. car, boat, art, etc.)
                </BostonClientLabel>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
            </div>
          </div>

          {/* --------------------------------MY LIABILITIES--------------------------- */}
          {/* <h5 className="mt-4">MY LIABILITIES</h5> */}
          <div>
            <tr className="row mt-5">
              <td className="col-6">
                <BostonClientLabel>
                  <b>MY LIABILITIES</b>
                </BostonClientLabel>
              </td>
              <td className="col-2">
                {" "}
                <label> Balance $</label>
              </td>
              <td className="col-2">
                {" "}
                <label>Interest Rate</label>
              </td>
              <td className="col-2">
                {" "}
                <label>Monthly Payment $ </label>
              </td>
            </tr>

            <tr className="row mt-3">
              <BostonClientLabel className="col-6 mr-2">
                401(k), 403(b), 457
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-6 mr-2">
                Traditional, SEP and SIMPLE IRAs
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-6 mr-2">
                Roth IRA, Roth 401(k)
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>
          </div>

          {/* --------------------------------YOUR CURRENT ANNUAL INCOME------------------- */}
          <div>
            <h5 className="mt-5" style={{ lineHeight: "2px" }}>
              YOUR CURRENT ANNUAL INCOME
            </h5>

            <div className="mt-2">
              <tr className="row">
                <td className="col-6">Client Name</td>
                <td className="col-4 d-flex justify-content-end">
                  {" "}
                  <label> Source (employment, bonus, rental)</label>
                </td>
                <td className="col-2 f-flex " style={{ textWrap: "nowrap" }}>
                  {" "}
                  <label>Amount (before taxes)</label>
                </td>
              </tr>

              <tr className="row mt-2">
                {/* <BostonClientLabel className="col-8 mr-2"> */}
                <td className="col-6" style={{ marginRight: "5.2rem" }}>
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
                {/* </BostonClientLabel> */}
                <td className="col-3">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>

              <tr className="row mt-2">
                {/* <BostonClientLabel className="col-8 mr-2"> */}
                <td className="col-6" style={{ marginRight: "5.2rem" }}>
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
                {/* </BostonClientLabel> */}
                <td className="col-3">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                {/* <BostonClientLabel className="col-8 mr-2"> */}
                <td className="col-6" style={{ marginRight: "5.2rem" }}>
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
                {/* </BostonClientLabel> */}
                <td className="col-3">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                {/* <BostonClientLabel className="col-8 mr-2"> */}
                <td className="col-6" style={{ marginRight: "5.2rem" }}>
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
                {/* </BostonClientLabel> */}
                <td className="col-3">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
              <tr className="row mt-2">
                {/* <BostonClientLabel className="col-8 mr-2"> */}
                <td className="col-6" style={{ marginRight: "5.2rem" }}>
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
                {/* </BostonClientLabel> */}
                <td className="col-3">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>

                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                    fullWidth
                  />
                </td>
              </tr>
            </div>
          </div>

          {/* -------------------------------------YOUR PROTECTION PLAN------------------------ */}
          <h5 className="mt-5">YOUR PROTECTION PLAN</h5>
          <div>
            <tr className="row">
              <td className="col-8">
                <BostonClientLabel>ESTATE DOCUMENTS:</BostonClientLabel>
              </td>
              <td className="col-2">
                {" "}
                <label> </label>
              </td>
              <td className="col-2">
                {" "}
                <label></label>
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">Will</BostonClientLabel>
              <td className="col-2">
                <Checkbox />
              </td>

              <td className="col-2">
                <Checkbox />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                Health-care proxy
              </BostonClientLabel>
              <td className="col-2">
                <Checkbox />
              </td>

              <td className="col-2">
                <Checkbox />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                Power of Attorney
              </BostonClientLabel>
              <td className="col-2">
                <Checkbox />
              </td>

              <td className="col-2">
                <Checkbox />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                Trust(s)
              </BostonClientLabel>
              <td className="col-2">
                <Checkbox />
              </td>

              <td className="col-2">
                <Checkbox />
              </td>
            </tr>
          </div>

          {/* --------------------------------INSURANCE COVERAGE: Your protected Plan--------------------------- */}

          <div>
            <tr className="row mt-5">
              <td className="col-8">
                <BostonClientLabel>INSURANCE COVERAGE:</BostonClientLabel>
              </td>
              <td className="col-2">
                {" "}
                <label> Benefit</label>
              </td>
              <td className="col-2">
                {" "}
                <label>Monthly Payment</label>
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 ">
                Life Insurance - client
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                Life Insurance - co-client
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                Disability Income - client
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                Disability Income - co-client
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>

            <tr className="row mt-2">
              <BostonClientLabel className="col-8 mr-2">
                Long-term care - client
              </BostonClientLabel>
              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>

              <td className="col-2">
                <TextField
                  variant="standard"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  fullWidth
                />
              </td>
            </tr>
          </div>

          <Button variant="contained" className="mt-5 mb-5 w-50">
            SUBMIT
          </Button>
        </Box>
      </div>
    </div>
  );
};
