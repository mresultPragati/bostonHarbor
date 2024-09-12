import { Checkbox } from "@mui/material";
import { BostonClientLabel } from "../FinancialStyle";

export const ProtectionPlan = (props) => {
  const { handleInputChange, formData } = props;

  return (
    <>
      {" "}
      {/* -------------------------------------YOUR PROTECTION PLAN------------------------ */}
      <h5 className="mt-5">YOUR PROTECTION PLAN</h5>
      <div>
        <tr className="row">
          <td className="col-8">
            <BostonClientLabel>ESTATE DOCUMENTS:</BostonClientLabel>
          </td>
          <td className="col-4">
            <BostonClientLabel>Tick Mark For YES</BostonClientLabel>
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
            <Checkbox
              name="checkWill"
              checked={formData?.protectionPlan?.checkWill || false}
              //   value={formData?.protectionPlan?.checkWillYes}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />{" "}
            {/* Yes */}
          </td>

          {/* <td className="col-2">
            <Checkbox
              name="checkWillNo"
              value={formData?.protectionPlan?.checkWillNo}
              onChange={(e) => handleInputChange(e)}
            />{" "}
            No
          </td> */}
        </tr>

        <tr className="row mt-2">
          <BostonClientLabel className="col-8 mr-2">
            Health-care proxy
          </BostonClientLabel>
          <td className="col-2">
            <Checkbox
              name="checkHealthCare"
              // value={formData?.protectionPlan?.checkHealthCare}
              checked={formData?.protectionPlan?.checkHealthCare || false}
              onChange={(e) => handleInputChange(e)}
            />{" "}
            {/* Yes */}
          </td>

          {/* <td className="col-2">
            <Checkbox
              value={formData?.protectionPlan?.checkHealthCareNo}
              onChange={(e) => handleInputChange(e)}
            />{" "}
            No
          </td> */}
        </tr>

        <tr className="row mt-2">
          <BostonClientLabel className="col-8 mr-2">
            Power of Attorney
          </BostonClientLabel>
          <td className="col-2">
            <Checkbox
              name="checkAttorney"
              // value={formData?.protectionPlan?.checkAttorney}
              checked={formData?.protectionPlan?.checkAttorney || false}
              onChange={(e) => handleInputChange(e)}
            />{" "}
            {/* Yes */}
          </td>

          {/* <td className="col-2">
            <Checkbox
              value={formData?.protectionPlan?.checkAttorneyNo}
              onChange={(e) => handleInputChange(e)}
            />{" "}
            No
          </td> */}
        </tr>

        <tr className="row mt-2">
          <BostonClientLabel className="col-8 mr-2">Trust(s)</BostonClientLabel>
          <td className="col-2">
            <Checkbox
              name="checkTrust"
              // value={formData?.protectionPlan?.checkTrust}
              checked={formData?.protectionPlan?.checkTrust || false}
              onChange={(e) => handleInputChange(e)}
            />{" "}
            {/* Yes */}
          </td>

          {/* <td className="col-2">
            <Checkbox
              value={formData?.protectionPlan?.checkTrustNo}
              onChange={(e) => handleInputChange(e)}
            />{" "}
            No
          </td> */}
        </tr>
      </div>
    </>
  );
};