import { Button, TextField, Tooltip } from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

export const AnnualIncome = (props) => {
  const { handleIncomeChange, handleIncomeField, incomeFields } = props;
  return (
    <>
      {" "}
      {/* --------------------------------YOUR CURRENT ANNUAL INCOME------------------- */}
      <div>
        <h5 className="mt-5" style={{ lineHeight: "2px" }}>
          YOUR CURRENT ANNUAL INCOME
        </h5>

        <div className="mt-4">
          <tr className="row">
            <td className="col-7">Client Name</td>
            <td
              className="col-3 d-flex justify-content-end"
              style={{ textWrap: "balance" }}
            >
              {" "}
              <label> Source (employment, bonus, rental)</label>
            </td>
            <td className="col-2 f-flex " style={{ textWrap: "nowrap" }}>
              {" "}
              <label>Amount (before taxes)</label>
            </td>
          </tr>

          <tr className="row mt-2">
            {incomeFields?.map((field, index) => (
              <div key={index} style={{ display: "flex" }} className="mt-2">
                <td className="col-6 mr-5" style={{ marginRight: "5.5rem" }}>
                  <TextField
                    variant="standard"
                    name="incomeClient"
                    value={field.incomeClient}
                    onChange={(event) => handleIncomeChange(index, event)}
                    // placeholder={`Field ${index + 1}`}
                    fullWidth
                  />
                </td>
                <td className="col-3" style={{ marginRight: "1.5rem" }}>
                  <TextField
                    variant="standard"
                    name="sourceIncome"
                    value={field.sourceIncome}
                    onChange={(event) => handleIncomeChange(index, event)}
                    fullWidth
                  />
                </td>
                <td className="col-2">
                  <TextField
                    variant="standard"
                    name="amountIncome"
                    value={field.amountIncome}
                    onChange={(event) => handleIncomeChange(index, event)}
                    fullWidth
                  />
                </td>
              </div>
            ))}
            <Tooltip title="Add New Field">
              <Button
                // variant="outlined"
                className="mt-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "auto",
                }}
              >
                <AddCircleOutlinedIcon onClick={() => handleIncomeField()} />
              </Button>
            </Tooltip>
          </tr>
        </div>
      </div>
    </>
  );
};
