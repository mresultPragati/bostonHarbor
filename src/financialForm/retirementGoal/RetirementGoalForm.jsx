import { Box, Button, Checkbox, TextField } from "@mui/material";
import { BostonClientLabel } from "../FinancialStyle";

export const RetirementGoalForm = () => {
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
      </div>
    </>
  );
};
