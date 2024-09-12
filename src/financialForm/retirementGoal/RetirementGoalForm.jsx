import { Box, Button, Checkbox, TextField } from "@mui/material";
import { BostonClientLabel } from "../FinancialStyle";

export const RetirementGoalForm = (props) => {
  const { handleInputChange, formData } = props;

  const handleChange = (e) => {
    handleInputChange(e);
  };
  console.log("formData::", formData);

  return (
    <>
      {/* --------------------------------YOUR RETIREMENT GOAL--------------------------- */}
      <h5 className="mt-4">YOUR RETIREMENT GOAL</h5>
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
              name="retirementAgeClient"
              value={formData?.retirementPlan?.retirementAgeClient}
              onChange={(e) => handleChange(e)}
              fullWidth
            />
          </td>
          <td className="col-2">
            <TextField
              variant="standard"
              name="retirementAgeCoClient"
              value={formData?.retirementPlan?.retirementAgeCoClient}
              onChange={(e) => handleChange(e)}
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
              name="socialBenefitClient"
              value={formData?.retirementPlan?.socialBenefitClient}
              onChange={(e) => handleChange(e)}
              fullWidth
            />
          </td>
          <td className="col-2">
            <TextField
              variant="standard"
              name="socialBenefitCoClient"
              value={formData?.retirementPlan?.socialBenefitCoClient}
              onChange={(e) => handleChange(e)}
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
              name="pensionBenefitClient"
              value={formData?.retirementPlan?.pensionBenefitClient}
              onChange={(e) => handleChange(e)}
              fullWidth
            />
          </td>
          <td className="col-2">
            <TextField
              variant="standard"
              name="pensionBenefitCoClient"
              value={formData?.retirementPlan?.pensionBenefitCoClient}
              onChange={(e) => handleChange(e)}
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
              name="otherIncomeClient"
              value={formData?.retirementPlan?.otherIncomeClient}
              onChange={(e) => handleChange(e)}
              fullWidth
            />
          </td>
          <td className="col-2">
            <TextField
              variant="standard"
              name="otherIncomeCoClient"
              value={formData?.retirementPlan?.otherIncomeCoClient}
              onChange={(e) => handleChange(e)}
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
              name="annualRetireClient"
              value={formData?.retirementPlan?.annualRetireClient}
              onChange={(e) => handleChange(e)}
              fullWidth
            />
          </td>
          <td className="col-2">
            <TextField
              variant="standard"
              name="annualRetireCoClient"
              value={formData?.retirementPlan?.annualRetireCoClient}
              onChange={(e) => handleChange(e)}
              fullWidth
            />
          </td>
        </tr>
      </div>
    </>
  );
};
