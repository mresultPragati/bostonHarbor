import { TextField } from "@mui/material";
import { BostonClientLabel } from "../FinancialStyle";

export const AssetAndLiability = (props) => {
  const { handleInputChange, formData } = props;

  return (
    <>
      {" "}
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
                name="currentLibKb"
                value={formData.currentLibKb}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>

            <td className="col-2">
              <TextField
                variant="standard"
                name="annualLibKb"
                value={formData.annualLibKb}
                onChange={(e) => handleInputChange(e)}
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
                name="currentLibIRAs"
                value={formData.currentLibIRAs}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>

            <td className="col-2">
              <TextField
                variant="standard"
                name="annualLibIRAs"
                value={formData.annualLibIRAs}
                onChange={(e) => handleInputChange(e)}
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
                name="currentIRA"
                value={formData.currentIRA}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>

            <td className="col-2">
              <TextField
                variant="standard"
                name="annualIRA"
                value={formData.annualIRA}
                onChange={(e) => handleInputChange(e)}
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
                name="currentLibAcc"
                value={formData.currentLibAcc}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>

            <td className="col-2">
              <TextField
                variant="standard"
                name="annualLibAcc"
                value={formData.annualLibAcc}
                onChange={(e) => handleInputChange(e)}
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
                name="currentCashAcc"
                value={formData.currentCashAcc}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>

            <td className="col-2">
              <TextField
                variant="standard"
                name="annualCashAcc"
                value={formData.annualCashAcc}
                onChange={(e) => handleInputChange(e)}
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
                name="currentAnnuities"
                value={formData.currentAnnuities}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>

            <td className="col-2">
              <TextField
                variant="standard"
                name="annualAnnuities"
                value={formData.annualAnnuities}
                onChange={(e) => handleInputChange(e)}
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
                name="current529Plan"
                value={formData.current529Plan}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>

            <td className="col-2">
              <TextField
                variant="standard"
                name="annual529Plan"
                value={formData.annual529Plan}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>
          </tr>
          <tr className="row mt-2">
            <BostonClientLabel className="col-8 mr-2">Home</BostonClientLabel>
            <td className="col-2">
              <TextField
                variant="standard"
                name="currentLibHome"
                value={formData.currentLibHome}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>

            <td className="col-2">
              <TextField
                variant="standard"
                name="annualLibHome"
                value={formData.annualLibHome}
                onChange={(e) => handleInputChange(e)}
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
                name="currentEstate"
                value={formData.currentEstate}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>

            <td className="col-2">
              <TextField
                variant="standard"
                name="annualEstate"
                value={formData.annualEstate}
                onChange={(e) => handleInputChange(e)}
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
                name="currentBusiness"
                value={formData.currentBusiness}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>

            <td className="col-2">
              <TextField
                variant="standard"
                name="annualBusiness"
                value={formData.annualBusiness}
                onChange={(e) => handleInputChange(e)}
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
                name="currentOtherLib"
                value={formData.currentOtherLib}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>

            <td className="col-2">
              <TextField
                variant="standard"
                name="annualOtherLib"
                value={formData.annualOtherLib}
                onChange={(e) => handleInputChange(e)}
                fullWidth
              />
            </td>
          </tr>
        </div>
      </div>
    </>
  );
};
