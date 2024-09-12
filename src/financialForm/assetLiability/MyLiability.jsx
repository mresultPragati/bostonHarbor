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
            401(k), 403(b), 457
          </BostonClientLabel>
          <td className="col-2">
            <TextField
              variant="standard"
              name="libBalanceBk"
              value={formData?.myLiabilities?.liabilityKb?.libBalanceBk}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>
          <td className="col-2">
            <TextField
              variant="standard"
              name="libInterestRateKb"
              value={formData?.myLiabilities?.liabilityKb?.libInterestRateKb}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>

          <td className="col-2">
            <TextField
              variant="standard"
              name="libMonthlyPayKb"
              value={formData?.myLiabilities?.liabilityKb?.libMonthlyPayKb}
              onChange={(e) => handleInputChange(e)}
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
              name="libBalanceIRAs"
              value={formData?.myLiabilities?.liabilitySimpIRAs?.libBalanceIRAs}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>
          <td className="col-2">
            <TextField
              variant="standard"
              name="libInterestRateIRAs"
              value={
                formData?.myLiabilities?.liabilitySimpIRAs?.libInterestRateIRAs
              }
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>

          <td className="col-2">
            <TextField
              variant="standard"
              name="libMonthlyPayIRAs"
              value={
                formData?.myLiabilities?.liabilitySimpIRAs?.libMonthlyPayIRAs
              }
              onChange={(e) => handleInputChange(e)}
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
              name="balanceIRA"
              value={formData?.myLiabilities?.liabilityIRA?.balanceIRA}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>
          <td className="col-2">
            <TextField
              variant="standard"
              name="interestRateIRA"
              value={formData?.myLiabilities?.liabilityIRA?.interestRateIRA}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>

          <td className="col-2">
            <TextField
              variant="standard"
              name="monthlyPayIRA"
              value={formData?.myLiabilities?.liabilityIRA?.monthlyPayIRA}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>
        </tr>
      </div>
    </>
  );
};
