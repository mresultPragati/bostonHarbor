import { TextField } from "@mui/material";
import { BostonClientLabel } from "../FinancialStyle";

export const InsuranceCoverage = (props) => {
  const { handleInputChange, formData } = props;
  return (
    <>
      {" "}
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
              name="benefitLIClient"
              value={
                formData?.insuranceCoverage?.lifeInsuranceClient
                  ?.benefitLIClient
              }
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>

          <td className="col-2">
            <TextField
              variant="standard"
              name="monthlyPayLIClient"
              value={
                formData?.insuranceCoverage?.lifeInsuranceClient
                  ?.monthlyPayLIClient
              }
              onChange={(e) => handleInputChange(e)}
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
              name="benefitLICoClient"
              value={
                formData?.insuranceCoverage?.lifeInsuranceCoClient
                  ?.benefitLICoClient
              }
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>

          <td className="col-2">
            <TextField
              variant="standard"
              name="monthlyPayLICoClient"
              value={
                formData?.insuranceCoverage?.lifeInsuranceCoClient
                  ?.monthlyPayLICoClient
              }
              onChange={(e) => handleInputChange(e)}
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
              name="benefitDisableClient"
              value={
                formData?.insuranceCoverage?.disableIncomeClient
                  ?.benefitDisableClient
              }
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>

          <td className="col-2">
            <TextField
              variant="standard"
              name="monthlyPayDisableClient"
              value={
                formData?.insuranceCoverage?.disableIncomeClient
                  ?.monthlyPayDisableClient
              }
              onChange={(e) => handleInputChange(e)}
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
              name="benefitDisableCoClient"
              value={
                formData?.insuranceCoverage?.disableIncomeCoClient
                  ?.benefitDisableCoClient
              }
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>

          <td className="col-2">
            <TextField
              variant="standard"
              name="monthlyPayDisableCoClient"
              value={
                formData?.insuranceCoverage?.disableIncomeCoClient
                  ?.monthlyPayDisableCoClient
              }
              onChange={(e) => handleInputChange(e)}
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
              name="benefitLongTermClient"
              value={
                formData?.insuranceCoverage?.longTermCoClient
                  ?.benefitLongTermClient
              }
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>

          <td className="col-2">
            <TextField
              variant="standard"
              name="monthlyPayLongTermClient"
              value={
                formData?.insuranceCoverage?.longTermCoClient
                  ?.monthlyPayLongTermClient
              }
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </td>
        </tr>
      </div>
    </>
  );
};
