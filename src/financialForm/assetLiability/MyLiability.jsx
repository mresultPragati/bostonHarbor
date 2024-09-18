import { TextField } from "@mui/material";
import { BostonClientLabel } from "../FinancialStyle";

export const MyLiability = (props) => {
  const { handleInputChange, formData } = props;
  return (
    <>
      {" "}
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
            Mortgage(s)
          </BostonClientLabel>
          <td className="col-2">
            <TextField
              variant="standard"
              name="mortgageBalance"
              value={formData?.mortgageBalance}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>
          <td className="col-2">
            <TextField
              variant="standard"
              name="mortgageInterest"
              value={formData?.mortgageInterest}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>

          <td className="col-2">
            <TextField
              variant="standard"
              name="mortgageMonthly"
              value={formData?.mortgageMonthly}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>
        </tr>

        <tr className="row mt-2">
          <BostonClientLabel className="col-6 mr-2">
            Credit Card(s)
          </BostonClientLabel>
          <td className="col-2">
            <TextField
              variant="standard"
              name="creditCardBalance"
              value={formData?.creditCardBalance}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>
          <td className="col-2">
            <TextField
              variant="standard"
              name="creditCardInterest"
              value={formData?.creditCardInterest}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>

          <td className="col-2">
            <TextField
              variant="standard"
              name="creditCardMonthly"
              value={formData?.creditCardMonthly}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>
        </tr>

        <tr className="row mt-2">
          <BostonClientLabel className="col-6 mr-2">
            Other loans &nbsp;<small> (car, education, etc.)</small>
          </BostonClientLabel>
          <td className="col-2">
            <TextField
              variant="standard"
              name="otherLoansBalance"
              value={formData?.otherLoansBalance}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>
          <td className="col-2">
            <TextField
              variant="standard"
              name="otherLoansInterest"
              value={formData?.otherLoansInterest}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>

          <td className="col-2">
            <TextField
              variant="standard"
              name="otherLoansMonthly"
              value={formData?.otherLoansMonthly}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>
        </tr>
      </div>
    </>
  );
};
